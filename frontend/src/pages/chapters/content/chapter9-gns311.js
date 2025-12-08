// Chapter 9: Global Threat of Counterfeit Medicines
// GNS 311 - Module 9

export const chapter9Content = {
  title: "Global Threat of Counterfeit Medicines",
  author: "Williams, F. E. and Olurinola, P. F.",
  department: "Faculty of Pharmaceutical Sciences, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🎯 Welcome to Counterfeit Medicines!",
      subtitle: "Introduction",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome! 🌟 In today's world, counterfeit medicines pose a <strong>global threat</strong> to public health,
            causing harm, death, and economic losses worldwide. Understanding this menace is crucial for
            healthcare professionals and consumers alike.
          </p>
          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
            <p class="font-semibold text-teal-900 mb-2">💡 Did you know?</p>
            <p class="text-teal-800">
              Counterfeit medicines are one of the fastest growing grey economies after prostitution,
              narcotics, terrorism, and arms trade, with global sales reaching billions annually!
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter will explore the global threat of counterfeit medicines, from their definitions
            and magnitude to their implications and anti-counterfeit measures. You'll learn how to
            identify and combat this serious public health crisis.
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
              <span>Give a definition of drug</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Understand a global perspective of counterfeit medicines</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Describe the magnitude of the burden of counterfeit medicines</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>List factors that encourage counterfeiting of medicines</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Discuss the implications of counterfeit medicines</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>List and explain anti-counterfeit measures in the Pharmaceutical industries</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-intro",
      title: "📚 Unit 1: Drugs and Counterfeit Drugs",
      subtitle: "Understanding Drugs and Their Counterfeits",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Let's start with the fundamentals: <strong>What is a drug?</strong> And how do counterfeit medicines
            differ from genuine pharmaceuticals? 🤔
          </p>
          <p class="text-lg leading-relaxed">
            This unit focuses on the threats of counterfeit drugs to humanity. We have two main sections:
          </p>
          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 class="font-bold text-blue-900 mb-2">1️⃣ Drugs and Counterfeit Drugs</h4>
              <p class="text-blue-800">Understanding definitions and concepts</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 class="font-bold text-green-900 mb-2">2️⃣ Implications and Anti-Counterfeit Measures</h4>
              <p class="text-green-800">Consequences and solutions</p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-learning-outcomes",
      title: "🎯 Unit 1 Learning Goals",
      subtitle: "Unit Learning Outcomes",
      content: `
        <div class="space-y-4">
          <p class="text-lg font-semibold mb-4">At the end of this unit, you should be able to:</p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start">
              <span class="text-blue-500 mr-3 font-bold">✓</span>
              <span>Give a definition of drug</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-3 font-bold">✓</span>
              <span>Explain a global perspective of counterfeit medicines</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-3 font-bold">✓</span>
              <span>Describe the magnitude of the burden of counterfeit medicines</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 1
    },
    {
      id: "drug-definition",
      title: "💊 What is a Drug?",
      subtitle: "Definition of Drug",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            A drug is the <strong>single chemical substance</strong> that forms the active ingredient of medicine,
            the Active Pharmaceutical Ingredient (API) that produces a pharmacological activity.
          </p>

          <div class="bg-gray-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-3">Official Definition:</h4>
            <p class="text-gray-700 leading-relaxed">
              Drug is any substance or mixture of substances manufactured, sold or advertised for use by man
              or animal for the purposes of diagnosis, treatment, mitigation or prevention of any disease or
              disorder, abnormal physical state or symptoms thereof, restoration, correction or modification
              of organic functions, disinfection, the control of vermin, insects, pests or contraception
              (Pharmacists Council of Nigeria [PCN], 2009a).
            </p>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">⚠️ Important Distinction</p>
            <p class="text-yellow-800">
              The term "medicines" is used instead of "drugs" to describe pharmaceutical preparations used in
              clinical health care practice. The word "drugs" is frequently associated with narcotic or illicit substances.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "counterfeit-definition",
      title: "🚫 What are Counterfeit Medicines?",
      subtitle: "Definition of Counterfeit Medicine",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Counterfeit medicines are a serious global problem. Let's explore their definitions from various
            authoritative sources:
          </p>

          <div class="space-y-4 my-6">
            <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-2">🌍 WHO Definition</h4>
              <p class="text-red-800">
                A counterfeit medicine is one which is <strong>deliberately and fraudulently mislabeled</strong>
                with respect to identity and/or source. Counterfeiting can apply to both branded and generic products.
              </p>
              <p class="text-red-800 text-sm mt-2">
                <em>Source: World Health Organization (WHO, 2003a)</em>
              </p>
            </div>

            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-2">🇺🇸 US Federal Definition</h4>
              <p class="text-blue-800">
                A drug which, or the containers or labeling of which, without authorization, bears the trademark,
                trade name, or other identifying mark of a manufacturer other than the actual manufacturer.
              </p>
              <p class="text-blue-800 text-sm mt-2">
                <em>Source: United States Federal Food, Drug & Cosmetics Act</em>
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-2">🇵🇭 Philippines Definition</h4>
              <p class="text-green-800">
                Medicinal products with correct ingredients but not in the amounts provided, wrong ingredients,
                without active ingredients, with insufficient quantity of active ingredients, resulting in
                reduction of drug's safety, efficacy, quality, strength or purity.
              </p>
            </div>

            <div class="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-2">🇳🇬 Nigerian Definition</h4>
              <p class="text-purple-800">
                Any drug product which is not what it purports to be; any drug or drug product which is so colored,
                coated, powdered or polished that the damage is concealed; or any drug product whose label does not
                bear adequate directions for use and such adequate warning against unsafe dosage.
              </p>
              <p class="text-purple-800 text-sm mt-2">
                <em>Source: Nigerian Counterfeit and Fake Drugs Decree</em>
              </p>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-3">🔬 Related Terms:</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded">
                <strong>Substandard Medicines:</strong> Genuine medicines that don't meet quality specifications
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Adulterated Medicines:</strong> Medicines that don't conform to Good Manufacturing Practice
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "counterfeit-types",
      title: "📊 Types of Counterfeit Medicines",
      subtitle: "Mathematical Classification",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Counterfeit medicines can be classified "mathematically" based on their composition and packaging:
          </p>

          <div class="bg-gray-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4">Counterfeit Medicine Combinations:</h4>
            <div class="space-y-3 text-sm">
              <div class="flex items-start">
                <span class="text-red-500 mr-3 font-bold">•</span>
                <span><strong>Fake packaging + correct quantity of correct ingredient</strong> = counterfeit medicine</span>
              </div>
              <div class="flex items-start">
                <span class="text-red-500 mr-3 font-bold">•</span>
                <span><strong>Fake packaging + incorrect quantity of correct ingredient</strong> = counterfeit medicine</span>
              </div>
              <div class="flex items-start">
                <span class="text-red-500 mr-3 font-bold">•</span>
                <span><strong>Fake packaging + no active ingredient</strong> = counterfeit medicine</span>
              </div>
              <div class="flex items-start">
                <span class="text-red-500 mr-3 font-bold">•</span>
                <span><strong>Fake packaging + wrong ingredient</strong> = counterfeit medicine</span>
              </div>
              <div class="flex items-start">
                <span class="text-red-500 mr-3 font-bold">•</span>
                <span><strong>Genuine packaging + incorrect quantity (deliberate)</strong> = counterfeit medicine</span>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p class="font-semibold text-blue-900 mb-2">📈 Genuine Medicine</p>
            <p class="text-blue-800">
              Genuine packaging + correct quantity of correct ingredient + sanitary facility and processing (cGMP) = genuine medicine
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "magnitude-burden",
      title: "🌍 The Global Scale of Counterfeit Medicines",
      subtitle: "Magnitude of the Burden",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The menace of counterfeit medicines is recognized internationally and exists in both developed
            and developing countries. The true extent is not fully known due to lack of global studies.
          </p>

          <div class="bg-red-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-red-900 mb-4">🚨 Global Statistics:</h4>
            <div class="space-y-3">
              <div class="flex items-start">
                <span class="text-red-600 mr-3 font-bold">📊</span>
                <span>Up to <strong>10% of pharmaceutical trade</strong> globally consists of counterfeit medicines</span>
              </div>
              <div class="flex items-start">
                <span class="text-red-600 mr-3 font-bold">📊</span>
                <span><strong>25% of counterfeits</strong> are consumed in developing countries</span>
              </div>
              <div class="flex items-start">
                <span class="text-red-600 mr-3 font-bold">💰</span>
                <span>Counterfeit drug sales projected to reach <strong>US$75 billion</strong> globally in 2010</span>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
              <h4 class="font-bold text-yellow-900 mb-3">🦠 Health Impact</h4>
              <ul class="space-y-2 text-yellow-800 text-sm">
                <li>• Up to 40% of artesunate products contain no active ingredients</li>
                <li>• 60% of WHO database cases had no active ingredient</li>
                <li>• HIV/AIDS treatment counterfeiting discovered in 2002</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-5 rounded-lg border border-orange-200">
              <h4 class="font-bold text-orange-900 mb-3">💀 Death Toll</h4>
              <ul class="space-y-2 text-orange-800 text-sm">
                <li>• 109 children died from paracetamol syrup in Nigeria (1990)</li>
                <li>• 14 children died from chloroquine injection in Nigeria (1994)</li>
                <li>• 2,500 deaths from meningitis vaccines in Niger (1995)</li>
                <li>• 84 children died from teething mixture in Nigeria (2008-2009)</li>
              </ul>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-4">🌐 Regional Impact:</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded">
                <strong>India:</strong> 13-30% of pharmaceutical market
              </div>
              <div class="bg-white p-4 rounded">
                <strong>Nigeria:</strong> 70% of drugs in circulation (2002)
              </div>
              <div class="bg-white p-4 rounded">
                <strong>China:</strong> Major exporter of counterfeits
              </div>
              <div class="bg-white p-4 rounded">
                <strong>Angola:</strong> 70% of medicines were forgeries
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit1-summary",
      title: "📝 Unit 1 Summary",
      subtitle: "Drugs and Counterfeit Drugs Summary",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            In this unit, you learned that:
          </p>

          <div class="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">Key Points:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">💊 Drug Definition</h5>
                <p class="text-gray-700 text-sm">A single chemical substance forming the active ingredient of medicine (API)</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">🚫 Counterfeit Medicine</h5>
                <p class="text-gray-700 text-sm">Deliberately and fraudulently mislabeled medicine with respect to identity/source</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">🌍 Global Burden</h5>
                <p class="text-gray-700 text-sm">10% of pharmaceutical trade, causing deaths, drug resistance, and economic losses</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit2-intro",
      title: "🛡️ Unit 2: Fighting Back Against Counterfeits",
      subtitle: "Implications and Anti-Counterfeit Measures",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Now that we understand counterfeit medicines, let's explore their <strong>implications</strong>
            and the <strong>measures</strong> we can take to combat them. This unit focuses on the consequences
            and solutions to this global threat.
          </p>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
              <div class="text-3xl mb-2">⚠️</div>
              <h4 class="font-bold text-red-900 mb-2">Factors Encouraging Counterfeiting</h4>
            </div>
            <div class="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
              <div class="text-3xl mb-2">💥</div>
              <h4 class="font-bold text-orange-900 mb-2">Implications</h4>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div class="text-3xl mb-2">🛡️</div>
              <h4 class="font-bold text-green-900 mb-2">Anti-Counterfeit Measures</h4>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit2-learning-outcomes",
      title: "🎯 Unit 2 Learning Goals",
      subtitle: "Unit Learning Outcomes",
      content: `
        <div class="space-y-4">
          <p class="text-lg font-semibold mb-4">At the end of this unit, you should be able to:</p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start">
              <span class="text-green-500 mr-3 font-bold">✓</span>
              <span>List factors that encourage counterfeiting of medicines</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-3 font-bold">✓</span>
              <span>Discuss the implications of counterfeit medicines</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-3 font-bold">✓</span>
              <span>List and explain anti-counterfeit measures in the Pharmaceutical industries</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 1
    },
    {
      id: "factors-encouraging",
      title: "🔍 Why Counterfeiting Happens",
      subtitle: "Factors Encouraging Counterfeiting of Medicines",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Several factors contribute to the flourishing of counterfeit medicines globally. Understanding
            these factors is key to developing effective prevention strategies.
          </p>

          <div class="space-y-4 my-6">
            <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-3">⚖️ Weak Enforcement</h4>
              <p class="text-red-800">
                Lack of or weak enforcement of existing laws on quality, safety, and efficacy of medicines.
                Offenders are not afraid of arrest and prosecution.
              </p>
            </div>

            <div class="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 class="font-bold text-orange-900 mb-3">🚔 Weak Penal Actions</h4>
              <p class="text-orange-800">
                There are more severe penalties for counterfeiting non-medicinal products, making medicine
                counterfeiting seem less risky.
              </p>
            </div>

            <div class="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h4 class="font-bold text-yellow-900 mb-3">🏥 Weak Drug Regulation</h4>
              <p class="text-yellow-800">
                Absence of competent national drug regulatory authorities with adequate human and financial resources.
              </p>
            </div>

            <div class="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3">🤝 Corruption & Conflict</h4>
              <p class="text-purple-800">
                Corruption and conflict of interest adversely affect enforcement of laws prohibiting counterfeiting.
              </p>
            </div>

            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3">💰 High Profits</h4>
              <p class="text-blue-800">
                Low cost of manufacture combined with high demand results in significantly high profits.
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3">🤝 Lack of Cooperation</h4>
              <p class="text-green-800">
                Lack of cooperation between stakeholders allows counterfeiters to escape detection and prosecution.
              </p>
            </div>

            <div class="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
              <h4 class="font-bold text-indigo-900 mb-3">🌐 Free Trade Zones</h4>
              <p class="text-indigo-800">
                Lack of control by exporting countries and within free trade zones where drug regulation is lax.
              </p>
            </div>

            <div class="bg-pink-50 p-5 rounded-lg border-l-4 border-pink-500">
              <h4 class="font-bold text-pink-900 mb-3">🛠️ Advanced Technology</h4>
              <p class="text-pink-800">
                Availability of advanced technology that helps counterfeiters reproduce sophisticated packaging.
              </p>
            </div>

            <div class="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500">
              <h4 class="font-bold text-teal-900 mb-3">💸 Poverty</h4>
              <p class="text-teal-800">
                Poverty drives people to seek cheaper medicines, often from unregulated outlets where counterfeits are common.
              </p>
            </div>

            <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-500">
              <h4 class="font-bold text-gray-900 mb-3">🔬 Low Testing Facilities</h4>
              <p class="text-gray-800">
                Lack of testing facilities makes detection of counterfeit medicines difficult, emboldening offenders.
              </p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "implications",
      title: "💥 The Devastating Impact",
      subtitle: "Implications of Counterfeit Medicines",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Counterfeit medicines have far-reaching implications that affect individuals, communities,
            and entire nations. Let's examine these serious consequences:
          </p>

          <div class="bg-red-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-red-900 mb-4">🏥 Public Health Crisis</h4>
            <div class="space-y-3">
              <div class="bg-white p-3 rounded">
                <strong>Drug Resistance:</strong> Ineffective treatment leads to microbial resistance
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Obsolescence:</strong> Cheap effective drugs become useless
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Adverse Reactions:</strong> Unexpected side effects and toxicity
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Morbidity & Mortality:</strong> Increased illness and death rates
              </div>
              <div class="bg-white p-3 rounded">
                <strong>Loss of Confidence:</strong> In healthcare systems and professionals
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-orange-50 p-5 rounded-lg border border-orange-200">
              <h4 class="font-bold text-orange-900 mb-3">🛡️ National Security Threat</h4>
              <p class="text-orange-800 text-sm">
                Profits from counterfeit medicines fund organized criminal and terrorist operations globally.
              </p>
            </div>
            <div class="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h4 class="font-bold text-blue-900 mb-3">💰 Negative Economic Impact</h4>
              <p class="text-blue-800 text-sm">
                Huge financial wastage, loss of productivity, increased hospital stays, and tax revenue losses.
              </p>
            </div>
          </div>

          <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-4">
            <p class="font-semibold text-purple-900 mb-2">⚖️ Intellectual Property Violations</p>
            <p class="text-purple-800">
              Counterfeiting violates intellectual property rights, including patents and industrial design,
              affecting trademark owners and legitimate manufacturers.
            </p>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-yellow-900 mb-4">📊 Case Study: Heparin Contamination (2008)</h4>
            <p class="text-yellow-800 mb-3">
              Counterfeit heparin contaminated with oversulfated chondroitin sulfate caused severe allergic
              reactions. The FDA documented 81 deaths and about 600 allergic reactions linked to the tainted drug.
            </p>
            <p class="text-yellow-800 text-sm italic">
              This case illustrates how counterfeit medicines can cause complex health crises through treatment
              failure, adverse reactions, and loss of confidence in healthcare systems.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "anti-counterfeit-measures",
      title: "🛡️ Fighting Back: Anti-Counterfeit Measures",
      subtitle: "Anti-Counterfeit Measures in Pharmaceutical Industry",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Various anti-counterfeit measures are used in the pharmaceutical industry. Let's explore
            the common and effective strategies being implemented globally and in Nigeria.
          </p>

          <div class="space-y-4 my-6">
            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3">📦 Tamper-Evident/Tamper-Resistant Packing</h4>
              <p class="text-blue-800">
                Packaging with indicators that provide visible evidence when tampered with. Examples include
                blister packs, shrink seals, and breakable caps.
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3">🌈 Holograms</h4>
              <p class="text-green-800 mb-3">
                Security features combining overt, covert, and forensic elements. Includes:
              </p>
              <ul class="space-y-1 text-green-800 text-sm ml-4">
                <li>• Overt features (visible)</li>
                <li>• Covert features (require special tools)</li>
                <li>• Forensic features (destructible)</li>
                <li>• Serialized holograms with traceability</li>
              </ul>
            </div>

            <div class="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3">📱 mPedigree (Mobile Authentication)</h4>
              <p class="text-purple-800 mb-3">
                A track-and-trace system using mobile phones for authentication:
              </p>
              <div class="bg-white p-3 rounded mt-2">
                <p class="font-semibold mb-2 text-sm">How it works:</p>
                <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700">
                  <li>Scratch distinctive panel to reveal PIN</li>
                  <li>Text PIN to 38353</li>
                  <li>Receive SMS response (genuine or counterfeit)</li>
                </ol>
              </div>
              <p class="text-purple-800 text-sm mt-2 italic">
                Incorporated into Nigeria's national quality assurance standards by NAFDAC
              </p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "authentication-methods",
      title: "🔬 Scientific Authentication",
      subtitle: "Authentication of Pharmaceutical Products using Analytical Methods",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Modern analytical methods are crucial for detecting counterfeit medicines. These scientific
            techniques can identify even the slightest differences in formulation.
          </p>

          <div class="bg-indigo-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 mb-4">🧪 Key Analytical Methods:</h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-white p-3 rounded">High Performance Liquid Chromatography (HPLC)</div>
              <div class="bg-white p-3 rounded">Gas Chromatography (GC)</div>
              <div class="bg-white p-3 rounded">Thin-Layer Chromatography (TLC)</div>
              <div class="bg-white p-3 rounded">Colorimetry</div>
              <div class="bg-white p-3 rounded">Optical Spectroscopy</div>
              <div class="bg-white p-3 rounded">Near-Infrared (NIR) Spectroscopy</div>
              <div class="bg-white p-3 rounded">Raman Spectroscopy</div>
              <div class="bg-white p-3 rounded">Isotopic Characterization</div>
            </div>
          </div>

          <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500 my-4">
            <h4 class="font-bold text-green-900 mb-3">📱 TruScan Raman Spectrometer (Nigeria)</h4>
            <p class="text-green-800">
              Used by NAFDAC to detect counterfeit medicines. It identifies the slightest difference in medicine
              formulation and provides a clear "pass" or "fail" reading within seconds of use.
            </p>
            <p class="text-green-800 text-sm mt-2">
              <strong>How it works:</strong> Uses interaction between light and molecular bonds to create unique
              chemical fingerprints for each compound.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "recommendations",
      title: "💡 Recommendations for Combating Counterfeits",
      subtitle: "Recommendations for Combating Counterfeit Medicines",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Combating counterfeit medicines requires a multi-faceted approach involving governments,
            pharmaceutical companies, healthcare professionals, and consumers. Here are key recommendations:
          </p>

          <div class="space-y-4 my-6">
            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3">🏛️ Policy and Legislation</h4>
              <ul class="space-y-2 text-blue-800 text-sm">
                <li>• Develop appropriate medicines policy options</li>
                <li>• Enact new laws or update existing drug laws</li>
                <li>• Establish competent drug regulatory institutions</li>
                <li>• Demonstrate political will and commitment</li>
                <li>• Ensure speedy disposal of counterfeit cases</li>
              </ul>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3">🤝 International Cooperation</h4>
              <ul class="space-y-2 text-green-800 text-sm">
                <li>• Foster international cooperation</li>
                <li>• Enter bilateral and multilateral agreements</li>
                <li>• Work with WHO, Interpol, and WCO</li>
                <li>• Regulate internet pharmacy practices</li>
                <li>• Organize international conventions</li>
              </ul>
            </div>

            <div class="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3">👥 Stakeholder Engagement</h4>
              <ul class="space-y-2 text-purple-800 text-sm">
                <li>• Education and information campaigns</li>
                <li>• Training for enforcement officers</li>
                <li>• NGO and CBO involvement</li>
                <li>• Public awareness programs</li>
                <li>• Consumer empowerment</li>
              </ul>
            </div>

            <div class="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 class="font-bold text-orange-900 mb-3">🔬 Technology and Resources</h4>
              <ul class="space-y-2 text-orange-800 text-sm">
                <li>• Continuous investment in detection technologies</li>
                <li>• Provide necessary financial resources</li>
                <li>• Train personnel for drug control</li>
                <li>• Improve testing facilities</li>
                <li>• Implement traceability systems</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-summary",
      title: "📝 Unit 2 Summary",
      subtitle: "Implications and Anti-Counterfeit Measures Summary",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            In this unit, you learned about the devastating implications of counterfeit medicines and
            the measures we can take to combat them:
          </p>

          <div class="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-red-700 mb-2">⚠️ Implications</h5>
                <p class="text-gray-700 text-sm">Public health crisis, national security threat, economic losses, and IP violations</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🔍 Contributing Factors</h5>
                <p class="text-gray-700 text-sm">Weak enforcement, corruption, high profits, poverty, and lack of cooperation</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">🛡️ Anti-Counterfeit Measures</h5>
                <p class="text-gray-700 text-sm">Tamper-evident packaging, holograms, mPedigree, and analytical methods</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">💡 Solutions</h5>
                <p class="text-gray-700 text-sm">Policy reforms, international cooperation, education, and technology investment</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Remember</p>
            <p class="text-yellow-800">
              Combating counterfeit medicines is a <strong>shared responsibility</strong>. No action today means
              no solution tomorrow!
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "final-summary",
      title: "🎉 Chapter Summary",
      subtitle: "What We've Learned",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🎉 You've completed Chapter 9 on the Global Threat of Counterfeit Medicines.
            Let's recap what we've covered:
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">📚 Complete Chapter Overview:</h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 mb-2">💊 Unit 1: Drugs and Counterfeit Drugs</h5>
                <p class="text-gray-700 text-sm">
                  • Definition of drugs and medicines<br>
                  • Multiple definitions of counterfeit medicines (WHO, US, Philippines, Nigeria)<br>
                  • Mathematical classification of counterfeit types<br>
                  • Global magnitude and burden (10% of pharmaceutical trade, billions in losses)
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🛡️ Unit 2: Implications and Solutions</h5>
                <p class="text-gray-700 text-sm">
                  • 10 factors encouraging counterfeiting<br>
                  • 5 major implications (health crisis, security threat, economic impact, IP violations)<br>
                  • Anti-counterfeit measures (packaging, holograms, mPedigree, analytical methods)<br>
                  • Comprehensive recommendations for combating counterfeits
                </p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
            <p class="font-semibold text-green-900 mb-2">🌟 Key Message</p>
            <p class="text-green-800">
              Counterfeit medicines cause serious public health crises and threaten national and international
              security. They create negative economic impacts and violate intellectual property rights.
              <strong>We must take positive actions today to combat this menace!</strong>
            </p>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Next Steps</p>
            <p class="text-yellow-800">
              Use your knowledge to identify counterfeit medicines, support genuine pharmaceutical practices,
              and advocate for stronger drug regulation. Your awareness can save lives! 💪
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "self-assessment",
      title: "📝 Self-Assessment Questions",
      subtitle: "Test Your Understanding",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Test your understanding of counterfeit medicines by answering these questions:
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h4 class="font-bold text-blue-900 mb-3">I. Define Drug</h4>
              <p class="text-blue-800 text-sm">
                Provide a comprehensive definition of what constitutes a drug, including its components
                and purposes.
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 class="font-bold text-green-900 mb-3">II. Give 3 definitions of counterfeit medicine</h4>
              <p class="text-green-800 text-sm">
                Provide definitions from at least three different authoritative sources (e.g., WHO, US FDA,
                Nigerian law).
              </p>
            </div>

            <div class="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h4 class="font-bold text-purple-900 mb-3">III. Give brief description of the magnitude of counterfeit medicine</h4>
              <p class="text-purple-800 text-sm">
                Describe the global scale, economic impact, health consequences, and regional variations
                in counterfeit medicine prevalence.
              </p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "tutor-assessment",
      title: "📚 Tutor Marked Assessment",
      subtitle: "Advanced Assessment Questions",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            These questions are designed for deeper analysis and evaluation of your understanding:
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-red-50 p-5 rounded-lg border border-red-200">
              <h4 class="font-bold text-red-900 mb-3">I. Give global description of counterfeit drug</h4>
              <p class="text-red-800 text-sm">
                Provide a comprehensive global overview of counterfeit drugs, including definitions,
                prevalence, impacts, and international efforts to combat them.
              </p>
            </div>

            <div class="bg-orange-50 p-5 rounded-lg border border-orange-200">
              <h4 class="font-bold text-orange-900 mb-3">II. Give Specific examples of counterfeit drug, showing country of origin, the year and the type of counterfeiting</h4>
              <p class="text-orange-800 text-sm">
                Provide specific examples of counterfeit drug cases, including:
                <br>• Avastin (cancer treatment) - United States, 2012
                <br>• Viagra and Cialis (erectile dysfunction) - United Kingdom, 2012
                <br>• Truvada and Viread (HIV/AIDS) - United Kingdom, 2011
                <br>• Zidolam-N (HIV/AIDS) - Kenya, 2011
                <br>• Alli (weight-loss) - United States, 2010
                <br>• Anti-diabetic medicine - China, 2009
                <br>• Metakelfin (antimalarial) - Tanzania, 2009
              </p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    }
  ]
};
