// Chapter 3: Boolean Algebra, Fundamentals of Truth Tables and Precedence Algebra
// COS 101 - Module 3

export const chapter3Content = {
  title: "Boolean Algebra, Fundamentals of Truth Tables and Precedence Algebra",
  author: "Department of Computer Science",
  department: "Faculty of Natural Sciences, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "introduction-boolean-algebra",
      title: "🔢 Introduction to Boolean Algebra",
      subtitle: "Understanding the Mathematical Foundation of Digital Logic",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Algebra is the study of mathematical symbols and rules for manipulating these symbols. It is the reunion of broken parts and allows proofs of properties that are true regardless of the numbers involved. For example, the quadratic equation ax² + bx + c = 0 works for any numbers a, b, c (where a ≠ 0).
          </p>

          <p class="text-lg leading-relaxed">
            Algebra computations are similar to arithmetic but use letters representing numbers, enabling general proofs. Boolean algebra extends this concept to digital logic, where variables represent true/false values.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="text-blue-800 font-semibold text-center">
              Boolean Algebra: Digital Logic Foundation
            </p>
            <div class="text-center mt-4">
              <div class="inline-block bg-white border-2 border-blue-300 rounded-lg p-4">
                <div class="text-blue-800 font-bold">TRUE/FALSE</div>
                <div class="text-blue-600">→</div>
                <div class="text-blue-800 font-bold">1/0</div>
                <div class="text-blue-600">→</div>
                <div class="text-blue-800 font-bold">ON/OFF</div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 8,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Welcome to the world of Boolean Algebra, my dear 100level computer science student! 🤓 This is where mathematics meets magic - we're going to learn how computers think using just YES and NO! Imagine Boolean algebra as the secret language computers use to make decisions - like how you decide "Should I go to class today?" based on yes/no factors. 🇳🇬🔢
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Boolean Algebra Matters for Nigerian Students</p>
            <p class="text-blue-800">
              See, in Nigeria, we make decisions all the time with yes/no logic! "Should I buy data today?" (Yes if I have money + No if network is bad). Boolean algebra is the foundation of all computer programs - from banking apps to school portals to even traffic lights! Understanding this will help you code your own apps someday. 💻
            </p>
          </div>

          <div class="bg-linear-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🏪 The Algebra Supermarket Analogy</h4>
            <p class="text-center text-gray-700">Just like shopping in a Nigerian market with yes/no decisions!</p>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 class="font-bold text-green-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🔍</span>
              Regular Algebra vs Boolean Algebra
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-green-900 mb-2">Regular Algebra</h5>
                <p class="text-green-800 text-sm">
                  Uses numbers: 2 + 3 = 5<br/>
                  Variables can be any number: x = 3.14<br/>
                  Infinite possibilities!
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-green-900 mb-2">Boolean Algebra</h5>
                <p class="text-green-800 text-sm">
                  Only two values: TRUE (1) or FALSE (0)<br/>
                  Like light switches: ON or OFF<br/>
                  Perfect for computers!
                </p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3">🌟 The Nigerian Context</h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Think of it like NEPA (now called BEDC) electricity! Your light can only be ON (1) or OFF (0). No "half-on" or "almost-off"! This is exactly how computers work. When you log into your student portal, the system checks: "Is username correct?" (YES/NO), "Is password right?" (YES/NO), "Can you access this course?" (YES/NO).
            </p>
            <div class="bg-white p-4 rounded-lg border">
              <h5 class="font-semibold text-yellow-900 mb-2">Real Nigerian Examples:</h5>
              <ul class="text-yellow-800 space-y-2">
                <li><strong>ATM:</strong> "Is card valid? AND Is PIN correct? AND Is balance sufficient?"</li>
                <li><strong>Traffic Light:</strong> "Is timer up? → Change from GREEN(1) to RED(0)"</li>
                <li><strong>School Portal:</strong> "Is matric number registered? AND Has school fees been paid?"</li>
              </ul>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🎯 Common Nigerian Student Challenges</p>
            <p class="text-red-800">
              Many students struggle because Boolean algebra seems "too simple" at first! "Why use just 1 and 0 when we have so many numbers?" But that's the beauty - computers can only understand YES/NO decisions. Once you master this foundation, everything else in computer science becomes easier! 🔧✨
            </p>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🚀 Future Applications</p>
            <p class="text-indigo-800">
              This knowledge is crucial for programming! In Nigeria, companies like Flutterwave, Interswitch, and even government systems use Boolean logic daily. Understanding this will help you build the next big Nigerian tech innovation. From mobile apps to banking systems to smart traffic controls - it all starts with TRUE/FALSE logic! 💼🌟
            </p>
          </div>
        </div>
      `
    },
    {
      id: "polynomials",
      title: "📈 Polynomials",
      subtitle: "Understanding Polynomial Operations and Factorization",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            A polynomial involves operations of addition, subtraction, multiplication, and non-negative integer exponents of terms consisting of variables and coefficients. For example, x² + 2x − 3 is a polynomial in the single variable x.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3 text-xl">🔢 Polynomial Example</h4>
              <div class="bg-white p-4 rounded border mb-4">
                <strong>Expression:</strong> x² + 2x − 3
              </div>
              <p class="text-green-800">
                This polynomial can be rewritten using commutative, associative, and distributive laws.
              </p>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3 text-xl">🔍 Factorization</h4>
              <div class="bg-white p-4 rounded border mb-4">
                <strong>Factored Form:</strong> (x − 1)(x + 3)
              </div>
              <p class="text-blue-800">
                Polynomials can be expressed as products of other polynomials that cannot be factored further.
              </p>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg">
            <h4 class="font-bold text-yellow-900 mb-4">🎯 Key Operations</h4>
            <p class="text-yellow-800 leading-relaxed">
              An important part of algebra is polynomial factorization and computation of polynomial greatest common divisors. These operations form the foundation for more advanced algebraic manipulations.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 6,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Hey there, future mathematician! 📈 Before we dive into Boolean algebra, let's talk about polynomials - those fancy mathematical expressions that will help us understand how Boolean logic works. Think of polynomials as the "ingredients" we use to build Boolean expressions, just like how you combine different ingredients to cook jollof rice! 🇳🇬🍚
          </p>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🤔 Why Polynomials Matter in Boolean Algebra</p>
            <p class="text-green-800">
              Na wah o! You might be wondering, "Why are we learning polynomials in a computer science class?" See, Boolean algebra expressions are like polynomials, but instead of numbers, we use TRUE/FALSE values. Understanding polynomials helps you see the patterns in Boolean logic - it's like learning the grammar before writing sentences! 📚
            </p>
          </div>

          <div class="bg-linear-to-r from-blue-100 to-indigo-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🏪 The Jollof Rice Cooking Analogy</h4>
            <p class="text-center text-gray-700">Just like combining ingredients to make perfect jollof rice!</p>
          </div>

          <div class="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h4 class="font-bold text-purple-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🔢</span>
              Understanding Polynomial x² + 2x − 3
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-purple-900 mb-2">The Expression</h5>
                <p class="text-purple-800 text-sm">
                  x² + 2x − 3<br/>
                  Like: rice + tomatoes + seasoning<br/>
                  Each part contributes to the final result!
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-purple-900 mb-2">Factored Form</h5>
                <p class="text-purple-800 text-sm">
                  (x − 1)(x + 3)<br/>
                  Like: (base ingredients) × (cooking method)<br/>
                  Simpler way to write the same thing!
                </p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3">🌟 Nigerian Student Connection</h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Think of polynomials like preparing for your JAMB exam! You have different subjects (variables), each with different scores (coefficients), and you combine them all to get your total score. Just like how x² + 2x − 3 can be written as (x − 1)(x + 3), complex problems can often be broken down into simpler parts!
            </p>
            <div class="bg-white p-4 rounded-lg border">
              <h5 class="font-semibold text-yellow-900 mb-2">Real Life Examples:</h5>
              <ul class="text-yellow-800 space-y-2">
                <li><strong>CGPA Calculation:</strong> (Course1 × Units) + (Course2 × Units) + ... = Total Points</li>
                <li><strong>Family Budget:</strong> (Food money) + (Transport money) + (Data money) = Monthly expenses</li>
                <li><strong>JAMB Score:</strong> (English × coefficient) + (Maths × coefficient) + ... = Total score</li>
              </ul>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 class="font-bold text-red-900 mb-3">🔧 Factorization: Breaking Down Complex Expressions</h4>
            <p class="text-red-800 leading-relaxed mb-4">
              Just like how you can break down a big problem into smaller, manageable parts, factorization helps us simplify complex expressions. In Boolean algebra, we'll do the same thing - take complicated logic expressions and break them down into simpler gates!
            </p>
            <div class="bg-white p-3 rounded border">
              <p class="text-red-800 text-sm">
                <strong>Example:</strong> Instead of writing x² + 2x − 3 everywhere, we write (x − 1)(x + 3) - much cleaner and easier to work with! This is exactly what we'll do with Boolean expressions like ABC + DEF → we'll factor them into simpler forms.
              </p>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🎯 Why This Matters for Computer Science</p>
            <p class="text-indigo-800">
              Understanding polynomials prepares you for Boolean algebra! Just like how you factor polynomials to solve equations, you'll factor Boolean expressions to simplify digital circuits. This skill is crucial for designing efficient computer systems - from phone apps to supercomputers! 🚀
            </p>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">💡 Pro Tip for Nigerian Students</p>
            <p class="text-green-800">
              Don't be scared of the math! Polynomials are just like combining different ingredients in your favorite Nigerian dish. Master this foundation, and Boolean algebra will feel like second nature. Remember, even the most complex computer programs start with simple mathematical building blocks! 🌟
            </p>
          </div>
        </div>
      `
    },
    {
      id: "fundamentals-boolean-algebra",
      title: "⚡ Fundamentals of Boolean Algebra",
      subtitle: "The Branch of Algebra for Digital Logic",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Boolean algebra is the branch of algebra in which the values of the variables are true values denoted by 1 and 0 or true and false respectively. Boolean algebra can be used to describe logic circuits and reduce the complexity of digital circuits by simplifying logic circuits.
          </p>

          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-red-50 p-4 rounded-lg text-center border-l-4 border-red-500">
              <div class="text-3xl mb-2">1</div>
              <div class="font-bold text-red-900">TRUE</div>
              <div class="text-red-700">ON</div>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center border-l-4 border-gray-500">
              <div class="text-3xl mb-2">0</div>
              <div class="font-bold text-gray-900">FALSE</div>
              <div class="text-gray-700">OFF</div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg text-center border-l-4 border-green-500">
              <div class="text-3xl mb-2">?</div>
              <div class="font-bold text-green-900">OPERATIONS</div>
              <div class="text-green-700">AND, OR, NOT</div>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-4">🧠 Boolean Logic Applications</h4>
            <p class="text-indigo-800 leading-relaxed">
              Boolean algebra was developed by George Boole in the 1840s and is extensively used in computer operations. It has proved useful in programming computer devices and in the selection of actions based on conditions.
            </p>
            <div class="mt-4 bg-white p-4 rounded border-l-4 border-indigo-500">
              <p class="text-indigo-800">
                <strong>The Boolean operations involve the set {0, 1}</strong> and form the foundation of digital circuit design and computer programming logic.
              </p>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 7,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Now we're getting to the heart of the matter - the fundamentals of Boolean algebra! ⚡ This is where we learn the special rules that govern computer logic. Imagine Boolean algebra as the "traffic rules" that computers follow - everything must be either YES or NO, 1 or 0, ON or OFF. No middle ground! 🇳🇬🚦
          </p>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🤔 Why Fundamentals Matter for Nigerian Students</p>
            <p class="text-indigo-800">
              See, in Nigeria, we understand binary choices very well! "Is NEPA light on or off?", "Did I pass or fail?", "Is my data still active?". Boolean algebra formalizes these yes/no decisions that we make every day. This understanding is crucial for programming, circuit design, and even troubleshooting tech problems in Nigeria! 🔧
            </p>
          </div>

          <div class="bg-linear-to-r from-red-100 to-orange-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🚦 Traffic Light Logic in Lagos</h4>
            <p class="text-center text-gray-700">Understanding Boolean values like Lagos traffic lights!</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-red-50 p-6 rounded-xl border-2 border-red-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-4xl mb-2">🔴</span>
                <h4 class="font-bold text-red-900 text-xl">FALSE = 0 = OFF</h4>
              </div>
              <p class="text-red-800 mb-3">
                Like traffic light is RED - cars must STOP! No movement, no debate, just STOP.
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-red-500">
                <strong>Nigerian Examples:</strong>
                <ul class="text-red-700 mt-2 space-y-1">
                  <li>• Light is off: No electricity</li>
                  <li>• Exam failed: Score below 40</li>
                  <li>• Network down: Can't make calls</li>
                  <li>• Door locked: Can't enter</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-4xl mb-2">⚫</span>
                <h4 class="font-bold text-gray-900 text-xl">NO MIDDLE GROUND</h4>
              </div>
              <p class="text-gray-800 mb-3">
                In Boolean algebra, there's no "maybe" or "half-yes"! Just like Nigerian politics - you're either in APC, PDP, or you're not in any party at all.
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-gray-500">
                <strong>Real Talk:</strong>
                <ul class="text-gray-700 mt-2 space-y-1">
                  <li>• No "almost true"</li>
                  <li>• No "kind of false"</li>
                  <li>• Only 100% YES or 100% NO</li>
                  <li>• Perfect for computers!</li>
                </ul>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-sm">
              <div class="flex items-center mb-3">
                <span class="text-4xl mb-2">🟢</span>
                <h4 class="font-bold text-green-900 text-xl">TRUE = 1 = ON</h4>
              </div>
              <p class="text-green-800 mb-3">
                Like traffic light is GREEN - cars can GO! Full permission, no restrictions, just GO.
              </p>
              <div class="bg-white p-3 rounded border-l-4 border-green-500">
                <strong>Nigerian Examples:</strong>
                <ul class="text-green-700 mt-2 space-y-1">
                  <li>• Light is on: Electricity flowing</li>
                  <li>• Exam passed: Score 40+</li>
                  <li>• Network active: Can browse</li>
                  <li>• Door unlocked: Can enter</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 class="font-bold text-blue-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🧮</span>
              The Magic Trio: AND, OR, NOT
            </h4>
            <p class="text-blue-800 leading-relaxed mb-4">
              Boolean algebra has three basic operations that combine these TRUE/FALSE values. Think of them as the three main ingredients in Nigerian cooking: palm oil (AND), Maggi (OR), and salt (NOT) - each changes the flavor in its own way!
            </p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-blue-900 mb-2">AND (·)</h5>
                <p class="text-blue-800 text-sm">
                  Both conditions must be true. Like: "Rice AND stew" for a complete meal.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-blue-900 mb-2">OR (+)</h5>
                <p class="text-blue-800 text-sm">
                  Either condition can be true. Like: "Jollof OR fried rice" - either one works.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-blue-900 mb-2">NOT (')</h5>
                <p class="text-blue-800 text-sm">
                  Reverses the value. Like: "NOT hungry" means you're full.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3">🎯 Why Computers Love Boolean Algebra</h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Computers are basically giant collections of YES/NO switches! Each transistor in your phone or laptop is either ON (1) or OFF (0). Boolean algebra gives us the rules to combine these switches to perform complex tasks. From calculating your CGPA to processing bank transfers - it's all Boolean logic under the hood!
            </p>
            <div class="bg-white p-4 rounded-lg border">
              <h5 class="font-semibold text-yellow-900 mb-2">Nigerian Tech Examples:</h5>
              <ul class="text-yellow-800 space-y-2">
                <li><strong>Banking App:</strong> "Is fingerprint correct AND PIN correct AND balance sufficient?"</li>
                <li><strong>School Portal:</strong> "Is matric number valid OR alternative ID accepted?"</li>
                <li><strong>Traffic System:</strong> "Is timer expired AND no emergency vehicle?" → Change light</li>
              </ul>
            </div>
          </div>

          <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p class="font-semibold text-purple-900 mb-2">🚀 The Future is Boolean</p>
            <p class="text-purple-800">
              Understanding these fundamentals opens doors to amazing careers! Nigerian tech companies need people who understand Boolean logic for app development, circuit design, and system optimization. This is your foundation for becoming a tech innovator in Africa's growing digital economy! 💼🌟
            </p>
          </div>
        </div>
      `
    },
    {
      id: "truth-tables",
      title: "📊 Truth Tables",
      subtitle: "Mathematical Tables for Computing Logical Expressions",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            A truth table is a mathematical table used in logic to compute the functional values of logical expressions on each of their functional arguments. Truth tables are specifically used in connection with Boolean algebra and Boolean functions.
          </p>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-4">🔍 Truth Table Structure</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border">
                  <strong>Input Columns:</strong> One for each input variable
                </div>
                <div class="bg-white p-3 rounded border">
                  <strong>Output Column:</strong> Result of the operation
                </div>
              </div>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border">
                  <strong>Complete:</strong> All possible input combinations
                </div>
                <div class="bg-white p-3 rounded border">
                  <strong>Deterministic:</strong> Output depends only on inputs
                </div>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4">📈 Applications of Truth Tables</h4>
            <ol class="list-decimal list-inside space-y-2 text-green-800">
              <li><strong>Argument Analysis:</strong> Truth tables can be used in analyzing arguments</li>
              <li><strong>Boolean Operation Reduction:</strong> Used to reduce basic Boolean operations in computing</li>
              <li><strong>Statement Validation:</strong> Used to test the validity of statements</li>
            </ol>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg">
            <h4 class="font-bold text-yellow-900 mb-4">🔢 Input Combinations Formula</h4>
            <p class="text-yellow-800 leading-relaxed">
              The number of input combinations in a Boolean function is determined by the formula: <strong>2ⁿ</strong> where n is the number of variables.
            </p>
            <div class="mt-4 bg-white p-4 rounded border">
              <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                  <strong>1 Variable:</strong><br/>2¹ = 2 combinations
                </div>
                <div>
                  <strong>2 Variables:</strong><br/>2² = 4 combinations
                </div>
                <div>
                  <strong>3 Variables:</strong><br/>2³ = 8 combinations
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 8,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Truth tables are here to save the day! 📊 These magical tables show us every possible scenario for Boolean expressions. Imagine you're planning your journey from Unilorin to Lagos - truth tables help you consider ALL possible combinations of transport, weather, and time. No stone left unturned! 🇳🇬🗺️
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Truth Tables Matter for Nigerian Students</p>
            <p class="text-blue-800">
              Na wah o! Truth tables prevent "I didn't think of that!" moments. In Nigeria, we make many decisions daily - which route to take, when to buy fuel, how to combine courses. Truth tables ensure you consider EVERY possibility, just like how a good businessman considers all market scenarios before investing! 💼
            </p>
          </div>

          <div class="bg-linear-to-r from-green-100 to-teal-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🎯 The Decision-Making Superpower</h4>
            <p class="text-center text-gray-700">Truth tables as your personal decision coach!</p>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h4 class="font-bold text-indigo-900 mb-3 flex items-center">
              <span class="text-2xl mr-2">🔍</span>
              Truth Table Anatomy
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-2">Input Columns</h5>
                <p class="text-indigo-800 text-sm">
                  One column for each decision factor. Like: "Do I have money?", "Is the market open?", "Is transport available?"
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-2">Output Column</h5>
                <p class="text-indigo-800 text-sm">
                  The result of your decision. Like: "Can I buy the item?", "Should I go out?", "Will I be successful?"
                </p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3">🔢 The Magic Formula: 2^n Combinations</h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              For n variables, you need 2^n rows! This seems scary, but it's just ensuring you cover all possibilities. Think of it like checking all combinations of decisions before making a move.
            </p>
            <div class="bg-white p-4 rounded-lg border">
              <h5 class="font-semibold text-yellow-900 mb-2">Nigerian Examples:</h5>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>1 Variable (2¹ = 2):</strong><br/>
                  "Should I buy data?"<br/>
                  • Have money: YES → Buy<br/>
                  • Have money: NO → Don't buy
                </div>
                <div>
                  <strong>2 Variables (2² = 4):</strong><br/>
                  "Can I attend class?"<br/>
                  • Money + Transport: YES<br/>
                  • Money + No Transport: NO<br/>
                  • No Money + Transport: NO<br/>
                  • No Money + No Transport: NO
                </div>
              </div>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 class="font-bold text-red-900 mb-3">📋 Truth Table Applications in Nigeria</h4>
            <p class="text-red-800 leading-relaxed mb-4">
              Truth tables aren't just academic - they're practical tools for everyday Nigerian life! Here's how they help us make better decisions:
            </p>
            <div class="space-y-3">
              <div class="bg-white p-3 rounded border">
                <strong>🏪 Market Shopping:</strong> "Should I buy this phone?" (Price + Quality + Budget + Need)
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>🎓 Course Registration:</strong> "Can I take this course?" (Prerequisites + Units + Time + Interest)
              </div>
              <div class="bg-white p-3 rounded border">
                <strong>💰 Investment Decision:</strong> "Should I buy shares?" (Risk + Return + Capital + Market)
              </div>
            </div>
          </div>

          <div class="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h4 class="font-bold text-purple-900 mb-3">🧮 How Truth Tables Work in Programming</h4>
            <p class="text-purple-800 leading-relaxed mb-4">
              In computer programs, truth tables help us write logic that handles all scenarios. Your banking app uses truth tables to decide: "Can you withdraw money?" checking balance, daily limit, account status, etc.
            </p>
            <div class="bg-white p-4 rounded-lg border">
              <h5 class="font-semibold text-purple-900 mb-2">Real Programming Examples:</h5>
              <ul class="text-purple-800 space-y-2">
                <li><strong>Login System:</strong> Username valid + Password correct + Account active = Access granted</li>
                <li><strong>Grade Calculator:</strong> Score ≥ 70 + Attendance ≥ 75% + Assignment submitted = Pass</li>
                <li><strong>Traffic App:</strong> Distance + Traffic + Time + Fuel = Best route recommended</li>
              </ul>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🎯 Why Nigerian Students Should Master Truth Tables</p>
            <p class="text-green-800">
              Truth tables teach systematic thinking! In Nigeria's fast-paced environment, being able to consider all possibilities before acting is crucial. Whether you're building apps, analyzing business data, or just making good life decisions, truth tables give you the complete picture. No more "I didn't see that coming!" moments! 🔮
            </p>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🚀 Career Boost</p>
            <p class="text-blue-800">
              Companies like Flutterwave, Interswitch, and Nigerian banks need people who can think systematically. Truth tables are your training ground for logical thinking - essential for programming, data analysis, and system design. Master this, and you're ready for Nigeria's growing tech industry! 💼🚀
            </p>
          </div>
        </div>
      `
    },
    {
      id: "basic-boolean-operations",
      title: "🔧 Basic Boolean Operations",
      subtitle: "AND, OR, and NOT Operations",
      content: `
        <div class="space-y-6">
          <div class="space-y-8">
            <div class="bg-red-50 p-6 rounded-lg">
              <h4 class="font-bold text-red-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">∧</span>
                AND Operation (·)
              </h4>
              <p class="text-red-800 leading-relaxed">
                The AND operator is represented by a period or dot between operands (X · Y). The Boolean multiplication operator evaluates to 1 only if both independent variables have the value 1.
              </p>
              <div class="mt-4 bg-white p-4 rounded border">
                <table class="w-full text-center">
                  <thead>
                    <tr class="border-b">
                      <th class="p-2">X</th>
                      <th class="p-2">Y</th>
                      <th class="p-2">X · Y</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">1</td><td class="p-2">1</td><td class="p-2 bg-red-100">1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-bold text-blue-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">∨</span>
                OR Operation (+)
              </h4>
              <p class="text-blue-800 leading-relaxed">
                The OR operator is represented by a plus sign (X + Y). This operation evaluates to 1 if either or both of the independent variables has the value 1.
              </p>
              <div class="mt-4 bg-white p-4 rounded border">
                <table class="w-full text-center">
                  <thead>
                    <tr class="border-b">
                      <th class="p-2">X</th>
                      <th class="p-2">Y</th>
                      <th class="p-2">X + Y</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2 bg-blue-100">0</td><td class="p-2 bg-blue-100">1</td><td class="p-2 bg-blue-100">1</td></tr>
                    <tr><td class="p-2 bg-blue-100">1</td><td class="p-2">0</td><td class="p-2 bg-blue-100">1</td></tr>
                    <tr><td class="p-2 bg-blue-100">1</td><td class="p-2 bg-blue-100">1</td><td class="p-2 bg-blue-100">1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-bold text-green-900 mb-4 flex items-center">
                <span class="text-2xl mr-3">¬</span>
                NOT Operation (')
              </h4>
              <p class="text-green-800 leading-relaxed">
                The NOT operator is represented by X' or X̅. This unary operator negates whatever value is contained in X, changing 1 to 0 and 0 to 1.
              </p>
              <div class="mt-4 bg-white p-4 rounded border">
                <table class="w-full text-center">
                  <thead>
                    <tr class="border-b">
                      <th class="p-2">X</th>
                      <th class="p-2">X'</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="p-2">0</td><td class="p-2 bg-green-100">1</td></tr>
                    <tr><td class="p-2 bg-green-100">1</td><td class="p-2">0</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4">🧮 Example: A(B + D)</h4>
            <p class="text-purple-800 leading-relaxed mb-4">
              Let's evaluate the expression A(B + D) using truth tables:
            </p>
            <div class="bg-white p-4 rounded border overflow-x-auto">
              <table class="w-full text-center">
                <thead>
                  <tr class="border-b">
                    <th class="p-2">A</th>
                    <th class="p-2">B</th>
                    <th class="p-2">D</th>
                    <th class="p-2">B + D</th>
                    <th class="p-2">A(B + D)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">1</td></tr>
                  <tr><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">1</td></tr>
                  <tr><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">1</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 10,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Here comes the fun part - Basic Boolean Operations! 🔧 These are the three fundamental operations that computers use to make decisions: AND, OR, and NOT. Think of them as the "secret ingredients" in Nigerian cooking - each one changes the flavor in its own special way. Let's break them down with real Nigerian examples! 🇳🇬👨‍🍳
          </p>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🤔 Why These Operations Matter for Nigerian Students</p>
            <p class="text-red-800">
              Every decision you make uses these operations! "Should I go to class?" (AND), "Take bus or keke?" (OR), "Not hungry anymore" (NOT). In programming, these operations control everything from login systems to ATM withdrawals. Understanding them is your key to becoming a great programmer! 🔑
            </p>
          </div>

          <div class="bg-linear-to-r from-orange-100 to-red-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">👨‍🍳 The Nigerian Kitchen Logic</h4>
            <p class="text-center text-gray-700">Understanding Boolean operations through cooking!</p>
          </div>

          <div class="space-y-8">
            <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">∧</span>
                <h4 class="font-bold text-red-900 text-xl">AND Operation (·) - "Both Must Be True"</h4>
              </div>
              <p class="text-red-800 leading-relaxed mb-4">
                AND means everything must be YES! Like making jollof rice - you need BOTH rice AND stew. Missing either one, and you don't have jollof rice!
              </p>
              <div class="bg-white p-4 rounded border mb-4">
                <table class="w-full text-center">
                  <thead>
                    <tr class="border-b">
                      <th class="p-2">X</th>
                      <th class="p-2">Y</th>
                      <th class="p-2">X · Y</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2 bg-red-100">1</td><td class="p-2 bg-red-100">1</td><td class="p-2 bg-red-100">1</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="bg-white p-4 rounded-lg border">
                <h5 class="font-semibold text-red-900 mb-2">Nigerian Examples:</h5>
                <ul class="text-red-800 space-y-2">
                  <li><strong>ATM:</strong> Card valid AND PIN correct AND Balance sufficient → Dispense cash</li>
                  <li><strong>Class Attendance:</strong> Arrive on time AND Bring materials AND Pay attention → Learn</li>
                  <li><strong>Cooking:</strong> Have gas AND Have ingredients AND Know recipe → Make food</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">∨</span>
                <h4 class="font-bold text-blue-900 text-xl">OR Operation (+) - "Either Can Be True"</h4>
              </div>
              <p class="text-blue-800 leading-relaxed mb-4">
                OR means at least one thing must be YES! Like transportation to school - you can take bus OR keke OR walk. As long as you have one option, you can get there!
              </p>
              <div class="bg-white p-4 rounded border mb-4">
                <table class="w-full text-center">
                  <thead>
                    <tr class="border-b">
                      <th class="p-2">X</th>
                      <th class="p-2">Y</th>
                      <th class="p-2">X + Y</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2 bg-blue-100">0</td><td class="p-2 bg-blue-100">1</td><td class="p-2 bg-blue-100">1</td></tr>
                    <tr><td class="p-2 bg-blue-100">1</td><td class="p-2">0</td><td class="p-2 bg-blue-100">1</td></tr>
                    <tr><td class="p-2 bg-blue-100">1</td><td class="p-2 bg-blue-100">1</td><td class="p-2 bg-blue-100">1</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="bg-white p-4 rounded-lg border">
                <h5 class="font-semibold text-blue-900 mb-2">Nigerian Examples:</h5>
                <ul class="text-blue-800 space-y-2">
                  <li><strong>Payment:</strong> Pay with cash OR POS OR Transfer OR Crypto → Complete transaction</li>
                  <li><strong>Communication:</strong> Call OR Text OR WhatsApp OR Visit → Send message</li>
                  <li><strong>Food:</strong> Eat rice OR Garri OR Bread OR Indomie → Satisfied</li>
                </ul>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">¬</span>
                <h4 class="font-bold text-green-900 text-xl">NOT Operation (') - "Reverse It!"</h4>
              </div>
              <p class="text-green-800 leading-relaxed mb-4">
                NOT flips everything! YES becomes NO, NO becomes YES. Like saying "I'm NOT hungry" when you actually are full, or "This is NOT expensive" when it actually is cheap!
              </p>
              <div class="bg-white p-4 rounded border mb-4">
                <table class="w-full text-center">
                  <thead>
                    <tr class="border-b">
                      <th class="p-2">X</th>
                      <th class="p-2">X'</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="p-2">0</td><td class="p-2 bg-green-100">1</td></tr>
                    <tr><td class="p-2 bg-green-100">1</td><td class="p-2">0</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="bg-white p-4 rounded-lg border">
                <h5 class="font-semibold text-green-900 mb-2">Nigerian Examples:</h5>
                <ul class="text-green-800 space-y-2">
                  <li><strong>Security:</strong> "NOT logged in" means you need to sign in first</li>
                  <li><strong>Traffic:</strong> "NOT red light" means you can proceed (green or yellow)</li>
                  <li><strong>School:</strong> "NOT failed" means you passed the exam</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4">🧮 Complex Example: A(B + D)</h4>
            <p class="text-purple-800 leading-relaxed mb-4">
              Let's break down A(B + D)! This combines all three operations: B + D is OR, then multiplied by A is AND. Think of it as: "I will go out if I have money AND (it's weekend OR it's a holiday)."
            </p>
            <div class="bg-white p-4 rounded border mb-4">
              <p class="text-purple-800 text-sm">
                <strong>Real Life:</strong> School portal login - You can access if: Account active AND (Email verified OR Phone verified)
              </p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3">🎯 Why Master These Operations</h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              These three operations are the foundation of all computer logic! Every app, website, and system you use combines these operations millions of times per second. From deciding if your WhatsApp message sends to calculating your bank balance - it's all AND, OR, NOT!
            </p>
            <div class="bg-white p-4 rounded-lg border">
              <h5 class="font-semibold text-yellow-900 mb-2">Modern Nigerian Applications:</h5>
              <ul class="text-yellow-800 space-y-2">
                <li><strong>Banking Apps:</strong> Transfer money only if PIN correct AND balance sufficient AND recipient valid</li>
                <li><strong>E-commerce:</strong> Order successful if payment confirmed OR store credit available</li>
                <li><strong>Social Media:</strong> Post visible unless account suspended (NOT banned)</li>
              </ul>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🚀 Your Programming Foundation</p>
            <p class="text-indigo-800">
              Understanding AND, OR, NOT is your first step to coding! Languages like JavaScript, Python, and Java all use these concepts. Nigerian tech companies desperately need programmers who can think logically. Master these operations, and you're on your way to building the next Flutterwave or Konga! 💻🌟
            </p>
          </div>
        </div>
      `
    },
    {
      id: "logic-gates",
      title: "🚪 Logic Gates",
      subtitle: "Building Blocks of Digital Circuits",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Logic gates are elementary building blocks of digital circuits. Complex electronic circuits are built using basic logic gates. At any given moment, every terminal is in one of two binary conditions: low (0) or high (1).
          </p>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-3 text-xl">AND Gate</h4>
              <p class="text-red-800">
                Output is "true" when both inputs are "true". Otherwise, output is "false".
              </p>
              <div class="mt-3 p-3 bg-white rounded border text-center">
                <strong>Symbol:</strong> ∧<br/>
                <strong>Logic:</strong> X · Y
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3 text-xl">OR Gate</h4>
              <p class="text-blue-800">
                Output is "true" if either or both inputs are "true". Both inputs "false" gives "false".
              </p>
              <div class="mt-3 p-3 bg-white rounded border text-center">
                <strong>Symbol:</strong> ∨<br/>
                <strong>Logic:</strong> X + Y
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3 text-xl">NOT Gate</h4>
              <p class="text-green-800">
                Reverses the logic state. Also called an inverter.
              </p>
              <div class="mt-3 p-3 bg-white rounded border text-center">
                <strong>Symbol:</strong> ¬<br/>
                <strong>Logic:</strong> X'
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-yellow-50 p-6 rounded-lg">
              <h4 class="font-bold text-yellow-900 mb-4">NAND Gate</h4>
              <p class="text-yellow-800 leading-relaxed">
                The NAND gate operates as an AND gate followed by a NOT gate. Output is "false" if both inputs are "true." Otherwise, output is "true".
              </p>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-4">NOR Gate</h4>
              <p class="text-purple-800 leading-relaxed">
                The NOR gate is a combination of an OR gate followed by an inverter. Output is "true" if both inputs are "false." Otherwise, output is "false".
              </p>
            </div>

            <div class="bg-indigo-50 p-6 rounded-lg">
              <h4 class="font-bold text-indigo-900 mb-4">XOR Gate (Exclusive OR)</h4>
              <p class="text-indigo-800 leading-relaxed">
                The XOR gate acts like logical "either/or." Output is "true" if inputs are different, "false" if they are the same.
              </p>
              <div class="mt-4 bg-white p-4 rounded border">
                <table class="w-full text-center">
                  <thead>
                    <tr class="border-b">
                      <th class="p-2">A</th>
                      <th class="p-2">B</th>
                      <th class="p-2">A ⊕ B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2 bg-indigo-100">1</td></tr>
                    <tr><td class="p-2">1</td><td class="p-2">0</td><td class="p-2 bg-indigo-100">1</td></tr>
                    <tr><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-pink-50 p-6 rounded-lg">
              <h4 class="font-bold text-pink-900 mb-4">XNOR Gate (Exclusive NOR)</h4>
              <p class="text-pink-800 leading-relaxed">
                The XNOR gate is an XOR gate followed by an inverter. Output is "true" if inputs are the same, "false" if different.
              </p>
              <div class="mt-4 bg-white p-4 rounded border">
                <table class="w-full text-center">
                  <thead>
                    <tr class="border-b">
                      <th class="p-2">A</th>
                      <th class="p-2">B</th>
                      <th class="p-2">A ⊙ B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2 bg-pink-100">1</td></tr>
                    <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">1</td><td class="p-2">1</td><td class="p-2 bg-pink-100">1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 12,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Logic gates are the real MVPs of computer hardware! 🚪 These electronic switches are the physical building blocks that make Boolean algebra come alive. Imagine logic gates as the "control room" of your phone or laptop - millions of tiny switches working together to make everything function. Let's explore these digital heroes! ⚡🔧
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Logic Gates Matter for Nigerian Students</p>
            <p class="text-blue-800">
              Every electronic device you use - from your phone to traffic lights to ATMs - is built with logic gates! Understanding them helps you appreciate how technology works and prepares you for careers in hardware design, IoT, and embedded systems. Nigerian tech companies need hardware engineers too! 🔌
            </p>
          </div>

          <div class="bg-linear-to-r from-purple-100 to-indigo-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🏗️ Building Blocks of Digital Nigeria</h4>
            <p class="text-center text-gray-700">Logic gates as the foundation of modern technology!</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-3 text-xl">AND Gate</h4>
              <p class="text-red-800 mb-3">
                Output is HIGH only when BOTH inputs are HIGH. Like a security door that opens only when you have the right card AND enter the correct PIN.
              </p>
              <div class="bg-white p-3 rounded border text-center">
                <strong>Symbol:</strong> ∧<br/>
                <strong>Logic:</strong> X · Y<br/>
                <strong>Nigerian Use:</strong> Bank vault access
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-3 text-xl">OR Gate</h4>
              <p class="text-blue-800 mb-3">
                Output is HIGH when EITHER input is HIGH. Like hotel reception - you can pay with cash OR card OR mobile money.
              </p>
              <div class="bg-white p-3 rounded border text-center">
                <strong>Symbol:</strong> ∨<br/>
                <strong>Logic:</strong> X + Y<br/>
                <strong>Nigerian Use:</strong> Payment systems
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-3 text-xl">NOT Gate</h4>
              <p class="text-green-800 mb-3">
                Inverts the input - HIGH becomes LOW, LOW becomes HIGH. Like a reverse switch - press once to turn OFF what was ON.
              </p>
              <div class="bg-white p-3 rounded border text-center">
                <strong>Symbol:</strong> ¬<br/>
                <strong>Logic:</strong> X'<br/>
                <strong>Nigerian Use:</strong> Light switches
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-yellow-50 p-6 rounded-lg">
              <h4 class="font-bold text-yellow-900 mb-4">NAND Gate (NOT + AND)</h4>
              <p class="text-yellow-800 leading-relaxed">
                NAND is AND followed by NOT. Output is LOW only when both inputs are HIGH. This gate is special because ALL other gates can be built using only NAND gates! It's like the "Universal Spice" in Nigerian cooking.
              </p>
              <div class="bg-white p-4 rounded border mt-3">
                <p class="text-yellow-800 text-sm">
                  <strong>Why Universal?</strong> Just like how you can make any soup with the right combination of Maggi, pepper, and onions, you can build any digital circuit with NAND gates!
                </p>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg">
              <h4 class="font-bold text-purple-900 mb-4">NOR Gate (NOT + OR)</h4>
              <p class="text-purple-800 leading-relaxed">
                NOR is OR followed by NOT. Output is HIGH only when both inputs are LOW. Like a "Nobody Home" indicator - the light comes on only when no one is in the house.
              </p>
            </div>

            <div class="bg-indigo-50 p-6 rounded-lg">
              <h4 class="font-bold text-indigo-900 mb-4">XOR Gate (Exclusive OR)</h4>
              <p class="text-indigo-800 leading-relaxed mb-4">
                XOR outputs HIGH when inputs are DIFFERENT. Like choosing between two options - you can take the bus OR the train, but not both!
              </p>
              <div class="bg-white p-4 rounded border">
                <table class="w-full text-center">
                  <thead>
                    <tr class="border-b">
                      <th class="p-2">A</th>
                      <th class="p-2">B</th>
                      <th class="p-2">A ⊕ B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2 bg-indigo-100">1</td></tr>
                    <tr><td class="p-2">1</td><td class="p-2">0</td><td class="p-2 bg-indigo-100">1</td></tr>
                    <tr><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-3 bg-white p-3 rounded border">
                <p class="text-indigo-800 text-sm">
                  <strong>Nigerian Example:</strong> Voting - you can vote APC OR PDP, but not both parties!
                </p>
              </div>
            </div>

            <div class="bg-pink-50 p-6 rounded-lg">
              <h4 class="font-bold text-pink-900 mb-4">XNOR Gate (Exclusive NOR)</h4>
              <p class="text-pink-800 leading-relaxed mb-4">
                XNOR outputs HIGH when inputs are the SAME. Like matching clothes - both pieces must be either traditional OR English wear, but not mixed!
              </p>
              <div class="bg-white p-4 rounded border">
                <table class="w-full text-center">
                  <thead>
                    <tr class="border-b">
                      <th class="p-2">A</th>
                      <th class="p-2">B</th>
                      <th class="p-2">A ⊙ B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2 bg-pink-100">1</td></tr>
                    <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                    <tr><td class="p-2">1</td><td class="p-2">1</td><td class="p-2 bg-pink-100">1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 class="font-bold text-green-900 mb-3">🌟 Logic Gates in Nigerian Technology</h4>
            <p class="text-green-800 leading-relaxed mb-4">
              Logic gates power the technology we use every day in Nigeria! Here's how they work behind the scenes:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-green-900 mb-2">Traffic Lights</h5>
                <p class="text-green-800 text-sm">
                  AND gates ensure lights don't conflict, OR gates handle pedestrian crossings
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-green-900 mb-2">ATM Machines</h5>
                <p class="text-green-800 text-sm">
                  Multiple AND conditions for secure transactions
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-green-900 mb-2">POS Terminals</h5>
                <p class="text-green-800 text-sm">
                  XOR logic for payment method selection
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-green-900 mb-2">Security Systems</h5>
                <p class="text-green-800 text-sm">
                  NAND gates for alarm conditions
                </p>
              </div>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🎯 Why Study Logic Gates?</p>
            <p class="text-red-800">
              Logic gates are the bridge between abstract Boolean algebra and physical computers! Understanding them helps you design hardware, debug electronic problems, and appreciate how software controls hardware. In Nigeria's growing tech scene, hardware engineers are in high demand! 🔧💡
            </p>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🚀 Career Opportunities</p>
            <p class="text-indigo-800">
              Logic gate knowledge opens doors to exciting careers: Hardware design engineer, IoT specialist, embedded systems developer, robotics engineer. Nigerian companies like Dangote, MTN, and tech startups need people who understand both the software and hardware sides of technology! 💼⚡
            </p>
          </div>
        </div>
      `
    },
    {
      id: "combinatorial-circuits",
      title: "🔗 Combinatorial Logic Circuits",
      subtitle: "Complex Operations Through Gate Combinations",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            With combinations of several logic gates, complex operations can be performed by electronic devices. Arrays of logic gates are found in digital integrated circuits (ICs).
          </p>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-4">🧩 Circuit Example: A̅BC</h4>
            <p class="text-blue-800 leading-relaxed mb-4">
              A goes into the NOT gate first, then combines with B and C in an AND gate. The final output is BC (when A is false).
            </p>
            <div class="bg-white p-4 rounded border">
              <table class="w-full text-center">
                <thead>
                  <tr class="border-b">
                    <th class="p-2">A</th>
                    <th class="p-2">B</th>
                    <th class="p-2">C</th>
                    <th class="p-2">A̅</th>
                    <th class="p-2">A̅BC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">1</td><td class="p-2 bg-blue-100">1</td></tr>
                  <tr><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                  <tr><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">1</td><td class="p-2">0</td><td class="p-2">0</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4">🔄 Complex Circuit: A + B + BC</h4>
            <p class="text-green-800 leading-relaxed mb-4">
              This circuit uses multiple gates: A and B go into a NOR gate, B and C go into an AND gate, and both results feed into an OR gate.
            </p>
            <div class="bg-white p-4 rounded border overflow-x-auto">
              <table class="w-full text-center text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="p-1">A</th>
                    <th class="p-1">B</th>
                    <th class="p-1">C</th>
                    <th class="p-1">D</th>
                    <th class="p-1">E</th>
                    <th class="p-1">Q</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1 bg-green-100">1</td></tr>
                  <tr><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1 bg-green-100">1</td></tr>
                  <tr><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td></tr>
                  <tr><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1 bg-green-100">1</td></tr>
                  <tr><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td></tr>
                  <tr><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td></tr>
                  <tr><td class="p-1">1</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td></tr>
                  <tr><td class="p-1">1</td><td class="p-1">1</td><td class="p-1">1</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td></tr>
                </tbody>
              </table>
            </div>
            <p class="text-green-800 text-sm mt-2">
              <em>Note: D and E are intermediate results. The final output Q is the result of the OR operation.</em>
            </p>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4">🏗️ More Complex Examples</h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded border">
                <strong>Q = A̅B + B</strong><br/>
                <span class="text-purple-700 text-sm">A goes into NOT, then AND with B, OR with B</span>
              </div>
              <div class="bg-white p-4 rounded border">
                <strong>Q = (ABC)(DE)</strong><br/>
                <span class="text-purple-700 text-sm">ABC and DE are ANDed together</span>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-4">🎯 Self-Assessment Challenges</h4>
            <ol class="list-decimal list-inside space-y-2 text-indigo-800">
              <li><strong>Gate Combinations:</strong> Combine gates together to draw 4 logic circuits using at least 3 gates each</li>
              <li><strong>Circuit Design:</strong> Draw logic gates and circuits for complex functions like AX = A̅BC̅D + FG and BZ = ABC + CDE + ACF</li>
            </ol>
          </div>
        </div>
      `,
      estimatedTime: 15,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Now we're cooking with gas - Combinatorial Logic Circuits! 🔗 This is where the magic happens - combining multiple logic gates to create complex decision-making systems. Imagine building a smart security system for your compound or designing an automated bank teller. That's the power of combining gates! 🏗️⚡
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Combinatorial Circuits Matter</p>
            <p class="text-blue-800">
              Simple gates are like words; combinatorial circuits are like sentences! They allow computers to make complex decisions. Every app, website, and electronic device you use combines gates this way. Understanding this is crucial for digital design and programming! 🎯
            </p>
          </div>

          <div class="bg-linear-to-r from-green-100 to-blue-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🏗️ Building Complex Systems from Simple Parts</h4>
            <p class="text-center text-gray-700">Like building a house from individual bricks!</p>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-4">🧩 Circuit Example: A̅BC</h4>
            <p class="text-indigo-800 leading-relaxed mb-4">
              A̅BC means: NOT A, then AND with B and C. Think of it as a security system: "Grant access if the person is NOT a visitor AND has a valid ID AND has clearance." Only when all conditions are met in this specific way does the output become 1!
            </p>
            <div class="bg-white p-4 rounded border">
              <p class="text-indigo-800 text-sm">
                <strong>Nigerian Example:</strong> School portal - "Allow registration if student is NOT on academic probation AND has paid fees AND meets course requirements."
              </p>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4">🔄 Complex Circuit: A + B + BC</h4>
            <p class="text-green-800 leading-relaxed mb-4">
              This circuit uses multiple gates: A and B go into a NOR gate, B and C go into an AND gate, and both results feed into an OR gate. It's like a complex business decision: "Proceed if we have cash OR credit OR (good reputation AND collateral)."
            </p>
            <div class="bg-white p-4 rounded border">
              <p class="text-green-800 text-sm">
                <strong>Banking Logic:</strong> "Approve loan if applicant has high income OR good credit score OR (stable job AND cosigner)."
              </p>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-bold text-purple-900 mb-4">🏗️ More Complex Examples</h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded border">
                <strong>Q = A̅B + B</strong><br/>
                <span class="text-purple-700 text-sm">Nigerian Traffic: "Allow right turn if NOT in rush hour AND turning right, OR it's an emergency vehicle."</span>
              </div>
              <div class="bg-white p-4 rounded border">
                <strong>Q = (ABC)(DE)</strong><br/>
                <span class="text-purple-700 text-sm">Security System: "Activate alarm if motion detected AND time is night AND NOT disarmed, AND (door opened OR window broken)."</span>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3">🎯 Self-Assessment Challenges</h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Now it's your turn to practice! These challenges will help you master combinatorial circuits:
            </p>
            <div class="space-y-3">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">Gate Combinations</h5>
                <p class="text-yellow-800 text-sm">
                  Draw 4 logic circuits using at least 3 gates each. Think of real scenarios like ATM validation, traffic control, or course registration logic.
                </p>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">Circuit Design</h5>
                <p class="text-yellow-800 text-sm">
                  Design circuits for complex functions. For example: "AX = A̅BC̅D + FG" (Access granted if NOT admin AND valid user AND NOT suspended, OR has special permission).
                </p>
              </div>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-6">
            <h4 class="font-bold text-red-900 mb-3">🌟 Real-World Applications in Nigeria</h4>
            <p class="text-red-800 leading-relaxed mb-4">
              Combinatorial circuits power many systems we use daily:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-red-900 mb-1">Banking Systems</h5>
                <p class="text-red-800 text-sm">Complex validation: PIN correct AND card valid AND balance sufficient AND transaction amount reasonable</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-red-900 mb-1">Traffic Control</h5>
                <p class="text-red-800 text-sm">Smart lights: Timer expired AND no emergency vehicle AND pedestrian button NOT pressed</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-red-900 mb-1">Security Systems</h5>
                <p class="text-red-800 text-sm">Compound security: Motion detected OR door opened, AND alarm NOT disabled AND NOT false alarm</p>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-red-900 mb-1">School Portals</h5>
                <p class="text-red-800 text-sm">Registration: Fees paid AND courses available AND prerequisites met AND NOT academic probation</p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p class="font-semibold text-indigo-900 mb-2">🎯 Why This Matters for Your Future</p>
            <p class="text-indigo-800">
              Combinatorial circuits are the foundation of digital design! Whether you want to build apps, design hardware, or work in cybersecurity, understanding how to combine logic gates is essential. Nigerian tech companies like Flutterwave and Interswitch build complex systems using these principles daily! 💼
            </p>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">🚀 Practice Makes Perfect</p>
            <p class="text-green-800">
              Don't be intimidated by complex expressions! Break them down step by step, just like solving a math problem. Start with simple combinations and work your way up. Each circuit you design makes you a better engineer. Keep practicing - you're building the future of Nigerian technology! 🌟🔧
            </p>
          </div>
        </div>
      `
    },
    {
      id: "self-assessment",
      title: "📝 Self-Assessment",
      subtitle: "Test Your Understanding of Boolean Algebra",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 mb-4">❓ Questions</h4>
            <ol class="list-decimal list-inside space-y-4 text-blue-800">
              <li>List at least five (5) types of logic gates</li>
              <li>Mention the logic function associated with each gate</li>
              <li>Draw the truth table associated with each gate</li>
            </ol>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4">🎨 Tutor Marked Assessment</h4>
            <ol class="list-decimal list-inside space-y-4 text-green-800">
              <li>Draw the physical representation of the AND, OR, NOT and XNOR logic gates</li>
              <li>Draw the logic circuit and truth table for:
                <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Z = ABC</li>
                  <li>W = (P·Q̅) + (R+S̅)</li>
                </ul>
              </li>
              <li>Write out the logic function of the given gate circuits</li>
            </ol>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg">
            <h4 class="font-bold text-yellow-900 mb-4">🔑 Key Takeaways</h4>
            <ul class="list-disc list-inside space-y-2 text-yellow-800">
              <li>Boolean algebra forms the foundation of digital logic and computer operations</li>
              <li>Truth tables provide a systematic way to analyze logical expressions</li>
              <li>Logic gates are the building blocks of digital circuits</li>
              <li>Complex circuits can be built by combining basic gates</li>
              <li>Understanding Boolean operations is essential for computer science and digital design</li>
            </ul>
          </div>
        </div>
      `,
      estimatedTime: 10,
      manualExplanation: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Ehen! Congratulations on reaching the Self-Assessment section! 📝 This is where you test your understanding and see how much you've learned about Boolean Algebra. Don't worry if you don't get everything right on your first try - this is your learning journey, not a final exam! Let's approach these questions with confidence! 💪📚
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="font-semibold text-blue-900 mb-2">🤔 Why Self-Assessment Matters</p>
            <p class="text-blue-800">
              Self-assessment isn't just about grades - it's about growth! Testing yourself helps you identify what you understand well and what needs more work. In the real world, programmers constantly test their code. This section prepares you for that mindset! 🔍✨
            </p>
          </div>

          <div class="bg-linear-to-r from-green-100 to-blue-100 p-6 rounded-lg">
            <h4 class="font-bold text-center text-lg mb-4">🧠 Testing Your Boolean Knowledge</h4>
            <p class="text-center text-gray-700">Your journey to becoming a logic master!</p>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg">
            <h4 class="font-bold text-indigo-900 mb-4">❓ Knowledge Check Questions</h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-2">Question 1: Logic Gate Types</h5>
                <p class="text-indigo-800 mb-2">List at least five types of logic gates and their functions.</p>
                <div class="bg-indigo-50 p-3 rounded">
                  <p class="text-indigo-700 text-sm">
                    <strong>Study Tip:</strong> AND (both true), OR (either true), NOT (reverse), NAND (AND then NOT), NOR (OR then NOT), XOR (different inputs), XNOR (same inputs). Think of Nigerian examples for each!
                  </p>
                </div>
              </div>

              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-indigo-900 mb-2">Question 2: Truth Tables</h5>
                <p class="text-indigo-800 mb-2">Draw the truth table for each gate type.</p>
                <div class="bg-indigo-50 p-3 rounded">
                  <p class="text-indigo-700 text-sm">
                    <strong>Study Tip:</strong> Remember the pattern! AND: only 1+1=1. OR: any 1 makes 1. NOT: just flip. NAND/NOR: opposite of AND/OR. XOR: different=1, same=0.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 mb-4">🎨 Tutor Marked Assessment</h4>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-green-900 mb-2">Part 1: Gate Symbols</h5>
                <p class="text-green-800 mb-2">Draw the physical representation of AND, OR, NOT, and XNOR logic gates.</p>
                <div class="bg-green-50 p-3 rounded">
                  <p class="text-green-700 text-sm">
                    <strong>Remember:</strong> AND has a curved bottom, OR has curved sides, NOT has a triangle with circle, XNOR combines XOR with NOT.
                  </p>
                </div>
              </div>

              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-green-900 mb-2">Part 2: Circuit Design</h5>
                <p class="text-green-800 mb-2">Draw logic circuits and truth tables for: Z = ABC and W = (P·Q̅) + (R+S̅)</p>
                <div class="bg-green-50 p-3 rounded">
                  <p class="text-green-700 text-sm">
                    <strong>Break it down:</strong> Z needs three AND gates. W needs NOT gates, AND gates, and OR gate. Start simple and build up!
                  </p>
                </div>
              </div>

              <div class="bg-white p-4 rounded border">
                <h5 class="font-semibold text-green-900 mb-2">Part 3: Logic Functions</h5>
                <p class="text-green-800 mb-2">Write out the logic function of given gate circuits.</p>
                <div class="bg-green-50 p-3 rounded">
                  <p class="text-green-700 text-sm">
                    <strong>Tip:</strong> Trace the circuit from inputs to output. Write the expression for each gate combination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 class="font-bold text-yellow-900 mb-3">🔑 Key Takeaways Review</h4>
            <p class="text-yellow-800 leading-relaxed mb-4">
              Before you finish, let's review what you've learned:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">✅ What You Should Know</h5>
                <ul class="text-yellow-800 text-sm space-y-1">
                  <li>• Boolean algebra fundamentals</li>
                  <li>• Truth table construction</li>
                  <li>• Basic logic operations (AND, OR, NOT)</li>
                  <li>• Logic gate types and symbols</li>
                  <li>• Combinatorial circuit design</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-semibold text-yellow-900 mb-2">🎯 Real-World Applications</h5>
                <ul class="text-yellow-800 text-sm space-y-1">
                  <li>• Digital circuit design</li>
                  <li>• Computer programming logic</li>
                  <li>• Hardware troubleshooting</li>
                  <li>• System security</li>
                  <li>• Automated decision systems</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <p class="font-semibold text-red-900 mb-2">🎯 Study Tips for Success</p>
            <p class="text-red-800">
              • Practice drawing truth tables until they become second nature<br/>
              • Use real-life examples (like ATM logic or traffic lights) to understand concepts<br/>
              • Break complex circuits into smaller parts<br/>
              • Don't memorize - understand the logic behind each gate<br/>
              • Review your mistakes - they're your best teachers!
            </p>
          </div>

          <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p class="font-semibold text-purple-900 mb-2">🚀 Your Next Steps</p>
            <p class="text-purple-800">
              Great job completing Chapter 3! Boolean algebra is now your foundation. Next, you'll learn about more advanced topics, but everything builds on what you've mastered here. Keep practicing, stay curious, and remember - every great programmer started exactly where you are now! 🌟
            </p>
          </div>

          <div class="bg-green-50 border-l-4 border-green-500 p-4">
            <p class="font-semibold text-green-900 mb-2">💪 You've Got This!</p>
            <p class="text-green-800">
              Self-assessment might feel challenging, but that's how you grow! Approach these questions with the Nigerian hustler spirit - persistent, creative, and determined. You've already learned so much about Boolean algebra. Trust the process, believe in yourself, and keep pushing forward! 🇳🇬🔥
            </p>
          </div>
        </div>
      `
    }
  ]
};
