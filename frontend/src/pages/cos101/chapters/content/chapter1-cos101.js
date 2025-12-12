// Chapter 1: Basic Computing Concepts
// COS 101 - Module 1

export const chapter1Content = {
  title: "Basic Computing Concepts",
  author: "Department of Computer Science",
  department: "Faculty of Natural Sciences, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "introduction",
      title: "🖥️ Introduction to Computing",
      subtitle: "Understanding the Computer as an IPO System",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            A computer can be described as an electronic device that accepts data as input, processes the data based on a set of predefined instructions called program to produce the result of these operations as output called information.
          </p>

          <p class="text-lg leading-relaxed">
            From this description, a computer can be referred to as an Input-Process-Output (IPO) system, pictorially represented in the Figure 1:
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="text-blue-800 font-semibold text-center">
              Figure 1.1: IPO Representation of a computer System
            </p>
            <div class="text-center mt-4">
              <div class="inline-block bg-white border-2 border-blue-300 rounded-lg p-4">
                <div class="text-blue-800 font-bold">INPUT</div>
                <div class="text-blue-600">→</div>
                <div class="text-blue-800 font-bold">PROCESS</div>
                <div class="text-blue-600">→</div>
                <div class="text-blue-800 font-bold">OUTPUT</div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Welcome to the exciting world of computing, my dear 100level student! 😊 Imagine a computer as your favorite "Mama Put" food vendor in Unilorin - you give her money (input), she processes your order by cooking (processing), and gives you delicious food (output). That's exactly what a computer does! 🇳🇬🍲
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why should Nigerian students care about IPO?</p>
            <p class="text-blue-800">
              See, computers are everywhere in Nigeria now - from banking apps to school portals to even ordering food on Jumia! Understanding IPO helps you see how all these systems work behind the scenes. No more wondering "How did my result appear on the portal?" You go sabi am! 💡
            </p>
          </div>

          <div class="bg-linear-to-r from-green-100 to-blue-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🏪 The IPO Supermarket Analogy</h4>
            <p class="text-center text-gray-700">Just like shopping in a Nigerian market!</p>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-green-50 p-4 rounded-lg text-center">
              <div class="text-4xl mb-2">🛒</div>
              <h4 class="font-bold text-green-900 mb-2">INPUT</h4>
              <p class="text-green-800 text-sm">
                Like when you give the seller your list and money. Examples: typing on keyboard, clicking mouse, inserting flash drive.
              </p>
              <div class="mt-3 p-2 bg-white rounded border">
                <strong>Nigerian Example:</strong> "Mama, give me 5 cups of rice and N500"
              </div>
            </div>

            <div class="bg-yellow-50 p-4 rounded-lg text-center">
              <div class="text-4xl mb-2">👩‍🍳</div>
              <h4 class="font-bold text-yellow-900 mb-2">PROCESS</h4>
              <p class="text-yellow-800 text-sm">
                The seller counts your money, weighs the rice, calculates change. The computer thinks and calculates!
              </p>
              <div class="mt-3 p-2 bg-white rounded border">
                <strong>Computer does:</strong> Calculations, decisions, data manipulation
              </div>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg text-center">
              <div class="text-4xl mb-2">🍽️</div>
              <h4 class="font-bold text-purple-900 mb-2">OUTPUT</h4>
              <p class="text-purple-800 text-sm">
                You get your rice, change, and receipt. Computer shows results on screen, prints, or saves files.
              </p>
              <div class="mt-3 p-2 bg-white rounded border">
                <strong>Results:</strong> Screen display, printed documents, saved files
              </div>
            </div>
          </div>

          <p class="text-lg leading-relaxed">
            Na wah o! This IPO concept is the foundation of everything computers do. Whether you're checking your CGPA on the university portal, transferring money on mobile banking, or even playing games - it's all IPO in action! 🎮💰📚
          </p>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Why This Matters for Nigerian Students</p>
            <p class="text-yellow-800">
              In Nigeria, we use computers for admission checking, online registration, e-learning, and even job applications. Understanding IPO helps you troubleshoot when things go wrong. "Why no result show?" - now you know to check the input, processing, or output! 🔧✨
            </p>
          </div>
        </div>
      `
    },
    {
      id: "data-information",
      title: "📊 Data and Information",
      subtitle: "Understanding the Foundation of Computing",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Data are raw facts, such as a score in examination or the name of a student, for example 55 or Malik respectively. There are three types of data – Numeric, alphabetic, and alphanumeric.
          </p>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3 text-xl">🔢 Numeric Data</h4>
              <p class="text-green-800">
                Consists of digits 0 – 9 (such as 31)
              </p>
              <div class="mt-3 p-3 bg-white rounded border">
                <strong>Example:</strong> 85, 100, 3.14
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3 text-xl">🔤 Alphabetic Data</h4>
              <p class="text-blue-800">
                Consists of any of the English language alphabets in upper and lower cases
              </p>
              <div class="mt-3 p-3 bg-white rounded border">
                <strong>Example:</strong> Toyin, ABC, hello
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3 text-xl">🔗 Alphanumeric Data</h4>
              <p class="text-purple-800">
                Can consist of a number, an alphabet or a special character
              </p>
              <div class="mt-3 p-3 bg-white rounded border">
                <strong>Example:</strong> AE 731 LRN, P@ssw0rd
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg">
            <h4 class="font-bold text-yellow-900 mb-4">📈 Information: Transforming Data into Meaning</h4>
            <p class="text-yellow-800 leading-relaxed">
              Information is data that has been transformed into a more meaningful and useful form. When raw data is processed through various operations, it becomes information that can be used for decision making.
            </p>
            <div class="mt-4 bg-white p-4 rounded border-l-4 border-yellow-500">
              <p class="text-yellow-800">
                <strong>The transformation process involves a series of operations</strong> to be performed by the computer on the raw data that are fed into the system. The operation can be arithmetic (such as addition, subtraction, multiplication, and division), logical comparison or character manipulation (as in text processing).
              </p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 7,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Hey there, future tech genius! 👋 Today we're talking about data and information - the building blocks of everything computers do. Imagine data as raw ingredients in your mama's kitchen, and information as the finished jollof rice that's ready to eat! 🇳🇬🍚
          </p>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🤔 Why Data vs Information Matters for Nigerian Students</p>
            <p class="text-red-800">
              In Nigeria, we deal with data all the time - your JAMB score (55), your name (Adebayo), your account number (1234567890). But raw data alone doesn't help. Information is when that data is processed to tell a story. Like how your CGPA tells you if you're on track for that First Class! 📊
            </p>
          </div>

          <div class="bg-linear-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🏪 Nigerian Market Data Analogy</h4>
            <p class="text-center text-gray-700">Understanding data types like shopping in a Nigerian market!</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🔢</span>
                <h4 class="font-bold text-green-900 text-xl">Numeric Data</h4>
              </div>
              <p class="text-green-800 mb-3">
                Just like counting money or measuring garri! Numbers only - no letters allowed.
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-green-500">
                <strong>Nigerian Examples:</strong>
                <ul class="text-green-700 mt-2 space-y-1">
                  <li>• Your JAMB score: 285</li>
                  <li>• Amount in your account: N50,000</li>
                  <li>• Number of courses: 18</li>
                  <li>• Your CGPA: 4.50</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🔤</span>
                <h4 class="font-bold text-blue-900 text-xl">Alphabetic Data</h4>
              </div>
              <p class="text-blue-800 mb-3">
                Letters only! Like writing your name in English or recording someone's name.
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-blue-500">
                <strong>Nigerian Examples:</strong>
                <ul class="text-blue-700 mt-2 space-y-1">
                  <li>• Your name: Oluwaseun</li>
                  <li>• Course name: GST111</li>
                  <li>• Department: Computer Science</li>
                  <li>• State: Lagos</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">🔗</span>
                <h4 class="font-bold text-purple-900 text-xl">Alphanumeric Data</h4>
              </div>
              <p class="text-purple-800 mb-3">
                The VIP of data types! Numbers AND letters together - like your email or phone number.
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-purple-500">
                <strong>Nigerian Examples:</strong>
                <ul class="text-purple-700 mt-2 space-y-1">
                  <li>• Email: adebayo@unilorin.edu.ng</li>
                  <li>• Phone: +2348031234567</li>
                  <li>• Matric number: 18/52HA007</li>
                  <li>• Password: P@ssw0rd2024</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">📈</span>
              From Raw Data to Useful Information
            </h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Raw data is like scattered palm kernels. Information is when you process it - count them, sort them, analyze them - to make decisions! Like how JAMB processes your raw scores to give you admission status.
            </p>
            <div class="bg-white p-4 rounded-lg border">
              <h5 class="font-semibold text-yellow-900 mb-2">Real Nigerian Examples:</h5>
              <ul class="text-yellow-800 space-y-2">
                <li><strong>Data:</strong> Your scores in 5 subjects (85, 78, 92, 88, 90)</li>
                <li><strong>Processing:</strong> Calculate average, compare to cut-off marks</li>
                <li><strong>Information:</strong> "Your average is 86.6% - you qualify for Medicine!"</li>
              </ul>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🎯 Why This Matters in Nigeria</p>
            <p class="text-indigo-800">
              Understanding data types helps you avoid errors. Ever wondered why your bank app rejects your account number? Or why your name appears wrong in the portal? It's all about using the right data type! Plus, in our digital Nigeria, knowing how to work with data opens doors to jobs in banking, telecom, and government. 🚀💼
            </p>
          </div>
        </div>
      `
    },
    {
      id: "logical-operations",
      title: "🧠 Logical Operations",
      subtitle: "How Computers Make Decisions",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Logical comparison means testing whether one data item is greater than, equal to, or less than another item, and based on the outcome of the comparison, a specified action can be taken.
          </p>

          <div class="bg-indigo-50 p-6 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-4">Comparison Operators</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border">
                  <strong>&gt;</strong> - Greater than
                </div>
                <div class="bg-white p-3 rounded border">
                  <strong>&lt;</strong> - Less than
                </div>
                <div class="bg-white p-3 rounded border">
                  <strong>≥</strong> - Greater than or equal to
                </div>
              </div>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border">
                  <strong>=</strong> - Equal to
                </div>
                <div class="bg-white p-3 rounded border">
                  <strong>≠</strong> - Not equal to
                </div>
                <div class="bg-white p-3 rounded border">
                  <strong>≤</strong> - Less than or equal to
                </div>
              </div>
            </div>
          </div>

          <div class="bg-teal-50 p-6 rounded-lg">
            <h4 class="font-bold text-teal-900 mb-4">📋 Output Formats</h4>
            <p class="text-teal-800 leading-relaxed">
              The output of the processing can be in form of reports which can be displayed or printed. This information becomes valuable for decision making, analysis, and further processing.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 6,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Now we're entering the brain of the computer - logical operations! 🧠 This is where computers start thinking like humans. Imagine you're bargaining in Tejuosho market - you compare prices, check if something is "greater than" your budget, or "equal to" what you want to pay. That's logical operations in action! 🇳🇬🛒
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Logical Operations Matter for Nigerian Students</p>
            <p class="text-blue-800">
              Every decision a computer makes uses these operations! From checking if your CGPA is above 4.0 for First Class, to verifying if your JAMB score qualifies for admission, to even deciding if you pass or fail a course. Logical operations are the decision-makers behind all computer programs! 📋✅
            </p>
          </div>

          <div class="bg-linear-to-r from-teal-100 to-cyan-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">⚖️ Market Bargaining: Logical Operations in Action</h4>
            <p class="text-center text-gray-700">Just like haggling prices in a Nigerian market!</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h5 class="font-bold text-green-900 mb-2 flex items-center">
                  <span class="text-xl mr-2">📈</span>
                  Comparison Operators
                </h5>
                <div class="space-y-2">
                  <div class="bg-white p-2 rounded border">
                    <strong>&gt; Greater than:</strong> "Is my offer > seller's price?"
                  </div>
                  <div class="bg-white p-2 rounded border">
                    <strong>&lt; Less than:</strong> "Is this phone &lt; N50,000?"
                  </div>
                  <div class="bg-white p-2 rounded border">
                    <strong>≥ Greater than or equal:</strong> "CGPA ≥ 4.0 for First Class?"
                  </div>
                  <div class="bg-white p-2 rounded border">
                    <strong>≤ Less than or equal:</strong> "Age ≤ 25 for NYSC?"
                  </div>
                </div>
              </div>

              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h5 class="font-bold text-yellow-900 mb-2 flex items-center">
                  <span class="text-xl mr-2">🎯</span>
                  Equality Operators
                </h5>
                <div class="space-y-2">
                  <div class="bg-white p-2 rounded border">
                    <strong>= Equal to:</strong> "Is my matric number = 18/52HA007?"
                  </div>
                  <div class="bg-white p-2 rounded border">
                    <strong>≠ Not equal to:</strong> "Password ≠ '123456'?"
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg">
              <h5 class="font-bold text-purple-900 mb-4 flex items-center">
                <span class="text-2xl mr-2">🇳🇬</span>
                Nigerian Real-Life Examples
              </h5>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border">
                  <strong>School Portal:</strong><br/>
                  "If your CGPA > 3.5, then you qualify for honors"
                </div>
                <div class="bg-white p-3 rounded border">
                  <strong>Banking App:</strong><br/>
                  "If balance ≥ withdrawal amount, then allow transaction"
                </div>
                <div class="bg-white p-3 rounded border">
                  <strong>JAMB System:</strong><br/>
                  "If score ≥ cut-off mark, then grant admission"
                </div>
                <div class="bg-white p-3 rounded border">
                  <strong>Course Registration:</strong><br/>
                  "If prerequisites = completed, then allow registration"
                </div>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-4">🧠 How Computers Make Decisions</h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              Logical operations are like asking questions that only have YES or NO answers. Based on the answer, the computer takes different actions. It's the foundation of all "if-then" logic in programming!
            </p>
            <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
              <h5 class="font-semibold text-indigo-900 mb-2">Decision Making Flow:</h5>
              <ol class="text-indigo-800 space-y-1">
                <li>1. Compare two values using logical operators</li>
                <li>2. Get TRUE or FALSE result</li>
                <li>3. Execute different actions based on the result</li>
                <li>4. Produce appropriate output (reports, messages, etc.)</li>
              </ol>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🎯 Why Nigerian Students Should Master This</p>
            <p class="text-red-800">
              Understanding logical operations helps you debug problems! Why did the portal reject your registration? Why won't the ATM dispense cash? Why did you get a C instead of B? These are all logical decisions made by computers. Once you understand the logic, you can troubleshoot like a pro! 🔧✨
            </p>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🚀 Future Applications</p>
            <p class="text-green-800">
              This knowledge is crucial for programming! Whether you want to build apps, websites, or work in data analysis, logical operations are your foundation. Many Nigerian tech companies (Flutterwave, Interswitch, etc.) need people who understand how computers think and make decisions! 💼🌟
            </p>
          </div>
        </div>
      `
    },
    {
      id: "history-computing",
      title: "📚 The History of Computer",
      subtitle: "From Ancient Tools to Modern Machines",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            The historical development of computing focuses on the digital computer from the Abacus to the modern electronic computer. Some of these people whose contributions have been widely acknowledged to the development of Computer will be discussed.
          </p>

          <div class="space-y-6">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-bold text-blue-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">🧮</span>
                Abacus
              </h4>
              <p class="text-blue-800 leading-relaxed">
                The abacus was invented to replace the old methods of counting. It is an instrument known to have been used for counting as far back as 500 B.C. in Europe, China, Japan and India and it is still being used in some parts of China today.
              </p>
              <p class="text-blue-800 leading-relaxed mt-3">
                The abacus qualifies as a digital instrument because it uses beads as counter to calculate in discrete form. It is made of a board that consists of beads that slide on wires. The abacus is divided by a wooden bar or rod into two zones.
              </p>
              <div class="bg-white p-4 rounded mt-4">
                <p class="text-blue-800 text-sm">
                  <strong>Structure:</strong> Each zone is divided into two levels - upper and lower. Two beads are arranged on each wire in the upper zone, while five beads are arranged on each wire in the lower zone.
                </p>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-bold text-green-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">⚙️</span>
                Blaise Pascal (1623-1662)
              </h4>
              <p class="text-green-800 leading-relaxed">
                Blaise Pascal was born at Clermont, France in 1623 and died in Paris in 1662. Pascal was a Scientist as well as a Philosopher. He started to build his mechanical machine in 1640 to aid his father in calculating taxes.
              </p>
              <p class="text-green-800 leading-relaxed mt-3">
                He completed the first model of his machine in 1642 and it was presented to the public in 1645. The machine, called Pascal machine or Pascaline, was a small box with eight dials that resembled the analog telephone dials. Each dial is linked to rotating wheel that displayed the digits in a register window.
              </p>
              <div class="bg-white p-4 rounded mt-4">
                <p class="text-green-800 text-sm">
                  <strong>Innovation:</strong> Pascal's main innovative idea was the linkage provided for the wheels such that an arrangement was made for a carry from one wheel to its left neighbour when the wheel passed from a display of 9 to 0. The machine could add and subtract directly.
                </p>
              </div>
            </div>

            <div class="bg-yellow-50 p-6 rounded-lg">
              <h4 class="font-bold text-yellow-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">🧵</span>
                Joseph Marie Jacquard (1801)
              </h4>
              <p class="text-yellow-800 leading-relaxed">
                In 1801 the Frenchman Joseph Marie Jacquard invented a power loom that could base its weave (and hence the design on the fabric) upon a pattern automatically read from punched wooden cards, held together in a long row by rope. Descendents of these punched cards have been in use ever since.
              </p>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">🧠</span>
                Charles Babbage (1792-1871)
              </h4>
              <p class="text-purple-800 leading-relaxed">
                Charles Babbage was born in Totnes, Devonshire on December 26, 1792 and died in London on October 18, 1871. He was educated at Cambridge University where he studied Mathematics. In 1828, he was appointed Lucasian Professor at Cambridge.
              </p>
              <p class="text-purple-800 leading-relaxed mt-3">
                Charles Babbage started work on his analytic engine when he was a student. His objective was to build a program-controlled, mechanical, digital computer incorporating a complete arithmetic unit, store, punched card input and a printing mechanism. The program was to be provided by the set of Jacquard cards.
              </p>
              <div class="bg-white p-4 rounded mt-4">
                <p class="text-purple-800 text-sm">
                  <strong>Challenge:</strong> However, Babbage was unable to complete the implementation of his machine because the technology available at his time was not adequate to see him through. Moreover, he did not plan to use electricity in his design.
                </p>
              </div>
            </div>

            <div class="bg-pink-50 p-6 rounded-lg">
              <h4 class="font-bold text-pink-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">👩‍💻</span>
                Augusta Ada Byron (1815-1852)
              </h4>
              <p class="text-pink-800 leading-relaxed">
                Ada Byron was the daughter of the famous poet Lord Byron and a friend of Charles Babbage, (Ada later become the Countess Lady Lovelace by marriage). Though she was only 19, she was fascinated by Babbage's ideas and through letters and meetings with Babbage she learned enough about the design of the Analytic Engine to begin fashioning programs for the still unbuilt machine.
              </p>
              <p class="text-pink-800 leading-relaxed mt-3">
                While Babbage refused to publish his knowledge for another 30 years, Ada wrote a series of "Notes" wherein she detailed sequences of instructions she had prepared for the Analytic Engine. The Analytic Engine remained unbuilt but Ada earned her spot in history as the first computer programmer.
              </p>
              <div class="bg-white p-4 rounded mt-4">
                <p class="text-pink-800 text-sm">
                  <strong>Achievements:</strong> Ada invented the subroutine and was the first to recognize the importance of looping.
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 12,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Welcome to the fascinating journey through computer history! 📚 This is like tracing the roots of your family tree, but instead of great-grandparents, we're looking at the brilliant minds who built the computers we use today. From ancient counting tools to modern smartphones - it's an amazing story of human ingenuity! 🧠✨
          </p>

          <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p class="font-semibold text-purple-900 mb-2">🤔 Why Study Computer History as Nigerian Students?</p>
            <p class="text-purple-800">
              Na wah o! Computing didn't start in Silicon Valley - it started with people solving real problems, just like Nigerians do! Understanding this history helps you appreciate how far we've come and inspires you to create the next big thing. Plus, many of these pioneers faced challenges similar to what we face in Nigeria today! 🇳🇬🚀
            </p>
          </div>

          <div class="bg-linear-to-r from-amber-100 to-orange-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🌍 The Evolution Journey: From Rocks to Rockets</h4>
            <p class="text-center text-gray-700">A timeline of innovation that changed the world!</p>
          </div>

          <div class="space-y-6">
            <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🧮</span>
                <h4 class="font-bold text-blue-900 text-xl">Ancient Beginnings: The Abacus (500 BC)</h4>
              </div>
              <p class="text-blue-800 leading-relaxed mb-3">
                Imagine using beads on wires to calculate - that's the abacus! This Chinese invention is still used in some parts of China today. It's like using your fingers to count, but more advanced.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-blue-800">
                  <strong>Nigerian Connection:</strong> Just like how our grandparents used stones or cowries to count money before calculators came to Nigeria! The abacus was the first "digital" computer - using discrete (separate) beads instead of continuous methods. 🏮
                </p>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">⚙️</span>
                <h4 class="font-bold text-green-900 text-xl">Pascal's Calculator (1642)</h4>
              </div>
              <p class="text-green-800 leading-relaxed mb-3">
                Blaise Pascal, a French mathematician, built the first mechanical calculator to help his father with tax calculations. It could add and subtract using rotating wheels!
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-green-800">
                  <strong>Revolutionary Feature:</strong> The automatic carry mechanism - when a wheel reached 9, it would automatically add 1 to the next wheel. This is like how our electronic calculators work today! 🔄
                </p>
              </div>
            </div>

            <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🧵</span>
                <h4 class="font-bold text-yellow-900 text-xl">Jacquard's Loom (1801)</h4>
              </div>
              <p class="text-yellow-800 leading-relaxed mb-3">
                Joseph Jacquard invented a weaving loom that used punched cards to create complex patterns. This was the first use of "programmable" instructions in a machine!
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-yellow-800">
                  <strong>Tech Innovation:</strong> Punched cards became the foundation for computer programming. Just like how we use memory cards or USB drives to store instructions today! 💾
                </p>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🧠</span>
                <h4 class="font-bold text-red-900 text-xl">Charles Babbage: The Father of Computing (1792-1871)</h4>
              </div>
              <p class="text-red-800 leading-relaxed mb-3">
                Babbage designed the "Analytical Engine" - the first programmable computer! He worked on it for 40 years but couldn't complete it due to technological limitations of his time.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-red-800">
                  <strong>Visionary Ideas:</strong> Stored programs, memory, input/output devices - all concepts we use today! Babbage was ahead of his time, just like Nigerian innovators who dream big despite limited resources! 🚀
                </p>
              </div>
            </div>

            <div class="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">👩‍💻</span>
                <h4 class="font-bold text-pink-900 text-xl">Ada Lovelace: The First Programmer (1815-1852)</h4>
              </div>
              <p class="text-pink-800 leading-relaxed mb-3">
                Ada Byron, daughter of the poet Lord Byron, worked with Babbage and wrote the first computer program! She recognized that computers could do more than just calculations - they could create music, art, and process information.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-pink-800">
                  <strong>Groundbreaking:</strong> Ada invented subroutines and loops - fundamental programming concepts! She was the first to see computers as creative tools, not just calculators. Women in tech forever! 💪👩‍💻
                </p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🌟</span>
              Lessons for Nigerian Students
            </h4>
            <ul class="text-indigo-800 space-y-2">
              <li><strong>Start Small:</strong> Like the abacus evolved into supercomputers, your journey starts with basics but can lead anywhere!</li>
              <li><strong>Think Big:</strong> Babbage dreamed of machines that didn't exist - don't limit your vision by current technology constraints.</li>
              <li><strong>Women Belong Here:</strong> Ada Lovelace shows that programming is for everyone, regardless of gender.</li>
              <li><strong>Learn from History:</strong> Every innovation builds on previous work - study the past to create the future.</li>
            </ul>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🎯 Why This History Matters Today</p>
            <p class="text-green-800">
              Understanding computer history helps you appreciate modern technology and inspires innovation. In Nigeria, we're building the next chapter of this story! From local tech hubs to global companies like Flutterwave - we're proving that African innovators can shape the future of computing! 🇳🇬🔥
            </p>
          </div>
        </div>
      `
    },
    {
      id: "modern-pioneers",
      title: "🚀 Modern Computing Pioneers",
      subtitle: "20th Century Innovations in Computing",
      content: `
        <div class="space-y-6">
          <div class="space-y-6">
            <div class="bg-indigo-50 p-6 rounded-lg">
              <h4 class="font-bold text-indigo-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">📊</span>
                Herman Hollerith (1860-1929)
              </h4>
              <p class="text-indigo-800 leading-relaxed">
                Hollerith was born at Buffalo, New York in 1860 and died at Washington in 1929. Hollerith founded a company which merged with two other companies to form the Computing Tabulating Recording Company which in 1924 changed its name to International Business Machine (IBM) Corporation, a leading company in the manufacturing and sales of computer today.
              </p>
              <p class="text-indigo-800 leading-relaxed mt-3">
                Hollerith, while working at the Census Department in the United States of America became convinced that a machine based on cards can assist in the purely mechanical work of tabulating population and similar statistics was feasible. He left the Census in 1882 to start work on the Punch Card Machine which is also called Hollerith desks.
              </p>
              <div class="bg-white p-4 rounded mt-4">
                <p class="text-indigo-800 text-sm">
                  <strong>Impact:</strong> His system was installed in 1889 in the United States Army to handle Army Medical statistics. He was asked to install his machine to process the 1890 Census in USA. This he did and in two years, the processing of the census data was completed which used to take ten years.
                </p>
              </div>
            </div>

            <div class="bg-teal-50 p-6 rounded-lg">
              <h4 class="font-bold text-teal-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">🧮</span>
                John Von Neumann (1903-1957)
              </h4>
              <p class="text-teal-800 leading-relaxed">
                Von Neumann was born on December 28, 1903 in Budapest, Hungary and died in Washington D. C. on February 8, 1957. He was a great mathematician with significant contribution to the theory of games and strategy, set theory and the design of high speed computing machines.
              </p>
              <p class="text-teal-800 leading-relaxed mt-3">
                In 1933, he was appointed one of the first six professors of the school of mathematics in the institute for Advanced Study at the Princeton University, USA, a position he retained until his death. Neumann with some other people presented a paper titled "The Preliminary discussion of the Logical Design of an Electronic Computing Instrument" popularly known as Von Neumann machine.
              </p>
              <div class="bg-white p-4 rounded mt-4">
                <p class="text-teal-800 text-sm">
                  <strong>Key Innovation:</strong> The machine had Storage, Control, Arithmetic and input/output units. The machine was to be a general-purpose computing machine. It was to be an electronic machine and introduced the concept of stored program.
                </p>
              </div>
            </div>

            <div class="bg-orange-50 p-6 rounded-lg">
              <h4 class="font-bold text-orange-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">🔬</span>
                J. V. Atanasoff (1903-1995)
              </h4>
              <p class="text-orange-800 leading-relaxed">
                One of the earliest attempts to build an all-electronic digital computer occurred in 1937 by J. V. Atanasoff, a professor of physics and mathematics at Iowa State University. By 1941 he and his graduate student, Clifford Berry, had succeeded in building a machine that could solve 29 simultaneous equations with 29 unknowns.
              </p>
              <div class="bg-white p-4 rounded mt-4">
                <p class="text-orange-800 text-sm">
                  <strong>Firsts:</strong> This machine was the first to store data as a charge on a capacitor, which is how today computers stored information is in their main memory. It was also the first to employ binary arithmetic. However, the machine was not programmable, it lacked a conditional branch, its design was appropriate for only one type of mathematical problem, and it was not further pursued after World War II.
                </p>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg">
              <h4 class="font-bold text-red-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">⚡</span>
                Howard Aiken (1900-1973)
              </h4>
              <p class="text-red-800 leading-relaxed">
                Howard Aiken of Harvard was the principal designer of the Mark I. The Harvard Mark I computer was built as a partnership between Harvard and IBM in 1944. This was the first programmable digital computer made in the U.S. But it was not a purely electronic computer.
              </p>
              <p class="text-red-800 leading-relaxed mt-3">
                Instead the Mark I was constructed out of switches, relays, rotating shafts, and clutches. The machine weighed 5 tons, incorporated 500 miles of wire, was 8 feet tall and 51 feet long, and had a 50ft rotating shaft running its length, turned by a 5 horsepower electric motor. The Mark I ran non-stop for 15 years.
              </p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 10,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Now we're entering the 20th century - the era when computers became electronic and started resembling the machines we know today! ⚡ This period saw the birth of IBM, the concept of stored programs, and the first electronic computers. These innovations laid the foundation for the digital revolution we're living in! 🚀
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why These Pioneers Matter for Nigerian Tech Students</p>
            <p class="text-blue-800">
              See, these innovators solved real-world problems, just like Nigerian techpreneurs do today! From census data processing to scientific calculations, their work shows how computers can transform society. Understanding their breakthroughs helps you appreciate why computers work the way they do and inspires you to solve Nigeria's challenges with technology! 🇳🇬💡
            </p>
          </div>

          <div class="bg-linear-to-r from-cyan-100 to-blue-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">⚡ The Electronic Revolution: From Mechanical to Digital</h4>
            <p class="text-center text-gray-700">Building the foundation of modern computing!</p>
          </div>

          <div class="space-y-6">
            <div class="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">📊</span>
                <h4 class="font-bold text-indigo-900 text-xl">Herman Hollerith & The Birth of IBM (1860-1929)</h4>
              </div>
              <p class="text-indigo-800 leading-relaxed mb-3">
                Hollerith invented punch card machines to process US census data. His company merged to form IBM - the tech giant we know today! He reduced census processing from 10 years to just 2 years.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-indigo-800">
                  <strong>Nigerian Parallel:</strong> Just like how Nigerian tech companies use data processing to improve government services today! Hollerith proved that machines could handle massive amounts of data efficiently. 📈
                </p>
              </div>
            </div>

            <div class="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🧮</span>
                <h4 class="font-bold text-teal-900 text-xl">John Von Neumann: The Stored Program Concept (1903-1957)</h4>
              </div>
              <p class="text-teal-800 leading-relaxed mb-3">
                Von Neumann proposed that computer programs should be stored in the computer's memory, just like data. This "Von Neumann architecture" is still used in computers today!
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-teal-800">
                  <strong>Key Innovation:</strong> Before this, programs were hardwired. Now computers could run different programs without hardware changes - this is why your laptop can run games, browse the web, and do schoolwork! 🎮💻
                </p>
              </div>
            </div>

            <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🔬</span>
                <h4 class="font-bold text-orange-900 text-xl">J.V. Atanasoff: The First Electronic Computer (1903-1995)</h4>
              </div>
              <p class="text-orange-800 leading-relaxed mb-3">
                Atanasoff and his student Clifford Berry built the first electronic digital computer in 1941. It used binary arithmetic and stored data as electric charges on capacitors.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-orange-800">
                  <strong>Pioneering Features:</strong> Binary system, electronic storage, parallel processing - concepts that power modern computers! His work proved electronic computers were feasible. ⚡
                </p>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">⚡</span>
                <h4 class="font-bold text-red-900 text-xl">Howard Aiken: The Harvard Mark I (1900-1973)</h4>
              </div>
              <p class="text-red-800 leading-relaxed mb-3">
                Aiken built the Harvard Mark I - the first programmable digital computer in the US. This massive machine (51 feet long!) used electromechanical relays and ran for 15 years.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-red-800">
                  <strong>Engineering Marvel:</strong> 500 miles of wire, 5 horsepower motor, could perform complex calculations automatically. This showed that large-scale automatic computing was possible! 🏗️
                </p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🔗</span>
              Connecting the Dots: How These Innovations Built Modern Computing
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">Data Processing Revolution</h5>
                <p class="text-yellow-800 text-sm">
                  Hollerith's punch cards → Modern databases and spreadsheets. Nigerian applications: BVN system, school portals, bank records.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">Programmable Computers</h5>
                <p class="text-yellow-800 text-sm">
                  Von Neumann's stored programs → Apps and software. Why your phone can run different apps without hardware changes.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">Electronic Speed</h5>
                <p class="text-yellow-800 text-sm">
                  Atanasoff's electronic computer → Fast processing. Why computers can handle complex tasks instantly.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">Reliable Automation</h5>
                <p class="text-yellow-800 text-sm">
                  Aiken's Mark I → Dependable computing. Foundation for mission-critical systems like banking and aviation.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🎯 Lessons for Nigerian Computing Students</p>
            <p class="text-green-800">
              These pioneers showed that innovation happens when you solve real problems! In Nigeria today, we're building similar solutions - from fintech apps to educational platforms. Your generation will be the next chapter in this story. Start with local problems, think big, and build solutions that matter! 🇳🇬🚀
            </p>
          </div>
        </div>
      `
    },
    {
      id: "contemporary-pioneers",
      title: "💡 Contemporary Computing Pioneers",
      subtitle: "Late 20th Century to Present Day",
      content: `
        <div class="space-y-6">
          <div class="space-y-6">
            <div class="bg-cyan-50 p-6 rounded-lg">
              <h4 class="font-bold text-cyan-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">🐛</span>
                Grace Hopper (1906-1992)
              </h4>
              <p class="text-cyan-800 leading-relaxed">
                Grace Hopper was one of the primary programmers for the Mark I. Hopper found the first computer "bug": a dead moth that had gotten into the Mark I and whose wings were blocking the reading of the holes in the paper tape. The word "bug" had been used to describe a defect since at least 1889 but Hopper is credited with coining the word "debugging" to describe the work to eliminate program faults.
              </p>
              <p class="text-cyan-800 leading-relaxed mt-3">
                In 1953 Grace Hopper invented the first high-level language, "Flow-matic". This language eventually became COBOL which was the language most affected by the infamous Y2K problem. A high-level language is designed to be more understandable by humans than is the binary language understood by the computing machinery.
              </p>
              <div class="bg-white p-4 rounded mt-4">
                <p class="text-cyan-800 text-sm">
                  <strong>Compiler Innovation:</strong> A high-level language is worthless without a program -- known as a compiler -- to translate it into the binary language of the computer and hence Grace Hopper also constructed the world's first compiler. Grace remained active as a Rear Admiral in the Navy Reserves until she was 79.
                </p>
              </div>
            </div>

            <div class="bg-lime-50 p-6 rounded-lg">
              <h4 class="font-bold text-lime-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">🪟</span>
                Bill Gates (1955-)
              </h4>
              <p class="text-lime-800 leading-relaxed">
                William (Bill) H. Gates was born on October 28, 1955 in Seattle, Washington, USA. Bill Gates decided to drop out of college so he could concentrate all his time writing programs for Intel 8080 categories of Personal Computers (PC).
              </p>
              <p class="text-lime-800 leading-relaxed mt-3">
                This early experience put Bill Gates in the right place at the right time once IBM decided to standardize on the Intel microprocessors for their line of PCs in 1981. Gates founded a company called Microsoft Corporation (together with Paul G. Allen) and released its first operating system called MS-DOS 1.0 in August, 1981 and the last of its group in (MS-DOS 6.22) April, 1994. Bill Gates announced Microsoft Windows on November 10, 1983.
              </p>
            </div>

            <div class="bg-emerald-50 p-6 rounded-lg">
              <h4 class="font-bold text-emerald-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">🌐</span>
                Philip Emeagwali (1954-)
              </h4>
              <p class="text-emerald-800 leading-relaxed">
                Philip Emeagwali was born in 1954, in the Eastern part of Nigeria. He had to leave school because his parents couldn't pay the fees and he lived in a refugee camp during the civil war. He won a scholarship to university. He later migrated to the United States of America.
              </p>
              <p class="text-emerald-800 leading-relaxed mt-3">
                In 1989, he invented the formula that used 65,000 separate computer processors to perform 3.1 billion calculations per second. Philip Emeagwali, a supercomputer and Internet pioneer is regarded as one of the fathers of the internet because he invented an international network which is similar to, but predates that of the Internet.
              </p>
              <div class="bg-white p-4 rounded mt-4">
                <p class="text-emerald-800 text-sm">
                  <strong>Achievements:</strong> He also discovered mathematical equations that enable the petroleum industry to recover more oil. Emeagwali won the 1989 Gordon Bell Prize, computation's Nobel Prize, for inventing a formula that lets computers perform the fastest computations, a work that led to the reinvention of supercomputers.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-linear-to-r from-blue-100 to-purple-100 p-6 rounded-lg text-center">
            <h4 class="font-bold text-gray-900 mb-3">🏆 Legacy of Computing Pioneers</h4>
            <p class="text-gray-800 leading-relaxed">
              These visionaries laid the foundation for the digital revolution we experience today. Their innovations in hardware, software, and computational thinking continue to shape our world and inspire future generations of computer scientists and engineers.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 15,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Now we're in the modern era - the time of personal computers, software giants, and yes, our very own Nigerian tech superstar! 🏆 These contemporary pioneers built the world we live in today - from the software that runs your laptop to the internet that connects us globally. Their stories show that innovation knows no boundaries! 🌍✨
          </p>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🤔 Why Contemporary Pioneers Matter for Nigerian Students</p>
            <p class="text-green-800">
              These innovators lived in our lifetime! Their work directly affects your daily life - the phone in your pocket, the software you use for assignments, the internet you browse. And guess what? One of them is Nigerian! Their stories prove that with determination and brilliance, you can change the world from anywhere, including Nigeria! 🇳🇬💪
            </p>
          </div>

          <div class="bg-linear-to-r from-emerald-100 to-teal-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🌟 Modern Heroes: From Bugs to Billions</h4>
            <p class="text-center text-gray-700">The innovators who built the digital world we know today!</p>
          </div>

          <div class="space-y-6">
            <div class="bg-cyan-50 p-6 rounded-xl border-l-4 border-cyan-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🐛</span>
                <h4 class="font-bold text-cyan-900 text-xl">Grace Hopper: The Debugging Queen (1906-1992)</h4>
              </div>
              <p class="text-cyan-800 leading-relaxed mb-3">
                Rear Admiral Grace Hopper found the first computer "bug" - an actual moth stuck in the Harvard Mark II computer! She coined the term "debugging" and invented the first compiler, making programming accessible to everyone.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-cyan-800">
                  <strong>Her Legacy:</strong> COBOL programming language, compiler technology, and proving women can excel in tech. She remained active in the Navy until age 79! She's why we call fixing computer problems "debugging" today. 🐛🔧
                </p>
              </div>
            </div>

            <div class="bg-lime-50 p-6 rounded-xl border-l-4 border-lime-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🪟</span>
                <h4 class="font-bold text-lime-900 text-xl">Bill Gates: The Software Visionary (1955-)</h4>
              </div>
              <p class="text-lime-800 leading-relaxed mb-3">
                Bill Gates dropped out of Harvard to pursue his passion for programming. He founded Microsoft with Paul Allen and created MS-DOS and Windows - operating systems that put computers on every desk worldwide.
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-lime-800">
                  <strong>Business Genius:</strong> Gates understood that software was the future. His vision made personal computing accessible and created millions of jobs worldwide. Today he focuses on philanthropy through the Gates Foundation. 💼🌍
                </p>
              </div>
            </div>

            <div class="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">🌐</span>
                <h4 class="font-bold text-emerald-900 text-xl">Philip Emeagwali: Nigeria's Supercomputer Genius (1954-)</h4>
              </div>
              <p class="text-emerald-800 leading-relaxed mb-3">
                Born in Nigeria during the civil war, Philip overcame incredible odds - living in refugee camps, dropping out of school due to poverty, yet winning scholarships to study abroad. In 1989, he invented a formula that made supercomputers 3.1 billion times faster!
              </p>
              <div class="bg-white p-4 rounded-lg border">
                <p class="text-emerald-800">
                  <strong>Gordon Bell Prize:</strong> Computing's Nobel Prize! His work in petroleum recovery and internet technology laid foundations for modern supercomputing. Philip proved that Nigerian brains can conquer the world! 🏆🇳🇬
                </p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🇳🇬</span>
              Philip Emeagwali: A Source of Nigerian Pride
            </h4>
            <div class="space-y-3">
              <p class="text-yellow-800 leading-relaxed">
                Philip's story is incredibly inspiring for Nigerian students! Despite the civil war, poverty, and lack of infrastructure, he became one of the world's greatest computer scientists. His journey shows that:
              </p>
              <ul class="text-yellow-800 space-y-1 ml-4">
                <li>• Education is possible despite obstacles</li>
                <li>• Nigerians can excel globally in tech</li>
                <li>• Innovation can come from anywhere</li>
                <li>• Persistence beats all barriers</li>
              </ul>
              <div class="bg-white p-3 rounded border mt-3">
                <p class="text-yellow-800 text-sm italic">
                  "Philip Emeagwali is not just a scientist - he's proof that Nigerian talent can change the world!" 🌟
                </p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🚀</span>
              Their Impact on Modern Life
            </h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">Grace Hopper</h5>
                <p class="text-indigo-800 text-sm">COBOL powers banking systems worldwide, including Nigerian banks!</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">Bill Gates</h5>
                <p class="text-indigo-800 text-sm">Windows OS runs on billions of devices, making computing accessible.</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-1">Philip Emeagwali</h5>
                <p class="text-indigo-800 text-sm">Supercomputing technology powers weather prediction and oil discovery.</p>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p class="font-semibold text-purple-900 mb-2">🎯 Your Turn to Be the Next Pioneer!</p>
            <p class="text-purple-800">
              These contemporary heroes show that innovation is happening right now! In Nigeria, we're seeing our own tech revolution with companies like Flutterwave, Paystack, and Konga. You could be the next Philip Emeagwali or Grace Hopper. Start with the problems you see around you - from improving education to healthcare to transportation. The next big innovation might come from your Unilorin dorm room! 💡🚀
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🌍 Global Impact, Local Pride</p>
            <p class="text-purple-800">
              These pioneers collectively built the digital foundation we all use today. From debugging code to operating systems to supercomputing, their work touches every aspect of modern life. And with Philip Emeagwali's story, Nigerian students have living proof that we belong at the forefront of technological innovation! 🇳🇬✨
            </p>
          </div>
        </div>
      `
    }
  ]
};
