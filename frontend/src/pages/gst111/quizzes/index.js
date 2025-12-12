// Import quiz content directly
import { gst111Chapter1Quiz } from './content/gst111-chapter1.js';
import { gst111Chapter2Quiz } from './content/gst111-chapter2.js';
import { gst111Chapter3Quiz } from './content/gst111-chapter3.js';
import { gst111Chapter4Quiz } from './content/gst111-chapter4.js';
import { gst111Chapter5Quiz } from './content/gst111-chapter5.js';
import { gst111Chapter6Quiz } from './content/gst111-chapter6.js';
import { gst111Chapter7Quiz } from './content/gst111-chapter7.js';
import { gst111Chapter8Quiz } from './content/gst111-chapter8.js';
import { gst111Chapter9Quiz } from './content/gst111-chapter9.js';
import { gst111Chapter10Quiz } from './content/gst111-chapter10.js';
import { gst111Chapter11Quiz } from './content/gst111-chapter11.js';
import { gst111Chapter12Quiz } from './content/gst111-chapter12.js';
// Add more quiz imports here as they're created
// etc.

// Helper function to get quiz by course code and chapter title
export const getQuizContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Map chapter titles to quiz files
  const quizMap = {
    'Speaking Skills': gst111Chapter1Quiz,
    'Argument Basics': gst111Chapter2Quiz,
    'Listening Skills': gst111Chapter3Quiz,
    'Clause and Clause Types': gst111Chapter4Quiz,
    'Parts of Speech': gst111Chapter5Quiz,
    'ICT in Modern Language Learning': gst111Chapter6Quiz,
    'Grammatical Words': gst111Chapter7Quiz,
    'Reading Comprehension Strategies': gst111Chapter8Quiz,
    'Writing Skills': gst111Chapter9Quiz,
    'Study Skills and Time Management': gst111Chapter10Quiz,
    'Research and Information Literacy': gst111Chapter11Quiz,
    'Mood In Grammar': gst111Chapter12Quiz,
    // Add more quizzes here as they're created
    // etc.
  };

  // Also map by order for GST 111
  const orderMap = {
    1: gst111Chapter1Quiz, // First chapter of GST 111
    2: gst111Chapter2Quiz, // Second chapter of GST 111
    3: gst111Chapter3Quiz, // Third chapter of GST 111
    4: gst111Chapter4Quiz, // Fourth chapter of GST 111
    5: gst111Chapter5Quiz, // Fifth chapter of GST 111
    6: gst111Chapter6Quiz, // Sixth chapter of GST 111
    7: gst111Chapter7Quiz, // Seventh chapter of GST 111
    8: gst111Chapter8Quiz, // Eighth chapter of GST 111
    9: gst111Chapter9Quiz, // Ninth chapter of GST 111
    10: gst111Chapter10Quiz, // Tenth chapter of GST 111
    11: gst111Chapter11Quiz, // Eleventh chapter of GST 111
    12: gst111Chapter12Quiz, // Twelfth chapter of GST 111
    // Add more orders here
    // etc.
  };

  // Try exact title match first
  if (chapterTitle) {
    const normalizedTitle = chapterTitle.trim();

    if (quizMap[normalizedTitle]) {
      return quizMap[normalizedTitle];
    }

    // Try case-insensitive match
    const lowerTitle = normalizedTitle.toLowerCase();
    for (const [key, value] of Object.entries(quizMap)) {
      if (key.toLowerCase() === lowerTitle) {
        return value;
      }
    }
  }

  // Try order match (for GST 111, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'GST 111' && orderMap[chapterOrder]) {
    return orderMap[chapterOrder];
  }

  return null;
};

// Helper function to get quiz by course code and chapter order
export const getQuizByOrder = (courseCode, chapterOrder) => {
  if (courseCode === 'GST 111') {
    const orderMap = {
      '1': gst111Chapter1Quiz,
      '2': gst111Chapter2Quiz,
      '3': gst111Chapter3Quiz,
      '4': gst111Chapter4Quiz,
      '5': gst111Chapter5Quiz,
      '6': gst111Chapter6Quiz,
      '7': gst111Chapter7Quiz,
      '8': gst111Chapter8Quiz,
      '9': gst111Chapter9Quiz,
      '10': gst111Chapter10Quiz,
      '11': gst111Chapter11Quiz,
      '12': gst111Chapter12Quiz,
      // Add more orders here
      // etc.
    };
    return orderMap[chapterOrder] || null;
  }
  return null;
};

// Re-export for convenience
export { gst111Chapter1Quiz, gst111Chapter2Quiz, gst111Chapter3Quiz, gst111Chapter4Quiz, gst111Chapter5Quiz, gst111Chapter6Quiz, gst111Chapter7Quiz, gst111Chapter8Quiz, gst111Chapter9Quiz, gst111Chapter10Quiz, gst111Chapter11Quiz, gst111Chapter12Quiz };
// Add more exports here as quizzes are created
// export { ..., ... };
