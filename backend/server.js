const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const DailyStats = require('./models/DailyStats');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Daily Visit Tracking Middleware
app.use(async (req, res, next) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Use findOneAndUpdate with upsert for atomicity
    await DailyStats.findOneAndUpdate(
      { date: today },
      { 
        $inc: { visitors: 1 },
        $addToSet: { uniqueVisitors: ip } 
      },
      { upsert: true, new: true }
    );
  } catch (err) {
    console.error('Error tracking daily stats:', err);
  }
  next();
});

// Session middleware (required for Passport)
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testmancer')
.then(() => {
  console.log('Connected to MongoDB successfully');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/universities', require('./routes/universities'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/chapters', require('./routes/chapters'));
app.use('/api/quizzes', require('./routes/quizzes'));
app.use('/api/leaderboard', require('./routes/leaderboard'));
app.use('/api/uploads', require('./routes/uploads'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/ca', require('./routes/ca'));
app.use('/api/exam', require('./routes/exam'));
app.use('/api/results', require('./routes/results'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'TestMancer API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('Server failed to start:', err);
});
