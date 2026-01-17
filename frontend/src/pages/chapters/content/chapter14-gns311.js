// Chapter 14: Concepts of Hypothesis Testing in Sciences, Social Sciences and Humanities
// GNS 311 - Module 14

export const chapter14Content = {
  title: "Concepts of Hypothesis Testing in Sciences, Social Sciences and Humanities",
  author: "Adeleke, B.L. and YAHYA, W.B.",
  department: "Department of Statistics, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🎯 Welcome to Hypothesis Testing!",
      subtitle: "Introduction",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome to the fascinating world of <strong>hypothesis testing</strong>! 🔬 This chapter explores
            how researchers make decisions about populations based on sample data—a cornerstone of
            scientific inquiry across all disciplines.
          </p>
          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">💡 Did you know?</p>
            <p class="text-teal-800 dark:text-teal-200">
              Hypothesis testing helps us determine whether observed differences in data are due to
              real effects or just random chance. This method revolutionized how we conduct research
              in sciences, social sciences, and humanities!
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            We'll explore the fundamental concepts of hypothesis testing, from basic steps to practical
            applications. You'll learn how to distinguish between null and alternative hypotheses,
            understand Type I and Type II errors, and see real-world examples.
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
              <span>Define statistical hypothesis testing and understand its importance</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Describe the basic steps in statistical hypothesis testing</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Distinguish between null and alternative hypotheses</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain Type I and Type II errors and the power of statistical tests</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Discuss common misconceptions in statistical hypothesis testing</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Apply hypothesis testing concepts to real-world engineering examples</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit1-intro",
      title: "📚 Unit 1: Why Hypothesis Testing Matters",
      subtitle: "Importance of Statistical Hypothesis Testing",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Why do we need hypothesis testing?</strong> 🤔 In many real-life situations, researchers
            need to make inferences about entire populations based on limited sample data. This is
            where statistical hypothesis testing becomes essential.
          </p>
          <p class="text-lg leading-relaxed">
            Without access to complete population data, we must rely on samples to make decisions.
            Hypothesis testing provides a systematic framework for determining whether our sample
            results are significant enough to generalize to the broader population.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400 p-4 my-4">
            <p class="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 Key Purpose</p>
            <p class="text-blue-800 dark:text-blue-200">
              Hypothesis testing helps us evaluate the strength of evidence from samples as a basis
              for making judgments about populations. It's the bridge between sample observations
              and population generalizations.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit1-definition",
      title: "🔍 What is Hypothesis Testing?",
      subtitle: "Definition and Purpose",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Statistical hypothesis testing is the process of <strong>understanding how reliable one can
            generalize observed results in a sample to the larger population</strong> from which the
            sample was drawn.
          </p>
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-3">Core Concept:</h4>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              When researchers hypothesize about relationships between factors, collect data to examine
              these relationships, and draw inferences based on their investigations, they are engaged
              in hypothesis testing. The prime interest is examining the strength of information obtained
              from samples as a basis for making judgments about populations.
            </p>
          </div>
          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">✨ Importance</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Lack of access to entire populations makes dependable inference about populations from
              samples absolutely necessary. This is the general basis of hypothesis testing.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit1-components",
      title: "🏗️ The Three Components of Science",
      subtitle: "Null and Alternative Hypotheses",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Statistical hypothesis testing revolves around two competing statements about the population:
            the <strong>null hypothesis (H₀)</strong> and the <strong>alternative hypothesis (H₁)</strong>.
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-2">❌ Null Hypothesis (H₀)</h4>
              <p class="text-red-800 dark:text-red-200 mb-3">The hypothesis of "no effect" or "no difference"</p>
              <ul class="space-y-1 text-sm text-red-700 dark:text-red-300">
                <li>• Represents the status quo</li>
                <li>• Often what we want to disprove</li>
                <li>• The hypothesis we test against</li>
                <li>• Usually denoted as H₀</li>
              </ul>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-2">✅ Alternative Hypothesis (H₁)</h4>
              <p class="text-green-800 dark:text-green-200 mb-3">The hypothesis of interest or research hypothesis</p>
              <ul class="space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• What the researcher wants to prove</li>
                <li>• Represents a real effect or difference</li>
                <li>• Usually denoted as H₁ or Hₐ</li>
                <li>• What we hope to support with data</li>
              </ul>
            </div>
          </div>

          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Key Characteristics:</h4>
            <div class="space-y-3">
              <div class="flex items-start">
                <span class="text-indigo-500 mr-3 font-bold">1.</span>
                <div>
                  <strong class="text-indigo-900 dark:text-indigo-100">Mutually Exclusive:</strong> Both hypotheses cannot be true at the same time
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-indigo-500 mr-3 font-bold">2.</span>
                <div>
                  <strong class="text-indigo-900 dark:text-indigo-100">Exhaustive:</strong> They cover all possible truths about the relationship
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-indigo-500 mr-3 font-bold">3.</span>
                <div>
                  <strong class="text-indigo-900 dark:text-indigo-100">Mathematically Stated:</strong> Usually expressed in mathematical terms
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit1-examples",
      title: "📊 Hypothesis Examples",
      subtitle: "Practical Examples",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Let's look at some practical examples to understand how hypotheses are formulated:
          </p>

          <div class="space-y-4 my-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">Two-Tail Test Example</h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3"><strong>Research Question:</strong> "Is the average performance of students in a CBT GNS examination different from their average performance in an MBT GNS examination?"</p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <p class="font-semibold mb-2">Hypotheses:</p>
                <p class="text-sm"><strong>H₀:</strong> μ<sub>CBT</sub> = μ<sub>MBT</sub> (no difference in means)</p>
                <p class="text-sm"><strong>H₁:</strong> μ<sub>CBT</sub> ≠ μ<sub>MBT</sub> (means are different)</p>
              </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">One-Tail Test Examples</h4>
              <div class="space-y-3">
                <div class="bg-white dark:bg-gray-700 p-3 rounded">
                  <p class="text-sm"><strong>Right-tailed:</strong></p>
                  <p class="text-sm"><strong>H₀:</strong> μ<sub>CBT</sub> ≤ μ<sub>MBT</sub></p>
                  <p class="text-sm"><strong>H₁:</strong> μ<sub>CBT</sub> > μ<sub>MBT</sub></p>
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded">
                  <p class="text-sm"><strong>Left-tailed:</strong></p>
                  <p class="text-sm"><strong>H₀:</strong> μ<sub>CBT</sub> ≥ μ<sub>MBT</sub></p>
                  <p class="text-sm"><strong>H₁:</strong> μ<sub>CBT</sub> < μ<sub>MBT</sub></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit1-errors",
      title: "⚠️ Understanding Test Errors",
      subtitle: "Type I and Type II Errors and Power",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            When conducting hypothesis tests, two types of errors can occur: <strong>Type I</strong> and
            <strong>Type II errors</strong>. Understanding these errors is crucial for proper interpretation
            of test results.
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-2">❌ Type I Error (α)</h4>
              <p class="text-red-800 dark:text-red-200 mb-3">Rejecting H₀ when H₀ is actually true</p>
              <ul class="space-y-1 text-sm text-red-700 dark:text-red-300">
                <li>• False positive</li>
                <li>• Level of significance</li>
                <li>• Probability of α (usually 0.05)</li>
                <li>• More serious in some contexts</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-5 rounded-lg border border-orange-200">
              <h4 class="font-bold text-orange-900 mb-2">❌ Type II Error (β)</h4>
              <p class="text-orange-800 mb-3">Failing to reject H₀ when H₀ is actually false</p>
              <ul class="space-y-1 text-sm text-orange-700">
                <li>• False negative</li>
                <li>• Probability of β</li>
                <li>• Depends on sample size</li>
                <li>• Less "visible" error</li>
              </ul>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800 my-4">
            <h4 class="font-bold text-green-900 dark:text-green-100 mb-2">✅ Power (1 - β)</h4>
            <p class="text-green-800 dark:text-green-200 mb-3">The probability of correctly rejecting H₀ when H₀ is false</p>
            <ul class="space-y-1 text-sm text-green-700 dark:text-green-300">
              <li>• Ability to detect real effects</li>
              <li>• Higher power is better</li>
              <li>• Increased by larger samples</li>
              <li>• Trade-off with Type I error</li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-3">Confusion Matrix:</h4>
            <div class="overflow-x-auto">
              <table class="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr class="bg-gray-200">
                    <th class="border border-gray-300 p-3 text-left"></th>
                    <th class="border border-gray-300 p-3 text-center" colspan="2">Decision</th>
                  </tr>
                  <tr class="bg-gray-200">
                    <th class="border border-gray-300 p-3 text-left">Truth</th>
                    <th class="border border-gray-300 p-3 text-center">Reject H₀</th>
                    <th class="border border-gray-300 p-3 text-center">Accept H₀</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-300 p-3 font-semibold">H₀ True</td>
                    <td class="border border-gray-300 p-3 text-center bg-red-100">Type I Error (α)</td>
                    <td class="border border-gray-300 p-3 text-center bg-green-100">Correct (1-α)</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-3 font-semibold">H₀ False</td>
                    <td class="border border-gray-300 p-3 text-center bg-green-100">Power (1-β)</td>
                    <td class="border border-gray-300 p-3 text-center bg-red-100">Type II Error (β)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit2-intro",
      title: "📋 Unit 2: The Step-by-Step Process",
      subtitle: "Basic Steps in Statistical Hypothesis Testing",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Statistical hypothesis testing follows a systematic process. While different authors present
            slight variations, the core steps remain consistent. Let's explore the fundamental approach
            developed by pioneers like Ronald Fisher.
          </p>
          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">🎯 The Logic</p>
            <p class="text-teal-800 dark:text-teal-200">
              The basic logic is simple: prove or disprove the research question stated under the
              alternative hypothesis (H₁) using empirical evidence from sample data.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit2-steps",
      title: "🔢 The Five Basic Steps",
      subtitle: "Fisher's Framework",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Following Ronald Fisher's approach, hypothesis testing typically involves these five steps:
          </p>

          <div class="space-y-4 my-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">1️⃣</span>
                State the Research Question
              </h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3">Define what you want to investigate</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm font-semibold mb-2">Example:</p>
                <p class="text-sm">"Is the mean score of students in GNS 111 course equal to 60%?"</p>
              </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">2️⃣</span>
                Specify the Hypotheses
              </h4>
              <p class="text-green-800 dark:text-green-200 mb-3">Formulate H₀ and H₁</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm"><strong>H₀:</strong> μ = 60%</p>
                <p class="text-sm"><strong>H₁:</strong> μ ≠ 60%</p>
              </div>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">3️⃣</span>
                Choose and Calculate Test Statistic
              </h4>
              <p class="text-purple-800 dark:text-purple-200 mb-3">Select appropriate statistical test</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm">For means: z-test or t-test</p>
                <p class="text-sm">For proportions: z-test</p>
                <p class="text-sm">For variances: F-test</p>
              </div>
            </div>

            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400">
              <h4 class="font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">4️⃣</span>
                Determine p-value or Critical Value
              </h4>
              <p class="text-yellow-800 dark:text-yellow-200 mb-3">Make decision about H₀</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm">p-value approach: compare to α</p>
                <p class="text-sm">Critical value approach: compare test statistic</p>
              </div>
            </div>

            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">5️⃣</span>
                Draw Conclusion
              </h4>
              <p class="text-red-800 dark:text-red-200 mb-3">Interpret results in context</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm">State whether H₀ is rejected or not</p>
                <p class="text-sm">Provide practical interpretation</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 7
    },
    {
      id: "unit2-assumptions",
      title: "📏 Key Assumptions",
      subtitle: "Requirements for Valid Tests",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            For hypothesis tests to be valid, certain assumptions must be met. These ensure the
            statistical tests provide reliable results.
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200">
              <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-2">🎲 Random Sampling</h4>
              <p class="text-indigo-800 dark:text-indigo-200 mb-3">Sample must be randomly selected from population</p>
              <ul class="space-y-1 text-sm text-indigo-700 dark:text-indigo-300">
                <li>• Each unit has equal chance of selection</li>
                <li>• Reduces bias</li>
                <li>• Ensures generalizability</li>
              </ul>
            </div>
            <div class="bg-cyan-50 p-5 rounded-lg border border-cyan-200">
              <h4 class="font-bold text-cyan-900 mb-2">📊 Normality</h4>
              <p class="text-cyan-800 mb-3">Data should follow normal distribution</p>
              <ul class="space-y-1 text-sm text-cyan-700">
                <li>• Especially important for small samples</li>
                <li>• Can be assessed visually (histograms)</li>
                <li>• Large samples often satisfy CLT</li>
              </ul>
            </div>
          </div>

          <div class="bg-orange-50 p-5 rounded-lg border border-orange-200 my-4">
            <h4 class="font-bold text-orange-900 mb-2">🔄 Independence</h4>
            <p class="text-orange-800 mb-3">Observations should be independent</p>
            <ul class="space-y-1 text-sm text-orange-700">
              <li>• One observation doesn't influence another</li>
              <li>• Critical for valid inference</li>
              <li>• Often violated in time series data</li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit3-intro",
      title: "🔬 Unit 3: Real-World Application",
      subtitle: "Classical Example of Hypothesis Testing",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Let's apply what we've learned to a real engineering example. This will help us see
            hypothesis testing in action with actual data and calculations.
          </p>
          <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 dark:border-green-400 p-4 my-4">
            <p class="font-semibold text-green-900 dark:text-green-100 mb-2">🛠️ Engineering Context</p>
            <p class="text-green-800 dark:text-green-200">
              In engineering experiments, hypothesis testing helps determine whether new materials,
              processes, or designs meet specifications. Let's examine a lubricant testing scenario.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 3
    },
    {
      id: "unit3-example",
      title: "⚙️ The Lubricant Experiment",
      subtitle: "A Complete Hypothesis Test Example",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Research Problem:</strong> In an engineering experiment (Hsu et al., 2002), 45 steel
            balls were lubricated with purified paraffin and subjected to testing. The average wear
            was 673.2 μm with a standard deviation of 14.9 μm. The specification requires mean wear
            to be less than 675 μm. Does this lubricant meet the specification?
          </p>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-3">Step 1: State the Research Question</h4>
            <p class="text-gray-700 dark:text-gray-300">Does the lubricant reduce mean wear diameter below 675 μm?</p>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">Step 2: Specify Hypotheses</h4>
            <div class="space-y-2">
              <p class="text-blue-800 dark:text-blue-200"><strong>H₀:</strong> μ ≥ 675 μm (lubricant does not meet specification)</p>
              <p class="text-blue-800 dark:text-blue-200"><strong>H₁:</strong> μ < 675 μm (lubricant meets specification)</p>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">Step 3: Choose Test Statistic</h4>
            <p class="text-green-800 dark:text-green-200 mb-2">We use the one-sample t-test:</p>
            <div class="bg-white dark:bg-gray-700 p-4 rounded font-mono text-sm">
              t = (x̄ - μ₀) / (s / √n)<br>
              t = (673.2 - 675) / (14.9 / √45)<br>
              t = (-1.8) / (14.9 / 6.708) = (-1.8) / 2.22 = -0.81
            </div>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">Step 4: Determine Critical Value</h4>
            <p class="text-purple-800 dark:text-purple-200 mb-2">At α = 0.05, df = 44:</p>
            <div class="bg-white dark:bg-gray-700 p-4 rounded">
              <p class="text-sm">Critical value: t<sub>0.05,44</sub> = -1.68</p>
              <p class="text-sm">Test statistic: t = -0.81</p>
              <p class="text-sm font-semibold">Since -0.81 > -1.68, we fail to reject H₀</p>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-yellow-900 dark:text-yellow-100 mb-3">Step 5: Draw Conclusion</h4>
            <p class="text-yellow-800 dark:text-yellow-200">
              At the 5% significance level, we cannot conclude that the lubricant meets the
              specification. The evidence is insufficient to show that mean wear is less than 675 μm.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit3-misconceptions",
      title: "🤔 Common Misconceptions",
      subtitle: "Pitfalls in Hypothesis Testing",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Statistical hypothesis testing is powerful but often misunderstood. Here are some common
            misconceptions that can lead to incorrect interpretations:
          </p>

          <div class="space-y-4 my-6">
            <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-2">❌ "p-value is probability that H₀ is true"</h4>
              <p class="text-red-800 dark:text-red-200 mb-3">Wrong! p-value is the probability of observing data as extreme as yours, assuming H₀ is true.</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm"><strong>Correct interpretation:</strong> Small p-value suggests data are unlikely under H₀</p>
              </div>
            </div>

            <div class="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 class="font-bold text-orange-900 mb-2">❌ "Statistical significance means practical importance"</h4>
              <p class="text-orange-800 mb-3">Wrong! Statistical significance doesn't guarantee meaningful real-world impact.</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm"><strong>Example:</strong> A drug that reduces symptoms by 0.1% might be statistically significant with large samples but clinically meaningless.</p>
              </div>
            </div>

            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400">
              <h4 class="font-bold text-yellow-900 dark:text-yellow-100 mb-2">❌ "α = 0.05 is always the right significance level"</h4>
              <p class="text-yellow-800 dark:text-yellow-200 mb-3">Wrong! The choice of α should depend on the context and consequences of errors.</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm"><strong>Consider:</strong> In drug testing, α might be 0.01 due to severe consequences of Type I error.</p>
              </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-2">❌ "Failing to reject H₀ means H₀ is true"</h4>
              <p class="text-green-800 dark:text-green-200 mb-3">Wrong! It only means there's insufficient evidence to reject H₀.</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm"><strong>Remember:</strong> Absence of evidence is not evidence of absence.</p>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-2">❌ "Small p-values mean large effects"</h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3">Wrong! p-values depend on both effect size and sample size.</p>
              <div class="bg-white dark:bg-gray-700 p-3 rounded">
                <p class="text-sm"><strong>Example:</strong> p = 0.01 could indicate a tiny effect with huge sample or large effect with small sample.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "summary",
      title: "📝 Chapter Summary",
      subtitle: "What We've Learned",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🎉 You've completed Chapter 14 on hypothesis testing. Let's recap the key concepts:
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4 text-xl">Key Takeaways:</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">1. Hypothesis Testing Framework</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">A systematic process for making inferences about populations from sample data</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">2. Null vs. Alternative Hypotheses</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">H₀ represents no effect; H₁ represents the effect of interest</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">3. Types of Errors</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Type I (false positive) and Type II (false negative) errors with power considerations</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">4. Five-Step Process</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">State question → Specify hypotheses → Choose test → Make decision → Draw conclusion</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-orange-700 mb-2">5. Real-World Application</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Applied hypothesis testing to engineering lubricant specifications</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🎯 Final Thoughts</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Hypothesis testing is a powerful tool for scientific inquiry across disciplines. Remember to
              always consider the context, check assumptions, and interpret results carefully. The goal
              is not just statistical significance, but meaningful understanding of the world around us!
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    }
  ]
};











