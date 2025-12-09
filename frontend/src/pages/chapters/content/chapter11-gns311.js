// Chapter 11: Human Nutrition: A Life Course Approach
// GNS 311 - Module 11

export const chapter11Content = {
  title: "Human Nutrition: A Life Course Approach",
  author: "Temidayo Oladiji and Deborah Opaleke",
  department: "Department of Biochemistry and Department of Home Economics and Food Science, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🥗 Welcome to Human Nutrition!",
      subtitle: "Introduction to Nutrition Science",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome! 🥗 <strong>Nutrition</strong> is the cornerstone of human health and well-being.
            Understanding nutrition throughout the life course is essential for promoting optimal health,
            preventing diseases, and ensuring quality of life at every stage of life.
          </p>
          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
            <p class="font-semibold text-teal-900 mb-2">💡 Did you know?</p>
            <p class="text-teal-800">
              Nutrition is so important that it's become a national goal to promote optimal health and disease prevention.
              Unfortunately, there's a general dearth of knowledge in human nutrition, especially regarding vulnerable groups like children, pregnant women, and the elderly.
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter explores nutrition as a life course approach, covering food nutrients, malnutrition,
            and nutrition in vulnerable groups including adolescents, pregnant women, adults, and the elderly.
            You'll also learn about obesity and its management.
          </p>

          <div class="bg-blue-50 p-5 rounded-lg border border-blue-200 my-6">
            <h4 class="font-bold text-blue-900 mb-3 text-lg">📚 Module Structure</h4>
            <p class="text-blue-800 mb-4">
              This module covers human nutrition across the life course, divided into two main units:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg border border-blue-200">
                <h5 class="font-bold text-blue-900 mb-2">🥦 Unit 1</h5>
                <p class="text-blue-800 text-sm">Food Nutrients and Malnutrition</p>
              </div>
              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-2">👥 Unit 2</h5>
                <p class="text-green-800 text-sm">Nutrition in Vulnerable Groups</p>
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
              <span>Define nutrition and understand its importance</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain the concepts of macro- and micro-nutrients</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Discuss standards for measuring healthy people's energy requirements</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>List various forms of malnutrition and their features</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain nutrition in adolescents, pregnant women, and the elderly</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Discuss causes, measurement, and management of obesity</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "nutrition-definition",
      title: "🥗 What is Nutrition?",
      subtitle: "Basic Concepts of Nutrition",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Nutrition</strong> is the science that interprets the relationship of foods to the functioning of living organisms.
            It encompasses food intake, waste elimination, and the synthesis of essential substances for maintenance, growth, and reproduction.
          </p>
          <p class="text-lg leading-relaxed">
            In essence, nutrition is the interaction of food, nutrients, and other substances with health and disease.
            It's so important that it has become a national goal to promote optimal health and disease prevention.
          </p>
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">⚠️ Important Challenge</p>
            <p class="text-yellow-800">
              There's a general dearth of knowledge in human nutrition, especially regarding nutrition of vulnerable groups
              (children, pregnant women, and the elderly). Also, the association between diet and disease onset needs better understanding.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit1-intro",
      title: "🥦 Unit 1: Food Nutrients",
      subtitle: "Understanding Nutrients and Their Functions",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Food is able to perform its functions because it contains nutrients.</strong> 🥦
            Nutrients are the chemicals in foods that our body uses for energy and to support growth, maintenance, and repair.
          </p>
          <p class="text-lg leading-relaxed">
            This unit explores the different types of nutrients, their sources, functions, and requirements.
            We'll also examine malnutrition and its various forms, particularly in children.
          </p>
          <div class="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">🍎 Nutrient Categories:</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-700 mb-2">⚖️ Macronutrients</h5>
                <p class="text-gray-700 text-sm">Required in large amounts: Carbohydrates, Lipids, Proteins</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-green-700 mb-2">🔬 Micronutrients</h5>
                <p class="text-gray-700 text-sm">Required in smaller amounts: Vitamins, Minerals, Water</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "macronutrients",
      title: "⚖️ Macronutrients",
      subtitle: "Carbohydrates, Proteins, and Lipids",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Macronutrients</strong> are nutrients required in relatively large amounts. They provide the energy and building blocks for our bodies.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3">🍞 Carbohydrates (4 kcal/g)</h4>
              <p class="text-blue-800 mb-3">The body's primary energy source</p>
              <div class="bg-white p-3 rounded">
                <p class="font-semibold mb-2">Sources:</p>
                <p class="text-sm text-gray-700">Bread, rice, yam, biscuits, sugar, potatoes</p>
              </div>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3">🥑 Lipids/Fats (9 kcal/g)</h4>
              <p class="text-green-800 mb-3">Highest energy density, essential fatty acids</p>
              <div class="bg-white p-3 rounded">
                <p class="font-semibold mb-2">Sources:</p>
                <p class="text-sm text-gray-700">Oils, butter, cheese, nuts, avocados</p>
              </div>
            </div>

            <div class="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3">🥩 Proteins (4 kcal/g)</h4>
              <p class="text-purple-800 mb-3">Essential for growth, repair, and maintenance</p>
              <div class="bg-white p-3 rounded">
                <p class="font-semibold mb-2">Sources:</p>
                <p class="text-sm text-gray-700">Meat, fish, eggs, milk, beans, legumes</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "micronutrients",
      title: "🔬 Micronutrients",
      subtitle: "Vitamins, Minerals, and Water",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Micronutrients</strong> are nutrients required in smaller amounts but are equally essential for health.
            They don't provide energy but are crucial for various bodily functions.
          </p>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h4 class="font-bold text-teal-900 mb-2">🥕 Minerals</h4>
              <p class="text-teal-800 text-sm">Control body processes, found in vegetables and fruits</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 class="font-bold text-yellow-900 mb-2">🍊 Vitamins</h4>
              <p class="text-yellow-800 text-sm">Control body processes, found in vegetables and fruits</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 class="font-bold text-blue-900 mb-2">💧 Water</h4>
              <p class="text-blue-800 text-sm">Essential for all body functions</p>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-3">📊 Nutrient Classification:</h4>
            <div class="space-y-3">
              <div class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">•</span>
                <div>
                  <strong class="text-gray-900">Organic nutrients:</strong> Contain carbon (carbohydrates, lipids, proteins, vitamins)
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">•</span>
                <div>
                  <strong class="text-gray-900">Inorganic nutrients:</strong> Don't contain carbon (minerals, water)
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "nutrient-requirements",
      title: "📏 Nutrient Requirements",
      subtitle: "Dietary Reference Intakes and Standards",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Nutrient requirements vary</strong> with age, sex, activities, and general well-being.
            Special requirements exist for pregnancy and lactation.
          </p>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-4">📊 Dietary Reference Intakes (DRI):</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 mb-2">📈 EAR (Estimated Average Requirement)</h5>
                <p class="text-gray-700 text-sm">Average daily intake that meets needs of half the healthy people in a category</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 mb-2">🎯 RDA (Recommended Dietary Allowance)</h5>
                <p class="text-gray-700 text-sm">Average daily intake required to meet needs of 97-98% of healthy people</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 mb-2">✅ AI (Adequate Intake)</h5>
                <p class="text-gray-700 text-sm">Recommended intake based on observations when RDA isn't established</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 mb-2">⚠️ UL (Tolerable Upper Intake Level)</h5>
                <p class="text-gray-700 text-sm">Highest intake likely to pose no risk of adverse effects</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
            <p class="font-semibold text-green-900 mb-2">🌟 Balanced Diet</p>
            <p class="text-green-800">
              A balanced diet contains all nutrients in proportions necessary for proper body functioning.
              Combination of foods is often necessary to achieve balance.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "malnutrition-intro",
      title: "⚠️ Malnutrition in Children",
      subtitle: "Understanding Child Malnutrition",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Malnutrition remains one of the most common causes of morbidity and mortality</strong> among children worldwide.
            Approximately 9% of children below 5 years suffer from wasting and are at risk of death or severe impairment.
          </p>
          <p class="text-lg leading-relaxed">
            In 2008, of the 8.8 million global deaths of children under 5, 93% occurred in developing countries,
            with over a third attributed to underlying malnutrition.
          </p>

          <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4">
            <p class="font-semibold text-red-900 mb-2">🚨 Critical Statistics</p>
            <p class="text-red-800">
              Protein-Energy Malnutrition (PEM) affects about 100 children per moderate to severe degree worldwide.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "malnutrition-causes",
      title: "🔍 Causes of Child Malnutrition",
      subtitle: "Factors Contributing to Malnutrition",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Several factors contribute to childhood malnutrition. These can be broadly categorized as lack of education, poverty, and lack of food.
          </p>

          <div class="bg-orange-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-orange-900 mb-4">📋 Major Causes:</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-white p-3 rounded">🏠 Poverty/insufficient food production</div>
              <div class="bg-white p-3 rounded">🏘️ Poor living conditions</div>
              <div class="bg-white p-3 rounded">📚 Lack of education/ignorance</div>
              <div class="bg-white p-3 rounded">👶 Improper feeding during pregnancy</div>
              <div class="bg-white p-3 rounded">👩‍💼 Return of mother to work</div>
              <div class="bg-white p-3 rounded">👨‍👩‍👧‍👦 Poor family planning/multiple births</div>
              <div class="bg-white p-3 rounded">⚔️ War and famine</div>
              <div class="bg-white p-3 rounded">🦠 Contaminated food/infection</div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "kwashiorkor-marasmus",
      title: "👶 Kwashiorkor and Marasmus",
      subtitle: "Severe Forms of Protein-Energy Malnutrition",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The most severe forms of Protein-Energy Malnutrition (PEM) are <strong>marasmus</strong>, <strong>kwashiorkor</strong>,
            and <strong>marasmic kwashiorkor</strong>. These conditions result from deficient intake of energy and usually protein.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-3">🦴 Marasmus (Wet PEM)</h4>
              <p class="text-red-800 mb-3">Usually affects children less than 1 year old</p>
              <div class="bg-white p-4 rounded">
                <p class="font-semibold mb-2">Features:</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Low weight for age (usually below 60%)</li>
                  <li>• Little or no subcutaneous fat (loose skin)</li>
                  <li>• Looks like an old man</li>
                  <li>• No edema</li>
                  <li>• Usually hungry</li>
                </ul>
              </div>
            </div>

            <div class="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h4 class="font-bold text-yellow-900 mb-3">🌞 Kwashiorkor (Dry PEM)</h4>
              <p class="text-yellow-800 mb-3">Usually affects children 1-3 years old</p>
              <div class="bg-white p-4 rounded">
                <p class="font-semibold mb-2">Features:</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Growth retardation</li>
                  <li>• More subcutaneous fat than marasmic child</li>
                  <li>• Edema (mainly feet and lower legs)</li>
                  <li>• Moon-faced appearance</li>
                  <li>• Discolored, sparse hair</li>
                  <li>• Anaemic</li>
                  <li>• Loss of appetite</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p class="font-semibold text-blue-900 mb-2">💡 Prevention</p>
            <p class="text-blue-800">
              The best prevention is <strong>breastfeeding for the first 6 months</strong> followed by balanced weaning foods.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "breastfeeding",
      title: "🤱 Breastfeeding Benefits",
      subtitle: "Advantages of Breastfeeding for Child Health",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Breastfeeding is the best way to prevent childhood malnutrition.</strong> 🍼
            Breast milk is a complete food that provides optimal nutrition for infants.
          </p>

          <div class="bg-green-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-green-900 mb-4">🌟 Benefits of Breastfeeding:</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-white p-3 rounded flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                <span>Complete food for babies</span>
              </div>
              <div class="bg-white p-3 rounded flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                <span>Cheaper than formula</span>
              </div>
              <div class="bg-white p-3 rounded flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                <span>Has contraceptive properties</span>
              </div>
              <div class="bg-white p-3 rounded flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                <span>Helps mother return to shape</span>
              </div>
              <div class="bg-white p-3 rounded flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                <span>Always available at correct temperature</span>
              </div>
              <div class="bg-white p-3 rounded flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                <span>Anti-infective properties</span>
              </div>
              <div class="bg-white p-3 rounded flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                <span>Protects from allergic diseases</span>
              </div>
              <div class="bg-white p-3 rounded flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                <span>Promotes mother-child bonding</span>
              </div>
              <div class="bg-white p-3 rounded flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                <span>Environmentally friendly</span>
              </div>
              <div class="bg-white p-3 rounded flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                <span>Less chance of germ contamination</span>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 p-5 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-3">🛡️ Anti-Infective Properties:</h4>
            <ul class="space-y-2 text-indigo-800">
              <li><strong>Immunoglobulin A:</strong> Protects against bacteria like E. coli and viruses</li>
              <li><strong>Lactoferrin:</strong> Binds iron, making it unavailable for harmful microorganisms</li>
              <li><strong>Lysozymes:</strong> Break down harmful bacteria</li>
              <li><strong>White blood cells:</strong> Fight infections</li>
              <li><strong>Bifidus factor:</strong> Promotes growth of beneficial bacteria</li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-intro",
      title: "👥 Unit 2: Nutrition in Vulnerable Groups",
      subtitle: "Special Nutritional Needs Across Life Stages",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>This unit discusses nutrition in vulnerable groups</strong> including adolescents, adults, pregnant women, and the elderly.
            We'll also examine obesity as a major nutritional concern.
          </p>
          <p class="text-lg leading-relaxed">
            Each life stage has unique nutritional requirements. Understanding these needs helps promote health
            and prevent nutrition-related diseases.
          </p>

          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">🎯 Vulnerable Groups:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-purple-700 mb-2">👨‍🎓 Adolescents</h5>
                <p class="text-gray-700 text-sm">Rapid growth, high energy needs, developing healthy habits</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-pink-700 mb-2">🤰 Pregnant Women</h5>
                <p class="text-gray-700 text-sm">Fetal development, maternal health, lactation preparation</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-700 mb-2">👴 The Elderly</h5>
                <p class="text-gray-700 text-sm">Ageing changes, chronic diseases, maintaining independence</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-red-700 mb-2">⚖️ Obesity</h5>
                <p class="text-gray-700 text-sm">Energy imbalance, health risks, management strategies</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "adolescent-nutrition",
      title: "👨‍🎓 Nutrition in Adolescence",
      subtitle: "Meeting the Needs of Growing Teens",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Adolescence is a time of rapid growth</strong> and the primary dietary need is for energy,
            often reflected in a voracious appetite. However, nutrient intake can be compromised if calories
            come from sugary or fatty snacks.
          </p>

          <div class="bg-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 mb-4">🥗 Recommended Adolescent Diet:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🌾 Starchy Carbohydrates (Main energy source)</h5>
                <p class="text-gray-700 text-sm">Bread, corn meal, rice, pasta, breakfast cereals, couscous, potatoes</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🥕 Fruits and Vegetables (At least 5 portions daily)</h5>
                <p class="text-gray-700 text-sm">Fresh fruits and vegetables for vitamins and minerals</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🥛 Dairy Products (2-3 portions)</h5>
                <p class="text-gray-700 text-sm">Milk, yoghurt, cheese for calcium and protein</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🥩 Protein Sources (2 servings)</h5>
                <p class="text-gray-700 text-sm">Meat, fish, eggs, beans for growth and repair</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
            <p class="font-semibold text-green-900 mb-2">💧 Important Habits</p>
            <p class="text-green-800">
              Drink at least 8 glasses of water daily, eat regular meals including breakfast,
              and engage in regular physical exercise for overall fitness and bone development.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "adult-nutrition",
      title: "👩‍💼 Adult Nutrition",
      subtitle: "Maintaining Health Through Adulthood",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Adult nutritional needs focus on balancing energy intake with physical activity</strong>
            to avoid excess body fat accumulation. Diet and food choices affect wellness, fitness,
            weight management, and prevention of chronic diseases.
          </p>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-4">🎯 Adult Nutritional Considerations:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 mb-2">⚖️ Energy Balance</h5>
                <p class="text-gray-700 text-sm">Balance intake with activity level to prevent weight gain</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 mb-2">🦴 Calcium Intake</h5>
                <p class="text-gray-700 text-sm">Many adults don't get enough calcium, leading to osteoporosis risk</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-indigo-700 mb-2">🥗 Nutrient Density</h5>
                <p class="text-gray-700 text-sm">Choose nutrient-rich foods for optimal health benefits</p>
              </div>
            </div>
          </div>

          <p class="text-lg leading-relaxed">
            As teenagers reach adulthood, basal metabolic rate stabilizes, but energy requirements may
            need adjustment. Regular physical activity, especially resistance training, helps maintain
            muscle mass and prevent fat accumulation.
          </p>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "pregnancy-nutrition",
      title: "🤰 Nutrition During Pregnancy and Lactation",
      subtitle: "Supporting Fetal Development and Maternal Health",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>The fetus depends entirely on maternal nutrient intake for development.</strong> 🍼
            Well-nourished women have adequate reserves, but optimal nutrition is crucial throughout pregnancy.
          </p>

          <div class="bg-pink-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-pink-900 mb-4">🌟 Importance of Balanced Nutrition:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-pink-700 mb-2">🛡️ Optimizes Maternal Health</h5>
                <p class="text-gray-700 text-sm">Supports mother's well-being during pregnancy</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-pink-700 mb-2">🚫 Reduces Birth Defects</h5>
                <p class="text-gray-700 text-sm">Prevents developmental abnormalities</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-pink-700 mb-2">👶 Reduces Suboptimal Development</h5>
                <p class="text-gray-700 text-sm">Ensures proper fetal growth</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-pink-700 mb-2">🔮 Reduces Future Health Problems</h5>
                <p class="text-gray-700 text-sm">Prevents chronic diseases in offspring</p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p class="font-semibold text-blue-900 mb-2">📈 Nutrient Delivery</p>
            <p class="text-blue-800">
              Maternal intake, stores, and placental exchange determine nutrient delivery to the fetus.
              Nutrient deficiencies can cause growth retardation and organ development issues.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "elderly-nutrition",
      title: "👴 Nutrition in the Elderly",
      subtitle: "Ageing, Nutrition, and Health Maintenance",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>The elderly population is divided into three age groups:</strong> young elderly (65-74),
            elderly (75-84), and old old (85+). Ageing brings unique nutritional challenges.
          </p>

          <div class="bg-gray-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4">🎭 Ageing and Nutrition:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-gray-700 mb-2">📉 Decreased Energy Needs</h5>
                <p class="text-gray-600 text-sm">Lean body mass and metabolic rate decline with age</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-gray-700 mb-2">🦠 Increased Vulnerability</h5>
                <p class="text-gray-600 text-sm">Higher susceptibility to malnutrition and infections</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-gray-700 mb-2">🔄 Changed Nutrient Requirements</h5>
                <p class="text-gray-600 text-sm">Some nutrients needed more, others less</p>
              </div>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4">
            <p class="font-semibold text-red-900 mb-2">⚠️ Malnutrition Factors in Elderly:</p>
            <p class="text-red-800 mb-2">Low income, poor knowledge, loneliness, functional impairment, digestive problems</p>
          </div>

          <div class="bg-green-50 p-5 rounded-lg my-4">
            <h4 class="font-bold text-green-900 mb-3">🥗 Foods for Bowel Health:</h4>
            <ul class="space-y-2 text-green-800">
              <li>Fruits and vegetables</li>
              <li>Dried fruits</li>
              <li>Whole grain cereals</li>
              <li>Beans</li>
              <li>Plenty of fluid (30ml/kg)</li>
              <li>Yogurt</li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "obesity-intro",
      title: "⚖️ Understanding Obesity",
      subtitle: "Causes, Measurement, and Management",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Obesity is defined as excess body fat</strong> greater than 20% above average desirable weight.
            It results from an imbalance between energy intake and expenditure and is a risk factor for
            diabetes, heart disease, and certain cancers.
          </p>

          <div class="bg-red-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-red-900 mb-4">📏 BMI Categories:</h4>
            <div class="grid md:grid-cols-4 gap-3">
              <div class="bg-white p-3 rounded text-center">
                <div class="font-bold text-red-700">Underweight</div>
                <div class="text-sm text-gray-600">&lt; 18.5</div>
              </div>
              <div class="bg-white p-3 rounded text-center">
                <div class="font-bold text-green-700">Normal</div>
                <div class="text-sm text-gray-600">18.5-24.9</div>
              </div>
              <div class="bg-white p-3 rounded text-center">
                <div class="font-bold text-yellow-700">Overweight</div>
                <div class="text-sm text-gray-600">25-29.9</div>
              </div>
              <div class="bg-white p-3 rounded text-center">
                <div class="font-bold text-red-700">Obese</div>
                <div class="text-sm text-gray-600">≥ 30</div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "obesity-causes",
      title: "🔍 Causes of Obesity",
      subtitle: "Understanding Why Obesity Occurs",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Obesity results from energy imbalance</strong> where intake exceeds expenditure.
            Multiple factors contribute to this imbalance.
          </p>

          <div class="bg-orange-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-orange-900 mb-4">📋 Major Causes:</h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🍽️ Over Eating</h5>
                <p class="text-gray-700 text-sm">Excessive caloric intake exceeding energy needs</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">♀️ Sex Differences</h5>
                <p class="text-gray-700 text-sm">Common in women, especially after pregnancy; men have higher metabolic rate</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">📅 Age Factors</h5>
                <p class="text-gray-700 text-sm">Metabolic rate slows with age, requiring fewer calories</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🏙️ Environment/Culture</h5>
                <p class="text-gray-700 text-sm">High fat/sugar diets with low physical activity</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">😟 Emotional Factors</h5>
                <p class="text-gray-700 text-sm">Stress, boredom, anger leading to overeating</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🏃‍♀️ Lack of Physical Activity</h5>
                <p class="text-gray-700 text-sm">Sedentary lifestyle, insufficient exercise</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "obesity-management",
      title: "🎯 Managing Obesity",
      subtitle: "Strategies for Prevention and Treatment",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Obesity management involves dietary changes, increased physical activity, and lifestyle modifications.</strong>
            Prevention is always better than treatment.
          </p>

          <div class="bg-green-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-green-900 mb-4">🏥 Treatment Approaches:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">🥗 Natural Foods Focus</h5>
                <p class="text-gray-700 text-sm">Incorporate more natural, whole foods into diet</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">💧 Increased Water Intake</h5>
                <p class="text-gray-700 text-sm">Replace sugary drinks with water</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">🚫 Junk Food Elimination</h5>
                <p class="text-gray-700 text-sm">Cut out processed foods and sugary snacks</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">🏃‍♀️ Regular Exercise</h5>
                <p class="text-gray-700 text-sm">Incorporate physical activity several times weekly</p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p class="font-semibold text-blue-900 mb-2">📊 Calorie Management</p>
            <p class="text-blue-800">
              To lose 0.5 kg weekly, reduce net caloric intake by 500 calories daily (3500 calories weekly).
              Exercise affects calorie burning and net intake.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "summary",
      title: "📝 Chapter Summary",
      subtitle: "Key Concepts in Human Nutrition",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🎉 You've completed Chapter 11 on Human Nutrition: A Life Course Approach.
            Let's recap the essential concepts we've covered.
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">🍎 Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 mb-2">🥗 Nutrition Fundamentals</h5>
                <p class="text-gray-700 text-sm">Science of food-nutrient interactions, macro/micronutrients, dietary requirements</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">👶 Child Malnutrition</h5>
                <p class="text-gray-700 text-sm">PEM, marasmus, kwashiorkor, prevention through breastfeeding</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">👥 Life Stage Nutrition</h5>
                <p class="text-gray-700 text-sm">Adolescents, adults, pregnancy, elderly - each with unique needs</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-red-700 mb-2">⚖️ Obesity Management</h5>
                <p class="text-gray-700 text-sm">Causes, measurement (BMI), prevention, and treatment strategies</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Final Thoughts</p>
            <p class="text-yellow-800">
              Nutrition is truly a <strong>life course approach</strong>! From infancy through old age,
              proper nutrition supports health, prevents disease, and enhances quality of life.
              The choices we make today affect our health tomorrow. 🌟
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    }
  ]
};
