const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    default: null, // Allow null initially
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: function() {
      // Password is required only if user doesn't have Google ID
      return !this.googleId;
    },
    minlength: 6
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  googleProfile: {
    type: Object,
    default: null
  },
  avatar: {
    type: String, // Cloudinary URL
    default: null
  },
  isProfileSetupComplete: {
    type: Boolean,
    default: true // Default to true for existing users and manual registration
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: true
  },
  faculty: {
    type: String,
    trim: true,
    default: null
  },
  department: {
    type: String,
    trim: true,
    default: null
  },
  academicLevel: {
    type: String,
    trim: true,
    default: null,
    enum: ['100', '200', '300', '400', '500', '600', null]
  },
  preferredAnalogy: {
    type: String,
    default: null,
    enum: ['general', 'football', 'gaming', 'movies', 'fashion', 'cooking', 'music', null]
  },
  gems: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  xp: {
    type: Number,
    default: 0
  },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  completedChapters: [{
    chapter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chapter'
    },
    completedAt: {
      type: Date,
      default: Date.now
    },
    firstCompletion: {
      type: Boolean,
      default: true
    }
  }],
  quizAttempts: [{
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz'
    },
    score: Number,
    totalQuestions: Number,
    gemsEarned: Number,
    attemptedAt: {
      type: Date,
      default: Date.now
    }
  }],
  achievements: [{
    type: String, // Achievement IDs
    earnedAt: {
      type: Date,
      default: Date.now
    }
  }],
  lastLogin: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  profileVisibility: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Auto-generate username from Gmail if not set
userSchema.pre('save', function() {
  // Auto-generate username from Gmail if not set and it's a Gmail account
  if (!this.username && this.email && this.email.endsWith('@gmail.com')) {
    const gmailUsername = this.email.split('@')[0];
    this.username = gmailUsername.charAt(0).toUpperCase() + gmailUsername.slice(1);
  }

  // Capitalize first letter of username
  if (this.isModified('username') && this.username) {
    this.username = this.username.charAt(0).toUpperCase() + this.username.slice(1);
  }
});

// Hash password before saving (only for users with passwords)
userSchema.pre('save', async function() {
  if (!this.isModified('password') || !this.password) return;

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Get user stats
userSchema.methods.getStats = function() {
  const totalQuizzes = this.quizAttempts.length;
  const averageScore = totalQuizzes > 0
    ? this.quizAttempts.reduce((sum, attempt) => sum + attempt.score, 0) / totalQuizzes
    : 0;

  return {
    totalGems: this.gems,
    level: this.level,
    xp: this.xp,
    completedChapters: this.completedChapters.length,
    totalQuizzes,
    averageScore: Math.round(averageScore * 100) / 100,
    achievements: this.achievements || []
  };
};

module.exports = mongoose.model('User', userSchema);
