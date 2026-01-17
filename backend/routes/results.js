const express = require('express');
const Result = require('../models/Result');
const Course = require('../models/Course');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/results
// @desc    Get all results for the current user
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const userId = req.user._id;

    const results = await Result.find({ user: userId })
      .populate('course', 'title code category difficulty')
      .sort({ completedAt: -1 });

    // Get grade breakdown for reference
    const gradeBreakdown = Result.getGradeBreakdown();

    const resultsWithStats = results.map(result => {
      const course = result.course;
      return {
        _id: result._id,
        course: {
          _id: course._id,
          title: course.title,
          code: course.code,
          category: course.category,
          difficulty: course.difficulty
        },
        caScore: result.caScore,
        examScore: result.examScore,
        totalScore: result.totalScore,
        grade: result.grade,
        percentage: result.percentage,
        caCompletedAt: result.caCompletedAt,
        examCompletedAt: result.examCompletedAt,
        completedAt: result.completedAt,
        isComplete: result.isComplete
      };
    });

    res.json({
      success: true,
      count: resultsWithStats.length,
      data: resultsWithStats,
      gradeBreakdown
    });

  } catch (error) {
    console.error('Get results error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching results'
    });
  }
});

// @route   GET /api/results/:courseId
// @desc    Get results for a specific course
// @access  Private
router.get('/:courseId', protect, async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    // Check if user is enrolled in the course
    const user = await User.findById(userId);
    if (!user || !user.enrolledCourses.includes(courseId)) {
      return res.status(403).json({
        success: false,
        message: 'You are not enrolled in this course'
      });
    }

    const result = await Result.findOne({
      user: userId,
      course: courseId
    }).populate('course', 'title code category difficulty description');

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'No results found for this course'
      });
    }

    // Get grade breakdown
    const gradeBreakdown = Result.getGradeBreakdown();

    // Get CA and Exam details if available
    const CA = require('../models/CA');
    const Exam = require('../models/Exam');

    const caAttempt = await CA.findOne({
      user: userId,
      course: courseId,
      isCompleted: true
    }).select('score totalQuestions completedAt timeSpent');

    const examAttempt = await Exam.findOne({
      user: userId,
      course: courseId,
      isCompleted: true
    }).select('score totalQuestions completedAt timeSpent');

    const resultData = {
      _id: result._id,
      course: result.course,
      caScore: result.caScore,
      examScore: result.examScore,
      totalScore: result.totalScore,
      grade: result.grade,
      percentage: result.percentage,
      caCompletedAt: result.caCompletedAt,
      examCompletedAt: result.examCompletedAt,
      completedAt: result.completedAt,
      isComplete: result.isComplete,
      gradeBreakdown,
      caDetails: caAttempt ? {
        score: caAttempt.score,
        totalQuestions: caAttempt.totalQuestions,
        completedAt: caAttempt.completedAt,
        timeSpent: caAttempt.timeSpent,
        percentage: Math.round((caAttempt.score / caAttempt.totalQuestions) * 100 * 100) / 100
      } : null,
      examDetails: examAttempt ? {
        score: examAttempt.score,
        totalQuestions: examAttempt.totalQuestions,
        completedAt: examAttempt.completedAt,
        timeSpent: examAttempt.timeSpent,
        percentage: Math.round((examAttempt.score / examAttempt.totalQuestions) * 100 * 100) / 100
      } : null
    };

    res.json({
      success: true,
      data: resultData
    });

  } catch (error) {
    console.error('Get course results error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching course results'
    });
  }
});

// @route   GET /api/results/:courseId/grade
// @desc    Calculate and return grade for a course
// @access  Private
router.get('/:courseId/grade', protect, async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    const result = await Result.findOne({
      user: userId,
      course: courseId
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'No results found for this course'
      });
    }

    // Recalculate grade (in case of any updates)
    result.calculateGrade();
    await result.save();

    const gradeBreakdown = Result.getGradeBreakdown();

    res.json({
      success: true,
      data: {
        courseId,
        caScore: result.caScore,
        examScore: result.examScore,
        totalScore: result.totalScore,
        grade: result.grade,
        percentage: result.percentage,
        gradeBreakdown,
        gradeDescription: gradeBreakdown[result.grade]?.description || 'Unknown'
      }
    });

  } catch (error) {
    console.error('Get grade error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while calculating grade'
    });
  }
});

// @route   GET /api/results/summary
// @desc    Get results summary for dashboard
// @access  Private
router.get('/summary/stats', protect, async (req, res) => {
  try {
    const userId = req.user._id;

    const results = await Result.find({
      user: userId,
      isComplete: true
    }).populate('course', 'title code');

    const summary = {
      totalCourses: results.length,
      averageScore: 0,
      gradeDistribution: {
        A: 0, B: 0, C: 0, D: 0, E: 0, F: 0
      },
      recentResults: []
    };

    if (results.length > 0) {
      const totalScore = results.reduce((sum, result) => sum + result.totalScore, 0);
      summary.averageScore = Math.round((totalScore / results.length) * 100) / 100;

      results.forEach(result => {
        if (summary.gradeDistribution.hasOwnProperty(result.grade)) {
          summary.gradeDistribution[result.grade]++;
        }
      });

      // Get recent 5 results
      summary.recentResults = results
        .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
        .slice(0, 5)
        .map(result => ({
          course: result.course,
          totalScore: result.totalScore,
          grade: result.grade,
          completedAt: result.completedAt
        }));
    }

    res.json({
      success: true,
      data: summary
    });

  } catch (error) {
    console.error('Get results summary error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching results summary'
    });
  }
});

module.exports = router;