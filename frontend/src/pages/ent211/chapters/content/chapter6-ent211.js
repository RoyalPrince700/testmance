// Chapter 6: Business Planning
// ENT 211 - Module 6

export const chapter6Content = {
  title: "Business Planning",
  author: "Prof. A. S. Kasum",
  department: "Department of Accounting, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "chapter-intro",
      title: "🚀 Welcome to ENT 211 Chapter 6 - Business Planning",
      subtitle: "Your Complete Guide to Strategic Business Planning",
      content: `
        <div class="space-y-6">
          <div class="bg-linear-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <p class="text-2xl font-bold text-center mb-4">Royal Prince, Master Business Planning! 📊</p>
            <p class="text-center text-gray-700">
              This chapter covers everything about planning for business success.
              You'll learn to create effective business plans that win investors and guide your entrepreneurial journey! 💼✨
            </p>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 CBT Learning Objectives</p>
            <p class="text-yellow-800">
              Royal Prince, this chapter prepares you to:
              <br>• Recognize planning principles and their applications
              <br>• Distinguish between strategic and operational planning
              <br>• Create comprehensive business plans for CBT exams
              <br>• Calculate break-even analysis and cash flow forecasts
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5,
    },
    {
      id: "planning-concept",
      title: "📋 What is Planning?",
      subtitle: "The Foundation of Business Success",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Textbook Definition (As Written)</p>
            <p class="text-blue-800 bg-blue-100 p-3 rounded border-l-4 border-blue-500">
              "Planning refers to the process of deciding what to do and how to do it. Planning occurs at many levels, from day-to-day decisions made by individuals and families, to complex decisions made by businesses and governments."
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Plain Explanation</p>
            <p class="text-green-800">
              Royal Prince, planning is simply deciding what you want to do and figuring out how to do it.
              It happens everywhere - from planning your daily schedule to planning how a big company will operate.
            </p>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Student Example</p>
            <p class="text-purple-800">
              Royal Prince, think about how you plan for exams. You decide which subjects to study first (what to do)
              and create a timetable showing when to study each subject (how to do it). That's planning!
            </p>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-500 p-4">
            <p class="font-semibold text-orange-900 mb-2">🧠 Memory Hook</p>
            <p class="text-orange-800">
              "Planning = What + How!" Remember: Planning answers two questions - What do I want? How will I get it?
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Understanding Planning</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Why Planning Matters in Business</h4>
            <p class="text-gray-800 mb-3">Royal Prince, without planning, businesses fail. Planning helps you anticipate problems, allocate resources wisely, and achieve your goals systematically.</p>

            <h4 class="font-semibold text-purple-900 mb-2">Planning at Different Levels</h4>
            <ul class="text-gray-800 space-y-1">
              <li><strong>Individual Level:</strong> Planning your career, education, daily activities</li>
              <li><strong>Family Level:</strong> Planning household budget, children's education</li>
              <li><strong>Business Level:</strong> Planning operations, marketing, finance</li>
              <li><strong>Government Level:</strong> Planning economic policies, infrastructure</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Poor Planning = Business Failure</h4>
            <p class="text-yellow-800">Royal Prince, most business failures happen because of poor planning. Without a clear plan, you waste resources and miss opportunities.</p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ CBT Traps to Avoid</h4>
            <ul class="text-red-800 space-y-1">
              <li>• Confusing planning with "just thinking"</li>
              <li>• Missing that planning happens at all levels</li>
              <li>• Forgetting planning involves both "what" and "how"</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 Sample CBT Question</h4>
            <p class="text-green-800 font-medium mb-2">Which of the following best describes planning?</p>
            <p class="text-green-800"><strong>A.</strong> Random decision making<br><strong>B.</strong> Deciding what to do and how to do it<br><strong>C.</strong> Following others blindly<br><strong>D.</strong> Avoiding difficult choices</p>
            <p class="text-green-800 text-sm italic mt-2"><strong>Correct Answer: B</strong> - Planning involves systematic decision-making about objectives and methods.</p>
          </div>
        </div>
      `,
      estimatedTime: 8,
    },
    {
      id: "planning-principles",
      title: "📏 Planning Principles",
      subtitle: "Guidelines for Effective Planning",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Core Principles (Litman, 2013)</p>
            <p class="text-blue-800">
              Good planning must be: comprehensive, efficient, inclusive, informative, integrated, logical, and transparent.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Key Principles</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Comprehensive:</strong> Consider all options and impacts</li>
              <li><strong>Efficient:</strong> Don't waste time or money</li>
              <li><strong>Inclusive:</strong> Involve affected people</li>
              <li><strong>Informative:</strong> Results are understood by stakeholders</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Context</p>
            <p class="text-purple-800">
              Royal Prince, in Nigeria, inclusive planning means involving community leaders, family, and employees in business decisions.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Planning Principles</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">The 7 Planning Principles Explained</h4>
            <ul class="text-gray-800 space-y-3">
              <li><strong>Comprehensive:</strong> Royal Prince, consider ALL significant options and their impacts. Don't leave important factors out!</li>
              <li><strong>Efficient:</strong> Use resources wisely. Planning shouldn't cost more than it's worth.</li>
              <li><strong>Inclusive:</strong> Involve everyone affected. In Nigerian businesses, this means consulting family and community.</li>
              <li><strong>Informative:</strong> Make sure stakeholders understand the results and reasoning.</li>
              <li><strong>Integrated:</strong> Short-term decisions should support long-term goals.</li>
              <li><strong>Logical:</strong> Each planning step should naturally lead to the next.</li>
              <li><strong>Transparent:</strong> Everyone understands how the process works.</li>
            </ul>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ CBT Traps</h4>
            <ul class="text-red-800 space-y-1">
              <li>• Options missing one of the seven principles</li>
              <li>• Wrong attribution (not crediting Litman, 2013)</li>
              <li>• Confusing principles with steps</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Question Pattern</h4>
            <p class="text-green-800 font-medium mb-2">According to Litman (2013), which is NOT a planning principle?</p>
            <p class="text-green-800"><strong>A.</strong> Comprehensive<br><strong>B.</strong> Efficient<br><strong>C.</strong> Expensive<br><strong>D.</strong> Inclusive</p>
            <p class="text-green-800 text-sm italic mt-2"><strong>Correct Answer: C</strong> - "Expensive" contradicts the "efficient" principle!</p>
          </div>
        </div>
      `,
      estimatedTime: 10,
    },
    {
      id: "importance-planning",
      title: "🎯 Why Planning Matters",
      subtitle: "Benefits of Effective Business Planning",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Shapiro (2001) - 6 Key Benefits</p>
            <p class="text-blue-800">
              Planning provides clear understanding of goals, guides prioritization, optimizes resources, keeps you informed about your context, communicates intentions, and provides coherent implementation guidance.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Core Benefits</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Clear Goals:</strong> Know exactly what you need to achieve</li>
              <li><strong>Better Decisions:</strong> Guides prioritization and resource allocation</li>
              <li><strong>Context Awareness:</strong> Stay informed about global, national, local changes</li>
              <li><strong>Communication:</strong> Share intentions with others effectively</li>
            </ul>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <p class="font-semibold text-red-900 mb-2">⚠️ Without Planning</p>
            <p class="text-red-800">
              Royal Prince, poor planning is a leading cause of business failure. Don't skip this crucial step!
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Importance of Planning</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Shapiro's Six Benefits Explained</h4>
            <ol class="text-gray-800 space-y-3">
              <li><strong>Clear Understanding:</strong> Royal Prince, planning shows exactly what you need to do to achieve development goals.</li>
              <li><strong>Decision Guidance:</strong> Helps you prioritize tasks and make choices about resource allocation.</li>
              <li><strong>Resource Focus:</strong> Directs limited resources to actions that benefit your business most.</li>
              <li><strong>Context Awareness:</strong> Keeps you informed about global, national, and local changes affecting your business.</li>
              <li><strong>Communication Tool:</strong> Helps you share your intentions and plans with stakeholders, investors, employees.</li>
              <li><strong>Implementation Guide:</strong> Provides a coherent framework for day-to-day operations and execution.</li>
            </ol>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Real Nigerian Impact</h4>
            <p class="text-yellow-800">In Nigeria, proper planning helps businesses survive economic challenges, secure loans, and compete globally.</p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Focus</h4>
            <p class="text-green-800">Always credit Shapiro (2001) for these benefits. Examiners test if you can recall all six points!</p>
          </div>
        </div>
      `,
      estimatedTime: 12,
    },
    {
      id: "types-planning",
      title: "📊 Types of Planning",
      subtitle: "Strategic vs Operational Planning",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Two Main Types (Shapiro, 2001)</p>
            <p class="text-blue-800">
              <strong>Strategic Planning:</strong> The bigger picture, long-term vision<br>
              <strong>Business/Action/Operational Planning:</strong> Implementation details, short-term execution
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Key Difference</p>
            <p class="text-green-800">
              Royal Prince, strategic planning is about WHAT you want to achieve (vision, goals).
              Operational planning is about HOW you'll achieve it (actions, resources, timelines).
            </p>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Business Example</p>
            <p class="text-purple-800">
              Strategic: "Become leading food vendor in Ilorin"<br>
              Operational: "Buy cooler, hire 2 staff, open by 6 AM daily"
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Types of Planning</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Strategic Planning (The Big Picture)</h4>
            <ul class="text-gray-800 space-y-1 mb-4">
              <li>• Focuses on long-term vision and goals</li>
              <li>• Analyzes environment (SWOT, PEST)</li>
              <li>• Sets organizational priorities</li>
              <li>• Develops mission and vision statements</li>
              <li>• Happens every 2-5 years</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Operational Planning (The Details)</h4>
            <ul class="text-gray-800 space-y-1">
              <li>• Focuses on implementation</li>
              <li>• Answers: What? How? Who? When?</li>
              <li>• Allocates specific resources</li>
              <li>• Sets short-term targets</li>
              <li>• Reviewed regularly (monthly/quarterly)</li>
            </ul>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ Common Confusion</h4>
            <p class="text-red-800">Royal Prince, don't confuse strategic with "strategies" or operational with "operations." They're different concepts!</p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Question Pattern</h4>
            <p class="text-green-800 font-medium mb-2">Which planning type focuses on day-to-day implementation?</p>
            <p class="text-green-800"><strong>A.</strong> Strategic Planning<br><strong>B.</strong> Operational Planning<br><strong>C.</strong> Financial Planning<br><strong>D.</strong> Marketing Planning</p>
            <p class="text-green-800 text-sm italic mt-2"><strong>Correct Answer: B</strong> - Operational planning handles implementation details.</p>
          </div>
        </div>
      `,
      estimatedTime: 10,
    },
    {
      id: "strategic-planning-framework",
      title: "🎯 Strategic Planning Framework",
      subtitle: "Building Your Strategic Foundation",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Strategic Framework Components</p>
            <p class="text-blue-800">
              Analyze situation, identify problems, reflect on values, set goals, formulate vision/mission, conduct SWOT/PEST analysis, prioritize actions, review options, structure organization.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Key Activities</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>SWOT Analysis:</strong> Strengths, Weaknesses, Opportunities, Threats</li>
              <li><strong>PEST Analysis:</strong> Political, Economic, Social, Technological factors</li>
              <li><strong>Vision Statement:</strong> Long-term aspirations</li>
              <li><strong>Mission Statement:</strong> Current purpose and approach</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Application</p>
            <p class="text-purple-800">
              Royal Prince, consider economic instability (threat), growing middle class (opportunity), and your unique local knowledge (strength).
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Strategic Framework</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Strategic Planning Process</h4>
            <ol class="text-gray-800 space-y-2">
              <li><strong>Analyze Situation:</strong> Understand current context (political, economic, social)</li>
              <li><strong>Identify Problems:</strong> Find issues your organization can address</li>
              <li><strong>Reflect on Values:</strong> Define organizational principles and parameters</li>
              <li><strong>Set Goals:</strong> Establish clear objectives</li>
              <li><strong>Formulate Vision/Mission:</strong> Create guiding statements</li>
              <li><strong>SWOT Analysis:</strong> Assess internal/external factors</li>
              <li><strong>PEST Analysis:</strong> Examine macro-environment</li>
              <li><strong>Prioritize:</strong> Decide what matters most</li>
              <li><strong>Review Options:</strong> Evaluate strategic alternatives</li>
              <li><strong>Structure Organization:</strong> Align structure with strategy</li>
            </ol>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">SWOT in Nigerian Context</h4>
            <p class="text-yellow-800"><strong>Strengths:</strong> Local market knowledge, family networks<br><strong>Weaknesses:</strong> Limited capital, infrastructure challenges<br><strong>Opportunities:</strong> Growing digital economy, youth market<br><strong>Threats:</strong> Economic instability, competition from abroad</p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Focus</h4>
            <p class="text-green-800">Examiners love testing your ability to apply SWOT and PEST to Nigerian business scenarios!</p>
          </div>
        </div>
      `,
      estimatedTime: 15,
    },
    {
      id: "operational-planning",
      title: "⚙️ Operational Planning",
      subtitle: "Making Strategy Work",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Action Plan Questions</p>
            <p class="text-blue-800">
              <strong>What</strong> needs to be done?<br>
              <strong>How</strong> will it be done?<br>
              <strong>Who</strong> will do it?<br>
              <strong>By when</strong> must it be done?<br>
              <strong>What resources</strong> are needed?
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 The 5W Approach</p>
            <p class="text-green-800">
              Royal Prince, operational planning takes strategic goals and breaks them into specific, actionable steps with clear responsibilities and timelines.
            </p>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Practical Example</p>
            <p class="text-purple-800">
              Strategic Goal: "Expand business to Lagos"<br>
              Operational: "Hire manager by March, rent shop by April, train staff by May"
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Operational Planning</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">The 5 Critical Questions</h4>
            <ul class="text-gray-800 space-y-3">
              <li><strong>What needs to be done?</strong> Specific activities and tasks required</li>
              <li><strong>How will it be done?</strong> Methods, processes, and procedures</li>
              <li><strong>Who will do it?</strong> Assignment of responsibilities and roles</li>
              <li><strong>By when?</strong> Realistic timelines and deadlines</li>
              <li><strong>What resources needed?</strong> Budget, equipment, personnel, materials</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Link to Strategic Planning</h4>
            <p class="text-yellow-800">Royal Prince, operational plans must directly support strategic objectives. They're the "how" to strategy's "what"!</p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ Common Mistakes</h4>
            <ul class="text-red-800 space-y-1">
              <li>• Setting unrealistic timelines</li>
              <li>• Underestimating resource requirements</li>
              <li>• Unclear responsibility assignment</li>
              <li>• Missing monitoring mechanisms</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Application</h4>
            <p class="text-green-800">Questions often test your ability to convert strategic goals into operational steps!</p>
          </div>
        </div>
      `,
      estimatedTime: 12,
    },
    {
      id: "organizational-planning",
      title: "🏢 Planning for Organizations",
      subtitle: "Enterprise-Level Planning Considerations",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Key Considerations</p>
            <p class="text-blue-800">
              Focus on strategic planning for new organizations, conduct regular reviews, involve all departments, integrate plans coherently, allocate resources appropriately.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Critical Points</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>New Organizations:</strong> Prioritize strategic planning phase</li>
              <li><strong>Regular Reviews:</strong> Every 2-5 years strategic planning</li>
              <li><strong>Integration:</strong> Management coordinates all plans</li>
              <li><strong>Flexibility:</strong> Structure can change with work requirements</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Context</p>
            <p class="text-purple-800">
              Royal Prince, Nigerian businesses must adapt to changing economic policies, so regular strategic reviews are essential.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Organizational Planning</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Planning New Organizations</h4>
            <ul class="text-gray-800 space-y-2 mb-4">
              <li>• Extensive initial strategic planning and needs assessment</li>
              <li>• Critical problem analysis before operations begin</li>
              <li>• Build foundation for all future activities</li>
              <li>• Avoid common startup mistakes through thorough planning</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Ongoing Planning Requirements</h4>
            <ul class="text-gray-800 space-y-2">
              <li>• Bi-annual strategic reviews to check relevance</li>
              <li>• 3-5 year strategic planning cycles</li>
              <li>• Base reviews on evaluation data</li>
              <li>• Adapt structure as work requirements change</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Management's Integration Role</h4>
            <p class="text-yellow-800">Royal Prince, management must coordinate departmental plans into a coherent whole and ensure proper resource allocation across all units.</p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Focus</h4>
            <p class="text-green-800">Questions test understanding of planning cycles and when different types of planning should be used!</p>
          </div>
        </div>
      `,
      estimatedTime: 14,
    },
    {
      id: "project-planning",
      title: "📋 Planning for Projects",
      subtitle: "Managing Time-Bound Initiatives",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Project Planning Essentials</p>
            <p class="text-blue-800">
              Define relationship with parent organization, conduct strategic planning, manage time carefully, plan resources, set entry/exit points, ensure integration.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Key Project Considerations</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Integration:</strong> Project must fit organizational vision</li>
              <li><strong>Time Management:</strong> Fixed duration with clear outputs</li>
              <li><strong>Resource Planning:</strong> Specific funding and human resources</li>
              <li><strong>Entry/Exit:</strong> Clear start and end points</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Example</p>
            <p class="text-purple-800">
              Royal Prince, a Unilorin research project must align with university goals while having specific timelines and budgets.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Project Planning</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Project-Organization Relationship</h4>
            <ul class="text-gray-800 space-y-2 mb-4">
              <li>• Must fit with organizational vision, values, and mission</li>
              <li>• Cannot be added randomly - requires strategic alignment</li>
              <li>• Should complement ongoing organizational activities</li>
              <li>• Must demonstrate clear organizational benefit</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Time and Resource Management</h4>
            <ul class="text-gray-800 space-y-2">
              <li>• Careful initial strategic planning despite time constraints</li>
              <li>• Regular strategic reviews (bi-annually) for adjustments</li>
              <li>• Precise time planning to meet fixed deadlines</li>
              <li>• Specific resource requirements and funding strategies</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Avoiding Project Isolation</h4>
            <p class="text-yellow-800">Royal Prince, projects should integrate with organizational work, not become "separate empires." Plan entry/exit to minimize disruption.</p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ Project Planning Traps</h4>
            <ul class="text-red-800 space-y-1">
              <li>• Treating projects as isolated activities</li>
              <li>• Poor integration with parent organization</li>
              <li>• Underestimating resource requirements</li>
              <li>• Ignoring entry/exit implications</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Applications</h4>
            <p class="text-green-800">Questions often test how projects differ from ongoing organizational activities!</p>
          </div>
        </div>
      `,
      estimatedTime: 13,
    },
    {
      id: "business-plan-definition",
      title: "📄 What is a Business Plan?",
      subtitle: "The Blueprint for Business Success",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Official Definition</p>
            <p class="text-blue-800 bg-blue-100 p-3 rounded border-l-4 border-blue-500">
              "A business plan is a document that details the business objective(s) and means of achieving the objective(s). It covers what you intend to do with your business and how it will be done."
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Key Elements</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Objectives:</strong> What the business aims to achieve</li>
              <li><strong>Means:</strong> How objectives will be accomplished</li>
              <li><strong>Operations:</strong> Day-to-day activities</li>
              <li><strong>Financials:</strong> Budgets and projections</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Perspective</p>
            <p class="text-purple-800">
              Royal Prince, in Nigeria, business plans are essential for securing loans from banks and impressing investors.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Business Plan Concept</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Business Plan as Decision Tool</h4>
            <p class="text-gray-800 mb-3">Royal Prince, business plans are decision-making tools that help evaluate business feasibility objectively, without emotional bias.</p>

            <h4 class="font-semibold text-purple-900 mb-2">Two Types of Business Plans</h4>
            <ul class="text-gray-800 space-y-2">
              <li><strong>Externally Focused:</strong> For raising capital, targeting investors and lenders</li>
              <li><strong>Internally Focused:</strong> For guiding early strategic and corporate development</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Comprehensive Coverage</h4>
            <p class="text-yellow-800">Business plans cover vision, current status, needs, markets, results, and financial requirements - everything needed for success!</p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ Common Misconceptions</h4>
            <ul class="text-red-800 space-y-1">
              <li>• Thinking business plans are only for big companies</li>
              <li>• Believing they're just for getting loans</li>
              <li>• Assuming they're static documents</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Question Pattern</h4>
            <p class="text-green-800 font-medium mb-2">Which of the following is NOT a purpose of a business plan?</p>
            <p class="text-green-800"><strong>A.</strong> Secure financing<br><strong>B.</strong> Guide operations<br><strong>C.</strong> Replace management<br><strong>D.</strong> Evaluate feasibility</p>
            <p class="text-green-800 text-sm italic mt-2"><strong>Correct Answer: C</strong> - Business plans guide management, they don't replace it!</p>
          </div>
        </div>
      `,
      estimatedTime: 11,
    },
    {
      id: "business-plan-preparation",
      title: "✍️ Preparing a Business Plan",
      subtitle: "Step-by-Step Guide to Creating Effective Plans",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Key Guidelines</p>
            <p class="text-blue-800">
              Business plans should be prepared by owners with minimal external help, contain all necessary information, be based on research, and focus on promoter skills demonstration.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Critical Points</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Owner-Driven:</strong> Founders should be deeply involved</li>
              <li><strong>Research-Based:</strong> Gather all required information</li>
              <li><strong>Skills Demonstration:</strong> Show business acumen</li>
              <li><strong>Problem Identification:</strong> Address potential issues</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Reality</p>
            <p class="text-purple-800">
              Royal Prince, Nigerian banks require detailed business plans showing your understanding of the local market and economic conditions.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Business Plan Preparation</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Owner Involvement is Critical</h4>
            <ul class="text-gray-800 space-y-2 mb-4">
              <li>• Owners must understand and explain every aspect</li>
              <li>• Avoid delegating to consultants who lack business knowledge</li>
              <li>• Demonstrate personal commitment and business skills</li>
              <li>• Show ability to manage and grow the business</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Research Requirements</h4>
            <ul class="text-gray-800 space-y-2">
              <li>• Gather comprehensive market data</li>
              <li>• Research competitors thoroughly</li>
              <li>• Understand financial requirements</li>
              <li>• Identify potential problems and solutions</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Investor Perspective</h4>
            <p class="text-yellow-800">Royal Prince, investors assess promoter skills and business understanding. Your plan must prove you can successfully manage the venture!</p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Focus</h4>
            <p class="text-green-800">Questions emphasize owner involvement and avoiding over-reliance on external consultants!</p>
          </div>
        </div>
      `,
      estimatedTime: 12,
    },
    {
      id: "business-plan-checklist-background",
      title: "📋 Business Plan Checklist - Background",
      subtitle: "Essential Background Information",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Background Section Requirements</p>
            <p class="text-blue-800">
              Business name, address, contact details, commencement date, business type, activities, location description, premises details, insurance information.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Key Information Needed</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Business Identity:</strong> Name, address, contacts</li>
              <li><strong>Operations:</strong> Start date, type, activities</li>
              <li><strong>Premises:</strong> Location advantages, rent, rates</li>
              <li><strong>Insurance:</strong> Coverage and premium details</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Considerations</p>
            <p class="text-purple-800">
              Royal Prince, include CAC registration details, tax identification, and local government area information.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Background Information</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Business Identity Details</h4>
            <ul class="text-gray-800 space-y-2 mb-4">
              <li><strong>Name & Address:</strong> Legal business name and registered address</li>
              <li><strong>Contact Information:</strong> Phone, email, website if applicable</li>
              <li><strong>Commencement:</strong> When business started or will start</li>
              <li><strong>Legal Status:</strong> Sole proprietorship, partnership, limited company</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Operational Information</h4>
            <ul class="text-gray-800 space-y-2">
              <li><strong>Business Type:</strong> Manufacturing, trading, services, etc.</li>
              <li><strong>Principal Activities:</strong> Main products/services offered</li>
              <li><strong>Location Description:</strong> Strategic advantages of location</li>
              <li><strong>Premises Details:</strong> Size, ownership/rental status</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Financial Infrastructure</h4>
            <p class="text-yellow-800">Include rent payments, rates, insurance coverage - shows you're prepared for ongoing costs!</p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Application</h4>
            <p class="text-green-800">Questions test completeness - missing any background element can undermine your plan's credibility!</p>
          </div>
        </div>
      `,
      estimatedTime: 10,
    },
    {
      id: "business-plan-checklist-products",
      title: "🛍️ Business Plan Checklist - Products/Services",
      subtitle: "Describing Your Offerings",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Product/Service Information</p>
            <p class="text-blue-800">
              Types of products/services, market share contribution, development plans, features, benefits, unique technology or processes.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Essential Details</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Product Range:</strong> Complete list of offerings</li>
              <li><strong>Revenue Contribution:</strong> Percentage from each product</li>
              <li><strong>Future Plans:</strong> New products/services in development</li>
              <li><strong>Unique Features:</strong> What makes you special</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Market Focus</p>
            <p class="text-purple-800">
              Royal Prince, emphasize local adaptations, pricing for Nigerian market, and solutions to local problems.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Products/Services Section</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Product/Service Description</h4>
            <ul class="text-gray-800 space-y-2 mb-4">
              <li><strong>Complete Range:</strong> List all products/services offered</li>
              <li><strong>Revenue Breakdown:</strong> Percentage contribution of each to total sales</li>
              <li><strong>Development Pipeline:</strong> Products/services under development or planned</li>
              <li><strong>Technical Details:</strong> Special technology, processes, or methods used</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Market Positioning</h4>
            <ul class="text-gray-800 space-y-2">
              <li><strong>Features:</strong> Technical specifications and characteristics</li>
              <li><strong>Benefits:</strong> Customer value and problem-solving aspects</li>
              <li><strong>Unique Advantages:</strong> What differentiates from competitors</li>
              <li><strong>Customer Appeal:</strong> Why customers will choose your offering</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Future Orientation</h4>
            <p class="text-yellow-800">Royal Prince, show investors you're thinking ahead by including product development plans and market expansion strategies!</p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Focus</h4>
            <p class="text-green-800">Questions test your ability to describe products comprehensively and demonstrate market understanding!</p>
          </div>
        </div>
      `,
      estimatedTime: 11,
    },
    {
      id: "business-plan-checklist-personnel",
      title: "👥 Business Plan Checklist - Personnel",
      subtitle: "Your Team and Management Structure",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Personnel Requirements</p>
            <p class="text-blue-800">
              Key personnel details (names, positions, salaries), management team additions needed, contingency plans for key personnel absence.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Critical Personnel Information</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Current Team:</strong> Names, positions, salaries of key staff</li>
              <li><strong>Future Needs:</strong> Additional personnel required</li>
              <li><strong>Background Details:</strong> Experience and qualifications</li>
              <li><strong>Contingency Plans:</strong> Backup for key roles</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian HR Context</p>
            <p class="text-purple-800">
              Royal Prince, consider local labor laws, union relationships, and succession planning for family businesses.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Personnel Planning</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Management Team Assessment</h4>
            <ul class="text-gray-800 space-y-2 mb-4">
              <li><strong>Key Personnel List:</strong> Names, positions, salaries for all key staff</li>
              <li><strong>Background Documentation:</strong> Experience, qualifications, achievements</li>
              <li><strong>Growth Requirements:</strong> Additional skills needed for expansion</li>
              <li><strong>Timeline for Additions:</strong> When new personnel will be required</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Risk Management</h4>
            <ul class="text-gray-800 space-y-2">
              <li><strong>Contingency Planning:</strong> What happens if key personnel leave</li>
              <li><strong>Succession Planning:</strong> Who can step up in emergencies</li>
              <li><strong>Training Programs:</strong> Development plans for staff</li>
              <li><strong>Insurance Coverage:</strong> Key person insurance considerations</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Investor Confidence</h4>
            <p class="text-yellow-800">Royal Prince, investors want to see a capable team. Weak personnel planning signals high risk!</p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ Personnel Planning Mistakes</h4>
            <ul class="text-red-800 space-y-1">
              <li>• Underestimating personnel costs</li>
              <li>• Ignoring skill gaps for growth</li>
              <li>• No contingency for key staff loss</li>
              <li>• Over-reliance on single individuals</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Application</h4>
            <p class="text-green-800">Questions test understanding of team composition and risk management in personnel planning!</p>
          </div>
        </div>
      `,
      estimatedTime: 12,
    },
    {
      id: "business-plan-checklist-market",
      title: "📊 Business Plan Checklist - Market Analysis",
      subtitle: "Understanding Your Market Environment",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Market Analysis Requirements</p>
            <p class="text-blue-800">
              Target market description, market trends (declining/static/increasing), competitor analysis, competitive advantages, sales forecasts, marketing budget, pricing strategy.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Market Intelligence Needed</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Target Market:</strong> Who are your customers?</li>
              <li><strong>Market Trends:</strong> Growth or decline patterns</li>
              <li><strong>Competitor Analysis:</strong> Who are they and their strengths</li>
              <li><strong>Competitive Edge:</strong> Your unique advantages</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Market Research</p>
            <p class="text-purple-800">
              Royal Prince, analyze local competition, consumer behavior, economic factors, and regulatory environment.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Market Analysis</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Market Understanding</h4>
            <ul class="text-gray-800 space-y-2 mb-4">
              <li><strong>Target Market Definition:</strong> Demographics, psychographics, needs</li>
              <li><strong>Market Size & Trends:</strong> Current size and growth trajectory</li>
              <li><strong>Customer Segmentation:</strong> Different customer groups and their needs</li>
              <li><strong>Market Position:</strong> Where you fit in the competitive landscape</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Competitive Intelligence</h4>
            <ul class="text-gray-800 space-y-2">
              <li><strong>Competitor Identification:</strong> Direct and indirect competitors</li>
              <li><strong>Competitor Strengths:</strong> What they do well</li>
              <li><strong>Your Advantages:</strong> Unique selling propositions</li>
              <li><strong>Market Gaps:</strong> Unmet customer needs you can address</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Sales Forecasting</h4>
            <p class="text-yellow-800">Royal Prince, provide realistic sales projections for first 6 months, supported by market research and evidence!</p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ Market Analysis Pitfalls</h4>
            <ul class="text-red-800 space-y-1">
              <li>• Overly optimistic market size estimates</li>
              <li>• Ignoring emerging competitors</li>
              <li>• Unsubstantiated sales forecasts</li>
              <li>• Weak competitive advantage claims</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Marketing Questions</h4>
            <p class="text-green-800">Questions test your ability to analyze market trends and demonstrate competitive understanding!</p>
          </div>
        </div>
      `,
      estimatedTime: 15,
    },
    {
      id: "financial-considerations",
      title: "💰 Financial Considerations",
      subtitle: "The Money Side of Business Planning",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Financial Planning Purpose</p>
            <p class="text-blue-800">
              Financial projections establish profit potential, determine capital needs, demonstrate loan repayment ability, and show cash flow management.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Key Financial Elements</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Profit Potential:</strong> Realistic profit projections</li>
              <li><strong>Capital Requirements:</strong> How much money needed</li>
              <li><strong>Cash Flow:</strong> Timing of money in/out</li>
              <li><strong>Asset Valuation:</strong> Equipment and property details</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Financial Context</p>
            <p class="text-purple-800">
              Royal Prince, consider inflation, exchange rates, banking regulations, and local tax requirements in your projections.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Financial Considerations</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Financial Planning Objectives</h4>
            <ul class="text-gray-800 space-y-2 mb-4">
              <li><strong>Profit Assessment:</strong> Determine realistic profit potential with reasonable assumptions</li>
              <li><strong>Capital Determination:</strong> Calculate exact funding requirements and usage</li>
              <li><strong>Loan Repayment:</strong> Demonstrate ability to repay borrowed funds</li>
              <li><strong>Cash Management:</strong> Show positive cash flow for operations</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Asset and Liability Analysis</h4>
            <ul class="text-gray-800 space-y-2">
              <li><strong>Fixed Assets:</strong> Plant, machinery, equipment with life expectancy and value</li>
              <li><strong>Capital Expenditures:</strong> Planned purchases with timing and cost</li>
              <li><strong>Funding Sources:</strong> Own resources, grants, external financing</li>
              <li><strong>Working Capital:</strong> Stock levels and supplier credit terms</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Realistic Assumptions</h4>
            <p class="text-yellow-800">Royal Prince, all financial projections must be based on realistic, defensible assumptions that you can explain to investors!</p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Financial Questions</h4>
            <p class="text-green-800">Questions test understanding of financial statement relationships and cash flow timing!</p>
          </div>
        </div>
      `,
      estimatedTime: 14,
    },
    {
      id: "break-even-analysis",
      title: "📈 Break-Even Analysis",
      subtitle: "Finding Your Profit Threshold",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Break-Even Concept</p>
            <p class="text-blue-800">
              Break-even is the level of business activity where total revenue equals total costs - no profit, no loss. Essential for business planning.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Break-Even Components</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Contribution:</strong> Sales minus direct costs</li>
              <li><strong>Contribution Margin:</strong> Contribution as percentage of sales</li>
              <li><strong>Fixed Costs:</strong> Costs that don't vary with sales</li>
              <li><strong>Break-Even Point:</strong> Sales needed to cover all costs</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Business Application</p>
            <p class="text-purple-800">
              Royal Prince, use break-even analysis to determine how many units you need to sell to cover costs in the Nigerian market.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Break-Even Analysis</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Break-Even Calculation Steps</h4>
            <ol class="text-gray-800 space-y-3">
              <li><strong>Calculate Contribution:</strong> Sales - Direct Costs (materials, labor)</li>
              <li><strong>Find Contribution Margin:</strong> (Contribution ÷ Sales) × 100</li>
              <li><strong>Identify Fixed Costs:</strong> Overhead costs that don't change</li>
              <li><strong>Calculate Break-Even Sales:</strong> Fixed Costs ÷ Contribution Margin</li>
              <li><strong>Find Break-Even Units:</strong> Break-Even Sales ÷ Unit Price</li>
            </ol>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Example: Adejumo's Business</h4>
            <p class="text-yellow-800">Sales: N200,000 | Direct Costs: N120,000 | Contribution: N80,000 | Margin: 40% | Fixed Costs: N33,000 | Break-Even: N82,500 (2,062.5 units)</p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ Common Calculation Errors</h4>
            <ul class="text-red-800 space-y-1">
              <li>• Including fixed costs in direct costs</li>
              <li>• Wrong contribution margin calculation</li>
              <li>• Forgetting fixed costs exist regardless of sales</li>
              <li>• Using wrong unit pricing</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Calculation Questions</h4>
            <p class="text-green-800 font-medium mb-2">If contribution margin is 40% and fixed costs are N50,000, break-even sales are:</p>
            <p class="text-green-800"><strong>A.</strong> N20,000<br><strong>B.</strong> N80,000<br><strong>C.</strong> N125,000<br><strong>D.</strong> N200,000</p>
            <p class="text-green-800 text-sm italic mt-2"><strong>Correct Answer: C</strong> - N50,000 ÷ 0.40 = N125,000!</p>
          </div>
        </div>
      `,
      estimatedTime: 18,
    },
    {
      id: "cash-flow-forecast",
      title: "💸 Cash Flow Forecasting",
      subtitle: "Managing Business Money Flow",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Cash Flow Purpose</p>
            <p class="text-blue-800">
              Cash flow forecast predicts money inflows and outflows, identifies financing needs, and ensures business can meet financial obligations.
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold text-green-900 mb-2">🔍 Forecast Components</p>
            <ul class="text-green-800 space-y-2">
              <li><strong>Receipts:</strong> Cash sales and debtor collections</li>
              <li><strong>Payments:</strong> Purchases, wages, expenses</li>
              <li><strong>Credit Terms:</strong> When money actually moves</li>
              <li><strong>Capital Items:</strong> Major purchases separate from trading</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Cash Management</p>
            <p class="text-purple-800">
              Royal Prince, consider banking delays, cash economy elements, and seasonal business patterns in Nigeria.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Cash Flow Forecasting</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Cash Flow Timing Rules</h4>
            <ul class="text-gray-800 space-y-2 mb-4">
              <li><strong>Cash Sales:</strong> Recorded in month of sale</li>
              <li><strong>Credit Sales:</strong> Received in month following sale</li>
              <li><strong>Cash Purchases:</strong> Paid in month of purchase</li>
              <li><strong>Credit Purchases:</strong> Paid 2 months after purchase</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Magic Lantern Example</h4>
            <p class="text-gray-800">Sales: N40/unit, Variable cost: N26/unit, Fixed costs: N6,000/month, Production one month before sales, credit terms apply.</p>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Forecasting Best Practices</h4>
            <p class="text-yellow-800">Royal Prince, prepare forecasts for at least 6 months, use both budget and actual columns, and review regularly!</p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ Cash Flow Mistakes</h4>
            <ul class="text-red-800 space-y-1">
              <li>• Confusing profit with cash flow</li>
              <li>• Ignoring credit terms timing</li>
              <li>• Forgetting seasonal variations</li>
              <li>• Not planning for emergencies</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Cash Flow Questions</h4>
            <p class="text-green-800">Questions test understanding of when cash actually moves - not when transactions are recorded!</p>
          </div>
        </div>
      `,
      estimatedTime: 16,
    },
    {
      id: "business-plan-errors",
      title: "❌ Common Business Plan Mistakes",
      subtitle: "Avoid These Critical Errors",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-900 mb-2">📘 Major Errors to Avoid</p>
            <p class="text-blue-800">
              Poor presentation, outdated information, unrealistic assumptions, lack of financial understanding, generic strategies, missing equity stake, weak loan terms, overemphasis on collateral.
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">⚠️ Critical Mistakes</p>
            <ul class="text-red-800 space-y-2">
              <li><strong>Presentation:</strong> Coffee stains, typos show lack of seriousness</li>
              <li><strong>Information:</strong> Outdated financials undermine credibility</li>
              <li><strong>Assumptions:</strong> Unexplained assumptions raise doubts</li>
              <li><strong>Financials:</strong> Owner must understand and explain projections</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="font-semibold text-purple-900 mb-2">🇳🇬 Nigerian Context</p>
            <p class="text-purple-800">
              Royal Prince, avoid unrealistic loan expectations and ensure you demonstrate personal commitment to the business.
            </p>
          </div>
        </div>
      `,
      manualExplanation: `
        <div class="space-y-6 mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <h3 class="text-xl font-bold text-purple-900 mb-4">🧠 AI Deep Breakdown: Business Plan Pitfalls</h3>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold text-purple-900 mb-2">Presentation & Content Errors</h4>
            <ul class="text-gray-800 space-y-2 mb-4">
              <li><strong>Poor Quality:</strong> Rough drafts with errors signal unprofessionalism</li>
              <li><strong>Outdated Data:</strong> Old financial information raises credibility concerns</li>
              <li><strong>Unrealistic Comparisons:</strong> Industry comparisons that don't make sense</li>
              <li><strong>Unsubstantiated Claims:</strong> Assumptions without supporting evidence</li>
            </ul>

            <h4 class="font-semibold text-purple-900 mb-2">Strategic & Financial Mistakes</h4>
            <ul class="text-gray-800 space-y-2">
              <li><strong>Financial Illiteracy:</strong> Owner can't explain financial projections</li>
              <li><strong>Vague Strategies:</strong> Generic statements without specific details</li>
              <li><strong>Missing Equity:</strong> No personal investment shows lack of commitment</li>
              <li><strong>Weak Guarantees:</strong> Unwillingness to personally guarantee loans</li>
            </ul>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 class="font-semibold text-yellow-900 mb-2">Collateral vs Cash Flow</h4>
            <p class="text-yellow-800">Royal Prince, bankers look at cash flow for repayment, not just collateral. Focus on profitable operations!</p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">⚠️ Most Common Errors</h4>
            <ul class="text-red-800 space-y-1">
              <li>• Starting with unrealistic loan amounts/terms</li>
              <li>• Too much focus on collateral instead of cash flow</li>
              <li>• Failure to show personal stake in business</li>
              <li>• Overly optimistic projections without basis</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-2">🎯 CBT Error Recognition</h4>
            <p class="text-green-800">Questions test your ability to identify flaws in business plans and suggest corrections!</p>
          </div>
        </div>
      `,
      estimatedTime: 13,
    },
  ],
  learningObjectives: [
    "Understand the concept and importance of business planning",
    "Distinguish between strategic and operational planning",
    "Apply planning principles to business situations",
    "Create comprehensive business plans with all essential components",
    "Perform break-even analysis and cash flow forecasting",
    "Avoid common business plan errors and pitfalls",
  ],
  keyTerms: [
    "Business Planning",
    "Strategic Planning",
    "Operational Planning",
    "SWOT Analysis",
    "PEST Analysis",
    "Business Plan",
    "Break-even Analysis",
    "Cash Flow Forecast",
    "Contribution Margin",
    "Fixed Costs",
  ],
  summary: `
    This chapter provides comprehensive coverage of business planning principles and practices,
    equipping you with the knowledge and skills to create effective business plans for entrepreneurial success.
    Master these concepts to excel in ENT 211 examinations and real-world business planning.
  `,
  references: [
    "Kasum, A. S. (2024). Business Planning. Department of Accounting, University of Ilorin.",
    "Shapiro, J. (2001). Planning. In The Book of Management.",
    "Litman, T. (2013). Transportation Planning Principles. Victoria Transport Policy Institute.",
    "Small Business Development Center. (2014). Business Plan Preparation Guide.",
    "CFI. (2016). Business Plan Components and Structure.",
    "International Federation of Accountants. (2016). Business Planning Standards.",
  ],
};