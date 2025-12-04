const express = require('express');
const User = require('../models/User');
const { protect, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/leaderboard/global
// @desc    Get global leaderboard
// @access  Public
router.get('/global', optionalAuth, async (req, res) => {
  try {
    const { limit = 50, university } = req.query;
    let query = { isActive: true };

    if (university) {
      query.university = university;
    }

    const leaderboard = await User.find(query)
      .populate('university', 'name shortName')
      .select('username avatar gems level xp completedChapters quizAttempts')
      .sort({ gems: -1, xp: -1 })
      .limit(parseInt(limit));

    // Add rank to each user
    const rankedLeaderboard = leaderboard.map((user, index) => ({
      ...user.toObject(),
      rank: index + 1,
      stats: user.getStats()
    }));

    res.json({
      success: true,
      count: rankedLeaderboard.length,
      data: rankedLeaderboard
    });
  } catch (error) {
    console.error('Get global leaderboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/leaderboard/university/:universityId
// @desc    Get university-specific leaderboard
// @access  Public
router.get('/university/:universityId', optionalAuth, async (req, res) => {
  try {
    const { limit = 25 } = req.query;

    const leaderboard = await User.find({
      university: req.params.universityId,
      isActive: true
    })
    .populate('university', 'name shortName')
    .select('username avatar gems level xp completedChapters quizAttempts')
    .sort({ gems: -1, xp: -1 })
    .limit(parseInt(limit));

    const rankedLeaderboard = leaderboard.map((user, index) => ({
      ...user.toObject(),
      rank: index + 1,
      stats: user.getStats()
    }));

    res.json({
      success: true,
      count: rankedLeaderboard.length,
      data: rankedLeaderboard
    });
  } catch (error) {
    console.error('Get university leaderboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/leaderboard/user/rank
// @desc    Get current user's rank
// @access  Private
router.get('/user/rank', protect, async (req, res) => {
  try {
    // Global rank
    const globalRank = await User.countDocuments({
      isActive: true,
      $or: [
        { gems: { $gt: req.user.gems } },
        { gems: req.user.gems, xp: { $gt: req.user.xp } }
      ]
    }) + 1;

    // University rank
    const universityRank = await User.countDocuments({
      university: req.user.university,
      isActive: true,
      $or: [
        { gems: { $gt: req.user.gems } },
        { gems: req.user.gems, xp: { $gt: req.user.xp } }
      ]
    }) + 1;

    res.json({
      success: true,
      data: {
        globalRank,
        universityRank,
        userStats: req.user.getStats()
      }
    });
  } catch (error) {
    console.error('Get user rank error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/leaderboard/stats
// @desc    Get leaderboard statistics
// @access  Public
router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ isActive: true });
    const totalGems = await User.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: null, total: { $sum: '$gems' } } }
    ]);

    const topPerformers = await User.find({ isActive: true })
      .sort({ gems: -1 })
      .limit(3)
      .select('username gems')
      .populate('university', 'shortName');

    res.json({
      success: true,
      data: {
        totalUsers,
        totalGems: totalGems[0]?.total || 0,
        topPerformers
      }
    });
  } catch (error) {
    console.error('Get leaderboard stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
