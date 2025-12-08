// Chapter 6: Medicinal Plants: Myths, Facts, Conservation and Tissue Culture Techniques
// GNS 311 - Module 6

export const chapter6Content = {
  title: "Medicinal Plants: Myths, Facts, Conservation and Tissue Culture Techniques",
  author: "Yakubu, M. T., Akanji, M. A. and Adeyemi, S. B.",
  department: "Departments of Biochemistry and Plant Biology, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🌿 Welcome to Medicinal Plants!",
      subtitle: "Introduction to Traditional Medicine",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome! 🌱 <strong>Traditional medicine</strong> has been humanity's first line of defense against illnesses
            for thousands of years. Today, we're exploring the fascinating world of <strong>medicinal plants</strong>—nature's pharmacy!
          </p>
          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
            <p class="font-semibold text-teal-900 mb-2">💡 Did you know?</p>
            <p class="text-teal-800">
              According to WHO, <strong>80% of the world's population</strong> relies on herbal medicines as their primary healthcare!
              That's over 4 billion people trusting nature's healing power.
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter will separate myths from facts about medicinal herbs, explore conservation challenges,
            and introduce modern tissue culture techniques. You'll learn to identify key medicinal plants and
            understand their traditional and scientific significance.
          </p>

          <div class="bg-blue-50 p-5 rounded-lg border border-blue-200 my-6">
            <h4 class="font-bold text-blue-900 mb-3 text-lg">📚 Module Structure</h4>
            <p class="text-blue-800 mb-4">
              This module explores medicinal plants from myths to modern conservation. Divided into two units:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg border border-blue-200">
                <h5 class="font-bold text-blue-900 mb-2">🧙‍♂️ Unit 1</h5>
                <p class="text-blue-800 text-sm">Medicinal Plants: Myths and Facts</p>
              </div>
              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-2">🌱 Unit 2</h5>
                <p class="text-green-800 text-sm">Conservation and Tissue Culture</p>
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
          <p class="text-lg font-semibold mb-4">By the end of this module, you'll be able to:</p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Understand general aspects of Traditional Medicine and Herbal Medicine</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Identify medicinal plants and some examples with their uses</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain reasons for increasing use of medicinal plants</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Evaluate advantages and disadvantages of using medicinal plants</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Differentiate myths from facts about medicinal herbs</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Describe conservation strategies for medicinal plants</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain plant tissue culture techniques</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-intro",
      title: "🧙‍♂️ Unit 1: Myths and Facts",
      subtitle: "Understanding Medicinal Plants",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Traditional medicine</strong> refers to health practices using plant, animal, and mineral-based medicines,
            spiritual therapies, and manual techniques. <strong>Herbal medicine</strong> specifically uses herbs for health maintenance and disease treatment.
          </p>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🌍 Global Impact</p>
            <p class="text-yellow-800">
              Herbal medicine is popular worldwide, especially in developing countries. WHO estimates that 4 billion people
              (80% of the global population) use herbal medicines as primary healthcare.
            </p>
          </div>

          <p class="text-lg leading-relaxed">
            In Nigeria, most people rely on herbal medicine because it's accessible and affordable. There's growing
            interest in integrating herbal medicine with conventional healthcare systems.
          </p>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "medicinal-herbs",
      title: "🌿 What Are Medicinal Herbs?",
      subtitle: "Definition and Examples",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            A <strong>medicinal herb</strong> is any plant containing substances used for therapeutic purposes or as
            precursors for drug synthesis. These plants work like conventional pharmaceutical drugs.
          </p>

          <div class="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">🌱 Common Nigerian Medicinal Plants</h4>
            <p class="text-gray-800 mb-4">Here are some important medicinal plants with easy-to-remember names:</p>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-2">🍃 Neem Tree (Dongoyaro)</h5>
                <p class="text-green-800 text-sm mb-2"><strong>Botanical:</strong> Azadirachta indica</p>
                <p class="text-green-800 text-sm"><strong>Uses:</strong> Malaria, fever, antiseptic, diabetes</p>
                <div class="bg-green-50 p-2 rounded mt-2">
                  <p class="text-xs text-green-700"><strong>Remember:</strong> "Neem defeats fever dreams"</p>
                </div>
              </div>

              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-2">🥬 Bitter Leaf (Ewuro)</h5>
                <p class="text-green-800 text-sm mb-2"><strong>Botanical:</strong> Vernonia amygdalina</p>
                <p class="text-green-800 text-sm"><strong>Uses:</strong> Diabetes, malaria, laxative, hypertension</p>
                <div class="bg-green-50 p-2 rounded mt-2">
                  <p class="text-xs text-green-700"><strong>Remember:</strong> "Bitter but better for blood sugar"</p>
                </div>
              </div>

              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-2">🌰 Garlic (Ayuu)</h5>
                <p class="text-green-800 text-sm mb-2"><strong>Botanical:</strong> Allium sativum</p>
                <p class="text-green-800 text-sm"><strong>Uses:</strong> Heart health, immunity, antibacterial</p>
                <div class="bg-green-50 p-2 rounded mt-2">
                  <p class="text-xs text-green-700"><strong>Remember:</strong> "Garlic guards against germs"</p>
                </div>
              </div>

              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-2">🍈 Pawpaw (Ibepe)</h5>
                <p class="text-green-800 text-sm mb-2"><strong>Botanical:</strong> Carica papaya</p>
                <p class="text-green-800 text-sm"><strong>Uses:</strong> Digestion, wound healing, diabetes</p>
                <div class="bg-green-50 p-2 rounded mt-2">
                  <p class="text-xs text-green-700"><strong>Remember:</strong> "Pawpaw prevents poor digestion"</p>
                </div>
              </div>

              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-2">🌰 Ginger (Ata-ile)</h5>
                <p class="text-green-800 text-sm mb-2"><strong>Botanical:</strong> Zingiber officinale</p>
                <p class="text-green-800 text-sm"><strong>Uses:</strong> Nausea, inflammation, immunity</p>
                <div class="bg-green-50 p-2 rounded mt-2">
                  <p class="text-xs text-green-700"><strong>Remember:</strong> "Ginger gives great relief"</p>
                </div>
              </div>

              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-2">🍵 Lemon Grass (Koko-Oja)</h5>
                <p class="text-green-800 text-sm mb-2"><strong>Botanical:</strong> Cymbopogon citratus</p>
                <p class="text-green-800 text-sm"><strong>Uses:</strong> Fever, digestion, malaria, stress</p>
                <div class="bg-green-50 p-2 rounded mt-2">
                  <p class="text-xs text-green-700"><strong>Remember:</strong> "Lemon grass lessens malaria"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "reasons-increasing-use",
      title: "📈 Why Use Medicinal Plants?",
      subtitle: "Reasons for Increasing Popularity",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            People increasingly turn to medicinal plants for several important reasons:
          </p>

          <div class="space-y-4 my-6">
            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3">💰 Affordability</h4>
              <p class="text-blue-800">
                Rising costs of imported medicines make herbal alternatives more attractive. Traditional remedies
                are often cheaper and locally available.
              </p>
            </div>

            <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-3">⚠️ Side Effects of Modern Drugs</h4>
              <p class="text-red-800">
                Conventional medicines can cause serious side effects like hypertension, cardiac failure, and
                other health complications. Herbs often have fewer adverse effects.
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3">🤝 Personal Relationships</h4>
              <p class="text-green-800">
                Herbalists and traditional practitioners often build personal relationships with patients,
                allowing for more open communication and trust.
              </p>
            </div>

            <div class="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3">🏛️ Cultural Heritage</h4>
              <p class="text-purple-800">
                Many communities have deep faith in traditional medicine as wisdom from ancestors.
                This cultural preference drives continued use.
              </p>
            </div>

            <div class="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h4 class="font-bold text-yellow-900 mb-3">🌍 Global Recognition</h4>
              <p class="text-yellow-800">
                Even in developed countries, people seek "natural" alternatives. Herbs are increasingly
                viewed as superior to synthetic drugs for certain conditions.
              </p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "advantages-disadvantages",
      title: "⚖️ Pros and Cons of Herbal Medicine",
      subtitle: "Advantages and Disadvantages",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Like any medical approach, herbal medicine has both benefits and limitations. Understanding these
            helps you make informed decisions about healthcare.
          </p>

          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 class="font-bold text-green-900 mb-4 text-xl">✅ Advantages</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded">
                  <h5 class="font-semibold text-green-800">Reduced Side Effects</h5>
                  <p class="text-sm text-green-700">Generally safer with fewer adverse reactions</p>
                </div>
                <div class="bg-white p-3 rounded">
                  <h5 class="font-semibold text-green-800">Effective for Chronic Conditions</h5>
                  <p class="text-sm text-green-700">Often successful with long-term health issues</p>
                </div>
                <div class="bg-white p-3 rounded">
                  <h5 class="font-semibold text-green-800">Cost Effective</h5>
                  <p class="text-sm text-green-700">More affordable than many pharmaceutical drugs</p>
                </div>
                <div class="bg-white p-3 rounded">
                  <h5 class="font-semibold text-green-800">Widely Available</h5>
                  <p class="text-sm text-green-700">Often found in local markets and gardens</p>
                </div>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 class="font-bold text-red-900 mb-4 text-xl">❌ Disadvantages</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded">
                  <h5 class="font-semibold text-red-800">Not for All Conditions</h5>
                  <p class="text-sm text-red-700">Ineffective for serious acute illnesses</p>
                </div>
                <div class="bg-white p-3 rounded">
                  <h5 class="font-semibold text-red-800">Dosage Uncertainty</h5>
                  <p class="text-sm text-red-700">No standardized dosage instructions</p>
                </div>
                <div class="bg-white p-3 rounded">
                  <h5 class="font-semibold text-red-800">Poison Risk</h5>
                  <p class="text-sm text-red-700">Wild herbs can be toxic if misidentified</p>
                </div>
                <div class="bg-white p-3 rounded">
                  <h5 class="font-semibold text-red-800">Drug Interactions</h5>
                  <p class="text-sm text-red-700">Can interfere with conventional medications</p>
                </div>
                <div class="bg-white p-3 rounded">
                  <h5 class="font-semibold text-red-800">Lack of Regulation</h5>
                  <p class="text-sm text-red-700">Quality and safety not guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "myths-vs-facts",
      title: "🧙‍♂️ Myths vs Facts",
      subtitle: "Separating Truth from Fiction",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Myths about medicinal plants are popular beliefs that may not be entirely true. Let's examine
            some common myths and their corresponding facts:
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-4">💪 Myth 1: Herbs Are Always Safe</h4>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold text-red-700 mb-2">❌ The Myth:</p>
                <p class="text-gray-700">"Natural means safe" - Herbs are assumed to be harmless</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="font-semibold text-green-700 mb-2">✅ The Fact:</p>
                <p class="text-green-800">Herbs contain chemicals and can be toxic. Misidentification, overdose,
                or interactions can cause serious harm. Many herbs affect liver, kidney, and heart function.</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-4">🔬 Myth 2: Herbs Lack Scientific Evidence</h4>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold text-red-700 mb-2">❌ The Myth:</p>
                <p class="text-gray-700">Traditional medicine is just folklore without scientific backing</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="font-semibold text-green-700 mb-2">✅ The Fact:</p>
                <p class="text-green-800">Many modern drugs originate from plants. Scientific research validates
                herbs like neem for malaria, bitter leaf for diabetes, and ginger for nausea. 74% of pharmaceutical
                medicines have herbal origins.</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 class="font-bold text-yellow-900 mb-4">🌿 Myth 3: Multi-Herb Mixtures Are Better</h4>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold text-red-700 mb-2">❌ The Myth:</p>
                <p class="text-gray-700">More herbs = better results (some reduce symptoms, others aid digestion)</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="font-semibold text-green-700 mb-2">✅ The Fact:</p>
                <p class="text-green-800">This is largely true! Many herbs work synergistically. Traditional
                medicine often combines herbs for comprehensive healing. However, standardization is needed
                to ensure consistent therapeutic effects.</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-4">⚠️ Myth 4: Herbs Can't Be Standardized</h4>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold text-red-700 mb-2">❌ The Myth:</p>
                <p class="text-gray-700">Standardization reduces herbal effectiveness and benefits</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="font-semibold text-green-700 mb-2">✅ The Fact:</p>
                <p class="text-green-800">Standardization ensures safety and efficacy. Research shows standardization
                maintains benefits while ensuring consistent quality. WHO recommends standardized herbal products.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit2-intro",
      title: "🌱 Unit 2: Conservation and Tissue Culture",
      subtitle: "Preserving Medicinal Plants",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Medicinal plants face serious threats from habitat destruction, over-exploitation, and climate change.
            <strong>Conservation</strong> is crucial to protect these valuable resources for future generations.
          </p>

          <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4">
            <p class="font-semibold text-red-900 mb-2">🚨 Threats to Medicinal Plants</p>
            <ul class="space-y-1 text-red-800">
              <li>• Habitat degradation and deforestation</li>
              <li>• Over-exploitation for commercial use</li>
              <li>• Invasive species competition</li>
              <li>• Climate change and natural disasters</li>
              <li>• Lack of systematic conservation programs</li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed">
            Modern <strong>tissue culture techniques</strong> offer innovative solutions for conservation and
            sustainable production of medicinal plants.
          </p>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "conservation-strategies",
      title: "🛡️ Conservation Strategies",
      subtitle: "Protecting Medicinal Plants",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Conservation</strong> means managing the environment to maximize benefits for present and
            future generations. For medicinal plants, this involves protecting biodiversity and ensuring sustainable use.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-4">🏞️ In-Situ Conservation</h4>
              <p class="text-green-800 mb-4">Protecting plants in their natural habitats:</p>

              <div class="space-y-3">
                <div class="bg-white p-4 rounded">
                  <h5 class="font-semibold text-green-800">🌍 Natural Reserves</h5>
                  <p class="text-sm text-gray-700">Protected areas preserving biodiversity. Over 12,700 protected
                  areas cover 8.81% of Earth's land surface.</p>
                </div>
                <div class="bg-white p-4 rounded">
                  <h5 class="font-semibold text-green-800">🌱 Wild Nurseries</h5>
                  <p class="text-sm text-gray-700">Establishing cultivation areas near natural habitats for
                  endangered species, combining protection with sustainable use.</p>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-4">🏢 Ex-Situ Conservation</h4>
              <p class="text-blue-800 mb-4">Protecting plants outside their natural habitats:</p>

              <div class="space-y-3">
                <div class="bg-white p-4 rounded">
                  <h5 class="font-semibold text-blue-800">🌳 Botanic Gardens</h5>
                  <p class="text-sm text-gray-700">Maintain diverse plant collections, develop propagation protocols,
                  and support domestication programs.</p>
                </div>
                <div class="bg-white p-4 rounded">
                  <h5 class="font-semibold text-blue-800">🧬 Tissue Culture</h5>
                  <p class="text-sm text-gray-700">In vitro regeneration for mass propagation of rare and
                  recalcitrant species.</p>
                </div>
                <div class="bg-white p-4 rounded">
                  <h5 class="font-semibold text-blue-800">❄️ Cryo-Banks</h5>
                  <p class="text-sm text-gray-700">Long-term storage at ultra-low temperatures (-196°C)
                  for genetic preservation.</p>
                </div>
                <div class="bg-white p-4 rounded">
                  <h5 class="font-semibold text-blue-800">🌰 Seed Banks</h5>
                  <p class="text-sm text-gray-700">Storage of seeds with controlled moisture (5-8%) and
                  temperature (-18°C) for long-term viability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "tissue-culture",
      title: "🧬 Plant Tissue Culture Techniques",
      subtitle: "Modern Propagation Methods",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Tissue culture</strong> involves growing plant cells, tissues, or organs in artificial
            environments under sterile conditions. This technology revolutionizes medicinal plant production.
          </p>

          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">🧪 Key Techniques</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">🌱 Micropropagation</h5>
                <p class="text-gray-700 text-sm">Rapid multiplication of plants from small tissue samples,
                producing thousands of identical plants.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">🥚 Somatic Embryogenesis</h5>
                <p class="text-gray-700 text-sm">Formation of embryos from somatic cells, creating artificial seeds.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">🧫 Callus Culture</h5>
                <p class="text-gray-700 text-sm">Growing undifferentiated cell masses that can regenerate into whole plants.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">🥬 Organ Culture</h5>
                <p class="text-gray-700 text-sm">Culturing specific organs like roots, shoots, or leaves.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Benefits of Tissue Culture</p>
            <ul class="space-y-1 text-yellow-800">
              <li>• ✅ Disease-free plants</li>
              <li>• ✅ Year-round production</li>
              <li>• ✅ Rapid multiplication of rare species</li>
              <li>• ✅ Conservation of endangered plants</li>
              <li>• ✅ Production of secondary metabolites</li>
              <li>• ✅ Genetic improvement through biotechnology</li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "summary",
      title: "📝 Chapter Summary",
      subtitle: "Key Takeaways",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🎉 You've explored the fascinating world of medicinal plants. Let's recap what we've learned:
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 mb-2">🌿 Medicinal Plants Definition</h5>
                <p class="text-gray-700 text-sm">Plants containing therapeutic compounds, used for healing and drug synthesis</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🧙‍♂️ Myths vs Facts</h5>
                <p class="text-gray-700 text-sm">Herbs are not always safe, have scientific backing, work synergistically, and can be standardized</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">⚖️ Advantages & Disadvantages</h5>
                <p class="text-gray-700 text-sm">Fewer side effects but lack regulation; effective for chronic conditions but dosage uncertainty</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">🛡️ Conservation Strategies</h5>
                <p class="text-gray-700 text-sm">In-situ (natural reserves, wild nurseries) and ex-situ (botanic gardens, tissue culture, cryo-banks)</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🧬 Tissue Culture</h5>
                <p class="text-gray-700 text-sm">Modern technique for rapid, disease-free plant propagation and conservation</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Final Thoughts</p>
            <p class="text-yellow-800">
              Medicinal plants bridge traditional wisdom with modern science. While herbs offer valuable healing,
              they must be used responsibly with proper knowledge and standardization. Conservation ensures these
              natural treasures remain available for future generations. 🌱✨
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    }
  ]
};
