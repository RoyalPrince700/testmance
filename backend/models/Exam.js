const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
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
  questions: [{
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    options: [{
      type: String,
      required: true
    }],
    correctAnswer: {
      type: Number,
      required: true
    },
    explanation: {
      type: String
    },
    points: {
      type: Number,
      default: 1
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'difficult'],
      default: 'medium'
    }
  }],
  answers: [{
    type: Number, // Index of selected option, null if not answered
    default: null
  }],
  score: {
    type: Number,
    default: 0
  },
  totalQuestions: {
    type: Number,
    default: 70
  },
  attemptedAt: {
    type: Date,
    default: Date.now
  },
  completedAt: {
    type: Date
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  timeSpent: {
    type: Number, // in seconds
    default: 0
  }
}, {
  timestamps: true
});

// Compound index to ensure one exam attempt per user per course
examSchema.index({ user: 1, course: 1 }, { unique: true });

// Virtual for percentage score
examSchema.virtual('percentage').get(function() {
  if (this.totalQuestions === 0) return 0;
  return Math.round((this.score / this.totalQuestions) * 100 * 100) / 100;
});

// Method to calculate score
examSchema.methods.calculateScore = function() {
  let correctAnswers = 0;

  this.questions.forEach((question, index) => {
    const userAnswer = this.answers[index];
    if (userAnswer !== null && userAnswer !== undefined && userAnswer === question.correctAnswer) {
      correctAnswers += question.points;
    }
  });

  this.score = correctAnswers;
  this.isCompleted = true;
  this.completedAt = new Date();

  return {
    score: this.score,
    totalQuestions: this.totalQuestions,
    percentage: this.percentage,
    correctAnswers
  };
};

// Static method to check if user has attempted exam for a course
examSchema.statics.hasAttempted = async function(userId, courseId) {
  const attempt = await this.findOne({
    user: userId,
    course: courseId,
    isCompleted: true
  });
  return !!attempt;
};

module.exports = mongoose.model('Exam', examSchema);