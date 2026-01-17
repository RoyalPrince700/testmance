// Script to seed ENT211 quizzes into the database
const mongoose = require('mongoose');
const Course = require('./models/Course');
const Chapter = require('./models/Chapter');
const Quiz = require('./models/Quiz');
require('dotenv').config();

// Import ENT211 quiz data from frontend files
const ent211Chapter1Quiz = require('../frontend/src/pages/ent211/quizzes/content/ent211-chapter1.js').ent211Chapter1Quiz;
const ent211Chapter2Quiz = require('../frontend/src/pages/ent211/quizzes/content/ent211-chapter2.js').ent211Chapter2Quiz;
const ent211Chapter3Quiz = require('../frontend/src/pages/ent211/quizzes/content/ent211-chapter3.js').ent211Chapter3Quiz;
const ent211Chapter4Quiz = require('../frontend/src/pages/ent211/quizzes/content/ent211-chapter4.js').ent211Chapter4Quiz;
const ent211Chapter5Quiz = require('../frontend/src/pages/ent211/quizzes/content/ent211-chapter5.js').ent211Chapter5Quiz;
const ent211Chapter6Quiz = require('../frontend/src/pages/ent211/quizzes/content/ent211-chapter6.js').ent211Chapter6Quiz;
const ent211Chapter7Quiz = require('../frontend/src/pages/ent211/quizzes/content/ent211-chapter7.js').ent211Chapter7Quiz;
const ent211Chapter8Quiz = require('../frontend/src/pages/ent211/quizzes/content/ent211-chapter8.js').ent211Chapter8Quiz;
const ent211Chapter9Quiz = require('../frontend/src/pages/ent211/quizzes/content/ent211-chapter9.js').ent211Chapter9Quiz;

// Map quiz data to chapters
const ent211Quizzes = [
  { quizData: ent211Chapter1Quiz, chapterTitle: 'Concept of Entrepreneurship' },
  { quizData: ent211Chapter2Quiz, chapterTitle: 'Nigerian Business Environment and Entrepreneurial Opportunities in Nigeria through SMEs' },
  { quizData: ent211Chapter3Quiz, chapterTitle: 'Feasibility Study And Feasibility Report Writing' },
  { quizData: ent211Chapter4Quiz, chapterTitle: 'Understanding The Nexus Between Innovation And Employability For Nigerian Graduates' },
  { quizData: ent211Chapter5Quiz, chapterTitle: 'Entrepreneurship Approach to Marketing and Validation of Products and Services Idea' },
  { quizData: ent211Chapter6Quiz, chapterTitle: 'Business Planning' },
  { quizData: ent211Chapter7Quiz, chapterTitle: 'Sources of Finance and Basic Accounting Records for Entrepreneurs' },
  { quizData: ent211Chapter8Quiz, chapterTitle: 'Human Resources Management Practices For Entrepreneurship' },
  { quizData: ent211Chapter9Quiz, chapterTitle: 'Introduction to Electronic Commerce' }
];

async function seedENT211Quizzes() {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testmancer');

    console.log('Connected to database');

    // Find ENT211 course
    const course = await Course.findOne({ code: 'ENT 211' });
    if (!course) {
      console.error('ENT 211 course not found in database');
      process.exit(1);
    }

    console.log(`Found ENT211 course: ${course._id}`);

    let quizzesCreated = 0;
    let quizzesUpdated = 0;

    for (let i = 0; i < ent211Quizzes.length; i++) {
      const { quizData, chapterTitle } = ent211Quizzes[i];

      // Find corresponding chapter
      const chapter = await Chapter.findOne({
        course: course._id,
        title: chapterTitle
      });

      if (!chapter) {
        console.warn(`Chapter not found: ${chapterTitle}`);
        continue;
      }

      console.log(`Processing chapter ${i + 1}: ${chapterTitle}`);

      // Check if quiz already exists
      const existingQuiz = await Quiz.findOne({ chapter: chapter._id });

      if (existingQuiz) {
        // Update existing quiz
        existingQuiz.title = quizData.title;
        existingQuiz.description = quizData.description;
        existingQuiz.questions = quizData.questions;
        existingQuiz.passingScore = quizData.passingScore || 70;
        existingQuiz.timeLimit = quizData.timeLimit || 0;
        existingQuiz.isActive = true;

        await existingQuiz.save();
        console.log(`Updated existing quiz for chapter: ${chapterTitle}`);
        quizzesUpdated++;
      } else {
        // Create new quiz
        const newQuiz = new Quiz({
          title: quizData.title,
          description: quizData.description,
          chapter: chapter._id,
          course: course._id,
          questions: quizData.questions,
          passingScore: quizData.passingScore || 70,
          timeLimit: quizData.timeLimit || 0,
          isActive: true
        });

        await newQuiz.save();

        // Update chapter with quiz reference
        chapter.quiz = newQuiz._id;
        await chapter.save();

        console.log(`Created new quiz for chapter: ${chapterTitle}`);
        quizzesCreated++;
      }
    }

    console.log(`\nSeeding complete!`);
    console.log(`Quizzes created: ${quizzesCreated}`);
    console.log(`Quizzes updated: ${quizzesUpdated}`);
    console.log(`Total quizzes processed: ${quizzesCreated + quizzesUpdated}`);

  } catch (error) {
    console.error('Error seeding ENT211 quizzes:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  }
}

seedENT211Quizzes();