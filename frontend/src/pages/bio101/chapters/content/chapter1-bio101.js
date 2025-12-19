// Chapter 1: Characteristics and Classification of Living Organisms
// BIO 101 - Module 1

export const chapter1Content = {
  title: "Characteristics and Classification of Living Organisms",
  author: "Department of Biology",
  department: "Faculty of Life Sciences, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "introduction",
      title: "🌱 Introduction to Biology",
      subtitle: "The Study of Living Things",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Welcome to the exciting and amazing world of living things. Go outside and look around you. Look at the sky, the soil, trees, plants, people, animals. Nature is all around you if you have the eyes to see it. Count how many living things you can see.
          </p>

          <p class="text-lg leading-relaxed">
            What is it that makes living things different from things that are not alive? Biology is the study of living things. It deals with what all living things can do, how they do it and why they do it. In biology, there is always a relationship between the structure of an organism, its function, and its adaptation to its function or environment.
          </p>

          <p class="text-lg leading-relaxed">
            Biology also tackles the important topics such as population, environmental issues as well as health issues.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="text-blue-800 leading-relaxed">
              When you have studied this unit, you should be able to: list and describe the characteristics of organisms, define the terms nutrition, excretion, respiration, sensitivity, reproduction, growth and movement, outline the use of a hierarchical classification system for living organisms, classify living organisms into kingdoms, orders, classes, families, genera and species, define and describe the binomial system of naming species, construct dichotomous keys, and use simple dichotomous keys based on easily identifiable features.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 10,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Welcome to Biology 101, my dear student! 🌱 Welcome to the fascinating world of living things. Imagine walking through Unilorin campus - you see trees, flowers, birds, insects, and fellow students. All these are living organisms! But what makes them alive? That's what we'll discover together.
          </p>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🔬 Why Study Biology?</p>
            <p class="text-green-800">
              Biology helps us understand ourselves, our environment, and how to solve problems like disease, food security, and environmental protection. In Nigeria, biology knowledge helps with agriculture, healthcare, and conservation of our rich biodiversity!
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-900 mb-2">🎯 Learning Objectives</h4>
              <ul class="text-blue-800 space-y-1 text-sm">
                <li>• Define what makes something alive</li>
                <li>• List 7 characteristics of living organisms</li>
                <li>• Understand biological classification</li>
                <li>• Learn scientific naming (binomial nomenclature)</li>
                <li>• Use dichotomous keys for identification</li>
              </ul>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-2">🇳🇬 Nigerian Connection</h4>
              <p class="text-purple-800 text-sm">
                Nigeria has incredible biodiversity! From the rainforest in Cross River to the savanna in Kano, we have thousands of plant and animal species. Understanding biology helps us protect our natural heritage.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "characteristics",
      title: "🧬 Characteristics of Living Things",
      subtitle: "What Defines Life?",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            There are seven (7) activities which make organisms different from non-living things. These are the seven characteristics of living organisms.
          </p>

          <div class="space-y-4">
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 class="font-bold text-green-900 mb-2">1. Nutrition/ Feeding</h3>
              <p class="text-green-800">
                Living things take in materials from their surroundings that they use for growth or to provide energy. Nutrition is the process by which organisms obtain energy and raw materials from nutrients such as proteins, carbohydrates and fats.
              </p>
              <p class="text-green-800 mt-2">
                Plants, algae, and some bacteria harvest the energy of sunlight through photosynthesis, converting radiant energy into chemical energy. These organisms, along with a few others that use chemical energy in a similar way, are called autotrophs ("self-feeders").
              </p>
              <p class="text-green-800 mt-2">
                All other organisms live on the organic compounds autotrophs produce, using them as food, and are called heterotrophs ("fed by others"). At least 95% of the kinds of organisms on Earth—all animals and fungi, and most protists and prokaryotes—are heterotrophs.
              </p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 class="font-bold text-blue-900 mb-2">2. Respiration</h3>
              <p class="text-blue-800">
                Respiration is the release of energy from food substances in all living cells. Living things break down food within their cells to release energy for carrying out the following processes. Cellular respiration is the complete oxidation of organic compounds such as glucose to extract energy from chemical bonds.
              </p>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 class="font-bold text-yellow-900 mb-2">3. Movement</h3>
              <p class="text-yellow-800">
                All living things move. It is very obvious that a leopard moves but what about the thorn tree it sits in? For example, different types of locomotory organs are found in protozoans. They may bear flagella (flagellates), cilia (ciliates) pseudopodia (sarcodines). Locomotory organs are absent in the parasitic forms (Sporozoa).
              </p>
            </div>

            <div class="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 class="font-bold text-red-900 mb-2">4. Excretion</h3>
              <p class="text-red-800">
                All living things excrete. As a result of the many chemical reactions occurring in cells, they have to get rid of waste products which might poison the cells. Excretion is an essential process through which body gets rid of metabolic wastes and maintains osmotic pressure. Several waste products such as water, carbon dioxide and nitrogenous substances are generated during cellular activities. These products are harmful to the body if accumulated and therefore need to be removed. In mammals, specialized organ called kidney eliminates most of the water and nitrogenous substances from the body. Excretion is defined as the removal of toxic materials, the waste products of metabolism and substances in excess from the body of an organism. In majority of vertebrates, the chief excretory organ is the kidney.
              </p>
            </div>

            <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h3 class="font-bold text-purple-900 mb-2">5. Growth</h3>
              <p class="text-purple-800">
                Growth is seen in all living things. It involves using food to produce new cells. It is the permanent increase in cell number and size is called growth.
              </p>
            </div>

            <div class="bg-pink-50 border-l-4 border-pink-500 p-4">
              <h3 class="font-bold text-pink-900 mb-2">6. Reproduction</h3>
              <p class="text-pink-800">
                All living organisms have the ability to produce offspring. Reproduction is the biological process by which new organisms are created from their parents. There are two main types of reproduction: Asexual reproduction and Sexual reproduction.
              </p>
            </div>

            <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
              <h3 class="font-bold text-indigo-900 mb-2">7. Sensitivity</h3>
              <p class="text-indigo-800">
                All living things are able to sense and respond to stimuli around them such as light, temperature, water, gravity and chemical substances.
              </p>
            </div>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-500 p-4">
            <p class="text-orange-800 font-semibold">
              These seven characteristics of living organisms form the basis of the study of Biology. Whilst many other things carry out one or more of the above processes, only living organisms possess all of these characteristics.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 20,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ah ah! So these are the seven characteristics that make something alive! 🤔 Let me break it down for you like we're discussing over garri and groundnuts.
          </p>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🇳🇬 Nigerian Examples:</p>
            <ul class="text-green-800 space-y-1">
              <li><strong>Nutrition:</strong> Like how you eat eba and soup to get energy for lectures</li>
              <li><strong>Respiration:</strong> Breathing in air during exercise or running to catch bus</li>
              <li><strong>Movement:</strong> Walking to class, amoeba moving with pseudopodia</li>
              <li><strong>Excretion:</strong> Going to toilet after drinking too much water</li>
              <li><strong>Growth:</strong> Getting taller from JSS 1 to 100 level</li>
              <li><strong>Reproduction:</strong> Having children (sexual) or cells dividing (asexual)</li>
              <li><strong>Sensitivity:</strong> Feeling hot and sweating, or plant bending toward light</li>
            </ul>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-2">🧪 Quick Test: Is it Alive?</h4>
            <div class="space-y-2">
              <p class="text-blue-800"><strong>Stone:</strong> ❌ No characteristics of life</p>
              <p class="text-blue-800"><strong>Flower:</strong> ✅ All 7 characteristics!</p>
              <p class="text-blue-800"><strong>Fire:</strong> ❌ Only grows and moves, but no nutrition/respiration</p>
              <p class="text-blue-800"><strong>Crystal:</strong> ❌ Only grows, no other characteristics</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "classification",
      title: "📚 Classification of Animals",
      subtitle: "Organizing Living Things",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            When the librarian has a new book to add to the library, he or she will group it with books on a similar topic. Classification can be defined as grouping organisms according to their structural similarities. This means that organisms that share similar features are placed in one group. These groups are arranged from the largest group of organisms to the smallest group of organisms.
          </p>

          <p class="text-lg leading-relaxed">
            The groups, from largest to smallest, are arranged as follows: kingdom, phylum (plural phyla), class, order, family, genus (plural genera) and species. The species is the smallest group of organisms.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="text-blue-800 leading-relaxed">
              As you go through the classification hierarchy, you will see that scientists have used broader features to put organisms into kingdoms, which are the largest groups of organisms. When you move down towards the species, which are the smallest groups of organisms, features are becoming specific. In other words, two organisms that belong to the same species share more features than those in the same kingdom but in different species.
            </p>
          </div>

          <p class="text-lg leading-relaxed">
            A species can be defined as a group of organisms with similar features, and these organisms are capable of breeding and produce fertile offspring. Classification hierarchy has many uses. First, it helps scientists to sort organisms in order. Second, it helps them to identify new organisms by finding out which group they fit. Third, it is easier to study organisms when they have been properly identified and correctly named.
          </p>

          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-bold text-green-900 mb-3">Two Major Classification Types</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-green-800">Artificial Classification</h4>
                <p class="text-green-700 text-sm">Groups the animals for the purpose of convenience, using few and easily observed characters. Most often these characters are imposed on the organisms hence do not reflect phylogenic and evolutionary relationships.</p>
                <p class="text-green-700 text-sm mt-1"><strong>Example:</strong> Where the animal lives, how they move, what they feed on, etc.</p>
              </div>
              <div>
                <h4 class="font-semibold text-green-800">Natural Classification</h4>
                <p class="text-green-700 text-sm">Groups the animals according to their natural affinities, using numerous internal and external characters and even characters waiting to be discovered. They therefore express natural relationships like phylogenic and evolutionary relationships.</p>
                <p class="text-green-700 text-sm mt-1"><strong>Principles:</strong> Arrangement of animals in hierarchical order, based on structural and natural relationships (homology)</p>
              </div>
            </div>
          </div>

          <p class="text-lg leading-relaxed">
            Taxonomy is the branch of biology that is involved in identification, naming and classifying living organisms. Taxonomy is the science of naming and classifying and organizing organisms in a universally accepted structure. Taxonomy is a study of the principle, practice and rules of classification and nomenclature of living organisms.
          </p>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="text-yellow-800 leading-relaxed">
              There are two bases for such classification: (1). Phenetic taxonomy, which involves grouping on the basis of phenotypic similarity and engaging complex statistical techniques to obtain a measure of similarity. Characters used are largely morphological, anatomical, biochemical and cytological. (2). Phyletic taxonomy, which involves grouping on the basis of presumed evolutionary and genetic relationships. The outcomes of the two systems are usually fairly similar despite the fact that phyletic classification is liable to subjective bias.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 15,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Classification is like organizing your wardrobe! 👕👖 You don't just throw everything together - you group shirts, trousers, shoes, etc. That's exactly what biologists do with living things!
          </p>

          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-2">🏗️ The Classification Pyramid</h4>
            <div class="text-center space-y-1">
              <div class="text-xs text-blue-700">Largest Group</div>
              <div class="bg-blue-200 p-2 rounded">Kingdom (Animalia)</div>
              <div class="bg-blue-300 p-2 rounded">Phylum (Chordata)</div>
              <div class="bg-blue-400 p-2 rounded">Class (Mammalia)</div>
              <div class="bg-blue-500 p-2 rounded">Order (Primates)</div>
              <div class="bg-blue-600 p-2 rounded">Family (Hominidae)</div>
              <div class="bg-blue-700 p-2 rounded text-white">Genus (Homo)</div>
              <div class="bg-blue-800 p-2 rounded text-white">Species (sapiens)</div>
              <div class="text-xs text-blue-700">Smallest Group</div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-900 mb-2">🎯 Why Classify?</h4>
              <ul class="text-green-800 space-y-1 text-sm">
                <li>• Easy identification</li>
                <li>• Study relationships</li>
                <li>• Predict characteristics</li>
                <li>• Discover new species</li>
                <li>• Conservation planning</li>
              </ul>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-2">🇳🇬 Nigerian Examples</h4>
              <p class="text-purple-800 text-sm">
                <strong>Lion:</strong> Kingdom: Animalia, Phylum: Chordata, Class: Mammalia, Order: Carnivora, Family: Felidae, Genus: Panthera, Species: leo
              </p>
              <p class="text-purple-800 text-sm mt-2">
                <strong>Human:</strong> Kingdom: Animalia, Phylum: Chordata, Class: Mammalia, Order: Primates, Family: Hominidae, Genus: Homo, Species: sapiens
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "cell-theory",
      title: "🔬 Cell Theory and Cell Structure",
      subtitle: "The Basic Unit of Life",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            An organism is a life-form—a living entity made up of one or more cells. Although there is no simple definition of life that is endorsed by all biologists, most agree that organisms share a suite of five fundamental characteristics: Cells, Replication, Evolution, Information, Energy.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="text-blue-800 font-semibold">Five Characteristics of Life:</p>
            <ul class="text-blue-800 mt-2 space-y-1">
              <li>• Cells: Organisms are made up of membrane-bound units called cells</li>
              <li>• Replication: Almost everything an organism does contributes to replicating itself</li>
              <li>• Evolution: Organisms are the products of evolution, and their populations continue to evolve</li>
              <li>• Information: Organisms process hereditary information encoded in genes</li>
              <li>• Energy: To stay alive and reproduce, organisms have to acquire and use energy</li>
            </ul>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-bold text-green-900 mb-3">Cell Theory</h3>
            <p class="text-green-800 mb-2">The cell theory, the theory of evolution, and the chromosome theory of inheritance address fundamental questions: What are organisms made of? Where do they come from? How is hereditary information transmitted?</p>
            <div class="bg-white p-3 rounded border-l-4 border-green-500">
              <p class="font-semibold text-green-900">Modern Cell Theory:</p>
              <ol class="text-green-800 text-sm mt-1 space-y-1">
                <li>1. The cell is the fundamental unit of structure and function in living things</li>
                <li>2. All organisms are made up of one or more cells</li>
                <li>3. Cells arise from other cells through cellular division</li>
                <li>4. Cells carry genetic material passed to daughter cells during division</li>
                <li>5. All cells are essentially the same in chemical composition</li>
                <li>6. Energy flow occurs within cells</li>
              </ol>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-2">Prokaryotic Cells</h4>
              <ul class="text-purple-800 text-sm space-y-1">
                <li>• No nucleus</li>
                <li>• DNA in nucleoid region</li>
                <li>• Smaller (1-5 μm)</li>
                <li>• Examples: Bacteria, Archaea</li>
              </ul>
            </div>

            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-900 mb-2">Eukaryotic Cells</h4>
              <ul class="text-indigo-800 text-sm space-y-1">
                <li>• True nucleus present</li>
                <li>• Membrane-bound organelles</li>
                <li>• Larger (10-100 μm)</li>
                <li>• Examples: Plants, Animals, Fungi</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="text-yellow-800 leading-relaxed">
              <strong>Surface Area to Volume Ratio:</strong> The important point is that the surface area to the volume ratio gets smaller as the cell gets larger. Thus, if the cell grows beyond a certain limit, not enough material will be able to cross the membrane fast enough to accommodate the increased cellular volume.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 20,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Cells are like tiny factories! 🏭 Everything living is made of cells. Think of your body as a huge corporation where each cell is a worker doing specific jobs. The cell theory is like the company handbook that explains how everything works!
          </p>

          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-2">🧪 Cell Size Matters!</h4>
            <p class="text-blue-800 text-sm">
              Why are cells so small? Because they need to exchange materials efficiently. If a cell gets too big, the surface area (where exchange happens) becomes too small compared to the volume (where materials are needed). It's like trying to feed a whole village through one small door!
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-green-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🦠</div>
              <h4 class="font-bold text-green-900 mb-1">Prokaryotes</h4>
              <p class="text-green-800 text-xs">Simple cells without nucleus (bacteria)</p>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🌱</div>
              <h4 class="font-bold text-purple-900 mb-1">Plant Cells</h4>
              <p class="text-purple-800 text-xs">Eukaryotic with cell wall, chloroplasts</p>
            </div>

            <div class="bg-pink-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🧬</div>
              <h4 class="font-bold text-pink-900 mb-1">Animal Cells</h4>
              <p class="text-pink-800 text-xs">Eukaryotic without cell wall</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "genes-chromosomes",
      title: "🧬 Genes and Chromosomes",
      subtitle: "The Units of Inheritance",
      content: `
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Genes</h3>
          <p class="text-lg leading-relaxed">
            Genes are hereditary units or basic units of inheritance. Traits are controlled by genes. The complete sets of genes within an organism's genome are called its genotype. The complete set of observable traits of the structure and behavior of an organism is called a phenotype.
          </p>

          <p class="text-lg leading-relaxed">
            A heritable trait passes from one generation to the next via DNA (Deoxyribonucleic acid). DNA is a sequence of letters that spell out the genetic code. They are in the chromosome and are responsible for transmission of characters from parents to offspring. DNA organised into words and sentences are called genes. These genes are usually in pairs.
          </p>

          <p class="text-lg leading-relaxed">
            Humans have approximately 20,000 genes and each one influences a part of development. One copy is inherited from the mother and one from the father. A change in the spelling of a DNA sequence or the gene is called mutation. Every person's DNA contains mutation which are harmless. Some mutations however cause specific diseases.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mb-4 mt-8">Chromosomes</h3>
          <p class="text-lg leading-relaxed">
            Chromosomes are rod or thread-like bodies found in the nucleus of a cell. The chromosomes house and contain the genes. They are carriers of genetic materials. Chromosomes are stainable. Organisms inherit genetic materials from their parents in the form of homologous chromosomes.
          </p>

          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-2">Chromosome Numbers in Different Organisms</h4>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p class="font-semibold text-blue-800">Man (Homo sapiens): 46</p>
                <p class="font-semibold text-blue-800">Goat (Capra hircus): 60</p>
                <p class="font-semibold text-blue-800">Common rat (Rattus rattus): 42</p>
                <p class="font-semibold text-blue-800">Frog (Rana tigrina): 26</p>
                <p class="font-semibold text-blue-800">Dog (Canis familiaris): 78</p>
                <p class="font-semibold text-blue-800">Chicken (Gallus domesticus): 78</p>
              </div>
              <div>
                <p class="font-semibold text-blue-800">Banana (Musa paradisiaca): 22, 44, 55, 77, 88</p>
                <p class="font-semibold text-blue-800">Orange (Citrus sinensis): 18, 27, 36</p>
                <p class="font-semibold text-blue-800">Bread mold (Mucor heimalis): 2</p>
                <p class="font-semibold text-blue-800">Tomato (Solanum lycopersicum): 24</p>
                <p class="font-semibold text-blue-800">Rice (Oryza sativa): 24</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="text-green-800 leading-relaxed">
              <strong>Properties of Chromosomes:</strong>
            </p>
            <ul class="text-green-800 mt-2 space-y-1">
              <li>• Chromosomes are capable of duplication and maintaining their morphological and physiological properties through successive cell divisions</li>
              <li>• Chromosomes contain DNA (Deoxyribonucleic acids). This carries the genes and thus plays a major role in heredity</li>
              <li>• During reproduction of organisms, they are passed on to the next generation through the gametes</li>
              <li>• They play an important role in variation, mutation and evolution and in their control of morphogenesis, multiplication and equilibrium of vital processes</li>
            </ul>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-900 mb-2">Types of Chromosomes</h4>
              <ul class="text-yellow-800 text-sm space-y-1">
                <li><strong>Autosomes:</strong> Control all somatic characteristics (A)</li>
                <li><strong>Allosomes:</strong> Control specialized characteristics (X, Y)</li>
              </ul>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-2">Chromosome Shapes</h4>
              <ul class="text-purple-800 text-sm space-y-1">
                <li><strong>Metacentric:</strong> Centromere in center</li>
                <li><strong>Submetacentric:</strong> Centromere slightly off-center</li>
                <li><strong>Acrocentric:</strong> Centromere near one end</li>
                <li><strong>Telocentric:</strong> Centromere at one end</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 15,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Genes and chromosomes are like the instruction manual and filing cabinet of life! 📖🗂️ Genes tell your body how to build and function, while chromosomes are the folders that keep these genes organized.
          </p>

          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-2">🧬 DNA → Genes → Chromosomes</h4>
            <div class="space-y-2 text-sm">
              <p class="text-blue-800"><strong>DNA:</strong> The alphabet (A, T, C, G)</p>
              <p class="text-blue-800"><strong>Genes:</strong> Words made from DNA letters</p>
              <p class="text-blue-800"><strong>Chromosomes:</strong> Books containing the words (genes)</p>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🇳🇬 Why It Matters:</p>
            <p class="text-green-800">
              Understanding genes and chromosomes helps us fight genetic diseases common in Nigeria like sickle cell anemia. It also explains why you look like your parents but have unique features!
            </p>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-2">🔍 Quick Facts</h4>
            <ul class="text-purple-800 text-sm space-y-1">
              <li>• Humans have 23 pairs = 46 chromosomes</li>
              <li>• Each chromosome contains hundreds of genes</li>
              <li>• Mutations can be good, bad, or neutral</li>
              <li>• Chromosomes come in different shapes based on centromere position</li>
            </ul>
          </div>
        </div>
      `
    }
  ]
};
