const express = require('express');
const User = require('../models/User');
const University = require('../models/University');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All admin routes require authentication and admin role
router.use(protect);
router.use(authorize('admin'));

// @route   GET /api/admin/users
// @desc    Get all users with pagination and filters
// @access  Admin
router.get('/users', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter = {};
    if (req.query.search) {
      filter.$or = [
        { username: { $regex: req.query.search, $options: 'i' } },
        { email: { $regex: req.query.search, $options: 'i' } }
      ];
    }
    if (req.query.university) {
      filter.university = req.query.university;
    }
    if (req.query.isActive !== undefined) {
      filter.isActive = req.query.isActive === 'true';
    }
    if (req.query.isAdmin !== undefined) {
      filter.isAdmin = req.query.isAdmin === 'true';
    }

    const users = await User.find(filter)
      .populate('university', 'name shortName')
      .select('-password -googleProfile')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await User.countDocuments(filter);

    res.json({
      success: true,
      data: {
        users,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/admin/stats
// @desc    Get admin dashboard statistics
// @access  Admin
router.get('/stats', async (req, res) => {
  try {
    // User statistics
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ isActive: true });
    const newUsersThisMonth = await User.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    });

    // Quiz statistics
    const usersWithQuizzes = await User.countDocuments({
      'quizAttempts.0': { $exists: true }
    });
    const totalQuizAttempts = await User.aggregate([
      { $unwind: '$quizAttempts' },
      { $count: 'total' }
    ]);
    const totalQuizCount = totalQuizAttempts.length > 0 ? totalQuizAttempts[0].total : 0;

    // Chapter completion statistics
    const usersWithCompletedChapters = await User.countDocuments({
      'completedChapters.0': { $exists: true }
    });
    const totalCompletedChapters = await User.aggregate([
      { $unwind: '$completedChapters' },
      { $count: 'total' }
    ]);
    const totalChapterCount = totalCompletedChapters.length > 0 ? totalCompletedChapters[0].total : 0;

    // University statistics
    const universityStats = await User.aggregate([
      {
        $lookup: {
          from: 'universities',
          localField: 'university',
          foreignField: '_id',
          as: 'universityInfo'
        }
      },
      {
        $unwind: { path: '$universityInfo', preserveNullAndEmptyArrays: true }
      },
      {
        $group: {
          _id: '$universityInfo.name',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 10
      }
    ]);

    // Level distribution
    const levelStats = await User.aggregate([
      {
        $group: {
          _id: '$level',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id': 1 }
      }
    ]);

    // Recent activity (last 7 days)
    const recentActivity = await User.aggregate([
      {
        $match: {
          $or: [
            { 'quizAttempts.attemptedAt': { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
            { 'completedChapters.completedAt': { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } }
          ]
        }
      },
      {
        $project: {
          username: 1,
          avatar: 1,
          recentQuizzes: {
            $filter: {
              input: '$quizAttempts',
              as: 'attempt',
              cond: { $gte: ['$$attempt.attemptedAt', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)] }
            }
          },
          recentChapters: {
            $filter: {
              input: '$completedChapters',
              as: 'chapter',
              cond: { $gte: ['$$chapter.completedAt', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)] }
            }
          }
        }
      },
      {
        $project: {
          username: 1,
          avatar: 1,
          recentActivityCount: {
            $add: [
              { $size: '$recentQuizzes' },
              { $size: '$recentChapters' }
            ]
          }
        }
      },
      {
        $sort: { recentActivityCount: -1 }
      },
      {
        $limit: 10
      }
    ]);

    res.json({
      success: true,
      data: {
        overview: {
          totalUsers,
          activeUsers,
          newUsersThisMonth,
          usersWithQuizzes,
          totalQuizAttempts: totalQuizCount,
          usersWithCompletedChapters,
          totalCompletedChapters: totalChapterCount
        },
        universityStats,
        levelStats,
        recentActivity
      }
    });
  } catch (error) {
    console.error('Get admin stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/admin/users/:userId
// @desc    Update user by admin
// @access  Admin
router.put('/users/:userId', async (req, res) => {
  try {
    const { username, email, isAdmin, isActive, gems, level } = req.body;

    const updateData = {};
    if (username !== undefined) updateData.username = username;
    if (email !== undefined) updateData.email = email;
    if (isAdmin !== undefined) updateData.isAdmin = isAdmin;
    if (isActive !== undefined) updateData.isActive = isActive;
    if (gems !== undefined) updateData.gems = gems;
    if (level !== undefined) updateData.level = level;

    const user = await User.findByIdAndUpdate(
      req.params.userId,
      updateData,
      { new: true, runValidators: true }
    ).populate('university', 'name shortName');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'User updated successfully',
      data: { user }
    });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   DELETE /api/admin/users/:userId
// @desc    Delete user by admin
// @access  Admin
router.delete('/users/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Prevent deleting other admins
    if (user.isAdmin && user._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Cannot delete other admin users'
      });
    }

    await User.findByIdAndDelete(req.params.userId);

    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/admin/universities
// @desc    Get all universities with stats
// @access  Admin
router.get('/universities', async (req, res) => {
  try {
    const universities = await University.find()
      .sort({ name: 1 });

    // Get user count for each university
    const universityStats = await Promise.all(
      universities.map(async (university) => {
        const userCount = await User.countDocuments({ university: university._id });
        return {
          ...university.toObject(),
          userCount
        };
      })
    );

    res.json({
      success: true,
      data: { universities: universityStats }
    });
  } catch (error) {
    console.error('Get universities error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/admin/make-admin/:userId
// @desc    Make a user an admin (for testing/development)
// @access  Admin
router.post('/make-admin/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    user.isAdmin = true;
    await user.save();

    res.json({
      success: true,
      message: 'User promoted to admin successfully',
      data: { user }
    });
  } catch (error) {
    console.error('Make admin error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
