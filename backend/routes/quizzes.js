const express = require('express');
const mongoose = require('mongoose');
const Quiz = require('../models/Quiz');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/quizzes/chapter/:chapterId
// @desc    Get quiz by chapter ID
// @access  Private
router.get('/chapter/:chapterId', protect, async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ chapter: req.params.chapterId })
      .populate('chapter', 'title')
      .populate('course', 'title');

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found for this chapter'
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
    console.error('Get quiz by chapter error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

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

// @route   POST /api/quizzes/chapter/:chapterId/submit
// @desc    Submit quiz by chapter ID (for local quizzes)
// @access  Private
router.post('/chapter/:chapterId/submit', protect, async (req, res) => {
  const session = await mongoose.startSession();
  
  try {
    session.startTransaction();

    const { answers, quizData } = req.body; // quizData contains local quiz content

    // Validate answers is an array
    if (!Array.isArray(answers)) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'Answers must be an array'
      });
    }

    // Find or create quiz for this chapter
    const Chapter = require('../models/Chapter');
    const chapter = await Chapter.findById(req.params.chapterId).session(session);
    
    if (!chapter) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    let quiz = await Quiz.findOne({ chapter: req.params.chapterId }).session(session);

    // If quiz doesn't exist and we have quizData, create it
    if (!quiz && quizData) {
      quiz = await Quiz.create([{
        title: quizData.title,
        description: quizData.description,
        chapter: req.params.chapterId,
        course: chapter.course,
        questions: quizData.questions,
        passingScore: quizData.passingScore || 70,
        timeLimit: quizData.timeLimit || 0,
        isActive: true
      }], { session });
      quiz = quiz[0];

      // Link quiz to chapter
      await Chapter.findByIdAndUpdate(
        req.params.chapterId,
        { quiz: quiz._id },
        { session }
      );
    }

    if (!quiz) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'Quiz not found for this chapter'
      });
    }

    // Validate answers array length matches quiz questions
    if (answers.length !== quiz.questions.length) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: `Answers array length (${answers.length}) must match quiz questions (${quiz.questions.length})`
      });
    }

    // Validate each answer is a valid index
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== null && answers[i] !== undefined) {
        if (!Number.isInteger(answers[i]) || answers[i] < 0 || answers[i] >= quiz.questions[i].options.length) {
          await session.abortTransaction();
          return res.status(400).json({
            success: false,
            message: `Invalid answer index for question ${i + 1}`
          });
        }
      }
    }

    // Re-fetch user from database within transaction
    const user = await User.findById(req.user._id).session(session);
    if (!user) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if this is the first attempt
    const existingAttempts = user.quizAttempts.filter(
      attempt => attempt.quiz && attempt.quiz.toString() === quiz._id.toString()
    );
    const isFirstAttempt = existingAttempts.length === 0;

    // Calculate score
    const result = quiz.calculateScore(answers);
    let gemsEarned = 0;

    // Award gems only on first attempt: 1 gem per correct answer
    if (isFirstAttempt) {
      gemsEarned = result.correctAnswers; // 1 gem per correct answer
      user.gems += gemsEarned;
    }

    // Update XP (XP can be earned on every attempt)
    const xpEarned = Math.floor(result.percentage / 10); // 10 XP per 10% score
    user.xp += xpEarned;
    user.level = Math.floor(user.xp / 100) + 1;

    // Record attempt
    user.quizAttempts.push({
      quiz: quiz._id,
      score: result.percentage,
      totalQuestions: result.totalQuestions,
      gemsEarned
    });

    // Save user with all updates atomically within transaction
    await user.save({ session });

    // Commit transaction
    await session.commitTransaction();

    res.json({
      success: true,
      message: result.passed ? 'Quiz passed!' : 'Quiz completed',
      data: {
        ...result,
        gemsEarned,
        xpEarned,
        newGems: user.gems,
        newXp: user.xp,
        newLevel: user.level,
        isFirstAttempt
      }
    });
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    console.error('Submit quiz by chapter error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error while submitting quiz'
    });
  } finally {
    await session.endSession();
  }
});

// @route   POST /api/quizzes/:id/submit
// @desc    Submit quiz answers and get score
// @access  Private
// Security measures:
// 1. Uses MongoDB transactions to prevent race conditions (atomic check-and-update)
// 2. Validates answers array length matches quiz questions (prevents manipulation)
// 3. Validates each answer index is within valid range (prevents invalid answers)
// 4. Only awards gems on first attempt (checked within transaction)
// 5. Re-fetches user from database within transaction to ensure latest state
router.post('/:id/submit', protect, async (req, res) => {
  const session = await mongoose.startSession();
  
  try {
    session.startTransaction();

    const { answers } = req.body; // answers should be an array of indices

    // Validate answers is an array
    if (!Array.isArray(answers)) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'Answers must be an array'
      });
    }

    // Fetch quiz from database
    const quiz = await Quiz.findById(req.params.id).session(session);
    if (!quiz) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }

    // Validate answers array length matches quiz questions
    if (answers.length !== quiz.questions.length) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: `Answers array length (${answers.length}) must match quiz questions (${quiz.questions.length})`
      });
    }

    // Validate each answer is a valid index
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== null && answers[i] !== undefined) {
        if (!Number.isInteger(answers[i]) || answers[i] < 0 || answers[i] >= quiz.questions[i].options.length) {
          await session.abortTransaction();
          return res.status(400).json({
            success: false,
            message: `Invalid answer index for question ${i + 1}`
          });
        }
      }
    }

    // Re-fetch user from database within transaction to ensure we have the latest state
    // Use req.user._id which was already validated by protect middleware
    const user = await User.findById(req.user._id).session(session);
    if (!user) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if this is the first attempt (any attempt, not just passed)
    // Check within transaction to prevent race conditions
    const existingAttempts = user.quizAttempts.filter(
      attempt => attempt.quiz && attempt.quiz.toString() === req.params.id
    );
    const isFirstAttempt = existingAttempts.length === 0;

    // Calculate score
    const result = quiz.calculateScore(answers);
    let gemsEarned = 0;

    // Award gems only on first attempt: 1 gem per correct answer
    if (isFirstAttempt) {
      gemsEarned = result.correctAnswers; // 1 gem per correct answer
      user.gems += gemsEarned;
    }

    // Update XP (XP can be earned on every attempt)
    const xpEarned = Math.floor(result.percentage / 10); // 10 XP per 10% score
    user.xp += xpEarned;
    user.level = Math.floor(user.xp / 100) + 1;

    // Record attempt (always record, even if no gems earned)
    user.quizAttempts.push({
      quiz: req.params.id,
      score: result.percentage,
      totalQuestions: result.totalQuestions,
      gemsEarned
    });

    // Save user with all updates atomically within transaction
    await user.save({ session });

    // Commit transaction
    await session.commitTransaction();

    res.json({
      success: true,
      message: result.passed ? 'Quiz passed!' : 'Quiz completed',
      data: {
        ...result,
        gemsEarned,
        xpEarned,
        newGems: user.gems,
        newXp: user.xp,
        newLevel: user.level,
        isFirstAttempt
      }
    });
  } catch (error) {
    // Abort transaction if it was started
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    console.error('Submit quiz error:', error);
    
    // Don't return 401 errors that would log user out - use 500 instead
    res.status(500).json({
      success: false,
      message: error.message || 'Server error while submitting quiz'
    });
  } finally {
    // Always end the session
    await session.endSession();
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
