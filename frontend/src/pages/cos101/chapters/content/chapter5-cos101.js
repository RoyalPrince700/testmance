// Chapter 5: The Internet: Its Application and Impact on the World Today
// COS 101 - Module 5

export const chapter5Content = {
  title: "The Internet: Its Application and Impact on the World Today",
  author: "Department of Computer Science",
  department: "Faculty of Natural Sciences, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "internet-history",
      title: "🌐 The History and Evolution of the Internet",
      subtitle: "From ARPANET to the Modern World Wide Web",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            The internet's fascinating history began in the 1960s, when the United States Department of Defense launched the Advanced Research Projects Agency Network (ARPANET), connecting four computers to facilitate communication between government and academic researchers. This pioneering project laid the groundwork for the modern internet.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 class="font-bold text-blue-900 mb-4 flex items-center">
              <span class="text-2xl mr-3">📅</span>
              Key Milestones in Internet History
            </h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <div class="flex items-center mb-2">
                  <span class="font-bold text-green-900 mr-3">1960s:</span>
                  <span class="text-green-800">ARPANET established for military research</span>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <div class="flex items-center mb-2">
                  <span class="font-bold text-blue-900 mr-3">1970s:</span>
                  <span class="text-blue-800">Internet Protocol (IP) developed</span>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <div class="flex items-center mb-2">
                  <span class="font-bold text-purple-900 mr-3">1980s:</span>
                  <span class="text-purple-800">DNS and IRC introduced</span>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                <div class="flex items-center mb-2">
                  <span class="font-bold text-orange-900 mr-3">1989:</span>
                  <span class="text-orange-800">World Wide Web invented by Tim Berners-Lee</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4">📈 The 1990s: Rapid Expansion</h4>
            <p class="text-green-800 leading-relaxed">
              During the 1990s, there was rapid growth in internet development, as dial-up internet brought connectivity to homes, email transformed communication, and search engines like Yahoo! and Google simplified information retrieval. E-commerce emerged, allowing online shopping to become a staple of modern life.
            </p>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4">📱 The 2000s: Mobile and Social Revolution</h4>
            <p class="text-purple-800 leading-relaxed">
              The 2000s marked another significant transformation with social media platforms like Facebook, Twitter, and Instagram redefining social interactions, while mobile internet and smartphones made access ubiquitous. Cloud computing enabled remote data storage and processing, and big data analytics provided valuable insights from vast amounts of data.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 8,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Welcome to the amazing story of the internet, my dear 100level tech stars! 🌐 Imagine the internet as that one brilliant idea that started small like a seed in a flower pot, but grew to become a massive iroko tree connecting the whole world. From military experiments in America to the global network we use today - it's a story that will blow your mind! 🇳🇬🤯
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Internet History Matters for Nigerian Students</p>
            <p class="text-blue-800">
              See, the internet wasn't always this fancy thing we scroll on our phones. It started as a way for American soldiers to communicate during war! Understanding this history helps you appreciate why the internet works the way it does, and why we have problems like "network is slow" or "site not loading" in Nigeria. Plus, it inspires us to build the next big thing! 💡
            </p>
          </div>

          <div class="bg-linear-to-r from-indigo-100 to-purple-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🚀 The Internet's Evolution: From Military Secret to Global Phenomenon</h4>
            <p class="text-center text-gray-700">A journey that changed how we live, work, and connect!</p>
          </div>

          <div class="space-y-6">
            <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🛰️</span>
                <h4 class="font-bold text-green-900 text-xl">1960s: ARPANET - The Humble Beginning</h4>
              </div>
              <p class="text-green-800 leading-relaxed mb-3">
                Picture this: The Cold War era, America vs Soviet Union. The US Department of Defense created ARPANET to connect just 4 computers at universities. It was like connecting four houses in a compound with a special wire so they could share information quickly.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-green-800">
                  <strong>Nigerian Connection:</strong> Think of it like the first NITEL phone lines connecting government offices in Lagos, Abuja, and Port Harcourt. It started small but revolutionized communication! 📞
                </p>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">📡</span>
                <h4 class="font-bold text-blue-900 text-xl">1970s: Internet Protocol (IP) - The Language</h4>
              </div>
              <p class="text-blue-800 leading-relaxed mb-3">
                Scientists developed TCP/IP - the "language" that allows different computers to talk to each other. It's like creating a common language (like Pidgin English) that everyone can understand, whether you're in America, Nigeria, or China.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-blue-800">
                  <strong>Real Talk:</strong> Without TCP/IP, your Glo, MTN, and Airtel networks couldn't connect to the global internet. It's why you can WhatsApp your cousin in London! 🌍
                </p>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🌐</span>
                <h4 class="font-bold text-purple-900 text-xl">1989: World Wide Web - Tim Berners-Lee's Genius</h4>
              </div>
              <p class="text-purple-800 leading-relaxed mb-3">
                A British scientist named Tim Berners-Lee invented the World Wide Web (WWW). He created HTML (web pages), HTTP (how pages load), and URLs (web addresses). He made the internet user-friendly for everyone, not just tech experts.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-purple-800">
                  <strong>Nigerian Impact:</strong> This is why you can browse Nairaland, check JAMB results online, or shop on Konga. Before this, the internet was just for scientists with complex commands! 🛒
                </p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">📈</span>
              1990s-2000s: The Explosion We Live In Today
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">1990s: Dial-up Era</h5>
                <p class="text-yellow-800 text-sm">
                  That annoying screeching sound when connecting to the internet? That was dial-up! Slow but revolutionary - brought internet to homes for the first time.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">2000s: Social Media Boom</h5>
                <p class="text-yellow-800 text-sm">
                  Facebook, Twitter, YouTube - these platforms made the internet social. Suddenly, you could connect with anyone, anywhere, anytime.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">Mobile Revolution</h5>
                <p class="text-yellow-800 text-sm">
                  Smartphones brought internet to your pocket. No more sitting at desktop computers - now you browse, chat, and work on the go!
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">Cloud Computing</h5>
                <p class="text-yellow-800 text-sm">
                  Store your files online instead of on hard drives. Google Drive, iCloud - these services changed how we store and access data.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🎯 Why This History Inspires Nigerian Tech Students</p>
            <p class="text-indigo-800">
              The internet started as a military tool but became a global connector. In Nigeria, we're seeing similar transformations - from NITEL monopolies to multiple telecom companies, from no internet cafes to smartphones in every hand. Your generation will build the next chapter! Whether it's creating local apps, improving e-commerce, or connecting rural communities, the future is yours to code! 🚀🇳🇬
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">💡 Pro Tip for Nigerian Students</p>
            <p class="text-red-800">
              When your network is slow or a site won't load, remember: you're dealing with technology that evolved from military experiments! Understanding this history helps you troubleshoot better. Next time MTN is "unstable," you'll know it's not just "network problem" - it's a complex system of protocols and connections working behind the scenes! 🔧⚡
            </p>
          </div>
        </div>
      `
    },
    {
      id: "internet-applications",
      title: "💬 Revolution of Communication",
      subtitle: "How the Internet Transformed Global Connectivity",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            The internet has transformed various industries, including finance, media, healthcare, education, and governance. The internet has revolutionised modern life, seamlessly integrating into various aspects of daily routines. Its impact is profound, transforming the way we communicate, work, learn, and entertain ourselves.
          </p>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-4 flex items-center">
              <span class="text-2xl mr-3">💬</span>
              Communication Revolution
            </h4>
            <p class="text-blue-800 leading-relaxed mb-4">
              Communication has been redefined by the internet. Social media platforms like Facebook, Twitter, Instagram, and LinkedIn have connected people worldwide, fostering global relationships and communities.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <strong>📧 Email:</strong> Essential for personal and professional communication
              </div>
              <div class="bg-white p-4 rounded border">
                <strong>🎥 Video Conferencing:</strong> Zoom, Skype, Google Meet enable virtual meetings
              </div>
              <div class="bg-white p-4 rounded border">
                <strong>💭 Messaging Apps:</strong> WhatsApp, WeChat, Telegram for instant communication
              </div>
              <div class="bg-white p-4 rounded border">
                <strong>🌍 Global Reach:</strong> Bridging geographical divides worldwide
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Communication has changed forever because of the internet, and as Nigerian students, we know this better than anyone! 💬 Remember when you had to wait weeks for a letter from your uncle in Lagos, or queue at NITEL to make international calls? Now you can video call your family in diaspora instantly! The internet turned the world into one big family compound where everyone can talk anytime. 🇳🇬📱
          </p>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🤔 Why Communication Matters for Nigerian Students</p>
            <p class="text-green-800">
              In Nigeria, distance is our biggest challenge! From Lagos to Maiduguri, Abuja to Calabar - we've always struggled with connectivity. The internet solved this! Now Unilorin students can connect with family, study abroad opportunities, and even attend virtual classes. But we also face unique challenges like poor network coverage and high data costs. Understanding internet communication helps us maximize its benefits despite our challenges! 📶
            </p>
          </div>

          <div class="bg-linear-to-r from-blue-100 to-cyan-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🌍 From Snail Mail to Instant Messaging: Nigeria's Communication Evolution</h4>
            <p class="text-center text-gray-700">How the internet bridged Nigeria's communication gaps!</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">📧</span>
                <h4 class="font-bold text-green-900 text-xl">Email: The Game Changer</h4>
              </div>
              <p class="text-green-800 mb-3">
                Email replaced postal services! Instead of waiting 2 weeks for a letter, send it instantly and get replies within hours.
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-green-500">
                <strong>Nigerian Examples:</strong>
                <ul class="text-green-700 mt-2 space-y-1">
                  <li>• School admissions: Check JAMB results instantly</li>
                  <li>• Job applications: Send CVs to companies abroad</li>
                  <li>• Academic research: Connect with professors worldwide</li>
                  <li>• Banking: Receive statements and notifications</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🎥</span>
                <h4 class="font-bold text-blue-900 text-xl">Video Conferencing: Face-to-Face Across Oceans</h4>
              </div>
              <p class="text-blue-800 mb-3">
                Zoom, Google Meet, and Skype let you see and hear people in real-time, no matter where they are!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-blue-500">
                <strong>Nigerian Impact:</strong>
                <ul class="text-blue-700 mt-2 space-y-1">
                  <li>• Virtual UNILORIN lectures during ASUU strikes</li>
                  <li>• Family reunions with relatives abroad</li>
                  <li>• Job interviews with international companies</li>
                  <li>• Medical consultations from home</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">💭</span>
                <h4 class="font-bold text-purple-900 text-xl">Messaging Apps: Instant Connection</h4>
              </div>
              <p class="text-purple-800 mb-3">
                WhatsApp, Telegram, and Instagram DMs let you chat, share photos, and even make voice calls instantly!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-purple-500">
                <strong>Nigerian Context:</strong>
                <ul class="text-purple-700 mt-2 space-y-1">
                  <li>• "How far?" greetings with family and friends</li>
                  <li>• Sharing latest Naija music and memes</li>
                  <li>• Group chats for course mates and study groups</li>
                  <li>• Emergency broadcasts during crises</li>
                </ul>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-xl border-2 border-red-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🌐</span>
                <h4 class="font-bold text-red-900 text-xl">Social Media: Building Communities</h4>
              </div>
              <p class="text-red-800 mb-3">
                Facebook, Twitter, and Instagram connect you with people who share your interests, culture, and goals!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-red-500">
                <strong>Nigerian Power:</strong>
                <ul class="text-red-700 mt-2 space-y-1">
                  <li>• Twitter Naija: Real-time news and discussions</li>
                  <li>• Facebook groups for UNILORIN alumni</li>
                  <li>• Instagram: Showcasing Nigerian culture globally</li>
                  <li>• LinkedIn: Professional networking opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🇳🇬</span>
              The Nigerian Communication Challenge & Solution
            </h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Nigeria has unique communication challenges: expensive data, poor rural connectivity, and frequent network outages. But the internet also provides solutions! Here are practical tips for Nigerian students:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-1">💡 Smart Data Usage</h5>
                <p class="text-yellow-800 text-sm">Use WiFi when available, download offline content, use data compression apps</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-1">📱 Alternative Apps</h5>
                <p class="text-yellow-800 text-sm">Telegram uses less data than WhatsApp, text messages over voice calls</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-1">⏰ Strategic Timing</h5>
                <p class="text-yellow-800 text-sm">Use night plans for international calls, avoid peak hours for downloads</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-1">🌍 Local Solutions</h5>
                <p class="text-yellow-800 text-sm">Support local apps like 9Mobile's social bundles, explore community networks</p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🎯 Communication Superpowers for Your Future</p>
            <p class="text-indigo-800">
              Mastering internet communication opens doors! In Nigeria's growing tech industry, companies need people who can communicate globally. Whether you're building apps, managing social media, or working remotely for international firms, these skills are your ticket to success. Plus, staying connected with the global tech community helps you learn about opportunities and innovations happening worldwide! 🚀💼
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">💭 Think About This</p>
            <p class="text-red-800">
              The internet didn't just change HOW we communicate - it changed WHO we can communicate with! A Unilorin student can now collaborate with MIT professors, Nigerian developers can work with Silicon Valley companies, and our cultural content reaches the world instantly. The same technology connecting you to your family in the village also connects you to opportunities in Dubai, London, or San Francisco! 🌍✨
            </p>
          </div>
        </div>
      `
    },
    {
      id: "educational-advancements",
      title: "🎓 Educational Advancements",
      subtitle: "Transforming Learning Through Digital Technology",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            In another development, the internet has transformed education, making learning more accessible and convenient. Online courses and degree programs are available through platforms like Coursera, Udemy, and edX.
          </p>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3 text-xl">📚 Virtual Classrooms</h4>
              <p class="text-green-800">
                Enable remote learning and distance education
              </p>
              <div class="mt-3 p-3 bg-white rounded border">
                <strong>Benefits:</strong> Access education from anywhere in the world
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3 text-xl">📖 Digital Resources</h4>
              <p class="text-blue-800">
                E-books, academic journals, and educational websites
              </p>
              <div class="mt-3 p-3 bg-white rounded border">
                <strong>Examples:</strong> JSTOR, Google Scholar, Khan Academy
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3 text-xl">👨‍🏫 Personalized Learning</h4>
              <p class="text-purple-800">
                Online tutoring services offer individualized learning experiences
              </p>
              <div class="mt-3 p-3 bg-white rounded border">
                <strong>Impact:</strong> Catering to individual needs and learning paces
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 7,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Education has been completely transformed by the internet, and as Unilorin students, we're living proof of this revolution! 🎓 Remember when you had to travel to Lagos just to access good libraries or wait months for textbooks? Now you can learn from Harvard professors on Coursera while sitting in your hostel! The internet turned education from a privilege for the few to a possibility for everyone. Na wah o, the transformation is amazing! 🇳🇬📚
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Online Education Matters for Nigerian Students</p>
            <p class="text-blue-800">
              In Nigeria, we face major educational challenges: limited classrooms, outdated textbooks, ASUU strikes, and unequal access to quality education. The internet is our great equalizer! Whether you're in rural Kebbi or urban Lagos, you can access world-class education. But we also face challenges like poor internet connectivity and high data costs. Understanding these tools helps us maximize our learning despite our constraints! 💡
            </p>
          </div>

          <div class="bg-linear-to-r from-green-100 to-emerald-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">📚 From Classroom to Cloud: How the Internet Democratized Learning</h4>
            <p class="text-center text-gray-700">Education is no longer bound by walls or wealth!</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🏫</span>
                <h4 class="font-bold text-green-900 text-xl">Virtual Classrooms</h4>
              </div>
              <p class="text-green-800 mb-3">
                Learn from anywhere! No more missing classes due to strikes or distance.
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-green-500">
                <strong>Nigerian Examples:</strong>
                <ul class="text-green-700 mt-2 space-y-1">
                  <li>• UNILORIN online lectures during ASUU strikes</li>
                  <li>• NOUN (National Open University) programs</li>
                  <li>• Access to foreign universities from home</li>
                  <li>• Skill acquisition during COVID-19 lockdown</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">📖</span>
                <h4 class="font-bold text-blue-900 text-xl">Digital Resources</h4>
              </div>
              <p class="text-blue-800 mb-3">
                Millions of books, journals, and educational videos at your fingertips!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-blue-500">
                <strong>Free Resources:</strong>
                <ul class="text-blue-700 mt-2 space-y-1">
                  <li>• Google Scholar for research papers</li>
                  <li>• Khan Academy for foundational learning</li>
                  <li>• YouTube educational channels</li>
                  <li>• Project Gutenberg free e-books</li>
                  <li>• Coursera audit courses (free to watch)</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🎯</span>
                <h4 class="font-bold text-purple-900 text-xl">Personalized Learning</h4>
              </div>
              <p class="text-purple-800 mb-3">
                Learn at your own pace, focus on what you need to improve!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-purple-500">
                <strong>Benefits for You:</strong>
                <ul class="text-purple-700 mt-2 space-y-1">
                  <li>• Pause and replay difficult concepts</li>
                  <li>• Take courses multiple times</li>
                  <li>• Learn advanced topics ahead of class</li>
                  <li>• Get help from online communities</li>
                  <li>• Track your progress and improvement</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🇳🇬</span>
              Overcoming Nigeria's Education Challenges with Technology
            </h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Nigerian students face unique obstacles, but the internet provides powerful solutions! Here's how to maximize online learning in our context:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">💰 Cost-Effective Learning</h5>
                <p class="text-yellow-800 text-sm">
                  Use free resources like YouTube, Khan Academy, and Coursera audit options. Many premium courses offer scholarships for Africans.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">📱 Mobile-First Approach</h5>
                <p class="text-yellow-800 text-sm">
                  Download videos and PDFs during cheap data periods. Use offline apps like YouTube Premium student discounts.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🌐 Local Language Support</h5>
                <p class="text-yellow-800 text-sm">
                  Look for courses with subtitles. Create study groups on WhatsApp to discuss concepts in your native language.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🤝 Community Learning</h5>
                <p class="text-yellow-800 text-sm">
                  Join Nigerian tech communities on Facebook, Twitter, and Discord. Platforms like NigeriaCodeCommunity offer free mentorship.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🚀</span>
              Building Your Future Through Online Education
            </h4>
            <div class="space-y-4">
              <p class="text-indigo-800 leading-relaxed">
                The internet gives you access to skills that Nigerian employers desperately need! Here's how to leverage online education for career success:
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-semibold text-indigo-900 mb-1">💼 In-Demand Skills</h5>
                  <p class="text-indigo-800 text-sm">Learn data science, digital marketing, programming - skills that pay well in Nigeria's growing tech sector.</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-semibold text-indigo-900 mb-1">🌍 Global Certifications</h5>
                  <p class="text-indigo-800 text-sm">Get Google, Microsoft, AWS certifications online. These are recognized worldwide and valued by Nigerian companies.</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-semibold text-indigo-900 mb-1">🔄 Continuous Learning</h5>
                  <p class="text-indigo-800 text-sm">Technology changes fast. Online platforms help you stay updated with the latest skills and trends.</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-semibold text-indigo-900 mb-1">🤝 Networking Opportunities</h5>
                  <p class="text-indigo-800 text-sm">Connect with global professionals, join online communities, and find mentors who can guide your career.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🎓 Your Education, Your Future</p>
            <p class="text-red-800">
              The internet has leveled the playing field! A student in rural Sokoto now has the same access to Harvard professors as someone in Lagos. But success depends on your initiative. Don't just consume content - apply what you learn, build projects, and share your knowledge. The same technology that brought you this knowledge will also help you showcase your skills to the world. Your Unilorin degree plus online certifications will make you unstoppable! 🌟🚀
            </p>
          </div>
        </div>
      `
    },
    {
      id: "entertainment-media",
      title: "🎬 Arts and Entertainment",
      subtitle: "Digital Transformation of Media and Leisure",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Entertainment has also been transformed by the internet. Streaming services like Netflix, YouTube, Amazon Prime, and Hulu provide endless options for movies, TV shows, and music.
          </p>

          <div class="bg-red-50 p-6 rounded-lg">
            <h4 class="font-bold text-red-900 mb-4 flex items-center">
              <span class="text-2xl mr-3">🎮</span>
              Entertainment Revolution
            </h4>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-3">
                <div class="bg-white p-4 rounded border">
                  <strong>🎬 Streaming Services:</strong> Netflix, YouTube, Amazon Prime, Hulu
                </div>
                <div class="bg-white p-4 rounded border">
                  <strong>🎵 Music Platforms:</strong> Spotify, Apple Music, Podcasts
                </div>
              </div>
              <div class="space-y-3">
                <div class="bg-white p-4 rounded border">
                  <strong>🎮 Online Gaming:</strong> Multiplayer games, esports, virtual reality
                </div>
                <div class="bg-white p-4 rounded border">
                  <strong>🌐 Online Communities:</strong> Connecting people with shared interests
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Entertainment and arts have been completely revolutionized by the internet, and as Nigerian youths, we know this better than anyone! 🎬 Remember when you had to save money for months to buy a movie ticket or wait for NTA to show American series? Now you can watch Nollywood movies, K-drama, and Hollywood blockbusters on your phone anytime! The internet turned entertainment from a luxury to a daily staple. Na wah o, the transformation sweet die! 🇳🇬🎥
          </p>

          <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p class="font-semibold text-purple-900 mb-2">🤔 Why Digital Entertainment Matters for Nigerian Youth</p>
            <p class="text-purple-800">
              Entertainment is more than just fun - it's how we relax, learn about different cultures, and even build careers! In Nigeria, the internet has given us access to global content while also boosting our local creative industry. From Wizkid going viral on YouTube to Nigerian comedians building international audiences, digital entertainment is changing how we consume and create content. But we also face challenges like data costs and content piracy. Understanding these platforms helps us enjoy entertainment responsibly! 🎵
            </p>
          </div>

          <div class="bg-linear-to-r from-red-100 to-pink-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🎭 From Village Square to Global Stage: Entertainment's Digital Revolution</h4>
            <p class="text-center text-gray-700">How the internet transformed how we play, watch, and create!</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-6 rounded-xl border-2 border-red-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🎬</span>
                <h4 class="font-bold text-red-900 text-xl">Streaming Revolution</h4>
              </div>
              <p class="text-red-800 mb-3">
                Watch thousands of movies, series, and documentaries on demand!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-red-500">
                <strong>Nigerian Favorites:</strong>
                <ul class="text-red-700 mt-2 space-y-1">
                  <li>• Netflix: "Squid Game" and Nollywood originals</li>
                  <li>• YouTube: Free movies, music videos, tutorials</li>
                  <li>• Showmax: Local African content and series</li>
                  <li>• Amazon Prime: International blockbusters</li>
                  <li>• IrokoTV: Premium Nollywood collection</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🎵</span>
                <h4 class="font-bold text-blue-900 text-xl">Music & Audio Revolution</h4>
              </div>
              <p class="text-blue-800 mb-3">
                Access millions of songs, podcasts, and audio content instantly!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-blue-500">
                <strong>Afrobeat Power:</strong>
                <ul class="text-blue-700 mt-2 space-y-1">
                  <li>• Spotify: Discover Davido, Burna Boy, global hits</li>
                  <li>• Audiomack: Nigerian indie artists and mixtapes</li>
                  <ul class="text-blue-600 mt-1 ml-4 space-y-1">
                    <li>• Podcasts: "The Joe Rogan Experience"</li>
                    <li>• Audiobooks: Learning while commuting</li>
                    <li>• Comedy specials: Basketmouth, Bovi</li>
                  </ul>
                </ul>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🎮</span>
                <h4 class="font-bold text-green-900 text-xl">Gaming & Esports</h4>
              </div>
              <p class="text-green-800 mb-3">
                Play games with people worldwide, watch professional gaming tournaments!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-green-500">
                <strong>Gaming in Nigeria:</strong>
                <ul class="text-green-700 mt-2 space-y-1">
                  <li>• Mobile games: PUBG Mobile, Free Fire</li>
                  <li>• Esports: Nigerian teams in international tournaments</li>
                  <li>• Gaming communities on Discord and Twitch</li>
                  <li>• Streaming: Watch professional gamers live</li>
                  <li>• Local scene: Nigerian gaming influencers</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🌐</span>
                <h4 class="font-bold text-purple-900 text-xl">Online Communities & Creation</h4>
              </div>
              <p class="text-purple-800 mb-3">
                Connect with people who share your interests, create and share your own content!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-purple-500">
                <strong>Creative Nigerians:</strong>
                <ul class="text-purple-700 mt-2 space-y-1">
                  <li>• TikTok: Dance challenges, comedy skits</li>
                  <li>• Instagram: Photography, fashion, art showcases</li>
                  <li>• YouTube: Vloggers, educators, musicians</li>
                  <li>• Twitter: Comedy threads, news discussions</li>
                  <li>• Reddit: Niche communities and discussions</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🇳🇬</span>
              Nigerian Entertainment in the Digital Age
            </h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              The internet has been a game-changer for Nigerian entertainment! Here's how our industry has evolved:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🎤 Music Industry Boom</h5>
                <p class="text-yellow-800 text-sm">
                  From physical CDs to streaming - Nigerian artists now reach global audiences. Wizkid, Burna Boy, and Davido have millions of monthly listeners on Spotify!
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🎬 Nollywood Digital</h5>
                <p class="text-yellow-800 text-sm">
                  Nigerian movies are now available worldwide through streaming platforms. From "Lionheart" to "Citation," our stories reach international audiences.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">😂 Comedy Renaissance</h5>
                <p class="text-yellow-800 text-sm">
                  Comedians like Mr Macaroni, Basketmouth, and Broda Shaggi built massive online followings. Social media comedy has become a career path!
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">📱 Content Creation Economy</h5>
                <p class="text-yellow-800 text-sm">
                  Young Nigerians are building careers as influencers, YouTubers, and digital creators. The internet turned creativity into viable careers!
                </p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">⚖️</span>
              Balancing Entertainment with Responsibility
            </h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              While digital entertainment is amazing, we must use it wisely. Here are tips for Nigerian students:
            </p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">⏰ Time Management</h5>
                <p class="text-indigo-800 text-sm">Set limits on gaming/streaming to balance with studies and real-life activities.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">💰 Budget Wisely</h5>
                <p class="text-indigo-800 text-sm">Use free options like YouTube, explore student discounts for premium services.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">🎯 Content Quality</h5>
                <p class="text-indigo-800 text-sm">Choose educational content, avoid pirated materials, support local creators.</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🚀 Entertainment as Career Opportunity</p>
            <p class="text-green-800">
              Digital entertainment isn't just consumption - it's creation! Many successful Nigerians started as content creators. From music production to video editing, gaming commentary to digital art, the internet provides platforms to turn hobbies into careers. Your TikTok dance or YouTube tutorial could be your next big opportunity. The same technology entertaining you today could fund your education tomorrow! 🎯💼
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🌍 Cultural Exchange Through Entertainment</p>
            <p class="text-red-800">
              Entertainment connects cultures! Through streaming platforms, you can experience Korean dramas, understand American culture through sitcoms, and share Nigerian music with the world. This cultural exchange builds empathy and understanding. When you watch a K-drama, you're not just entertained - you're learning about different perspectives, family values, and life experiences. The internet made the world your classroom and your global village! 🌏🤝
            </p>
          </div>
        </div>
      `
    },
    {
      id: "healthcare-impact",
      title: "🏥 Health and Social Care",
      subtitle: "Digital Healthcare and Medical Innovation",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            The domain of health and social care has equally benefited from the internet. Telemedicine enables virtual consultations and remote healthcare services, expanding access to medical care.
          </p>

          <div class="bg-teal-50 p-6 rounded-lg">
            <h4 class="font-bold text-teal-900 mb-4">Healthcare Digital Transformation</h4>
            <div class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded border-l-4 border-teal-500">
                  <h5 class="font-bold text-teal-900">🩺 Telemedicine</h5>
                  <p class="text-teal-800 text-sm">Virtual consultations and remote healthcare services</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-teal-500">
                  <h5 class="font-bold text-teal-900">📱 Health Information</h5>
                  <p class="text-teal-800 text-sm">Online resources for medical research and health education</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-teal-500">
                  <h5 class="font-bold text-teal-900">📊 Electronic Records</h5>
                  <p class="text-teal-800 text-sm">Secure data storage and efficient healthcare management</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-teal-500">
                  <h5 class="font-bold text-teal-900">⌚ Wearable Devices</h5>
                  <p class="text-teal-800 text-sm">Vital signs tracking and health monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Healthcare has been transformed by the internet in ways that are saving lives, especially in a place like Nigeria where medical access can be challenging! 🏥 Remember when you had to travel from Ilorin to Lagos just for a specialist consultation? Now you can video call doctors from the comfort of your hostel! The internet is bringing quality healthcare closer to everyone, regardless of location. This is truly life-changing! 🇳🇬💊🤒
          </p>

          <div class="bg-teal-50 border-l-4 border-teal-500 p-4">
            <p class="font-semibold text-teal-900 mb-2">🤔 Why Digital Health Matters for Nigerians</p>
            <p class="text-teal-800">
              In Nigeria, we face major healthcare challenges: few doctors per population, long distances to hospitals, expensive medical care, and limited access to specialists. The internet is our healthcare equalizer! Whether you're in rural Zamfara or urban Lagos, you can now access medical information, consult doctors remotely, and even monitor your health daily. But we must be careful about misinformation and data privacy. Understanding digital health helps us stay healthy and safe! 🩺
            </p>
          </div>

          <div class="bg-linear-to-r from-cyan-100 to-teal-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🩺 From Hospital Queues to Home Healthcare: Medicine Goes Digital</h4>
            <p class="text-center text-gray-700">How the internet is revolutionizing healthcare access and quality!</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-teal-50 p-6 rounded-xl border-2 border-teal-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">📱</span>
                <h4 class="font-bold text-teal-900 text-xl">Telemedicine Revolution</h4>
              </div>
              <p class="text-teal-800 mb-3">
                Consult doctors via video calls, chat, or phone from anywhere!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-teal-500">
                <strong>Nigerian Applications:</strong>
                <ul class="text-teal-700 mt-2 space-y-1">
                  <li>• Consult specialists without traveling</li>
                  <li>• Get second opinions from abroad</li>
                  <li>• Emergency consultations during crises</li>
                  <li>• Follow-up care for chronic conditions</li>
                  <li>• Mental health support online</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">📚</span>
                <h4 class="font-bold text-blue-900 text-xl">Health Information Access</h4>
              </div>
              <p class="text-blue-800 mb-3">
                Access reliable medical information, research, and educational resources!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-blue-500">
                <strong>Free Resources:</strong>
                <ul class="text-blue-700 mt-2 space-y-1">
                  <li>• Mayo Clinic, WebMD for health info</li>
                  <li>• PubMed for medical research</li>
                  <li>• WHO website for global health updates</li>
                  <li>• Nigerian health ministry portals</li>
                  <li>• Health blogs and YouTube channels</li>
                </ul>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">📊</span>
                <h4 class="font-bold text-green-900 text-xl">Electronic Health Records</h4>
              </div>
              <p class="text-green-800 mb-3">
                Secure digital storage of your medical history and records!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-green-500">
                <strong>Benefits in Nigeria:</strong>
                <ul class="text-green-700 mt-2 space-y-1">
                  <li>• No more lost medical records</li>
                  <li>• Easy sharing between hospitals</li>
                  <li>• Track your health history over time</li>
                  <li>• Reduced paperwork and errors</li>
                  <li>• Emergency access to critical info</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">⌚</span>
                <h4 class="font-bold text-purple-900 text-xl">Wearable Health Tech</h4>
              </div>
              <p class="text-purple-800 mb-3">
                Smartwatches and fitness trackers monitor your health daily!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-purple-500">
                <strong>Practical Uses:</strong>
                <ul class="text-purple-700 mt-2 space-y-1">
                  <li>• Heart rate and blood pressure monitoring</li>
                  <li>• Step counting and activity tracking</li>
                  <li>• Sleep quality analysis</li>
                  <li>• Emergency alerts for health issues</li>
                  <li>• Medication reminders</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🇳🇬</span>
              Digital Health Solutions for Nigeria's Challenges
            </h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Nigeria has unique healthcare challenges, but digital solutions are emerging! Here's how technology is helping:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🚑 Rural Healthcare Access</h5>
                <p class="text-yellow-800 text-sm">
                  Telemedicine brings specialist care to remote areas. Apps like mDoc and Helium Health connect rural patients with urban doctors.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">💊 Drug Information & Verification</h5>
                <p class="text-yellow-800 text-sm">
                  Check drug authenticity, learn about medications, and get reminders through health apps. Combats fake drug issues.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🩸 Disease Tracking & Prevention</h5>
                <p class="text-yellow-800 text-sm">
                  Apps for tracking epidemics, vaccination schedules, and health campaigns. NCDC uses digital tools for disease surveillance.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🤰 Maternal & Child Health</h5>
                <p class="text-yellow-800 text-sm">
                  Prenatal monitoring, growth tracking, and emergency alerts for expectant mothers through mobile apps.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">⚠️</span>
              Staying Safe in the Digital Health Space
            </h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              While digital health is amazing, we must be careful. Here's how to stay safe as Nigerian users:
            </p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">🔍 Verify Information</h5>
                <p class="text-indigo-800 text-sm">Check sources - use WHO, NCDC, or certified medical sites, not Facebook posts.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">🔒 Protect Privacy</h5>
                <p class="text-indigo-800 text-sm">Be careful sharing medical data online. Use apps with strong privacy policies.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">👨‍⚕️ Consult Professionals</h5>
                <p class="text-indigo-800 text-sm">Online info supplements, doesn't replace doctor visits. Always verify with healthcare providers.</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🚀 Your Health, Your Responsibility</p>
            <p class="text-green-800">
              Digital health tools empower you to take control of your well-being! Regular health monitoring, quick access to information, and convenient consultations can prevent illnesses and ensure timely treatment. In Nigeria, where healthcare access can be challenging, these tools are game-changers. Start small - download a health tracking app, learn about preventive care online, and consult doctors virtually when needed. Your health is your wealth, and technology is here to help you protect it! 🛡️💚
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🌟 The Future of Healthcare is Digital</p>
            <p class="text-red-800">
              We're just scratching the surface! Soon, AI will help diagnose diseases, robots will assist in surgeries, and personalized medicine will be tailored to your genetics. As future tech leaders, you could be the ones building these solutions for Nigeria and Africa. The same internet bringing you healthcare today will be the foundation for the medical innovations you'll create tomorrow. Your generation will ensure that every Nigerian, no matter where they live, has access to world-class healthcare! 🔬⚕️
            </p>
          </div>
        </div>
      `
    },
    {
      id: "fintech-transportation",
      title: "💰 Fintech and Transportation",
      subtitle: "Digital Finance and Logistics Revolution",
      content: `
        <div class="space-y-6">
          <div class="bg-green-50 p-6 rounded-lg mb-6">
            <h4 class="font-bold text-green-900 mb-4 flex items-center">
              <span class="text-2xl mr-3">💳</span>
              Fintech Revolution
            </h4>
            <p class="text-green-800 leading-relaxed mb-4">
              The finance sector has been transformed by the internet. Online banking enables mobile banking, digital payments, and financial transactions.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <strong>🏦 Online Banking:</strong> Mobile banking and digital payments
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>₿ Cryptocurrency:</strong> Bitcoin, Ethereum as digital alternatives
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>📱 Mobile Wallets:</strong> Apple Pay, Google Pay, PayPal
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>📈 Investment Platforms:</strong> Online trading and financial analysis
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-4 flex items-center">
              <span class="text-2xl mr-3">🚗</span>
              Transportation and Logistics
            </h4>
            <p class="text-blue-800 leading-relaxed mb-4">
              Transportation and logistics companies are being transformed by the Internet. Ride-hailing services like Uber and Lyft have revolutionized urban mobility.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <strong>🚕 Ride-hailing:</strong> Uber and Lyft for urban mobility
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>🍕 Food Delivery:</strong> GrubHub, UberEats, DoorDash
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>🗺️ Navigation:</strong> Google Maps and Waze for real-time directions
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>📦 Supply Chain:</strong> Digital tracking and inventory management
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 7,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Finance and transportation have been completely revolutionized by the internet, and as Nigerians, we know this better than anyone! 💰🚗 Remember when banking meant queuing for hours at the bank, and getting a taxi meant standing by the roadside hoping to bargain? Now you can transfer money instantly and order a ride with your phone! The internet has made our daily financial and mobility needs faster, safer, and more convenient. This is the future we all live in! 🇳🇬💳
          </p>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🤔 Why Fintech Matters for Nigerian Students and Youth</p>
            <p class="text-green-800">
              Nigeria has been a fintech pioneer in Africa! From the first mobile money transfers to crypto adoption, we're leading the continent. But we also face challenges like expensive banking fees, poor infrastructure, and financial exclusion. Understanding fintech helps you navigate modern finance safely and take advantage of opportunities. Plus, this knowledge is crucial for careers in Nigeria's booming tech and finance sectors! 📱💼
            </p>
          </div>

          <div class="bg-linear-to-r from-emerald-100 to-green-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">💸 From Cash Queues to Cashless: Nigeria's Fintech Revolution</h4>
            <p class="text-center text-gray-700">How the internet transformed money and movement in Nigeria!</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🏦</span>
                <h4 class="font-bold text-green-900 text-xl">Digital Banking Revolution</h4>
              </div>
              <p class="text-green-800 mb-3">
                Bank from your phone anytime, anywhere - no more bank queues!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-green-500">
                <strong>Nigerian Fintech Stars:</strong>
                <ul class="text-green-700 mt-2 space-y-1">
                  <li>• Mobile Banking: GTBank, FirstBank apps</li>
                  <li>• Digital Wallets: OPay, Palmpay, Moniepoint</li>
                  <li>• Payment Platforms: Flutterwave, Paystack</li>
                  <li>• Savings Apps: PiggyVest, Cowrywise</li>
                  <li>• Investment: Bamboo, Risevest</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">₿</span>
                <h4 class="font-bold text-blue-900 text-xl">Cryptocurrency & Digital Assets</h4>
              </div>
              <p class="text-blue-800 mb-3">
                Bitcoin, Ethereum, and other digital currencies are changing how we think about money!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-blue-500">
                <strong>Nigerian Crypto Scene:</strong>
                <ul class="text-blue-700 mt-2 space-y-1">
                  <li>• Exchanges: Luno, Yellow Card, Bundle</li>
                  <li>• Local Adoption: High crypto usage rates</li>
                  <li>• Mining Communities: Growing in Nigeria</li>
                  <li>• NFT Market: Emerging digital art scene</li>
                  <li>• Blockchain Jobs: Increasing opportunities</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🚕</span>
                <h4 class="font-bold text-purple-900 text-xl">Ride-Hailing & Urban Mobility</h4>
              </div>
              <p class="text-purple-800 mb-3">
                Order rides, track vehicles, and pay digitally - transportation made easy!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-purple-500">
                <strong>Nigerian Transport Tech:</strong>
                <ul class="text-purple-700 mt-2 space-y-1">
                  <li>• Ride-hailing: Uber, Bolt, Oga Taxify</li>
                  <li>• Bike Services: Gokada, Max.ng</li>
                  <li>• Bus Booking: ABC Transport, others</li>
                  <li>• Logistics: Konga delivery, Jumia</li>
                  <li>• Bike-hailing: Emerging in major cities</li>
                </ul>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-xl border-2 border-red-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🍕</span>
                <h4 class="font-bold text-red-900 text-xl">Food Delivery & E-commerce</h4>
              </div>
              <p class="text-red-800 mb-3">
                Order food, groceries, and goods from the comfort of your home!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-red-500">
                <strong>Delivery Revolution:</strong>
                <ul class="text-red-700 mt-2 space-y-1">
                  <li>• Food Delivery: Jumia Food, Uber Eats</li>
                  <li>• Groceries: Shop online, doorstep delivery</li>
                  <li>• E-commerce: Konga, Jumia, AliExpress</li>
                  <li>• Local Shops: Mr Biggs, Chicken Republic delivery</li>
                  <li>• Pharmacy: Drug delivery services</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🇳🇬</span>
              Nigeria's Fintech Leadership in Africa
            </h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Nigeria is Africa's fintech capital! Here's why this matters for you:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">💼 Job Opportunities</h5>
                <p class="text-yellow-800 text-sm">
                  Flutterwave, Paystack, Interswitch, and other Nigerian fintech companies are hiring. Your COS 101 knowledge gives you an edge in this booming sector!
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🚀 Innovation Hub</h5>
                <p class="text-yellow-800 text-sm">
                  Nigeria leads in mobile money adoption. We're innovating solutions for Africa and the world. You could be the next fintech entrepreneur!
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">📈 Financial Inclusion</h5>
                <p class="text-yellow-800 text-sm">
                  Fintech is bringing banking to millions of unbanked Nigerians. This creates social impact while building successful businesses.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🌍 Global Recognition</h5>
                <p class="text-yellow-800 text-sm">
                  Nigerian fintech innovations are gaining international attention. Your skills could take you from Ilorin to Silicon Valley!
                </p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">⚠️</span>
              Staying Safe in the Digital Finance World
            </h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              With great power comes great responsibility! Protect yourself in Nigeria's fintech space:
            </p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">🔐 Secure Transactions</h5>
                <p class="text-indigo-800 text-sm">Use official apps, enable 2FA, avoid public WiFi for financial transactions.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">📱 App Verification</h5>
                <p class="text-indigo-800 text-sm">Download from official stores, check developer info, read reviews before installing.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">💰 Investment Caution</h5>
                <p class="text-indigo-800 text-sm">Research before investing in crypto or stocks. Don't invest money you can't afford to lose.</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🚀 Your Future in Fintech and Digital Logistics</p>
            <p class="text-green-800">
              The fintech and transportation sectors are exploding in Nigeria! Companies like Flutterwave are valued at billions, and ride-hailing apps employ thousands. Understanding these technologies positions you for high-demand careers. Whether you want to build the next payment app, optimize logistics systems, or work in digital banking, your COS 101 foundation gives you the perfect starting point. The future of Nigerian commerce runs on the internet - and you could be building it! 🏗️💡
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🌍 From Queue to Quick: The Digital Transformation</p>
            <p class="text-red-800">
              Think about how much time and stress the internet has saved us! No more ATM queues during payday, no more waiting hours for bank transfers, no more struggling to find transportation in the rain. The internet has made Nigerian life more efficient and convenient. But this is just the beginning - autonomous vehicles, instant payments, and smart cities are coming. Your generation will determine how Nigeria embraces these changes and builds on our fintech leadership! 🔮✨
            </p>
          </div>
        </div>
      `
    },
    {
      id: "work-government",
      title: "💼 The World of Work and Governance",
      subtitle: "Digital Transformation of Business and Public Services",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Broadly speaking, the internet has significantly impacted the world of work and business. Remote work arrangements have become increasingly popular, with telecommuting and virtual offices enabling flexible work environments.
          </p>

          <div class="bg-indigo-50 p-6 rounded-lg mb-6">
            <h4 class="font-bold text-indigo-900 mb-4">🏢 Digital Workplace Transformation</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded border">
                <strong>🏠 Remote Work:</strong> Telecommuting and virtual offices enabling flexible environments
              </div>
              <div class="bg-white p-4 rounded border">
                <strong>🛒 E-commerce:</strong> Online shopping, digital payments, and entrepreneurship
              </div>
              <div class="bg-white p-4 rounded border">
                <strong>📢 Digital Marketing:</strong> Online advertising, social media marketing, and SEO
              </div>
              <div class="bg-white p-4 rounded border">
                <strong>☁️ Cloud Computing:</strong> Remote data storage, processing, and collaboration
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4 flex items-center">
              <span class="text-2xl mr-3">🏛️</span>
              Government and Public Services
            </h4>
            <p class="text-purple-800 leading-relaxed mb-4">
              In many ways, government and public services have also been impacted by the internet.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <strong>📋 E-government:</strong> Online access to services and permits
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>🗳️ Digital Democracy:</strong> Online voting and public forums
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>📄 Public Records:</strong> Online access promoting transparency
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>🚨 Emergency Services:</strong> Online reporting and disaster management
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 7,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! The internet has transformed how we work and how governments serve us, and this is especially relevant for Nigerian graduates like you! 💼🏛️ Remember when getting a job meant traveling to Lagos or Abuja for interviews, and government services meant long queues at ministries? Now you can work remotely for international companies and access government services online! The internet has made work more flexible and governance more accessible. This changes everything for your future career! 🇳🇬💻
          </p>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🤔 Why Digital Work Matters for Nigerian Graduates</p>
            <p class="text-indigo-800">
              Unemployment is a major challenge in Nigeria, but the internet creates new opportunities! Remote work means you can work for global companies from Ilorin. Digital government services reduce corruption and improve efficiency. Understanding these changes helps you navigate the modern job market and take advantage of emerging opportunities. Plus, Nigeria's government is investing heavily in digital transformation - you could be part of building it! 📈
            </p>
          </div>

          <div class="bg-linear-to-r from-blue-100 to-indigo-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🏢 From Office Cubicles to Home Offices: Work Revolutionized</h4>
            <p class="text-center text-gray-700">How the internet transformed workplaces and government services!</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🏠</span>
                <h4 class="font-bold text-indigo-900 text-xl">Remote Work & Flexible Jobs</h4>
              </div>
              <p class="text-indigo-800 mb-3">
                Work from anywhere! No more commuting, flexible hours, global opportunities!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-indigo-500">
                <strong>Nigerian Opportunities:</strong>
                <ul class="text-indigo-700 mt-2 space-y-1">
                  <li>• Freelance platforms: Upwork, Fiverr</li>
                  <li>• Remote jobs: Andela, Flutterwave hiring globally</li>
                  <li>• Virtual assistants: Administrative work from home</li>
                  <li>• Content creation: Writing, design, social media</li>
                  <li>• Online tutoring: Teach English, tech skills</li>
                </ul>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🛒</span>
                <h4 class="font-bold text-green-900 text-xl">E-commerce & Entrepreneurship</h4>
              </div>
              <p class="text-green-800 mb-3">
                Start your business online! Sell products, services, or digital goods globally!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-green-500">
                <strong>Success Stories:</strong>
                <ul class="text-green-700 mt-2 space-y-1">
                  <li>• Konga, Jumia: Built from online marketplaces</li>
                  <li>• Digital products: Sell courses, ebooks, graphics</li>
                  <li>• Dropshipping: Sell without holding inventory</li>
                  <li>• Affiliate marketing: Earn from product recommendations</li>
                  <li>• Social commerce: Sell via Instagram, WhatsApp</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">📢</span>
                <h4 class="font-bold text-purple-900 text-xl">Digital Marketing & Branding</h4>
              </div>
              <p class="text-purple-800 mb-3">
                Build your personal brand and market businesses online!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-purple-500">
                <strong>Growing Field:</strong>
                <ul class="text-purple-700 mt-2 space-y-1">
                  <li>• Social media marketing: Instagram, TikTok ads</li>
                  <li>• SEO & content marketing: Blog writing, YouTube</li>
                  <li>• Influencer marketing: Build audience, monetize</li>
                  <li>• Google Ads: Targeted advertising campaigns</li>
                  <li>• Personal branding: LinkedIn, portfolio websites</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">☁️</span>
                <h4 class="font-bold text-blue-900 text-xl">Cloud Computing & Collaboration</h4>
              </div>
              <p class="text-blue-800 mb-3">
                Work together seamlessly from anywhere with cloud tools!
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-blue-500">
                <strong>Essential Tools:</strong>
                <ul class="text-blue-700 mt-2 space-y-1">
                  <li>• Google Workspace: Docs, Sheets, Drive</li>
                  <li>• Microsoft Teams: Virtual meetings, chat</li>
                  <li>• Slack: Team communication</li>
                  <li>• Trello/Asana: Project management</li>
                  <li>• Zoom/Google Meet: Video conferencing</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🏛️</span>
              Digital Government: Nigeria's E-Governance Journey
            </h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Nigerian government is going digital! Here's how it's changing public services:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">📋 E-Government Services</h5>
                <p class="text-yellow-800 text-sm">
                  Apply for passports, driver's licenses, and permits online. NIMC enrollment, vehicle registration, tax filing - all going digital!
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🗳️ Digital Democracy</h5>
                <p class="text-yellow-800 text-sm">
                  Online voting pilots, digital town halls, social media engagement with government. Citizens can now participate in governance remotely.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">📄 Open Government Data</h5>
                <p class="text-yellow-800 text-sm">
                  Budget information, project updates, and government data now available online. This promotes transparency and accountability.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🚨 Smart Emergency Services</h5>
                <p class="text-yellow-800 text-sm">
                  Online disaster reporting, digital emergency alerts, and improved response coordination through internet-connected systems.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 class="font-bold text-red-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">💼</span>
              Preparing for the Future of Work
            </h4>
            <p class="text-red-800 leading-relaxed mb-4">
              The job market is changing! Here's how to prepare for digital work environments:
            </p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-red-900 mb-1">🛠️ Digital Skills</h5>
                <p class="text-red-800 text-sm">Master tools like Microsoft Office, Google Workspace, video conferencing, and basic coding.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-red-900 mb-1">🌐 Online Presence</h5>
                <p class="text-red-800 text-sm">Build a professional LinkedIn profile, create a portfolio website, and establish your personal brand.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-red-900 mb-1">🤝 Remote Work Mindset</h5>
                <p class="text-red-800 text-sm">Develop self-discipline, time management, and digital communication skills for remote work success.</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🚀 Your Career in the Digital Age</p>
            <p class="text-green-800">
              The internet has created more career opportunities than ever before! Remote work means you can work for Google from your Ilorin apartment. Digital entrepreneurship means you can start a global business with just your phone. Government digitization means more efficient public services and new tech jobs. Your COS 101 knowledge gives you the foundation to thrive in this new world. The future belongs to those who embrace digital transformation! 🌟💼
            </p>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🇳🇬 Nigeria's Digital Work Revolution</p>
            <p class="text-blue-800">
              We're seeing incredible changes! Companies like Flutterwave hire remotely, Nigerian freelancers earn in dollars, and government services are going online. But we must address challenges like poor internet infrastructure and digital literacy gaps. Your generation has the opportunity to bridge these gaps and build Nigeria's digital future. Whether you become a remote worker, digital entrepreneur, or e-governance expert, the internet has opened doors you couldn't imagine before. Your success story could inspire the next generation! 🔥📈
            </p>
          </div>
        </div>
      `
    },
    {
      id: "computing-disciplines",
      title: "🧠 Computing Discipline Areas",
      subtitle: "The Diverse Fields of Computing and Their Applications",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Instead of being a single subject, computing is a collection of disciplines with diverse areas of interest. Computing is any goal-oriented activity that makes use of, benefits from, or creates computers.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 class="font-bold text-blue-900 mb-4">Core Computing Disciplines</h4>
            <p class="text-blue-800 leading-relaxed mb-4">
              Computing comprises the design and development of computer hardware and software components for a range of applications, including processing, organizing, and managing different types of information.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3 flex items-center">
                <span class="text-xl mr-2">🌐</span>
                Computer Networks
              </h4>
              <p class="text-green-800 text-sm mb-3">
                Connecting devices to share resources and communicate
              </p>
              <ul class="text-green-800 text-sm space-y-1">
                <li>• Local Area Networks (LANs)</li>
                <li>• Wide Area Networks (WANs)</li>
                <li>• Internet of Things (IoT)</li>
              </ul>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3 flex items-center">
                <span class="text-xl mr-2">💻</span>
                Software Engineering
              </h4>
              <p class="text-blue-800 text-sm mb-3">
                Developing reliable, efficient software
              </p>
              <ul class="text-blue-800 text-sm space-y-1">
                <li>• Design Patterns</li>
                <li>• Testing & Quality Assurance</li>
                <li>• Version Control Systems</li>
              </ul>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3 flex items-center">
                <span class="text-xl mr-2">🌐</span>
                Web Development
              </h4>
              <p class="text-purple-800 text-sm mb-3">
                Building websites and web applications
              </p>
              <ul class="text-purple-800 text-sm space-y-1">
                <li>• Front-end Development</li>
                <li>• Back-end Development</li>
                <li>• Web Design & UX</li>
              </ul>
            </div>

            <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 class="font-bold text-orange-900 mb-3 flex items-center">
                <span class="text-xl mr-2">🤖</span>
                Artificial Intelligence
              </h4>
              <p class="text-orange-800 text-sm mb-3">
                Creating intelligent machines
              </p>
              <ul class="text-orange-800 text-sm space-y-1">
                <li>• Machine Learning</li>
                <li>• Natural Language Processing</li>
                <li>• Robotics & Automation</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 8,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Computing is not just one thing - it's a whole world of exciting fields, and each one offers amazing career opportunities for Nigerian students like you! 🧠💻 Remember when people thought computer science was just about programming? Now we know it's about networks connecting the world, AI powering our phones, cybersecurity protecting our data, and so much more! This diversity means there's a perfect computing path for your interests and skills. Let's explore these amazing fields together! 🇳🇬🚀
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Computing Disciplines Matter for Your Future</p>
            <p class="text-blue-800">
              Computing isn't a single career - it's multiple exciting paths! Whether you love building apps, securing data, creating AI, or connecting networks, there's a field for you. In Nigeria's growing tech industry, specialists in these areas are in high demand. Companies like Flutterwave, Paystack, and Andela need experts in all these disciplines. Understanding these fields helps you choose your path and build a successful career in Nigeria's digital economy! 💼
            </p>
          </div>

          <div class="bg-linear-to-r from-indigo-100 to-purple-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🧠 From Hardware to AI: The Many Faces of Computing</h4>
            <p class="text-center text-gray-700">Discover the diverse world of computing disciplines and find your perfect fit!</p>
          </div>

          <div class="space-y-6">
            <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🌐</span>
                <h4 class="font-bold text-green-900 text-xl">Computer Networks: The Internet's Architects</h4>
              </div>
              <p class="text-green-800 leading-relaxed mb-3">
                Network engineers are the unsung heroes who keep the internet running! They design, build, and maintain the systems that connect our world.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-green-800">
                  <strong>Why It Matters:</strong> Every time you stream a video, transfer money, or video call family, you're using networks built by these experts. In Nigeria, network specialists are crucial for improving our internet infrastructure! 📡
                </p>
              </div>
              <div class="mt-3">
                <strong>Nigerian Opportunities:</strong> Working with MTN, Airtel, or building rural connectivity solutions.
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">💻</span>
                <h4 class="font-bold text-blue-900 text-xl">Software Engineering: The App Builders</h4>
              </div>
              <p class="text-blue-800 leading-relaxed mb-3">
                Software engineers create the apps, websites, and systems we use every day. They're like digital architects building the future!
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-blue-800">
                  <strong>Career Path:</strong> From junior developer to tech lead, software engineering offers growth and good salaries. Nigerian companies like Flutterwave and Konga need skilled software engineers! 💼
                </p>
              </div>
              <div class="mt-3">
                <strong>Skills Needed:</strong> Programming, problem-solving, teamwork, and continuous learning.
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🌐</span>
                <h4 class="font-bold text-purple-900 text-xl">Web Development: The Digital Experience Creators</h4>
              </div>
              <p class="text-purple-800 leading-relaxed mb-3">
                Web developers build the websites and online experiences we interact with daily. They combine creativity with technical skills to make the web beautiful and functional!
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-purple-800">
                  <strong>Perfect for Creatives:</strong> If you love design and technology, web development combines both! Build portfolios, e-commerce sites, or even social platforms. Many Nigerian web developers work remotely for international clients! 🎨
                </p>
              </div>
              <div class="mt-3">
                <strong>Specializations:</strong> Front-end (user interface), back-end (server logic), or full-stack (both).
              </div>
            </div>

            <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🤖</span>
                <h4 class="font-bold text-orange-900 text-xl">Artificial Intelligence: The Future Makers</h4>
              </div>
              <p class="text-orange-800 leading-relaxed mb-3">
                AI specialists create intelligent systems that can learn, predict, and automate tasks. From voice assistants to self-driving cars, AI is shaping our future!
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-orange-800">
                  <strong>Cutting-Edge Field:</strong> AI is the future! Nigerian AI experts work on healthcare diagnostics, financial fraud detection, and agricultural optimization. With great pay and global demand! 🚀
                </p>
              </div>
              <div class="mt-3">
                <strong>Applications:</strong> Chatbots, recommendation systems, autonomous vehicles, medical diagnosis.
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🔒</span>
              Security, Data, and Other Essential Fields
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🔐 Cybersecurity</h5>
                <p class="text-yellow-800 text-sm">
                  Protect systems from hackers and cyber threats. Critical in our digital world where data breaches can ruin lives and businesses.
                </p>
                <p class="text-yellow-700 text-xs mt-2">Nigerian Need: Banking, government, personal data protection</p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">📊 Data Science</h5>
                <p class="text-yellow-800 text-sm">
                  Extract insights from data to make better decisions. Turn numbers into actionable business intelligence.
                </p>
                <p class="text-yellow-700 text-xs mt-2">Nigerian Applications: Oil & gas, agriculture, finance, healthcare</p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🗄️ Database Systems</h5>
                <p class="text-yellow-800 text-sm">
                  Design and manage data storage systems. Ensure data is organized, secure, and easily accessible.
                </p>
                <p class="text-yellow-700 text-xs mt-2">Essential for all businesses and government services</p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">👥 Human-Computer Interaction</h5>
                <p class="text-yellow-800 text-sm">
                  Design user-friendly interfaces and experiences. Make technology accessible and enjoyable for everyone.
                </p>
                <p class="text-yellow-700 text-xs mt-2">Crucial for app success and user adoption</p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🎓</span>
              Choosing Your Computing Path
            </h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              With so many options, how do you choose? Here's guidance for Nigerian students:
            </p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">🔍 Self-Assessment</h5>
                <p class="text-indigo-800 text-sm">What excites you? Building things (engineering), solving puzzles (AI), helping people (UX), protecting data (security)?</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">📈 Market Demand</h5>
                <p class="text-indigo-800 text-sm">Check Nigerian job markets - cybersecurity and AI are booming. Software engineering is always needed.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">🚀 Skill Building</h5>
                <p class="text-indigo-800 text-sm">Start with basics (programming), then specialize. Use free resources like Coursera, Udemy, YouTube.</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🇳🇬 Your Place in Nigeria's Tech Future</p>
            <p class="text-green-800">
              Nigeria needs experts in ALL these computing disciplines! From network engineers to build better internet infrastructure, to AI specialists to optimize agriculture and healthcare, to cybersecurity experts to protect our digital economy. Your COS 101 foundation gives you the perfect starting point. Whether you specialize or become a generalist, there's a crucial role for you in building Nigeria's digital future. The choice is yours - which computing discipline will you master? 🌟
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🔮 The Interdisciplinary Nature of Computing</p>
            <p class="text-red-800">
              The most successful computing professionals combine multiple disciplines! A web developer with AI knowledge, a network engineer with cybersecurity skills, a software engineer with UX design abilities - these combinations are invaluable. Don't limit yourself to one field. Learn broadly, specialize deeply, and stay curious. The computing field evolves rapidly, and adaptable minds thrive. Your journey in computing is about lifelong learning and continuous growth! 📚🚀
            </p>
          </div>
        </div>
      `
    },
    {
      id: "security-data-fields",
      title: "🔒 Security and Data Fields",
      subtitle: "Critical Areas in Modern Computing",
      content: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-3 flex items-center">
                <span class="text-xl mr-2">🔐</span>
                Cybersecurity
              </h4>
              <p class="text-red-800 text-sm mb-3">
                Protecting computer systems and data
              </p>
              <ul class="text-red-800 text-sm space-y-1">
                <li>• Encryption technologies</li>
                <li>• Firewall protection</li>
                <li>• Threat detection systems</li>
              </ul>
            </div>

            <div class="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h4 class="font-bold text-teal-900 mb-3 flex items-center">
                <span class="text-xl mr-2">📊</span>
                Data Science
              </h4>
              <p class="text-teal-800 text-sm mb-3">
                Extracting insights from large datasets
              </p>
              <ul class="text-teal-800 text-sm space-y-1">
                <li>• Data Mining & Analysis</li>
                <li>• Data Visualization</li>
                <li>• Statistical Analysis</li>
              </ul>
            </div>

            <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
                <span class="text-xl mr-2">🗄️</span>
                Database Systems
              </h4>
              <p class="text-indigo-800 text-sm mb-3">
                Managing and storing data efficiently
              </p>
              <ul class="text-indigo-800 text-sm space-y-1">
                <li>• Database Design</li>
                <li>• Data Retrieval Systems</li>
                <li>• Data Security & Privacy</li>
              </ul>
            </div>

            <div class="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h4 class="font-bold text-pink-900 mb-3 flex items-center">
                <span class="text-xl mr-2">👥</span>
                Human-Computer Interaction
              </h4>
              <p class="text-pink-800 text-sm mb-3">
                Designing user-friendly interfaces
              </p>
              <ul class="text-pink-800 text-sm space-y-1">
                <li>• User Experience (UX) Design</li>
                <li>• User Interface (UI) Design</li>
                <li>• Accessibility & Usability</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-xl mr-2">🏢</span>
              Information Systems
            </h4>
            <p class="text-yellow-800 text-sm mb-3">
              Integrating technology into organizations
            </p>
            <ul class="text-yellow-800 text-sm space-y-1">
              <li>• Business Intelligence & Analytics</li>
              <li>• Enterprise Resource Planning (ERP)</li>
              <li>• Supply Chain Management Systems</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
            <h4 class="font-bold text-gray-900 mb-3 flex items-center">
              <span class="text-xl mr-2">⚙️</span>
              Operating Systems
            </h4>
            <p class="text-gray-800 text-sm mb-3">
              Managing computer hardware resources
            </p>
            <ul class="text-gray-800 text-sm space-y-1">
              <li>• Process & Memory Management</li>
              <li>• File System Organization</li>
              <li>• Resource Allocation & Control</li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 8,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Security and data fields are where the real digital warriors operate, and in Nigeria's context, these experts are absolutely essential! 🔒🛡️ Remember when we used to worry about physical theft? Now we have to protect our digital lives too - from hackers stealing our bank details to companies analyzing our data. These computing fields keep our digital world safe and make sense of the mountains of data we generate every day. Understanding these areas will make you a more responsible and valuable digital citizen! 🇳🇬💪
          </p>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🤔 Why Security and Data Fields Are Critical for Nigerians</p>
            <p class="text-red-800">
              In Nigeria, we've seen the devastating effects of cyber attacks - from bank hacks to data breaches affecting millions. At the same time, we generate huge amounts of data that could solve our problems if properly analyzed. Cybersecurity protects our digital economy, data science can optimize agriculture and healthcare, and database systems keep our information organized. These fields aren't just technical - they're essential for Nigeria's digital security and economic growth! 🛡️
            </p>
          </div>

          <div class="bg-linear-to-r from-red-100 to-orange-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🔐 Guardians of the Digital World: Security and Data Experts</h4>
            <p class="text-center text-gray-700">Meet the unsung heroes who protect and analyze our digital lives!</p>
          </div>

          <div class="space-y-6">
            <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🔐</span>
                <h4 class="font-bold text-red-900 text-xl">Cybersecurity: The Digital Protectors</h4>
              </div>
              <p class="text-red-800 leading-relaxed mb-3">
                Cybersecurity experts are like digital security guards, protecting systems from hackers, viruses, and cyber attacks. They build firewalls, detect threats, and respond to breaches.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-red-800">
                  <strong>Nigerian Critical Need:</strong> With rising cyber attacks on banks, government systems, and personal data, cybersecurity experts are heroes! Companies pay premium salaries for these skills. 🛡️
                </p>
              </div>
              <div class="mt-3">
                <strong>Daily Impact:</strong> Every time you bank online or shop safely, cybersecurity is working behind the scenes.
              </div>
            </div>

            <div class="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">📊</span>
                <h4 class="font-bold text-teal-900 text-xl">Data Science: Turning Data into Wisdom</h4>
              </div>
              <p class="text-teal-800 leading-relaxed mb-3">
                Data scientists analyze massive amounts of data to find patterns and insights. They turn raw information into actionable knowledge that drives decisions.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-teal-800">
                  <strong>Nigerian Applications:</strong> Optimizing oil production, predicting crop yields, detecting financial fraud, improving healthcare delivery. Data science can solve real Nigerian problems! 📈
                </p>
              </div>
              <div class="mt-3">
                <strong>Skills Needed:</strong> Statistics, programming, machine learning, and business understanding.
              </div>
            </div>

            <div class="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🗄️</span>
                <h4 class="font-bold text-indigo-900 text-xl">Database Systems: The Data Architects</h4>
              </div>
              <p class="text-indigo-800 leading-relaxed mb-3">
                Database experts design and manage systems that store, organize, and retrieve data efficiently. They're the foundation of all data-driven applications.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-indigo-800">
                  <strong>Essential Role:</strong> Every app you use, from banking to social media, relies on well-designed databases. In Nigeria, this is crucial for government services, healthcare records, and business operations. 🏗️
                </p>
              </div>
              <div class="mt-3">
                <strong>Career Path:</strong> Database administrators, architects, and developers are always in demand.
              </div>
            </div>

            <div class="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">👥</span>
                <h4 class="font-bold text-pink-900 text-xl">Human-Computer Interaction: Making Tech User-Friendly</h4>
              </div>
              <p class="text-pink-800 leading-relaxed mb-3">
                HCI experts design interfaces and experiences that make technology easy and enjoyable for people to use. They bridge the gap between complex systems and human needs.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-pink-800">
                  <strong>User-Centered Design:</strong> Why does your banking app work so smoothly? HCI experts made it intuitive. In Nigeria, good UX design can improve adoption of digital services and reduce frustration. 🎨
                </p>
              </div>
              <div class="mt-3">
                <strong>Impact:</strong> Poor design leads to abandoned apps; good design creates loyal users.
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🔄</span>
              Supporting Fields: The Foundation of Digital Operations
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🏢 Information Systems</h5>
                <p class="text-yellow-800 text-sm">
                  Integrate technology into business operations. Design systems that support organizational goals and improve efficiency.
                </p>
                <p class="text-yellow-700 text-xs mt-2">Nigerian Need: Streamlining government and business processes</p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">⚙️ Operating Systems</h5>
                <p class="text-yellow-800 text-sm">
                  Manage computer hardware and software resources. Ensure everything works together smoothly and efficiently.
                </p>
                <p class="text-yellow-700 text-xs mt-2">Foundation: Everything from your phone to servers runs on OS</p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🇳🇬</span>
              Why These Fields Matter for Nigeria's Digital Future
            </h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              Nigeria faces unique digital challenges that these experts can solve:
            </p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">🛡️ Cybersecurity Threats</h5>
                <p class="text-indigo-800 text-sm">Rising cyber attacks on banks and government. We need local experts to protect our digital assets.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">📊 Data-Driven Solutions</h5>
                <p class="text-indigo-800 text-sm">Agriculture, healthcare, education - data can optimize all sectors for better outcomes.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">🎯 User Adoption</h5>
                <p class="text-indigo-800 text-sm">Good UX design ensures Nigerians actually use digital services, not abandon them.</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🚀 High-Demand Careers with Great Impact</p>
            <p class="text-green-800">
              These fields offer excellent career prospects! Cybersecurity experts earn premium salaries protecting valuable assets. Data scientists solve real-world problems and influence major decisions. Database administrators and HCI designers are essential for every tech project. In Nigeria's growing digital economy, these specialists are the backbone of our technological infrastructure. Your skills in these areas won't just give you a job - they'll make you indispensable! 💼✨
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🛡️ Your Digital Responsibility</p>
            <p class="text-red-800">
              As you learn about these fields, remember: you're not just studying technical skills - you're learning to be a responsible digital citizen. Understanding cybersecurity helps you protect yourself online. Knowing about data privacy helps you make informed choices about your personal information. Learning about good design helps you create technology that serves people. These aren't just career paths - they're ways to contribute to a safer, more efficient digital Nigeria. Your knowledge can protect lives, secure economies, and improve how we all live digitally! 🌟🔒
            </p>
          </div>
        </div>
      `
    },
    {
      id: "conclusion",
      title: "🎯 Conclusion: The Internet's Lasting Impact",
      subtitle: "Reflecting on the Digital Revolution",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            The internet's evolution has been a remarkable journey, transforming modern society and redefining the way we communicate, access information, and interact with the world. As the internet evolves, its potential to shape the future of humanity remains limitless.
          </p>

          <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
            <h4 class="font-bold text-gray-900 mb-4 flex items-center">
              <span class="text-2xl mr-3">✨</span>
              Positive Impact Highlights
            </h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-900 mb-2">🌍 Global Connectivity</h5>
                <p class="text-blue-800 text-sm">Bridged geographical divides and democratized knowledge</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-green-900 mb-2">📈 Economic Growth</h5>
                <p class="text-green-800 text-sm">Driven innovation and created new business opportunities</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-purple-900 mb-2">🏥 Healthcare Advances</h5>
                <p class="text-purple-800 text-sm">Transformed medical care and health monitoring</p>
              </div>
            </div>
          </div>

          <div class="bg-orange-50 p-6 rounded-lg">
            <h4 class="font-bold text-orange-900 mb-4">⚠️ Challenges and Considerations</h4>
            <p class="text-orange-800 leading-relaxed mb-4">
              However, the internet also poses significant challenges that society must address:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border-l-4 border-orange-500">
                <strong>🔒 Cybersecurity Threats:</strong> Protecting against digital attacks
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-orange-500">
                <strong>😔 Social Isolation:</strong> Balancing online and offline interactions
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-orange-500">
                <strong>📰 Misinformation:</strong> Ensuring information accuracy and reliability
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-orange-500">
                <strong>🌱 Environmental Impact:</strong> Addressing the ecological footprint of digital infrastructure
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 class="font-bold text-green-900 mb-3">🚀 Future Outlook</h4>
            <p class="text-green-800 leading-relaxed">
              The internet's potential for positive impact remains immense, and its advancement continues to shape the world. Its applications continue to expand, driving innovation, progress, and global connectivity. As technology continues to evolve, understanding these computing disciplines is essential for harnessing their potential and addressing the challenges of the digital age.
            </p>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg text-center">
            <h4 class="font-bold text-blue-900 mb-3">🎓 The Computing Discipline Tapestry</h4>
            <p class="text-blue-800 leading-relaxed">
              From Artificial Intelligence to Web Development, these areas have transformed industries, revolutionized communication, and improved lives. By recognizing the interconnectedness of these fields, we can foster collaboration, inspire new breakthroughs, and shape a brighter future for all.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 10,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! What a journey we've been on through the incredible world of the internet and its impact on our lives! 🎯 From the early days of ARPANET to today's connected world, we've seen how the internet has transformed everything - communication, education, healthcare, finance, work, and entertainment. As Nigerian students, you now understand not just what the internet does, but how it shapes our future. This knowledge isn't just academic - it's your superpower for navigating and shaping Nigeria's digital tomorrow! 🇳🇬🚀
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Reflecting on Our Internet Journey</p>
            <p class="text-blue-800">
              We've covered the internet's history, its revolutionary applications across sectors, the diverse computing disciplines that make it all work, and the critical importance of security and data management. Most importantly, we've seen how all of this applies to Nigeria - our challenges, our opportunities, and our unique position as African innovators. The internet isn't just a tool; it's a catalyst for change that we Nigerians are uniquely positioned to lead! 💡
            </p>
          </div>

          <div class="bg-linear-to-r from-emerald-100 to-teal-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🌍 The Internet's Transformative Power: A Nigerian Perspective</h4>
            <p class="text-center text-gray-700">How the internet has changed lives and created opportunities for Nigerians!</p>
          </div>

          <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <h4 class="font-bold text-gray-900 mb-4 flex items-center">
              <span class="text-2xl mr-3">✨</span>
              Positive Impact Highlights for Nigeria
            </h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-green-900 mb-2">🌐 Global Connectivity</h5>
                <p class="text-green-800 text-sm">Nigerians now connect with the world instantly - family abroad, international business, global learning opportunities.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-900 mb-2">💰 Economic Growth</h5>
                <p class="text-blue-800 text-sm">Fintech revolution, e-commerce boom, remote work opportunities - the internet is creating jobs and wealth.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-purple-900 mb-2">🏥 Healthcare Advances</h5>
                <p class="text-purple-800 text-sm">Telemedicine, health information access, digital records - healthcare is becoming more accessible and efficient.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-yellow-900 mb-2">🎓 Education Revolution</h5>
                <p class="text-yellow-800 text-sm">Online learning, digital resources, global certifications - education is no longer limited by location or cost.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-indigo-900 mb-2">🎬 Cultural Expression</h5>
                <p class="text-indigo-800 text-sm">Nigerian content reaches global audiences, our music, films, and stories inspire worldwide.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-red-900 mb-2">🛡️ Security & Trust</h5>
                <p class="text-red-800 text-sm">Digital security protects our financial systems, while data insights help solve national challenges.</p>
              </div>
            </div>
          </div>

          <div class="bg-orange-50 p-6 rounded-lg">
            <h4 class="font-bold text-orange-900 mb-4">⚠️ Nigeria's Digital Challenges & Solutions</h4>
            <p class="text-orange-800 leading-relaxed mb-4">
              While the internet brings immense benefits, we must address Nigerian-specific challenges:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border-l-4 border-orange-500">
                <strong>🔒 Cybersecurity Threats:</strong> Rising attacks on our banks and data - we need more local cybersecurity experts
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-orange-500">
                <strong>📶 Infrastructure Gaps:</strong> Poor rural connectivity and unreliable power - ongoing infrastructure investments needed
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-orange-500">
                <strong>📰 Misinformation:</strong> Fake news spreads quickly online - digital literacy and fact-checking crucial
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-orange-500">
                <strong>💰 Digital Divide:</strong> High data costs exclude many - affordable access policies needed
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-orange-500">
                <strong>🎯 Privacy Concerns:</strong> Personal data protection laws and awareness needed
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-orange-500">
                <strong>🌱 Environmental Impact:</strong> Energy consumption of data centers - sustainable digital practices required
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 class="font-bold text-green-900 mb-3">🚀 Your Role in Nigeria's Digital Future</h4>
            <p class="text-green-800 leading-relaxed">
              As COS 101 students at UNILORIN, you are perfectly positioned to shape Nigeria's digital destiny! Understanding computing disciplines, internet applications, and digital challenges gives you the knowledge to become:
            </p>
            <div class="grid md:grid-cols-2 gap-4 mt-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-green-900 mb-1">🔬 innovators</h5>
                <p class="text-green-800 text-sm">Creating solutions for Nigerian problems using technology</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-green-900 mb-1">🛡️ protectors</h5>
                <p class="text-green-800 text-sm">Securing our digital infrastructure and personal data</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-green-900 mb-1">🎓 educators</h5>
                <p class="text-green-800 text-sm">Teaching digital literacy and responsible internet use</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-green-900 mb-1">💼 leaders</h5>
                <p class="text-green-800 text-sm">Building the next generation of Nigerian tech companies</p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🎓</span>
              The Computing Discipline Tapestry: Your Career Canvas
            </h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              From software engineering to cybersecurity, AI to web development, data science to networks - computing offers diverse career paths. Each discipline contributes uniquely to solving Nigeria's challenges and building our digital future. The key is finding where your passion meets Nigeria's needs!
            </p>
            <div class="bg-white p-4 rounded-lg border">
              <h5 class="font-semibold text-indigo-900 mb-2">Remember:</h5>
              <ul class="text-indigo-800 space-y-1">
                <li>• Computing isn't just technical - it's about solving human problems</li>
                <li>• Nigerian challenges need Nigerian solutions and Nigerian innovators</li>
                <li>• Your UNILORIN education + practical skills = unstoppable career potential</li>
                <li>• Technology changes fast, but foundational knowledge lasts forever</li>
                <li>• You're not just learning computing - you're learning to shape the future</li>
              </ul>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🎯 Final Charge: Be the Digital Change Nigeria Needs</p>
            <p class="text-red-800">
              The internet has transformed our world, and Nigeria is uniquely positioned to lead in this digital revolution! We've seen how technology can bridge geographical divides, create economic opportunities, improve healthcare and education, and connect us globally. But the real transformation happens when people like you - educated, passionate, and innovative Nigerians - take this knowledge and build solutions for our community. Your COS 101 journey is just beginning. Use this knowledge to create, innovate, and make Nigeria proud. The future of our nation depends on digital leaders like you! 🇳🇬🚀💪
            </p>
          </div>

          <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg text-center">
            <h4 class="font-bold text-gray-900 mb-3">🌟 Thank You for Joining This Digital Journey!</h4>
            <p class="text-gray-800 leading-relaxed">
              From ARPANET to 5G, from dial-up to fiber optics, from isolated computers to global connectivity - the internet's story is one of human ingenuity and endless possibility. As you continue your studies and careers, remember: you are the architects of Nigeria's digital future. Stay curious, keep learning, and use technology to make our world better. You've got this! 🎓✨
            </p>
          </div>
        </div>
      `
    }
  ]
};
