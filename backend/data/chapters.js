const gns311Modules = [
  'The Structure of Science, Scientific Methods and Revolution',
  'Philosophical of problems and Scientific Explanations',
  'Concept of Matter',
  'Conservation of Conventional and Renewable Energy Sources and their Conversion Techniques',
  'Applications of Blood Group Systems and DNA Finger Printings',
  'Medicinal plants: myths, facts, Conservation and tissue culture techniques',
  'Atmospheric Environment, Air Pollution and Public Health',
  'Food Production and Preservation for Food Security: The Place of Cooperatives in Nigeria',
  'Global Threat of Counterfeit Medicines',
  'Fundamentals of Poultry Production',
  'Human Nutrition- A Life Course Approach',
  'Achieving Knowledge Management Functionalities in the Emerging Technology-Driven Society Using Information Technology',
  'Science and Technology in the Service of Man',
  'Concepts of Hypothesis Testing in Sciences, Social Sciences and Humanities',
  'Microbes and Diseases',
  'Geomorphology of Africa'
];

const gst111Modules = [
  'Speaking Skills',
  'Argument Basics',
  'Listening Skills',
  'Clause and Clause Types',
  'Parts of Speech',
  'ICT in Modern Language Learning',
  'Grammatical Words',
  'Reading Comprehension Strategies',
  'Writing Skills',
  'Study Skills and Time Management',
  'Logical Reasoning and Thinking',
  'Mood In Grammar'
];

const cos101Modules = [
  'Basic Computing Concepts',
  'Basic Components of Computer',
  'Boolean Algebra, Fundamentals of Truth Tables and Precedence Algebra',
  'Diverse and Growing Computers and Digital Applications',
  'The Internet: Its Application and Impact on the World Today',
  'Job Specializations and Future of Computing'
];


const chapters = [
  // GNS 311 Chapters
  ...gns311Modules.map((title, index) => ({
    title: title,
    courseCode: 'GNS 311',
    description: `Module ${index + 1} of GNS 311`,
    order: index + 1,
    content: `
      <h1>${title}</h1>
      <p>This is the content for the module: ${title}.</p>
      <p>Here you can add more detailed study materials, diagrams, and explanations.</p>
    `,
    estimatedTime: 30
  })),

  // GST 111 Chapters
  ...gst111Modules.map((title, index) => ({
    title: title,
    courseCode: 'GST 111',
    description: `Module ${index + 1} of GST 111`,
    order: index + 1,
    content: `
      <h1>${title}</h1>
      <p>This is the content for the module: ${title}.</p>
      <p>Here you can add more detailed study materials, diagrams, and explanations.</p>
    `,
    estimatedTime: 10
  })),

  // COS 101 Chapters
  ...cos101Modules.map((title, index) => ({
    title: title,
    courseCode: 'COS 101',
    description: `Module ${index + 1} of COS 101`,
    order: index + 1,
    content: index === 0 ? `
      <h1>${title}</h1>
      <p>This module covers the fundamental concepts of computing, including the history of computers, data representation, and basic computing principles.</p>
      <p>Topics include:</p>
      <ul>
        <li>Input-Process-Output (IPO) system</li>
        <li>Data types and information</li>
        <li>History of computing pioneers</li>
        <li>Logical operations</li>
      </ul>
    ` : `
      <h1>${title}</h1>
      <p>This is the content for the module: ${title}.</p>
      <p>Here you can add more detailed study materials, diagrams, and explanations.</p>
    `,
    estimatedTime: index === 0 ? 15 : 10
  }))
];

module.exports = chapters;

