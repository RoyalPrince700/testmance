const express = require('express');
const Quiz = require('../models/Quiz');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/quizzes/:id
// @desc    Get quiz questions (without answers)
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id)
      .populate('chapter', 'title')
      .populate('course', 'title');

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }

    if (!quiz.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not available'
      });
    }

    // Remove correct answers from questions
    const questions = quiz.questions.map(q => ({
      _id: q._id,
      question: q.question,
      options: q.options,
      points: q.points,
      timeLimit: q.timeLimit
    }));

    res.json({
      success: true,
      data: {
        _id: quiz._id,
        title: quiz.title,
        description: quiz.description,
        chapter: quiz.chapter,
        course: quiz.course,
        questions,
        passingScore: quiz.passingScore,
        timeLimit: quiz.timeLimit,
        totalPoints: quiz.totalPoints,
        questionCount: quiz.questionCount
      }
    });
  } catch (error) {
    console.error('Get quiz error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/quizzes/:id/submit
// @desc    Submit quiz answers and get score
// @access  Private
router.post('/:id/submit', protect, async (req, res) => {
  try {
    const { answers } = req.body; // answers should be an array of indices

    if (!Array.isArray(answers)) {
      return res.status(400).json({
        success: false,
        message: 'Answers must be an array'
      });
    }

    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }

    // Check if user already passed this quiz
    const existingAttempt = req.user.quizAttempts.find(
      attempt => attempt.quiz.toString() === req.params.id && attempt.score >= quiz.passingScore
    );

    if (existingAttempt) {
      return res.status(400).json({
        success: false,
        message: 'Quiz already passed'
      });
    }

    // Calculate score
    const result = quiz.calculateScore(answers);
    let gemsEarned = 0;

    // Award gems if passed
    if (result.passed) {
      gemsEarned = quiz.gemsReward;
      req.user.gems += gemsEarned;

      // Award bonus gems for perfect score
      if (result.percentage === 100) {
        req.user.gems += 1; // Bonus gem for perfect score
        gemsEarned += 1;
      }
    }

    // Update XP
    const xpEarned = Math.floor(result.percentage / 10); // 10 XP per 10% score
    req.user.xp += xpEarned;
    req.user.level = Math.floor(req.user.xp / 100) + 1;

    // Record attempt
    req.user.quizAttempts.push({
      quiz: req.params.id,
      score: result.percentage,
      totalQuestions: result.totalQuestions,
      gemsEarned
    });

    await req.user.save();

    res.json({
      success: true,
      message: result.passed ? 'Quiz passed!' : 'Quiz completed',
      data: {
        ...result,
        gemsEarned,
        xpEarned,
        newGems: req.user.gems,
        newXp: req.user.xp,
        newLevel: req.user.level
      }
    });
  } catch (error) {
    console.error('Submit quiz error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/quizzes/:id/results
// @desc    Get user's quiz results
// @access  Private
router.get('/:id/results', protect, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }

    const attempts = req.user.quizAttempts.filter(
      attempt => attempt.quiz.toString() === req.params.id
    );

    const bestAttempt = attempts.reduce((best, current) =>
      current.score > best.score ? current : best,
      attempts[0] || { score: 0 }
    );

    res.json({
      success: true,
      data: {
        quizId: req.params.id,
        attempts: attempts.length,
        bestScore: bestAttempt.score,
        hasPassed: bestAttempt.score >= quiz.passingScore,
        totalGemsEarned: attempts.reduce((sum, attempt) => sum + attempt.gemsEarned, 0)
      }
    });
  } catch (error) {
    console.error('Get quiz results error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/quizzes/user/available
// @desc    Get available quizzes for user
// @access  Private
router.get('/user/available', protect, async (req, res) => {
  try {
    // Get all quizzes from user's university courses
    const userUniversity = req.user.university;

    const quizzes = await Quiz.find({
      isActive: true
    })
    .populate({
      path: 'course',
      match: { university: userUniversity, isPublished: true, isActive: true }
    })
    .populate('chapter', 'title')
    .select('title description chapter course passingScore gemsReward')
    .sort({ createdAt: -1 });

    // Filter out quizzes where course is null (not from user's university)
    const availableQuizzes = quizzes.filter(quiz => quiz.course);

    // Add attempt information
    const quizzesWithAttempts = availableQuizzes.map(quiz => {
      const attempts = req.user.quizAttempts.filter(
        attempt => attempt.quiz.toString() === quiz._id.toString()
      );

      const bestScore = attempts.length > 0
        ? Math.max(...attempts.map(a => a.score))
        : 0;

      return {
        ...quiz.toObject(),
        attempts: attempts.length,
        bestScore,
        hasPassed: bestScore >= quiz.passingScore
      };
    });

    res.json({
      success: true,
      count: quizzesWithAttempts.length,
      data: quizzesWithAttempts
    });
  } catch (error) {
    console.error('Get available quizzes error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/quizzes
// @desc    Create a new quiz (admin only)
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);

    // Add quiz to chapter
    if (quiz.chapter) {
      await require('../models/Chapter').findByIdAndUpdate(
        quiz.chapter,
        { quiz: quiz._id }
      );
    }

    res.status(201).json({
      success: true,
      message: 'Quiz created successfully',
      data: quiz
    });
  } catch (error) {
    console.error('Create quiz error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
