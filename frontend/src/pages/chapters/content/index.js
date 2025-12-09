// Import chapter content directly
import { chapter1Content } from './chapter1-gns311.js';
import { chapter2Content } from './chapter2-gns311.js';
import { chapter3Content } from './chapter3-gns311.js';
import { chapter4Content } from './chapter4-gns311.js';
import { chapter5Content } from './chapter5-gns311.js';
import { chapter6Content } from './chapter6-gns311.js';
import { chapter7Content } from './chapter7-gns311.js';
import { chapter8Content } from './chapter8-gns311.js';
import { chapter9Content } from './chapter9-gns311.js';
import { chapter10Content } from './chapter10-gns311.js';
import { chapter11Content } from './chapter11-gns311.js';
import { chapter12Content } from './chapter12-gns311.js';
import { chapter13Content } from './chapter13-gns311.js';
import { chapter14Content } from './chapter14-gns311.js';
import { chapter15Content } from './chapter15-gns311.js';
import { chapter16Content } from './chapter16-gns311.js';

// Debug: Check if import worked
console.log('chapter1Content imported:', typeof chapter1Content, !!chapter1Content);
console.log('chapter2Content imported:', typeof chapter2Content, !!chapter2Content);
console.log('chapter3Content imported:', typeof chapter3Content, !!chapter3Content);
console.log('chapter4Content imported:', typeof chapter4Content, !!chapter4Content);
console.log('chapter5Content imported:', typeof chapter5Content, !!chapter5Content);
console.log('chapter6Content imported:', typeof chapter6Content, !!chapter6Content);
console.log('chapter7Content imported:', typeof chapter7Content, !!chapter7Content);
console.log('chapter8Content imported:', typeof chapter8Content, !!chapter8Content);
console.log('chapter9Content imported:', typeof chapter9Content, !!chapter9Content);
console.log('chapter10Content imported:', typeof chapter10Content, !!chapter10Content);
console.log('chapter11Content imported:', typeof chapter11Content, !!chapter11Content);
console.log('chapter12Content imported:', typeof chapter12Content, !!chapter12Content);
console.log('chapter13Content imported:', typeof chapter13Content, !!chapter13Content);
console.log('chapter14Content imported:', typeof chapter14Content, !!chapter14Content);
console.log('chapter15Content imported:', typeof chapter15Content, !!chapter15Content);
console.log('chapter16Content imported:', typeof chapter16Content, !!chapter16Content);

// Helper function to get content by chapter title, order, or course code
export const getChapterContent = (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Debug: Check if chapter1Content is available
  console.log('getChapterContent called, chapter1Content available:', typeof chapter1Content, !!chapter1Content);
  
  // Map chapter titles to content files
  const contentMap = {
    'The Structure of Science, Scientific Methods and Revolution': chapter1Content,
    'Philosophical Problems and Scientific Explanations': chapter2Content,
    'Philosophical of problems and Scientific Explanations': chapter2Content, // Backend typo variant
    'Concept of Matter': chapter3Content,
    'Conservation of Conventional and Renewable Energy Sources and Their Conversion Techniques': chapter4Content,
    'Applications of Blood Group Systems and DNA Finger Printings': chapter5Content,
    'Medicinal Plants: Myths, Facts, Conservation and Tissue Culture Techniques': chapter6Content,
    'Atmospheric Environment, Air Pollution and Public Health': chapter7Content,
    'Food Production and Preservation for Food Security: The Place of Cooperatives in Nigeria': chapter8Content,
    'Global Threat of Counterfeit Medicines': chapter9Content,
    'Fundamentals of Poultry Production': chapter10Content,
    'Human Nutrition: A Life Course Approach': chapter11Content,
    'Achieving Knowledge Management Functionalities in the Emerging Technology-Driven Society Using Information Technology': chapter12Content,
    'Science and Technology in the Service of Man': chapter13Content,
    'Concepts of Hypothesis Testing in Sciences, Social Sciences and Humanities': chapter14Content,
    'Microbes and Diseases': chapter15Content,
    'Geomorphology of Africa': chapter16Content,
    // Add more chapters here as they're created
  };

  // Also map by order for GNS 311
  const orderMap = {
    1: chapter1Content, // First chapter of GNS 311
    2: chapter2Content, // Second chapter of GNS 311
    3: chapter3Content, // Third chapter of GNS 311
    4: chapter4Content, // Fourth chapter of GNS 311
    5: chapter5Content, // Fifth chapter of GNS 311
    6: chapter6Content, // Sixth chapter of GNS 311
    7: chapter7Content, // Seventh chapter of GNS 311
    8: chapter8Content, // Eighth chapter of GNS 311
    9: chapter9Content, // Ninth chapter of GNS 311
    10: chapter10Content, // Tenth chapter of GNS 311
    11: chapter11Content, // Eleventh chapter of GNS 311
    12: chapter12Content, // Twelfth chapter of GNS 311
    13: chapter13Content, // Thirteenth chapter of GNS 311
    14: chapter14Content, // Fourteenth chapter of GNS 311
    15: chapter15Content, // Fifteenth chapter of GNS 311
    16: chapter16Content, // Sixteenth chapter of GNS 311
    // Add more orders here
  };

  // Try exact title match first
  if (chapterTitle) {
    const normalizedTitle = chapterTitle.trim();
    
    if (contentMap[normalizedTitle]) {
      console.log('Found content by exact title match');
      return contentMap[normalizedTitle];
    }

    // Try case-insensitive match
    const lowerTitle = normalizedTitle.toLowerCase();
    for (const [key, value] of Object.entries(contentMap)) {
      if (key.toLowerCase() === lowerTitle) {
        console.log('Found content by case-insensitive match');
        return value;
      }
    }
  }

  // Try order match (for GNS 311, order 1 = chapter 1)
  if (chapterOrder && courseCode === 'GNS 311' && orderMap[chapterOrder]) {
    console.log(`Found content by order ${chapterOrder} for ${courseCode}`);
    return orderMap[chapterOrder];
  }

  console.log('No content found:', { chapterTitle, chapterOrder, courseCode });
  console.log('Available titles:', Object.keys(contentMap));
  
  return null;
};

// Re-export for convenience
export { chapter1Content, chapter2Content, chapter3Content, chapter4Content, chapter5Content, chapter6Content, chapter7Content, chapter8Content, chapter9Content, chapter10Content, chapter11Content, chapter12Content, chapter13Content, chapter14Content, chapter15Content, chapter16Content };

