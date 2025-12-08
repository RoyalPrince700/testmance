// Chapter 7: Atmospheric Environment, Air Pollution and Public Health
// GNS 311 - Module 7

export const chapter7Content = {
  title: "Atmospheric Environment, Air Pollution and Public Health",
  author: "Adekola, F.A., and Abdul Raheem, A.M.O.",
  department: "Department of Industrial Chemistry and Department of Chemistry, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🌍 Welcome to Atmospheric Science!",
      subtitle: "Introduction",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome! 🌟 The atmosphere is our planet's life-support system, yet it's under constant threat
            from pollution. Understanding atmospheric environment and air pollution is crucial for protecting
            public health and ensuring a sustainable future.
          </p>
          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
            <p class="font-semibold text-teal-900 mb-2">💡 Did you know?</p>
            <p class="text-teal-800">
              The atmosphere acts as a protective blanket, filtering harmful UV radiation and maintaining
              Earth's temperature through the greenhouse effect. But human activities are disrupting this balance!
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter explores atmospheric segments, pollution sources and impacts, and their effects on
            public health. We'll examine everything from biomass burning to indoor air quality and volatile
            organic compounds that affect our daily lives.
          </p>
        </div>
      `,
      estimatedTime: 2
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
              <span>List the atmospheric segments and their characteristics</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain the importance of various atmospheric compositions</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Define pollutants and their classification</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Recall a scheme for the Formation of Photochemical Smog</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Classify pollution into various forms</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Assess the impact of air pollution on public health</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Evaluate the impact of biomass burning</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Assess health implications of indoor and outdoor air pollution</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Enumerate possible health effects of Volatile Organic Compounds (VOCs)</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit1-intro",
      title: "🌍 Unit 1: Environmental Segments",
      subtitle: "Introduction to Environmental Segments",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The environment consists of four major interconnected realms: lithosphere, hydrosphere, biosphere, and atmosphere.
            Each plays a vital role in maintaining Earth's delicate balance and supporting life.
          </p>
          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 class="font-bold text-blue-900 mb-2">🏔️ Lithosphere</h4>
              <p class="text-blue-800 text-sm">Earth's crust and upper mantle - provides soil and minerals</p>
            </div>
            <div class="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <h4 class="font-bold text-cyan-900 mb-2">🌊 Hydrosphere</h4>
              <p class="text-cyan-800 text-sm">All water bodies - essential for life and climate regulation</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 class="font-bold text-green-900 mb-2">🌱 Biosphere</h4>
              <p class="text-green-800 text-sm">All living organisms and their interactions</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 class="font-bold text-purple-900 mb-2">☁️ Atmosphere</h4>
              <p class="text-purple-800 text-sm">Gaseous envelope - air we breathe and climate control</p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit1-atmosphere",
      title: "☁️ The Atmosphere: Our Protective Shield",
      subtitle: "Atmospheric Layers and Composition",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The atmosphere extends about 500 km above Earth's surface and consists of layers based on temperature,
            altitude, and pressure. It protects life by filtering UV radiation and maintaining habitable temperatures.
          </p>

          <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">🌡️ Atmospheric Layers:</h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-700 mb-2">🏠 Troposphere (0-10 km)</h5>
                <p class="text-gray-700 text-sm">Contains 75% of atmospheric mass. Weather occurs here. Temperature decreases with altitude.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-green-700 mb-2">🛡️ Stratosphere (10-50 km)</h5>
                <p class="text-gray-700 text-sm">Contains ozone layer that absorbs UV radiation. Temperature increases with altitude.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-orange-700 mb-2">🌌 Mesosphere (50-80 km)</h5>
                <p class="text-gray-700 text-sm">Coldest layer where meteors burn up. Temperature decreases with altitude.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h5 class="font-bold text-red-700 mb-2">☀️ Thermosphere (80+ km)</h5>
                <p class="text-gray-700 text-sm">Very hot layer where auroras occur. Temperature increases dramatically.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🌍 Atmospheric Composition</p>
            <p class="text-yellow-800">
              Major gases: Nitrogen (78.09%), Oxygen (20.95%), Argon (0.93%). Trace gases include CO₂, ozone,
              and other greenhouse gases that regulate Earth's temperature through the greenhouse effect.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-intro",
      title: "⚠️ Unit 2: Pollution and Its Forms",
      subtitle: "Understanding Pollution",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Pollutants</strong> are substances introduced into the environment in amounts sufficient to cause
            adverse effects on humans, animals, vegetation, or materials. Air pollution is particularly dangerous
            because polluted air affects everyone through breathing.
          </p>

          <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4">
            <p class="font-semibold text-red-900 mb-2">🏭 Primary vs Secondary Pollutants</p>
            <div class="space-y-2 text-red-800">
              <p><strong>Primary pollutants:</strong> Enter atmosphere directly (CO, NOx, SOx, particulates)</p>
              <p><strong>Secondary pollutants:</strong> Form through chemical reactions (ozone, PAN, smog)</p>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 class="font-bold text-orange-900 mb-2">🧪 Chemical</h4>
              <p class="text-orange-800 text-sm">Organic vs inorganic pollutants</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 class="font-bold text-gray-900 mb-2">💧 Physical State</h4>
              <p class="text-gray-800 text-sm">Gaseous vs particulate pollutants</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 class="font-bold text-indigo-900 mb-2">🔄 Origin</h4>
              <p class="text-indigo-800 text-sm">Natural vs anthropogenic sources</p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-smog",
      title: "🌫️ Photochemical Smog Formation",
      subtitle: "The Chemistry of Urban Smog",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Photochemical smog forms when sunlight triggers chemical reactions between nitrogen oxides (NOx)
            and volatile organic compounds (VOCs) in the presence of oxygen. This creates secondary pollutants
            like ozone and other oxidants that are harmful to health.
          </p>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-4">🔬 Photochemical Reaction Steps:</h4>
            <div class="space-y-3">
              <div class="bg-white p-3 rounded">
                <strong class="text-indigo-700">1. Absorption:</strong> NO₂ absorbs UV radiation
              </div>
              <div class="bg-white p-3 rounded">
                <strong class="text-indigo-700">2. Primary Reactions:</strong> NO₂ → NO + O (atomic oxygen)
              </div>
              <div class="bg-white p-3 rounded">
                <strong class="text-indigo-700">3. Secondary Reactions:</strong> O + O₂ → O₃ (ozone formation)
              </div>
              <div class="bg-white p-3 rounded">
                <strong class="text-indigo-700">4. Chain Reactions:</strong> Ozone reacts with hydrocarbons → oxidants
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">📊 Daily Smog Pattern</p>
            <p class="text-yellow-800">
              Smog levels peak during midday due to sunlight intensity. NO decreases while NO₂ and oxidants increase,
              creating the characteristic brown haze over polluted cities.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit3-intro",
      title: "🏥 Unit 3: Air Quality and Public Health",
      subtitle: "Health Impacts of Air Pollution",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Air pollution causes significant health problems worldwide. The World Health Organization estimates
            that 800,000 people die annually from air pollution effects. Both indoor and outdoor pollution
            contribute to respiratory diseases, cardiovascular problems, and premature death.
          </p>

          <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 my-4">
            <h4 class="font-bold text-red-900 mb-4">⚕️ Major Health Impacts:</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-white p-3 rounded">
                <strong>Respiratory:</strong> Asthma, bronchitis, lung cancer
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Cardiovascular:</strong> Heart disease, stroke
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Neurological:</strong> Cognitive impairment, Alzheimer's
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Cancer:</strong> Lung cancer, leukemia
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit3-biomass",
      title: "🔥 Biomass Burning: A Hidden Threat",
      subtitle: "Impact of Biomass Burning on Health and Climate",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Biomass burning releases greenhouse gases, particulates, and toxic compounds into the atmosphere.
            In sub-Saharan Africa, humans are responsible for about 90% of biomass burning through land clearing,
            agriculture, and cooking practices.
          </p>

          <div class="bg-orange-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-orange-900 mb-4">🌿 What is Biomass Burning?</h4>
            <p class="text-orange-800 mb-3">
              Burning of living and dead vegetation including forest fires, agricultural waste burning,
              and fuelwood combustion for cooking and heating.
            </p>
            <div class="bg-white p-4 rounded">
              <strong class="text-orange-700">Key Emissions:</strong>
              <ul class="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>CO₂ and other greenhouse gases</li>
                <li>Particulate matter (PM₁₀, PM₂.₅)</li>
                <li>Carbon monoxide (CO)</li>
                <li>Nitrogen oxides (NOx)</li>
                <li>Volatile organic compounds (VOCs)</li>
              </ul>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4">
            <p class="font-semibold text-red-900 mb-2">🏥 Health Consequences</p>
            <p class="text-red-800">
              Biomass burning particulates can penetrate deep into lungs, causing respiratory problems,
              cardiovascular disease, and premature death. Children and the elderly are most vulnerable.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit3-indoor",
      title: "🏠 Indoor Air Pollution",
      subtitle: "The Hidden Danger in Our Homes",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            People spend about 90% of their time indoors, where air pollution can be 2-5 times higher than outdoors.
            Cooking with solid fuels (wood, dung, coal) is the largest source of indoor air pollution globally.
          </p>

          <div class="bg-purple-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-purple-900 mb-4">🏭 Major Indoor Pollutants:</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-white p-3 rounded">
                <strong>Particulate Matter:</strong> From cooking, smoking
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Carbon Monoxide:</strong> Incomplete combustion
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Nitrogen Oxides:</strong> Gas cooking, tobacco
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Volatile Compounds:</strong> Paints, cleaners, furniture
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
            <p class="font-semibold text-green-900 mb-2">💡 Solutions for Better Indoor Air</p>
            <ul class="list-disc list-inside space-y-1 text-green-800">
              <li>Use clean cooking fuels (LPG, electricity)</li>
              <li>Ensure proper ventilation during cooking</li>
              <li>Avoid smoking indoors</li>
              <li>Use exhaust fans and chimneys</li>
              <li>Choose low-VOC paints and materials</li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit4-intro",
      title: "🧪 Unit 4: Volatile Organic Compounds (VOCs)",
      subtitle: "Understanding VOCs and Their Health Effects",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Volatile Organic Compounds (VOCs) are organic chemicals that easily vaporize at room temperature.
            They contribute to photochemical smog formation and can cause serious health problems, especially
            in indoor environments where concentrations can be 100-1000 times higher than outdoors.
          </p>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-4">
            <p class="font-semibold text-indigo-900 mb-2">🔬 VOC Definition</p>
            <p class="text-indigo-800">
              Organic compounds with boiling points ≤ 250°C at standard atmospheric pressure.
              Includes solvents, paints, cleaning agents, and emissions from printers and copiers.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit4-health-effects",
      title: "⚕️ Health Effects of VOCs",
      subtitle: "VOCs and Human Health",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            VOCs can cause both short-term and long-term health effects. Some VOCs like benzene are
            carcinogenic, while others cause irritation, organ damage, or neurological problems.
          </p>

          <div class="bg-red-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-red-900 mb-4">🚨 Common Health Effects:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-red-700 mb-2">Short-term Effects</h5>
                <ul class="list-disc list-inside text-sm space-y-1">
                  <li>Eye, nose, and throat irritation</li>
                  <li>Headaches and dizziness</li>
                  <li>Nausea and fatigue</li>
                  <li>Allergic skin reactions</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-red-700 mb-2">Long-term Effects</h5>
                <ul class="list-disc list-inside text-sm space-y-1">
                  <li>Cancer (benzene, formaldehyde)</li>
                  <li>Liver and kidney damage</li>
                  <li>Reproductive problems</li>
                  <li>Neurological disorders</li>
                  <li>Respiratory diseases</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p class="font-semibold text-blue-900 mb-2">📊 VOC Sources and Prevention</p>
            <div class="space-y-2 text-blue-800">
              <p><strong>Sources:</strong> Paints, solvents, cleaning products, tobacco smoke, vehicle exhaust</p>
              <p><strong>Prevention:</strong> Use water-based paints, ensure ventilation, avoid smoking, choose low-VOC products</p>
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
            Congratulations! 🎉 You've completed Chapter 7 on Atmospheric Environment, Air Pollution, and Public Health.
            Let's review the key concepts that protect our planet and health.
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 mb-2">1. Atmospheric Structure</h5>
                <p class="text-gray-700 text-sm">Four layers (troposphere, stratosphere, mesosphere, thermosphere) with distinct temperature profiles and functions</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">2. Pollution Types</h5>
                <p class="text-gray-700 text-sm">Primary and secondary pollutants, photochemical smog formation, and health impacts</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">3. Biomass Burning</h5>
                <p class="text-gray-700 text-sm">Major source of greenhouse gases and particulates, especially in developing regions</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">4. Indoor Air Quality</h5>
                <p class="text-gray-700 text-sm">Critical health concern with solutions like clean cooking fuels and ventilation</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">5. VOCs and Health</h5>
                <p class="text-gray-700 text-sm">Volatile compounds causing irritation, cancer, and organ damage with prevention strategies</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🌍 Environmental Action</p>
            <p class="text-yellow-800">
              Understanding atmospheric pollution empowers you to make informed choices. Use clean energy,
              support sustainable practices, and advocate for better air quality regulations. Your actions
              can protect public health and preserve our atmosphere for future generations!
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    }
  ]
};
