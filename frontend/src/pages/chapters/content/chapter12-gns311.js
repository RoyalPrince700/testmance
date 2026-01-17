// Chapter 12: Achieving Knowledge Management Functionalities in the Emerging Technology-Driven Society Using Information Technology
// GNS 311 - Module 12

export const chapter12Content = {
  title: "Achieving Knowledge Management Functionalities in the Emerging Technology-Driven Society Using Information Technology",
  author: "Jimoh, R.G. and Oyelakin, A.M.",
  department: "Department of Computer, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🧠 Welcome to Knowledge Management!",
      subtitle: "Understanding KM in the Digital Age",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome to the fascinating world of <strong>Knowledge Management (KM)</strong>! 🧠 In today's rapidly evolving
            technology-driven society, the ability to effectively manage knowledge has become a critical success factor
            for organizations and individuals alike.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400 p-4 my-4">
            <p class="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 The Knowledge Revolution</p>
            <p class="text-blue-800 dark:text-blue-200">
              As we navigate through the 21st century, knowledge has become our most valuable asset.
              The saying "Knowledge is power" has never been more relevant, yet we're overwhelmed by
              an avalanche of information that demands sophisticated management strategies.
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter explores how Information Technology (IT) enables effective knowledge management
            in our emerging technology-driven society. We'll examine both the tools that facilitate KM
            and the core functionalities that make knowledge management possible.
          </p>

          <div class="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg border border-teal-200 dark:border-teal-800 my-6">
            <h4 class="font-bold text-teal-900 dark:text-teal-100 mb-3 text-lg">📚 Module Structure</h4>
            <p class="text-teal-800 dark:text-teal-200 mb-4">
              This comprehensive module is divided into two interconnected units that build upon each other:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
                <h5 class="font-bold text-teal-900 dark:text-teal-100 mb-2">🔧 Unit 1</h5>
                <p class="text-teal-800 dark:text-teal-200 text-sm">Knowledge Management Tools - The technological infrastructure that enables KM</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h5 class="font-bold text-green-900 dark:text-green-100 mb-2">⚙️ Unit 2</h5>
                <p class="text-green-800 dark:text-green-200 text-sm">KM System Functionalities - Core processes powered by IT</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "learning-outcomes",
      title: "🎓 Learning Objectives",
      subtitle: "What You'll Achieve",
      content: `
        <div class="space-y-4">
          <p class="text-lg font-semibold mb-4">By the end of this module, you should be able to:</p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Define Knowledge Management (KM) and Information Technology (IT)</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain the concept, scope and application of Knowledge Management functionalities</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Discuss the Evolution of Modern Information Technology</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Determine relevant IT for achieving each of the KM functionalities</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain the use of Workflow and Groupware and their benefits to organizations</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "km-definition",
      title: "🧠 What is Knowledge Management?",
      subtitle: "Core Concepts and Definitions",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Knowledge Management (KM)</strong> involves strategies and applications designed to create,
            document, and share knowledge - both tacit and explicit - for productivity and sustainability in organizations.
          </p>
          <p class="text-lg leading-relaxed">
            KM is technologically achieved through a <strong>Knowledge Management System (KMS)</strong>, which serves
            as a facilitator that integrates the phases of the management process through electronic media.
          </p>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 dark:border-indigo-400 dark:border-indigo-400 p-4 my-4">
            <p class="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">🔄 KMS Components</p>
            <p class="text-indigo-800 dark:text-indigo-200">
              A typical KMS includes input devices, repositories, intelligent retrieval tools, and display/output devices,
              all interconnected through electronic networks.
            </p>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-yellow-900 dark:text-yellow-100 mb-4">🌟 Why KM Matters:</h4>
            <ul class="space-y-2 text-yellow-800 dark:text-yellow-200">
              <li><strong>Competitive Advantage:</strong> Organizations gain edge through knowledge sharing</li>
              <li><strong>Effective Working:</strong> Improved collaboration and productivity</li>
              <li><strong>E-business Success:</strong> Systematic leverage of information and expertise</li>
              <li><strong>Responsiveness:</strong> Better organizational adaptation to market changes</li>
              <li><strong>Innovation:</strong> Enhanced capability for new ideas and solutions</li>
              <li><strong>Efficiency:</strong> Optimized resource utilization</li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit1-intro",
      title: "🔧 Unit 1: Knowledge Management Tools",
      subtitle: "Technological Infrastructure for KM",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Knowledge Management Tools (KMT)</strong> are the technological foundation that enables effective KM implementation.
            They consist of two essential elements: technological infrastructure and software applications.
          </p>

          <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4 text-xl">🛠️ Essential KM Components:</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">💻 Infrastructure</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Computers, networks, and databases that form the technological backbone</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">📱 Applications</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Software tools installed in distributed environments for KM operations</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 dark:border-green-400 p-4 my-4">
            <p class="font-semibold text-green-900 dark:text-green-100 mb-2">🎯 KM Tools Benefits</p>
            <p class="text-green-800 dark:text-green-200">
              Effective KM tool deployment improves collaboration, enhances competitive advantage,
              increases responsiveness, and boosts overall productivity through systematic knowledge management.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "groupware",
      title: "👥 Groupware: Collaboration Tools",
      subtitle: "Technologies for Team Collaboration",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Groupware</strong> refers to technologies and applications designed to help people collaborate,
            facilitating work for groups through communication, cooperation, coordination, problem-solving, and negotiation.
          </p>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-4">🔧 Groupware Categories:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">💬 Communication Tools</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Email, web publishing, wikis, file sharing, and messaging systems</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">🎥 Conferencing Tools</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Video/audio conferencing, chat rooms, forums, and discussion platforms</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">📋 Collaborative Management Tools</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Project management systems, workflow systems, and information management tools</p>
              </div>
            </div>
          </div>

          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">🌟 Collaborative Environment Benefits</p>
            <p class="text-teal-800 dark:text-teal-200">
              Groupware creates secured online workspaces where colleagues work together, share opinions and calendars,
              build organizational relationships, and streamline work processes. It encourages open discussion forums
              and provides access to tacit knowledge.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "intranet",
      title: "🏢 The Intranet",
      subtitle: "Internal Knowledge Networks",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The <strong>intranet</strong> is a small-scale version of the Internet operating within an organization,
            using similar technologies (TCP/IP) to create internal networks with common Internet applications.
          </p>

          <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-4">🎯 Intranet Functions:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">📄 Publishing</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Homepages, newsletters, documents, and employee directories</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">🔍 Searching</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Integrated search engines and categorization systems</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">💼 Transacting</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">User interactions with internal web/intranet services</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">🤝 Interacting</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Collaborative applications, expert finders, and directories</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">💾 Recording</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Storage of procedures, best practices, and FAQs</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 dark:border-green-400 p-4 my-4">
            <p class="font-semibold text-green-900 dark:text-green-100 mb-2">🏠 Intranet Homepage Focus</p>
            <p class="text-green-800 dark:text-green-200">
              The intranet homepage serves as a central hub providing news, navigation tools, key information,
              community building, internal marketing, and collaboration features to enhance work practices.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "extranet",
      title: "🌐 The Extranet",
      subtitle: "Extended Organizational Networks",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The <strong>extranet</strong> extends the intranet to external partners, suppliers, and other stakeholders,
            providing controlled access to organizational information and knowledge resources.
          </p>

          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-4">🔐 Security Measures:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🔥 Firewalls</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Network security barriers protecting internal resources</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🔒 Encryption</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Data encoding to prevent unauthorized access</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">👤 Authentication</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">User verification through usernames/passwords or digital certificates</p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400 p-4 my-4">
            <p class="font-semibold text-blue-900 dark:text-blue-100 mb-2">🤝 Enhanced Collaboration</p>
            <p class="text-blue-800 dark:text-blue-200">
              Extranets facilitate collaboration and information transfer with external partners while maintaining
              strict security protocols to protect valuable organizational knowledge and resources.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "web-technologies",
      title: "🌐 Web 2.0, KM 2.0 & Web 3.0",
      subtitle: "Evolution of Web Technologies in KM",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The evolution of web technologies has revolutionized knowledge management, from traditional publishing
            to collaborative, intelligent systems.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🌟 Web 2.0 & Enterprise 2.0</h4>
              <p class="text-green-800 dark:text-green-200 mb-3">Popular tools enabling two-way communications: blogs, wikis, social bookmarking, and social networks</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="font-semibold mb-2">KM 2.0 Values:</p>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Social capital development through knowledge sharing</li>
                  <li>• Intellectual capital creation</li>
                  <li>• User-driven knowledge power</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">🚀 Web 3.0: The Semantic Web</h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3">Third-generation web enabling connective intelligence through convergence of technologies</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="font-semibold mb-2">Key Features:</p>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Ubiquitous connectivity (broadband, mobile access)</li>
                  <li>• Network computing and web services</li>
                  <li>• Open technologies and standards</li>
                  <li>• Intelligent web with semantic technologies</li>
                  <li>• Autonomous agents and machine reasoning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "data-technologies",
      title: "💾 Data Warehousing & Mining",
      subtitle: "Advanced Data Management Technologies",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Data warehousing</strong> and <strong>data mining</strong> are crucial for extracting valuable insights
            from organizational data repositories.
          </p>

          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-4">🏗️ Data Warehousing Process:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">📥 Data Extraction</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Operational data extraction from production systems</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🔄 Data Transformation</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Cleaning, filtering, and formatting data</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">💽 Data Loading</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Loading transformed data into warehouse database</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">📊 Data Access</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">User access through DSS and OLAP tools</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 dark:border-green-400 p-4 my-4">
            <p class="font-semibold text-green-900 dark:text-green-100 mb-2">🔍 Data Mining Applications</p>
            <p class="text-green-800 dark:text-green-200">
              Data mining tools search stored data for patterns and insights, serving as the driver for
              data-driven decision support systems that enhance managerial decision-making.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-intro",
      title: "⚙️ Unit 2: KM System Functionalities",
      subtitle: "Core Processes in Knowledge Management",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>KM functionalities</strong> are the core processes that enable knowledge management objectives.
            These functionalities are achieved through specific IT technologies and tools.
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4 text-xl">🔄 KM Functionalities & Technologies:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">🔍 Searching</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Finding information in large repositories using search engines</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">📁 Categorizing</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Organizing information using computer languages and metadata</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">✍️ Composing</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Creating new documents with office suite applications</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">📝 Summarizing</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Condensing information using artificial intelligence</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">💾 Storing</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Preserving information using various storage media</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">📤 Distributing</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Sharing knowledge across computer networks</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">🔄 Workflow</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Managing information flow using groupware systems</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "searching-functionality",
      title: "🔍 Searching & Search Engines",
      subtitle: "Finding Knowledge in Digital Repositories",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Searching</strong> is the process of finding needed information in vast digital repositories.
            In today's data-rich environment, efficient searching is crucial for effective knowledge management.
          </p>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-4">🔧 Search Engine Categories:</h4>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">🎯 Special Search Engines</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">General purpose engines like Google, Ask Jeeves for diverse information needs</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">📂 Directory Searches</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Pre-defined category systems like Yahoo and LookSmart</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">🧠 Knowledge Management Searches</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Specialized engines like AltaVista and Business.com for KM content</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">🌐 Open Directory Searches</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Community-reviewed directories like Netscape Open Directory</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">⛏️ Meta Search Engines</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Engines like Dogpile that search across multiple engines</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">📋 Meta Search Sites</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Portals like BeauCoup providing access to multiple search engines</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">🔬 Specialized Search Engines</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Domain-specific engines like Deja, Topica, and Argus Clearinghouse</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "categorizing-composing",
      title: "📁 Categorizing & Composing",
      subtitle: "Organizing and Creating Knowledge",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Categorizing</strong> and <strong>composing</strong> are essential KM functionalities that help organize
            and create knowledge content.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🏷️ Categorizing with Computer Languages</h4>
              <p class="text-green-800 dark:text-green-200 mb-3">Information Architecture creation using metadata and semantic content sorting</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="font-semibold mb-2">XML Technology:</p>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• eXtensible Markup Language for document formatting</li>
                  <li>• Creates metadata for information classification</li>
                  <li>• Overcomes information loss in traditional categorization</li>
                  <li>• Enables semantic content sorting by keywords and graphics</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">✍️ Composing with Office Applications</h4>
              <p class="text-purple-800 dark:text-purple-200 mb-3">Creating new knowledge documents using comprehensive software suites</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="font-semibold mb-2">Microsoft Office Suite:</p>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Word processing for document creation</li>
                  <li>• Spreadsheet applications for data management</li>
                  <li>• Presentation tools for knowledge dissemination</li>
                  <li>• Database systems for information organization</li>
                  <li>• Publishing software for content distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "summarizing-storing",
      title: "📝 Summarizing & Storing",
      subtitle: "Condensing and Preserving Knowledge",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Summarizing</strong> and <strong>storing</strong> ensure knowledge remains accessible and manageable
            in our information-overloaded society.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400">
              <h4 class="font-bold text-teal-900 dark:text-teal-100 mb-3">🤖 Summarizing with AI</h4>
              <p class="text-teal-800 dark:text-teal-200 mb-3">Artificial Intelligence algorithms address document overload problems</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="font-semibold mb-2">AI Summarization Benefits:</p>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Reduces documents to 20% core content</li>
                  <li>• Creates abstracts and executive summaries</li>
                  <li>• Works with various document formats</li>
                  <li>• Improves information processing efficiency</li>
                  <li>• Embedded in modern word processors</li>
                </ul>
              </div>
            </div>

            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 dark:border-indigo-400">
              <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-3">💽 Storing with Advanced Media</h4>
              <p class="text-indigo-800 dark:text-indigo-200 mb-3">Multiple storage technologies ensure knowledge preservation</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="font-semibold mb-2">Storage Technologies:</p>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Magnetic tape for archival storage</li>
                  <li>• Magnetic disks (floppy, hard drives) for fast access</li>
                  <li>• Optical disks (CD/DVD) for program distribution</li>
                  <li>• Universal viewers for obsolescence prevention</li>
                  <li>• XML for format-independent content access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "distributing-workflow",
      title: "📤 Distributing & Workflow",
      subtitle: "Sharing and Managing Knowledge Flow",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Distributing</strong> and <strong>workflow</strong> management ensure knowledge flows effectively
            throughout organizations and beyond.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">🌐 Distributing via Networks</h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3">Computer networks enable knowledge sharing across geographical boundaries</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="font-semibold mb-2">Network Technologies:</p>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Broadband networks for multimedia transmission</li>
                  <li>• High-bandwidth connections (DSL, T1, cable modem)</li>
                  <li>• Wireless and satellite communications</li>
                  <li>• Firewall-protected secure environments</li>
                  <li>• TCP/IP protocol-based interconnections</li>
                </ul>
              </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🔄 Workflow with Groupware</h4>
              <p class="text-green-800 dark:text-green-200 mb-3">Groupware tools facilitate communication, coordination, and collaboration</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="font-semibold mb-2">Groupware Benefits:</p>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Faster, clearer communication</li>
                  <li>• Enables remote collaboration</li>
                  <li>• Reduces travel costs</li>
                  <li>• Supports telecommuting</li>
                  <li>• Facilitates group problem-solving</li>
                  <li>• Improves collective leadership</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚡ Workflow Automation</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Workflow systems illustrate tasks, procedural steps, data inputs, information outputs,
              involved people, and required tools for each business process step, replacing manual
              paper-based systems with efficient electronic processes.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "summary",
      title: "📝 Chapter Summary",
      subtitle: "Key Concepts in KM Technologies and Functionalities",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🎉 You've completed Chapter 12 on Achieving Knowledge Management Functionalities
            in the Emerging Technology-Driven Society. Let's consolidate the key concepts we've explored.
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4 text-xl">🧠 Core KM Concepts:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">🔧 Knowledge Management Tools</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Groupware, intranet, extranet, web technologies, and data management systems</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">⚙️ KM Functionalities</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Searching, categorizing, composing, summarizing, storing, distributing, workflow</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">🌐 IT Integration</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Technology-driven approaches using search engines, computer languages, office suites, AI, storage media, networks, and groupware</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">🚀 Web Evolution</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Progression from Web 1.0 to Web 3.0 with semantic technologies and intelligent systems</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🎯 Final Insights</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Knowledge Management represents the convergence of human intelligence and technological capability.
              In our technology-driven society, effective KM implementation requires understanding both the tools
              that enable knowledge processes and the functionalities that drive organizational success. The future
              belongs to organizations that can harness knowledge as their most valuable strategic asset.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "self-assessment",
      title: "❓ Self-Assessment Questions",
      subtitle: "Test Your Understanding",
      content: `
        <div class="space-y-4">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-4">📋 Self-Assessment Questions (SAQs):</h4>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">Question 1:</h5>
                <p class="text-gray-700 dark:text-gray-300 mb-2">Define the concept of Knowledge Management (KM)</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">Question 2:</h5>
                <p class="text-gray-700 dark:text-gray-300 mb-2">Identify and describe five (5) types of Knowledge Management Tools</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-green-900 dark:text-green-100 mb-4">📝 Tutor Marked Assessment:</h4>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">Question 1:</h5>
                <p class="text-gray-700 dark:text-gray-300 mb-2">What is Knowledge Management System (KMS)?</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">Question 2:</h5>
                <p class="text-gray-700 dark:text-gray-300 mb-2">State 5 functions of Document Management System</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">Question 3:</h5>
                <p class="text-gray-700 dark:text-gray-300 mb-2">Define Artificial Intelligence</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">Question 4:</h5>
                <p class="text-gray-700 dark:text-gray-300 mb-2">Explain 4 means of communication connections</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">Question 5:</h5>
                <p class="text-gray-700 dark:text-gray-300 mb-2">Differentiate between optical disk and magnetic disk storage medium</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 2
    }
  ]
};
