// Chapter 2: Argument Basics
// GST 111 - Module 1

export const chapter2Content = {
  title: "Argument Basics",
  author: "Dr. Michael LaBossiere",
  department: "Department of Philosophy, Florida A&M University",
  sections: [
    {
      id: "introduction-arguments",
      title: "📖 Introduction to Arguments",
      subtitle: "Understanding the Foundation of Critical Thinking",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            While people have a general idea of what "argument" means, the term does have a technical meaning in the context of philosophy that is well worth considering. Arguments form the backbone of critical thinking and rational discourse.
          </p>

          <p class="text-lg leading-relaxed">
            In philosophy, an argument is a set of claims, one of which is supposed to be supported by the others. This structured approach to reasoning helps us evaluate ideas, make decisions, and communicate effectively.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="text-blue-800 leading-relaxed">
              Arguments are not about winning fights or heated disagreements. They are about presenting claims with supporting evidence or reasons, creating a foundation for logical analysis and evaluation.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Hello my dear GST111 student! 😊 Welcome to the exciting world of arguments. You know how we Nigerians love to "debate" or "argue" about everything - from football matches to politics to who makes the best jollof rice? Ehen! Today we're going to learn about arguments in a more serious, academic way.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Arguments Matter for Nigerian Students</p>
            <p class="text-blue-800">
              In our Nigerian society, we often see arguments as "wahala" or unnecessary fights. But in university, arguments are like tools for building wisdom! They help us think clearly, make good decisions, and even convince others about our ideas. No more just "shouting" your opinion - you'll learn to back it up properly!
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-900 mb-2">🇳🇬 Nigerian Style "Arguments"</h4>
              <p class="text-green-800 text-sm mb-3">What we're used to seeing:</p>
              <ul class="text-green-700 space-y-1">
                <li>• Loud voices and emotions</li>
                <li>• Personal attacks ("You no get sense!")</li>
                <li>• Based on feelings, not facts</li>
                <li>• Often ends in fights 😅</li>
              </ul>
            </div>

            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-900 mb-2">🎓 Academic Arguments</h4>
              <p class="text-red-800 text-sm mb-3">What we'll learn:</p>
              <ul class="text-red-700 space-y-1">
                <li>• Clear claims with evidence</li>
                <li>• Logical reasoning</li>
                <li>• Respectful discussion</li>
                <li>• Seeks truth, not just to win</li>
              </ul>
            </div>
          </div>

          <p class="text-lg leading-relaxed">
            Think of an argument like cooking a delicious pot of soup. You need ingredients (facts/premises) and a recipe (logic) to create something nourishing (conclusion). Just like how Mama puts different vegetables and spices together to make egusi soup, we combine ideas and evidence to reach sound conclusions.
          </p>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Your Journey Ahead</p>
            <p class="text-yellow-800">
              By mastering arguments, you'll become a more effective student, better citizen, and even a wiser person. No more getting confused in class discussions or feeling lost during debates. You'll learn to spot weak arguments and build strong ones. You don do well! 💪🇳🇬
            </p>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-2">💡 Quick Tip for Nigerian Learners</h4>
            <p class="text-purple-800">
              Remember our proverbs? "Ẹnikẹ́ni tí kò bá ní ìmọ̀, ọ̀rọ̀ á pa á run" (Anyone who lacks knowledge will be destroyed by words). Good arguments are your defense against confusion and bad ideas. Stay sharp! 🔪✨
            </p>
          </div>
        </div>
      `
    },
    {
      id: "argument-defined",
      title: "🎯 Argument Defined",
      subtitle: "Components and Structure",
      content: `
        <div class="space-y-6">
          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-3 text-xl">Two Types of Claims in Arguments</h4>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <span class="font-bold text-green-700 text-xl">🎯</span>
                <div>
                  <p class="font-semibold text-green-800">Conclusion</p>
                  <p class="text-green-700">The claim that is supposed to be supported by the premises. Every argument has one and only one conclusion.</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-green-700 text-xl">📋</span>
                <div>
                  <p class="font-semibold text-green-800">Premises</p>
                  <p class="text-green-700">Claims given as evidence or reasons for accepting the conclusion. An argument can have any number of premises.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-bold text-blue-900 mb-4">Finding Conclusions</h4>
              <p class="text-blue-800 mb-3">Ask: "What is the point being made?"</p>
              <ul class="list-disc list-inside space-y-2 text-blue-700">
                <li>If there is no point being made, there is no argument</li>
                <li>If a point is being made, there must be an argument</li>
                <li>The conclusion is what the argument is trying to prove</li>
              </ul>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-4">Finding Premises</h4>
              <p class="text-purple-800 mb-3">Ask: "What evidence or reasons are given?"</p>
              <ul class="list-disc list-inside space-y-2 text-purple-700">
                <li>Premises provide support for the conclusion</li>
                <li>Without evidence or reasons, there is no argument</li>
                <li>Premises are the foundation of the argument</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">💡 Key Principle</p>
            <p class="text-yellow-800">
              To make an argument requires making a point (conclusion) and backing it up with evidence or reasons (premises). Arguments without premises are simply assertions.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 7,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! My brilliant student, let's break down what makes an argument tick. Think of an argument like building a house - you need a strong foundation (premises) and a clear goal (conclusion). No foundation, house falls! No conclusion, what's the point? Let's make this simple like our Nigerian suya - just meat and pepper, but put together perfectly! 🍖🔥
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why This Matters for Nigerian Students</p>
            <p class="text-blue-800">
              We Nigerians love to talk and debate, but sometimes our arguments are like "pepper soup without meat" - all heat, no substance! Learning about conclusions and premises will help you build arguments that actually convince people, not just make noise. You'll stop losing debates and start winning hearts and minds! 💪
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3">🎯 CONCLUSION = The Main Point</h4>
              <p class="text-green-800 text-sm mb-2">Like the "head" of egusi soup - everything else supports it!</p>
              <ul class="text-green-700 space-y-1 text-sm">
                <li>• What you're trying to prove</li>
                <li>• The answer to "So what?"</li>
                <li>• Every argument has ONE conclusion</li>
                <li>• Without it, no argument exists!</li>
              </ul>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 mb-3">📋 PREMISES = The Evidence</h4>
              <p class="text-purple-800 text-sm mb-2">Like ingredients in jollof rice - they make the conclusion tasty!</p>
              <ul class="text-purple-700 space-y-1 text-sm">
                <li>• Facts, reasons, or evidence</li>
                <li>• Support the conclusion</li>
                <li>• Can be many premises</li>
                <li>• Without them, conclusion is just opinion</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg">
            <h4 class="font-bold text-yellow-900 mb-4">🍲 Nigerian Example: "Should We Ban Generator Noise?"</h4>
            <div class="bg-white p-4 rounded border-l-4 border-yellow-500">
              <p class="font-semibold mb-2 text-yellow-900">Conclusion (The Main Point):</p>
              <p class="text-yellow-800 mb-3">"Generator noise should be banned in residential areas."</p>

              <p class="font-semibold mb-2 text-yellow-900">Premises (The Evidence):</p>
              <div class="space-y-2 text-yellow-700">
                <div class="flex items-start space-x-2">
                  <span class="font-bold">1.</span>
                  <span>"Generator noise causes health problems like stress and hearing loss."</span>
                </div>
                <div class="flex items-start space-x-2">
                  <span class="font-bold">2.</span>
                  <span>"It disturbs sleep and affects children's education."</span>
                </div>
                <div class="flex items-start space-x-2">
                  <span class="font-bold">3.</span>
                  <span>"Many Nigerians already use solar power as quieter alternatives."</span>
                </div>
              </div>
            </div>
            <p class="text-yellow-700 mt-3 italic">See? Each premise builds the case for the conclusion! No more "because I said so" arguments! 😄</p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🚨 Common Nigerian Mistake</p>
            <p class="text-red-800">
              We often make "arguments" like: "Don't eat that food, it's bad for you!" without explaining why. That's not an argument - it's just a command! Learn to add premises: "Don't eat that food because it contains too much oil, which can cause heart problems, and doctors recommend limiting oily foods." Now that's an argument! 🇳🇬✨
            </p>
          </div>

          <div class="bg-indigo-50 p-4 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-2">💡 Pro Tip</h4>
            <p class="text-indigo-800">
              When someone makes an argument, ask: "What's their main point?" (conclusion) and "Why should I believe them?" (premises). This skill will make you a better student, debater, and even help you spot when politicians are just blowing grammar! Stay sharp! 🧠🔍
            </p>
          </div>
        </div>
      `
    },
    {
      id: "varieties-arguments",
      title: "🌟 Varieties of Arguments",
      subtitle: "Inductive, Deductive, and Fallacies",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Arguments come in different types based on the strength and nature of the support they provide. Understanding these varieties helps us evaluate arguments more effectively.
          </p>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h4 class="text-2xl font-bold text-green-900 mb-4 text-center">📈 Inductive Arguments</h4>
              <div class="text-center">
                <p class="text-green-800 mb-3">Provide some degree of support but less than complete support for the conclusion.</p>
                <div class="bg-green-100 p-3 rounded">
                  <p class="font-semibold text-green-900">Example:</p>
                  <p class="text-sm text-green-700">"Most observed swans are white, therefore all swans are white."</p>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h4 class="text-2xl font-bold text-blue-900 mb-4 text-center">🔒 Deductive Arguments</h4>
              <div class="text-center">
                <p class="text-blue-800 mb-3">Provide complete support for the conclusion if premises are true.</p>
                <div class="bg-blue-100 p-3 rounded">
                  <p class="font-semibold text-blue-900">Example:</p>
                  <p class="text-sm text-blue-700">"All men are mortal. Socrates is a man. Therefore, Socrates is mortal."</p>
                </div>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h4 class="text-2xl font-bold text-red-900 mb-4 text-center">❌ Fallacies</h4>
              <div class="text-center">
                <p class="text-red-800 mb-3">Arguments in which premises fail to provide adequate support for the conclusion.</p>
                <div class="bg-red-100 p-3 rounded">
                  <p class="font-semibold text-red-900">Example:</p>
                  <p class="text-sm text-red-700">"You can't trust Dave's opinion because he owns a business."</p>
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
            Ehen! My smart student, arguments are not all the same - just like food! Some are like "certain" jollof rice (you know it's good), others are like "maybe" soup (could be good, could be bad), and some are like "fake" suya (looks good but will give you trouble)! Let's break down these argument types so you can spot good ones from bad ones. 🇳🇬🍲
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Different Types Matter for Nigerian Students</p>
            <p class="text-blue-800">
              In our Nigerian society, we hear many arguments - politicians promising "change", pastors preaching, even your auntie telling you who to marry! Knowing argument types helps you separate truth from "grammars" (lies). You'll become a better thinker and stop falling for fake news and empty promises! 🧠✨
            </p>
          </div>

          <div class="space-y-4">
            <div class="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h4 class="text-2xl font-bold text-green-900 mb-4 text-center">📈 INDUCTIVE ARGUMENTS</h4>
              <h5 class="font-bold text-green-800 mb-2">Like "Experience-Based" Thinking</h5>
              <p class="text-green-800 mb-3">Premises give some support but not 100% certainty. Like saying "All the suya I've eaten in Lagos has been good, so suya in Lagos is generally good."</p>

              <div class="bg-green-100 p-3 rounded mb-3">
                <p class="font-semibold text-green-900 text-sm">🇳🇬 Nigerian Example:</p>
                <p class="text-sm text-green-700">"Most Nigerian politicians I've seen are corrupt. Therefore, most politicians are corrupt."</p>
              </div>

              <div class="text-center">
                <span class="bg-green-200 text-green-900 px-3 py-1 rounded text-sm font-bold">STRONG but NOT CERTAIN</span>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h4 class="text-2xl font-bold text-blue-900 mb-4 text-center">🔒 DEDUCTIVE ARGUMENTS</h4>
              <h5 class="font-bold text-blue-800 mb-2">Like "Mathematics" Thinking</h5>
              <p class="text-blue-800 mb-3">If premises are true, conclusion MUST be true. Like saying "All Unilorin students are smart. I'm a Unilorin student. Therefore, I am smart."</p>

              <div class="bg-blue-100 p-3 rounded mb-3">
                <p class="font-semibold text-blue-900 text-sm">🇳🇬 Nigerian Example:</p>
                <p class="text-sm text-blue-700">"All Nigerian citizens must obey the law. I am a Nigerian citizen. Therefore, I must obey the law."</p>
              </div>

              <div class="text-center">
                <span class="bg-blue-200 text-blue-900 px-3 py-1 rounded text-sm font-bold">CERTAIN if premises are true</span>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h4 class="text-2xl font-bold text-red-900 mb-4 text-center">❌ FALLACIES</h4>
              <h5 class="font-bold text-red-800 mb-2">Like "Fake" Arguments</h5>
              <p class="text-red-800 mb-3">Look good but don't really prove anything. Like attacking the person instead of their argument, or using irrelevant reasons.</p>

              <div class="bg-red-100 p-3 rounded mb-3">
                <p class="font-semibold text-red-900 text-sm">🇳🇬 Nigerian Example:</p>
                <p class="text-sm text-red-700">"Don't listen to that politician - he's from the North!" (Attacking where he's from, not his policies)</p>
              </div>

              <div class="text-center">
                <span class="bg-red-200 text-red-900 px-3 py-1 rounded text-sm font-bold">LOOKS GOOD but WEAK</span>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 How to Spot Good vs Bad Arguments</p>
            <p class="text-yellow-800">
              Next time you hear an argument, ask: Does it really prove the point? Or is it just "wahala"? Good arguments use evidence and logic, not emotions or personal attacks. You'll become a "truth detective" in no time! 🔍💪
            </p>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-2">💡 Nigerian Pro Tip</h4>
            <p class="text-purple-800">
              Remember our saying "Ẹ̀kọ́ lẹ̀sẹ̀ẹ̀" (Education has feet)? Good arguments take you places - better grades, better decisions, better life. Bad arguments? They just waste your time like endless NEPA meetings! Stay wise, my friend! 🌟🇳🇬
            </p>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🚨 Watch Out!</p>
            <p class="text-indigo-800">
              Many Nigerian debates are full of fallacies. Politicians attack opponents' tribes, pastors use fear instead of facts, even family arguments become personal. Learn these skills to navigate our complex society wisely! No more falling for "grammars"! 😎
            </p>
          </div>
        </div>
      `
    },
    {
      id: "examples-arguments",
      title: "📝 Examples of Arguments",
      subtitle: "Understanding Through Practice",
      content: `
        <div class="space-y-6">
          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4 text-xl">🔍 Inductive Argument Example</h4>
            <div class="bg-white p-4 rounded border-l-4 border-green-500">
              <p class="font-semibold mb-2">Premise 1:</p>
              <p class="text-green-800 mb-3">Most Siberian huskies enjoy running.</p>
              <p class="font-semibold mb-2">Premise 2:</p>
              <p class="text-green-800 mb-3">Isis is a Siberian husky.</p>
              <p class="font-semibold mb-2">Conclusion:</p>
              <p class="text-green-900 font-bold">Therefore, Isis enjoys running.</p>
            </div>
            <p class="text-green-700 mt-3 italic">This provides probable support - it's reasonable but not certain.</p>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-4 text-xl">🔒 Deductive Argument Example</h4>
            <div class="bg-white p-4 rounded border-l-4 border-blue-500">
              <p class="font-semibold mb-2">Premise 1:</p>
              <p class="text-blue-800 mb-3">If pornography has a detrimental effect on one's character, it would be best to avoid it.</p>
              <p class="font-semibold mb-2">Premise 2:</p>
              <p class="text-blue-800 mb-3">Pornography has a detrimental effect on one's character.</p>
              <p class="font-semibold mb-2">Conclusion:</p>
              <p class="text-blue-900 font-bold">Therefore, it would be best to avoid pornography.</p>
            </div>
            <p class="text-blue-700 mt-3 italic">If premises are true, conclusion must be true.</p>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4 text-xl">🔗 Extended Deductive Argument</h4>
            <div class="bg-white p-4 rounded border-l-4 border-purple-500 space-y-3">
              <div>
                <p class="font-semibold">Argument 1:</p>
                <p class="text-purple-800 text-sm">Premise 1: If pornography has a detrimental effect on one's character, it would be best to regard it as harmful.</p>
                <p class="text-purple-800 text-sm">Premise 2: Pornography has a detrimental effect on one's character.</p>
                <p class="text-purple-900 font-bold text-sm">Conclusion: It would be best to regard pornography as harmful.</p>
              </div>
              <div>
                <p class="font-semibold">Argument 2:</p>
                <p class="text-purple-800 text-sm">Premise 1: If it is best to regard something as harmful, then the government should protect people from it.</p>
                <p class="text-purple-800 text-sm">Premise 2: It would be best to regard pornography as harmful.</p>
                <p class="text-purple-900 font-bold text-sm">Conclusion: The government should protect people from pornography.</p>
              </div>
            </div>
            <p class="text-purple-700 mt-3 italic">Conclusions from one argument can become premises for another.</p>
          </div>

          <div class="bg-red-50 p-6 rounded-lg">
            <h4 class="font-bold text-red-900 mb-4 text-xl">❌ Fallacy Example (Circumstantial Ad Hominem)</h4>
            <div class="bg-white p-4 rounded border-l-4 border-red-500">
              <p class="font-semibold mb-2">Premise 1:</p>
              <p class="text-red-800 mb-3">Dave supports the tax reduction for businesses and says it will be good for everyone, but he owns a business.</p>
              <p class="font-semibold mb-2">Conclusion:</p>
              <p class="text-red-900 font-bold">Therefore, Dave must be wrong about the tax reduction.</p>
            </div>
            <p class="text-red-700 mt-3 italic">This attacks the person rather than addressing the actual argument.</p>
          </div>
        </div>
      `,
      estimatedTime: 8,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Now we're getting to the juicy part - real examples! My dear student, theory is good, but examples make everything clear like fresh palm oil. Let's analyze these arguments together and see how they work (or don't work) in real life. You'll learn to spot good reasoning from bad, and this will help you in assignments, debates, and even daily conversations! 🇳🇬✨
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Examples Matter for Nigerian Students</p>
            <p class="text-blue-800">
              We Nigerians learn best through stories and examples. Instead of just memorizing rules, seeing how arguments work in practice helps you understand them deeply. You'll start recognizing good arguments in lectures, bad ones in newspapers, and learn to build your own strong arguments for assignments and exams! 📚💡
            </p>
          </div>

          <div class="space-y-6">
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-bold text-green-900 mb-4 text-xl">🔍 INDUCTIVE EXAMPLE BREAKDOWN</h4>
              <div class="bg-white p-4 rounded border-l-4 border-green-500 mb-4">
                <p class="font-semibold mb-2 text-green-900">The SIBERIAN HUSKY Argument:</p>
                <div class="space-y-2 text-sm">
                  <div><strong>Premise 1:</strong> Most Siberian huskies enjoy running.</div>
                  <div><strong>Premise 2:</strong> Isis is a Siberian husky.</div>
                  <div><strong class="text-green-900">Conclusion:</strong> Therefore, Isis enjoys running.</div>
                </div>
              </div>
              <div class="bg-green-100 p-3 rounded">
                <p class="font-bold text-green-900 mb-2">🇳🇬 Nigerian Translation:</p>
                <p class="text-green-800 text-sm">Like saying: "Most Yoruba people are good at mathematics. Ade is Yoruba. Therefore, Ade is good at mathematics."</p>
                <p class="text-green-700 text-sm mt-2 italic">This is reasonable but not certain - Ade might be the exception!</p>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-bold text-blue-900 mb-4 text-xl">🔒 DEDUCTIVE EXAMPLE BREAKDOWN</h4>
              <div class="bg-white p-4 rounded border-l-4 border-blue-500 mb-4">
                <p class="font-semibold mb-2 text-blue-900">The PORNOGRAPHY Argument:</p>
                <div class="space-y-2 text-sm">
                  <div><strong>Premise 1:</strong> If pornography has a detrimental effect on one's character, it would be best to avoid it.</div>
                  <div><strong>Premise 2:</strong> Pornography has a detrimental effect on one's character.</div>
                  <div><strong class="text-blue-900">Conclusion:</strong> Therefore, it would be best to avoid pornography.</div>
                </div>
              </div>
              <div class="bg-blue-100 p-3 rounded">
                <p class="font-bold text-blue-900 mb-2">🇳🇬 Nigerian Example:</p>
                <p class="text-blue-800 text-sm">Like saying: "If you fail GST111, you won't graduate. You failed GST111. Therefore, you won't graduate."</p>
                <p class="text-blue-700 text-sm mt-2 italic">If both premises are true, conclusion MUST be true - no escaping it!</p>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-4 text-xl">🔗 EXTENDED DEDUCTIVE EXAMPLE</h4>
              <p class="text-purple-800 mb-3">This shows how conclusions become premises for bigger arguments!</p>
              <div class="bg-purple-100 p-3 rounded mb-3">
                <p class="font-bold text-purple-900 mb-2">🇳🇬 Real Life Example:</p>
                <p class="text-purple-800 text-sm">Like the "419" scam chain:</p>
                <div class="text-sm text-purple-700 mt-1">
                  <div>• If someone offers you free money, it's probably a scam.</div>
                  <div>• That email offered you free money.</div>
                  <div>• <strong>Therefore, that email is probably a scam.</strong></div>
                  <div class="mt-2">Now use this conclusion as premise for bigger argument:</div>
                  <div>• If something is a scam, you should delete it.</div>
                  <div>• That email is a scam.</div>
                  <div>• <strong>Therefore, you should delete that email!</strong></div>
                </div>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg">
              <h4 class="font-bold text-red-900 mb-4 text-xl">❌ FALLACY EXAMPLE BREAKDOWN</h4>
              <div class="bg-white p-4 rounded border-l-4 border-red-500 mb-4">
                <p class="font-semibold mb-2 text-red-900">The DAVE Argument:</p>
                <div class="space-y-2 text-sm">
                  <div><strong>Premise 1:</strong> Dave supports the tax reduction for businesses and says it will be good for everyone, but he owns a business.</div>
                  <div><strong class="text-red-900">Conclusion:</strong> Therefore, Dave must be wrong about the tax reduction.</div>
                </div>
              </div>
              <div class="bg-red-100 p-3 rounded">
                <p class="font-bold text-red-900 mb-2">🇳🇬 Nigerian Version:</p>
                <p class="text-red-800 text-sm">Like saying: "That politician wants to reduce fuel prices, but he drives a jeep. Therefore, his idea is bad."</p>
                <p class="text-red-700 text-sm mt-2 italic">This attacks the person, not the idea! His jeep has nothing to do with whether reducing fuel prices is good or bad.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Learning Tip</p>
            <p class="text-yellow-800">
              Practice by analyzing arguments you hear: "Is this inductive or deductive?" "Are the premises true?" "Does the conclusion follow?" Soon you'll be spotting weak arguments everywhere - in lectures, social media, even family discussions! 🧠🔍
            </p>
          </div>

          <div class="bg-indigo-50 p-4 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-2">💡 Real Nigerian Benefit</h4>
            <p class="text-indigo-800">
              These skills will help you succeed in university assignments, understand political debates, and even avoid being scammed! No more falling for "sweet talk" without substance. You'll become a critical thinker who can separate truth from "grammars"! Stay sharp! 🇳🇬✨
            </p>
          </div>
        </div>
      `
    },
    {
      id: "assessment-arguments",
      title: "⚖️ General Assessment",
      subtitle: "Evaluating Arguments Effectively",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Just like almost everything else, arguments are subject to assessment. When creating an argument, the usual goal is to make a good one. When assessing an argument, the goal is to determine whether it is good or not.
          </p>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-4">Two Main Factors in Assessment</h4>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h5 class="font-semibold text-blue-800 mb-2">🧠 Quality of Reasoning</h5>
                <p class="text-blue-700">Do the premises logically support the conclusion?</p>
                <ul class="list-disc list-inside mt-2 text-sm text-blue-600">
                  <li>Flawed reasoning means conclusion isn't supported</li>
                  <li>Conclusion may be true, but argument doesn't prove it</li>
                  <li>Mistake to accept conclusion without proper support</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold text-blue-800 mb-2">📊 Quality of Premises</h5>
                <p class="text-blue-700">Are the premises true or at least plausible?</p>
                <ul class="list-disc list-inside mt-2 text-sm text-blue-600">
                  <li>Consistent with observations</li>
                  <li>Consistent with background knowledge</li>
                  <li>Consistent with credible sources</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg">
            <h4 class="font-bold text-yellow-900 mb-4">Assessment by Argument Type</h4>
            <div class="space-y-4">
              <div class="border-l-4 border-yellow-400 pl-4">
                <h5 class="font-semibold text-yellow-900">Deductive Arguments:</h5>
                <p class="text-yellow-800">Assessed as <strong>valid or invalid</strong>, and <strong>sound or unsound</strong>.</p>
                <ul class="list-disc list-inside mt-1 text-sm text-yellow-700">
                  <li><strong>Valid:</strong> If premises true, conclusion must be true</li>
                  <li><strong>Invalid:</strong> Premises could be true while conclusion is false</li>
                  <li><strong>Sound:</strong> Valid with all true premises</li>
                </ul>
              </div>

              <div class="border-l-4 border-yellow-400 pl-4">
                <h5 class="font-semibold text-yellow-900">Inductive Arguments:</h5>
                <p class="text-yellow-800">Assessed as <strong>strong or weak</strong>, and <strong>cogent or not</strong>.</p>
                <ul class="list-disc list-inside mt-1 text-sm text-yellow-700">
                  <li><strong>Strong:</strong> Premises make conclusion likely if true</li>
                  <li><strong>Weak:</strong> Premises don't make conclusion likely</li>
                  <li><strong>Cogent:</strong> Strong with true premises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 7,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ah! Now we're getting to the real power of arguments - how to JUDGE them! My brilliant student, just like we inspect food before eating (is it fresh? is it clean?), we must evaluate arguments before accepting them. In our Nigerian society where "information overload" is real, this skill will protect you from fake news, bad advice, and manipulative politicians! 🛡️🇳🇬
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Assessment Matters for Nigerian Students</p>
            <p class="text-blue-800">
              We live in an era of social media "grammars" and political propaganda. Learning to assess arguments will help you make better decisions about your education, relationships, and future. You'll stop believing everything you hear and start thinking for yourself! This is the key to true academic success and personal wisdom. 🎓💡
            </p>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4">⚖️ TWO MAIN FACTORS IN ASSESSMENT</h4>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="border-l-4 border-green-400 pl-4">
                <h5 class="font-semibold text-green-900 mb-2">🧠 Quality of Reasoning</h5>
                <p class="text-green-800 text-sm mb-2">Do the premises logically support the conclusion?</p>
                <ul class="list-disc list-inside text-sm text-green-700 space-y-1">
                  <li>Check if conclusion follows from premises</li>
                  <li>Look for logical gaps or jumps</li>
                  <li>Ask: "Does this really prove that?"</li>
                </ul>
              </div>
              <div class="border-l-4 border-green-400 pl-4">
                <h5 class="font-semibold text-green-900 mb-2">📊 Quality of Premises</h5>
                <p class="text-green-800 text-sm mb-2">Are the premises true/reasonable?</p>
                <ul class="list-disc list-inside text-sm text-green-700 space-y-1">
                  <li>Consistent with what you know</li>
                  <li>Based on reliable evidence</li>
                  <li>From credible sources</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg">
            <h4 class="font-bold text-yellow-900 mb-4">🎯 ASSESSMENT BY ARGUMENT TYPE</h4>
            <div class="space-y-4">
              <div class="border-l-4 border-yellow-400 pl-4 bg-yellow-25">
                <h5 class="font-semibold text-yellow-900">Deductive Arguments:</h5>
                <div class="text-sm text-yellow-800 mt-1">
                  <div><strong>Valid or Invalid:</strong> Does conclusion follow necessarily?</div>
                  <div><strong>Sound or Unsound:</strong> Valid + true premises</div>
                </div>
                <div class="bg-yellow-100 p-2 rounded mt-2 text-xs">
                  <strong>Example:</strong> "All Unilorin students are smart. You're Unilorin student. Therefore, you're smart." (Valid if premise is true!)
                </div>
              </div>

              <div class="border-l-4 border-yellow-400 pl-4 bg-yellow-25">
                <h5 class="font-semibold text-yellow-900">Inductive Arguments:</h5>
                <div class="text-sm text-yellow-800 mt-1">
                  <div><strong>Strong or Weak:</strong> How probable is conclusion?</div>
                  <div><strong>Cogent or Not:</strong> Strong + true premises</div>
                </div>
                <div class="bg-yellow-100 p-2 rounded mt-2 text-xs">
                  <strong>Example:</strong> "Most Nigerian lecturers are good. Therefore, my lecturer is good." (Reasonable but not certain!)
                </div>
              </div>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🚨 Nigerian Reality Check</p>
            <p class="text-red-800">
              In Nigeria, we often accept arguments without checking them. Politicians say "Vote for me, I'll bring development" - but where's the evidence? Pastors say "Give your tithe or you'll go to hell" - is that logical? Learn these skills to navigate our society wisely! No more being deceived by sweet talk without substance. 🇳🇬✨
            </p>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4">💡 Practical Assessment Questions</h4>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h6 class="font-semibold text-purple-900 mb-2">For Any Argument:</h6>
                <ul class="list-disc list-inside space-y-1 text-purple-700">
                  <li>What's the conclusion?</li>
                  <li>Are premises true?</li>
                  <li>Does conclusion follow?</li>
                  <li>Any missing information?</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-purple-900 mb-2">For Nigerian Context:</h6>
                <ul class="list-disc list-inside space-y-1 text-purple-700">
                  <li>Is this based on facts or emotions?</li>
                  <li>Whose interest does this serve?</li>
                  <li>Does it match what you know?</li>
                  <li>Is the source reliable?</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 p-4 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-2">🎓 Academic Success Tip</h4>
            <p class="text-indigo-800">
              Use these skills for assignments and exams! Don't just accept information - evaluate it. Your lecturers will be impressed, and you'll get better grades. This critical thinking is what separates successful students from average ones! Stay sharp and keep questioning! 🧠📈
            </p>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-500 p-4">
            <p class="font-semibold text-orange-900 mb-2">⚡ Quick Practice</p>
            <p class="text-orange-800">
              Next time you see a politician's promise or a social media post, ask: "Is this a good argument?" You'll be surprised how many fail the test! This skill will serve you well in our information-saturated Nigerian society. No more "mumu" button! 😎🇳🇬
            </p>
          </div>
        </div>
      `
    },
    {
      id: "good-bad-faith",
      title: "🤝 Good and Bad Faith Arguing",
      subtitle: "Ethics in Argumentation",
      content: `
        <div class="space-y-6">
          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4 text-xl">🎯 Philosophical Argumentation</h4>
            <p class="text-green-800 leading-relaxed">
              Philosophical argumentation aims at establishing the truth of a claim. The goal of persuasion is to get the audience to believe a claim whether it is true or false. Philosophical argumentation requires arguing in good faith; persuasion does not.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-bold text-blue-900 mb-4">✅ Arguing in Good Faith</h4>
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="text-blue-700">•</span>
                  <span class="text-blue-800"><strong>Intention:</strong> Argue that a claim is true using good logic and true/plausible evidence</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-blue-700">•</span>
                  <span class="text-blue-800"><strong>Honesty:</strong> Be honest about beliefs, even when arguing for disagreed positions</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-blue-700">•</span>
                  <span class="text-blue-800"><strong>Principle of Charity:</strong> Interpret claims in best possible light, reconstruct arguments as strong as possible</span>
                </div>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg">
              <h4 class="font-bold text-red-900 mb-4">❌ Arguing in Bad Faith</h4>
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="text-red-700">•</span>
                  <span class="text-red-800"><strong>Intention:</strong> Deceive and mislead when arguing</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-red-700">•</span>
                  <span class="text-red-800"><strong>Fallacies:</strong> Knowingly use errors in logic to deceive</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-red-700">•</span>
                  <span class="text-red-800"><strong>Rhetoric over Evidence:</strong> Use persuasive devices instead of arguments</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-red-700">•</span>
                  <span class="text-red-800"><strong>Lies:</strong> Use false premises or conclusions intentionally</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">💡 Why Good Faith Matters</p>
            <p class="text-yellow-800">
              Good faith arguing is about seeking truth, while bad faith arguing is about manipulation. Arguments made in bad faith will tend to be bad arguments, and they don't serve up anything worth consuming intellectually.
            </p>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4">🎯 Principle of Charity</h4>
            <p class="text-purple-800 mb-3">When considering arguments against your view:</p>
            <div class="space-y-2">
              <div class="flex items-start space-x-3">
                <span class="text-purple-700">1.</span>
                <span class="text-purple-800">Interpret claims in the best possible light</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-purple-700">2.</span>
                <span class="text-purple-800">Reconstruct arguments to make them as strong as possible</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-purple-700">3.</span>
                <span class="text-purple-800">Avoid straw person fallacies</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-purple-700">4.</span>
                <span class="text-purple-800">Temper with principle of plausibility</span>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 8,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Now we're talking about CHARACTER in arguments! My dear student, arguments aren't just about being right or wrong - they're about honesty and respect. In our Nigerian society where "sweet mouth" and manipulation are common, learning good faith arguing will make you stand out as a person of integrity. You'll be respected, not just feared! 🤝🇳🇬
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Good Faith Matters for Nigerian Students</p>
            <p class="text-blue-800">
              We Nigerians value character. A person who argues in good faith shows wisdom, respect, and strength. You'll learn to persuade without manipulating, convince without deceiving, and win arguments without losing friends. This is the difference between a "wise person" and a "troublemaker"! 🧠💪
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-bold text-green-900 mb-4">✅ ARGUING IN GOOD FAITH</h4>
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="text-green-700 font-bold">🎯</span>
                  <span class="text-green-800"><strong>Intention:</strong> Seek truth, not just win</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-green-700 font-bold">🤝</span>
                  <span class="text-green-800"><strong>Honesty:</strong> Tell the truth and admit when wrong</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-green-700 font-bold">⚖️</span>
                  <span class="text-green-800"><strong>Principle of Charity:</strong> Interpret others' views fairly</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-green-700 font-bold">📚</span>
                  <span class="text-green-800"><strong>Evidence:</strong> Use facts, not emotions or personal attacks</span>
                </div>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg">
              <h4 class="font-bold text-red-900 mb-4">❌ ARGUING IN BAD FAITH</h4>
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="text-red-700 font-bold">🎭</span>
                  <span class="text-red-800"><strong>Deception:</strong> Lie, mislead, or manipulate</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-red-700 font-bold">🪤</span>
                  <span class="text-red-800"><strong>Fallacies:</strong> Use logical tricks knowingly</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-red-700 font-bold">📣</span>
                  <span class="text-red-800"><strong>Rhetoric:</strong> Persuade with style, not substance</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-red-700 font-bold">😠</span>
                  <span class="text-red-800"><strong>Attacks:</strong> Target person, not argument</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Philosophical vs Persuasion</p>
            <p class="text-yellow-800">
              Philosophy seeks TRUTH - even if it hurts. Persuasion just wants AGREEMENT - true or false. Good philosophical arguments change minds through wisdom. Bad persuasion manipulates through fear, greed, or pride. Choose wisdom over manipulation! 🌟
            </p>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4">🤝 PRINCIPLE OF CHARITY</h4>
            <p class="text-purple-800 mb-3">When considering arguments against your view:</p>
            <div class="space-y-2">
              <div class="flex items-start space-x-3">
                <span class="text-purple-700 font-bold">1.</span>
                <span class="text-purple-800">Interpret claims in the best possible light</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-purple-700 font-bold">2.</span>
                <span class="text-purple-800">Reconstruct arguments to make them as strong as possible</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-purple-700 font-bold">3.</span>
                <span class="text-purple-800">Avoid straw person fallacies (misrepresenting others' views)</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-purple-700 font-bold">4.</span>
                <span class="text-purple-800">Be fair and reasonable</span>
              </div>
            </div>
            <div class="bg-purple-100 p-3 rounded mt-3">
              <p class="font-bold text-purple-900 text-sm mb-1">🇳🇬 Nigerian Example:</p>
              <p class="text-purple-800 text-sm">Instead of saying "Northerners are lazy," say "Some people believe Northerners are lazy - let's examine the evidence."</p>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🚨 Nigerian Reality</p>
            <p class="text-indigo-800">
              In Nigeria, bad faith arguing is everywhere! Politicians attack opponents' tribes, pastors use fear tactics, even family arguments become personal. But you can choose differently. Be the person who argues with integrity - you'll earn respect and actually solve problems! No more "wahala" arguments that divide us. 🇳🇬✨
            </p>
          </div>

          <div class="bg-orange-50 p-4 rounded-lg">
            <h4 class="font-bold text-orange-900 mb-2">💡 Character Building</h4>
            <p class="text-orange-800">
              Good faith arguing builds character. It makes you thoughtful, respectful, and wise. People will trust you more, listen to you better, and respect your opinions. In a society full of noise, your thoughtful voice will stand out and make a real difference! 🌟🤝
            </p>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">⚠️ Warning</p>
            <p class="text-red-800">
              Bad faith arguments might "win" short-term, but they damage relationships and reputation long-term. Good faith arguments build bridges, create understanding, and solve real problems. Choose the path of wisdom! 🏆🇳🇬
            </p>
          </div>
        </div>
      `
    },
    {
      id: "deductive-arguments",
      title: "🔒 Common Valid Deductive Arguments",
      subtitle: "Formal Argument Patterns",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Deductive arguments can be evaluated using formal logic. Here are some common valid forms of deductive arguments:
          </p>

          <div class="space-y-6">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-bold text-blue-900 mb-4 text-xl">Modus Ponens (Affirming the Antecedent)</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-blue-800 mb-2">Form:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>Premise 1: If P, then Q</div>
                    <div>Premise 2: P</div>
                    <div class="font-bold">Conclusion: Q</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-blue-800 mb-2">Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>If killing in war is like murder, it is immoral.</div>
                    <div>Killing in war is like murder.</div>
                    <div class="font-bold">Killing in war is immoral.</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-bold text-green-900 mb-4 text-xl">Modus Tollens (Denying the Consequent)</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-green-800 mb-2">Form:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>Premise 1: If P, then Q</div>
                    <div>Premise 2: Not Q</div>
                    <div class="font-bold">Conclusion: Not P</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-green-800 mb-2">Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>If reality is just a dream, it should seem incoherent.</div>
                    <div>Reality does not seem incoherent.</div>
                    <div class="font-bold">Reality is not just a dream.</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-4 text-xl">Hypothetical Syllogism</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-purple-800 mb-2">Form:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>Premise 1: If P, then Q</div>
                    <div>Premise 2: If Q, then R</div>
                    <div class="font-bold">Conclusion: If P, then R</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-purple-800 mb-2">Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>If cheating is wrong, then cheating in class is wrong.</div>
                    <div>If cheating in class is wrong, cheating on this test is wrong.</div>
                    <div class="font-bold">If cheating is wrong, then cheating on this test is wrong.</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-orange-50 p-6 rounded-lg">
              <h4 class="font-bold text-orange-900 mb-4 text-xl">Disjunctive Syllogism</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-orange-800 mb-2">Form:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>Premise 1: P or Q</div>
                    <div>Premise 2: Not P</div>
                    <div class="font-bold">Conclusion: Q</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-orange-800 mb-2">Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>Bill can lose weight through surgery or diet and exercise.</div>
                    <div>Bill decided not to do diet and exercise.</div>
                    <div class="font-bold">Bill has decided to lose weight through surgery.</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg">
              <h4 class="font-bold text-red-900 mb-4 text-xl">Dilemma</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-red-800 mb-2">Form 1:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>Premise 1: If P, then Q</div>
                    <div>Premise 2: If R, then S</div>
                    <div>Premise 3: P or R</div>
                    <div class="font-bold">Conclusion: Q or S</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-red-800 mb-2">Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>If lying is wrong, then people should not lie.</div>
                    <div>If lying is not wrong, then it is okay for people to lie.</div>
                    <div>Lying is either wrong or it is not.</div>
                    <div class="font-bold">People should not lie or it is acceptable for people to lie.</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-indigo-50 p-6 rounded-lg">
              <h4 class="font-bold text-indigo-900 mb-4 text-xl">Reductio Ad Absurdum</h4>
              <div class="space-y-3">
                <div>
                  <h5 class="font-semibold text-indigo-800 mb-2">Form #1:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>Premise 1: Assume that claim P is true</div>
                    <div>Premise 2: Prove this assumption leads to something false/absurd/contradictory</div>
                    <div class="font-bold">Conclusion: Claim P is false</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-indigo-800 mb-2">Form #2:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>Premise 1: Assume that claim P is false</div>
                    <div>Premise 2: Prove this assumption leads to something false/absurd/contradictory</div>
                    <div class="font-bold">Conclusion: Claim P is true</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-indigo-800 mb-2">Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>Oppression is best defined as the mistreatment of a minority by a majority.</div>
                    <div>In the case of sexism, a majority (women) is mistreated by a minority (men).</div>
                    <div class="font-bold">Therefore, sexism is not oppression.</div>
                    <div><em>This is absurd, so the definition is flawed.</em></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 10,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ah! Now we're entering the world of FORMAL LOGIC! My brilliant student, think of these as the "grammar rules" of arguments. Just like English has subject-verb agreement, arguments have logical patterns that make them valid. Learning these will make you a "logic master" who can spot errors and build bulletproof arguments! 🧠🔒🇳🇬
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Formal Logic Matters for Nigerian Students</p>
            <p class="text-blue-800">
              In our society, we often rely on "feeling" or "experience" for decisions. But formal logic gives you certainty! You'll learn patterns that guarantee truth - no more guessing. This skill will help you excel in philosophy, law, computer science, and any field requiring clear thinking. No more "maybe" - just "definitely"! 💯
            </p>
          </div>

          <div class="space-y-6">
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-bold text-green-900 mb-4 text-xl">🔄 MODUS PONENS (Affirming the Antecedent)</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-green-800 mb-2">Form:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>If P, then Q</div>
                    <div>P</div>
                    <div class="font-bold">Therefore, Q</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-green-800 mb-2">🇳🇬 Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>If you study GST111, you'll pass.</div>
                    <div>You studied GST111.</div>
                    <div class="font-bold">You'll pass!</div>
                  </div>
                </div>
              </div>
              <p class="text-green-700 mt-3 italic">Like saying: If you plant maize (P), you'll harvest maize (Q). You planted maize (P). Therefore, you'll harvest maize (Q)!</p>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-bold text-blue-900 mb-4 text-xl">🔙 MODUS TOLLENS (Denying the Consequent)</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-blue-800 mb-2">Form:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>If P, then Q</div>
                    <div>Not Q</div>
                    <div class="font-bold">Therefore, Not P</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-blue-800 mb-2">🇳🇬 Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>If you study GST111, you'll pass.</div>
                    <div>You didn't pass.</div>
                    <div class="font-bold">You didn't study GST111!</div>
                  </div>
                </div>
              </div>
              <p class="text-blue-700 mt-3 italic">Like saying: If you plant maize (P), you'll harvest (Q). You didn't harvest (Not Q). Therefore, you didn't plant maize (Not P)!</p>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-4 text-xl">🔗 HYPOTHETICAL SYLLOGISM</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-purple-800 mb-2">Form:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>If P, then Q</div>
                    <div>If Q, then R</div>
                    <div class="font-bold">Therefore, If P, then R</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-purple-800 mb-2">🇳🇬 Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>If you study hard, you'll understand logic.</div>
                    <div>If you understand logic, you'll pass exams.</div>
                    <div class="font-bold">If you study hard, you'll pass exams!</div>
                  </div>
                </div>
              </div>
              <p class="text-purple-700 mt-3 italic">Like chaining promises: If you work (P→Q), you'll eat (Q→R). Therefore, if you work (P), you'll eat (R)! No free lunch without work!</p>
            </div>

            <div class="bg-orange-50 p-6 rounded-lg">
              <h4 class="font-bold text-orange-900 mb-4 text-xl">⚖️ DISJUNCTIVE SYLLOGISM</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-orange-800 mb-2">Form:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>P or Q</div>
                    <div>Not P</div>
                    <div class="font-bold">Therefore, Q</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-orange-800 mb-2">🇳🇬 Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>You'll travel by bus or by air.</div>
                    <div>You won't travel by bus.</div>
                    <div class="font-bold">You'll travel by air!</div>
                  </div>
                </div>
              </div>
              <p class="text-orange-700 mt-3 italic">Like saying: You'll eat rice or eba. You won't eat rice. Therefore, you'll eat eba! No choice - you must decide!</p>
            </div>

            <div class="bg-red-50 p-6 rounded-lg">
              <h4 class="font-bold text-red-900 mb-4 text-xl">🤔 DILEMMA</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-red-800 mb-2">Form:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>If P, then Q</div>
                    <div>If R, then S</div>
                    <div>P or R</div>
                    <div class="font-bold">Therefore, Q or S</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-red-800 mb-2">🇳🇬 Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>If you work, you'll be tired.</div>
                    <div>If you rest, you'll be lazy.</div>
                    <div>You must work or rest.</div>
                    <div class="font-bold">You'll be tired or lazy!</div>
                  </div>
                </div>
              </div>
              <p class="text-red-700 mt-3 italic">Like saying: If you marry early (P), you'll have problems (Q). If you marry late (R), you'll have problems (S). You must marry early or late (P∨R). Therefore, you'll have problems (Q∨S)! No perfect choice! 😅</p>
            </div>

            <div class="bg-indigo-50 p-6 rounded-lg">
              <h4 class="font-bold text-indigo-900 mb-4 text-xl">🎯 REDUCTIO AD ABSURDUM</h4>
              <div class="space-y-3">
                <div>
                  <h5 class="font-semibold text-indigo-800 mb-2">Method:</h5>
                  <div class="bg-white p-3 rounded border font-mono text-sm">
                    <div>Assume claim P is true</div>
                    <div>Show this leads to absurdity/contradiction</div>
                    <div class="font-bold">Therefore, P is false</div>
                  </div>
                </div>
                <div>
                  <h5 class="font-semibold text-indigo-800 mb-2">🇳🇬 Example:</h5>
                  <div class="bg-white p-3 rounded border text-sm">
                    <div>Suppose all Nigerians are rich.</div>
                    <div>But I know many poor Nigerians.</div>
                    <div class="font-bold">Therefore, not all Nigerians are rich!</div>
                  </div>
                </div>
              </div>
              <p class="text-indigo-700 mt-3 italic">Like saying: Suppose NEPA never fails. But I experience daily power cuts. Absurd! Therefore, NEPA does fail! This method exposes false claims by showing their ridiculous consequences.</p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🎓 Academic Power</p>
            <p class="text-yellow-800">
              These patterns are the foundation of philosophy, mathematics, computer science, and law! Mastering them will make you excel in any analytical field. You'll spot logical errors in arguments and build ironclad cases for your positions. No more weak arguments that crumble under scrutiny! 🛡️💪
            </p>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-2">💡 Practice Tip</h4>
            <p class="text-purple-800">
              Start with everyday examples: "If it rains (P), ground wet (Q). Ground wet. Therefore, it rained?" No - that's invalid! Learn to spot the difference between valid and invalid patterns. Soon you'll be a logic expert who can evaluate any argument! 🧠⚡
            </p>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🚀 Your Future</p>
            <p class="text-indigo-800">
              These logical patterns will serve you in debates, essays, research, and even daily decisions. In our Nigerian society where "anything goes," you'll be the one with clear, logical thinking that others respect and follow. Logic is your superpower! 🇳🇬✨
            </p>
          </div>
        </div>
      `
    },
    {
      id: "inductive-arguments",
      title: "📈 Inductive Arguments",
      subtitle: "Analogical Arguments and Arguments from Examples",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-4 text-xl">🔄 Analogical Arguments</h4>
            <p class="text-blue-800 leading-relaxed mb-4">
              An analogy is a comparison between two things. An analogical argument concludes that two things are alike in a certain respect because they are alike in other respects.
            </p>

            <div class="bg-white p-4 rounded border-l-4 border-blue-500">
              <h5 class="font-semibold text-blue-900 mb-2">Form:</h5>
              <div class="font-mono text-sm space-y-1">
                <div>Premise 1: X has properties P, Q, and R</div>
                <div>Premise 2: Y has properties P, Q, and R</div>
                <div>Premise 3: X has property Z</div>
                <div class="font-bold">Conclusion: Y has property Z</div>
              </div>
            </div>

            <div class="mt-4">
              <h5 class="font-semibold text-blue-900 mb-2">Example:</h5>
              <div class="bg-white p-3 rounded border text-sm">
                <div>Rats are mammals with nervous systems and developed brains.</div>
                <div>Humans are mammals with nervous systems and developed brains.</div>
                <div>When exposed to neurotoxin, 90% of rats died.</div>
                <div class="font-bold">If exposed to neurotoxin, 90% of humans will die.</div>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4 text-xl">⚖️ Moral Arguments from Analogy</h4>
            <p class="text-green-800 leading-relaxed mb-4">
              Moral arguments from analogy argue that something is morally right/wrong by comparing it to something already accepted as right/wrong.
            </p>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h6 class="font-semibold text-green-900 mb-2">Against War:</h6>
                <div class="text-sm space-y-1">
                  <div>Attacking neighbors, killing them, taking their property is wrong.</div>
                  <div>War involves attacking neighbors, killing people, taking property.</div>
                  <div class="font-bold">War is wrong.</div>
                </div>
              </div>
              <div class="bg-white p-3 rounded border">
                <h6 class="font-semibold text-green-900 mb-2">Against Animal Cruelty:</h6>
                <div class="text-sm space-y-1">
                  <div>Animals and humans both suffer and feel pain.</div>
                  <div>Killing humans is wrong.</div>
                  <div class="font-bold">Killing animals is wrong.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4 text-xl">📊 Standards for Assessing Analogical Arguments</h4>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <span class="font-bold text-purple-700">1.</span>
                <span class="text-purple-800"><strong>Similarity:</strong> More shared properties make the argument stronger</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-purple-700">2.</span>
                <span class="text-purple-800"><strong>Relevance:</strong> Shared properties must be relevant to the conclusion</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-purple-700">3.</span>
                <span class="text-purple-800"><strong>Dissimilarities:</strong> Consider relevant differences that might weaken the analogy</span>
              </div>
            </div>
          </div>

          <div class="bg-orange-50 p-6 rounded-lg">
            <h4 class="font-bold text-orange-900 mb-4 text-xl">📝 Arguments by/from Example</h4>
            <p class="text-orange-800 leading-relaxed mb-4">
              An argument by example supports a claim by providing examples. These are common in everyday reasoning and academic contexts.
            </p>

            <div class="bg-white p-4 rounded border-l-4 border-orange-500">
              <h5 class="font-semibold text-orange-900 mb-2">Form:</h5>
              <div class="font-mono text-sm space-y-1">
                <div>Premise 1: Example 1 supports claim P</div>
                <div>Premise n: Example n supports claim P</div>
                <div class="font-bold">Conclusion: Claim P is true</div>
              </div>
            </div>

            <div class="mt-4">
              <h5 class="font-semibold text-orange-900 mb-2">Example:</h5>
              <div class="bg-white p-3 rounded border text-sm">
                <div>Lena ate pizza without paying twice this month.</div>
                <div>Lena ate pizza without paying last week.</div>
                <div>Lena ate pizza without paying yesterday.</div>
                <div class="font-bold">Lena is a pizza moocher.</div>
              </div>
            </div>
          </div>

          <div class="bg-red-50 p-6 rounded-lg">
            <h4 class="font-bold text-red-900 mb-4 text-xl">🧐 Standards for Arguments by Example</h4>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <span class="font-bold text-red-700">1.</span>
                <span class="text-red-800"><strong>Quantity:</strong> More examples provide stronger support</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-red-700">2.</span>
                <span class="text-red-800"><strong>Relevance:</strong> Examples must be relevant to the claim</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-red-700">3.</span>
                <span class="text-red-800"><strong>Specificity:</strong> Examples should be specific and clearly identified</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-red-700">4.</span>
                <span class="text-red-800"><strong>Counterexamples:</strong> Consider counterexamples that might weaken the argument</span>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-4 text-xl">👨‍⚖️ Arguments from Authority</h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              An argument from authority supports a claim by citing an authority. These are common but can be fallacious if the authority is not properly qualified.
            </p>

            <div class="bg-white p-4 rounded border-l-4 border-indigo-500">
              <h5 class="font-semibold text-indigo-900 mb-2">Form:</h5>
              <div class="font-mono text-sm space-y-1">
                <div>Premise 1: Person A is an authority on subject S</div>
                <div>Premise 2: Person A claims C about subject S</div>
                <div class="font-bold">Conclusion: Claim C is true</div>
              </div>
            </div>

            <div class="mt-4">
              <h5 class="font-semibold text-indigo-900 mb-2">Standards for Assessment:</h5>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div class="font-semibold mb-2">✅ Legitimate Authority:</div>
                  <ul class="list-disc list-inside space-y-1">
                    <li>Sufficient expertise</li>
                    <li>Claim within expertise</li>
                    <li>Area is legitimate</li>
                  </ul>
                </div>
                <div>
                  <div class="font-semibold mb-2">⚠️ Potential Issues:</div>
                  <ul class="list-disc list-inside space-y-1">
                    <li>Significant bias</li>
                    <li>Disagreement among experts</li>
                    <li>Unidentified authority</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 9,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Welcome to the final chapter of our argument journey, my brilliant student! We've covered deductive arguments (certain like mathematics), now let's explore inductive arguments (probable like life experience). Think of induction as "learning from patterns" - like how we Nigerians learn from observing market prices or traffic patterns. These arguments give us wisdom for daily decisions! 📊🇳🇬
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Inductive Arguments Matter for Nigerian Students</p>
            <p class="text-blue-800">
              Life isn't always black and white! Most real-world decisions use inductive reasoning. Should you trust that politician? Is this business opportunity good? Inductive arguments help you make smart choices based on patterns and evidence. You'll become a wiser decision-maker who avoids scams and makes good investments! 💡🎯
            </p>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4 text-xl">🔄 ANALOGICAL ARGUMENTS</h4>
            <p class="text-green-800 leading-relaxed mb-4">
              An analogy compares two things. If they share properties, what applies to one might apply to the other!
            </p>

            <div class="bg-white p-4 rounded border-l-4 border-green-500 mb-4">
              <h5 class="font-semibold text-green-900 mb-2">Pattern:</h5>
              <div class="font-mono text-sm space-y-1">
                <div>X has properties P, Q, and R</div>
                <div>Y has properties P, Q, and R</div>
                <div>X has property Z</div>
                <div class="font-bold">Therefore, Y probably has property Z</div>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-green-100 p-3 rounded">
                <h6 class="font-semibold text-green-900 mb-2">🇳🇬 Nigerian Example:</h6>
                <div class="text-sm space-y-1">
                  <div>• Rats and humans both have similar body systems</div>
                  <div>• Poison kills rats</div>
                  <div class="font-bold">• Poison might kill humans too!</div>
                </div>
              </div>
              <div class="bg-green-100 p-3 rounded">
                <h6 class="font-semibold text-green-900 mb-2">Real Life Application:</h6>
                <div class="text-sm space-y-1">
                  <div>• Good students study regularly</div>
                  <div>• You're studying regularly</div>
                  <div class="font-bold">• You'll probably be a good student!</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-4 text-xl">⚖️ MORAL ANALOGIES</h4>
            <p class="text-blue-800 leading-relaxed mb-4">
              We use analogies to make moral arguments - comparing situations to decide what's right or wrong.
            </p>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h6 class="font-semibold text-blue-900 mb-2">Against War:</h6>
                <div class="text-sm space-y-1">
                  <div>• Killing neighbors and taking property is wrong</div>
                  <div>• War involves killing and taking property</div>
                  <div class="font-bold">• War is wrong</div>
                </div>
              </div>
              <div class="bg-white p-3 rounded border">
                <h6 class="font-semibold text-blue-900 mb-2">Animal Rights:</h6>
                <div class="text-sm space-y-1">
                  <div>• Humans suffer and feel pain</div>
                  <div>• Killing suffering beings is wrong</div>
                  <div class="font-bold">• Killing animals is wrong</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4 text-xl">🧐 ANALOGY ASSESSMENT</h4>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <span class="font-bold text-purple-700">1.</span>
                <span class="text-purple-800"><strong>Similarity:</strong> More shared properties = stronger analogy</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-purple-700">2.</span>
                <span class="text-purple-800"><strong>Relevance:</strong> Shared properties must matter for the conclusion</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-purple-700">3.</span>
                <span class="text-purple-800"><strong>Dissimilarities:</strong> Consider important differences</span>
              </div>
            </div>
            <div class="bg-purple-100 p-3 rounded mt-3">
              <p class="font-bold text-purple-900 text-sm mb-1">🇳🇬 Example:</p>
              <p class="text-purple-800 text-sm">"Just like a car needs fuel, the body needs food." Similar? Yes. But cars don't grow or heal themselves - important difference!</p>
            </div>
          </div>

          <div class="bg-orange-50 p-6 rounded-lg">
            <h4 class="font-bold text-orange-900 mb-4 text-xl">📝 ARGUMENTS BY EXAMPLE</h4>
            <p class="text-orange-800 leading-relaxed mb-4">
              Support claims with specific examples - very common in essays and debates!
            </p>

            <div class="bg-white p-4 rounded border-l-4 border-orange-500 mb-4">
              <h5 class="font-semibold text-orange-900 mb-2">Pattern:</h5>
              <div class="font-mono text-sm space-y-1">
                <div>Example 1 supports claim P</div>
                <div>Example n supports claim P</div>
                <div class="font-bold">Therefore, claim P is probably true</div>
              </div>
            </div>

            <div class="bg-orange-100 p-3 rounded">
              <h6 class="font-semibold text-orange-900 mb-2">🇳🇬 Nigerian Example:</h6>
              <div class="text-sm">
                <div>• During COVID, Lagos markets closed - fewer infections</div>
                <div>• Abuja mosques closed - cases reduced</div>
                <div>• Port Harcourt churches closed - spread slowed</div>
                <div class="font-bold">• Closing places of worship probably helps control disease</div>
              </div>
            </div>
          </div>

          <div class="bg-red-50 p-6 rounded-lg">
            <h4 class="font-bold text-red-900 mb-4 text-xl">🧐 EXAMPLE ASSESSMENT</h4>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <span class="font-bold text-red-700">1.</span>
                <span class="text-red-800"><strong>Quantity:</strong> More diverse examples = stronger</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-red-700">2.</span>
                <span class="text-red-800"><strong>Relevance:</strong> Examples must relate to the claim</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-red-700">3.</span>
                <span class="text-red-800"><strong>Specificity:</strong> Clear, detailed examples</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="font-bold text-red-700">4.</span>
                <span class="text-red-800"><strong>Counterexamples:</strong> Consider opposing examples</span>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-4 text-xl">👨‍⚖️ ARGUMENTS FROM AUTHORITY</h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              Cite experts to support claims - but authority must be legitimate!
            </p>

            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div class="font-semibold mb-2">✅ Good Authority:</div>
                <ul class="list-disc list-inside space-y-1">
                  <li>Real expertise</li>
                  <li>Claim in their field</li>
                  <li>Respected source</li>
                </ul>
              </div>
              <div>
                <div class="font-semibold mb-2">⚠️ Bad Authority:</div>
                <ul class="list-disc list-inside space-y-1">
                  <li>Biased opinions</li>
                  <li>Experts disagree</li>
                  <li>Unknown source</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold text-yellow-900 mb-2">🎯 Daily Nigerian Application</p>
            <p class="text-yellow-800">
              Use these skills constantly: Should you buy that "hot" stock? (Check examples!) Is that health advice reliable? (Check authority!) Should you trust that politician? (Check analogies!) Inductive reasoning is your guide through life's uncertainties! 🧭🇳🇬
            </p>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-2">💡 Final Wisdom</h4>
            <p class="text-purple-800">
              Congratulations! You've mastered both deductive (certain) and inductive (probable) arguments. Life requires both - mathematics needs certainty, relationships need probability. You're now equipped to think critically in our complex Nigerian society. Go forth and argue wisely! 🎓✨
            </p>
          </div>
        </div>
      `
    }
  ]
};
