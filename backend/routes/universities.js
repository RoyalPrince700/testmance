const express = require('express');
const University = require('../models/University');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/universities
// @desc    Get all universities
// @access  Public
router.get('/', async (req, res) => {
  try {
    const universities = await University.find({ isActive: true })
      .select('name shortName location logo description studentCount')
      .sort({ name: 1 });

    res.json({
      success: true,
      count: universities.length,
      data: universities
    });
  } catch (error) {
    console.error('Get universities error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/universities/:id
// @desc    Get single university with courses
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const university = await University.findById(req.params.id)
      .populate({
        path: 'courses',
        match: { isPublished: true, isActive: true },
        select: 'title code description thumbnail category difficulty totalStudents averageRating'
      })
      .select('-__v');

    if (!university) {
      return res.status(404).json({
        success: false,
        message: 'University not found'
      });
    }

    res.json({
      success: true,
      data: university
    });
  } catch (error) {
    console.error('Get university error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/universities
// @desc    Create a new university (admin only)
// @access  Private (would need admin middleware)
router.post('/', protect, async (req, res) => {
  try {
    const { name, shortName, location, description, website } = req.body;

    // Check if university already exists
    const existingUniversity = await University.findOne({
      $or: [{ name }, { shortName }]
    });

    if (existingUniversity) {
      return res.status(400).json({
        success: false,
        message: existingUniversity.name === name ? 'University name already exists' : 'University short name already exists'
      });
    }

    const university = await University.create({
      name,
      shortName,
      location,
      description,
      website
    });

    res.status(201).json({
      success: true,
      message: 'University created successfully',
      data: university
    });
  } catch (error) {
    console.error('Create university error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/universities/:id
// @desc    Update university (admin only)
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const university = await University.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!university) {
      return res.status(404).json({
        success: false,
        message: 'University not found'
      });
    }

    res.json({
      success: true,
      message: 'University updated successfully',
      data: university
    });
  } catch (error) {
    console.error('Update university error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/universities/:id/courses
// @desc    Get courses for a specific university
// @access  Public
router.get('/:id/courses', async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (!university) {
      return res.status(404).json({
        success: false,
        message: 'University not found'
      });
    }

    const courses = await require('../models/Course').find({
      university: req.params.id,
      isPublished: true,
      isActive: true
    })
    .populate('chapters', 'title order')
    .select('title code description thumbnail category difficulty duration totalStudents averageRating chapterCount')
    .sort({ title: 1 });

    res.json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    console.error('Get university courses error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
