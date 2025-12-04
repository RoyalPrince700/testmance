const express = require('express');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile with detailed stats
// @access  Private
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('university', 'name shortName location')
      .populate({
        path: 'completedChapters.chapter',
        populate: {
          path: 'course',
          select: 'title code'
        }
      });

    const stats = user.getStats();

    // Get recent quiz attempts
    const recentQuizzes = user.quizAttempts
      .sort((a, b) => b.attemptedAt - a.attemptedAt)
      .slice(0, 5)
      .map(attempt => ({
        score: attempt.score,
        totalQuestions: attempt.totalQuestions,
        gemsEarned: attempt.gemsEarned,
        attemptedAt: attempt.attemptedAt
      }));

    res.json({
      success: true,
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          university: user.university,
          gems: user.gems,
          level: user.level,
          xp: user.xp,
          lastLogin: user.lastLogin,
          joinedAt: user.createdAt
        },
        stats,
        recentQuizzes,
        completedChapters: user.completedChapters.length
      }
    });
  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/users/stats
// @desc    Get user learning statistics
// @access  Private
router.get('/stats', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate({
        path: 'completedChapters.chapter',
        populate: {
          path: 'course',
          select: 'title category'
        }
      });

    // Calculate detailed stats
    const totalQuizzes = user.quizAttempts.length;
    const passedQuizzes = user.quizAttempts.filter(a => a.score >= 70).length;
    const averageScore = totalQuizzes > 0
      ? user.quizAttempts.reduce((sum, a) => sum + a.score, 0) / totalQuizzes
      : 0;

    // Course completion stats
    const courseStats = {};
    user.completedChapters.forEach(cc => {
      const courseId = cc.chapter.course._id.toString();
      const courseTitle = cc.chapter.course.title;
      const category = cc.chapter.course.category;

      if (!courseStats[courseId]) {
        courseStats[courseId] = {
          title: courseTitle,
          category,
          completedChapters: 0
        };
      }
      courseStats[courseId].completedChapters++;
    });

    // Achievement progress
    const achievements = {
      firstChapter: user.completedChapters.length > 0,
      firstQuiz: totalQuizzes > 0,
      perfectScore: user.quizAttempts.some(a => a.score === 100),
      quizMaster: passedQuizzes >= 10,
      scholar: user.level >= 5
    };

    res.json({
      success: true,
      data: {
        overview: {
          gems: user.gems,
          level: user.level,
          xp: user.xp,
          completedChapters: user.completedChapters.length,
          totalQuizzes,
          passedQuizzes,
          averageScore: Math.round(averageScore * 100) / 100
        },
        courseStats: Object.values(courseStats),
        achievements,
        recentActivity: {
          lastLogin: user.lastLogin,
          quizzesThisWeek: user.quizAttempts.filter(a =>
            a.attemptedAt > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          ).length,
          chaptersThisWeek: user.completedChapters.filter(cc =>
            cc.completedAt > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          ).length
        }
      }
    });
  } catch (error) {
    console.error('Get user stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/users/avatar
// @desc    Update user avatar
// @access  Private
router.put('/avatar', protect, async (req, res) => {
  try {
    const { avatar } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { avatar },
      { new: true }
    ).populate('university', 'name shortName');

    res.json({
      success: true,
      message: 'Avatar updated successfully',
      data: { user }
    });
  } catch (error) {
    console.error('Update avatar error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
