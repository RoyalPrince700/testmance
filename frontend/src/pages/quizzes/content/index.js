// Import quiz content directly
// Updated to include Chapter 15
import { gns311Chapter1Quiz } from './gns311-chapter1';
import { gns311Chapter2Quiz } from './gns311-chapter2';
import { gns311Chapter3Quiz } from './gns311-chapter3';
import { gns311Chapter4Quiz } from './gns311-chapter4';
import { gns311Chapter5Quiz } from './gns311-chapter5';
import { gns311Chapter6Quiz } from './gns311-chapter6';
import { gns311Chapter7Quiz } from './gns311-chapter7';
import { gns311Chapter8Quiz } from './gns311-chapter8';
import { gns311Chapter9Quiz } from './gns311-chapter9';
import { gns311Chapter10Quiz } from './gns311-chapter10';
import { gns311Chapter11Quiz } from './gns311-chapter11';
import { gns311Chapter12Quiz } from './gns311-chapter12';
import { gns311Chapter13Quiz } from './gns311-chapter13';
import { gns311Chapter14Quiz } from './gns311-chapter14';
import { gns311Chapter15Quiz } from './gns311-chapter15';
import { gns311Chapter16Quiz } from './gns311-chapter16';

// Import GST111 quiz content function (lazy load to avoid import errors)
const getGST111QuizContent = async () => {
  try {
    const module = await import('../../gst111/quizzes');
    return module.getQuizContent;
  } catch (error) {
    console.error('Failed to load GST111 quiz content:', error);
    return null;
  }
};

// Import COS101 quiz content function (lazy load to avoid import errors)
const getCOS101QuizContent = async () => {
  try {
    const module = await import('../../cos101/quizzes');
    return module.getQuizContent;
  } catch (error) {
    console.error('Failed to load COS101 quiz content:', error);
    return null;
  }
};

