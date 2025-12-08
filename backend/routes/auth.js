const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const University = require('../models/University');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

// Passport Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || `${process.env.BACKEND_URL || 'http://localhost:5000'}/api/auth/google/callback`
},
async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user already exists with this Google ID
    let user = await User.findOne({ googleId: profile.id });

    if (user) {
      // Update profile info if needed
      user.googleProfile = profile;
      user.lastLogin = new Date();
      await user.save();
      return done(null, user);
    }

    // Check if user exists with same email
    const existingUser = await User.findOne({ email: profile.emails[0].value });

    if (existingUser) {
      // Link Google account to existing user
      existingUser.googleId = profile.id;
      existingUser.googleProfile = profile;
      existingUser.lastLogin = new Date();
      await existingUser.save();
      return done(null, existingUser);
    }

    // Create new user - but we need university, so we'll redirect to registration page
    // For now, create with a default university or require additional setup
    const defaultUniversity = await University.findOne(); // Get first university as default

    if (!defaultUniversity) {
      return done(new Error('No universities available. Please contact administrator.'), null);
    }

    user = new User({
      email: profile.emails[0].value,
      googleId: profile.id,
      googleProfile: profile,
      university: defaultUniversity._id,
      avatar: null, // Don't auto-assign avatar from Google profile - user must choose manually
      isProfileSetupComplete: false // Mark as needing profile setup
    });

    await user.save();

    // Update university student count
    await defaultUniversity.updateStudentCount();

    done(null, user);
  } catch (error) {
    console.error('Google OAuth error:', error);
    done(error, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Manual registration/login removed - only Google OAuth is supported

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('university', 'name shortName')
      .select('-password');

    // Return user with populated university
    const updatedUser = await User.findById(req.user._id)
      .populate('university', 'name shortName')
      .select('-password');

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: { user: updatedUser }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/auth/setup-profile
// @desc    Complete profile setup for new users (username/avatar selection)
// @access  Private
router.post('/setup-profile', protect, [
  body('username')
    .isLength({ min: 3, max: 30 })
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username must be 3-30 characters and contain only letters, numbers, and underscores'),
  body('avatar')
    .optional()
    .isString()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { username, avatar } = req.body;

    // Check if username already exists
    const existingUser = await User.findOne({
      username: { $regex: new RegExp(`^${username}$`, 'i') }
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Username already taken'
      });
    }

    // Capitalize first letter of username
    const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);

    // Update user profile
    const updateData = {
      username: capitalizedUsername,
      isProfileSetupComplete: true
    };

    if (avatar) {
      updateData.avatar = avatar;
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { new: true, runValidators: true }
    ).populate('university', 'name shortName');

    res.json({
      success: true,
      message: 'Profile setup completed successfully',
      data: { user }
    });
  } catch (error) {
    console.error('Profile setup error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during profile setup'
    });
  }
});

// @route   PUT /api/auth/update-profile
// @desc    Update user profile
// @access  Private
router.put('/update-profile', protect, [
  body('username')
    .optional()
    .isLength({ min: 3, max: 30 })
    .matches(/^[a-zA-Z0-9_]+$/),
  body('email')
    .optional()
    .isEmail()
    .normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { username, email, university, faculty, department, academicLevel, preferredAnalogy, profileVisibility } = req.body;
    const updateData = {};

    if (preferredAnalogy !== undefined) {
      updateData.preferredAnalogy = preferredAnalogy || null;
    }

    if (profileVisibility !== undefined) {
      updateData.profileVisibility = profileVisibility === true || profileVisibility === 'true';
    }

    if (university) {
      const universityExists = await University.findById(university);
      if (!universityExists) {
        return res.status(400).json({
          success: false,
          message: 'Selected university does not exist'
        });
      }
      updateData.university = university;
    }

    if (faculty !== undefined) {
      updateData.faculty = faculty || null;
    }

    if (department !== undefined) {
      updateData.department = department || null;
    }

    if (academicLevel !== undefined) {
      updateData.academicLevel = academicLevel || null;
    }

    if (username && username !== req.user.username) {
      // Capitalize first letter of username
      const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
      
      // Check for existing username (case-insensitive)
      const existingUser = await User.findOne({ 
        username: { $regex: new RegExp(`^${capitalizedUsername}$`, 'i') } 
      });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'Username already taken'
        });
      }
      updateData.username = capitalizedUsername;
    }

    if (email && email !== req.user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'Email already registered'
        });
      }
      updateData.email = email;
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { new: true, runValidators: true }
    ).populate('university', 'name shortName');

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: { user }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/auth/google
// @desc    Initiate Google OAuth
// @access  Public
router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// @route   GET /api/auth/google/callback
// @desc    Google OAuth callback
// @access  Public
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req, res) => {
    try {
      // Generate JWT token
      const token = generateToken(req.user._id);

      // Redirect to frontend with token
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
      res.redirect(`${frontendUrl}/auth/callback?token=${token}&success=true`);
    } catch (error) {
      console.error('Google callback error:', error);
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
      res.redirect(`${frontendUrl}/auth/callback?error=authentication_failed`);
    }
  }
);

// @route   POST /api/auth/google/mobile
// @desc    Handle Google OAuth for mobile apps
// @access  Public
router.post('/google/mobile', async (req, res) => {
  try {
    const { googleId, email, name, picture } = req.body;

    if (!googleId || !email) {
      return res.status(400).json({
        success: false,
        message: 'Google ID and email are required'
      });
    }

    // Check if user already exists with this Google ID
    let user = await User.findOne({ googleId });

    if (user) {
      // Update profile info if needed
      user.googleProfile = { id: googleId, emails: [{ value: email }], displayName: name, photos: picture ? [{ value: picture }] : [] };
      user.lastLogin = new Date();
      await user.save();

      const token = generateToken(user._id);
      return res.json({
        success: true,
        message: 'Login successful',
        data: {
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
            university: user.university,
            avatar: user.avatar,
            gems: user.gems,
            level: user.level,
            xp: user.xp
          },
          token
        }
      });
    }

    // Check if user exists with same email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // Link Google account to existing user
      existingUser.googleId = googleId;
      existingUser.googleProfile = { id: googleId, emails: [{ value: email }], displayName: name, photos: picture ? [{ value: picture }] : [] };
      existingUser.lastLogin = new Date();
      await existingUser.save();

      const token = generateToken(existingUser._id);
      return res.json({
        success: true,
        message: 'Account linked and login successful',
        data: {
          user: {
            id: existingUser._id,
            username: existingUser.username,
            email: existingUser.email,
            university: existingUser.university,
            avatar: existingUser.avatar,
            gems: existingUser.gems,
            level: existingUser.level,
            xp: existingUser.xp
          },
          token
        }
      });
    }

    // Create new user - but we need university, so return error asking for university
    return res.status(400).json({
      success: false,
      message: 'New user registration requires university selection. Please register through the web interface first.',
      requiresUniversity: true
    });

  } catch (error) {
    console.error('Google mobile auth error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during Google authentication'
    });
  }
});

module.exports = router;
