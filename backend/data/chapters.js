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
  }))
];

module.exports = chapters;

