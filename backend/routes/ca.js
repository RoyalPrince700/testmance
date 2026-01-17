const express = require('express');
const mongoose = require('mongoose');
const CA = require('../models/CA');
const Course = require('../models/Course');
const Quiz = require('../models/Quiz');
const User = require('../models/User');
const Result = require('../models/Result');
const DailyStats = require('../models/DailyStats');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/ca/:courseId
// @desc    Get CA questions for a course
// @access  Private
router.get('/:courseId', protect, async (req, res) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const { courseId } = req.params;
    const userId = req.user._id;

    // Check if user is enrolled in the course
    const user = await User.findById(userId).session(session);
    if (!user || !user.enrolledCourses.includes(courseId)) {
      await session.abortTransaction();
      return res.status(403).json({
        success: false,
        message: 'You are not enrolled in this course'
      });
    }

    // Check if user has already completed CA for this course
    const existingCA = await CA.findOne({
      user: userId,
      course: courseId,
      isCompleted: true
    }).session(session);

    if (existingCA) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'You have already completed the CA for this course'
      });
    }

    // Check if CA attempt already exists (in progress)
    let caAttempt = await CA.findOne({
      user: userId,
      course: courseId,
      isCompleted: false
    }).session(session);

    if (caAttempt) {
      // Return existing attempt
      res.json({
        success: true,
        data: {
          _id: caAttempt._id,
          questions: caAttempt.questions.map(q => ({
            _id: q._id,
            question: q.question,
            options: q.options,
            points: q.points,
            difficulty: q.difficulty
          })),
          totalQuestions: caAttempt.totalQuestions,
          attemptedAt: caAttempt.attemptedAt
        }
      });
      await session.commitTransaction();
      return;
    }

    // Get course with chapters
    const course = await Course.findById(courseId)
      .populate('chapters')
      .session(session);

    if (!course) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Get all quizzes for this course
    const quizzes = await Quiz.find({
      course: courseId,
      isActive: true
    }).session(session);

    // Collect all easy and medium questions from all quizzes
    let availableQuestions = [];
    quizzes.forEach(quiz => {
      quiz.questions.forEach((question, index) => {
        if (question.difficulty === 'easy' || question.difficulty === 'medium') {
          availableQuestions.push({
            questionId: question._id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            points: question.points,
            difficulty: question.difficulty,
            quizId: quiz._id,
            questionIndex: index
          });
        }
      });
    });

    // Check if there are any questions available
    if (availableQuestions.length === 0) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'No CA questions available for this course. The course may not have any quizzes with easy or medium difficulty questions yet.'
      });
    }

    // Shuffle and select 30 questions
    const shuffledQuestions = availableQuestions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, 30);

    // If we don't have enough questions, fill with available ones
    while (selectedQuestions.length < 30 && availableQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const question = availableQuestions.splice(randomIndex, 1)[0];
      if (!selectedQuestions.find(q => q.questionId.toString() === question.questionId.toString())) {
        selectedQuestions.push(question);
      }
    }

    // Ensure we have at least one question
    if (selectedQuestions.length === 0) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'No CA questions available for this course. The course may not have any quizzes with easy or medium difficulty questions yet.'
      });
    }

    // Create CA attempt
    caAttempt = await CA.create([{
      user: userId,
      course: courseId,
      questions: selectedQuestions,
      answers: new Array(selectedQuestions.length).fill(null),
      totalQuestions: selectedQuestions.length
    }], { session });

    caAttempt = caAttempt[0];

    await session.commitTransaction();

    res.json({
      success: true,
      data: {
        _id: caAttempt._id,
        questions: selectedQuestions.map(q => ({
          _id: q._id,
          question: q.question,
          options: q.options,
          points: q.points,
          difficulty: q.difficulty
        })),
        totalQuestions: caAttempt.totalQuestions,
        attemptedAt: caAttempt.attemptedAt
      }
    });

  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    console.error('Get CA error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while loading CA'
    });
  } finally {
    await session.endSession();
  }
});

// @route   POST /api/ca/:courseId/submit
// @desc    Submit CA answers
// @access  Private
router.post('/:courseId/submit', protect, async (req, res) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const { courseId } = req.params;
    const { answers, timeSpent } = req.body;
    const userId = req.user._id;

    // Validate answers
    if (!Array.isArray(answers)) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'Answers must be an array'
      });
    }

    // Find CA attempt
    const caAttempt = await CA.findOne({
      user: userId,
      course: courseId,
      isCompleted: false
    }).session(session);

    if (!caAttempt) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'CA attempt not found or already completed'
      });
    }

    // Validate answers length
    if (answers.length !== caAttempt.questions.length) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: `Answers array length (${answers.length}) must match questions (${caAttempt.questions.length})`
      });
    }

    // Update CA with answers
    caAttempt.answers = answers;
    if (timeSpent) {
      caAttempt.timeSpent = timeSpent;
    }

    // Calculate score
    const result = caAttempt.calculateScore();

    // Save CA attempt
    await caAttempt.save({ session });

    // Update user with CA attempt
    await User.findOneAndUpdate(
      { _id: userId },
      {
        $push: {
          caAttempts: {
            course: courseId,
            score: result.percentage,
            totalQuestions: result.totalQuestions,
            attemptedAt: caAttempt.completedAt
          }
        }
      },
      { session }
    );

    // Update or create result record
    let resultRecord = await Result.findOne({
      user: userId,
      course: courseId
    }).session(session);

    if (resultRecord) {
      resultRecord.caScore = result.score;
      resultRecord.caCompletedAt = caAttempt.completedAt;
      resultRecord.calculateGrade();
      await resultRecord.save({ session });
    } else {
      resultRecord = await Result.create([{
        user: userId,
        course: courseId,
        caScore: result.score,
        caCompletedAt: caAttempt.completedAt
      }], { session });
      resultRecord = resultRecord[0];
      resultRecord.calculateGrade();
      await resultRecord.save({ session });
    }

    // Increment CA completion count in daily stats
    await DailyStats.incrementMetric('caCompletions');

    await session.commitTransaction();

    // Return results with correct answers for review
    const questionsWithAnswers = caAttempt.questions.map((q, index) => ({
      _id: q._id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      userAnswer: answers[index],
      explanation: q.explanation,
      points: q.points,
      difficulty: q.difficulty,
      isCorrect: answers[index] === q.correctAnswer
    }));

    res.json({
      success: true,
      message: 'CA completed successfully!',
      data: {
        ...result,
        questions: questionsWithAnswers,
        timeSpent: caAttempt.timeSpent,
        completedAt: caAttempt.completedAt
      }
    });

  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    console.error('Submit CA error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error while submitting CA'
    });
  } finally {
    await session.endSession();
  }
});

// @route   GET /api/ca/:courseId/status
// @desc    Check CA attempt status for a course
// @access  Private
router.get('/:courseId/status', protect, async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    const caAttempt = await CA.findOne({
      user: userId,
      course: courseId
    }).select('isCompleted score totalQuestions attemptedAt completedAt');

    const hasAttempted = !!caAttempt;

    res.json({
      success: true,
      data: {
        hasAttempted,
        isCompleted: caAttempt?.isCompleted || false,
        score: caAttempt?.score || 0,
        totalQuestions: caAttempt?.totalQuestions || 30,
        attemptedAt: caAttempt?.attemptedAt,
        completedAt: caAttempt?.completedAt
      }
    });

  } catch (error) {
    console.error('Get CA status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;