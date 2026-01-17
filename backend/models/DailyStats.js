const mongoose = require('mongoose');

const dailyStatsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true, // One entry per day
    index: true
  },
  visitors: {
    type: Number,
    default: 0
  },
  uniqueVisitors: [String], // Array of IPs or session IDs for the day
  quizCompletions: {
    type: Number,
    default: 0
  },
  examCompletions: {
    type: Number,
    default: 0
  },
  caCompletions: {
    type: Number,
    default: 0
  },
  chapterCompletions: {
    type: Number,
    default: 0
  },
  newUsers: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Static method to increment daily metrics
dailyStatsSchema.statics.incrementMetric = async function(metric, amount = 1) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return this.findOneAndUpdate(
    { date: today },
    { $inc: { [metric]: amount } },
    { upsert: true, new: true }
  );
};

module.exports = mongoose.model('DailyStats', dailyStatsSchema);
