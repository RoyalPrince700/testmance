// Import quiz content directly
import { cos101Chapter1Quiz } from './content/cos101-chapter1.js';
import { cos101Chapter2Quiz } from './content/cos101-chapter2.js';
import { cos101Chapter3Quiz } from './content/cos101-chapter3.js';
import { cos101Chapter4Quiz } from './content/cos101-chapter4.js';
import { cos101Chapter5Quiz } from './content/cos101-chapter5.js';
import { cos101Chapter6Quiz } from './content/cos101-chapter6.js';
// Add more quiz imports here as they're created
// etc.

// Helper function to get quiz by course code and chapter title
export const getQuizContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Map chapter titles to quiz files
  const quizMap = {
    'Basic Computing Concepts': cos101Chapter1Quiz,
    'Basic Components of Computer': cos101Chapter2Quiz,
    'Boolean Algebra, Fundamentals of Truth Tables and Precedence Algebra': cos101Chapter3Quiz,
    'Diverse and Growing Computers and Digital Applications': cos101Chapter4Quiz,
    'The Internet: Its Application and Impact on the World Today': cos101Chapter5Quiz,
    'Job Specializations and Future of Computing': cos101Chapter6Quiz,
    // Add more quizzes here as they're created
    // etc.
  };

  // Also map by order for COS 101
  const orderMap = {
    1: cos101Chapter1Quiz, // First chapter of COS 101
    2: cos101Chapter2Quiz, // Second chapter of COS 101
    3: cos101Chapter3Quiz, // Third chapter of COS 101
    4: cos101Chapter4Quiz, // Fourth chapter of COS 101
    5: cos101Chapter5Quiz, // Fifth chapter of COS 101
    6: cos101Chapter6Quiz, // Sixth chapter of COS 101
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

  // Try order match (for COS 101, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'COS 101' && orderMap[chapterOrder]) {
    return orderMap[chapterOrder];
  }

  return null;
};

// Helper function to get quiz by course code and chapter order
export const getQuizByOrder = (courseCode, chapterOrder) => {
  if (courseCode === 'COS 101') {
    const orderMap = {
      '1': cos101Chapter1Quiz,
      '2': cos101Chapter2Quiz,
      '3': cos101Chapter3Quiz,
      '4': cos101Chapter4Quiz,
      '5': cos101Chapter5Quiz,
      '6': cos101Chapter6Quiz,
      // Add more orders here
      // etc.
    };
    return orderMap[chapterOrder] || null;
  }
  return null;
};

// Re-export for convenience
export { cos101Chapter1Quiz, cos101Chapter2Quiz, cos101Chapter3Quiz, cos101Chapter4Quiz, cos101Chapter5Quiz, cos101Chapter6Quiz };
// Add more exports here as quizzes are created
// export { ..., ... };
