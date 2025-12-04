const express = require('express');
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
  try {
    const chapter = await Chapter.findById(req.params.id)
      .populate('course');

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    // Check if user already completed this chapter
    const existingCompletion = req.user.completedChapters.find(
      cc => cc.chapter.toString() === req.params.id
    );

    if (existingCompletion) {
      return res.status(400).json({
        success: false,
        message: 'Chapter already completed'
      });
    }

    // Add completion
    const isFirstCompletion = req.user.completedChapters.length === 0;
    req.user.completedChapters.push({
      chapter: req.params.id,
      firstCompletion: isFirstCompletion
    });

    // Award gems for first completion
    if (isFirstCompletion) {
      req.user.gems += 3; // 3 gems for completing first chapter ever
    } else {
      req.user.gems += 1; // 1 gem for subsequent chapter completions
    }

    // Update XP and level
    req.user.xp += 10; // 10 XP per chapter
    req.user.level = Math.floor(req.user.xp / 100) + 1; // Level up every 100 XP

    await req.user.save();

    // Update course student count
    await chapter.course.updateStudentCount();

    res.json({
      success: true,
      message: 'Chapter completed successfully',
      data: {
        gemsEarned: isFirstCompletion ? 3 : 1,
        newGems: req.user.gems,
        newXp: req.user.xp,
        newLevel: req.user.level
      }
    });
  } catch (error) {
    console.error('Complete chapter error:', error);
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
