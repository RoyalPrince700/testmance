// Chapter 3: Concept of Matter
// GNS 311 - Module 3

export const chapter3Content = {
  title: "Concept of Matter",
  author: "Akoshile C.O. and Abdus-Salam, N.",
  department: "Department of Physics and Chemistry, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🎯 Welcome to the World of Matter!",
      subtitle: "Introduction & Overview",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome! 🌟 Often one keeps in the mind what he thinks matter is. It does not imply universal definition. 
            Concept is like an accepted norm or definition. So, while trying to understand matter, the adopted 
            concept is what is perceived and accepted as matter.
          </p>
          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
            <p class="font-semibold text-teal-900 mb-2">💡 Did you know?</p>
            <p class="text-teal-800">
              Interestingly, only <strong>two kinds of matter</strong> exist in the world! This chapter will 
              help you understand what matter really is and how it behaves.
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter discusses the concept of matter, exploring everything from its basic definition to 
            the fascinating world of nuclear changes. You'll learn about the kinetic theory, states of matter, 
            and the powerful forces within atoms!
          </p>
          
          <div class="bg-blue-50 p-5 rounded-lg border border-blue-200 my-6">
            <h4 class="font-bold text-blue-900 mb-3 text-lg">📚 Module Structure</h4>
            <p class="text-blue-800 mb-4">
              This module introduces you into the concept of matter vis-a-vis the Kinetic Theory, States of Matter 
              and Nuclear Threats. This module is divided into three units:
            </p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded-lg border border-blue-200">
                <h5 class="font-bold text-blue-900 mb-2">📖 Unit 1</h5>
                <p class="text-blue-800 text-sm">Definition of Matter</p>
              </div>
              <div class="bg-white p-4 rounded-lg border border-green-200">
                <h5 class="font-bold text-green-900 mb-2">🔄 Unit 2</h5>
                <p class="text-green-800 text-sm">Change of State of Matter</p>
              </div>
              <div class="bg-white p-4 rounded-lg border border-purple-200">
                <h5 class="font-bold text-purple-900 mb-2">⚛️ Unit 3</h5>
                <p class="text-purple-800 text-sm">Nuclear Change</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg my-4">
            <p class="text-lg font-semibold mb-4 text-gray-900">🎓 Learning Outcomes</p>
            <p class="text-gray-800 mb-3">By the end of this module, you'll be able to:</p>
            <ul class="space-y-2 list-none">
              <li class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">✓</span>
                <span class="text-gray-800">Define matter</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">✓</span>
                <span class="text-gray-800">Describe the scientific methods of studying matter</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">✓</span>
                <span class="text-gray-800">Classify matter based on its composition and physical states</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">✓</span>
                <span class="text-gray-800">Explain the kinetic theory of matter</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">✓</span>
                <span class="text-gray-800">Define what an atom is and explain properties of the 3 subatomic particles</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">✓</span>
                <span class="text-gray-800">Explain the significance of nuclear change</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit1-intro",
      title: "📚 Unit 1: Definition of Matter",
      subtitle: "Introduction & Learning Outcomes",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Let's start our journey by understanding what matter really is! This unit will explore the 
            fundamental definition of matter and how scientists study it.
          </p>
          
          <div class="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500 my-4">
            <p class="text-lg font-semibold mb-4 text-teal-900">🎓 Unit 1 Learning Outcomes</p>
            <p class="text-teal-800 mb-3">At the end of this unit, you should be able to:</p>
            <ul class="space-y-2 list-none">
              <li class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">✓</span>
                <span class="text-teal-800">Define matter</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">✓</span>
                <span class="text-teal-800">Describe the scientific methods of studying matter</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">✓</span>
                <span class="text-teal-800">Classify matter based on its composition and physical states</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3 font-bold">✓</span>
                <span class="text-teal-800">Explain the kinetic theory of matter</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-what-is-matter",
      title: "🔍 What is Matter?",
      subtitle: "Definition of Matter",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The simplified definition of matter is <strong>anything that occupies space, possesses mass of its own, 
            offers resistance to change of inertia and may be felt by any of our sensory organs</strong>.
          </p>
          
          <div class="space-y-4 my-6">
            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3">🌱 Living Matter</h4>
              <p class="text-blue-800 mb-2">
                Living matter has the properties of:
              </p>
              <ul class="space-y-1 text-blue-800 text-sm ml-4">
                <li>• Respiration</li>
                <li>• Growth</li>
                <li>• Movement</li>
                <li>• Metabolism (eating and excretion)</li>
                <li>• Reproduction</li>
              </ul>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3">💎 Non-Living Matter</h4>
              <p class="text-green-800">
                Non-living matter does not exhibit the above properties. Growth in non-living matter only comes 
                if there is an addition of the same or different matter by some processes to the matter.
              </p>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-purple-900 mb-3">📊 Classification of Matter</h4>
            <p class="text-purple-800 mb-3">
              Matter is constituted—this means that matter is also made up of something else. Matter by its 
              composition can be divided into:
            </p>
            <div class="grid md:grid-cols-2 gap-4 mt-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">Pure Substances</h5>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Elements</li>
                  <li>• Compounds</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">Mixtures</h5>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Homogeneous</li>
                  <li>• Heterogeneous</li>
                </ul>
              </div>
            </div>
            <p class="text-purple-800 mt-3">
              Matter can also exist in any of the three physical states which are <strong>solid, liquid, gas or plasma</strong>.
            </p>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">💡 Key Concepts</p>
            <div class="space-y-2 text-yellow-800 text-sm">
              <p><strong>Element:</strong> Has only one type of atom e.g. hydrogen. About 118 elements exist in nature 
              and are arranged into eight (8) periods of the periodic table.</p>
              <p><strong>Compound:</strong> Has more than one type of atom bonded together chemically which can only be 
              separated by a chemical process e.g. H₂O is made up of hydrogen and oxygen.</p>
              <p><strong>Mixture:</strong> Made up of more than one element or compound in a weak bond that requires no 
              chemical process to separate, but requires only a simple physical procedure.</p>
            </div>
          </div>

          <div class="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
            <h4 class="font-bold text-indigo-900 mb-3">🔬 Types of Mixtures</h4>
            <div class="space-y-3">
              <div class="bg-white p-3 rounded">
                <h5 class="font-semibold text-indigo-700 mb-1">Homogeneous Mixture</h5>
                <p class="text-sm text-gray-700">Uniform composition throughout (e.g., salt in water, air mixture)</p>
              </div>
              <div class="bg-white p-3 rounded">
                <h5 class="font-semibold text-indigo-700 mb-1">Heterogeneous Mixture</h5>
                <p class="text-sm text-gray-700">Non-uniform composition (e.g., chocolate, soil)</p>
              </div>
            </div>
          </div>

          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
            <p class="font-semibold text-teal-900 mb-2">📐 Understanding Matter</p>
            <p class="text-teal-800">
              Matter can be represented pictorially while a theory is a statement of facts for understanding, 
              explaining and making predictions about an observable phenomenon. A scientific law is a statement 
              of fact that has been subjected to critical analysis, experimentation and found to correctly explain 
              an observable phenomenon under condition(s) stated.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit1-kinetic-theory",
      title: "⚡ The Kinetic Theory of Matter",
      subtitle: "Understanding Motion in Matter",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The word <strong>kinetic</strong> stands for motion while a theory is a statement of facts for 
            understanding, explaining and making predictions about an observable phenomenon. It is used as a 
            plausible general principle to explain a phenomenon.
          </p>
          
          <div class="bg-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 mb-3">🏛️ Historical Background</h4>
            <p class="text-blue-800 mb-3">
              The Greeks in the early stages of formulation of the kinetic theory conceptualized that if attempt 
              is made to continually subdivide matter, a smallest one will be attained that can exist on its own. 
              This is discrete, that is, it is a repeatable entity, cannot be continuously fractionalized at will.
            </p>
            <p class="text-blue-800">
              This entity is called <strong>molecule</strong> and it is made up of one or more atoms.
            </p>
          </div>

          <div class="bg-green-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-green-900 mb-4">🎯 Key Principle</h4>
            <p class="text-green-800 text-lg mb-3">
              We can explain the behaviour of matter by understanding its state or motional behaviour (kinetics)
            </p>
            <div class="space-y-3 mt-4">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">🔲 Solids</h5>
                <p class="text-sm text-gray-700">Particles only vibrate and rotate about a mean position</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">💧 Liquids</h5>
                <p class="text-sm text-gray-700">Particles vibrate and rotate about a mean position but can also 
                easily slide over each other</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">💨 Gases</h5>
                <p class="text-sm text-gray-700">Particles move randomly and are translated from one place to another</p>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 my-4">
            <h4 class="font-bold text-purple-900 mb-4">📋 Fundamental Assumptions of Kinetic Theory</h4>
            <p class="text-purple-800 mb-3">
              In building up the kinetic theory, some fundamental assumptions are made and employed:
            </p>
            <div class="space-y-2 text-purple-800">
              <div class="flex items-start">
                <span class="text-purple-500 mr-2 font-bold">1.</span>
                <span>Particle dimension is much less than the distance between collisions</span>
              </div>
              <div class="flex items-start">
                <span class="text-purple-500 mr-2 font-bold">2.</span>
                <span>Particle velocity is large such that there are many collisions occurring in a short time interval</span>
              </div>
              <div class="flex items-start">
                <span class="text-purple-500 mr-2 font-bold">3.</span>
                <span>Separation between particles is large such that mutual columbic (charged particle) forces 
                of attraction or repulsion are negligible</span>
              </div>
              <div class="flex items-start">
                <span class="text-purple-500 mr-2 font-bold">4.</span>
                <span>Collisions between particles are perfectly elastic</span>
              </div>
              <div class="flex items-start">
                <span class="text-purple-500 mr-2 font-bold">5.</span>
                <span>Particles have no sense of history between collision</span>
              </div>
              <div class="flex items-start">
                <span class="text-purple-500 mr-2 font-bold">6.</span>
                <span>Motion is random</span>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit1-summary",
      title: "📝 Unit 1 Summary",
      subtitle: "Key Points from Definition of Matter",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Matter is anything that occupies space and possesses mass of its own. Matter can also exist in any 
            of the three physical states which are solid, liquid, gas or plasma. The behaviour of matter can be 
            explained by understanding its state or motional behaviour (Kinetic Theory).
          </p>
          
          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🔍 Matter Defined</h5>
                <p class="text-gray-700 text-sm">Anything that occupies space, possesses mass, offers resistance to 
                change of inertia, and may be felt by sensory organs.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">📊 Classification</h5>
                <p class="text-gray-700 text-sm">Matter can be classified as pure substances (elements, compounds) or 
                mixtures (homogeneous, heterogeneous), and exists in physical states (solid, liquid, gas, plasma).</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">⚡ Kinetic Theory</h5>
                <p class="text-gray-700 text-sm">Explains matter behavior through particle motion: solids vibrate, 
                liquids slide, gases move randomly. Based on six fundamental assumptions.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit2-intro",
      title: "🔄 Unit 2: Change of State of Matter",
      subtitle: "Introduction",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Matter is able to transform from one physical state to another. The state in which matter exists at 
            a given time depends on how closely held its particles are. There are three states of matter which are 
            solid, liquid and gas or plasma. The subatomic particles of atoms are also explained.
          </p>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit2-learning-outcomes",
      title: "🎓 Unit 2 Learning Outcomes",
      subtitle: "What You'll Learn in This Unit",
      content: `
        <div class="space-y-4">
          <p class="text-lg font-semibold mb-4">At the end of this unit, you should be able to:</p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Describe the three states of matter</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain the temperature dependence on state</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>List the subatomic particles of an atom</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit2-states",
      title: "🌊 States of Matter",
      subtitle: "The Three Physical States",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Matter can exist in any of the three physical states which are <strong>solid, liquid, gas or plasma</strong>. 
            Matter takes its own shape when in solid form. It takes the shape of the container when in liquid 
            (and flows when poured) and occupies all available spaces as gas or plasma.
          </p>
          
          <div class="bg-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 mb-3">🔍 Distinguishing States</h4>
            <p class="text-blue-800">
              The state of matter is distinguishable by the <strong>temperature and appearance</strong> of the matter.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h4 class="font-bold text-yellow-900 mb-2">🔲 Solid</h4>
              <p class="text-yellow-800 text-sm">Takes its own shape, particles closely packed</p>
            </div>
            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-2">💧 Liquid</h4>
              <p class="text-blue-800 text-sm">Takes shape of container, flows when poured</p>
            </div>
            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-2">💨 Gas/Plasma</h4>
              <p class="text-green-800 text-sm">Occupies all available spaces</p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit2-changes",
      title: "🔄 Changes in State of Matter",
      subtitle: "Physical and Chemical Changes",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Matter is capable of change from one physical state to another due to <strong>temperature change</strong> 
            experienced by the matter. The change may involve transformation of form when a chemical reaction is involved.
          </p>
          
          <div class="space-y-4 my-6">
            <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3">🔄 Physical Change</h4>
              <p class="text-green-800 mb-3">
                The former is referred to as physical change. All physical change involves change of state. Many a time, 
                matter changes from solid to liquid and to gas but in few others, it changes from solid to gas 
                without passing through liquid state.
              </p>
              <div class="bg-white p-4 rounded mt-3">
                <p class="font-semibold mb-2 text-gray-900">Sublimation:</p>
                <p class="text-sm text-gray-700 mb-2">
                  Such substances are said to <strong>sublime</strong> and the process of change is <strong>sublimation</strong>.
                </p>
                <p class="text-sm text-gray-700">
                  Examples include <strong>iodine and ammonium chloride</strong>.
                </p>
              </div>
            </div>

            <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-3">⚗️ Chemical Change</h4>
              <p class="text-red-800 mb-3">
                The latter is referred to as chemical change. The nature of matter obtained when a chemical change 
                occurs is fundamentally different from the starting matter.
              </p>
              <div class="bg-white p-4 rounded mt-3">
                <p class="font-semibold mb-2 text-gray-900">Example:</p>
                <p class="text-sm text-gray-700">
                  When an iron bar is exposed to the right humidity, temperature and air, it rusts. The product 
                  of rust is different from the pure iron bar.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-4">
            <p class="font-semibold text-purple-900 mb-2">🌡️ Temperature Dependence</p>
            <p class="text-purple-800">
              The state of matter depends on temperature. As temperature increases, matter typically changes from 
              solid → liquid → gas. The reverse occurs when temperature decreases.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-subatomic",
      title: "⚛️ Subatomic Particles",
      subtitle: "Building Blocks of Atoms",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Beyond the atomic study are the subatomic particles revealed by probes made using x-rays. Atomic models 
            were constructed by Rutherford and Bohr. The model showed that the atom had a small positively charged 
            nucleus surrounded by electrons.
          </p>
          
          <div class="bg-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 mb-3">🔬 The Planetary Model</h4>
            <p class="text-blue-800 mb-3">
              Hydrogen is the smallest atom having nuclear particle of one proton and an electron moving round it 
              in spherical orbit as shown in the planetary model.
            </p>
            <p class="text-blue-800">
              More complicated nucleons have electrons moving in elliptical orbits. The nucleus contains protons 
              and neutrons.
            </p>
          </div>

          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 my-4">
            <h4 class="font-bold text-green-900 mb-4">📊 Properties of Subatomic Particles</h4>
            <div class="overflow-x-auto">
              <table class="w-full bg-white rounded-lg">
                <thead class="bg-green-100">
                  <tr>
                    <th class="px-4 py-2 text-left font-bold text-green-900">Particle</th>
                    <th class="px-4 py-2 text-left font-bold text-green-900">Symbol</th>
                    <th class="px-4 py-2 text-left font-bold text-green-900">Charge</th>
                    <th class="px-4 py-2 text-left font-bold text-green-900">Mass</th>
                  </tr>
                </thead>
                <tbody class="text-sm">
                  <tr class="border-b">
                    <td class="px-4 py-2">Proton</td>
                    <td class="px-4 py-2 font-mono">p</td>
                    <td class="px-4 py-2">positive (+1)</td>
                    <td class="px-4 py-2">1.673 × 10⁻²⁷ kg</td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-4 py-2">Neutron</td>
                    <td class="px-4 py-2 font-mono">n</td>
                    <td class="px-4 py-2">neutral (0)</td>
                    <td class="px-4 py-2">1.675 × 10⁻²⁷ kg</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2">Electron</td>
                    <td class="px-4 py-2 font-mono">e</td>
                    <td class="px-4 py-2">negative (-1)</td>
                    <td class="px-4 py-2">9.1 × 10⁻³¹ kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-green-800 mt-3 text-sm">
              where charge of 1e = 1.602 × 10⁻¹⁹ Coulombs
            </p>
          </div>

          <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-4">
            <p class="font-semibold text-purple-900 mb-2">⚖️ Charge Balance</p>
            <p class="text-purple-800">
              A neutral atom always has equal number of protons and electrons since the neutron has no charge.
            </p>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🔗 Charge Interactions</p>
            <p class="text-yellow-800">
              Positive and negative charges (positive-negative or negative-positive) <strong>attract</strong> each other 
              while two similar charges (positive-positive or negative-negative) <strong>repel</strong> each other.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-summary",
      title: "📝 Unit 2 Summary",
      subtitle: "Key Points from Change of State of Matter",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Matter can exist in any of the three physical states which are solid, liquid, gas or plasma. Matter is 
            capable of change from one physical state to another due to temperature change experienced by the matter. 
            The subatomic particles are protons, electrons and neutrons.
          </p>
          
          <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">🌊 Three States</h5>
                <p class="text-gray-700 text-sm">Solid (own shape), Liquid (container shape, flows), Gas/Plasma 
                (occupies all space). Distinguished by temperature and appearance.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">🔄 State Changes</h5>
                <p class="text-gray-700 text-sm">Physical changes (state transformation) and chemical changes 
                (fundamental transformation). Sublimation: solid → gas directly.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">⚛️ Subatomic Particles</h5>
                <p class="text-gray-700 text-sm">Proton (positive, heavy), Neutron (neutral, heavy), Electron 
                (negative, light). Neutral atoms have equal protons and electrons.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit3-intro",
      title: "⚛️ Unit 3: Nuclear Change",
      subtitle: "Introduction",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The nucleus of the atom is very vital to the composition and properties of an atom and a lot of processes 
            and application arises from this particle.
          </p>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit3-learning-outcomes",
      title: "🎓 Unit 3 Learning Outcomes",
      subtitle: "What You'll Learn in This Unit",
      content: `
        <div class="space-y-4">
          <p class="text-lg font-semibold mb-4">At the end of this unit, you should be able to:</p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Describe the changes that occur in the nucleus</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain a mass defect</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Understand the threats and implications of nuclear war</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit3-nuclear-change",
      title: "⚛️ Nuclear Change",
      subtitle: "Understanding Nuclear Reactions",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            A nuclear change is one involving either <strong>fission</strong> (splitting) of the nucleus of an atom, 
            or <strong>fusion</strong> (combining) of neutrons and protons to form heavier atoms. It involves about 
            1,000,000 times as much energy as a chemical change.
          </p>
          
          <div class="space-y-4 my-6">
            <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-3">⚡ Nuclear Fission</h4>
              <p class="text-red-800">
                Division of a nucleus into two or more smaller nuclei
              </p>
            </div>

            <div class="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3">🔥 Nuclear Fusion</h4>
              <p class="text-blue-800">
                Bonding together of two or more nuclei
              </p>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-purple-900 mb-3">☢️ Radioactivity</h4>
            <p class="text-purple-800 mb-3">
              Some elements are observed to undergo nuclear change. These elements are said to be <strong>radioactive</strong> 
              e.g. uranium. They emit radiation which can be split using magnetic or electric field.
            </p>
            <div class="bg-white p-4 rounded mt-3">
              <p class="font-semibold mb-2 text-gray-900">Example of Nuclear Reaction:</p>
              <p class="text-sm text-gray-700 font-mono mb-2">
                ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He + radiation
              </p>
              <p class="text-sm text-gray-700">
                This change leads to the emission of alpha particle. Other types of radiations are X-rays.
              </p>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
            <p class="font-semibold text-green-900 mb-2">🔬 Types of Radiation</p>
            <p class="text-green-800 mb-2">
              Both alpha and beta particles are deflected by magnetic and electric plates (field):
            </p>
            <ul class="space-y-1 text-green-800 text-sm ml-4">
              <li>• <strong>Alpha particle:</strong> Helium nucleus</li>
              <li>• <strong>Beta particles:</strong> Electrons</li>
            </ul>
          </div>

          <div class="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
            <h4 class="font-bold text-indigo-900 mb-3">📐 Nuclear Particle Notation</h4>
            <p class="text-indigo-800 mb-3">
              A nuclear particle is represented as: <span class="font-mono">ᵇᵃX</span>
            </p>
            <ul class="space-y-1 text-indigo-800 text-sm ml-4">
              <li>• <strong>A</strong> is the mass number</li>
              <li>• <strong>Z</strong> is the proton number</li>
              <li>• <strong>N</strong> is the neutron number</li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit3-mass-defect",
      title: "⚖️ Mass Defect During Nuclear Change",
      subtitle: "Understanding Mass-Energy Equivalence",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            During nuclear reaction, mass defect <strong>Δm</strong> is observed. Δm is the difference in mass between 
            the mass of the product and the reactants. This seems to imply violation of the law of conservation of mass.
          </p>
          
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">💡 Einstein's Insight</p>
            <p class="text-yellow-800">
              This law has been restated as the law of conservation of energy when Albert Einstein showed that the 
              change in mass turned into energy, obeying the Einstein law: <strong>E = Δmc²</strong>
            </p>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 mb-3">📊 Calculating Mass Defect</h4>
            <p class="text-blue-800 mb-3">
              Mass defect Δm is calculated from the knowledge of values of the mass of protons, neutrons, electrons, etc.
            </p>
            <div class="bg-white p-4 rounded mt-3">
              <p class="font-semibold mb-2 text-gray-900">Formula:</p>
              <p class="text-sm text-gray-700 font-mono mb-2">
                Δm = ZMₕ + (A-Z)Mₙ - Mₐ
              </p>
              <p class="text-sm text-gray-700">
                Where:
              </p>
              <ul class="text-sm text-gray-700 ml-4 mt-1">
                <li>• A nucleus has mass ZMₕ since it contains Z protons</li>
                <li>• (A-Z)Mₙ for (A-Z) neutrons</li>
                <li>• When subtracted from the mass of the nucleus Mₐ, it gives mass defect Δm</li>
              </ul>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
            <p class="font-semibold text-green-900 mb-2">⚡ Energy Release</p>
            <p class="text-green-800 mb-2">
              This change in mass then shows up as energy. So the mass and energy become synonymous. Mass can change 
              into energy and vice versa.
            </p>
            <p class="text-green-800">
              This energy is observed in other nuclear reactions such as fission or fusion and is about 
              <strong>200 Mega-electron volts (200 MeV)</strong>.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit3-nuclear-threats",
      title: "⚠️ Threats and Implications of Nuclear War",
      subtitle: "Understanding Nuclear Dangers",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The energy released during nuclear reactions is enormous. It is of the order of mega-electron volts or 
            millions of electron volts (MeV). The magnitude of the energy produced in a nuclear reaction by 1g of 
            uranium nuclear fuel is 1/235 × 6.02 × 10²³ × 133 × 200MeV = 68100 × 10⁹ GJ.
          </p>
          
          <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4">
            <p class="font-semibold text-red-900 mb-2">💥 The Danger</p>
            <p class="text-red-800">
              What makes it of special concern is that this enormous amount of energy is released in a short time 
              on a small piece of land - area producing tremor with tremendous impact over long range. When such a 
              war is becoming feasible, it is considered a threat. If it eventually happens; it is then a nuclear 
              war and the consequence(s) is/are regarded as the implication(s) of such war.
            </p>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-purple-900 mb-3">🔗 Chain Reaction</h4>
            <p class="text-purple-800 mb-3">
              Chain reaction occurs when proceed of one reaction leads to another with both source and product initiating 
              the next reaction and resulting in an avalanche. This result in multiples of the energy produced per step 
              and in a very short time large amount of energy is released.
            </p>
            <p class="text-purple-800">
              This large amount of energy is released in a very short time to a very small volume of space resulting in 
              an explosion or a bomb.
            </p>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 my-4">
            <h4 class="font-bold text-yellow-900 mb-3">💔 Historical Impact: Hiroshima and Nagasaki</h4>
            <p class="text-yellow-800 mb-3">
              In 1944, during World War II, Hiroshima and Nagasaki in Japan were bombed using hydrogen bomb in which 
              150,000 lives were lost in that test or drop. World War II quickly wound up within a year of its drop.
            </p>
            <div class="bg-white p-4 rounded mt-3">
              <p class="font-semibold mb-2 text-gray-900">Long-term Effects:</p>
              <ul class="space-y-1 text-sm text-gray-700">
                <li>• Besides those who died instantly, many who suffered from the dust, clay or even after-shock either 
                died, became cancerous, disabled or deformed</li>
                <li>• Its other effects which include psychological disorder linger on for many years</li>
                <li>• This scenario is well depicted in the film "The Day After"</li>
              </ul>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-4">
            <h4 class="font-bold text-blue-900 mb-3">🌍 Nuclear Non-Proliferation Treaty</h4>
            <p class="text-blue-800 mb-3">
              In 1946, the United States of America Congress passed the Atomic Energy Act. In the same year following 
              agitations to have arms control and disarmament including right to acquire Nuclear Free Zone, the 
              <strong>"Nuclear Non-Proliferation Treaty"</strong> was signed in the League of Nations that transformed 
              into the United Nations.
            </p>
            <div class="bg-white p-4 rounded mt-3">
              <p class="font-semibold mb-2 text-gray-900">Key Points:</p>
              <ul class="space-y-1 text-sm text-gray-700">
                <li>• The intention was not to ever have to use this weapon of mass destruction</li>
                <li>• Signing of this treaty was made voluntary</li>
                <li>• Those who had the capability to develop nuclear warheads first constituted themselves into 
                superpowers with veto power in the Security Council of the United Nations</li>
              </ul>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
            <p class="font-semibold text-green-900 mb-2">⚡ Positive Uses</p>
            <p class="text-green-800">
              The fission reaction energy can be trapped as heat energy and the heat energy can then be converted to 
              electrical energy which is a positive use. But its use in warfare can be very catastrophic.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 7
    },
    {
      id: "unit3-summary",
      title: "📝 Unit 3 Summary",
      subtitle: "Key Points from Nuclear Change",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The magnitude of the energy produced in a nuclear reaction has been shown to be very large. This large 
            amount of energy is released in a very short time to a very small volume of space resulting in an explosion 
            or a bomb. The fission reaction energy can be trapped as heat energy and the heat energy can then be converted 
            to electrical energy which is a positive use. But its use in warfare can be very catastrophic. Treaties are 
            also being formulated to keep space free and to free other planets from nuclear pollution.
          </p>
          
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">⚛️ Nuclear Changes</h5>
                <p class="text-gray-700 text-sm">Fission (splitting) and Fusion (combining) involve about 1,000,000 times 
                more energy than chemical changes. Radioactive elements emit radiation.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">⚖️ Mass Defect</h5>
                <p class="text-gray-700 text-sm">Mass defect Δm converts to energy via E = Δmc². Mass and energy are 
                equivalent. Energy release is about 200 MeV per reaction.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-red-700 mb-2">⚠️ Nuclear Threats</h5>
                <p class="text-gray-700 text-sm">Enormous energy released in short time causes catastrophic damage. 
                Chain reactions multiply the effect. Historical impact: Hiroshima/Nagasaki (150,000 lives lost).</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">🌍 Nuclear Non-Proliferation</h5>
                <p class="text-gray-700 text-sm">Treaties aim to prevent nuclear warfare. Nuclear energy can be used 
                positively (electricity) but warfare use is catastrophic.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "summary",
      title: "📝 Chapter Summary",
      subtitle: "What We've Learned",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🎉 You've completed Chapter 3! Let's recap what we've learned about matter:
          </p>
          
          <div class="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 mb-2">1. Matter Defined</h5>
                <p class="text-gray-700 text-sm">Anything that occupies space, possesses mass, offers resistance to 
                change of inertia. Can be classified as pure substances (elements, compounds) or mixtures (homogeneous, 
                heterogeneous).</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 mb-2">2. Kinetic Theory</h5>
                <p class="text-gray-700 text-sm">Explains matter behavior through particle motion: solids vibrate, 
                liquids slide, gases move randomly. Based on six fundamental assumptions about particle behavior.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-green-700 mb-2">3. States of Matter</h5>
                <p class="text-gray-700 text-sm">Three physical states: solid, liquid, gas/plasma. Matter changes states 
                due to temperature. Physical changes (state transformation) vs chemical changes (fundamental transformation).</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 mb-2">4. Subatomic Particles</h5>
                <p class="text-gray-700 text-sm">Proton (positive, 1.673×10⁻²⁷ kg), Neutron (neutral, 1.675×10⁻²⁷ kg), 
                Electron (negative, 9.1×10⁻³¹ kg). Neutral atoms have equal protons and electrons.</p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">5. Nuclear Changes</h5>
                <p class="text-gray-700 text-sm">Fission (splitting) and Fusion (combining) involve massive energy. Mass 
                defect converts to energy via E = Δmc². Nuclear energy has both positive uses (electricity) and catastrophic 
                potential (warfare).</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Next Steps</p>
            <p class="text-yellow-800">
              You now understand the fundamental concept of matter, from its basic definition to the powerful forces 
              within atoms! Remember: matter is all around us, and understanding its properties helps us understand 
              the world. Keep exploring! 🔬✨
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    }
  ]
};

