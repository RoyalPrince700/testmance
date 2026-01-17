// Chapter 2: Philosophical Problems and Scientific Explanations
// GNS 311 - Module 2

export const chapter2Content = {
  title: "Philosophical Problems and Scientific Explanations",
  author: "Akanji, M.A. and Yakubu, M. T.",
  department: "Department of Biochemistry, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🎯 Welcome to Philosophy of Science!",
      subtitle: "Introduction",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome! 🌟 Have you ever wondered: <strong>What is science?</strong> Is there a real difference 
            between science and myth? Is science objective? Can science explain everything?
          </p>
          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">💡 Did you know?</p>
            <p class="text-teal-800 dark:text-teal-200">
              These fundamental questions form the basis of <strong>philosophy of science</strong>—a field 
              that examines the assumptions, foundations, methods, and implications of science itself!
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter will explore the philosophical foundations of science, help you understand 
            scientific explanations, and examine the models used to explain scientific phenomena. 
            Get ready to think deeply about how we know what we know! 🤔
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
          <p class="text-lg font-semibold mb-4">By the end of this module, you'll be able to:</p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Account for the definitions of science</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Itemise the 5 concepts of philosophy of science</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Describe the methods for studying philosophical science</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Give account of scientific explanation from the philosophical context</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Account for the models used for scientific explanations with specific examples and their shortcomings</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain the basis for the validity of scientific explanations and objectivity of observation in science</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-intro",
      title: "📚 Unit 1: Philosophy of Science",
      subtitle: "Introduction to Philosophy of Science",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            In common usage, the word <strong>science</strong> is applied to a wide variety of disciplines 
            or intellectual activities which have certain features in common. For philosophy to rightly take 
            its place in the sciences, it must make a very significant contribution to the advancement of 
            the subject matter as a consequence of knowledge.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400 p-4 my-4">
            <p class="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔍 Key Insight</p>
            <p class="text-blue-800 dark:text-blue-200">
              Philosophy of science is concerned with the <strong>assumptions, foundations, methods, and 
              implications</strong> of science. It's about understanding how science works and why it works!
            </p>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-definition",
      title: "🔍 What is Science?",
      subtitle: "Definition of Science",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The word <strong>science</strong> is derived from the Latin word <em>'scientia'</em> meaning 
            <strong>knowledge</strong>. Science can be defined in various ways:
          </p>
          
          <div class="space-y-4 my-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-2">📖 Definition 1: Knowledge</h4>
              <p class="text-blue-800 dark:text-blue-200">
                The state or fact of knowing; knowledge or cognizance of something specified or implied.
              </p>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-2">🔬 Definition 2: Systematic Study</h4>
              <p class="text-green-800 dark:text-green-200">
                A branch or study which is concerned either with a connected body of demonstrated truths 
                or with observed facts systematically classified and more or less colligated by being brought 
                under general laws and which include trustworthy methods for the discovery of new truth 
                within its own domain.
              </p>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-2">🌍 Definition 3: Ordered Body of Knowledge</h4>
              <p class="text-purple-800 dark:text-purple-200 mb-3">
                An ordered body of knowledge or a search for explanations to natural objects and phenomena. 
                Such knowledge is derived from the systematic study of nature and behaviour of materials of 
                the physical universe based on:
              </p>
              <ul class="space-y-1 text-purple-800 dark:text-purple-200 text-sm ml-4">
                <li>• Observations</li>
                <li>• Experimentations</li>
                <li>• Measurements</li>
                <li>• Formation of laws to describe these facts</li>
              </ul>
            </div>

            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400">
              <h4 class="font-bold text-yellow-900 dark:text-yellow-100 mb-2">🔎 Definition 4: Research and Discovery</h4>
              <p class="text-yellow-800 dark:text-yellow-200">
                Devotion of man to research or to the attainment of the kind of knowledge which establishes 
                general laws governing a number of particular isolated facts.
              </p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit1-philosophy",
      title: "💭 Philosophy of Science",
      subtitle: "Understanding Philosophy of Science",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Philosophy of science</strong> is concerned with the assumptions, foundations, methods 
            and implications of science. For philosophy to rightly take its place in the sciences, it must 
            make a very significant contribution to the advancement of the subject matter as a consequence 
            of knowledge.
          </p>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-3">📝 Simple Definition</h4>
            <p class="text-indigo-800 dark:text-indigo-200 text-lg">
              Philosophical science can simply be defined as <strong>critical discussion of the various 
              developments in science</strong>.
            </p>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 dark:border-red-400 p-4 my-4">
            <p class="font-semibold text-red-900 dark:text-red-100 mb-2">💬 Interesting Quote</p>
            <p class="text-red-800 dark:text-red-200 italic">
              "Philosophy of science is about as useful to scientists as ornithology is to birds." 
              <br><span class="text-sm">— Richard Feynman, Physicist</span>
            </p>
            <p class="text-red-800 dark:text-red-200 mt-2 text-sm">
              Philosophy of science has historically been met with mixed response from the scientific 
              community. Though scientists often contribute to the field, many prominent scientists have 
              felt that the practical effect on their work is limited.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit1-particular-sciences",
      title: "🔬 Philosophy of Particular Sciences",
      subtitle: "Specialized Philosophy of Science",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            In addition to addressing the general questions regarding science and induction, many philosophers 
            of science are occupied with investigating philosophical or foundational problems in particular 
            sciences. The late 20th and early 21st century witnessed an unprecedented rise in the number of 
            practitioners of philosophy of a particular science.
          </p>
          
          <div class="space-y-4 my-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🧬 Philosophy of Biology</h4>
              <p class="text-green-800 dark:text-green-200 mb-2">
                Deals with issues that focus on:
              </p>
              <ul class="space-y-1 text-green-800 dark:text-green-200 text-sm ml-4">
                <li>• <strong>Epistemology:</strong> Study of theory of knowledge</li>
                <li>• <strong>Metaphysics:</strong> Study of reality</li>
                <li>• <strong>Ethics:</strong> Study of norms of moral behaviour</li>
              </ul>
              <p class="text-green-800 dark:text-green-200 mt-2 text-sm">
                Contained in the biological and biomedical sciences.
              </p>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">⚗️ Philosophy of Chemistry</h4>
              <p class="text-blue-800 dark:text-blue-200 mb-2">
                Concerned with the methodology and the underlying assumptions of the science of Chemistry. 
                Specific topics include:
              </p>
              <ul class="space-y-1 text-blue-800 dark:text-blue-200 text-sm ml-4">
                <li>• Relationship between chemical concepts and reality (e.g., resonance structures)</li>
                <li>• Reality of concepts such as nucleophiles and electrophiles</li>
                <li>• Whether chemistry studies atoms or reaction processes</li>
                <li>• Symmetry in chemistry (homo-chirality in biological molecules)</li>
                <li>• Whether quantum mechanics can offer explanation to all chemical phenomena</li>
              </ul>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">🔢 Philosophy of Mathematics</h4>
              <p class="text-purple-800 dark:text-purple-200 mb-2">
                Focuses on the philosophical assumptions, foundations, and implications of mathematics. 
                Topics include:
              </p>
              <ul class="space-y-1 text-purple-800 dark:text-purple-200 text-sm ml-4">
                <li>• Sources of mathematical subject matter</li>
                <li>• What it means to refer to a mathematical object</li>
                <li>• Character of a mathematical proposition</li>
                <li>• Relationship between logic and mathematics</li>
                <li>• What is a number? Why does "1+1=2" make sense?</li>
                <li>• How can we ascertain that a mathematical proof is correct?</li>
              </ul>
            </div>

            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400">
              <h4 class="font-bold text-yellow-900 dark:text-yellow-100 mb-3">⚛️ Philosophy of Physics</h4>
              <p class="text-yellow-800 dark:text-yellow-200 mb-2">
                Study of diverse concerns including:
              </p>
              <ul class="space-y-1 text-yellow-800 dark:text-yellow-200 text-sm ml-4">
                <li>• Fundamental aspects of physics</li>
                <li>• Philosophical questions concerning modern physics</li>
                <li>• Study and interaction of matter and energy</li>
                <li>• Nature of space and time</li>
                <li>• Atoms and atomism</li>
                <li>• Interpretations of quantum mechanics</li>
                <li>• Predictions of cosmology</li>
                <li>• Foundations of statistical mechanics</li>
                <li>• Causality, determinisms and the nature of physical laws</li>
              </ul>
            </div>

            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-3">🧠 Philosophy of Psychology</h4>
              <p class="text-red-800 dark:text-red-200 mb-2">
                Deals with issues relating to theoretical foundations of modern psychology. Concerns include:
              </p>
              <ul class="space-y-1 text-red-800 dark:text-red-200 text-sm ml-4">
                <li>• Epistemological perspectives of the methodology of psychological investigation</li>
                <li>• Philosophical questions about the nature of mind, brain, and cognition</li>
                <li>• Often thought of as part of cognitive science or philosophy of mind</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit1-methods",
      title: "📋 Methods for Studying Philosophical Science",
      subtitle: "Three Approaches to Philosophy of Science",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Three different methods can be used to render science accessible to people and to actually make 
            it an object for philosophical scrutiny:
          </p>
          
          <div class="space-y-4 my-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">🚶 (a) The Pedestrian Method</h4>
              <p class="text-blue-800 dark:text-blue-200">
                This method discusses topics in science. Such topics may include:
              </p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded mt-3">
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Magnetism</li>
                  <li>• Electromagnetism</li>
                  <li>• Sub-atomic particles</li>
                  <li>• Enzymes</li>
                  <li>• Free radicals</li>
                  <li>• And other scientific topics</li>
                </ul>
              </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🔍 (b) The Critical Method</h4>
              <p class="text-green-800 dark:text-green-200">
                This involves taking up science and examining:
              </p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded mt-3">
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Its fundamental assumptions and presuppositions</li>
                  <li>• Its competing theories</li>
                  <li>• Its method of inquiry</li>
                  <li>• Its relation or otherwise to other fields of study</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">💡 (c) The Original Philosophical Method</h4>
              <p class="text-purple-800 dark:text-purple-200">
                This method involves a trained philosopher injecting his <em>apriori</em> metaphysical, 
                epistemological or ethical notions into science with the aim of uplifting its empirical 
                content to the standard of it being adjudged the universal truth.
              </p>
            </div>
          </div>

          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">📝 Summary</p>
            <p class="text-teal-800 dark:text-teal-200">
              These three methods—Pedestrian, Critical, and Original Philosophical—provide different 
              approaches to understanding and examining science from a philosophical perspective.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit1-summary",
      title: "📝 Unit 1 Summary",
      subtitle: "Key Points from Philosophy of Science",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The word science is applied to a wide variety of disciplines or intellectual activities which 
            have certain features in common. Studying the philosophical aspect of science will enable one 
            to be accustomed with the development in science over the years; this will stimulate an active 
            interest in the discipline.
          </p>
          
          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">🔍 Science Defined</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Science comes from 'scientia' (knowledge) and can be defined in multiple ways—as knowledge, systematic study, ordered body of knowledge, or research.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">💭 Philosophy of Science</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Critical discussion of developments in science, examining assumptions, foundations, methods, and implications.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">🔬 Specialized Philosophies</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Philosophy of Biology, Chemistry, Mathematics, Physics, and Psychology each address unique foundational questions.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">📋 Three Methods</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Pedestrian Method (discussing topics), Critical Method (examining assumptions), and Original Philosophical Method (injecting philosophical notions).</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit2-intro",
      title: "📚 Unit 2: Scientific Explanations",
      subtitle: "Introduction to Scientific Explanations",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Of the three cardinal aims of science—<strong>prediction, control, and explanation</strong>—the 
            greatest of these is <strong>explanation</strong>. Scientific explanation aims at understanding science.
          </p>
          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">🎯 Key Point</p>
            <p class="text-teal-800 dark:text-teal-200">
              While science can predict and control, its ultimate goal is to <strong>explain</strong>—to help 
              us understand <em>why</em> things happen, not just <em>what</em> happens.
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This unit will explore the models used in scientific explanations and the basis for their validity.
          </p>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit2-explanation",
      title: "💡 What is Scientific Explanation?",
      subtitle: "Scientific Explanation in Philosophical Context",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The three cardinal aims of science are <strong>prediction, control, and explanation</strong>; 
            but the greatest of these is <strong>explanation</strong>. Scientific explanation aims at 
            understanding science.
          </p>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-3">🔍 Why Scientific Explanation Matters</h4>
            <p class="text-indigo-800 dark:text-indigo-200 mb-3">
              The concept of scientific explanation is very important in philosophy of science because:
            </p>
            <ul class="space-y-2 text-indigo-800 dark:text-indigo-200">
              <li>✓ Most people and scientists intuitively believe that one of the goals of science is to 
              <strong>explain</strong> the phenomena in the world</li>
              <li>✓ Some people even believe that explanation is the <strong>main goal</strong> of science</li>
              <li>✓ Scientific realists use the <strong>"inference of best explanation" (IBE)</strong> principle 
              to solve problems and prove that science can create true knowledge</li>
              <li>✓ In addition to predicting future events, scientists more often than not use scientific 
              theories to <strong>explain</strong> events that occur regularly or have already occurred</li>
            </ul>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">💭 Philosophical Investigation</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Philosophers have investigated the criteria by which a scientific theory can be said to have 
              successfully explained a phenomenon, as well as what gives a scientific theory credibility or 
              <strong>explanatory power</strong>.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-models-dn",
      title: "📊 Model 1: Deductive-Nomological (D-N) Model",
      subtitle: "The D-N Account of Scientific Explanation",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            One early and influential theory of scientific explanation was put forward by 
            <strong>Carl G. Hempel and Paul Oppenheim</strong> in 1948. Their model of explanation, 
            <strong>Deductive-Nomological (D-N)</strong>, says that a scientific explanation succeeds by 
            subsuming a phenomenon under a general law.
          </p>
          
          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">🔬 How D-N Works</h4>
            <p class="text-blue-800 dark:text-blue-200 mb-3">
              They proposed simply to describe what kind of things scientists tendered when they claimed to 
              have an explanation, without asking whether such things were capable of providing "true understanding".
            </p>
            <p class="text-blue-800 dark:text-blue-200">
              In essence, if you can show that a phenomenon follows logically (deductively) from general 
              laws (nomological), you have explained it.
            </p>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 dark:border-red-400 p-4 my-4">
            <h4 class="font-semibold text-red-900 dark:text-red-100 mb-3">⚠️ Shortcomings of the D-N Account</h4>
            <div class="space-y-2 text-red-800 dark:text-red-200">
              <div class="flex items-start">
                <span class="text-red-500 mr-2 font-bold">1.</span>
                <span>The first kind of objection points to the D-N theory's inability to account for 
                judgments of <strong>explanatory relevance</strong>.</span>
              </div>
              <div class="flex items-start">
                <span class="text-red-500 mr-2 font-bold">2.</span>
                <span>The second important objection is the insufficient attention to the explanatory role 
                of <strong>causal relations</strong>.</span>
              </div>
              <div class="flex items-start">
                <span class="text-red-500 mr-2 font-bold">3.</span>
                <span>The third class of objection focuses on the requirements that every explanation cite 
                a law, and that (except in probabilistic explanation) the law or laws be strong enough to 
                <strong>entail</strong>, given appropriate boundary conditions, the explanandum.</span>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-models-is",
      title: "📈 Model 2: Inductive-Statistical (IS) Model",
      subtitle: "The IS Account of Scientific Explanation",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>IS explanation</strong> is a law-involving argument giving good reason to expect that 
            the explanandum event occurred. However, whereas a D-N explanation is a <strong>deductive</strong> 
            argument entailing the explanandum, an IS explanation is an <strong>inductive</strong> argument 
            conferring high probability on the explanandum.
          </p>
          
          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🔍 Key Difference</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">D-N Model</h5>
                <p class="text-sm text-gray-700 dark:text-gray-300">Deductive argument that <strong>entails</strong> the explanandum</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">IS Model</h5>
                <p class="text-sm text-gray-700 dark:text-gray-300">Inductive argument that confers <strong>high probability</strong> on the explanandum</p>
              </div>
            </div>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 dark:border-red-400 p-4 my-4">
            <h4 class="font-semibold text-red-900 dark:text-red-100 mb-3">⚠️ Shortcomings of the IS Account</h4>
            <div class="space-y-2 text-red-800 dark:text-red-200">
              <div class="flex items-start">
                <span class="text-red-500 mr-2 font-bold">1.</span>
                <span>There is too much to ask that explanations confer <strong>high probability</strong> 
                on their explananda.</span>
              </div>
              <div class="flex items-start">
                <span class="text-red-500 mr-2 font-bold">2.</span>
                <span>A second objection focuses on the requirement of <strong>maximal specificity</strong>.</span>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit2-models-sr",
      title: "📊 Model 3: Statistical Relevance Model",
      subtitle: "The Statistical Relevance Approach",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Statistical relevance</strong> is presented as an objective relation, that is, a relation 
            holding independently of the explainer's background knowledge or other context. Statistical 
            relevance is a <strong>comparative concept</strong>.
          </p>
          
          <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">🔍 Key Characteristics</h4>
            <ul class="space-y-2 text-purple-800 dark:text-purple-200">
              <li>✓ Statistical relevance is an <strong>objective relation</strong></li>
              <li>✓ It holds independently of the explainer's background knowledge</li>
              <li>✓ It's a <strong>comparative concept</strong>—it compares probabilities</li>
              <li>✓ It focuses on how relevant certain factors are to the occurrence of an event</li>
            </ul>
          </div>

          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">💡 Understanding</p>
            <p class="text-teal-800 dark:text-teal-200">
              Unlike the D-N and IS models, the Statistical Relevance model emphasizes the <strong>relevance</strong> 
              of various factors rather than just logical deduction or high probability.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit2-validity",
      title: "✅ Basis for Validity of Scientific Explanations",
      subtitle: "How We Know Explanations Are Valid",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            How do we know if a scientific explanation is valid? Science relies on evidence to validate its 
            theories and models. Let's explore the basis for validity:
          </p>
          
          <div class="space-y-4 my-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">🔬 Empirical Verification</h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3">
                Science relies on <strong>evidence</strong> to validate its theories and models, and the 
                predictions implied by those theories and models should be in agreement with observation.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded mt-3">
                <p class="font-semibold mb-2 text-gray-900 dark:text-white">Key Requirements:</p>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Observations should be <strong>repeatable</strong></li>
                  <li>• Experiments can be (and usually will be) done again</li>
                  <li>• Predictions should be <strong>specific</strong></li>
                  <li>• Scientists should be able to describe a possible observation that would 
                  <strong>falsify</strong> a theory</li>
                </ul>
              </div>
              <p class="text-blue-800 dark:text-blue-200 mt-3 text-sm italic">
                ⚠️ While the basic concept is simple, in practice, there are difficulties.
              </p>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🔄 Induction</h4>
              <p class="text-green-800 dark:text-green-200 mb-3">
                How is it that scientists can state, for example, that <strong>Newton's Third Law of Motion</strong> 
                (to every action, there is equal and opposite forces) is universally true? After all, it is 
                not possible to have tested every incidence of an action, and found a reaction.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded mt-3">
                <p class="font-semibold mb-2 text-gray-900 dark:text-white">The Solution: Inductive Reasoning</p>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Inductive reasoning</strong> maintains that if a situation holds in all observed 
                  cases, then the situation holds in all cases.
                </p>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  So, after completing a series of experiments that support the Third Law, and in the absence 
                  of any evidence to the contrary, one is justified to imply that the Law will hold in all cases.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">💡 Key Insight</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Validity in science comes from <strong>empirical verification</strong> (testing) and 
              <strong>inductive reasoning</strong> (generalizing from observations). However, both have 
              their limitations and challenges.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-objectivity",
      title: "🎯 Objectivity of Observations in Science",
      subtitle: "Ensuring Accurate and Reliable Data",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            It is very important for science that the information about the surrounding world and the objects 
            of study are as <strong>accurate and reliable</strong> as possible. For the sake of this, 
            measurements which are the source of this information must be as <strong>objective</strong> as possible.
          </p>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-3">🔬 Using Measuring Devices</h4>
            <p class="text-indigo-800 dark:text-indigo-200 mb-3">
              To further abstract from unreliable human senses and make measurements more objective, science 
              uses measuring devices such as:
            </p>
            <div class="grid md:grid-cols-3 gap-3 mt-3">
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">📊 Spectrometers</div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">⚡ Voltmeters</div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">🔬 Interferometers</div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">🌡️ Thermocouples</div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">🔢 Counters</div>
              <div class="bg-white dark:bg-gray-700 p-3 rounded text-center">💻 Computers</div>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
            <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🤖 Modern Measurement</h4>
            <p class="text-green-800 dark:text-green-200 mb-3">
              The less the human involvement in the measuring process, the more accurate and reliable the 
              scientific data is.
            </p>
            <p class="text-green-800 dark:text-green-200">
              Currently, most measurements are done by a variety of <strong>mechanical and electronic sensors</strong> 
              directly linked to computers which further reduces the chance of human error/contamination of information.
            </p>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 dark:border-red-400 p-4 my-4">
            <h4 class="font-semibold text-red-900 dark:text-red-100 mb-3">⚠️ Challenges to Objectivity</h4>
            <p class="text-red-800 dark:text-red-200 mb-2">
              Another question about the objectivity of observations relates to:
            </p>
            <ul class="space-y-1 text-red-800 dark:text-red-200 text-sm ml-4">
              <li>• The so-called <strong>experimenter's regress</strong></li>
              <li>• Problems identified from the sociology of scientific knowledge</li>
              <li>• The cognitive and social biases of the people that interpret the observations or experiments</li>
              <li>• Unconscious interpretation and description of what they see in their own way</li>
            </ul>
          </div>

          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">💡 Key Point</p>
            <p class="text-teal-800 dark:text-teal-200">
              While science strives for objectivity through instruments and technology, complete objectivity 
              may be difficult to achieve due to human interpretation and biases. However, using measuring 
              devices and reducing human involvement helps improve accuracy.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-summary",
      title: "📝 Unit 2 Summary",
      subtitle: "Key Points from Scientific Explanations",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            This unit has addressed the concept of philosophy of science and scientific explanations adopting 
            some models such as Deductive-Nomological (D-N), Inductive Statistical (IS) and Statistical 
            Relevance (SR) with some specific examples. The basis for the validity of scientific explanations 
            and objectivity of observation in science were also addressed.
          </p>
          
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">🎯 Explanation is Key</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Of prediction, control, and explanation—explanation is the greatest aim of science.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">📊 Three Models</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">D-N Model (deductive), IS Model (inductive with high probability), and Statistical Relevance Model (comparative).</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">✅ Validity</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Based on empirical verification (repeatable observations) and inductive reasoning (generalizing from observations).</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">🎯 Objectivity</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Achieved through measuring devices, reducing human involvement, and acknowledging challenges like experimenter's regress and biases.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "summary",
      title: "📝 Chapter Summary",
      subtitle: "What We've Learned",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🎉 You've completed Chapter 2! Let's recap what we've learned:
          </p>
          
          <div class="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">1. Defining Science</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Science comes from 'scientia' (knowledge) and can be defined in multiple ways—as knowledge, systematic study, ordered body of knowledge, or research.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">2. Philosophy of Science</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Critical discussion of developments in science, examining assumptions, foundations, methods, and implications. Includes specialized philosophies (Biology, Chemistry, Mathematics, Physics, Psychology).</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">3. Methods of Study</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Three methods: Pedestrian (discussing topics), Critical (examining assumptions), and Original Philosophical (injecting philosophical notions).</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">4. Scientific Explanations</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Explanation is the greatest aim of science. Three models: D-N (deductive), IS (inductive), and Statistical Relevance (comparative).</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">5. Validity & Objectivity</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Validity comes from empirical verification and induction. Objectivity is achieved through measuring devices and reducing human involvement, though challenges remain.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🎯 Next Steps</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              You now understand the philosophical foundations of science and how scientific explanations work! 
              Remember: science is about understanding <em>why</em> things happen, not just <em>what</em> happens. 
              Keep questioning and exploring! 🔬✨
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    }
  ]
};

