const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Check file type
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// @route   POST /api/uploads/avatar
// @desc    Upload user avatar
// @access  Private
router.post('/avatar', protect, upload.single('avatar'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    // Convert buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'testmancer/avatars',
      public_id: `user_${req.user._id}_${Date.now()}`,
      transformation: [
        { width: 150, height: 150, crop: 'fill', gravity: 'face' },
        { quality: 'auto' }
      ]
    });

    // Update user avatar
    const User = require('../models/User');
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { avatar: result.secure_url },
      { new: true }
    );

    res.json({
      success: true,
      message: 'Avatar uploaded successfully',
      data: {
        avatar: result.secure_url,
        user
      }
    });
  } catch (error) {
    console.error('Avatar upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during upload'
    });
  }
});

// @route   POST /api/uploads/course-image
// @desc    Upload course thumbnail
// @access  Private (admin only)
router.post('/course-image', protect, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    // Convert buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'testmancer/courses',
      public_id: `course_${Date.now()}`,
      transformation: [
        { width: 400, height: 225, crop: 'fill' },
        { quality: 'auto' }
      ]
    });

    res.json({
      success: true,
      message: 'Course image uploaded successfully',
      data: {
        imageUrl: result.secure_url
      }
    });
  } catch (error) {
    console.error('Course image upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during upload'
    });
  }
});

// @route   POST /api/uploads/chapter-image
// @desc    Upload chapter thumbnail
// @access  Private (admin only)
router.post('/chapter-image', protect, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    // Convert buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'testmancer/chapters',
      public_id: `chapter_${Date.now()}`,
      transformation: [
        { width: 300, height: 200, crop: 'fill' },
        { quality: 'auto' }
      ]
    });

    res.json({
      success: true,
      message: 'Chapter image uploaded successfully',
      data: {
        imageUrl: result.secure_url
      }
    });
  } catch (error) {
    console.error('Chapter image upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during upload'
    });
  }
});

// @route   POST /api/uploads/university-logo
// @desc    Upload university logo
// @access  Private (admin only)
router.post('/university-logo', protect, upload.single('logo'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    // Convert buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'testmancer/universities',
      public_id: `university_${Date.now()}`,
      transformation: [
        { width: 200, height: 200, crop: 'fill' },
        { quality: 'auto' }
      ]
    });

    res.json({
      success: true,
      message: 'University logo uploaded successfully',
      data: {
        logoUrl: result.secure_url
      }
    });
  } catch (error) {
    console.error('University logo upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during upload'
    });
  }
});

// @route   DELETE /api/uploads/delete
// @desc    Delete image from Cloudinary
// @access  Private
router.delete('/delete', protect, async (req, res) => {
  try {
    const { publicId } = req.body;

    if (!publicId) {
      return res.status(400).json({
        success: false,
        message: 'Public ID is required'
      });
    }

    // Delete from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    res.json({
      success: true,
      message: 'Image deleted successfully',
      data: result
    });
  } catch (error) {
    console.error('Delete image error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during deletion'
    });
  }
});

module.exports = router;
