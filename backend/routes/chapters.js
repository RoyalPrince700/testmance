const express = require('express');
const mongoose = require('mongoose');
const Chapter = require('../models/Chapter');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/chapters/:id
// @desc    Get single chapter with content
// @access  Public (but content might be restricted)
router.get('/:id', async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id)
      .populate('course', 'title code university')
      .populate('quiz', 'title description passingScore timeLimit');

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    if (!chapter.isPublished || !chapter.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not available'
      });
    }

    res.json({
      success: true,
      data: chapter
    });
  } catch (error) {
    console.error('Get chapter error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/chapters/:id/complete
// @desc    Mark chapter as completed
// @access  Private
router.post('/:id/complete', protect, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const chapter = await Chapter.findById(req.params.id)
      .populate('course')
      .session(session);

    if (!chapter) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    // Use atomic operation to check and update in one query to prevent race conditions
    // This ensures that even if multiple requests come simultaneously, only one will succeed
    const userId = req.user._id;
    const chapterId = req.params.id;

    // Use findOneAndUpdate with $addToSet to ensure atomic operation
    // $addToSet prevents duplicates - if chapter already exists, it won't add it again
    // First, check if chapter is already completed
    const userBeforeUpdate = await User.findById(userId).session(session);
    
    if (!userBeforeUpdate) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if user already completed this chapter
    const existingCompletion = userBeforeUpdate.completedChapters.find(
      cc => cc.chapter.toString() === chapterId
    );

    if (existingCompletion) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: 'Chapter already completed',
        data: {
          gemsEarned: 0,
          newGems: userBeforeUpdate.gems
        }
      });
    }

    // Atomic update: Use findOneAndUpdate with condition to prevent race conditions
    // Only update if chapter is NOT already in completedChapters array
    const isFirstCompletion = userBeforeUpdate.completedChapters.length === 0;
    const gemsEarned = 3;

    // Use findOneAndUpdate with a condition that checks chapter is not in array
    // This ensures atomic operation - only updates if condition is met
    const chapterObjectId = new mongoose.Types.ObjectId(chapterId);
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: userId,
        'completedChapters.chapter': { $ne: chapterObjectId } // Only if chapter NOT in array
      },
      {
        $push: {
          completedChapters: {
            chapter: chapterObjectId,
            completedAt: new Date(),
            firstCompletion: isFirstCompletion
          }
        },
        $inc: {
          gems: gemsEarned
        }
      },
      {
        new: true,
        session: session
      }
    );

    // If updatedUser is null, it means the chapter was already completed (condition failed)
    if (!updatedUser) {
      // Re-fetch user to get current state
      const currentUser = await User.findById(userId).session(session);
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: 'Chapter already completed',
        data: {
          gemsEarned: 0,
          newGems: currentUser.gems
        }
      });
    }

    // Update course student count
    await chapter.course.updateStudentCount();

    await session.commitTransaction();
    session.endSession();

    res.json({
      success: true,
      message: 'Chapter completed successfully',
      data: {
        gemsEarned: gemsEarned,
        newGems: updatedUser.gems
      }
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error('Complete chapter error:', error);
    
    // Check if it's a duplicate key error (shouldn't happen with our setup, but just in case)
    if (error.code === 11000 || error.message?.includes('duplicate')) {
      return res.status(400).json({
        success: false,
        message: 'Chapter already completed'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/chapters/:id/progress
// @desc    Get user's progress on a chapter
// @access  Private
router.get('/:id/progress', protect, async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    const completion = req.user.completedChapters.find(
      cc => cc.chapter.toString() === req.params.id
    );

    res.json({
      success: true,
      data: {
        chapterId: req.params.id,
        isCompleted: !!completion,
        completedAt: completion ? completion.completedAt : null,
        firstCompletion: completion ? completion.firstCompletion : false
      }
    });
  } catch (error) {
    console.error('Get chapter progress error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/chapters
// @desc    Create a new chapter (admin only)
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const chapter = await Chapter.create(req.body);

    // Add chapter to course
    await require('../models/Course').findByIdAndUpdate(
      chapter.course,
      { $push: { chapters: chapter._id } }
    );

    res.status(201).json({
      success: true,
      message: 'Chapter created successfully',
      data: chapter
    });
  } catch (error) {
    console.error('Create chapter error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
