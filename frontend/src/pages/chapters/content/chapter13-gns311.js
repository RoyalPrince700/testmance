// Chapter 13: Science and Technology in the Service of Man
// GNS 311 - Module 13

export const chapter13Content = {
  title: "Science and Technology in the Service of Man",
  author: "Ayeni, A. A.",
  department: "Department of Telecommunication Science, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🚀 Welcome to Science & Technology!",
      subtitle: "The Power of Knowledge in Action",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome to the exciting intersection of <strong>Science and Technology</strong>! 🌟 In an era where
            innovation drives progress, understanding how science serves humanity through technology has never been more crucial.
          </p>
          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
            <p class="font-semibold text-teal-900 mb-2">💡 The Human Element</p>
            <p class="text-teal-800">
              Science and technology are not just abstract concepts—they're tools that shape our world,
              enhance our lives, and address humanity's greatest challenges.
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter explores the profound relationship between science and technology, examining
            their roles, history, and impact on human development. We'll discover how scientific inquiry
            transforms into technological innovation that serves mankind.
          </p>
          <div class="bg-blue-50 p-5 rounded-lg border border-blue-200 my-6">
            <h4 class="font-bold text-blue-900 mb-3 text-lg">📚 Module Structure</h4>
            <p class="text-blue-800 mb-4">
              This comprehensive module is organized into focused units that build your understanding:
            </p>
            <div class="bg-white p-4 rounded-lg border border-blue-200">
              <h5 class="font-bold text-blue-900 mb-2">🔬 Unit 1: Meaning and Roles of Science</h5>
              <p class="text-blue-800 text-sm">Exploring science's fundamental purpose and its transformative power</p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "learning-outcomes",
      title: "🎯 Learning Objectives",
      subtitle: "What You'll Master",
      content: `
        <div class="space-y-4">
          <p class="text-lg font-semibold mb-4">By the end of this module, you should be able to:</p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain the three fundamental roles of science in human development</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Write a comprehensive note on the historical development of science</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>List and provide examples of five categories of scientific activities</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain how technology has revolutionized human development</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Discuss the positive and negative impacts of technology on man and environment</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit1-intro",
      title: "🔬 Unit 1: The Essence of Science",
      subtitle: "Meaning and Fundamental Roles",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Science represents the pinnacle of human intellectual achievement—the systematic pursuit of
            knowledge about our universe. Let's explore what science truly means and the vital roles it plays.
          </p>
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">🧠 Science: A Multi-Faceted Endeavor</h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-700 mb-2">📚 As Knowledge</h5>
                <p class="text-gray-700">A systematic body of testable explanations and predictions about the universe</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-green-700 mb-2">⚙️ As Methodology</h5>
                <p class="text-gray-700">A structured process of investigation and discovery</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-purple-700 mb-2">🎯 As Purpose</h5>
                <p class="text-gray-700">Technology's foundation for improving human productivity and welfare</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "science-definition",
      title: "📖 What is Science?",
      subtitle: "Core Definition and Scope",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Science</strong> is the totality of man's systematic investigation into the events and phenomena
            of his environment. It represents humanity's quest to understand, master, and harness the forces of nature.
          </p>
          <div class="bg-gray-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-3">Science encompasses investigation into:</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold text-xl">🌍</span>
                <span>Earth's geometry and structure</span>
              </div>
              <div class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold text-xl">⚛️</span>
                <span>Atomic composition and properties</span>
              </div>
              <div class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold text-xl">🧬</span>
                <span>Human origins and evolution</span>
              </div>
              <div class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold text-xl">📊</span>
                <span>Economic behaviors and market dynamics</span>
              </div>
            </div>
          </div>
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">💡 Evolutionary Knowledge</p>
            <p class="text-yellow-800">
              Scientific understanding builds upon itself. What Dalton considered indivisible atoms became
              divisible through later discoveries, demonstrating science's dynamic nature.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "science-roles",
      title: "🎭 Three Essential Roles of Science",
      subtitle: "How Science Serves Humanity",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Science plays transformative roles that distinguish modern humanity from our primitive ancestors.
            These roles form the foundation of scientific inquiry and technological advancement.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3 flex items-center">
                <span class="text-3xl mr-3">🌍</span>
                <span>Expanding Horizons</span>
              </h4>
              <p class="text-blue-800 mb-3">
                Science broadens our intellectual horizons by providing deeper comprehension of our environment.
                It replaces mystery with understanding, fear with knowledge.
              </p>
              <div class="bg-white p-3 rounded mt-3">
                <p class="text-sm font-semibold mb-2">Key Impact:</p>
                <p class="text-sm text-gray-700">Liberates humanity from superstition, myths, and unfounded fears</p>
              </div>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3 flex items-center">
                <span class="text-3xl mr-3">🚫</span>
                <span>Dispelling Myths</span>
              </h4>
              <p class="text-green-800 mb-3">
                Through empirical evidence and systematic testing, science replaces myths and taboos with
                factual knowledge grounded in observation and experimentation.
              </p>
              <div class="bg-white p-3 rounded mt-3">
                <p class="text-sm font-semibold mb-2">Methodology:</p>
                <p class="text-sm text-gray-700">Facts obtained from data and tests become the foundation of truth</p>
              </div>
            </div>

            <div class="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3 flex items-center">
                <span class="text-3xl mr-3">🔬</span>
                <span>Fueling Discovery</span>
              </h4>
              <p class="text-purple-800 mb-3">
                Each scientific breakthrough emboldens researchers to explore further, creating a continuous
                cycle of discovery and advancement that pushes the boundaries of human knowledge.
              </p>
              <div class="bg-white p-3 rounded mt-3">
                <p class="text-sm font-semibold mb-2">The Cycle:</p>
                <p class="text-sm text-gray-700">Discovery → Curiosity → Investigation → New Discovery</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "scientific-methodology",
      title: "🔬 Scientific Methodology",
      subtitle: "The Process of Scientific Inquiry",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The scientific method provides a systematic approach to investigating natural phenomena.
            It ensures that knowledge is built on solid foundations of observation and testing.
          </p>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-4">📋 The Scientific Method: 6-Step Process</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg flex items-start">
                <span class="text-indigo-600 mr-3 font-bold text-xl">1.</span>
                <div>
                  <strong class="text-gray-900">Make an Observation</strong>
                  <p class="text-gray-700 text-sm mt-1">Notice something interesting in the natural world</p>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg flex items-start">
                <span class="text-indigo-600 mr-3 font-bold text-xl">2.</span>
                <div>
                  <strong class="text-gray-900">Ask a Question</strong>
                  <p class="text-gray-700 text-sm mt-1">Formulate a specific, testable question</p>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg flex items-start">
                <span class="text-indigo-600 mr-3 font-bold text-xl">3.</span>
                <div>
                  <strong class="text-gray-900">Form a Hypothesis</strong>
                  <p class="text-gray-700 text-sm mt-1">Propose a testable explanation</p>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg flex items-start">
                <span class="text-indigo-600 mr-3 font-bold text-xl">4.</span>
                <div>
                  <strong class="text-gray-900">Make Predictions</strong>
                  <p class="text-gray-700 text-sm mt-1">Determine expected outcomes if hypothesis is correct</p>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg flex items-start">
                <span class="text-indigo-600 mr-3 font-bold text-xl">5.</span>
                <div>
                  <strong class="text-gray-900">Test Predictions</strong>
                  <p class="text-gray-700 text-sm mt-1">Conduct experiments or gather data</p>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg flex items-start">
                <span class="text-indigo-600 mr-3 font-bold text-xl">6.</span>
                <div>
                  <strong class="text-gray-900">Iterate</strong>
                  <p class="text-gray-700 text-sm mt-1">Use results to refine hypotheses and continue investigation</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-4">
            <p class="font-semibold text-orange-900 mb-2">💡 Practical Example</p>
            <div class="text-orange-800 text-sm space-y-2">
              <p><strong>Observation:</strong> TV won't turn on despite being plugged in</p>
              <p><strong>Question:</strong> Why isn't my TV working?</p>
              <p><strong>Hypothesis:</strong> The outlet is broken</p>
              <p><strong>Prediction:</strong> TV will work if plugged into different outlet</p>
              <p><strong>Test:</strong> Try different outlet and observe result</p>
              <p><strong>Conclusion:</strong> Accept/reject hypothesis based on outcome</p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "science-history",
      title: "📜 History of Science",
      subtitle: "From Ancient Wisdom to Modern Discovery",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The quest for scientific knowledge is as ancient as humanity itself. From oral traditions to
            written records, scientific inquiry has evolved through different civilizations and methodologies.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h4 class="font-bold text-yellow-900 mb-3">🏔️ Prehistoric Era</h4>
              <p class="text-yellow-800 mb-3">
                Knowledge passed through oral traditions. Agriculture (maize domestication ~9,000 years ago)
                and early astronomy demonstrate that scientific thinking predates written language.
              </p>
            </div>

            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3">🏛️ Ancient Egypt (c. 3000 BCE)</h4>
              <ul class="space-y-2 text-blue-800">
                <li>✓ Advanced astronomy and mathematics</li>
                <li>✓ Early medical knowledge (Edwin Smith Papyrus)</li>
                <li>✓ Pioneering neuroscience concepts</li>
                <li>✓ Systematic documentation of knowledge</li>
              </ul>
            </div>

            <div class="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3">🇬🇷 Greco-Roman World</h4>
              <p class="text-purple-800 mb-3">
                The first "scientists" were natural philosophers who sought non-supernatural explanations for natural phenomena.
              </p>
              <div class="grid md:grid-cols-2 gap-3">
                <div class="bg-white p-3 rounded">
                  <strong>Thales (640–546 BCE)</strong>
                  <p class="text-sm mt-1">"Father of Science" - First non-supernatural explanations</p>
                </div>
                <div class="bg-white p-3 rounded">
                  <strong>Pythagoras</strong>
                  <p class="text-sm mt-1">Mathematical reasoning in natural philosophy</p>
                </div>
              </div>
            </div>

            <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-3">⚡ Scientific Revolution (17th Century)</h4>
              <p class="text-red-800 mb-3">
                A period of transformative change where scientific methodology became formalized and mathematical
                approaches to understanding nature became standard.
              </p>
              <div class="bg-white p-4 rounded mt-3">
                <p class="font-semibold mb-2">Key Developments:</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Deductive reasoning formalized</li>
                  <li>• Empirical research emphasized</li>
                  <li>• Mathematics applied to natural phenomena</li>
                  <li>• Systematic observation and experimentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "science-categories",
      title: "🗂️ Categories of Science",
      subtitle: "The Scope and Diversity of Scientific Inquiry",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Science encompasses a vast array of disciplines, each with its own methodologies and focus areas.
            The scope of science continues to expand as new fields emerge and interdisciplinary approaches develop.
          </p>

          <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">🌍 Major Branches of Science</h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-3">🔬 Natural Science</h5>
                <ul class="space-y-1 text-sm text-green-800">
                  <li>• Biology</li>
                  <li>• Chemistry</li>
                  <li>• Physics</li>
                  <li>• Geology</li>
                  <li>• Geography</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg border border-blue-200">
                <h5 class="font-bold text-blue-900 mb-3">👥 Social Science</h5>
                <ul class="space-y-1 text-sm text-blue-800">
                  <li>• Economics</li>
                  <li>• Archaeology</li>
                  <li>• Sociology</li>
                  <li>• Politics</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg border border-purple-200">
                <h5 class="font-bold text-purple-900 mb-3">🧠 Behavioral Science</h5>
                <ul class="space-y-1 text-sm text-purple-800">
                  <li>• Psychology</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">📈 Expanding Frontiers</p>
            <p class="text-yellow-800">
              Science is dynamic and ever-evolving. New sub-disciplines emerge as knowledge grows,
              and boundaries between traditional fields become increasingly fluid.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "technology-development",
      title: "⚙️ Technology: Science in Action",
      subtitle: "How Science Transforms into Technology",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Technology represents the practical application of scientific knowledge to solve human problems
            and improve quality of life. It is the bridge between theoretical understanding and real-world impact.
          </p>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-4">🔄 The Science-Technology Relationship</h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              Science provides the foundational knowledge, while technology applies that knowledge to create
              practical solutions. This relationship creates a continuous cycle of innovation and advancement.
            </p>
          </div>

          <div class="space-y-6 my-6">
            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3">🏭 Industrial Revolution to Modern Era</h4>
              <p class="text-blue-800 mb-3">
                Technology has evolved from simple tools to sophisticated systems. Modern technology focuses on:
              </p>
              <div class="grid md:grid-cols-2 gap-3">
                <div class="bg-white p-3 rounded">
                  <strong>Large-scale Production</strong>
                  <p class="text-sm mt-1">Meeting growing population demands</p>
                </div>
                <div class="bg-white p-3 rounded">
                  <strong>Efficiency Gains</strong>
                  <p class="text-sm mt-1">Reducing work duration for leisure time</p>
                </div>
              </div>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3">🔬 Modern Technology Characteristics</h4>
              <ul class="space-y-2 text-green-800">
                <li>✓ <strong>Scientific Technology:</strong> Knowledge-based innovations</li>
                <li>✓ <strong>Continuous Evolution:</strong> Never static, always improving</li>
                <li>✓ <strong>Miniaturization:</strong> Smaller, more portable devices</li>
                <li>✓ <strong>Integration:</strong> Complex systems from simple components</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "technology-impacts",
      title: "🌟 Technology's Impact on Humanity",
      subtitle: "Benefits and Challenges of Technological Advancement",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Technology has profoundly transformed human society, offering unprecedented benefits while
            presenting new challenges. Understanding both sides is crucial for responsible technological development.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-4">✨ Positive Impacts of Technology</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-bold text-green-800 mb-2">🥫 Food & Agriculture</h5>
                  <p class="text-green-700 text-sm">Mechanized farming enables larger-scale cultivation, increased productivity, and better food security.</p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-bold text-green-800 mb-2">🚗 Transportation</h5>
                  <p class="text-green-700 text-sm">Modern vehicles and infrastructure dramatically reduce travel time and expand mobility.</p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-bold text-green-800 mb-2">🏥 Healthcare</h5>
                  <p class="text-green-700 text-sm">Scientific diagnosis and treatment have revolutionized medicine, extending lifespans and curing diseases.</p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-bold text-green-800 mb-2">📡 Communication</h5>
                  <p class="text-green-700 text-sm">Instant global connectivity through telephones, internet, and wireless technologies.</p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-bold text-green-800 mb-2">⚡ Energy</h5>
                  <p class="text-green-700 text-sm">Diverse energy sources power modern civilization and technological infrastructure.</p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-bold text-green-800 mb-2">🏭 Manufacturing</h5>
                  <p class="text-green-700 text-sm">High-tech production creates better products and industrial capabilities.</p>
                </div>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-4">⚠️ Challenges and Side Effects</h4>
              <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-bold text-red-800 mb-2">🔥 Environmental Impact</h5>
                  <p class="text-red-700 text-sm">Industrial activities cause pollution, resource depletion, and habitat destruction.</p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-bold text-red-800 mb-2">👥 Social Consequences</h5>
                  <p class="text-red-700 text-sm">Job displacement, psychological stress, and intellectual redundancy affect workers.</p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-bold text-red-800 mb-2">🏙️ Urbanization Effects</h5>
                  <p class="text-red-700 text-sm">Fast-paced urban culture, commercialization, and loss of natural habitats.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
            <p class="font-semibold text-teal-900 mb-2">⚖️ Balanced Perspective</p>
            <p class="text-teal-800">
              While technology's benefits generally outweigh its drawbacks, responsible development requires
              addressing negative impacts through ethical practices and sustainable approaches.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "science-tech-developing",
      title: "🌍 Science & Technology in Development",
      subtitle: "Key Drivers for Developing Nations",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            For developing countries, science and technology are not luxuries—they are necessities for
            achieving robust economies, improved health systems, quality education, and modern infrastructure.
          </p>

          <div class="bg-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 mb-4">🎯 Essential Investments</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">📚 Quality Education</h5>
                <p class="text-gray-700">Strong foundation in STEM subjects for future innovators</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🔧 Skills Training</h5>
                <p class="text-gray-700">Continuous professional development for workers and managers</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">💰 Strategic Funding</h5>
                <p class="text-gray-700">Government and private investment in research and development</p>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-5 rounded-lg border border-purple-200 my-6">
            <h4 class="font-bold text-purple-900 mb-3">🚀 21st Century Technologies</h4>
            <p class="text-purple-800 mb-4">
              Modern technological revolutions focus on productivity enhancement and efficiency:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-800 mb-2">🖥️ Microprocessors</h5>
                <ul class="text-sm text-purple-700 space-y-1">
                  <li>• Washing machines</li>
                  <li>• Security systems</li>
                  <li>• Remote controls</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-800 mb-2">📡 Telecommunications</h5>
                <ul class="text-sm text-purple-700 space-y-1">
                  <li>• Telephone networks</li>
                  <li>• Radio broadcasting</li>
                  <li>• Internet systems</li>
                  <li>• Computer networks</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-800 mb-2">🧬 Biotechnology</h5>
                <ul class="text-sm text-purple-700 space-y-1">
                  <li>• Advanced fabrics</li>
                  <li>• Plastics</li>
                  <li>• Power systems</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-800 mb-2">🤖 Emerging Technologies</h5>
                <ul class="text-sm text-purple-700 space-y-1">
                  <li>• Artificial Intelligence</li>
                  <li>• Robotics</li>
                  <li>• Nanotechnology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "summary",
      title: "📝 Module Summary",
      subtitle: "Key Takeaways and Reflections",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🎉 You've explored the profound relationship between science and technology
            and their service to humanity. Let's consolidate the key insights from this journey.
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">🔑 Core Learnings</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 mb-2">🧠 Science as Investigation</h5>
                <p class="text-gray-700 text-sm">Science is systematic investigation into environmental events, separating modern humans from primitive ancestors through knowledge and understanding.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🔬 Scientific Methodology</h5>
                <p class="text-gray-700 text-sm">The 6-step process (observation, question, hypothesis, prediction, testing, iteration) ensures reliable knowledge acquisition across all scientific disciplines.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">⚡ Technology as Application</h5>
                <p class="text-gray-700 text-sm">21st century technologies including microprocessors, AI, and nanotechnology revolutionize productivity while presenting both opportunities and challenges.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">🌍 Development Imperative</h5>
                <p class="text-gray-700 text-sm">Science and technology are essential drivers for developing nations, requiring investment in education, skills training, and strategic research funding.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Moving Forward</p>
            <p class="text-yellow-800">
              Science and technology will continue to shape humanity's future. As we've learned, they are
              powerful tools that require responsible stewardship to maximize benefits while minimizing harms.
              Your understanding of these forces positions you to contribute to a more enlightened future.
            </p>
          </div>

          <div class="bg-indigo-50 p-4 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-2">🤔 Self-Assessment Questions</h4>
            <div class="space-y-2 text-indigo-800 text-sm">
              <p><strong>1.</strong> Write a short note on the role of science in human development.</p>
              <p><strong>2.</strong> Identify three positive effects of technology on mankind.</p>
              <p><strong>3.</strong> List three examples of 21st century technologies and their applications.</p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    }
  ]
};
