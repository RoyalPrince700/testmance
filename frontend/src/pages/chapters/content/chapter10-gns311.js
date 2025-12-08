// Chapter 10: Fundamentals of Poultry Production
// GNS 311 - Module 10

export const chapter10Content = {
  title: "Fundamentals of Poultry Production",
  author: "Adeyina, A.O. and Atteh, J.O.",
  department: "Department of Animal Production, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🐔 Welcome to Poultry Production!",
      subtitle: "Introduction to Poultry Science",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome! 🐔 <strong>Poultry production</strong> is one of the most important agricultural sectors worldwide,
            providing protein-rich food and economic opportunities for millions. This chapter introduces you to the fascinating world of poultry farming!
          </p>
          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
            <p class="font-semibold text-teal-900 mb-2">💡 Did you know?</p>
            <p class="text-teal-800">
              Nigeria is one of the largest poultry producers in Africa, with the industry contributing significantly
              to food security and employment. Chicken is the most popular poultry species worldwide!
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter will guide you through poultry species, management systems, production cycles, nutrition, and health management.
            You'll learn about both traditional and modern poultry farming practices that ensure sustainable production.
          </p>

          <div class="bg-blue-50 p-5 rounded-lg border border-blue-200 my-6">
            <h4 class="font-bold text-blue-900 mb-3 text-lg">📚 Module Structure</h4>
            <p class="text-blue-800 mb-4">
              This module covers the fundamentals of poultry production, divided into two main units:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg border border-blue-200">
                <h5 class="font-bold text-blue-900 mb-2">🏠 Unit 1</h5>
                <p class="text-blue-800 text-sm">Management Systems and Equipment</p>
              </div>
              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-2">🐥 Unit 2</h5>
                <p class="text-green-800 text-sm">Production Cycle and Health</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "learning-outcomes",
      title: "🎓 What You'll Learn",
      subtitle: "Learning Outcomes",
      content: `
        <div class="space-y-4">
          <p class="text-lg font-semibold mb-4">By the end of this module, you should be able to:</p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Know poultry species and their economic importance</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Differentiate between egg and meat types of chicken</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Understand different types of poultry management systems</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Identify basic equipment required in poultry production</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Understand the production cycle in poultry production</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Understand the basic nutrients and ingredients required in poultry feeds</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Understand some common diseases of poultry, their symptoms and prevention</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-intro",
      title: "🏠 Unit 1: Management Systems",
      subtitle: "Poultry Management and Housing",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Poultry management systems</strong> determine how birds are housed, fed, and cared for.
            The choice of system affects productivity, cost, and bird welfare. There are two main systems: extensive (free range) and intensive (confined).
          </p>
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Key Concept</p>
            <p class="text-yellow-800">
              Management systems are chosen based on climate, flock size, available facilities, and production goals (meat vs. eggs).
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit1-species",
      title: "🐔 Poultry Species",
      subtitle: "Types of Poultry",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Poultry refers to domesticated birds raised for meat or egg production. The most common species include:
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 class="font-bold text-green-900 mb-2">Domestic Species</h4>
              <ul class="space-y-1 text-green-800 text-sm">
                <li>• Chicken (most common)</li>
                <li>• Turkey</li>
                <li>• Duck</li>
                <li>• Goose</li>
                <li>• Pigeon</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 class="font-bold text-blue-900 mb-2">Non-Domestic Species</h4>
              <ul class="space-y-1 text-blue-800 text-sm">
                <li>• Ostrich</li>
                <li>• Quail</li>
                <li>• Pheasant</li>
              </ul>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-3">🐔 Chicken Breeds</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded">
                <h5 class="font-bold text-indigo-700 mb-2">Egg-Type (Layers)</h5>
                <p class="text-gray-700 text-sm">Light-bodied birds bred for high egg production. Examples: Rhode Island Red, Leghorn.</p>
              </div>
              <div class="bg-white p-4 rounded">
                <h5 class="font-bold text-indigo-700 mb-2">Meat-Type (Broilers)</h5>
                <p class="text-gray-700 text-sm">Heavy-bodied birds bred for rapid growth and meat production. Example: Cornish Cross.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit1-free-range",
      title: "🌾 Free Range Management",
      subtitle: "Extensive Poultry System",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            In the <strong>free range system</strong>, birds are allowed to roam freely during the day to find their own food,
            with optional night shelter. This is the traditional system common in rural Nigeria.
          </p>

          <div class="bg-green-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-green-900 mb-4">✅ Advantages</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-white p-3 rounded">💰 Low cost to maintain</div>
              <div class="bg-white p-3 rounded">🦠 More disease resistant</div>
              <div class="bg-white p-3 rounded">🌱 Access to natural greens</div>
              <div class="bg-white p-3 rounded">☀️ Natural vitamin D from sunlight</div>
            </div>
          </div>

          <div class="bg-red-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-red-900 mb-4">❌ Disadvantages</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-white p-3 rounded">🐺 Predators can attack birds</div>
              <div class="bg-white p-3 rounded">🌡️ Weather exposure</div>
              <div class="bg-white p-3 rounded">👀 Cannot monitor performance</div>
              <div class="bg-white p-3 rounded">📝 Poor record keeping</div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit1-confined",
      title: "🏭 Confined Management",
      subtitle: "Intensive Poultry System",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Confined management</strong> involves housing birds in controlled environments with proper feeding, disease control, and record keeping.
            This system includes deep litter and cage systems.
          </p>

          <div class="bg-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 mb-4">🏠 Housing Types</h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🌿 Deep Litter System</h5>
                <p class="text-gray-700 text-sm mb-2">Birds kept on absorbent bedding material (wood shavings, straw) on the floor. Suitable for broilers, layers, and breeders.</p>
                <p class="text-gray-600 text-xs">Common in Nigeria due to wood shavings availability.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">📦 Cage System (Battery)</h5>
                <p class="text-gray-700 text-sm mb-2">Layers kept in wire cages for egg production. Prevents floor eggs and makes collection easy.</p>
                <p class="text-gray-600 text-xs">California style (stair-step) common in Nigeria.</p>
              </div>
            </div>
          </div>

          <div class="bg-teal-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-teal-900 mb-4">✅ Intensive System Benefits</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-white p-3 rounded">🔍 Easy management</div>
              <div class="bg-white p-3 rounded">🍳 Clean eggs</div>
              <div class="bg-white p-3 rounded">🩺 Better disease control</div>
              <div class="bg-white p-3 rounded">📊 Good record keeping</div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit1-equipment",
      title: "🛠️ Poultry Equipment",
      subtitle: "Essential Tools and Equipment",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Poultry equipment varies by growth stage and management system. They can be classified as general (used at all stages) or specific (used at particular stages).
          </p>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-4">🔧 General Equipment</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 mb-2">🥤 Drinkers</h5>
                <ul class="text-gray-700 text-sm space-y-1">
                  <li>• Fountain drinkers (4L)</li>
                  <li>• PVC pipe drinkers</li>
                  <li>• Automatic drinkers</li>
                  <li>• Hanging drinkers</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 mb-2">🍽️ Feeders</h5>
                <ul class="text-gray-700 text-sm space-y-1">
                  <li>• Tube feeders (1.5-1.8m)</li>
                  <li>• Cylindrical feeders</li>
                  <li>• Galvanized troughs</li>
                  <li>• Plastic trays</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-purple-900 mb-4">🎯 Specific Equipment</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">🔥 Brooders</h5>
                <p class="text-gray-700 text-sm">For chicks 0-8 weeks, provides heat and protection.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">🪺 Laying Nests</h5>
                <p class="text-gray-700 text-sm">For egg-laying hens to lay eggs in clean, safe places.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">✂️ Debeakers</h5>
                <p class="text-gray-700 text-sm">To prevent cannibalism and feather pecking.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">🔍 Candlers</h5>
                <p class="text-gray-700 text-sm">To check egg fertility and development.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-intro",
      title: "🐥 Unit 2: Production Cycle",
      subtitle: "From Egg to Market",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The <strong>poultry production cycle</strong> involves several stages from egg incubation to market-ready birds.
            Each stage requires specific management, nutrition, and health care.
          </p>

          <div class="bg-yellow-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-yellow-900 mb-3">📅 Production Stages</h4>
            <div class="space-y-2">
              <div class="flex justify-between items-center bg-white p-3 rounded">
                <span class="font-semibold">Prenatal (-21-0 days)</span>
                <span class="text-yellow-700">Incubation</span>
              </div>
              <div class="flex justify-between items-center bg-white p-3 rounded">
                <span class="font-semibold">Postnatal (0-8 weeks)</span>
                <span class="text-yellow-700">Brooding</span>
              </div>
              <div class="flex justify-between items-center bg-white p-3 rounded">
                <span class="font-semibold">9-20/24 weeks</span>
                <span class="text-yellow-700">Rearing</span>
              </div>
              <div class="flex justify-between items-center bg-white p-3 rounded">
                <span class="font-semibold">>20/24 weeks</span>
                <span class="text-yellow-700">Adult Management</span>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit2-incubation",
      title: "🥚 Incubation",
      subtitle: "From Egg to Chick",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Incubation</strong> is the process of maintaining optimal conditions for egg development into chicks.
            It can be natural (by hens) or artificial (using incubators).
          </p>

          <div class="bg-teal-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-teal-900 mb-4">🌡️ Incubation Conditions</h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl mb-2">🌡️</div>
                <h5 class="font-bold text-teal-700">Temperature</h5>
                <p class="text-gray-700 text-sm">37°C (98.6°F)</p>
              </div>
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl mb-2">💧</div>
                <h5 class="font-bold text-teal-700">Humidity</h5>
                <p class="text-gray-700 text-sm">50-60%</p>
              </div>
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl mb-2">💨</div>
                <h5 class="font-bold text-teal-700">Ventilation</h5>
                <p class="text-gray-700 text-sm">Essential for oxygen</p>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 class="font-bold text-green-900 mb-2">🐔 Natural Incubation</h4>
              <ul class="space-y-1 text-green-800 text-sm">
                <li>• Mother hen sits on eggs</li>
                <li>• Hen must be broody</li>
                <li>• Natural turning and protection</li>
                <li>• Limited capacity</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 class="font-bold text-blue-900 mb-2">🏭 Artificial Incubation</h4>
              <ul class="space-y-1 text-blue-800 text-sm">
                <li>• Uses incubators</li>
                <li>• Controlled environment</li>
                <li>• Large scale production</li>
                <li>• Requires electricity/heat source</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">💡 Egg Storage Tips</p>
            <p class="text-yellow-800 text-sm">
              Store eggs at 10-14°C with 75-85% humidity. Don't store longer than 7 days.
              Wash eggs in warm, sanitized water before incubation.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-brooding",
      title: "🔥 Brooding",
      subtitle: "Caring for Chicks (0-8 weeks)",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Brooding</strong> is the management of chicks from 0-8 weeks of age. This critical period requires
            proper heat, feeding, and health care for optimal growth.
          </p>

          <div class="bg-red-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-red-900 mb-4">🔥 Heat Management</h4>
            <p class="text-red-800 mb-3">Chick temperature should be around 35°C initially, gradually reduced.</p>
            <div class="bg-white p-4 rounded">
              <p class="text-sm font-semibold mb-2">Temperature Indicators:</p>
              <ul class="text-sm text-gray-700 space-y-1">
                <li>• Too hot: Chicks spread away from heat source</li>
                <li>• Too cold: Chicks huddle under heat source</li>
                <li>• Just right: Chicks spread evenly, active</li>
              </ul>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 mb-4">📋 Brooding Management</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-blue-700 mb-1">Daily Routine</h5>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• Fresh feed and water</li>
                  <li>• Clean drinkers/feeders</li>
                  <li>• Monitor chick behavior</li>
                  <li>• Check for sick birds</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-blue-700 mb-1">Special Care</h5>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• Vaccinations</li>
                  <li>• Debeaking (if needed)</li>
                  <li>• Wing banding</li>
                  <li>• Litter turning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-rearing",
      title: "🌱 Rearing",
      subtitle: "Growing Birds (8-20/24 weeks)",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Rearing</strong> focuses on preparing birds for egg production or meat. The goal is to achieve
            proper weight and physiological maturity.
          </p>

          <div class="bg-purple-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-purple-900 mb-4">💡 Key Rearing Factors</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded">
                <h5 class="font-bold text-purple-700 mb-2">💡 Lighting</h5>
                <p class="text-gray-700 text-sm">Critical for sexual maturity. Tropical sunlight usually sufficient for egg production initiation.</p>
              </div>
              <div class="bg-white p-4 rounded">
                <h5 class="font-bold text-purple-700 mb-2">⚖️ Weight Goals</h5>
                <p class="text-gray-700 text-sm">Layers should reach 1.5-2kg, cockerels 2-3kg by 20 weeks for optimal production.</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-green-900 mb-4">🐔 Adult Bird Management</h4>
            <p class="text-green-800 mb-3">Focus on maximizing egg production (180-230 eggs/year in tropics).</p>
            <div class="bg-white p-4 rounded">
              <h5 class="font-bold text-green-700 mb-2">Egg Production Phases</h5>
              <ul class="text-sm text-gray-700 space-y-1">
                <li><strong>Phase I:</strong> Rapid increase (first 2 months)</li>
                <li><strong>Phase II:</strong> Stable production</li>
                <li><strong>Phase III:</strong> Decline before molt</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-nutrition",
      title: "🍽️ Feeding and Nutrition",
      subtitle: "Essential Nutrients for Poultry",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Poultry nutrition is crucial for health and productivity. Feed costs account for 55-75% of production expenses.
            Birds require energy, protein, vitamins, minerals, and water.
          </p>

          <div class="bg-orange-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-orange-900 mb-4">⚡ Essential Nutrients</h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🔥 Energy (2800-3000 kcal/kg)</h5>
                <p class="text-gray-700 text-sm">From carbohydrates, fats. Birds eat to meet energy needs. Sources: maize, wheat, fats, oils.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🥩 Protein (18-23% in feed)</h5>
                <p class="text-gray-700 text-sm">Essential amino acids: lysine, methionine. Sources: soybean, groundnut cake, fish meal.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🛢️ Fat</h5>
                <p class="text-gray-700 text-sm">High energy source (2.25x carbs). Provides essential fatty acids. Sources: palm oil, vegetable oil.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">💊 Vitamins & Minerals</h5>
                <p class="text-gray-700 text-sm">Calcium, phosphorus from limestone, bone meal. Vitamins from premixes and green feeds.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">💧 Water</h5>
                <p class="text-gray-700 text-sm">Essential for all body functions. Must be clean and available at all times.</p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-4">📊 Feeding Schedules</h4>
            <div class="space-y-3">
              <div class="bg-white p-3 rounded">
                <span class="font-bold text-indigo-700">Chick Mash (1-8 weeks):</span>
                <span class="text-gray-700 text-sm ml-2">18-20% protein, 2900 kcal/kg</span>
              </div>
              <div class="bg-white p-3 rounded">
                <span class="font-bold text-indigo-700">Grower Mash (9-14 weeks):</span>
                <span class="text-gray-700 text-sm ml-2">16% protein, 2900 kcal/kg</span>
              </div>
              <div class="bg-white p-3 rounded">
                <span class="font-bold text-indigo-700">Layer Mash (>20 weeks):</span>
                <span class="text-gray-700 text-sm ml-2">16% protein, 2850 kcal/kg + 3% calcium</span>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit2-feed-production",
      title: "🏭 Feed Production Principles",
      subtitle: "Making Balanced Poultry Feed",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Poultry feeds are formulated based on nutrient requirements, ingredient availability, and cost.
            The Pearson square method is commonly used for feed formulation.
          </p>

          <div class="bg-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 mb-4">📋 Feed Ingredients</h4>
            <div class="grid md:grid-cols-3 gap-3">
              <div class="bg-white p-3 rounded text-center">
                <h5 class="font-bold text-blue-700 mb-1">🌾 Cereals</h5>
                <p class="text-xs text-gray-700">Energy source: maize, wheat, barley</p>
              </div>
              <div class="bg-white p-3 rounded text-center">
                <h5 class="font-bold text-blue-700 mb-1">🥜 Protein</h5>
                <p class="text-xs text-gray-700">Soybean, groundnut cake, fish meal</p>
              </div>
              <div class="bg-white p-3 rounded text-center">
                <h5 class="font-bold text-blue-700 mb-1">💊 Additives</h5>
                <p class="text-xs text-gray-700">Vitamins, minerals, amino acids</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🧮 Pearson Square Method</p>
            <p class="text-yellow-800 text-sm">
              Used to calculate ingredient proportions for balanced feed. Consider nutrient requirements, ingredient composition, and cost.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-health",
      title: "🩺 Health and Disease Management",
      subtitle: "Keeping Poultry Healthy",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Disease prevention is cheaper than cure. Common poultry diseases include viral, bacterial, and parasitic infections.
            Good management, vaccination, and biosecurity are essential.
          </p>

          <div class="bg-red-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-red-900 mb-4">🦠 Common Poultry Diseases</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-red-700 mb-2">🔬 Coccidiosis (Protozoan)</h5>
                <p class="text-gray-700 text-sm">Blood in feces, watery droppings. Prevent with coccidiostats, clean litter.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-red-700 mb-2">🦠 Newcastle Disease (Viral)</h5>
                <p class="text-gray-700 text-sm">Respiratory distress, nervous signs, high mortality. Prevent with vaccination.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-red-700 mb-2">🐛 Gumboro Disease (Viral)</h5>
                <p class="text-gray-700 text-sm">Affects 3-8 week olds. Depression, diarrhea, mortality. Vaccination essential.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-red-700 mb-2">🔥 Fowl Pox (Viral)</h5>
                <p class="text-gray-700 text-sm">Skin lesions on comb/wattles. Treat lesions, vaccinate to prevent.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-red-700 mb-2">🦟 Chronic Respiratory Disease</h5>
                <p class="text-gray-700 text-sm">Sneezing, rattling, nasal discharge. Treat with antibiotics, prevent with biosecurity.</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-green-900 mb-4">💉 Parasites</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-green-700 mb-1">External Parasites</h5>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• Lice, mites, ticks</li>
                  <li>• Found on skin/feathers</li>
                  <li>• Treat with insecticides</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-green-700 mb-1">Internal Parasites</h5>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• Roundworms, tapeworms</li>
                  <li>• Affect intestines</li>
                  <li>• Use dewormers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-vaccination",
      title: "💉 Vaccination and Prevention",
      subtitle: "Disease Prevention Strategies",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Vaccination is the most effective way to prevent diseases. Combined with good management practices,
            it ensures healthy, productive flocks.
          </p>

          <div class="bg-teal-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-teal-900 mb-4">📅 Vaccination Schedule</h4>
            <div class="space-y-2">
              <div class="bg-white p-3 rounded">
                <span class="font-bold text-teal-700">Day 0:</span>
                <span class="text-gray-700 text-sm ml-2">Marek's vaccine</span>
              </div>
              <div class="bg-white p-3 rounded">
                <span class="font-bold text-teal-700">Day 1:</span>
                <span class="text-gray-700 text-sm ml-2">NDV orally, anti-stress in water</span>
              </div>
              <div class="bg-white p-3 rounded">
                <span class="font-bold text-teal-700">Day 3:</span>
                <span class="text-gray-700 text-sm ml-2">Remove weak/dead birds</span>
              </div>
              <div class="bg-white p-3 rounded">
                <span class="font-bold text-teal-700">Day 7:</span>
                <span class="text-gray-700 text-sm ml-2">Gumboro vaccine</span>
              </div>
              <div class="bg-white p-3 rounded">
                <span class="font-bold text-teal-700">Day 10:</span>
                <span class="text-gray-700 text-sm ml-2">Gumboro vaccine + anti-stress</span>
              </div>
              <div class="bg-white p-3 rounded">
                <span class="font-bold text-teal-700">Week 4:</span>
                <span class="text-gray-700 text-sm ml-2">NDV lasota vaccine</span>
              </div>
              <div class="bg-white p-3 rounded">
                <span class="font-bold text-teal-700">Week 8:</span>
                <span class="text-gray-700 text-sm ml-2">Deworming + anti-stress</span>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 mb-4">🛡️ Biosecurity Measures</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-blue-700 mb-1">Farm Management</h5>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• Clean, disinfect regularly</li>
                  <li>• Control visitors/vehicles</li>
                  <li>• Proper waste disposal</li>
                  <li>• Isolate sick birds</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-blue-700 mb-1">Health Monitoring</h5>
                <ul class="text-xs text-gray-700 space-y-1">
                  <li>• Daily observation</li>
                  <li>• Record keeping</li>
                  <li>• Quick disease response</li>
                  <li>• Regular veterinary visits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "summary",
      title: "📝 Chapter Summary",
      subtitle: "What We've Learned",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🎉 You've completed Chapter 10 on Fundamentals of Poultry Production.
            Let's recap the key concepts we've covered:
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 mb-2">1. Poultry Species & Types</h5>
                <p class="text-gray-700 text-sm">Chicken (most important), turkey, duck, etc. Differentiated into egg-type (layers) and meat-type (broilers).</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">2. Management Systems</h5>
                <p class="text-gray-700 text-sm">Free range (extensive) vs. confined (intensive) systems. Each with advantages and disadvantages based on location and goals.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">3. Production Cycle</h5>
                <p class="text-gray-700 text-sm">From incubation to adult management. Each stage (incubation, brooding, rearing) requires specific care.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">4. Nutrition & Feeding</h5>
                <p class="text-gray-700 text-sm">Essential nutrients: energy, protein, vitamins, minerals, water. Feed formulation using Pearson square method.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">5. Health Management</h5>
                <p class="text-gray-700 text-sm">Prevention through vaccination, biosecurity, and proper management. Common diseases and their control.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Next Steps</p>
            <p class="text-yellow-800">
              Poultry production is a vital agricultural sector in Nigeria. The knowledge you've gained here will help you
              understand modern poultry farming practices and contribute to food security. Keep learning about sustainable agriculture! 🐔✨
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    }
  ]
};
