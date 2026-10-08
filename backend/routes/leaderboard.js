const express = require('express');
const User = require('../models/User');
const { protect, optionalAuth } = require('../middleware/auth');

const router = express.Router();

const PUBLIC_FIELDS = 'username avatar gems xp';

function parseLimit(value, fallback = 50) {
  const parsed = parseInt(value, 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(Math.max(parsed, 1), 100);
}

async function rankedUsers(query, limit) {
  const users = await User.find(query)
    .select(PUBLIC_FIELDS)
    .sort({ gems: -1, xp: -1, username: 1 })
    .limit(parseLimit(limit));

  return users.map((user, index) => ({
    _id: user._id,
    username: user.username,
    avatar: user.avatar,
    gems: user.gems || 0,
    rank: index + 1
  }));
}

function sendRanked(res, rankedLeaderboard) {
  res.json({
    success: true,
    count: rankedLeaderboard.length,
    data: rankedLeaderboard
  });
}

// @route   GET /api/leaderboard/global
// @desc    Get global leaderboard
// @access  Public
router.get('/global', optionalAuth, async (req, res) => {
  try {
    const rankedLeaderboard = await rankedUsers({ isActive: true }, req.query.limit);
    sendRanked(res, rankedLeaderboard);
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
    const rankedLeaderboard = await rankedUsers({
      university: req.params.universityId,
      isActive: true
    }, req.query.limit);

    sendRanked(res, rankedLeaderboard);
  } catch (error) {
    console.error('Get university leaderboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/leaderboard/faculty
// @desc    Get faculty-specific leaderboard
// @access  Public
router.get('/faculty', optionalAuth, async (req, res) => {
  try {
    const { faculty, university, limit = 50 } = req.query;

    if (!faculty) {
      return res.status(400).json({
        success: false,
        message: 'Faculty parameter is required'
      });
    }

    const query = {
      faculty,
      isActive: true
    };

    if (university) {
      query.university = university;
    }

    const rankedLeaderboard = await rankedUsers(query, limit);
    sendRanked(res, rankedLeaderboard);
  } catch (error) {
    console.error('Get faculty leaderboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/leaderboard/department
// @desc    Get department-specific leaderboard
// @access  Public
router.get('/department', optionalAuth, async (req, res) => {
  try {
    const { department, faculty, university, limit = 50 } = req.query;

    if (!department) {
      return res.status(400).json({
        success: false,
        message: 'Department parameter is required'
      });
    }

    const query = {
      department,
      isActive: true
    };

    if (faculty) {
      query.faculty = faculty;
    }

    if (university) {
      query.university = university;
    }

    const rankedLeaderboard = await rankedUsers(query, limit);
    sendRanked(res, rankedLeaderboard);
  } catch (error) {
    console.error('Get department leaderboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/leaderboard/level
// @desc    Get level-specific leaderboard
// @access  Public
router.get('/level', optionalAuth, async (req, res) => {
  try {
    const { academicLevel, department, faculty, university, limit = 50 } = req.query;

    if (!academicLevel) {
      return res.status(400).json({
        success: false,
        message: 'Academic level parameter is required'
      });
    }

    let query = {
      academicLevel: academicLevel,
      isActive: true
    };

    if (department) {
      query.department = department;
    }

    if (faculty) {
      query.faculty = faculty;
    }

    if (university) {
      query.university = university;
    }

    const rankedLeaderboard = await rankedUsers(query, limit);
    sendRanked(res, rankedLeaderboard);
  } catch (error) {
    console.error('Get level leaderboard error:', error);
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
    const baseRankQuery = {
      isActive: true,
      gems: { $gt: req.user.gems || 0 }
    };

    const globalRank = await User.countDocuments(baseRankQuery) + 1;

    let universityRank = null;
    if (req.user.university) {
      universityRank = await User.countDocuments({
        ...baseRankQuery,
        university: req.user.university
      }) + 1;
    }

    let facultyRank = null;
    if (req.user.university && req.user.faculty) {
      facultyRank = await User.countDocuments({
        ...baseRankQuery,
        university: req.user.university,
        faculty: req.user.faculty
      }) + 1;
    }

    let departmentRank = null;
    if (req.user.university && req.user.department) {
      const departmentQuery = {
        ...baseRankQuery,
        university: req.user.university,
        department: req.user.department
      };
      if (req.user.faculty) {
        departmentQuery.faculty = req.user.faculty;
      }
      departmentRank = await User.countDocuments(departmentQuery) + 1;
    }

    res.json({
      success: true,
      data: {
        globalRank,
        universityRank,
        facultyRank,
        departmentRank,
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
