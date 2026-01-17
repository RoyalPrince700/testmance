const fs = require('fs');
const path = require('path');

// Define color mappings for dark mode - simple replacements
// Order matters: complex combinations first, then simple ones
const replacements = [
  // Complex class combinations first
  ['border-l-4 border-teal-500', 'border-l-4 border-teal-500 dark:border-teal-400'],
  ['border-l-4 border-blue-500', 'border-l-4 border-blue-500 dark:border-blue-400'],
  ['border-l-4 border-green-500', 'border-l-4 border-green-500 dark:border-green-400'],
  ['border-l-4 border-purple-500', 'border-l-4 border-purple-500 dark:border-purple-400'],
  ['border-l-4 border-yellow-500', 'border-l-4 border-yellow-500 dark:border-yellow-400'],
  ['border-l-4 border-red-500', 'border-l-4 border-red-500 dark:border-red-400'],
  ['border-l-4 border-indigo-500', 'border-l-4 border-indigo-500 dark:border-indigo-400'],

  // Gradient backgrounds
  ['bg-gradient-to-r from-purple-50 to-pink-50', 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'],
  ['bg-gradient-to-r from-blue-50 to-cyan-50', 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'],
  ['bg-gradient-to-r from-teal-50 to-blue-50', 'bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20'],

  // Single class replacements
  ['bg-teal-50', 'bg-teal-50 dark:bg-teal-900/20'],
  ['border-teal-500', 'border-teal-500 dark:border-teal-400'],
  ['text-teal-900', 'text-teal-900 dark:text-teal-100'],
  ['text-teal-800', 'text-teal-800 dark:text-teal-200'],
  ['text-teal-700', 'text-teal-700 dark:text-teal-300'],
  ['border-teal-200', 'border-teal-200 dark:border-teal-800'],

  ['bg-blue-50', 'bg-blue-50 dark:bg-blue-900/20'],
  ['border-blue-500', 'border-blue-500 dark:border-blue-400'],
  ['text-blue-900', 'text-blue-900 dark:text-blue-100'],
  ['text-blue-800', 'text-blue-800 dark:text-blue-200'],
  ['text-blue-700', 'text-blue-700 dark:text-blue-300'],
  ['border-blue-200', 'border-blue-200 dark:border-blue-800'],
  ['border-blue-300', 'border-blue-300 dark:border-blue-700'],

  ['bg-green-50', 'bg-green-50 dark:bg-green-900/20'],
  ['border-green-500', 'border-green-500 dark:border-green-400'],
  ['text-green-900', 'text-green-900 dark:text-green-100'],
  ['text-green-800', 'text-green-800 dark:text-green-200'],
  ['text-green-700', 'text-green-700 dark:text-green-300'],
  ['border-green-200', 'border-green-200 dark:border-green-800'],

  ['bg-purple-50', 'bg-purple-50 dark:bg-purple-900/20'],
  ['border-purple-500', 'border-purple-500 dark:border-purple-400'],
  ['text-purple-900', 'text-purple-900 dark:text-purple-100'],
  ['text-purple-800', 'text-purple-800 dark:text-purple-200'],
  ['text-purple-700', 'text-purple-700 dark:text-purple-300'],
  ['border-purple-200', 'border-purple-200 dark:border-purple-800'],
  ['border-purple-300', 'border-purple-300 dark:border-purple-700'],

  ['bg-yellow-50', 'bg-yellow-50 dark:bg-yellow-900/20'],
  ['border-yellow-500', 'border-yellow-500 dark:border-yellow-400'],
  ['text-yellow-900', 'text-yellow-900 dark:text-yellow-100'],
  ['text-yellow-800', 'text-yellow-800 dark:text-yellow-200'],
  ['text-yellow-700', 'text-yellow-700 dark:text-yellow-300'],
  ['border-yellow-300', 'border-yellow-300 dark:border-yellow-700'],

  ['bg-red-50', 'bg-red-50 dark:bg-red-900/20'],
  ['border-red-500', 'border-red-500 dark:border-red-400'],
  ['text-red-900', 'text-red-900 dark:text-red-100'],
  ['text-red-800', 'text-red-800 dark:text-red-200'],
  ['text-red-700', 'text-red-700 dark:text-red-300'],

  ['bg-indigo-50', 'bg-indigo-50 dark:bg-indigo-900/20'],
  ['border-indigo-500', 'border-indigo-500 dark:border-indigo-400'],
  ['text-indigo-900', 'text-indigo-900 dark:text-indigo-100'],
  ['text-indigo-800', 'text-indigo-800 dark:text-indigo-200'],
  ['text-indigo-700', 'text-indigo-700 dark:text-indigo-300'],

  ['bg-gray-50', 'bg-gray-50 dark:bg-gray-800'],
  ['text-gray-900', 'text-gray-900 dark:text-white'],
  ['text-gray-700', 'text-gray-700 dark:text-gray-300'],
  ['bg-white', 'bg-white dark:bg-gray-700'],
];

function updateFile(filePath) {
  console.log(`Updating ${filePath}...`);

  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Apply each replacement
  replacements.forEach(([oldClass, newClass]) => {
    if (content.includes(oldClass)) {
      // Use a more precise regex to match whole class names
      const regex = new RegExp(`\\b${oldClass.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
      content = content.replace(regex, newClass);
      updated = true;
    }
  });

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated ${filePath}`);
  } else {
    console.log(`- No changes needed for ${filePath}`);
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip directories
      return;
    }

    if (file.endsWith('-gns311.js')) {
      updateFile(filePath);
    }
  });
}

// Process the chapters content directory
const chaptersDir = path.join(__dirname, 'frontend/src/pages/chapters/content');
console.log('Starting HTML dark mode updates for GNS311 chapters...\n');
processDirectory(chaptersDir);
console.log('\n✅ All GNS311 chapter files have been updated with dark mode support!');