const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  options: [{
    type: String,
    required: true,
    trim: true
  }],
  correctAnswer: {
    type: Number, // Index of correct option (0-based)
    required: true,
    min: 0
  },
  explanation: {
    type: String,
    trim: true
  },
  points: {
    type: Number,
    default: 1,
    min: 1
  },
  timeLimit: {
    type: Number, // in seconds, 0 means no limit
    default: 0
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'difficult'],
    default: 'medium'
  }
});

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  questions: [questionSchema],
  passingScore: {
    type: Number, // percentage
    default: 70,
    min: 0,
    max: 100
  },
  timeLimit: {
    type: Number, // total quiz time in minutes, 0 means no limit
    default: 0
  },
  attemptsAllowed: {
    type: Number, // 0 means unlimited
    default: 0
  },
  gemsReward: {
    type: Number,
    default: 1,
    min: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Virtual for total points
quizSchema.virtual('totalPoints').get(function() {
  return this.questions.reduce((sum, question) => sum + question.points, 0);
});

// Virtual for question count
quizSchema.virtual('questionCount').get(function() {
  return this.questions.length;
});

// Method to calculate score
quizSchema.methods.calculateScore = function(answers) {
  let totalPoints = 0;
  let correctAnswers = 0;

  this.questions.forEach((question, index) => {
    const userAnswer = answers[index];
    if (userAnswer !== undefined && userAnswer === question.correctAnswer) {
      totalPoints += question.points;
      correctAnswers += 1;
    }
  });

  const percentage = this.totalPoints > 0 ? (totalPoints / this.totalPoints) * 100 : 0;

  return {
    totalPoints,
    maxPoints: this.totalPoints,
    correctAnswers,
    totalQuestions: this.questions.length,
    percentage: Math.round(percentage * 100) / 100,
    passed: percentage >= this.passingScore
  };
};

module.exports = mongoose.model('Quiz', quizSchema);
