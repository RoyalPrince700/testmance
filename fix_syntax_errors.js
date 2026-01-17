const fs = require('fs');
const path = require('path');

// Use glob to find all quiz content files
// We need to find glob since it might not be installed, 
// let's try a simpler approach with fs.readdirSync if glob is not available
// Actually, let's just list the directories we know.

const directories = [
  'frontend/src/pages/bio101/quizzes/content/',
  'frontend/src/pages/cos101/quizzes/content/',
  'frontend/src/pages/gst111/quizzes/content/',
  'frontend/src/pages/ent211/quizzes/content/',
  'frontend/src/pages/quizzes/content/'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to find extra closing brace before closing bracket of array
    // Matches:
    // }
    // }
    // ]
    // or
    // }
    // }
    // ];
    
    const originalContent = content;
    
    // This regex looks for two closing braces followed by whitespace and a closing bracket
    // We replace it with one closing brace and the closing bracket
    content = content.replace(/}\s*}\s*\]/g, '}\n  ]');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  });
});
