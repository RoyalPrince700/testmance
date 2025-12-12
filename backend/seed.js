const mongoose = require('mongoose');
const User = require('./models/User');
const University = require('./models/University');
const Course = require('./models/Course');
const Chapter = require('./models/Chapter');
require('dotenv').config();

// Import data files
const universitiesData = require('./data/universities');
const coursesData = require('./data/courses');
const chaptersData = require('./data/chapters');

const seedData = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testmancer');

    // 1. Sync Universities
    // We use a map to store the DB IDs for linking later
    const universityMap = {}; 

    for (const uniData of universitiesData) {
      const uni = await University.findOneAndUpdate(
        { shortName: uniData.shortName },
        uniData,
        { upsert: true, new: true }
      );
      universityMap[uni.shortName] = uni._id;
    }

    // 2. Sync Courses
    const courseMap = {};

    for (const courseData of coursesData) {
      // Find the university ID using the shortName
      const universityId = universityMap[courseData.universityShortName];
      
      if (!universityId) {
        console.warn(`Skipping course ${courseData.code}: University ${courseData.universityShortName} not found`);
        continue;
      }

      // Remove the helper field before saving
      const { universityShortName, ...courseFields } = courseData;

      const course = await Course.findOneAndUpdate(
        { code: courseFields.code },
        { ...courseFields, university: universityId },
        { upsert: true, new: true }
      );
      courseMap[course.code] = course._id;
    }

    // 3. Sync Chapters
    // First, collect all valid chapter identifiers from the data
    const validChapterKeys = new Set();
    chaptersData.forEach(chapterData => {
      const courseId = courseMap[chapterData.courseCode];
      if (courseId) {
        validChapterKeys.add(`${courseId}_${chapterData.order}`);
      }
    });

    // Remove chapters that are no longer in the data
    const allExistingChapters = await Chapter.find({});
    for (const chapter of allExistingChapters) {
      const chapterKey = `${chapter.course}_${chapter.order}`;
      if (!validChapterKeys.has(chapterKey)) {
        await Chapter.findByIdAndDelete(chapter._id);
      }
    }

    const chapterMap = {};
    for (const chapterData of chaptersData) {
      // Find the course ID using the code
      const courseId = courseMap[chapterData.courseCode];

      if (!courseId) {
        console.warn(`Skipping chapter ${chapterData.title}: Course ${chapterData.courseCode} not found`);
        continue;
      }

      const { courseCode, ...chapterFields } = chapterData;

      const chapter = await Chapter.findOneAndUpdate(
        { course: courseId, order: chapterFields.order },
        {
          ...chapterFields,
          course: courseId,
          isPublished: true,
          isActive: true
        },
        { upsert: true, new: true }
      );
      
      // Store chapter mapping for quiz creation
      const chapterKey = `${chapterData.courseCode}_${chapterFields.title}`;
      chapterMap[chapterKey] = chapter._id;
    }

    // Note: Quizzes are now handled in frontend (frontend/src/pages/quizzes/content/)
    // No need to create quizzes in backend anymore

    // 5. Create/Update Sample User (Optional, keeps it ensuring access)
    const sampleUserEmail = 'test@example.com';
    const uniId = Object.values(universityMap)[0]; // Default to first uni
    
    const userExists = await User.findOne({ email: sampleUserEmail });
    if (!userExists && uniId) {
      await User.create({
        username: 'teststudent',
        email: sampleUserEmail,
        password: 'password123',
        university: uniId
      });
    }

  } catch (error) {
    console.error('Sync error:', error);
  } finally {
    await mongoose.connection.close();
    process.exit();
  }
};

seedData();
