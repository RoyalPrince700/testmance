const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  order: {
    type: Number,
    required: true,
    min: 1
  },
  content: {
    type: String, // HTML content
    required: true
  },
  estimatedTime: {
    type: Number, // in minutes
    default: 30
  },
  thumbnail: {
    type: String, // Cloudinary URL
    default: null
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz'
  },
  prerequisites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  }],
  tags: [{
    type: String,
    trim: true
  }],
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

// Ensure unique order per course
chapterSchema.index({ course: 1, order: 1 }, { unique: true });

// Virtual for completion stats
chapterSchema.virtual('completionStats').get(async function() {
  const User = mongoose.model('User');
  const totalStudents = await User.countDocuments({
    university: (await mongoose.model('Course').findById(this.course)).university
  });

  const completedCount = await User.countDocuments({
    'completedChapters.chapter': this._id
  });

  return {
    totalStudents,
    completedCount,
    completionRate: totalStudents > 0 ? (completedCount / totalStudents) * 100 : 0
  };
});

module.exports = mongoose.model('Chapter', chapterSchema);
