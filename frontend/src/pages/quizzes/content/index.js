// Import quiz content directly
import { gns311Chapter1Quiz } from './gns311-chapter1';
import { gns311Chapter2Quiz } from './gns311-chapter2';
import { gns311Chapter3Quiz } from './gns311-chapter3';
import { gns311Chapter4Quiz } from './gns311-chapter4';
import { gns311Chapter5Quiz } from './gns311-chapter5';

// Helper function to get quiz by course code and chapter title
export const getQuizContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Map chapter titles to quiz files
  const quizMap = {
    'The Structure of Science, Scientific Methods and Revolution': gns311Chapter1Quiz,
    'Philosophical Problems and Scientific Explanations': gns311Chapter2Quiz,
    'Philosophical of problems and Scientific Explanations': gns311Chapter2Quiz, // Alternative title format
    'Concept of Matter': gns311Chapter3Quiz,
    'Conservation of Conventional and Renewable Energy Sources and Their Conversion Techniques': gns311Chapter4Quiz,
    'Applications of Blood Group Systems and DNA Finger Printings': gns311Chapter5Quiz,
    // Add more quizzes here as they're created
  };

  // Also map by order for GNS 311
  const orderMap = {
    1: gns311Chapter1Quiz, // First chapter of GNS 311
    2: gns311Chapter2Quiz, // Second chapter of GNS 311
    3: gns311Chapter3Quiz, // Third chapter of GNS 311
    4: gns311Chapter4Quiz, // Fourth chapter of GNS 311
    5: gns311Chapter5Quiz, // Fifth chapter of GNS 311
    // Add more orders here
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

  // Try order match (for GNS 311, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'GNS 311' && orderMap[chapterOrder]) {
    return orderMap[chapterOrder];
  }

  return null;
};

// Helper function to get quiz by course code and chapter order
export const getQuizByOrder = (courseCode, chapterOrder) => {
  if (courseCode === 'GNS 311') {
    const orderMap = {
      1: gns311Chapter1Quiz,
      2: gns311Chapter2Quiz,
      3: gns311Chapter3Quiz,
      4: gns311Chapter4Quiz,
      5: gns311Chapter5Quiz,
    };
    return orderMap[chapterOrder] || null;
  }
  return null;
};

// Re-export for convenience
export { gns311Chapter1Quiz, gns311Chapter2Quiz, gns311Chapter3Quiz, gns311Chapter4Quiz, gns311Chapter5Quiz };

