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

// Import GST111 content function (lazy load to avoid import errors)
const getGST111ChapterContent = async () => {
  try {
    const module = await import('../../gst111/chapters');
    return module.getChapterContent;
  } catch (error) {
    console.error('Failed to load GST111 chapter content:', error);
    return null;
  }
};

// Import COS101 content function (lazy load to avoid import errors)
const getCOS101ChapterContent = async () => {
  try {
    const module = await import('../../cos101/chapters');
    return module.getChapterContent;
  } catch (error) {
    console.error('Failed to load COS101 chapter content:', error);
    return null;
  }
};


// Helper function to get content by chapter title, order, or course code
export const getChapterContent = async (chapterTitle, chapterOrder = null, courseCode = null) => {
  // Check for GST111 content first
  if (courseCode === 'GST 111') {
    const gst111Function = await getGST111ChapterContent();
    if (gst111Function) {
      const gst111Content = gst111Function(chapterTitle, chapterOrder, courseCode);
      if (gst111Content) {
        return gst111Content;
      }
    }
  }

  // Check for COS101 content
  if (courseCode === 'COS 101') {
    const cos101Function = await getCOS101ChapterContent();
    if (cos101Function) {
      const cos101Content = cos101Function(chapterTitle, chapterOrder, courseCode);
      if (cos101Content) {
        return cos101Content;
      }
    }
  }

  // Map chapter titles to content files (GNS311)
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
      return contentMap[normalizedTitle];
    }

    // Try case-insensitive match
    const lowerTitle = normalizedTitle.toLowerCase();
    for (const [key, value] of Object.entries(contentMap)) {
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
}

