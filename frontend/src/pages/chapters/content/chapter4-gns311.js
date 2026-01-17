// Chapter 4: Conservation of Conventional and Renewable Energy Sources and Their Conversion Techniques
// GNS 311 - Module 4

export const chapter4Content = {
  title: "Conservation of Conventional and Renewable Energy Sources and Their Conversion Techniques",
  author: "Omosewo, E.O., Olaoye J.O., Ajibola, T.B., and Ajimotokan, H.A.",
  department: "Department of Science Education, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🎯 Welcome to Energy Conservation!",
      subtitle: "Introduction",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome! 🌟 Energy is the lifeblood of our modern world. From the electricity that powers our homes to
            the fuel that drives our vehicles, energy touches every aspect of our lives. But what happens when
            traditional energy sources become scarce or environmentally harmful?
          </p>
          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">💡 Did you know?</p>
            <p class="text-teal-800 dark:text-teal-200">
              Every minute, enough energy arrives at Earth from the sun to meet our global energy demands for an entire year!
              The challenge is harnessing this power sustainably and efficiently.
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter explores the fascinating world of energy conservation, examining both conventional and
            renewable sources. You'll learn about solar power, wind energy, hydroelectricity, biomass, and more.
            Get ready to discover how we can power our future while protecting our planet! ⚡
          </p>
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
          <p class="text-lg font-semibold mb-4">By the end of this module, you'll be able to:</p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Identify sources and types of natural and conventional energy</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Differentiate between natural, conventional, renewable, and non-renewable energy sources</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Understand concepts of energy sources and conservation methods</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explore diverse biomass resources and their applications</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Learn conversion techniques for renewable energy sources</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Evaluate advantages of biomass and biofuel production methods</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-intro",
      title: "📚 Unit 1: Conservation of Natural and Artificial Energy Resources",
      subtitle: "Introduction to Energy Conservation",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Energy conservation is more than just turning off lights—it's about understanding our energy resources
            and using them wisely. This unit explores the fundamental concepts of energy, its forms, and how we
            can preserve our energy future.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400 p-4 my-4">
            <p class="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔍 Key Focus</p>
            <p class="text-blue-800 dark:text-blue-200">
              We'll examine both renewable sources (solar, wind, hydro) and non-renewable sources (fossil fuels, nuclear)
              to understand their roles in our energy landscape.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-energy-review",
      title: "⚡ Energy and Its Conversion",
      subtitle: "Review of Energy and Its Conversion",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Energy is the ability to do work, and it manifests in many forms. Understanding energy conversion
            is crucial for conservation because it shows us how efficiently we're using our resources.
          </p>

          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🔋 Mechanical Energy</h4>
              <div class="space-y-2">
                <div class="bg-white dark:bg-gray-700 p-3 rounded">
                  <strong class="text-green-800 dark:text-green-200">Kinetic Energy:</strong> Energy of motion (½mv²)
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded">
                  <strong class="text-green-800 dark:text-green-200">Potential Energy:</strong> Stored energy due to position
                </div>
              </div>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">⚡ Other Energy Forms</h4>
              <ul class="space-y-2 text-purple-800 dark:text-purple-200">
                <li>• <strong>Electrical:</strong> Flow of electric charge</li>
                <li>• <strong>Chemical:</strong> Stored in molecular bonds</li>
                <li>• <strong>Heat:</strong> Thermal energy transfer</li>
                <li>• <strong>Nuclear:</strong> Energy from atomic nuclei</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">💡 Energy Conversion Examples</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              From chemical energy in gasoline → mechanical energy in car engines<br>
              From potential energy in water → kinetic energy in hydroelectric dams<br>
              From solar energy → electrical energy in photovoltaic cells
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit1-natural-sources",
      title: "🌞 Natural Energy Sources",
      subtitle: "Solar, Wind, Hydro, and Tidal Energy",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Nature provides us with abundant renewable energy sources. Let's explore the most important ones
            and understand how they work and their practical applications.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400">
              <h4 class="font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">☀️</span>
                Solar Energy
              </h4>
              <p class="text-yellow-800 dark:text-yellow-200 mb-3">
                The sun provides more energy in one hour than humanity uses in a year! Solar energy can be
                converted through photovoltaic cells or solar thermal systems.
              </p>
              <div class="grid md:grid-cols-2 gap-3">
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Advantages:</strong> Free, clean, reliable in sunny climates
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Disadvantages:</strong> Intermittent, high initial costs
                </div>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🌪️</span>
                Wind Energy
              </h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3">
                Wind turbines convert kinetic energy from moving air into electrical energy. Modern wind farms
                can power entire communities and are becoming increasingly efficient.
              </p>
              <div class="grid md:grid-cols-2 gap-3">
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Advantages:</strong> No fuel costs, land can be used for farming
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Disadvantages:</strong> Variable, visual impact, noise
                </div>
              </div>
            </div>

            <div class="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
              <h4 class="font-bold text-cyan-900 mb-3 flex items-center">
                <span class="text-2xl mr-2">💧</span>
                Hydroelectricity
              </h4>
              <p class="text-cyan-800 mb-3">
                Gravitational potential energy from water stored in dams is converted to electrical energy.
                Hydro power provides reliable baseload power and can respond quickly to demand changes.
              </p>
              <div class="grid md:grid-cols-2 gap-3">
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Advantages:</strong> Reliable, long lifespan, no fuel costs
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Disadvantages:</strong> Environmental impact, limited sites
                </div>
              </div>
            </div>

            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 dark:border-indigo-400">
              <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🌊</span>
                Tidal Energy
              </h4>
              <p class="text-indigo-800 dark:text-indigo-200 mb-3">
                Ocean tides create predictable energy that can be harnessed through tidal barrages or underwater
                turbines. While limited in application, tidal energy is highly reliable and predictable.
              </p>
              <div class="grid md:grid-cols-2 gap-3">
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Advantages:</strong> Predictable, no emissions, low maintenance
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Disadvantages:</strong> Limited sites, high costs, environmental concerns
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 8
    },
    {
      id: "unit1-conventional-sources",
      title: "🏭 Conventional and Non-Renewable Energy",
      subtitle: "Fossil Fuels and Nuclear Energy",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            While renewable sources are gaining prominence, conventional energy sources still dominate our
            energy landscape. Understanding their advantages, disadvantages, and environmental impacts is
            crucial for informed energy policy decisions.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-500">
              <h4 class="font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <span class="text-2xl mr-2">⛽</span>
                Fossil Fuels (Coal, Oil, Natural Gas)
              </h4>
              <p class="text-gray-800 mb-3">
                Formed from ancient organic matter over millions of years, fossil fuels provide about 80% of
                the world's energy. They include coal (28%), oil (40%), and natural gas (20%).
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-green-100 p-3 rounded">
                  <strong class="text-green-800 dark:text-green-200">Advantages:</strong>
                  <ul class="text-sm text-green-700 dark:text-green-300 mt-1">
                    <li>• High energy density</li>
                    <li>• Reliable supply chains</li>
                    <li>• Established infrastructure</li>
                    <li>• Cost-effective</li>
                  </ul>
                </div>
                <div class="bg-red-100 p-3 rounded">
                  <strong class="text-red-800 dark:text-red-200">Disadvantages:</strong>
                  <ul class="text-sm text-red-700 dark:text-red-300 mt-1">
                    <li>• CO₂ emissions & climate change</li>
                    <li>• Finite resources</li>
                    <li>• Environmental pollution</li>
                    <li>• Price volatility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">☢️</span>
                Nuclear Energy
              </h4>
              <p class="text-red-800 dark:text-red-200 mb-3">
                Nuclear power generates electricity through controlled nuclear reactions. It provides low-carbon
                baseload power but comes with unique challenges including radioactive waste management.
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-green-100 p-3 rounded">
                  <strong class="text-green-800 dark:text-green-200">Advantages:</strong>
                  <ul class="text-sm text-green-700 dark:text-green-300 mt-1">
                    <li>• Low CO₂ emissions</li>
                    <li>• High energy density</li>
                    <li>• Reliable baseload power</li>
                    <li>• Small land footprint</li>
                  </ul>
                </div>
                <div class="bg-red-100 p-3 rounded">
                  <strong class="text-red-800 dark:text-red-200">Disadvantages:</strong>
                  <ul class="text-sm text-red-700 dark:text-red-300 mt-1">
                    <li>• Radioactive waste disposal</li>
                    <li>• High capital costs</li>
                    <li>• Nuclear proliferation risks</li>
                    <li>• Public safety concerns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 class="font-bold text-orange-900 mb-3 flex items-center">
                <span class="text-2xl mr-2">🌋</span>
                Geothermal Energy
              </h4>
              <p class="text-orange-800 mb-3">
                Heat from Earth's core provides continuous geothermal energy. While geographically limited,
                geothermal power plants offer reliable, renewable baseload power with minimal environmental impact.
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-green-100 p-3 rounded">
                  <strong class="text-green-800 dark:text-green-200">Advantages:</strong>
                  <ul class="text-sm text-green-700 dark:text-green-300 mt-1">
                    <li>• Renewable & reliable</li>
                    <li>• Low environmental impact</li>
                    <li>• Small land footprint</li>
                    <li>• Baseload capability</li>
                  </ul>
                </div>
                <div class="bg-red-100 p-3 rounded">
                  <strong class="text-red-800 dark:text-red-200">Disadvantages:</strong>
                  <ul class="text-sm text-red-700 dark:text-red-300 mt-1">
                    <li>• Location-specific</li>
                    <li>• High exploration costs</li>
                    <li>• Potential seismic activity</li>
                    <li>• Water quality concerns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 7
    },
    {
      id: "unit1-conservation",
      title: "🛡️ Energy Conservation Principles",
      subtitle: "Conservation of Energy and Its Importance",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Energy conservation follows the first law of thermodynamics: <strong>energy cannot be created or
            destroyed, only transformed</strong>. Understanding this principle helps us use energy more efficiently
            and sustainably.
          </p>

          <div class="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-teal-900 dark:text-teal-100 mb-3">⚖️ Law of Conservation of Energy</h4>
            <p class="text-teal-800 dark:text-teal-200 mb-3">
              The total energy in an isolated system remains constant. Energy can change forms but never disappears.
            </p>
            <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <p class="font-semibold mb-2">Example: Power Plant Energy Flow</p>
              <div class="text-sm text-gray-700 dark:text-gray-300">
                Chemical Energy (Coal) → Heat Energy → Mechanical Energy (Turbine) → Electrical Energy<br>
                <em>Efficiency: Only ~35-40% of input energy becomes useful electricity</em>
              </div>
            </div>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 dark:border-red-400 p-4 my-4">
            <p class="font-semibold text-red-900 dark:text-red-100 mb-2">🌍 Why Conservation Matters</p>
            <div class="space-y-2 text-red-800 dark:text-red-200">
              <p><strong>Environmental Impact:</strong> Reduced fossil fuel use means less greenhouse gases</p>
              <p><strong>Economic Benefits:</strong> Lower energy costs and reduced dependence on imports</p>
              <p><strong>Resource Preservation:</strong> Extends the life of finite energy resources</p>
              <p><strong>Energy Security:</strong> Reduces vulnerability to energy supply disruptions</p>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">🔧 Conservation Strategies</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Technical Solutions:</h5>
                <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Energy-efficient appliances</li>
                  <li>• Smart building design</li>
                  <li>• Improved industrial processes</li>
                  <li>• Renewable energy adoption</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Behavioral Changes:</h5>
                <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Reducing unnecessary consumption</li>
                  <li>• Using public transportation</li>
                  <li>• Proper equipment maintenance</li>
                  <li>• Energy-conscious lifestyle choices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit1-conversion-devices",
      title: "🔧 Energy Conversion Technologies",
      subtitle: "Devices for Renewable and Non-Renewable Energy",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Converting natural energy sources into usable forms requires specialized technologies. Let's explore
            the key conversion devices and systems that make renewable energy practical and efficient.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400">
              <h4 class="font-bold text-yellow-900 dark:text-yellow-100 mb-3">☀️ Solar Energy Conversion</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white dark:bg-gray-700 p-4 rounded">
                  <h5 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Photovoltaic (PV) Systems</h5>
                  <p class="text-sm text-gray-700 dark:text-gray-300">
                    Solar cells directly convert sunlight into electricity using semiconductor materials.
                    Efficiency ranges from 15-22% for commercial panels.
                  </p>
                </div>
                <div class="bg-white dark:bg-gray-700 p-4 rounded">
                  <h5 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Solar Thermal Systems</h5>
                  <p class="text-sm text-gray-700 dark:text-gray-300">
                    Concentrated solar power (CSP) uses mirrors to focus sunlight, heating fluids to produce
                    steam for electricity generation.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">🌪️ Wind Energy Systems</h4>
              <div class="space-y-3">
                <p class="text-blue-800 dark:text-blue-200">
                  Wind turbines convert kinetic energy from moving air into mechanical energy, then electricity.
                  Modern turbines can reach heights of 100+ meters with rotor diameters over 150 meters.
                </p>
                <div class="bg-white dark:bg-gray-700 p-4 rounded">
                  <h5 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Components:</h5>
                  <ul class="text-sm text-gray-700 dark:text-gray-300 grid md:grid-cols-2 gap-2">
                    <li>• Rotor blades (aerodynamic design)</li>
                    <li>• Nacelle (housing generator)</li>
                    <li>• Tower (elevates turbine)</li>
                    <li>• Power electronics & controls</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
              <h4 class="font-bold text-cyan-900 mb-3">💧 Hydropower Systems</h4>
              <div class="space-y-3">
                <p class="text-cyan-800">
                  Hydroelectric systems convert potential energy in water into kinetic energy, then electricity
                  through turbines. They can be large-scale dams or small run-of-river installations.
                </p>
                <div class="bg-white dark:bg-gray-700 p-4 rounded">
                  <h5 class="font-semibold text-cyan-800 mb-2">Types of Turbines:</h5>
                  <div class="grid md:grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <div class="bg-cyan-100 p-2 rounded text-center">Pelton<br/>(High head)</div>
                    <div class="bg-cyan-100 p-2 rounded text-center">Francis<br/>(Medium head)</div>
                    <div class="bg-cyan-100 p-2 rounded text-center">Kaplan<br/>(Low head)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit2-intro",
      title: "🌱 Unit 2: Biomass as Sustainable Renewable Energy",
      subtitle: "Introduction to Biomass Energy",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Biomass represents a bridge between our energy needs and environmental responsibility. As a renewable
            resource derived from organic matter, biomass offers unique advantages in the transition to sustainable
            energy systems.
          </p>
          <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 dark:border-green-400 p-4 my-4">
            <p class="font-semibold text-green-900 dark:text-green-100 mb-2">🌿 What is Biomass?</p>
            <p class="text-green-800 dark:text-green-200">
              Biomass refers to all organic matter that can be used as fuel. It includes plant materials,
              agricultural waste, forestry residues, and even some municipal wastes. Biomass is essentially
              stored solar energy in chemical form.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit2-biomass-sources",
      title: "🌾 Biomass Resources and Applications",
      subtitle: "Sources and Types of Biomass Resources",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Biomass comes from diverse sources and can be processed through various methods to produce energy.
            Understanding these sources helps us appreciate biomass's versatility and potential.
          </p>

          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🌱 Plant-Based Biomass</h4>
              <ul class="space-y-2 text-green-800 dark:text-green-200">
                <li><strong>Energy Crops:</strong> Fast-growing trees (poplars, willows)</li>
                <li><strong>Agricultural Residues:</strong> Corn stalks, rice husks, sugarcane bagasse</li>
                <li><strong>Forestry Waste:</strong> Sawdust, timber slash, mill scraps</li>
                <li><strong>Algae:</strong> High-yield aquatic biomass</li>
              </ul>
            </div>

            <div class="bg-brown-50 p-5 rounded-lg border border-brown-200">
              <h4 class="font-bold text-brown-900 mb-3">🏭 Waste-Derived Biomass</h4>
              <ul class="space-y-2 text-brown-800">
                <li><strong>Municipal Solid Waste:</strong> Paper, yard clippings, food waste</li>
                <li><strong>Agricultural Waste:</strong> Manure, crop residues</li>
                <li><strong>Industrial Waste:</strong> Food processing byproducts</li>
                <li><strong>Landfill Gas:</strong> Methane from decomposing waste</li>
              </ul>
            </div>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">🔄 Biomass Energy Applications</h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">
                <div class="text-2xl mb-1">🔥</div>
                <strong>Direct Combustion</strong><br/>
                <span class="text-sm text-gray-600">Heat generation</span>
              </div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">
                <div class="text-2xl mb-1">⚡</div>
                <strong>Electricity Generation</strong><br/>
                <span class="text-sm text-gray-600">Power plants</span>
              </div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">
                <div class="text-2xl mb-1">🚗</div>
                <strong>Biofuels</strong><br/>
                <span class="text-sm text-gray-600">Transportation fuel</span>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-conversion-processes",
      title: "🔬 Biomass Conversion Technologies",
      subtitle: "Transformation of Biomass to Renewable Energy",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Converting biomass into usable energy involves several sophisticated processes. Each method has
            unique advantages and produces different energy products suitable for various applications.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 class="font-bold text-orange-900 mb-3">🔥 Combustion</h4>
              <p class="text-orange-800 mb-3">
                The most straightforward method where biomass is burned to produce heat energy. This heat can
                be used directly or converted to electricity through steam turbines.
              </p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <strong class="text-orange-800">Process:</strong> Biomass + Air → Heat + Ash + Fuel Gases<br/>
                <strong class="text-orange-800">Products:</strong> Heat energy, steam, electricity
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">🌡️ Pyrolysis</h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3">
                Heating biomass at high temperatures (540-1100°C) in the absence of oxygen to break down
                organic materials into complex mixtures of liquids, gases, and solids.
              </p>
              <div class="grid md:grid-cols-2 gap-3">
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Temperature Zones:</strong><br/>
                  0-170°C: Moisture evaporation<br/>
                  170-270°C: Gas evolution<br/>
                  270-400°C: Methanol production<br/>
                  400-500°C: Charcoal formation
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Products:</strong><br/>
                  • Bio-oil (liquid fuel)<br/>
                  • Syngas (combustible gas)<br/>
                  • Biochar (soil amendment)
                </div>
              </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-500">
              <h4 class="font-bold text-gray-900 dark:text-white mb-3">⚗️ Gasification</h4>
              <p class="text-gray-800 mb-3">
                Converting biomass into combustible gases at high temperatures (1000°C) with controlled oxygen.
                The resulting producer gas can be used for heating, electricity generation, or chemical synthesis.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-gray-800 mb-2">Producer Gas Composition:</strong>
                <div class="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div>Carbon Monoxide: 20-22%</div>
                  <div>Hydrogen: 15-18%</div>
                  <div>Methane: 2-4%</div>
                  <div>Carbon Dioxide: 9-11%</div>
                  <div>Nitrogen: 50-53%</div>
                </div>
              </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🧪 Anaerobic Digestion</h4>
              <p class="text-green-800 dark:text-green-200 mb-3">
                Biological process where microorganisms break down organic matter in the absence of oxygen,
                producing biogas (methane and carbon dioxide) and nutrient-rich digestate.
              </p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <strong class="text-green-800 dark:text-green-200">Biogas Composition:</strong> ~60% Methane, ~40% CO₂<br/>
                <strong class="text-green-800 dark:text-green-200">Applications:</strong> Cooking, lighting, electricity generation, vehicle fuel
              </div>
            </div>

            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400">
              <h4 class="font-bold text-yellow-900 dark:text-yellow-100 mb-3">🍷 Fermentation & Distillation</h4>
              <p class="text-yellow-800 dark:text-yellow-200 mb-3">
                Converting sugars in biomass into ethanol through yeast fermentation, followed by distillation
                to produce biofuel. This process creates transportation fuel alternatives.
              </p>
              <div class="grid md:grid-cols-2 gap-3">
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Feedstocks:</strong><br/>
                  • Sugary: Sugarcane, sugar beets<br/>
                  • Starchy: Corn, wheat, potatoes<br/>
                  • Cellulosic: Agricultural waste
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded text-sm">
                  <strong>Process Steps:</strong><br/>
                  1. Pretreatment<br/>
                  2. Fermentation<br/>
                  3. Distillation<br/>
                  4. Purification
                </div>
              </div>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">🛢️ Transesterification</h4>
              <p class="text-purple-800 dark:text-purple-200 mb-3">
                Chemical process that converts vegetable oils, animal fats, or waste oils into biodiesel through
                reaction with alcohol in the presence of a catalyst.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-purple-800 dark:text-purple-200 mb-2">Biodiesel Production Process:</strong>
                <ol class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>1. Feedstock pretreatment (remove contaminants)</li>
                  <li>2. Transesterification reaction (oil + alcohol → biodiesel + glycerin)</li>
                  <li>3. Product separation and purification</li>
                  <li>4. Glycerin recovery and treatment</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 8
    },
    {
      id: "unit2-advantages",
      title: "✅ Advantages of Biomass Energy",
      subtitle: "Benefits of Biomass as Energy Source",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Biomass energy offers numerous advantages that make it an attractive option for sustainable energy
            production. Its benefits span environmental, economic, and social dimensions.
          </p>

          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
                <span class="text-2xl mr-2">🌍</span>
                Environmental Benefits
              </h4>
              <ul class="space-y-3 text-green-800 dark:text-green-200">
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">✓</span>
                  <span><strong>Carbon Neutral:</strong> Plants absorb CO₂ during growth, balancing emissions</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">✓</span>
                  <span><strong>Reduced Waste:</strong> Converts waste products into valuable energy</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">✓</span>
                  <span><strong>Soil Health:</strong> Biochar improves soil fertility and water retention</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">✓</span>
                  <span><strong>Biodiversity:</strong> Can enhance habitats when managed sustainably</span>
                </li>
              </ul>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                <span class="text-2xl mr-2">💰</span>
                Economic Benefits
              </h4>
              <ul class="space-y-3 text-blue-800 dark:text-blue-200">
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">✓</span>
                  <span><strong>Job Creation:</strong> Labor-intensive cultivation and processing</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">✓</span>
                  <span><strong>Rural Development:</strong> Income diversification for farmers</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">✓</span>
                  <span><strong>Energy Independence:</strong> Reduces reliance on imported fuels</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2">✓</span>
                  <span><strong>Waste Management:</strong> Converts disposal problems into revenue</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400 p-4 my-4">
            <p class="font-semibold text-purple-900 dark:text-purple-100 mb-2">🔄 Additional Advantages</p>
            <div class="grid md:grid-cols-3 gap-4 text-purple-800 dark:text-purple-200">
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">
                <strong>Versatility</strong><br/>
                <span class="text-sm">Multiple conversion pathways and end uses</span>
              </div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">
                <strong>Reliability</strong><br/>
                <span class="text-sm">Can provide baseload power when managed properly</span>
              </div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">
                <strong>Scalability</strong><br/>
                <span class="text-sm">From small household systems to large power plants</span>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-biofuel-production",
      title: "🚗 Biofuel Production and Food Security",
      subtitle: "Production of Biofuel and Food Security Issues",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            While biofuels offer environmental and energy security benefits, their production raises important
            questions about food security and land use. Understanding these challenges is crucial for
            sustainable biofuel development.
          </p>

          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 dark:border-red-400 p-4 my-4">
            <p class="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Food vs. Fuel Debate</p>
            <p class="text-red-800 dark:text-red-200">
              The primary concern with biofuels is the potential competition between food crops and energy crops
              for land, water, and other resources. This can drive up food prices and create food shortages.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-orange-50 p-5 rounded-lg border border-orange-200">
              <h4 class="font-bold text-orange-900 mb-3">🍞 Food Security Challenges</h4>
              <ul class="space-y-2 text-orange-800 text-sm">
                <li>• Land use competition between food and energy crops</li>
                <li>• Rising food prices due to increased demand for biofuels</li>
                <li>• Water resource competition in water-scarce regions</li>
                <li>• Potential reduction in food production capacity</li>
                <li>• Impact on smallholder farmers and vulnerable populations</li>
                <li>• Changes in agricultural employment patterns</li>
              </ul>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🌱 Mitigation Strategies</h4>
              <ul class="space-y-2 text-green-800 dark:text-green-200 text-sm">
                <li>• Use of marginal lands for energy crop cultivation</li>
                <li>• Development of second-generation biofuels from waste</li>
                <li>• Improved agricultural productivity and efficiency</li>
                <li>• Integrated food-energy systems planning</li>
                <li>• Support for smallholder farmers and sustainable practices</li>
                <li>• Policy frameworks balancing energy and food needs</li>
              </ul>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">🔬 Second-Generation Biofuels</h4>
            <p class="text-blue-800 dark:text-blue-200 mb-3">
              Advanced biofuels produced from non-food biomass sources offer a solution to food security concerns
              while providing sustainable energy alternatives.
            </p>
            <div class="grid md:grid-cols-3 gap-3">
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">
                <strong class="text-blue-800 dark:text-blue-200">Cellulosic Ethanol</strong><br/>
                <span class="text-sm text-gray-600">From agricultural waste</span>
              </div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">
                <strong class="text-blue-800 dark:text-blue-200">Algae Biodiesel</strong><br/>
                <span class="text-sm text-gray-600">From aquatic biomass</span>
              </div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">
                <strong class="text-blue-800 dark:text-blue-200">Waste-to-Fuel</strong><br/>
                <span class="text-sm text-gray-600">From municipal waste</span>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "summary",
      title: "📝 Chapter Summary",
      subtitle: "What We've Learned About Energy Conservation",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🎉 You've completed Chapter 4 on Conservation of Conventional and Renewable Energy
            Sources and Their Conversion Techniques. Let's review the key concepts we've explored.
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4 text-xl">🔑 Key Takeaways:</h4>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">1. Energy Conservation Fundamentals</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Energy cannot be created or destroyed—only converted between forms. Understanding this law helps us use energy more efficiently.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">2. Renewable Energy Sources</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Solar, wind, hydro, tidal, and biomass offer sustainable alternatives to fossil fuels, each with unique advantages and conversion technologies.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">3. Biomass as a Versatile Resource</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Biomass can be converted through combustion, pyrolysis, gasification, fermentation, and other processes to produce heat, electricity, and biofuels.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">4. Balancing Energy and Food Security</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">While biofuels offer environmental benefits, we must carefully manage their production to avoid compromising food security and agricultural sustainability.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🚀 Looking Forward</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Energy conservation and renewable technologies are rapidly evolving. As we transition to a
              sustainable energy future, understanding these concepts will help you make informed decisions
              about energy use and environmental stewardship. The choices we make today will shape our
              planet's energy landscape for generations to come! 🌍⚡
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "self-assessment",
      title: "❓ Self-Assessment Questions",
      subtitle: "Test Your Understanding",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-4">📝 Self-Study Questions</h4>

            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">1. What is the difference between renewable and non-renewable energy sources?</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">Renewable sources can be replenished naturally and are virtually inexhaustible, while non-renewable sources are finite and will eventually be depleted.</p>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">2. List four advantages of biomass as an energy source.</p>
                <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                  <li>• Carbon neutral when sustainably managed</li>
                  <li>• Reduces waste through utilization of byproducts</li>
                  <li>• Provides rural economic development opportunities</li>
                  <li>• Versatile conversion pathways (heat, electricity, biofuels)</li>
                </ul>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">3. State five methods for transforming biomass to renewable energy.</p>
                <ol class="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                  <li>Combustion - direct burning for heat</li>
                  <li>Pyrolysis - thermal decomposition without oxygen</li>
                  <li>Gasification - conversion to combustible gases</li>
                  <li>Anaerobic digestion - microbial breakdown to biogas</li>
                  <li>Fermentation and distillation - conversion to ethanol</li>
                  <li>Transesterification - production of biodiesel</li>
                </ol>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">4. Identify two challenges of biofuel production in developing countries.</p>
                <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                  <li>• Competition with food production for land and resources</li>
                  <li>• High initial capital investment requirements</li>
                  <li>• Limited technological infrastructure and expertise</li>
                  <li>• Potential environmental impacts if not managed properly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 10
    },
    {
      id: "tma",
      title: "📋 Tutor Marked Assignments",
      subtitle: "Practical Exercises",
      content: `
        <div class="space-y-6">
          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 dark:text-green-100 mb-4">🎯 Tutor Marked Assignments</h4>

            <div class="space-y-6">
              <div class="bg-white dark:bg-gray-700 p-5 rounded-lg border border-green-200 dark:border-green-800">
                <h5 class="font-bold text-green-900 dark:text-green-100 mb-3">Question 1</h5>
                <p class="text-gray-800 mb-3">Describe the energy conversions that take place in the following:</p>
                <div class="space-y-3 ml-4">
                  <div>
                    <strong>(a) A boy riding a bicycle:</strong>
                    <p class="text-sm text-gray-600">Chemical energy in food → Mechanical energy (muscles) → Kinetic energy (motion)</p>
                  </div>
                  <div>
                    <strong>(b) An electric pressing iron:</strong>
                    <p class="text-sm text-gray-600">Electrical energy → Heat energy → Thermal energy transfer to clothes</p>
                  </div>
                  <div>
                    <strong>(c) Radios and televisions:</strong>
                    <p class="text-sm text-gray-600">Electrical energy → Light energy + Sound energy + Heat energy</p>
                  </div>
                  <div>
                    <strong>(d) The Telephone:</strong>
                    <p class="text-sm text-gray-600">Electrical energy → Sound energy → Electrical signals → Sound energy</p>
                  </div>
                  <div>
                    <strong>(e) Electric Motor:</strong>
                    <p class="text-sm text-gray-600">Electrical energy → Mechanical energy (rotation) + Heat energy</p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-700 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 class="font-bold text-blue-900 dark:text-blue-100 mb-3">Question 2</h5>
                <p class="text-gray-800 mb-3">Describe briefly how energy is obtained from:</p>
                <div class="space-y-3 ml-4">
                  <div>
                    <strong>(a) Solar energy:</strong>
                    <p class="text-sm text-gray-600">Solar energy is captured through photovoltaic cells that convert sunlight directly into electricity, or through solar thermal systems that concentrate sunlight to heat fluids and produce steam for electricity generation.</p>
                  </div>
                  <div>
                    <strong>(b) Tidal energy:</strong>
                    <p class="text-sm text-gray-600">Tidal energy harnesses the power of ocean tides using barrages or underwater turbines that convert the kinetic energy of moving water into mechanical energy, then electricity.</p>
                  </div>
                  <div>
                    <strong>(c) Hydroelectricity:</strong>
                    <p class="text-sm text-gray-600">Water stored in reservoirs is released through turbines, converting gravitational potential energy into kinetic energy, which turns generators to produce electricity.</p>
                  </div>
                  <div>
                    <strong>(d) Geothermal energy:</strong>
                    <p class="text-sm text-gray-600">Heat from Earth's interior is extracted through wells and used to produce steam that drives turbines for electricity generation, or directly for heating applications.</p>
                  </div>
                  <div>
                    <strong>(e) Wind energy:</strong>
                    <p class="text-sm text-gray-600">Wind turbines capture kinetic energy from moving air using aerodynamic blades that turn a rotor, which drives a generator to produce electricity.</p>
                  </div>
                  <div>
                    <strong>(f) Nuclear energy:</strong>
                    <p class="text-sm text-gray-600">Nuclear reactions (fission or fusion) release tremendous heat energy that is used to produce steam, which drives turbines to generate electricity.</p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-700 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 class="font-bold text-purple-900 dark:text-purple-100 mb-3">Question 3</h5>
                <p class="text-gray-800 mb-3">Enumerate distinct features of the following:</p>
                <div class="space-y-4 ml-4">
                  <div>
                    <strong>(a) Conventional Energy Source:</strong>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Established and widely used technologies</li>
                      <li>• Often non-renewable (fossil fuels, nuclear)</li>
                      <li>• Well-developed infrastructure and supply chains</li>
                      <li>• Lower initial costs but higher environmental impact</li>
                      <li>• Provides reliable baseload power</li>
                    </ul>
                  </div>
                  <div>
                    <strong>(b) Non Conventional Energy Source:</strong>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Alternative and emerging technologies</li>
                      <li>• Often renewable (solar, wind, biomass)</li>
                      <li>• May require new infrastructure development</li>
                      <li>• Generally more environmentally friendly</li>
                      <li>• Can be intermittent or location-dependent</li>
                    </ul>
                  </div>
                  <div>
                    <strong>(c) Renewable Energy Source:</strong>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Naturally replenished over short time scales</li>
                      <li>• Virtually inexhaustible (solar, wind, hydro)</li>
                      <li>• Low environmental impact when properly managed</li>
                      <li>• May require energy storage solutions</li>
                      <li>• Often decentralized and scalable</li>
                    </ul>
                  </div>
                  <div>
                    <strong>(d) Non Renewable Energy Source:</strong>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Finite resources that will eventually be depleted</li>
                      <li>• Formed over geological time scales</li>
                      <li>• High energy density and reliability</li>
                      <li>• Significant environmental and climate impacts</li>
                      <li>• Often cheaper in short term but costly long-term</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 15
    }
  ]
};
