// Import quiz content directly
import { ent211Chapter1Quiz } from './content/ent211-chapter1.js';
import { ent211Chapter2Quiz } from './content/ent211-chapter2.js';
import { ent211Chapter3Quiz } from './content/ent211-chapter3.js';
import { ent211Chapter4Quiz } from './content/ent211-chapter4.js';
import { ent211Chapter5Quiz } from './content/ent211-chapter5.js';
import { ent211Chapter6Quiz } from './content/ent211-chapter6.js';
import { ent211Chapter7Quiz } from './content/ent211-chapter7.js';
import { ent211Chapter8Quiz } from './content/ent211-chapter8.js';
import { ent211Chapter9Quiz } from './content/ent211-chapter9.js';
// Add more quiz imports here as they're created
// etc.

// Helper function to get quiz by course code and chapter title
export const getQuizContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Map chapter titles to quiz files
  const quizMap = {
    'Concept of Entrepreneurship': ent211Chapter1Quiz,
    'Nigerian Business Environment and Entrepreneurial Opportunities in Nigeria through SMEs': ent211Chapter2Quiz,
    'Feasibility Study And Feasibility Report Writing': ent211Chapter3Quiz,
    'Understanding The Nexus Between Innovation And Employability For Nigerian Graduates': ent211Chapter4Quiz,
    'Entrepreneurship Approach to Marketing and Validation of Products and Services Idea': ent211Chapter5Quiz,
    'Business Planning': ent211Chapter6Quiz,
    'Sources of Finance and Basic Accounting Records for Entrepreneurs': ent211Chapter7Quiz,
    'Human Resources Management Practices For Entrepreneurship': ent211Chapter8Quiz,
    'Introduction to Electronic Commerce': ent211Chapter9Quiz,
    // Add more quizzes here as they're created
    // etc.
  };

  // Also map by order for ENT 211
  const orderMap = {
    1: ent211Chapter1Quiz, // First chapter of ENT 211
    2: ent211Chapter2Quiz, // Second chapter of ENT 211
    3: ent211Chapter3Quiz, // Third chapter of ENT 211
    4: ent211Chapter4Quiz, // Fourth chapter of ENT 211
    5: ent211Chapter5Quiz, // Fifth chapter of ENT 211
    6: ent211Chapter6Quiz, // Sixth chapter of ENT 211
    7: ent211Chapter7Quiz, // Seventh chapter of ENT 211
    8: ent211Chapter8Quiz, // Eighth chapter of ENT 211
    9: ent211Chapter9Quiz, // Ninth chapter of ENT 211
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

  // Try order match (for ENT 211, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'ENT 211' && orderMap[chapterOrder]) {
    return orderMap[chapterOrder];
  }

  return null;
};

// Helper function to get quiz by course code and chapter order
export const getQuizByOrder = (courseCode, chapterOrder) => {
  if (courseCode === 'ENT 211') {
    const orderMap = {
      '1': ent211Chapter1Quiz,
      '2': ent211Chapter2Quiz,
      '3': ent211Chapter3Quiz,
      '4': ent211Chapter4Quiz,
      '5': ent211Chapter5Quiz,
      '6': ent211Chapter6Quiz,
      '7': ent211Chapter7Quiz,
      '8': ent211Chapter8Quiz,
      '9': ent211Chapter9Quiz,
      // Add more orders here
      // etc.
    };
    return orderMap[chapterOrder] || null;
  }
  return null;
};

// Re-export for convenience
export { ent211Chapter1Quiz, ent211Chapter2Quiz, ent211Chapter3Quiz, ent211Chapter4Quiz, ent211Chapter5Quiz, ent211Chapter6Quiz, ent211Chapter7Quiz, ent211Chapter8Quiz, ent211Chapter9Quiz };
// Add more exports here as quizzes are created
// export { ..., ... };