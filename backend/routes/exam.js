const express = require('express');
const mongoose = require('mongoose');
const Exam = require('../models/Exam');
const Course = require('../models/Course');
const Quiz = require('../models/Quiz');
const User = require('../models/User');
const Result = require('../models/Result');
const DailyStats = require('../models/DailyStats');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/exam/:courseId
// @desc    Get exam questions for a course
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

    // Check if user has already completed exam for this course
    const existingExam = await Exam.findOne({
      user: userId,
      course: courseId,
      isCompleted: true
    }).session(session);

    if (existingExam) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'You have already completed the exam for this course'
      });
    }

    // Check if exam attempt already exists (in progress)
    let examAttempt = await Exam.findOne({
      user: userId,
      course: courseId,
      isCompleted: false
    }).session(session);

    if (examAttempt) {
      // Return existing attempt
      res.json({
        success: true,
        data: {
          _id: examAttempt._id,
          questions: examAttempt.questions.map(q => ({
            _id: q._id,
            question: q.question,
            options: q.options,
            points: q.points,
            difficulty: q.difficulty
          })),
          totalQuestions: examAttempt.totalQuestions,
          attemptedAt: examAttempt.attemptedAt
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

    // Collect all medium and difficult questions from all quizzes
    let availableQuestions = [];
    quizzes.forEach(quiz => {
      quiz.questions.forEach((question, index) => {
        if (question.difficulty === 'medium' || question.difficulty === 'difficult') {
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

    // Shuffle and select 70 questions
    const shuffledQuestions = availableQuestions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, 70);

    // If we don't have enough questions, fill with available ones
    while (selectedQuestions.length < 70 && availableQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const question = availableQuestions.splice(randomIndex, 1)[0];
      if (!selectedQuestions.find(q => q.questionId.toString() === question.questionId.toString())) {
        selectedQuestions.push(question);
      }
    }

    // Create exam attempt
    examAttempt = await Exam.create([{
      user: userId,
      course: courseId,
      questions: selectedQuestions,
      answers: new Array(selectedQuestions.length).fill(null),
      totalQuestions: selectedQuestions.length
    }], { session });

    examAttempt = examAttempt[0];

    await session.commitTransaction();

    res.json({
      success: true,
      data: {
        _id: examAttempt._id,
        questions: selectedQuestions.map(q => ({
          _id: q._id,
          question: q.question,
          options: q.options,
          points: q.points,
          difficulty: q.difficulty
        })),
        totalQuestions: examAttempt.totalQuestions,
        attemptedAt: examAttempt.attemptedAt
      }
    });

  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    console.error('Get exam error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while loading exam'
    });
  } finally {
    await session.endSession();
  }
});

// @route   POST /api/exam/:courseId/submit
// @desc    Submit exam answers
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

    // Find exam attempt
    const examAttempt = await Exam.findOne({
      user: userId,
      course: courseId,
      isCompleted: false
    }).session(session);

    if (!examAttempt) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'Exam attempt not found or already completed'
      });
    }

    // Validate answers length
    if (answers.length !== examAttempt.questions.length) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: `Answers array length (${answers.length}) must match questions (${examAttempt.questions.length})`
      });
    }

    // Update exam with answers
    examAttempt.answers = answers;
    if (timeSpent) {
      examAttempt.timeSpent = timeSpent;
    }

    // Calculate score
    const result = examAttempt.calculateScore();

    // Save exam attempt
    await examAttempt.save({ session });

    // Update user with exam attempt
    await User.findOneAndUpdate(
      { _id: userId },
      {
        $push: {
          examAttempts: {
            course: courseId,
            score: result.percentage,
            totalQuestions: result.totalQuestions,
            attemptedAt: examAttempt.completedAt
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
      resultRecord.examScore = result.score;
      resultRecord.examCompletedAt = examAttempt.completedAt;
      resultRecord.calculateGrade();
      await resultRecord.save({ session });
    } else {
      resultRecord = await Result.create([{
        user: userId,
        course: courseId,
        examScore: result.score,
        examCompletedAt: examAttempt.completedAt
      }], { session });
      resultRecord = resultRecord[0];
      resultRecord.calculateGrade();
      await resultRecord.save({ session });
    }

    // Increment exam completion count in daily stats
    await DailyStats.incrementMetric('examCompletions');

    await session.commitTransaction();

    // Return results with correct answers for review
    const questionsWithAnswers = examAttempt.questions.map((q, index) => ({
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
      message: 'Exam completed successfully!',
      data: {
        ...result,
        questions: questionsWithAnswers,
        timeSpent: examAttempt.timeSpent,
        completedAt: examAttempt.completedAt
      }
    });

  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    console.error('Submit exam error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error while submitting exam'
    });
  } finally {
    await session.endSession();
  }
});

// @route   GET /api/exam/:courseId/status
// @desc    Check exam attempt status for a course
// @access  Private
router.get('/:courseId/status', protect, async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    const examAttempt = await Exam.findOne({
      user: userId,
      course: courseId
    }).select('isCompleted score totalQuestions attemptedAt completedAt');

    const hasAttempted = !!examAttempt;

    res.json({
      success: true,
      data: {
        hasAttempted,
        isCompleted: examAttempt?.isCompleted || false,
        score: examAttempt?.score || 0,
        totalQuestions: examAttempt?.totalQuestions || 70,
        attemptedAt: examAttempt?.attemptedAt,
        completedAt: examAttempt?.completedAt
      }
    });

  } catch (error) {
    console.error('Get exam status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;