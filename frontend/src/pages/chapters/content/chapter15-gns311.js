// Chapter 15: Microbes and Diseases
// GNS 311 - Module 15

export const chapter15Content = {
  title: "Microbes and Diseases",
  author: "Ande, A.T.",
  department: "Department of Zoology, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🦠 Welcome to Microbes and Diseases!",
      subtitle: "Introduction",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome to the fascinating world of <strong>microorganisms</strong>! 🌟 These tiny organisms
            that we can't see with the naked eye play crucial roles in our ecosystem and can have
            significant impacts on human health. Understanding microbes and the diseases they cause
            is essential for maintaining good health and preventing illness.
          </p>
          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">💡 Did you know?</p>
            <p class="text-teal-800 dark:text-teal-200">
              Microbes are everywhere! They form a significant part of the community that ensures
              interaction between living and non-living components, making them essential for
              ecosystem sustainability. Some microbes help us (like in yogurt production), while
              others can cause diseases.
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter will introduce you to microorganisms, how they invade hosts, cause diseases,
            and how they spread. You'll learn about the different types of microbial diseases and
            strategies for prevention and treatment.
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
              <span>Give the definition and identify various groups of microorganisms</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Identify various microbial reservoirs</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain ways by which microbes can invade a susceptible host</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Differentiate between pathogenicity and normal human flora</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Establish ways or routes of transmission of microbes</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Analyze the etiology and prevention of various microbial diseases</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-intro",
      title: "🔬 Unit 1: Understanding Microorganisms",
      subtitle: "Introduction to Microorganisms",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Let's begin our journey into the world of <strong>microorganisms</strong>! 🤖 Microbes are
            single-celled or cell-cluster organisms that cannot be seen with the naked eye. They combine
            plant and animal features and require special equipment like microscopes to observe them.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400 p-4 my-4">
            <p class="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔍 What are Microbes?</p>
            <p class="text-blue-800 dark:text-blue-200">
              Microbes include bacteria, fungi, viruses, and protozoans. Despite their small size,
              they play very important roles in nature, including synthesis and degradation of organic
              substances. Humans have learned to harness microbes for beneficial purposes like beer
              production, yogurt making, and antibiotic development.
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            In this unit, we'll explore host invasion, pathogenicity, and microbial reservoirs.
            Understanding these concepts will help you appreciate how microbes interact with their
            environment and hosts.
          </p>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit1-definition",
      title: "🧬 What are Microorganisms?",
      subtitle: "Definition and Groups",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Microbe</strong> is a noun coined from "micro-organism," meaning organisms that
            cannot be seen with the naked eye. They exist as single cells or cell clusters and can
            only be appreciated with the aid of special gadgets such as the microscope.
          </p>
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-3">Main Groups of Microorganisms:</h4>
            <div class="space-y-3">
              <div class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">1.</span>
                <div>
                  <strong class="text-gray-900 dark:text-white">Bacteria:</strong> Single-celled prokaryotic organisms
                  that can be beneficial or harmful
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">2.</span>
                <div>
                  <strong class="text-gray-900 dark:text-white">Fungi:</strong> Eukaryotic organisms including yeasts
                  and molds
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">3.</span>
                <div>
                  <strong class="text-gray-900 dark:text-white">Viruses:</strong> Obligate parasites that require host
                  cells to reproduce
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">4.</span>
                <div>
                  <strong class="text-gray-900 dark:text-white">Protozoans:</strong> Single-celled eukaryotic organisms
                  that can be free-living or parasitic
                </div>
              </div>
            </div>
          </div>
          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🌍 Ecological Importance</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Microbes form a significant integral part of ecosystems, ensuring interaction between
              living and non-living components. Man has taken advantage of this through production
              of beer, yogurt, antibiotics, baking, soak-away systems, etc.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit1-host-invasion",
      title: "🎯 How Microbes Invade Hosts",
      subtitle: "Host Invasion",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            To cause disease, microbes must successfully <strong>establish contact, multiply, and colonize</strong>
            their host. This requires overcoming the host's defense mechanisms, primarily the impenetrable skin barrier.
          </p>

          <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400 my-4">
            <h4 class="font-bold text-red-900 dark:text-red-100 mb-3">🛡️ Breaking the Skin Barrier</h4>
            <p class="text-red-800 dark:text-red-200 mb-3">
              Microbes use various strategies to breach host defenses:
            </p>
            <ul class="space-y-2 text-red-800 dark:text-red-200">
              <li><strong>Adhesion:</strong> Attaching to host surfaces and producing enzymes to break down barriers</li>
              <li><strong>Wound exploitation:</strong> Taking advantage of skin lacerations and wounds</li>
              <li><strong>Site preference:</strong> Some microbes prefer specific locations (e.g., Neisseria gonorrhoeae in urogenital tract)</li>
              <li><strong>Natural openings:</strong> Utilizing mouth, anus, and vagina which have restricted but favorable environments</li>
            </ul>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400 my-4">
            <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">🏠 Human Microflora</h4>
            <p class="text-purple-800 dark:text-purple-200 mb-3">
              Normal human microflora resides on skin, orifices, body fluids, and tissues. Most are harmless,
              but some can become pathogenic under certain conditions.
            </p>
            <div class="bg-white dark:bg-gray-700 p-3 rounded mt-2">
              <p class="text-sm font-semibold mb-2">Locations include:</p>
              <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Skin and skin appendages</li>
                <li>• Mouth, nose, anus, vagina</li>
                <li>• Body fluids (saliva, blood, semen)</li>
                <li>• Tissue surfaces</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Disease Development</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Pathogenic microbes cause disease by altering host systems, resulting in loss of productivity.
              This disease condition is an alteration in the host system leading to various health issues.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit1-pathogenicity",
      title: "🦠 Pathogenicity: How Microbes Cause Disease",
      subtitle: "Pathogenicity",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Pathogenicity</strong> refers to a microbe's ability to cause disease. Pathogenic microbes
            initiate alterations in the host's system to improve their survival chances.
          </p>

          <div class="bg-orange-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-orange-900 mb-4">Mechanisms of Pathogenicity:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🧪 Production of Toxins</h5>
                <p class="text-gray-700 dark:text-gray-300">Excretory wastes that are intolerable to the host, causing various symptoms</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🥛 Nutrient Deprivation</h5>
                <p class="text-gray-700 dark:text-gray-300">Microbes compete with hosts for essential nutrients</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🏗️ Tissue Confiscation</h5>
                <p class="text-gray-700 dark:text-gray-300">Using host tissue for microbial reproduction (e.g., viral infections)</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">💥 Tissue Destruction</h5>
                <p class="text-gray-700 dark:text-gray-300">Direct destruction of host tissue (e.g., anemia from malaria)</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🔄 Tissue Changes</h5>
                <p class="text-gray-700 dark:text-gray-300">Initiating abnormal changes that may lead to cancers or tumors</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🛡️ Immune Suppression</h5>
                <p class="text-gray-700 dark:text-gray-300">Reducing host immune response, creating opportunities for opportunistic infections</p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400 p-4 my-4">
            <p class="font-semibold text-blue-900 dark:text-blue-100 mb-2">⚖️ Pathogenicity vs. Normal Flora</p>
            <p class="text-blue-800 dark:text-blue-200">
              Normal human flora are microorganisms that reside in or on the body without causing harm.
              Pathogenic microbes, however, cause disease by disrupting normal body functions and eliciting
              harmful responses.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit1-reservoirs",
      title: "🏞️ Microbial Reservoirs",
      subtitle: "Where Microbes Live",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Microbes reside temporarily in natural environments called <strong>reservoirs</strong>.
            These are the primary habitats where microbes survive and multiply before moving to hosts.
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🌍 Major Reservoirs</h4>
              <ul class="space-y-2 text-green-800 dark:text-green-200">
                <li>💧 <strong>Water:</strong> Rivers, lakes, groundwater</li>
                <li>🌱 <strong>Soil:</strong> Rich source of various microbes</li>
                <li>💨 <strong>Atmosphere:</strong> Airborne microorganisms</li>
                <li>👥 <strong>Humans:</strong> Carriers of various pathogens</li>
                <li>🐾 <strong>Animals:</strong> Domestic and wild animal reservoirs</li>
              </ul>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-3">🔄 Movement Between Reservoirs</h4>
              <p class="text-red-800 dark:text-red-200 mb-3">
                Microbes move from one reservoir to another in their bid to survive. Successful
                establishment in a host leads to disease transmission.
              </p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm font-bold mb-2 text-red-900 dark:text-red-100">Zoonotic Diseases:</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Diseases that can be transmitted from animals to humans (e.g., rabies, avian flu)
                </p>
              </div>
            </div>
          </div>

          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">🔬 Importance of Understanding Reservoirs</p>
            <p class="text-teal-800 dark:text-teal-200">
              Knowledge of microbial reservoirs helps in developing effective prevention and control
              strategies for infectious diseases. Breaking the chain of transmission often involves
              targeting the reservoir.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit2-intro",
      title: "🚑 Unit 2: Transmission and Microbial Diseases",
      subtitle: "Microbial Diseases",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Now that we understand microorganisms and how they cause disease, let's explore
            <strong>how they spread</strong> and the <strong>diseases they cause</strong>. This knowledge
            is crucial for prevention and treatment strategies.
          </p>
          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400 p-4 my-4">
            <p class="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Unit Focus</p>
            <p class="text-purple-800 dark:text-purple-200">
              We'll cover transmission routes, different types of microbial diseases (viral, bacterial,
              fungal, protozoan), and prevention strategies. Special emphasis will be given to diseases
              common in Nigeria.
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            Understanding transmission routes helps us break the chain of infection and prevent
            disease spread in communities.
          </p>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit2-transmission",
      title: "📤 How Microbes Spread",
      subtitle: "Transmission Routes",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The <strong>transmission</strong> of microbes is essential for their survival. They utilize
            media that are inevitably used by prospective hosts, such as air, water, food, etc.
          </p>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-4">🛣️ Four Basic Transmission Routes:</h4>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">🥤 Contaminated Food and Water (Oral-faecal Route)</h5>
                <p class="text-gray-700 dark:text-gray-300">Most common route where pathogens from faeces contaminate food/water. Poor sanitation and hand hygiene contribute to spread.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">💨 Respiratory Tract Contamination (Respiratory Route)</h5>
                <p class="text-gray-700 dark:text-gray-300">Pathogens spread through droplets from coughing/sneezing. Can remain infective even after drying.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">🤝 Direct Contact</h5>
                <p class="text-gray-700 dark:text-gray-300">Direct or indirect contact with infected persons/objects. Includes sexual contact, kissing, sharing personal items.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">💉 Inoculation Through Skin</h5>
                <p class="text-gray-700 dark:text-gray-300">Blood-sucking vectors transmit pathogens. Mosquitoes are common vectors for many diseases.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🎯 Breaking the Transmission Chain</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Understanding these routes helps us develop effective prevention strategies like improved
              sanitation, vector control, and personal hygiene practices.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-viral-diseases",
      title: "🦠 Viral Diseases",
      subtitle: "Virus-Caused Infections",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Viral diseases</strong> are caused by viruses, the smallest disease-causing organisms.
            They are obligate parasites that can only live and multiply within host cells.
          </p>

          <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-red-900 dark:text-red-100 mb-4">🔬 Viral Characteristics:</h4>
            <ul class="space-y-2 text-red-800 dark:text-red-200">
              <li>• Cannot be seen under ordinary light microscopes</li>
              <li>• Obligate parasites requiring host cells</li>
              <li>• Inert outside host cells (borderline living/non-living)</li>
              <li>• Alter host cell functions for reproduction</li>
              <li>• Difficult to treat (reside within host cells)</li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4">📊 Common Viral Diseases in Nigeria:</h4>
            <div class="overflow-x-auto">
              <table class="min-w-full table-auto">
                <thead>
                  <tr class="bg-gray-200">
                    <th class="px-4 py-2 text-left">Disease</th>
                    <th class="px-4 py-2 text-left">Symptoms</th>
                    <th class="px-4 py-2 text-left">Transmission</th>
                    <th class="px-4 py-2 text-left">Prevention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-2 font-semibold">Polio</td>
                    <td class="px-4 py-2">Fever, headache, paralysis</td>
                    <td class="px-4 py-2">Droplet, faecal contamination</td>
                    <td class="px-4 py-2">Vaccination, water treatment</td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="px-4 py-2 font-semibold">Measles</td>
                    <td class="px-4 py-2">Fever, rash, coughing</td>
                    <td class="px-4 py-2">Droplet infection</td>
                    <td class="px-4 py-2">Vaccination, isolation</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 font-semibold">Yellow Fever</td>
                    <td class="px-4 py-2">Fever, jaundice</td>
                    <td class="px-4 py-2">Mosquito vectors</td>
                    <td class="px-4 py-2">Vaccination, mosquito control</td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="px-4 py-2 font-semibold">Common Cold</td>
                    <td class="px-4 py-2">Runny nose, sneezing</td>
                    <td class="px-4 py-2">Droplet infection</td>
                    <td class="px-4 py-2">Hygiene, ventilation</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 font-semibold">AIDS</td>
                    <td class="px-4 py-2">Immune deficiency</td>
                    <td class="px-4 py-2">Body fluid contact</td>
                    <td class="px-4 py-2">Safe practices, education</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400 p-4 my-4">
            <p class="font-semibold text-blue-900 dark:text-blue-100 mb-2">💊 Treatment Challenges</p>
            <p class="text-blue-800 dark:text-blue-200">
              Viral diseases are difficult to treat because viruses live inside host cells. Drugs that
              kill viruses may also damage host cells. Prevention through vaccination and hygiene
              is often the best approach.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-bacterial-diseases",
      title: "🦠 Bacterial Diseases",
      subtitle: "Bacteria-Caused Infections",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Bacterial diseases</strong> are caused by bacteria, which are among the first
            microorganisms discovered to cause disease. They enter through mouth, nose, vagina,
            anus, or broken skin.
          </p>

          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-green-900 dark:text-green-100 mb-4">🔬 Bacterial Characteristics:</h4>
            <ul class="space-y-2 text-green-800 dark:text-green-200">
              <li>• Secrete enzymes to break down food substances</li>
              <li>• Produce toxic waste products</li>
              <li>• Can be treated with antibiotics</li>
              <li>• Enter through natural openings or wounds</li>
              <li>• Some form spores for survival</li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4">📊 Common Bacterial Diseases in Nigeria:</h4>
            <div class="overflow-x-auto">
              <table class="min-w-full table-auto">
                <thead>
                  <tr class="bg-gray-200">
                    <th class="px-4 py-2 text-left">Disease</th>
                    <th class="px-4 py-2 text-left">Causative Agent</th>
                    <th class="px-4 py-2 text-left">Symptoms</th>
                    <th class="px-4 py-2 text-left">Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-2 font-semibold">Cholera</td>
                    <td class="px-4 py-2">Vibrio cholerae</td>
                    <td class="px-4 py-2">Severe diarrhea, dehydration</td>
                    <td class="px-4 py-2">Antibiotics, ORT</td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="px-4 py-2 font-semibold">Tuberculosis</td>
                    <td class="px-4 py-2">Mycobacterium tuberculosis</td>
                    <td class="px-4 py-2">Coughing, weight loss</td>
                    <td class="px-4 py-2">Antibiotics</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 font-semibold">Gonorrhea</td>
                    <td class="px-4 py-2">Neisseria gonorrhoeae</td>
                    <td class="px-4 py-2">Painful urination, sterility</td>
                    <td class="px-4 py-2">Antibiotics</td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="px-4 py-2 font-semibold">Tetanus</td>
                    <td class="px-4 py-2">Clostridium tetani</td>
                    <td class="px-4 py-2">Muscle spasms, lockjaw</td>
                    <td class="px-4 py-2">Antibiotics, vaccination</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 font-semibold">Pneumonia</td>
                    <td class="px-4 py-2">Pneumococcus</td>
                    <td class="px-4 py-2">Chest pain, fever, coughing</td>
                    <td class="px-4 py-2">Antibiotics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">💧 Prevention Focus</p>
            <p class="text-teal-800 dark:text-teal-200">
              Good water supply, personal hygiene, and proper sanitation are crucial for preventing
              bacterial diseases. Vaccination and antibiotic treatment are effective when available.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-fungal-protozoan",
      title: "🍄 Fungal and Protozoan Diseases",
      subtitle: "Other Microbial Infections",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            While bacterial and viral diseases are more common, <strong>fungal and protozoan diseases</strong>
            also pose significant health challenges, especially in tropical regions like Nigeria.
          </p>

          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">🍄 Fungal Diseases</h4>
              <div class="space-y-3">
                <div class="bg-white dark:bg-gray-700 p-3 rounded">
                  <h5 class="font-semibold text-purple-800 dark:text-purple-200">Ringworm & Athlete's Foot</h5>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Caused by Trichophyton sp. Affects skin, scalp, feet. Spread by contact.</p>
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded">
                  <h5 class="font-semibold text-purple-800 dark:text-purple-200">Treatment & Prevention</h5>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Antiseptic treatments, personal cleanliness, avoid sharing personal items.</p>
                </div>
              </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🦠 Protozoan Diseases</h4>
              <div class="space-y-3">
                <div class="bg-white dark:bg-gray-700 p-3 rounded">
                  <h5 class="font-semibold text-green-800 dark:text-green-200">Malaria</h5>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Caused by Plasmodium sp. Transmitted by Anopheles mosquitoes.</p>
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded">
                  <h5 class="font-semibold text-green-800 dark:text-green-200">Trypanosomiasis (Sleeping Sickness)</h5>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Caused by Trypanosoma sp. Transmitted by Tsetse flies.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500 my-4">
            <h4 class="font-bold text-orange-900 mb-3">🎯 Malaria: A Major Health Challenge</h4>
            <p class="text-orange-800 mb-3">
              Malaria is caused by Plasmodium parasites that live in human blood. They destroy red blood cells,
              causing anemia and other complications.
            </p>
            <div class="bg-white dark:bg-gray-700 p-3 rounded">
              <p class="text-sm font-semibold mb-2">Key Facts:</p>
              <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Transmitted by female Anopheles mosquitoes</li>
                <li>• Causes fever, headache, joint pains</li>
                <li>• Major cause of death in tropical regions</li>
                <li>• Prevention: Mosquito nets, repellents, environmental control</li>
                <li>• Treatment: Antimalarial drugs (though resistance is a concern)</li>
              </ul>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400 p-4 my-4">
            <p class="font-semibold text-blue-900 dark:text-blue-100 mb-2">🌍 Tropical Disease Burden</p>
            <p class="text-blue-800 dark:text-blue-200">
              Many fungal and protozoan diseases thrive in warm, humid environments. Climate change
              and environmental factors influence their distribution and prevalence.
            </p>
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
            Congratulations! 🎉 You've completed Chapter 15 on Microbes and Diseases. Let's recap
            the key concepts we've covered:
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">1. Microorganisms</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Microbes include bacteria, viruses, fungi, and protozoans. They play crucial ecological roles and can be beneficial or harmful.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">2. Host Invasion & Pathogenicity</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Microbes invade hosts by breaking barriers, producing toxins, and competing for resources. Pathogenicity involves tissue damage and immune suppression.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">3. Reservoirs & Transmission</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Microbes reside in reservoirs (water, soil, air, humans, animals) and spread through contaminated food/water, respiratory droplets, direct contact, and vectors.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">4. Microbial Diseases</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Viral, bacterial, fungal, and protozoan diseases each have unique characteristics, transmission routes, and prevention strategies.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🎯 Prevention is Key</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Understanding microbes and their diseases empowers us to prevent infections through
              vaccination, hygiene, vector control, and appropriate treatment. Knowledge of these
              microorganisms helps protect individual and community health.
            </p>
          </div>

          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 dark:border-indigo-400 dark:border-indigo-400 p-4 my-4">
            <p class="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">📚 Further Reading</p>
            <ul class="text-indigo-800 dark:text-indigo-200 space-y-1">
              <li>• Brock, T. D. et al. (1994). Biology of Microorganisms</li>
              <li>• Cheng, T. C. (1973). General Parasitology</li>
              <li>• Godman, A. and Gutteridge, A. (1978). A New Health Science for Africa</li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 3
    }
  ]
};
