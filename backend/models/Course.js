const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  thumbnail: {
    type: String, // Cloudinary URL
    default: null
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: true
  },
  instructor: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    enum: ['Computer Science', 'Engineering', 'Business', 'Arts', 'Science', 'Medicine', 'Law', 'General Studies', 'Other'],
    default: 'Other'
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  duration: {
    type: Number, // in hours
    default: 0
  },
  chapters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  }],
  prerequisites: [{
    type: String,
    trim: true
  }],
  tags: [{
    type: String,
    trim: true
  }],
  totalStudents: {
    type: Number,
    default: 0
  },
  averageRating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  ratingCount: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Virtual for total chapters
courseSchema.virtual('chapterCount').get(function() {
  return this.chapters.length;
});

// Update total students count
courseSchema.methods.updateStudentCount = async function() {
  const User = mongoose.model('User');
  const Chapter = mongoose.model('Chapter');

  // Count unique users who have completed at least one chapter in this course
  const chapters = await Chapter.find({ course: this._id }).select('_id');
  const chapterIds = chapters.map(ch => ch._id);

  const uniqueStudents = await User.distinct('username', {
    'completedChapters.chapter': { $in: chapterIds }
  });

  this.totalStudents = uniqueStudents.length;
  await this.save();
};

// Calculate average rating
courseSchema.methods.updateRating = function(newRating) {
  const totalRating = this.averageRating * this.ratingCount;
  this.ratingCount += 1;
  this.averageRating = (totalRating + newRating) / this.ratingCount;
};

module.exports = mongoose.model('Course', courseSchema);
