// Import quiz content directly
import { bio101Chapter1Quiz } from './content/bio101-chapter1.js';
import { bio101Chapter2Quiz } from './content/bio101-chapter2.js';
import { bio101Chapter3Quiz } from './content/bio101-chapter3.js';
import { bio101Chapter4Quiz } from './content/bio101-chapter4.js';
import { bio101Chapter5Quiz } from './content/bio101-chapter5.js';
import { bio101Chapter6Quiz } from './content/bio101-chapter6.js';
// Add more quiz imports here as they're created
// etc.

// Helper function to get quiz by course code and chapter title
export const getQuizContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Map chapter titles to quiz files
  const quizMap = {
    'Characteristics and Classification of Living Organisms': bio101Chapter1Quiz,
    'INTERRELATIONSHIP IN ORGANISMS': bio101Chapter2Quiz,
    'ECOLOGY': bio101Chapter3Quiz,
    'CELL': bio101Chapter4Quiz,
    'GENES': bio101Chapter5Quiz,
    'Heredity and evolution': bio101Chapter6Quiz,
    // Add more quizzes here as they're created
    // etc.
  };

  // Also map by order for BIO 101
  const orderMap = {
    1: bio101Chapter1Quiz, // First chapter of BIO 101
    2: bio101Chapter2Quiz, // Second chapter of BIO 101
    3: bio101Chapter3Quiz, // Third chapter of BIO 101
    4: bio101Chapter4Quiz, // Fourth chapter of BIO 101
    5: bio101Chapter5Quiz, // Fifth chapter of BIO 101
    6: bio101Chapter6Quiz, // Sixth chapter of BIO 101
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

  // Try order match (for BIO 101, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'BIO 101' && orderMap[chapterOrder]) {
    return orderMap[chapterOrder];
  }

  return null;
};

// Helper function to get quiz by course code and chapter order
export const getQuizByOrder = (courseCode, chapterOrder) => {
  if (courseCode === 'BIO 101') {
    const orderMap = {
      '1': bio101Chapter1Quiz,
      '2': bio101Chapter2Quiz,
      '3': bio101Chapter3Quiz,
      '4': bio101Chapter4Quiz,
      '5': bio101Chapter5Quiz,
      '6': bio101Chapter6Quiz,
      // Add more orders here
      // etc.
    };
    return orderMap[chapterOrder] || null;
  }
  return null;
};

// Re-export for convenience
export { bio101Chapter1Quiz, bio101Chapter2Quiz, bio101Chapter3Quiz, bio101Chapter4Quiz, bio101Chapter5Quiz, bio101Chapter6Quiz };
// Add more exports here as quizzes are created
// export { ..., ... };
