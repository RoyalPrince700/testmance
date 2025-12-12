// Chapter 11: Logical Reasoning and Thinking
// GST 111 - Module 1

export const chapter11Content = {
  title: "Logical Reasoning and Thinking",
  author: "Department of Philosophy",
  department: "Faculty of Arts, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "introduction",
      title: "📖 Introduction",
      subtitle: "The Foundations of Logical Reasoning",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Logical reasoning is the process of analyzing information, identifying patterns, and making conclusions based on given premises. It is a fundamental aspect of critical thinking and problem-solving.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="text-blue-800 leading-relaxed">
              This chapter explores the various types of logical reasoning, their applications, and common fallacies to avoid. Understanding these concepts will enhance your ability to think critically and make sound decisions in academic and real-world situations.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Hey there, my brilliant student! 👋 Welcome to the world of logical reasoning - this is where we turn our brains into supercomputers! 🧠💻 Imagine you're a detective in a Nollywood movie, piecing together clues to solve the mystery. That's exactly what logical reasoning is all about!
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why is this important for Nigerian students like you?</p>
            <p class="text-blue-800">
              See, in our Nigerian culture, we love good arguments and debates! From market haggling to family discussions, we Nigerians are natural-born thinkers. But sometimes we mix emotions with logic, and that's when things get confusing. This course will help us separate "oga logic" from real logical reasoning! 🇳🇬✨
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-900 mb-2">🇳🇬 Nigerian Thinking Style</h4>
              <p class="text-green-800 text-sm">Often intuitive and emotional</p>
              <ul class="text-green-700 mt-2 space-y-1">
                <li>• "I feel it in my spirit!"</li>
                <li>• "My mama told me so"</li>
                <li>• Great for relationships</li>
              </ul>
            </div>

            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-900 mb-2">🔬 Logical Reasoning</h4>
              <p class="text-red-800 text-sm">Structured, evidence-based thinking</p>
              <ul class="text-red-700 mt-2 space-y-1">
                <li>• Facts over feelings</li>
                <li>• Step-by-step analysis</li>
                <li>• Reliable conclusions</li>
              </ul>
            </div>
          </div>

          <p class="text-lg leading-relaxed">
            This chapter will teach you how to analyze information like a pro, spot patterns that others miss, and make conclusions that stand up to scrutiny. Whether you're preparing for JAMB, debating with friends, or just trying to make better decisions in life - logical reasoning is your secret weapon! 🛡️⚔️
          </p>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 What You'll Learn</p>
            <p class="text-yellow-800">
              By the end of this chapter, you'll be able to spot weak arguments faster than a Lagos traffic warden spots a bribe opportunity! You'll learn different types of reasoning, how to avoid common traps, and most importantly - how to think like a champion. No more falling for "419 logic" tricks! 💪🚀
            </p>
          </div>
        </div>
      `
    },
    {
      id: "what-is-logical-reasoning",
      title: "🧠 What is Logical Reasoning?",
      subtitle: "Defining the Core Concept",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Logical reasoning refers to the ability to evaluate arguments, identify valid conclusions, and distinguish between strong and weak reasoning. It involves structured thinking based on logic, rather than emotions or assumptions.
          </p>

          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="font-bold text-green-900 mb-3">Key Characteristics:</h4>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <span class="font-bold text-green-700">•</span>
                <span class="text-green-800"><strong>Systematic Analysis:</strong> Breaking down complex problems into manageable parts</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-green-700">•</span>
                <span class="text-green-800"><strong>Evidence-Based:</strong> Drawing conclusions supported by facts and premises</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-green-700">•</span>
                <span class="text-green-800"><strong>Critical Evaluation:</strong> Assessing the validity and strength of arguments</span>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Now we're getting serious! 🧐 Logical reasoning is like being a judge in a Nigerian court - you don't just listen to stories, you examine evidence, weigh arguments, and make fair judgments. It's the difference between "he said, she said" gossip and solid, reliable conclusions.
          </p>

          <div class="bg-linear-to-r from-teal-100 to-blue-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🏛️ Logical Reasoning = Smart Thinking + Fair Judgment</h4>
            <p class="text-center text-gray-700">Like how a good referee calls a football match - no favoritism, just facts!</p>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-green-50 p-4 rounded-xl border-2 border-green-200">
              <div class="text-center mb-3">
                <span class="text-3xl">🔍</span>
              </div>
              <h5 class="font-bold text-green-900 text-center mb-2">Systematic Analysis</h5>
              <p class="text-green-800 text-sm text-center">
                Breaking big problems into small pieces, like how we analyze a jollof rice recipe step by step!
              </p>
            </div>

            <div class="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
              <div class="text-center mb-3">
                <span class="text-3xl">📊</span>
              </div>
              <h5 class="font-bold text-blue-900 text-center mb-2">Evidence-Based</h5>
              <p class="text-blue-800 text-sm text-center">
                Using facts, not feelings. "Show me the evidence!" like in a court case.
              </p>
            </div>

            <div class="bg-purple-50 p-4 rounded-xl border-2 border-purple-200">
              <div class="text-center mb-3">
                <span class="text-3xl">⚖️</span>
              </div>
              <h5 class="font-bold text-purple-900 text-center mb-2">Critical Evaluation</h5>
              <p class="text-purple-800 text-sm text-center">
                Testing arguments like a car dealer checks a used car before buying!
              </p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🤔 Why Nigerians Need This Skill</p>
            <p class="text-yellow-800">
              In our culture, we love debates and arguments! But sometimes we let emotions take over. Logical reasoning helps us separate good arguments from "wahala" arguments. Remember how politicians use emotional appeals instead of facts? This skill helps you see through that! 🇳🇬✨
            </p>
          </div>

          <p class="text-lg leading-relaxed">
            Unlike what some people think, logical reasoning isn't about being emotionless or boring. It's about being smart, fair, and effective. It's the difference between winning an argument because you're right, versus winning because you shouted louder! 🎯
          </p>

          <div class="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
            <p class="font-bold text-center text-gray-900">💡 Pro Tip for Nigerian Students</p>
            <p class="text-center text-gray-800 mt-2">
              Next time someone tries to convince you of something, ask yourself: "What's the evidence?" and "Does this make sense?" You'll be amazed at how many "strong" arguments fall apart under logical scrutiny! 🔍✨
            </p>
          </div>
        </div>
      `
    },
    {
      id: "types-of-reasoning",
      title: "📊 Types of Logical Reasoning",
      subtitle: "Four Main Categories",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            There are several types of logical reasoning, including:
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3 text-xl">🔽 Deductive Reasoning</h4>
              <ul class="space-y-2 text-blue-800">
                <li><strong>Involves drawing specific conclusions from general premises</strong></li>
                <li><strong>If the premises are true, the conclusion must be true</strong></li>
                <li><strong>Example:</strong></li>
              </ul>
              <div class="bg-white p-3 rounded mt-3 font-mono text-sm">
                <div>Premise 1: All humans are mortal.</div>
                <div>Premise 2: Socrates is a human.</div>
                <div>Conclusion: Socrates is mortal.</div>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3 text-xl">🔼 Inductive Reasoning</h4>
              <ul class="space-y-2 text-green-800">
                <li><strong>Moves from specific observations to general conclusions</strong></li>
                <li><strong>The conclusion is probable but not guaranteed</strong></li>
                <li><strong>Example:</strong></li>
              </ul>
              <div class="bg-white p-3 rounded mt-3 font-mono text-sm">
                <div>Premise 1: The sun has risen in the east every day so far.</div>
                <div>Conclusion: The sun will rise in the east tomorrow.</div>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3 text-xl">🔍 Abductive Reasoning</h4>
              <ul class="space-y-2 text-purple-800">
                <li><strong>Involves making the best possible guess based on incomplete information</strong></li>
                <li><strong>Often used in scientific hypotheses and medical diagnoses</strong></li>
                <li><strong>Example:</strong></li>
              </ul>
              <div class="bg-white p-3 rounded mt-3 font-mono text-sm">
                <div>Premise 1: The grass is wet.</div>
                <div>Premise 2: It might have rained overnight.</div>
                <div>Conclusion: It likely rained overnight.</div>
              </div>
            </div>

            <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 class="font-bold text-orange-900 mb-3 text-xl">🔄 Analogical Reasoning</h4>
              <ul class="space-y-2 text-orange-800">
                <li><strong>Involves comparing two similar cases and inferring that what applies to one applies to the other</strong></li>
                <li><strong>Example:</strong></li>
              </ul>
              <div class="bg-white p-3 rounded mt-3 font-mono text-sm">
                <div>Premise 1: The heart pumps blood in the human body.</div>
                <div>Premise 2: A pump moves fluid in a machine.</div>
                <div>Conclusion: The heart functions like a pump.</div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 8,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ah! Now we're entering the meat of the matter! 🍖 Just like we have different types of Nigerian soups (egusi, ogbono, afang), logical reasoning comes in different flavors too. Each type has its own strength and purpose - like how you wouldn't use egusi soup for pounded yam when you need ogbono! Let's break them down one by one.
          </p>

          <div class="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🍽️ Four Main Types of Logical Reasoning</h4>
            <p class="text-center text-gray-700">Each one is like a different cooking method - choose the right one for the job!</p>
          </div>

          <div class="space-y-6">
            <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-4">🔽</span>
                <div>
                  <h5 class="font-bold text-blue-900 text-xl">Deductive Reasoning</h5>
                  <p class="text-blue-800">"General to Specific" - Like a mathematics teacher working through a proof</p>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold mb-2">Example:</p>
                <p class="text-sm font-mono">All students must attend classes (General rule)<br>Ahmad is a student (Specific case)<br>∴ Ahmad must attend classes (Guaranteed conclusion!)</p>
              </div>
              <p class="text-blue-800 italic">If premises are true, conclusion MUST be true. No wahala! ✅</p>
            </div>

            <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-4">🔼</span>
                <div>
                  <h5 class="font-bold text-green-900 text-xl">Inductive Reasoning</h5>
                  <p class="text-green-800">"Specific to General" - Like tasting different soups to conclude about Nigerian cuisine</p>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold mb-2">Example:</p>
                <p class="text-sm font-mono">All the suya I've eaten in Kano was amazing<br>All the suya I've eaten in Lagos was amazing<br>All the suya I've eaten in Abuja was amazing<br>∴ Nigerian suya is generally amazing (Probably true, but not guaranteed)</p>
              </div>
              <p class="text-green-800 italic">Conclusion is likely but not certain. Like betting on Chelsea to win! ⚽</p>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-4">🔍</span>
                <div>
                  <h5 class="font-bold text-purple-900 text-xl">Abductive Reasoning</h5>
                  <p class="text-purple-800">"Best Guess" - Like being a detective with incomplete information</p>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold mb-2">Example:</p>
                <p class="text-sm font-mono">The ground is wet (Observation)<br>It rained last night (Best explanation)<br>∴ It probably rained (But could be wrong - maybe a burst pipe!)</p>
              </div>
              <p class="text-purple-800 italic">Doctors use this daily! "Patient has fever + cough = Malaria?" 🩺</p>
            </div>

            <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-4">🔄</span>
                <div>
                  <h5 class="font-bold text-orange-900 text-xl">Analogical Reasoning</h5>
                  <p class="text-orange-800">"Comparing Similar Things" - Like saying "Heart is like a pump"</p>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold mb-2">Example:</p>
                <p class="text-sm font-mono">A car engine needs oil to work smoothly<br>A human body needs blood to function<br>∴ Blood is like the body's oil (Comparison helps understanding)</p>
              </div>
              <p class="text-orange-800 italic">Great for teaching! But remember: analogies aren't perfect - cars aren't alive! 🚗</p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🇳🇬 Nigerian Context: Which Type Do We Use Most?</p>
            <p class="text-yellow-800">
              In our culture, we love analogies! "Life is like a bicycle" or "Marriage is like pounded yam" - we explain complex things through simple comparisons. But for serious decisions like choosing a course or career, we need deductive reasoning to be sure. Inductive reasoning helps us learn from experience, like knowing "NEPA will take light" based on past experiences! 💡
            </p>
          </div>

          <p class="text-lg leading-relaxed">
            Master these four types, and you'll be able to analyze any situation like a pro! Each has its place - don't try to use deductive reasoning for weather predictions (that's inductive territory). Choose wisely, like picking the right soup for the right occasion! 🎯✨
          </p>
        </div>
      `
    },
    {
      id: "syllogism",
      title: "🔗 Syllogism",
      subtitle: "A Form of Deductive Reasoning",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Syllogism is a form of deductive reasoning where a conclusion is drawn from two premises.
          </p>

          <div class="bg-indigo-50 p-6 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-4">Types of Syllogism:</h4>

            <div class="space-y-6">
              <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-300">
                <h5 class="font-bold text-indigo-900 mb-2">1. Categorical Syllogism</h5>
                <ul class="space-y-1 text-indigo-800">
                  <li><strong>Uses statements that categorize things</strong></li>
                  <li><strong>Example:</strong></li>
                </ul>
                <div class="bg-indigo-50 p-3 rounded mt-2 font-mono text-sm">
                  <div>Premise 1: All birds have wings.</div>
                  <div>Premise 2: A sparrow is a bird.</div>
                  <div>Conclusion: A sparrow has wings.</div>
                </div>
              </div>

              <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-300">
                <h5 class="font-bold text-indigo-900 mb-2">2. Hypothetical Syllogism</h5>
                <ul class="space-y-1 text-indigo-800">
                  <li><strong>Uses "if-then" statements</strong></li>
                  <li><strong>Example:</strong></li>
                </ul>
                <div class="bg-indigo-50 p-3 rounded mt-2 font-mono text-sm">
                  <div>Premise 1: If it rains, the ground will be wet.</div>
                  <div>Premise 2: It is raining.</div>
                  <div>Conclusion: The ground is wet.</div>
                </div>
              </div>

              <div class="bg-white p-4 rounded-lg border-l-4 border-indigo-300">
                <h5 class="font-bold text-indigo-900 mb-2">3. Disjunctive Syllogism</h5>
                <ul class="space-y-1 text-indigo-800">
                  <li><strong>Uses "either-or" statements</strong></li>
                  <li><strong>Example:</strong></li>
                </ul>
                <div class="bg-indigo-50 p-3 rounded mt-2 font-mono text-sm">
                  <div>Premise 1: Either John is at home or at the market.</div>
                  <div>Premise 2: John is not at home.</div>
                  <div>Conclusion: John is at the market.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 7,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Syllogism is like the "big brother" of deductive reasoning! 👨‍👩‍👧‍👦 It's a complete logical package - two premises that lead to one solid conclusion. Think of it like a proper Nigerian introduction: "This is my father, who is from Kano. This is my brother, who is also from Kano. Therefore, my brother is from Kano too!" Simple, logical, and no room for doubt.
          </p>

          <div class="bg-linear-to-r from-indigo-100 to-purple-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🏗️ Syllogism = 2 Premises + 1 Conclusion</h4>
            <p class="text-center text-gray-700">Like building a house - strong foundation (premises) = strong roof (conclusion)!</p>
          </div>

          <div class="space-y-6">
            <div class="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
              <div class="flex items-center mb-4">
                <span class="text-3xl mr-3">📝</span>
                <h5 class="font-bold text-indigo-900 text-xl">Categorical Syllogism</h5>
              </div>
              <p class="text-indigo-800 mb-3">"All/some/none" statements about categories</p>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold mb-2">Example:</p>
                <div class="text-sm font-mono space-y-1">
                  <div>Premise 1: All students are learners</div>
                  <div>Premise 2: Ade is a student</div>
                  <div class="text-indigo-600 font-bold">Conclusion: Ade is a learner ✅</div>
                </div>
              </div>
              <p class="text-indigo-800 text-sm italic">Like saying: "All Yoruba people are Nigerians. Bola is Yoruba. Therefore, Bola is Nigerian!" 🇳🇬</p>
            </div>

            <div class="bg-teal-50 p-6 rounded-xl border-2 border-teal-200">
              <div class="flex items-center mb-4">
                <span class="text-3xl mr-3">🤔</span>
                <h5 class="font-bold text-teal-900 text-xl">Hypothetical Syllogism</h5>
              </div>
              <p class="text-teal-800 mb-3">"If-then" conditional statements</p>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold mb-2">Example:</p>
                <div class="text-sm font-mono space-y-1">
                  <div>Premise 1: If you study hard, you'll pass</div>
                  <div>Premise 2: You studied hard</div>
                  <div class="text-teal-600 font-bold">Conclusion: You'll pass ✅</div>
                </div>
              </div>
              <p class="text-teal-800 text-sm italic">Like: "If NEPA takes light, generator comes on. NEPA took light. Generator is on!" ⚡</p>
            </div>

            <div class="bg-pink-50 p-6 rounded-xl border-2 border-pink-200">
              <div class="flex items-center mb-4">
                <span class="text-3xl mr-3">⚖️</span>
                <h5 class="font-bold text-pink-900 text-xl">Disjunctive Syllogism</h5>
              </div>
              <p class="text-pink-800 mb-3">"Either-or" statements (elimination method)</p>
              <div class="bg-white p-4 rounded-lg mb-3">
                <p class="font-semibold mb-2">Example:</p>
                <div class="text-sm font-mono space-y-1">
                  <div>Premise 1: Either you're in class or you're absent</div>
                  <div>Premise 2: You're not absent</div>
                  <div class="text-pink-600 font-bold">Conclusion: You're in class ✅</div>
                </div>
              </div>
              <p class="text-pink-800 text-sm italic">Like: "Either you're for PDP or APC. You're not for PDP. You're for APC!" 🗳️</p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🤔 Why Syllogisms Matter for Nigerian Students</p>
            <p class="text-yellow-800">
              In our culture, we love clear, direct logic! But sometimes arguments get emotional. Syllogisms help us stay focused on facts. Remember those JAMB questions that seem tricky? They're often testing your ability to spot valid syllogisms. Master this, and you'll ace those logical reasoning questions! 📚✨
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">⚠️ Watch Out!</p>
            <p class="text-red-800">
              Not all syllogisms are valid! Make sure your premises are true and your conclusion follows logically. "All Nigerians love jollof rice. I'm Nigerian. Therefore, I love jollof rice" - this might be wrong if you're from a family that prefers suya! 😅
            </p>
          </div>

          <p class="text-lg leading-relaxed">
            Syllogisms are like the foundation of logical thinking. Once you master them, you'll be able to build stronger arguments and spot weak ones from miles away. Practice with everyday examples - you'll be amazed at how often we use syllogisms without realizing it! 🎯🚀
          </p>
        </div>
      `
    },
    {
      id: "other-types",
      title: "🔬 Other Types of Logical Reasoning",
      subtitle: "Advanced Reasoning Systems",
      content: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-1 gap-6">
            <div class="bg-teal-50 p-6 rounded-lg">
              <h4 class="font-bold text-teal-900 mb-4">1. Propositional Logic (Sentential Logic)</h4>
              <ul class="space-y-2 text-teal-800">
                <li><strong>Deals with statements (propositions) and their logical connections (AND, OR, NOT, IF-THEN)</strong></li>
                <li><strong>Example:</strong></li>
              </ul>
              <div class="bg-white p-3 rounded mt-2 font-mono text-sm">
                <div>Statement: If it is raining, then I will take an umbrella.</div>
              </div>
            </div>

            <div class="bg-cyan-50 p-6 rounded-lg">
              <h4 class="font-bold text-cyan-900 mb-4">2. Predicate Logic (First-Order Logic)</h4>
              <ul class="space-y-2 text-cyan-800">
                <li><strong>Extends propositional logic by using variables and quantifiers</strong></li>
                <li><strong>Example:</strong></li>
              </ul>
              <div class="bg-white p-3 rounded mt-2 font-mono text-sm">
                <div>Statement: "All humans are mortal" → ∀x (Human(x) → Mortal(x))</div>
              </div>
            </div>

            <div class="bg-pink-50 p-6 rounded-lg">
              <h4 class="font-bold text-pink-900 mb-4">3. Non-Monotonic Reasoning</h4>
              <ul class="space-y-2 text-pink-800">
                <li><strong>Involves reasoning where conclusions can change when new information is added</strong></li>
                <li><strong>Example:</strong></li>
              </ul>
              <div class="bg-white p-3 rounded mt-2 font-mono text-sm">
                <div>"Birds can fly." (But later you learn that penguins are birds that cannot fly.)</div>
              </div>
            </div>

            <div class="bg-yellow-50 p-6 rounded-lg">
              <h4 class="font-bold text-yellow-900 mb-4">4. Fuzzy Logic</h4>
              <ul class="space-y-2 text-yellow-800">
                <li><strong>Deals with reasoning that is approximate rather than exact</strong></li>
                <li><strong>Example:</strong></li>
              </ul>
              <div class="bg-white p-3 rounded mt-2 font-mono text-sm">
                <div>"The weather is hot." (Hot is a subjective term that depends on perception.)</div>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg">
              <h4 class="font-bold text-red-900 mb-4">5. Modal Logic</h4>
              <ul class="space-y-2 text-red-800">
                <li><strong>Involves reasoning about possibility and necessity</strong></li>
                <li><strong>Example:</strong></li>
              </ul>
              <div class="bg-white p-3 rounded mt-2 font-mono text-sm">
                <div>"It is possible that it will rain tomorrow."</div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 9,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ah! Now we're entering advanced territory! 🚀 These are the "special forces" of logical reasoning - more complex but super powerful tools. Don't worry if they seem confusing at first - even philosophy professors take time to master them. Think of them as different types of vehicles: some are simple bicycles (basic reasoning), others are jets (advanced logic)!
          </p>

          <div class="bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">✈️ Advanced Logical Reasoning Systems</h4>
            <p class="text-center text-gray-700">Like upgrading from keke napep to private jet - more complex, but gets you further!</p>
          </div>

          <div class="space-y-6">
            <div class="bg-teal-50 p-5 rounded-xl border-l-4 border-teal-500">
              <h5 class="font-bold text-teal-900 mb-3 flex items-center">
                <span class="text-2xl mr-3">🔗</span>
                Propositional Logic (Sentential Logic)
              </h5>
              <p class="text-teal-800 mb-3">Deals with complete statements connected by AND, OR, NOT</p>
              <div class="bg-white p-3 rounded mb-3">
                <p class="font-semibold text-sm mb-1">Simple Example:</p>
                <p class="text-sm font-mono">"It is raining AND I have an umbrella"</p>
              </div>
              <p class="text-teal-800 text-sm italic">Like saying: "I go to school OR I stay home" - the statement is either true or false! 📚</p>
            </div>

            <div class="bg-cyan-50 p-5 rounded-xl border-l-4 border-cyan-500">
              <h5 class="font-bold text-cyan-900 mb-3 flex items-center">
                <span class="text-2xl mr-3">🔍</span>
                Predicate Logic (First-Order Logic)
              </h5>
              <p class="text-cyan-800 mb-3">Uses variables and quantifiers (ALL, SOME, EXISTS)</p>
              <div class="bg-white p-3 rounded mb-3">
                <p class="font-semibold text-sm mb-1">Example:</p>
                <p class="text-sm font-mono">∀x (Student(x) → Studies(x))<br>"All students study"</p>
              </div>
              <p class="text-cyan-800 text-sm italic">Perfect for math and computer science! Like programming logic but for real life. 💻</p>
            </div>

            <div class="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-500">
              <h5 class="font-bold text-pink-900 mb-3 flex items-center">
                <span class="text-2xl mr-3">🔄</span>
                Non-Monotonic Reasoning
              </h5>
              <p class="text-pink-800 mb-3">Conclusions can change when new information is added</p>
              <div class="bg-white p-3 rounded mb-3">
                <p class="font-semibold text-sm mb-1">Example:</p>
                <p class="text-sm font-mono">"Birds fly" (General rule)<br>Then: "Penguins are birds but can't fly" (New info)<br>Conclusion changes!</p>
              </div>
              <p class="text-pink-800 text-sm italic">Like life! "All politicians are corrupt" might change when you meet honest ones. 🗳️</p>
            </div>

            <div class="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
              <h5 class="font-bold text-yellow-900 mb-3 flex items-center">
                <span class="text-2xl mr-3">🌫️</span>
                Fuzzy Logic
              </h5>
              <p class="text-yellow-800 mb-3">Deals with partial truth - not just true/false, but degrees</p>
              <div class="bg-white p-3 rounded mb-3">
                <p class="font-semibold text-sm mb-1">Example:</p>
                <p class="text-sm font-mono">"The weather is hot" - Could be 70% hot, not 100%!</p>
              </div>
              <p class="text-yellow-800 text-sm italic">Like Nigerian "small time" vs "big time" - it's not absolute! ⏰</p>
            </div>

            <div class="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
              <h5 class="font-bold text-red-900 mb-3 flex items-center">
                <span class="text-2xl mr-3">💭</span>
                Modal Logic
              </h5>
              <p class="text-red-800 mb-3">Deals with possibility and necessity</p>
              <div class="bg-white p-3 rounded mb-3">
                <p class="font-semibold text-sm mb-1">Examples:</p>
                <p class="text-sm font-mono">□ = Necessarily (must be true)<br>◇ = Possibly (could be true)</p>
              </div>
              <p class="text-red-800 text-sm italic">"It must rain tomorrow" vs "It might rain tomorrow" - different strengths! 🌧️</p>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Learn These Advanced Types?</p>
            <p class="text-blue-800">
              Even if you don't become a philosopher, these concepts appear everywhere! Computer programming uses propositional logic. Medical diagnosis uses abductive reasoning. Weather forecasting uses fuzzy logic. Understanding them makes you a better thinker in any field! 🎓✨
            </p>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🇳🇬 Nigerian Connection</p>
            <p class="text-green-800">
              Our culture understands fuzzy logic naturally! When we say "the party was lit," it's not 100% objective - it's about the vibe, the energy, the atmosphere. We understand that truth isn't always black and white. That's fuzzy logic in action! 🎉
            </p>
          </div>

          <p class="text-lg leading-relaxed">
            Don't stress if these seem overwhelming! Start with the basics and work up. These advanced tools are like having a PhD in thinking - they give you an edge in any intellectual pursuit. Keep practicing, and soon you'll be spotting these patterns everywhere! 🧠💪
          </p>
        </div>
      `
    },
    {
      id: "logical-fallacies",
      title: "⚠️ Logical Fallacies",
      subtitle: "Errors in Reasoning to Avoid",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Logical fallacies are errors in reasoning that weaken arguments.
          </p>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">Common Logical Fallacies:</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h5 class="font-bold text-red-900 mb-2">1. Ad Hominem</h5>
              <p class="text-red-800 mb-2"><strong>Attacking the person instead of the argument</strong></p>
              <div class="bg-white p-2 rounded text-sm italic">
                "You're too young to understand this topic."
              </div>
            </div>

            <div class="bg-red-50 p-4 rounded-lg">
              <h5 class="font-bold text-red-900 mb-2">2. Straw Man</h5>
              <p class="text-red-800 mb-2"><strong>Misrepresenting an argument to make it easier to attack</strong></p>
              <div class="bg-white p-2 rounded text-sm italic">
                "Person A: We should have stricter gun laws.<br>Person B: So you want to ban all guns and leave us defenseless?"
              </div>
            </div>

            <div class="bg-red-50 p-4 rounded-lg">
              <h5 class="font-bold text-red-900 mb-2">3. False Dilemma</h5>
              <p class="text-red-800 mb-2"><strong>Presenting only two options when more exist</strong></p>
              <div class="bg-white p-2 rounded text-sm italic">
                "Either you support our policy or you hate the country."
              </div>
            </div>

            <div class="bg-red-50 p-4 rounded-lg">
              <h5 class="font-bold text-red-900 mb-2">4. Circular Reasoning</h5>
              <p class="text-red-800 mb-2"><strong>Using the conclusion as evidence</strong></p>
              <div class="bg-white p-2 rounded text-sm italic">
                "I'm always right because I never make mistakes."
              </div>
            </div>

            <div class="bg-red-50 p-4 rounded-lg">
              <h5 class="font-bold text-red-900 mb-2">5. Hasty Generalization</h5>
              <p class="text-red-800 mb-2"><strong>Making a conclusion based on insufficient evidence</strong></p>
              <div class="bg-white p-2 rounded text-sm italic">
                "All programmers are introverts because I know one who is."
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 8,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ah! Now we're getting to the juicy part! 🍊 Logical fallacies are like "landmines" in arguments - they look harmless but can blow up your whole reasoning! These are sneaky tricks that make weak arguments seem strong. In Nigerian debates, we see these all the time - from market haggling to political discussions. Let's expose these "419 logic" tricks! 🕵️‍♂️
          </p>

          <div class="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🚨 Logical Fallacies = Fake Arguments</h4>
            <p class="text-center text-gray-700">Like counterfeit money - looks real but fails the test!</p>
          </div>

          <div class="space-y-4">
            <div class="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
              <h5 class="font-bold text-red-900 mb-3 flex items-center">
                <span class="text-2xl mr-3">👤</span>
                Ad Hominem (Attack the Person)
              </h5>
              <p class="text-red-800 mb-3">Instead of addressing the argument, you attack the person's character</p>
              <div class="bg-white p-3 rounded mb-3">
                <p class="font-semibold text-sm mb-1">Example:</p>
                <p class="text-sm italic">"Don't listen to him about traffic - he's from Lagos and Lagosians are bad drivers!"</p>
              </div>
              <p class="text-red-800 text-sm italic">Very common in Nigerian politics! Focus on the idea, not the person! 🗳️</p>
            </div>

            <div class="bg-orange-50 p-5 rounded-xl border-l-4 border-orange-500">
              <h5 class="font-bold text-orange-900 mb-3 flex items-center">
                <span class="text-2xl mr-3">🎭</span>
                Straw Man (Misrepresentation)
              </h5>
              <p class="text-orange-800 mb-3">Misrepresent someone's argument to make it easier to attack</p>
              <div class="bg-white p-3 rounded mb-3">
                <p class="font-semibold text-sm mb-1">Example:</p>
                <p class="text-sm italic">Person A: "We need better roads"<br>Person B: "So you want to spend all our money on roads and leave schools empty?"</p>
              </div>
              <p class="text-orange-800 text-sm italic">Like saying "You want to ban all cars because you mentioned traffic!" Fight fair! 🚗</p>
            </div>

            <div class="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
              <h5 class="font-bold text-yellow-900 mb-3 flex items-center">
                <span class="text-2xl mr-3">⚖️</span>
                False Dilemma (Black & White Fallacy)
              </h5>
              <p class="text-yellow-800 mb-3">Present only two options when more exist</p>
              <div class="bg-white p-3 rounded mb-3">
                <p class="font-semibold text-sm mb-1">Example:</p>
                <p class="text-sm italic">"Either you support our party or you hate Nigeria!"</p>
              </div>
              <p class="text-yellow-800 text-sm italic">Life has many shades! You can love Nigeria but criticize the government. 🇳🇬</p>
            </div>

            <div class="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-500">
              <h5 class="font-bold text-purple-900 mb-3 flex items-center">
                <span class="text-2xl mr-3">🔄</span>
                Circular Reasoning (Begging the Question)
              </h5>
              <p class="text-purple-800 mb-3">Using the conclusion as evidence for itself</p>
              <div class="bg-white p-3 rounded mb-3">
                <p class="font-semibold text-sm mb-1">Example:</p>
                <p class="text-sm italic">"I'm always right because I never make mistakes."</p>
              </div>
              <p class="text-purple-800 text-sm italic">Like saying "This product is good because it's good!" No evidence needed? 🚫</p>
            </div>

            <div class="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-500">
              <h5 class="font-bold text-pink-900 mb-3 flex items-center">
                <span class="text-2xl mr-3">⚡</span>
                Hasty Generalization
              </h5>
              <p class="text-pink-800 mb-3">Making a conclusion based on too little evidence</p>
              <div class="bg-white p-3 rounded mb-3">
                <p class="font-semibold text-sm mb-1">Example:</p>
                <p class="text-sm italic">"All lecturers are strict because my GST111 teacher is strict."</p>
              </div>
              <p class="text-pink-800 text-sm italic">One bad experience ≠ the whole story! Meet more people first. 👥</p>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Fallacies Matter in Nigerian Context</p>
            <p class="text-blue-800">
              In our culture, we love good debates! But fallacies make arguments emotional instead of logical. Politicians use them to manipulate crowds. Marketers use them to sell products. Learning to spot fallacies makes you immune to manipulation and helps you argue better. Knowledge is power! 💪📚
            </p>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🎯 How to Counter Fallacies</p>
            <p class="text-green-800">
              When you spot a fallacy, gently point it out: "That's interesting, but that's attacking the person instead of the argument." or "There are actually more options than just those two." Stay calm and factual - you'll win more arguments this way! 🏆
            </p>
          </div>

          <p class="text-lg leading-relaxed">
            Fallacies are everywhere - in social media, newspapers, even family arguments! Once you learn to spot them, you'll see the world differently. No more falling for "emotional logic" - you'll demand real evidence and solid reasoning. That's how champions think! 🧠⚡
          </p>
        </div>
      `
    },
    {
      id: "importance",
      title: "🎯 Importance of Logical Reasoning",
      subtitle: "Why It Matters",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Logical reasoning is essential for academic success and real-world problem-solving. Understanding deductive, inductive, and other forms of reasoning, as well as avoiding logical fallacies, will improve your ability to think critically and argue effectively.
          </p>

          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4">Key Benefits:</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="text-green-600">✓</span>
                  <span class="text-green-800"><strong>Critical Thinking:</strong> Helps in analyzing complex situations</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-green-600">✓</span>
                  <span class="text-green-800"><strong>Decision Making:</strong> Enables better choices based on evidence</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-green-600">✓</span>
                  <span class="text-green-800"><strong>Problem Solving:</strong> Enhances ability to solve complex problems</span>
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="text-green-600">✓</span>
                  <span class="text-green-800"><strong>Academic Success:</strong> Improves performance in various subjects</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-green-600">✓</span>
                  <span class="text-green-800"><strong>Professional Skills:</strong> Valuable in law, mathematics, computer science, and philosophy</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-green-600">✓</span>
                  <span class="text-green-800"><strong>Effective Communication:</strong> Improves ability to argue and persuade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Now let's talk about why this logical reasoning skill is your "secret weapon" for success! 🔐💣 Think about it - in a country like Nigeria where "man know man" and "connections" seem to rule everything, logical reasoning gives you an unfair advantage that no one can take away. It's your personal superpower! 🦸‍♂️
          </p>

          <div class="bg-linear-to-r from-green-100 to-blue-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🚀 Logical Reasoning = Your Success Formula</h4>
            <p class="text-center text-gray-700">Like having a PhD in smart thinking - priceless!</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <div class="flex items-start space-x-3">
                  <span class="text-green-600 text-xl">🧠</span>
                  <div>
                    <h5 class="font-bold text-green-900">Critical Thinking</h5>
                    <p class="text-green-800 text-sm">Analyze complex situations like a detective. No more falling for "419" schemes or political propaganda!</p>
                  </div>
                </div>
              </div>

              <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <div class="flex items-start space-x-3">
                  <span class="text-blue-600 text-xl">🎯</span>
                  <div>
                    <h5 class="font-bold text-blue-900">Better Decisions</h5>
                    <p class="text-blue-800 text-sm">Choose courses, careers, investments based on facts, not emotions. Smart choices = better life!</p>
                  </div>
                </div>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <div class="flex items-start space-x-3">
                  <span class="text-purple-600 text-xl">🔧</span>
                  <div>
                    <h5 class="font-bold text-purple-900">Problem Solving</h5>
                    <p class="text-purple-800 text-sm">Break down big problems into small, solvable parts. From fixing generator to planning business!</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <div class="flex items-start space-x-3">
                  <span class="text-orange-600 text-xl">📚</span>
                  <div>
                    <h5 class="font-bold text-orange-900">Academic Success</h5>
                    <p class="text-orange-800 text-sm">Ace JAMB, excel in university courses, especially in Law, Philosophy, Computer Science, Mathematics!</p>
                  </div>
                </div>
              </div>

              <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <div class="flex items-start space-x-3">
                  <span class="text-red-600 text-xl">💼</span>
                  <div>
                    <h5 class="font-bold text-red-900">Career Advantage</h5>
                    <p class="text-red-800 text-sm">Stand out in job interviews, excel in professional fields. Logical thinkers get promoted faster!</p>
                  </div>
                </div>
              </div>

              <div class="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <div class="flex items-start space-x-3">
                  <span class="text-pink-600 text-xl">💬</span>
                  <div>
                    <h5 class="font-bold text-pink-900">Effective Communication</h5>
                    <p class="text-pink-800 text-sm">Argue convincingly, persuade others, win debates. Your words will carry more weight!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🇳🇬 Real Nigerian Benefits</p>
            <p class="text-yellow-800">
              In Nigeria, where "grammar" and "logic" can make or break your success, this skill is gold! Whether you're negotiating business deals, debating politics, or just trying to get a fair price at the market - logical reasoning gives you the edge. No more being "shortchanged" in arguments or decisions! 💰⚖️
            </p>
          </div>

          <div class="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
            <h5 class="font-bold text-indigo-900 mb-2">🎓 Career Paths That Need This Skill</h5>
            <div class="grid md:grid-cols-3 gap-3 text-sm">
              <div class="text-center">
                <span class="block text-2xl mb-1">⚖️</span>
                <span class="text-indigo-800">Law</span>
              </div>
              <div class="text-center">
                <span class="block text-2xl mb-1">💻</span>
                <span class="text-indigo-800">Computer Science</span>
              </div>
              <div class="text-center">
                <span class="block text-2xl mb-1">🔬</span>
                <span class="text-indigo-800">Medicine</span>
              </div>
              <div class="text-center">
                <span class="block text-2xl mb-1">📊</span>
                <span class="text-indigo-800">Business</span>
              </div>
              <div class="text-center">
                <span class="block text-2xl mb-1">🧮</span>
                <span class="text-indigo-800">Mathematics</span>
              </div>
              <div class="text-center">
                <span class="block text-2xl mb-1">🎨</span>
                <span class="text-indigo-800">Philosophy</span>
              </div>
            </div>
          </div>

          <p class="text-lg leading-relaxed">
            Listen, my dear student - in a world full of misinformation, emotional manipulation, and "fake news," logical reasoning is your shield and sword! 🛡️⚔️ It doesn't matter if you don't have "connections" or rich parents - this skill levels the playing field. Master it, and you'll be unstoppable. Your future self will thank you! 🌟🚀
          </p>
        </div>
      `
    },
    {
      id: "conclusion",
      title: "📚 Conclusion",
      subtitle: "Mastering Logical Reasoning",
      content: `
        <div class="space-y-6">
          <div class="bg-linear-to-r from-blue-100 to-purple-100 p-6 rounded-lg text-center">
            <h4 class="font-bold text-gray-900 mb-3">🎯 Key Takeaways</h4>
            <p class="text-gray-800 leading-relaxed mb-4">
              Logical reasoning is essential for academic success and real-world problem-solving. Understanding deductive, inductive, and other forms of reasoning, as well as avoiding logical fallacies, will improve your ability to think critically and argue effectively.
            </p>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">Practice Makes Perfect</p>
            <p class="text-green-800">
              Regular practice in identifying different types of reasoning and avoiding fallacies will strengthen your logical thinking skills. Apply these concepts in your studies, discussions, and daily decision-making for better outcomes.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ah! We've come to the end of our logical reasoning journey, my brilliant student! 🎉 What a ride it's been! From understanding basic concepts to mastering advanced reasoning systems, you've leveled up your thinking game. But remember - this is just the beginning. The real mastery comes with practice! 💪📈
          </p>

          <div class="bg-linear-to-r from-blue-100 to-purple-100 p-6 rounded-lg text-center">
            <h4 class="font-bold text-gray-900 mb-3">🏆 Your Logical Reasoning Masterclass - Complete!</h4>
            <p class="text-gray-800 leading-relaxed">
              You've learned to think like a champion: analyzing arguments, spotting fallacies, and making decisions based on solid evidence rather than emotions or assumptions. This skill will serve you for life! 🎯✨
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-5 rounded-xl">
              <h5 class="font-bold text-green-900 mb-3 flex items-center">
                <span class="text-xl mr-2">🎯</span>
                Key Takeaways
              </h5>
              <ul class="space-y-2 text-green-800">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span>Logical reasoning separates facts from feelings</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span>Different reasoning types for different situations</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span>Fallacies are "logic traps" to avoid</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span>Practice makes perfect!</span>
                </li>
              </ul>
            </div>

            <div class="bg-blue-50 p-5 rounded-xl">
              <h5 class="font-bold text-blue-900 mb-3 flex items-center">
                <span class="text-xl mr-2">🚀</span>
                Next Steps for Success
              </h5>
              <ul class="space-y-2 text-blue-800">
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">•</span>
                  <span>Apply concepts to daily life</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">•</span>
                  <span>Practice with real arguments</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">•</span>
                  <span>Read and analyze news critically</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">•</span>
                  <span>Debate with friends respectfully</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">💡 Practice Ideas for Nigerian Students</p>
            <p class="text-yellow-800">
              • Analyze political speeches for fallacies<br>
              • Debate "Jollof rice vs Fried rice" using logical arguments<br>
              • Evaluate news headlines for hasty generalizations<br>
              • Use deductive reasoning for JAMB preparation<br>
              • Spot false dilemmas in social media debates
            </p>
          </div>

          <div class="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
            <h5 class="font-bold text-center text-gray-900 mb-2">🎊 Your Growth Mindset Challenge</h5>
            <p class="text-center text-gray-800">
              This week, try this: When someone presents an argument, ask yourself "What's the evidence?" and "Is this logical?" You'll be amazed at how many arguments fall apart under logical scrutiny! 🔍✨
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">⚠️ Remember: Logic + Compassion = Wisdom</p>
            <p class="text-red-800">
              Logical reasoning doesn't mean being cold or unfeeling. It means being smart about your thinking while staying kind to others. Use your new skills to build bridges, not walls. Logic should serve humanity, not replace empathy! 🤝❤️
            </p>
          </div>

          <p class="text-lg leading-relaxed text-center">
            You've got this, champion! 🎉 The world needs more logical thinkers like you. Go forth and reason brilliantly - your university, your career, and your country will be better for it. Stay logical, stay excellent! 🇳🇬🧠💎
          </p>
        </div>
      `
    }
  ]
};
