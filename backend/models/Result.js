const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  caScore: {
    type: Number,
    default: 0,
    min: 0,
    max: 30
  },
  examScore: {
    type: Number,
    default: 0,
    min: 0,
    max: 70
  },
  totalScore: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  grade: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E', 'F'],
    default: 'F'
  },
  caCompletedAt: {
    type: Date
  },
  examCompletedAt: {
    type: Date
  },
  completedAt: {
    type: Date
  },
  isComplete: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Compound index to ensure one result per user per course
resultSchema.index({ user: 1, course: 1 }, { unique: true });

// Virtual for percentage
resultSchema.virtual('percentage').get(function() {
  return Math.round(this.totalScore * 100) / 100;
});

// Method to calculate grade based on total score
resultSchema.methods.calculateGrade = function() {
  this.totalScore = this.caScore + this.examScore;

  if (this.totalScore >= 70) {
    this.grade = 'A';
  } else if (this.totalScore >= 60) {
    this.grade = 'B';
  } else if (this.totalScore >= 50) {
    this.grade = 'C';
  } else if (this.totalScore >= 40) {
    this.grade = 'D';
  } else if (this.totalScore >= 30) {
    this.grade = 'E';
  } else {
    this.grade = 'F';
  }

  // Mark as complete if both CA and exam are done
  if (this.caCompletedAt && this.examCompletedAt) {
    this.isComplete = true;
    this.completedAt = new Date();
  }

  return {
    totalScore: this.totalScore,
    grade: this.grade,
    percentage: this.percentage,
    isComplete: this.isComplete
  };
};

// Static method to get grade breakdown
resultSchema.statics.getGradeBreakdown = function() {
  return {
    A: { min: 70, max: 100, description: 'Excellent' },
    B: { min: 60, max: 69, description: 'Very Good' },
    C: { min: 50, max: 59, description: 'Good' },
    D: { min: 40, max: 49, description: 'Fair' },
    E: { min: 30, max: 39, description: 'Poor' },
    F: { min: 0, max: 29, description: 'Fail' }
  };
};

// Static method to check if user has complete results for a course
resultSchema.statics.hasCompleteResults = async function(userId, courseId) {
  const result = await this.findOne({
    user: userId,
    course: courseId,
    isComplete: true
  });
  return !!result;
};

module.exports = mongoose.model('Result', resultSchema);