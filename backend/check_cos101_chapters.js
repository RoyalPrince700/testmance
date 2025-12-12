// Quick script to check COS 101 chapters in database
const mongoose = require('mongoose');
const Course = require('./models/Course');
const Chapter = require('./models/Chapter');
require('dotenv').config();

async function checkCOS101Chapters() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testmancer');

    // Find all courses
    const courses = await mongoose.model('Course').find({});

    for (const course of courses) {
      // Find all chapters for this course
      const chapters = await Chapter.find({ course: course._id });
      chapters.forEach((chapter, index) => {
        // Chapter found
      });
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
  }
}

checkCOS101Chapters();