// Helper function to get quiz by course code and chapter title
export const getQuizContent = async (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Check for GST111 quiz content first
  if (courseCode === 'GST 111') {
    const gst111Function = await getGST111QuizContent();
    if (gst111Function) {
      const gst111Quiz = gst111Function(chapterTitle, chapterOrder, courseCode);
      if (gst111Quiz) {
        return gst111Quiz;
      }
    }
  }

  // Check for COS101 quiz content
  if (courseCode === 'COS 101') {
    const cos101Function = await getCOS101QuizContent();
    if (cos101Function) {
      const cos101Quiz = cos101Function(chapterTitle, chapterOrder, courseCode);
      if (cos101Quiz) {
        return cos101Quiz;
      }
    }
  }

  // Map chapter titles to quiz files (GNS311)
  const quizMap = {
    'The Structure of Science, Scientific Methods and Revolution': gns311Chapter1Quiz,
    'Philosophical Problems and Scientific Explanations': gns311Chapter2Quiz,
    'Philosophical of problems and Scientific Explanations': gns311Chapter2Quiz, // Alternative title format
    'Concept of Matter': gns311Chapter3Quiz,
    'Conservation of Conventional and Renewable Energy Sources and Their Conversion Techniques': gns311Chapter4Quiz,
    'Applications of Blood Group Systems and DNA Finger Printings': gns311Chapter5Quiz,
    'Medicinal Plants: Myths, Facts, Conservation and Tissue Culture Techniques': gns311Chapter6Quiz,
    'Atmospheric Environment, Air Pollution and Public Health': gns311Chapter7Quiz,
    'Food Production and Preservation for Food Security: The Place of Cooperatives in Nigeria': gns311Chapter8Quiz,
    'Global Threat of Counterfeit Medicines': gns311Chapter9Quiz,
    'Fundamentals of Poultry Production': gns311Chapter10Quiz,
    'Human Nutrition: A Life Course Approach': gns311Chapter11Quiz,
    'Achieving Knowledge Management Functionalities in the Emerging Technology-Driven Society Using Information Technology': gns311Chapter12Quiz,
    'Science and Technology in the Service of Man': gns311Chapter13Quiz,
    'Concepts of Hypothesis Testing in Sciences, Social Sciences and Humanities': gns311Chapter14Quiz,
    'Microbes and Diseases': gns311Chapter15Quiz,
    'Geomorphology of Africa': gns311Chapter16Quiz,
    // Add more quizzes here as they're created
  };

  // Also map by order for GNS 311
  const orderMap = {
    1: gns311Chapter1Quiz, // First chapter of GNS 311
    2: gns311Chapter2Quiz, // Second chapter of GNS 311
    3: gns311Chapter3Quiz, // Third chapter of GNS 311
    4: gns311Chapter4Quiz, // Fourth chapter of GNS 311
    5: gns311Chapter5Quiz, // Fifth chapter of GNS 311
    6: gns311Chapter6Quiz, // Sixth chapter of GNS 311
    7: gns311Chapter7Quiz, // Seventh chapter of GNS 311
    8: gns311Chapter8Quiz, // Eighth chapter of GNS 311
    9: gns311Chapter9Quiz, // Ninth chapter of GNS 311
    10: gns311Chapter10Quiz, // Tenth chapter of GNS 311
    11: gns311Chapter11Quiz, // Eleventh chapter of GNS 311
    12: gns311Chapter12Quiz, // Twelfth chapter of GNS 311
    13: gns311Chapter13Quiz, // Thirteenth chapter of GNS 311
    14: gns311Chapter14Quiz, // Fourteenth chapter of GNS 311
    15: gns311Chapter15Quiz, // Fifteenth chapter of GNS 311
    16: gns311Chapter16Quiz, // Sixteenth chapter of GNS 311
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
export const getQuizByOrder = async (courseCode, chapterOrder) => {
  if (courseCode === 'GST 111') {
    // Use the GST111 quiz content function
    const gst111Function = await getGST111QuizContent();
    if (gst111Function) {
      const gst111Quiz = gst111Function(null, parseInt(chapterOrder), courseCode);
      if (gst111Quiz) {
        return gst111Quiz;
      }
    }
  }

  if (courseCode === 'COS 101') {
    // Use the COS101 quiz content function
    const cos101Function = await getCOS101QuizContent();
    if (cos101Function) {
      const cos101Quiz = cos101Function(null, parseInt(chapterOrder), courseCode);
      if (cos101Quiz) {
        return cos101Quiz;
      }
    }
  }

  if (courseCode === 'GNS 311') {
    const orderMap = {
      '1': gns311Chapter1Quiz,
      '2': gns311Chapter2Quiz,
      '3': gns311Chapter3Quiz,
      '4': gns311Chapter4Quiz,
      '5': gns311Chapter5Quiz,
      '6': gns311Chapter6Quiz,
      '7': gns311Chapter7Quiz,
      '8': gns311Chapter8Quiz,
      '9': gns311Chapter9Quiz,
      '10': gns311Chapter10Quiz,
      '11': gns311Chapter11Quiz,
      '12': gns311Chapter12Quiz,
      '13': gns311Chapter13Quiz,
      '14': gns311Chapter14Quiz,
      '15': gns311Chapter15Quiz,
    };
    return orderMap[chapterOrder] || null;
  }
  return null;
};

// Re-export for convenience
export { gns311Chapter1Quiz, gns311Chapter2Quiz, gns311Chapter3Quiz, gns311Chapter4Quiz, gns311Chapter5Quiz, gns311Chapter6Quiz, gns311Chapter7Quiz, gns311Chapter8Quiz, gns311Chapter9Quiz, gns311Chapter10Quiz, gns311Chapter11Quiz, gns311Chapter12Quiz, gns311Chapter13Quiz, gns311Chapter14Quiz, gns311Chapter15Quiz, gns311Chapter16Quiz };

