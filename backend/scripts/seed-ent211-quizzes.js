const mongoose = require('mongoose');
const Quiz = require('../models/Quiz');
const Course = require('../models/Course');
const Chapter = require('../models/Chapter');
require('dotenv').config();

const seedENT211Quizzes = async () => {
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

    // Define quiz data - we'll create quizzes for each chapter
    const ent211QuizData = [
      {
        chapterTitle: 'Concept of Entrepreneurship',
        chapterOrder: 1,
        questions: [
          {
            question: 'According to the textbook, which TWO factors together create the "global village" characterized by explosive business growth?',
            options: [
              'Swift developments in technology and political stability',
              'Forces of globalization and rapid technological advancements',
              'Economic policies and international trade agreements',
              'Cultural exchange and traditional business practices'
            ],
            correctAnswer: 1,
            explanation: 'The textbook specifically states: "With the swift developments in the field of technology and the forces of globalization, the world has become a global village, characterized by an explosive growth in business activities."',
            points: 1,
            difficulty: 'easy'
          },
          {
            question: 'In the context of the global village, which of the following represents the most accurate description of business challenges that entrepreneurs must overcome?',
            options: [
              'Decreased competition due to market saturation',
              'Intensified competition requiring constant adaptation and innovation',
              'Stable market conditions allowing predictable business planning',
              'Reduced customer expectations for product quality'
            ],
            correctAnswer: 1,
            explanation: 'The global village creates intense competition where entrepreneurs must continuously innovate and adapt to survive in rapidly changing markets.',
            points: 1,
            difficulty: 'medium'
          }
        ]
      },
      {
        chapterTitle: 'Nigerian Business Environment and Entrepreneurial Opportunities in Nigeria through SMEs',
        chapterOrder: 2,
        questions: [
          {
            question: 'What is the primary role of Small and Medium Enterprises (SMEs) in the Nigerian economy?',
            options: [
              'They primarily serve as subsidiaries to large corporations',
              'They are the backbone of economic development and job creation',
              'They focus exclusively on import-export activities',
              'They operate mainly in the agricultural sector'
            ],
            correctAnswer: 1,
            explanation: 'SMEs are considered the backbone of economic development in Nigeria, providing employment opportunities and contributing significantly to GDP.',
            points: 1,
            difficulty: 'easy'
          }
        ]
      },
      {
        chapterTitle: 'Feasibility Study And Feasibility Report Writing',
        chapterOrder: 3,
        questions: [
          {
            question: 'What is the primary purpose of conducting a feasibility study before starting a business?',
            options: [
              'To obtain government approval',
              'To assess the viability and potential success of the business idea',
              'To secure bank loans',
              'To comply with legal requirements'
            ],
            correctAnswer: 1,
            explanation: 'A feasibility study helps entrepreneurs evaluate whether their business idea is practical and likely to succeed.',
            points: 1,
            difficulty: 'easy'
          }
        ]
      },
      {
        chapterTitle: 'Understanding The Nexus Between Innovation And Employability For Nigerian Graduates',
        chapterOrder: 4,
        questions: [
          {
            question: 'How does innovation contribute to employability for Nigerian graduates?',
            options: [
              'It reduces the need for formal education',
              'It creates new job opportunities and enhances competitiveness',
              'It replaces traditional employment methods',
              'It focuses only on technological innovations'
            ],
            correctAnswer: 1,
            explanation: 'Innovation creates new business opportunities and makes graduates more competitive in the job market.',
            points: 1,
            difficulty: 'medium'
          }
        ]
      },
      {
        chapterTitle: 'Entrepreneurship Approach to Marketing and Validation of Products and Services Idea',
        chapterOrder: 5,
        questions: [
          {
            question: 'What is the most important step in validating a product or service idea?',
            options: [
              'Creating a prototype',
              'Getting feedback from potential customers',
              'Developing a marketing plan',
              'Setting prices'
            ],
            correctAnswer: 1,
            explanation: 'Customer feedback is crucial for validating whether a product or service meets market needs.',
            points: 1,
            difficulty: 'easy'
          }
        ]
      },
      {
        chapterTitle: 'Business Planning',
        chapterOrder: 6,
        questions: [
          {
            question: 'Which of the following is NOT a typical component of a business plan?',
            options: [
              'Executive summary',
              'Market analysis',
              'Personal financial statements',
              'Employee handbook'
            ],
            correctAnswer: 3,
            explanation: 'An employee handbook is an operational document, not part of the core business plan structure.',
            points: 1,
            difficulty: 'medium'
          }
        ]
      },
      {
        chapterTitle: 'Sources of Finance and Basic Accounting Records for Entrepreneurs',
        chapterOrder: 7,
        questions: [
          {
            question: 'What is the most common source of startup financing for entrepreneurs in Nigeria?',
            options: [
              'Venture capital',
              'Personal savings',
              'Government grants',
              'Bank loans'
            ],
            correctAnswer: 1,
            explanation: 'Personal savings remain the most common source of startup capital for Nigerian entrepreneurs.',
            points: 1,
            difficulty: 'easy'
          }
        ]
      },
      {
        chapterTitle: 'Human Resources Management Practices For Entrepreneurship',
        chapterOrder: 8,
        questions: [
          {
            question: 'Why is effective human resource management important for entrepreneurs?',
            options: [
              'It helps reduce operational costs',
              'It ensures the right people are in the right roles for business success',
              'It simplifies tax compliance',
              'It replaces the need for business planning'
            ],
            correctAnswer: 1,
            explanation: 'Proper HR management ensures that entrepreneurs have the right team to execute their business vision.',
            points: 1,
            difficulty: 'medium'
          }
        ]
      },
      {
        chapterTitle: 'Introduction to Electronic Commerce',
        chapterOrder: 9,
        questions: [
          {
            question: 'What is the primary advantage of electronic commerce for Nigerian entrepreneurs?',
            options: [
              'It eliminates the need for physical stores',
              'It provides access to global markets',
              'It reduces the need for marketing',
              'It replaces traditional payment methods'
            ],
            correctAnswer: 1,
            explanation: 'E-commerce allows Nigerian entrepreneurs to reach customers beyond geographical boundaries.',
            points: 1,
            difficulty: 'easy'
          }
        ]
      }
    ];

    // Process each quiz
    for (const quizInfo of ent211QuizData) {
      // Find the chapter
      const chapter = await Chapter.findOne({
        course: course._id,
        order: quizInfo.chapterOrder
      });

      if (!chapter) {
        console.log(`Chapter ${quizInfo.chapterOrder} not found for ENT211, skipping...`);
        continue;
      }

      // Check if quiz already exists
      const existingQuiz = await Quiz.findOne({
        course: course._id,
        chapter: chapter._id
      });

      if (existingQuiz) {
        console.log(`Quiz already exists for chapter ${quizInfo.chapterOrder}, skipping...`);
        continue;
      }

      // Create the quiz
      const quiz = new Quiz({
        title: `${quizInfo.chapterTitle} - Quiz`,
        description: `Quiz for ${quizInfo.chapterTitle}`,
        course: course._id,
        chapter: chapter._id,
        questions: quizInfo.questions,
        passingScore: 70,
        timeLimit: 0, // no time limit
        isActive: true,
        totalPoints: quizInfo.questions.reduce((sum, q) => sum + q.points, 0),
        questionCount: quizInfo.questions.length
      });

      await quiz.save();
      console.log(`Created quiz for chapter ${quizInfo.chapterOrder}: ${quizInfo.chapterTitle}`);
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

seedENT211Quizzes();