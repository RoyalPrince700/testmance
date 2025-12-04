const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  shortName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true
  },
  location: {
    city: String,
    state: String,
    country: {
      type: String,
      default: 'Nigeria'
    }
  },
  logo: {
    type: String, // Cloudinary URL
    default: null
  },
  description: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  studentCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Update student count when users are added/removed
universitySchema.methods.updateStudentCount = async function() {
  const User = mongoose.model('User');
  this.studentCount = await User.countDocuments({ university: this._id, isActive: true });
  await this.save();
};

module.exports = mongoose.model('University', universitySchema);
