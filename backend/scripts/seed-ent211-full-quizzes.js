const mongoose = require('mongoose');
const Quiz = require('../models/Quiz');
const Course = require('../models/Course');
const Chapter = require('../models/Chapter');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const seedENT211FullQuizzes = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testmancer');

    console.log('Connected to database');

    // Find ENT211 course
    const course = await Course.findOne({ code: 'ENT 211' });
    if (!course) {
      console.error('ENT211 course not found');
      process.exit(1);
    }

    console.log('Found ENT211 course:', course._id);

    // Define chapter mappings
    const chapterMappings = [
      { order: 1, file: 'ent211-chapter1.js', title: 'Concept of Entrepreneurship' },
      { order: 2, file: 'ent211-chapter2.js', title: 'Nigerian Business Environment and Entrepreneurial Opportunities in Nigeria through SMEs' },
      { order: 3, file: 'ent211-chapter3.js', title: 'Feasibility Study And Feasibility Report Writing' },
      { order: 4, file: 'ent211-chapter4.js', title: 'Understanding The Nexus Between Innovation And Employability For Nigerian Graduates' },
      { order: 5, file: 'ent211-chapter5.js', title: 'Entrepreneurship Approach to Marketing and Validation of Products and Services Idea' },
      { order: 6, file: 'ent211-chapter6.js', title: 'Business Planning' },
      { order: 7, file: 'ent211-chapter7.js', title: 'Sources of Finance and Basic Accounting Records for Entrepreneurs' },
      { order: 8, file: 'ent211-chapter8.js', title: 'Human Resources Management Practices For Entrepreneurship' },
      { order: 9, file: 'ent211-chapter9.js', title: 'Introduction to Electronic Commerce' }
    ];

    // Process each chapter
    for (const chapterInfo of chapterMappings) {
      try {
        // Find the chapter
        const chapter = await Chapter.findOne({
          course: course._id,
          order: chapterInfo.order
        });

        if (!chapter) {
          console.log(`Chapter ${chapterInfo.order} not found for ENT211, skipping...`);
          continue;
        }

        // Check if quiz already exists
        const existingQuiz = await Quiz.findOne({
          course: course._id,
          chapter: chapter._id
        });

        if (existingQuiz) {
          console.log(`Quiz already exists for chapter ${chapterInfo.order}, updating...`);
          // Update existing quiz
          await Quiz.findByIdAndDelete(existingQuiz._id);
        }

        // Read the quiz file
        const quizFilePath = path.join(__dirname, '../../frontend/src/pages/ent211/quizzes/content', chapterInfo.file);

        if (!fs.existsSync(quizFilePath)) {
          console.log(`Quiz file ${chapterInfo.file} not found, skipping...`);
          continue;
        }

        // Read and parse the quiz file
        const quizContent = fs.readFileSync(quizFilePath, 'utf8');

        // Extract the quiz object using regex
        const quizMatch = quizContent.match(/export const (\w+) = (\{[\s\S]*?\n\})/);
        if (!quizMatch) {
          console.log(`Could not parse quiz file ${chapterInfo.file}, skipping...`);
          continue;
        }

        // Use eval to parse the JavaScript object (safe since we control the files)
        let quizData;
        try {
          // Create a safe evaluation context
          const evalCode = `(${quizMatch[2]})`;
          quizData = eval(evalCode);
        } catch (error) {
          console.log(`Error parsing quiz data from ${chapterInfo.file}:`, error.message);
          continue;
        }

        // Create the quiz
        const quiz = new Quiz({
          title: quizData.title || `${chapterInfo.title} - Quiz`,
          description: quizData.description || `Quiz for ${chapterInfo.title}`,
          course: course._id,
          chapter: chapter._id,
          questions: quizData.questions || [],
          passingScore: quizData.passingScore || 70,
          timeLimit: quizData.timeLimit || 0,
          isActive: true,
          totalPoints: quizData.questions ? quizData.questions.reduce((sum, q) => sum + (q.points || 1), 0) : 0,
          questionCount: quizData.questions ? quizData.questions.length : 0
        });

        await quiz.save();
        console.log(`Created/Updated quiz for chapter ${chapterInfo.order}: ${chapterInfo.title} (${quizData.questions.length} questions)`);

      } catch (error) {
        console.error(`Error processing chapter ${chapterInfo.order}:`, error);
      }
    }

    console.log('ENT211 quizzes seeding completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('Error seeding ENT211 quizzes:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
};

seedENT211FullQuizzes();