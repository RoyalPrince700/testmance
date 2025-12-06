const express = require('express');
const Course = require('../models/Course');
const Chapter = require('../models/Chapter');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/courses
// @desc    Get all published courses (optionally filter by university)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { university, category, difficulty, search } = req.query;
    let query = { isPublished: true, isActive: true };

    if (university) query.university = university;
    if (category) query.category = category;
    if (difficulty) query.difficulty = difficulty;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { code: { $regex: search, $options: 'i' } }
      ];
    }

    const courses = await Course.find(query)
      .populate('university', 'name shortName')
      .populate('chapters', 'title order')
      .select('title code description thumbnail category difficulty duration totalStudents averageRating chapterCount')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/courses/user/enrolled
// @desc    Get user's enrolled courses
// @access  Private
router.get('/user/enrolled', protect, async (req, res) => {
  try {
    const User = require('../models/User');
    const user = await User.findById(req.user._id)
      .populate({
        path: 'enrolledCourses',
        match: { isPublished: true, isActive: true },
        populate: {
          path: 'university',
          select: 'name shortName'
        }
      });

    const enrolledCourses = user.enrolledCourses.filter(course => course !== null);

    res.json({
      success: true,
      count: enrolledCourses.length,
      data: enrolledCourses
    });
  } catch (error) {
    console.error('Get enrolled courses error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/courses/:id
// @desc    Get single course with chapters
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('university', 'name shortName location')
      .populate({
        path: 'chapters',
        match: { isPublished: true, isActive: true },
        select: 'title description order estimatedTime quiz thumbnail',
        options: { sort: { order: 1 } }
      });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    if (!course.isPublished || !course.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Course not available'
      });
    }

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/courses/:id/chapters
// @desc    Get chapters for a course
// @access  Public
router.get('/:id/chapters', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    const chapters = await Chapter.find({
      course: req.params.id,
      isPublished: true,
      isActive: true
    })
    .select('title description order estimatedTime thumbnail quiz')
    .sort({ order: 1 });

    res.json({
      success: true,
      count: chapters.length,
      data: chapters
    });
  } catch (error) {
    console.error('Get course chapters error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/courses/:id/progress
// @desc    Get user's progress in a course
// @access  Private
router.get('/:id/progress', protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Get user's completed chapters for this course
    const user = await require('../models/User').findById(req.user._id)
      .populate({
        path: 'completedChapters.chapter',
        match: { course: req.params.id }
      });

    const completedChapterIds = user.completedChapters
      .filter(cc => cc.chapter && cc.chapter.course.toString() === req.params.id)
      .map(cc => cc.chapter._id.toString());

    const totalChapters = course.chapters.length;
    const completedCount = completedChapterIds.length;
    const progressPercentage = totalChapters > 0 ? (completedCount / totalChapters) * 100 : 0;

    res.json({
      success: true,
      data: {
        courseId: course._id,
        totalChapters,
        completedChapters: completedCount,
        progressPercentage: Math.round(progressPercentage),
        completedChapterIds
      }
    });
  } catch (error) {
    console.error('Get course progress error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/courses/:id/enroll
// @desc    Enroll user in a course
// @access  Private
router.post('/:id/enroll', protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    if (!course.isPublished || !course.isActive) {
      return res.status(400).json({
        success: false,
        message: 'Course is not available for enrollment'
      });
    }

    const User = require('../models/User');
    const user = await User.findById(req.user._id);

    const isEnrolled = user.enrolledCourses.some(
      enrolledId => enrolledId.toString() === course._id.toString()
    );

    if (isEnrolled) {
      return res.status(400).json({
        success: false,
        message: 'Already enrolled in this course'
      });
    }

    user.enrolledCourses.push(course._id);
    await user.save();

    // Update course total students count (count enrolled students)
    await course.updateStudentCount();

    res.json({
      success: true,
      message: 'Successfully enrolled in course',
      data: { courseId: course._id }
    });
  } catch (error) {
    console.error('Enroll course error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/courses/:id/unenroll
// @desc    Unenroll user from a course
// @access  Private
router.post('/:id/unenroll', protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    const User = require('../models/User');
    const user = await User.findById(req.user._id);

    const isEnrolled = user.enrolledCourses.some(
      enrolledId => enrolledId.toString() === course._id.toString()
    );

    if (!isEnrolled) {
      return res.status(400).json({
        success: false,
        message: 'Not enrolled in this course'
      });
    }

    user.enrolledCourses = user.enrolledCourses.filter(
      courseId => courseId.toString() !== course._id.toString()
    );
    await user.save();

    // Update course total students count (count enrolled students)
    await course.updateStudentCount();

    res.json({
      success: true,
      message: 'Successfully unenrolled from course',
      data: { courseId: course._id }
    });
  } catch (error) {
    console.error('Unenroll course error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/courses
// @desc    Create a new course (admin only)
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const course = await Course.create(req.body);

    // Add course to university
    await require('../models/University').findByIdAndUpdate(
      course.university,
      { $push: { courses: course._id } }
    );

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: course
    });
  } catch (error) {
    console.error('Create course error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
