const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
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
    required: true,
    minlength: 6
  },
  avatar: {
    type: String, // Cloudinary URL
    default: null
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: true
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
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function() {
  if (!this.isModified('password')) return;

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
