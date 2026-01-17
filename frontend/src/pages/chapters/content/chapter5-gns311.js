// Chapter 5: Applications of Blood Group Systems and DNA Finger Printings
// GNS 311 - Module 5

export const chapter5Content = {
  title: "Applications of Blood Group Systems and DNA Finger Printings",
  author: "ARISE, R.O., KURANGA, S.A., and OGUNJEMILUA, S.B.",
  department: "Department of Biochemistry, Faculty of Life Sciences, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "intro",
      title: "🩸 Welcome to Blood Groups & DNA!",
      subtitle: "Introduction",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Welcome! 🔬 Every human is unique, and this uniqueness lies in our DNA and blood types.
            These biological markers not only define who we are but also have incredible applications
            in medicine, forensics, and beyond. From ensuring safe blood transfusions to solving
            crimes and establishing family relationships, understanding these systems opens up
            a world of possibilities!
          </p>
          <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400 p-4 my-4">
            <p class="font-semibold text-teal-900 dark:text-teal-100 mb-2">💡 Did you know?</p>
            <p class="text-teal-800 dark:text-teal-200">
              Your DNA fingerprint is unique to you alone—like a biological barcode that can't be altered
              by any known treatment. While 99% of human DNA is identical across all people, that remaining
              1% makes each person completely unique!
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            This chapter explores the fascinating world of blood group systems and DNA fingerprinting.
            You'll learn about the ABO and Rhesus systems, how blood transfusions work, and how DNA
            technology is revolutionizing medicine, forensics, and personal identification. Get ready
            to discover the science behind what makes each of us uniquely human! 🧬
          </p>
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
              <span>State the essence and uniqueness of human DNA</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Understand the principles underlying blood group and DNA fingerprinting applications</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Describe the most important blood type classifications (ABO and Rhesus systems)</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Define blood transfusion and explain compatibility requirements</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Explain the laboratory procedures and applications of DNA fingerprinting</span>
            </li>
            <li class="flex items-start">
              <span class="text-teal-500 mr-3 font-bold">✓</span>
              <span>Understand the role of tandem repeats in genetic identification</span>
            </li>
          </ul>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-intro",
      title: "🩸 Unit 1: Blood Group Systems",
      subtitle: "Introduction to Blood Groups",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Blood groups are one of the most important discoveries in medical science. They determine
            compatibility for blood transfusions, organ transplants, and even play a role in paternity
            testing. This unit explores the ABO and Rhesus systems that classify human blood types.
          </p>
          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 dark:border-red-400 p-4 my-4">
            <p class="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Critical Knowledge</p>
            <p class="text-red-800 dark:text-red-200">
              Understanding blood group compatibility can literally be a matter of life and death.
              Incorrect blood transfusions can cause severe reactions, organ failure, and even death.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit1-blood-systems",
      title: "🔬 Blood Group Classifications",
      subtitle: "Blood Group Systems Overview",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Blood groups are classified based on specific molecules called antigens present on the surface
            of red blood cells. The two most important systems for describing human blood types are ABO
            and Rhesus factor (Rh factor). While there are 46 known blood group systems in humans, ABO
            and Rh are the most clinically significant.
          </p>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">📊 Key Classifications</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <h5 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">ABO System</h5>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Classifies blood into 4 groups: A, B, AB, O</p>
                <p class="text-xs text-gray-600">Based on A and B antigens on red blood cells</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <h5 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Rhesus System</h5>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Classifies as Rh positive (+) or negative (-)</p>
                <p class="text-xs text-gray-600">Based on D antigen presence</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🔍 Blood Transfusion Basics</p>
            <p class="text-yellow-800 dark:text-yellow-200 mb-3">
              Blood transfusion involves replacing lost or destroyed blood intravenously. The transfused
              blood must match the recipient's blood type, or the immune system will attack it as a foreign
              substance, potentially causing severe complications.
            </p>
            <p class="text-yellow-800 dark:text-yellow-200">
              The human body is highly discriminatory—it only accepts substances with structures similar
              to its own. Incompatible blood groups trigger immune responses that can lead to clotting,
              cell destruction, and organ damage.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "unit1-abo-system",
      title: "🅰️🅱️ The ABO Blood Group System",
      subtitle: "ABO System Explained",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The ABO system is the most important blood group classification system. It divides blood into
            four main groups (A, B, AB, O) based on the presence or absence of A and B antigens on red
            blood cells, and corresponding antibodies in the plasma.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🅰️</span>
                Blood Group A
              </h4>
              <div class="bg-white dark:bg-gray-700 p-4 rounded mb-3">
                <strong class="text-red-800 dark:text-red-200">Antigens:</strong> A antigen on red blood cells<br/>
                <strong class="text-red-800 dark:text-red-200">Antibodies:</strong> Anti-B antibodies in plasma<br/>
                <strong class="text-red-800 dark:text-red-200">Compatibility:</strong> Can receive from A and O; can donate to A and AB
              </div>
              <p class="text-red-800 dark:text-red-200 text-sm">
                Individuals with blood group A can safely receive blood from type A or O donors, but will
                reject blood containing B antigens.
              </p>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🅱️</span>
                Blood Group B
              </h4>
              <div class="bg-white dark:bg-gray-700 p-4 rounded mb-3">
                <strong class="text-blue-800 dark:text-blue-200">Antigens:</strong> B antigen on red blood cells<br/>
                <strong class="text-blue-800 dark:text-blue-200">Antibodies:</strong> Anti-A antibodies in plasma<br/>
                <strong class="text-blue-800 dark:text-blue-200">Compatibility:</strong> Can receive from B and O; can donate to B and AB
              </div>
              <p class="text-blue-800 dark:text-blue-200 text-sm">
                Blood group B individuals have B antigens on their red cells and anti-A antibodies in plasma.
              </p>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🆎</span>
                Blood Group AB
              </h4>
              <div class="bg-white dark:bg-gray-700 p-4 rounded mb-3">
                <strong class="text-purple-800 dark:text-purple-200">Antigens:</strong> Both A and B antigens on red blood cells<br/>
                <strong class="text-purple-800 dark:text-purple-200">Antibodies:</strong> No anti-A or anti-B antibodies in plasma<br/>
                <strong class="text-purple-800 dark:text-purple-200">Compatibility:</strong> Can receive from all groups; can donate only to AB
              </div>
              <p class="text-purple-800 dark:text-purple-200 text-sm">
                <strong>Universal Recipients:</strong> AB individuals can receive blood from any ABO group
                because they lack antibodies against A or B antigens.
              </p>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🅾️</span>
                Blood Group O
              </h4>
              <div class="bg-white dark:bg-gray-700 p-4 rounded mb-3">
                <strong class="text-green-800 dark:text-green-200">Antigens:</strong> No A or B antigens on red blood cells<br/>
                <strong class="text-green-800 dark:text-green-200">Antibodies:</strong> Both anti-A and anti-B antibodies in plasma<br/>
                <strong class="text-green-800 dark:text-green-200">Compatibility:</strong> Can receive only from O; can donate to all groups
              </div>
              <p class="text-green-800 dark:text-green-200 text-sm">
                <strong>Universal Donors:</strong> O individuals can donate to any ABO group because their
                red cells lack A and B antigens that would trigger immune responses.
              </p>
            </div>
          </div>

          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 dark:border-indigo-400">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-3">📋 ABO Compatibility Chart</h4>
            <div class="overflow-x-auto">
              <table class="w-full bg-white dark:bg-gray-700 rounded text-sm">
                <thead>
                  <tr class="bg-indigo-100">
                    <th class="p-2 text-left">Recipient</th>
                    <th class="p-2 text-center">Can Receive From</th>
                    <th class="p-2 text-center">Can Donate To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t">
                    <td class="p-2 font-semibold text-red-600">A</td>
                    <td class="p-2 text-center">A, O</td>
                    <td class="p-2 text-center">A, AB</td>
                  </tr>
                  <tr class="border-t">
                    <td class="p-2 font-semibold text-blue-600">B</td>
                    <td class="p-2 text-center">B, O</td>
                    <td class="p-2 text-center">B, AB</td>
                  </tr>
                  <tr class="border-t">
                    <td class="p-2 font-semibold text-purple-600">AB</td>
                    <td class="p-2 text-center">A, B, AB, O</td>
                    <td class="p-2 text-center">AB</td>
                  </tr>
                  <tr class="border-t">
                    <td class="p-2 font-semibold text-green-600">O</td>
                    <td class="p-2 text-center">O</td>
                    <td class="p-2 text-center">A, B, AB, O</td>
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
      id: "unit1-rhesus-system",
      title: "⚕️ The Rhesus Blood Group System",
      subtitle: "Rhesus Factor (Rh) System",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            The Rhesus (Rh) blood group system is the second most important classification system after ABO.
            It classifies blood as Rh positive (+) or Rh negative (-) based on the presence of the D antigen.
            Unlike ABO, Rh incompatibility primarily affects pregnancy and can cause serious complications.
          </p>

          <div class="bg-pink-50 p-6 rounded-lg my-4">
            <h4 class="font-bold text-pink-900 mb-3">🔬 Rh System Basics</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-pink-800">Rh Positive (Rh+):</strong> Contains D antigen on red blood cells<br/>
                <span class="text-sm text-gray-600">~85% of people are Rh positive</span>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-pink-800">Rh Negative (Rh-):</strong> Lacks D antigen on red blood cells<br/>
                <span class="text-sm text-gray-600">~15% of people are Rh negative</span>
              </div>
            </div>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 dark:border-red-400 p-4 my-4">
            <p class="font-semibold text-red-900 dark:text-red-100 mb-2">🚨 Rh Disease (Hemolytic Disease of the Newborn)</p>
            <p class="text-red-800 dark:text-red-200 mb-3">
              Rh incompatibility occurs when an Rh-negative mother carries an Rh-positive fetus. During
              pregnancy or delivery, fetal blood can mix with maternal blood, sensitizing the mother's
              immune system to produce antibodies against the Rh-positive blood.
            </p>
            <p class="text-red-800 dark:text-red-200">
              In subsequent pregnancies with Rh-positive fetuses, these antibodies can cross the placenta
              and destroy fetal red blood cells, causing anemia, jaundice, brain damage, or death.
            </p>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
            <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">💉 Prevention and Treatment</h4>
            <div class="space-y-3 text-green-800 dark:text-green-200">
              <p><strong>Rh Immune Globulin (RhoGAM):</strong> Prevents sensitization by blocking mother's immune response</p>
              <p><strong>Timing:</strong> Administered around 28 weeks gestation and within 72 hours after delivery</p>
              <p><strong>Effectiveness:</strong> Nearly 100% effective in preventing Rh disease</p>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Rh Compatibility in Transfusions</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Rh-negative individuals should receive Rh-negative blood when possible. However, Rh-positive
              blood can be given to Rh-negative patients in emergency situations, though this may sensitize
              them for future transfusions or pregnancies.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit1-applications",
      title: "🏥 Applications of Blood Groups",
      subtitle: "Uses of ABO and Rhesus Blood Groups",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Blood group systems have numerous critical applications in medicine and beyond. Understanding
            these applications helps explain why blood typing is so important in healthcare.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">💉</span>
                Blood Transfusion
              </h4>
              <p class="text-red-800 dark:text-red-200 mb-3">
                Blood transfusion is the intravenous replacement of lost or destroyed blood. The transfused
                blood must match the recipient's ABO and Rh type to prevent life-threatening immune reactions.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-red-800 dark:text-red-200">Critical Matching Requirements:</strong>
                <ul class="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• ABO compatibility prevents immediate hemolytic reactions</li>
                  <li>• Rh compatibility prevents delayed sensitization</li>
                  <li>• Cross-matching confirms compatibility before transfusion</li>
                  <li>• Emergency situations may allow some flexibility (Rh+ to Rh-)</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🫀</span>
                Organ Transplants
              </h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3">
                ABO antigens are present throughout body tissues, making blood type matching crucial for
                organ transplant success. While Rh matching is less critical for most transplants, ABO
                compatibility significantly affects graft survival.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-blue-800 dark:text-blue-200">Why ABO Matching Matters:</strong>
                <ul class="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• ABO antigens are expressed on all tissues and organs</li>
                  <li>• Incompatible transplants trigger hyperacute rejection</li>
                  <li>• Kidney transplants prefer ABO-matched donors</li>
                  <li>• Some protocols allow ABO-incompatible transplants with special preparation</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">👨‍👩‍👧‍👦</span>
                Paternity Testing
              </h4>
              <p class="text-purple-800 dark:text-purple-200 mb-3">
                Blood group analysis can provide evidence in paternity disputes. While it cannot prove
                paternity conclusively, it can definitively exclude individuals who cannot be the biological father.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded mb-3">
                <strong class="text-purple-800 dark:text-purple-200">Exclusion Principle:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300">A child cannot have a blood group antigen that isn't present in at least one parent.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-purple-800 dark:text-purple-200">Example:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300">If a child has blood group A, but both the mother and alleged father have blood group O, the alleged father can be excluded as the biological parent.</p>
              </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">👶</span>
                Prenatal Care & Newborn Health
              </h4>
              <p class="text-green-800 dark:text-green-200 mb-3">
                Rh factor determination is critical for pregnant women and newborn care. Rh incompatibility
                can cause hemolytic disease of the newborn, making early detection and prevention essential.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-green-800 dark:text-green-200">Rh Screening Protocol:</strong>
                <ul class="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• All pregnant women tested for Rh status</li>
                  <li>• Rh-negative women monitored for sensitization</li>
                  <li>• Rh immune globulin administered preventively</li>
                  <li>• Newborns of Rh-negative mothers screened for jaundice/anemia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 6
    },
    {
      id: "unit2-intro",
      title: "🧬 Unit 2: DNA Fingerprinting",
      subtitle: "Introduction to DNA Fingerprinting",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            DNA fingerprinting represents one of the most revolutionary advances in forensic science and
            medicine. Like conventional fingerprints, DNA fingerprints are unique to each individual and
            can be used to identify people with unprecedented accuracy. This technology has transformed
            criminal investigations, paternity testing, and medical diagnostics.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400 p-4 my-4">
            <p class="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔬 DNA as Genetic Blueprint</p>
            <p class="text-blue-800 dark:text-blue-200">
              DNA (deoxyribonucleic acid) contains the genetic instructions for all living organisms.
              While 99% of human DNA is identical across all people, the remaining 1% contains unique
              variations that make each person genetically distinct.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 2
    },
    {
      id: "unit2-dna-basics",
      title: "🧬 Understanding DNA Fingerprinting",
      subtitle: "DNA Fingerprinting Fundamentals",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            DNA fingerprinting is a laboratory technique that analyzes specific regions of DNA to identify
            individuals. Unlike traditional fingerprints that can be altered, DNA fingerprints are present
            in every cell of the body and cannot be changed by any known treatment.
          </p>

          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-100 mb-3">🧬 DNA Structure</h4>
            <p class="text-indigo-800 dark:text-indigo-200 mb-3">
              DNA can be visualized as a "zipper" where each "tooth" is one of four nucleotides:
              Adenine (A), Cytosine (C), Guanine (G), or Thymine (T). The sequence of these nucleotides
              determines genetic information.
            </p>
            <div class="bg-white dark:bg-gray-700 p-4 rounded">
              <strong class="text-indigo-800 dark:text-indigo-200">Base Pairing:</strong><br/>
              A always pairs with T<br/>
              C always pairs with G<br/>
              <em class="text-sm text-gray-600">This complementary pairing makes DNA replication and analysis possible.</em>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
            <h4 class="font-bold text-green-900 dark:text-green-100 mb-3">🎯 Why DNA is Unique</h4>
            <div class="space-y-2 text-green-800 dark:text-green-200">
              <p><strong>Universal:</strong> Same DNA in every cell of your body</p>
              <p><strong>Unique:</strong> No two people (except identical twins) have identical DNA</p>
              <p><strong>Stable:</strong> Cannot be altered by surgery, chemicals, or environmental factors</p>
              <p><strong>Inherited:</strong> Half from each biological parent</p>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🔬 Tandem Repeats</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              DNA fingerprinting focuses on repetitive DNA sequences called "tandem repeats."
              These are short sequences (like CAG-CAG-CAG) that repeat multiple times. The number
              of repetitions varies between individuals, creating unique genetic markers.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 5
    },
    {
      id: "unit2-laboratory-procedure",
      title: "🔬 Laboratory Steps for DNA Fingerprinting",
      subtitle: "DNA Fingerprinting Procedure",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            DNA fingerprinting is a sophisticated laboratory process that requires precision and
            specialized equipment. The procedure involves four main steps that convert biological
            samples into identifiable genetic profiles.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">1️⃣</span>
                DNA Isolation
              </h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3">
                The first step involves extracting DNA from biological samples. Only tiny amounts
                of material are needed—a single hair root, drop of blood, or skin cell is sufficient.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-blue-800 dark:text-blue-200">Sample Sources:</strong>
                <ul class="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• Blood or saliva</li>
                  <li>• Hair follicles (not cut hair)</li>
                  <li>• Skin cells or tissue samples</li>
                  <li>• Semen or other bodily fluids</li>
                  <li>• Bone fragments or teeth (for old samples)</li>
                </ul>
              </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">2️⃣</span>
                Cutting, Sizing, and Sorting
              </h4>
              <p class="text-green-800 dark:text-green-200 mb-3">
                Special enzymes called restriction endonucleases cut the DNA at specific recognition
                sequences. The resulting DNA fragments are then separated by size using gel electrophoresis.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-green-800 dark:text-green-200">Restriction Enzymes:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">Molecular "scissors" that cut DNA at specific nucleotide sequences</p>
                <strong class="text-green-800 dark:text-green-200 mt-2">Electrophoresis:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">Electric current separates DNA fragments by size through agarose gel</p>
              </div>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">3️⃣</span>
                Transfer to Nylon Membrane
              </h4>
              <p class="text-purple-800 dark:text-purple-200 mb-3">
                The separated DNA fragments are transferred from the gel to a nylon or nitrocellulose
                membrane through a process called Southern blotting. This creates a permanent record
                of the DNA fragment pattern.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-purple-800 dark:text-purple-200">Southern Blotting:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">DNA fragments are transferred to a solid membrane by capillary action or electric current</p>
              </div>
            </div>

            <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">4️⃣</span>
                Probing and Detection
              </h4>
              <p class="text-red-800 dark:text-red-200 mb-3">
                Radioactive or chemically labeled DNA probes bind to specific complementary sequences
                on the membrane. The probes hybridize with target DNA sequences, creating a visible
                pattern when detected.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-red-800 dark:text-red-200">Hybridization:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">Complementary DNA strands bind together (A-T, C-G)</p>
                <strong class="text-red-800 dark:text-red-200 mt-2">Detection:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">Multiple probes (5-10+) create unique banding patterns</p>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 dark:border-indigo-400 dark:border-indigo-400 p-4 my-4">
            <p class="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">🎯 Final Result</p>
            <p class="text-indigo-800 dark:text-indigo-200">
              The DNA fingerprint appears as a series of dark bands on an X-ray film or digital image,
              similar to a barcode. Each individual's pattern is unique, allowing for precise identification
              and relationship determination.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 7
    },
    {
      id: "unit2-applications",
      title: "🔍 Applications of DNA Fingerprinting",
      subtitle: "DNA Fingerprinting Applications",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            DNA fingerprinting has revolutionized multiple fields, from medicine to criminal justice.
            Its applications continue to expand as technology advances and costs decrease.
          </p>

          <div class="space-y-6 my-6">
            <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400">
              <h4 class="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🏥</span>
                Medical Diagnosis of Inherited Disorders
              </h4>
              <p class="text-red-800 dark:text-red-200 mb-3">
                DNA fingerprinting enables early diagnosis of genetic disorders in newborns and helps
                identify carriers of inherited diseases. This allows for early intervention and family planning.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-red-800 dark:text-red-200">Common Disorders Detected:</strong>
                <ul class="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• Cystic fibrosis</li>
                  <li>• Sickle cell anemia</li>
                  <li>• Hemophilia</li>
                  <li>• Huntington's disease</li>
                  <li>• Down syndrome</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
              <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🧪</span>
                Developing Cures for Genetic Disorders
              </h4>
              <p class="text-blue-800 dark:text-blue-200 mb-3">
                By comparing DNA patterns between affected and unaffected individuals, researchers
                can identify genetic markers associated with diseases, paving the way for gene therapy
                and targeted treatments.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-blue-800 dark:text-blue-200">Research Applications:</strong>
                <ul class="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• Gene mapping and localization</li>
                  <li>• Identification of disease-causing mutations</li>
                  <li>• Development of personalized medicine</li>
                  <li>• Creation of genetic screening programs</li>
                </ul>
              </div>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
              <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">👨‍👩‍👧‍👦</span>
                Paternity and Maternity Testing
              </h4>
              <p class="text-purple-800 dark:text-purple-200 mb-3">
                DNA fingerprinting provides definitive evidence of biological parentage. By comparing
                tandem repeat patterns between parents and children, relationships can be established
                or excluded with near 100% accuracy.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded mb-3">
                <strong class="text-purple-800 dark:text-purple-200">How It Works:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300">Children inherit half their DNA from each biological parent. Tandem repeat patterns can be used to confirm or exclude parentage.</p>
              </div>
              <p class="text-purple-800 dark:text-purple-200 text-sm">
                <strong>Accuracy:</strong> Modern DNA testing has >99.99% accuracy for paternity determination.
              </p>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
              <h4 class="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🚔</span>
                Criminal Identification and Forensics
              </h4>
              <p class="text-green-800 dark:text-green-200 mb-3">
                DNA evidence from crime scenes can be compared with suspects to establish guilt or
                innocence. This technology has revolutionized criminal investigations and helped
                exonerate wrongfully convicted individuals.
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-green-800 dark:text-green-200">Forensic Applications:</strong>
                <ul class="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• Blood, semen, or saliva analysis</li>
                  <li>• Hair follicle examination</li>
                  <li>• Touch DNA from skin cells</li>
                  <li>• Cold case resolution</li>
                  <li>• Mass disaster victim identification</li>
                </ul>
              </div>
            </div>

            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400">
              <h4 class="font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center">
                <span class="text-2xl mr-2">🆔</span>
                Personal Identification
              </h4>
              <p class="text-yellow-800 dark:text-yellow-200 mb-3">
                DNA fingerprinting provides the most reliable method for personal identification.
                Unlike fingerprints or photos that can be altered, DNA patterns are permanent and
                unique to each individual (except identical twins).
              </p>
              <div class="bg-white dark:bg-gray-700 p-4 rounded">
                <strong class="text-yellow-800 dark:text-yellow-200">Identification Uses:</strong>
                <ul class="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>• Immigration and refugee verification</li>
                  <li>• Missing persons identification</li>
                  <li>• Military personnel identification</li>
                  <li>• Twin differentiation</li>
                  <li>• Organ donor verification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 8
    },
    {
      id: "summary",
      title: "📝 Chapter Summary",
      subtitle: "What We've Learned About Blood Groups & DNA",
      content: `
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">
            Congratulations! 🏆 You've completed Chapter 5 on Applications of Blood Group Systems and DNA
            Finger Printing. These technologies form the foundation of modern medicine and forensics.
          </p>

          <div class="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg my-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4 text-xl">🔑 Key Takeaways:</h4>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-teal-700 dark:text-teal-300 mb-2">1. Blood Group Systems</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">ABO (A, B, AB, O) and Rhesus (Rh+, Rh-) systems determine blood compatibility for transfusions, transplants, and pregnancy care.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-blue-700 dark:text-blue-300 mb-2">2. Blood Transfusion Safety</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Proper matching prevents immune reactions. O- is the universal donor; AB+ is the universal recipient.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-green-700 dark:text-green-300 mb-2">3. Rh Incompatibility</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Can cause hemolytic disease of the newborn; preventable with Rh immune globulin treatment.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-purple-700 dark:text-purple-300 mb-2">4. DNA Fingerprinting Technology</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Uses tandem repeats and restriction enzymes to create unique genetic profiles for identification.</p>
              </div>
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-bold text-red-700 dark:text-red-300 mb-2">5. DNA Applications</h5>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Revolutionizes medicine, forensics, paternity testing, and personal identification with >99.99% accuracy.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400 p-4 my-4">
            <p class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🔬 Impact on Society</p>
            <p class="text-yellow-800 dark:text-yellow-200">
              Blood group knowledge and DNA fingerprinting have transformed healthcare, criminal justice,
              and our understanding of human relationships. These technologies save lives through safe
              transfusions, prevent genetic diseases, solve crimes, and establish biological relationships
              with unprecedented accuracy. As technology advances, their applications will continue to expand! 🧬⚕️
            </p>
          </div>
        </div>
      `,
      estimatedTime: 4
    },
    {
      id: "self-assessment",
      title: "❓ Self-Assessment Questions",
      subtitle: "Test Your Understanding",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-4">📝 Self-Study Questions</h4>

            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">1. What are the most important classifications to describe blood types in humans?</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">The ABO system (classifying blood as A, B, AB, or O) and the Rhesus factor system (Rh positive or negative) are the two most important classifications for describing human blood types.</p>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">2. Define blood transfusion.</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">Blood transfusion is the intravenous replacement of lost or destroyed blood. The blood given must be of the correct type that matches the patient's blood group to prevent immune rejection.</p>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">3. Differentiate between "blood group" and "blood type".</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">"Blood group" specifically refers to a person's ABO status, while "blood type" refers to both ABO and Rh factors combined.</p>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-red-500 dark:border-red-400 dark:border-red-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">4. Describe the ABO and the Rhesus factor (Rh factor) systems.</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">The ABO system classifies blood into four groups (A, B, AB, O) based on A and B antigens on red blood cells. The Rhesus system classifies blood as Rh positive or negative based on the presence of the D antigen.</p>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 dark:border-yellow-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">5. Explain the various classes of the ABO system.</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">Blood group A has A antigens and anti-B antibodies; Blood group B has B antigens and anti-A antibodies; Blood group AB has both A and B antigens with no antibodies (universal recipient); Blood group O has no antigens but both anti-A and anti-B antibodies (universal donor).</p>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 dark:border-indigo-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">6. Differentiate between the various blood groups.</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">Each blood group differs by antigens on red blood cells and antibodies in plasma: A (A antigen, anti-B antibody), B (B antigen, anti-A antibody), AB (both antigens, no antibodies), O (no antigens, both antibodies).</p>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-pink-500">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">7. State the importance of the Rhesus factor in females of or below childbearing age.</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">Rh-negative females can develop antibodies against Rh-positive fetal blood during pregnancy, potentially causing hemolytic disease of the newborn in subsequent pregnancies. Rh immune globulin prevents this sensitization.</p>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-teal-500 dark:border-teal-400 dark:border-teal-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">8. Enumerate the various uses of ABO and Rhesus Blood Group.</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">Uses include: blood transfusions (matching prevents rejection), organ transplants (ABO antigens affect graft survival), paternity testing (can exclude non-biological fathers), and prenatal care (Rh screening prevents hemolytic disease).</p>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-orange-500">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">9. Explain the importance of ABO system in organ transplant.</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">ABO antigens are present on all tissues and organs. Incompatible ABO matching can cause hyperacute rejection of transplanted organs, making ABO compatibility crucial for transplant success.</p>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-brown-500">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">10. Classify blood on the basis of blood transfusion.</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">Based on transfusion compatibility: A can receive A/O, donate to A/AB; B can receive B/O, donate to B/AB; AB can receive all types, donate only to AB; O can receive only O, donate to all types. Rh compatibility is also required.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 10
    },
    {
      id: "tma",
      title: "📋 Tutor Marked Assignments",
      subtitle: "Practical Exercises",
      content: `
        <div class="space-y-6">
          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h4 class="font-bold text-green-900 dark:text-green-100 mb-4">🎯 Tutor Marked Assignments</h4>

            <div class="space-y-6">
              <div class="bg-white dark:bg-gray-700 p-5 rounded-lg border border-green-200 dark:border-green-800">
                <h5 class="font-bold text-green-900 dark:text-green-100 mb-3">Question 1</h5>
                <p class="text-gray-800 mb-3">Give two differences between the blood groups AB and O.</p>
                <div class="space-y-3 ml-4">
                  <div>
                    <strong>Antigens:</strong>
                    <p class="text-sm text-gray-600">AB has both A and B antigens on red blood cells; O has neither A nor B antigens.</p>
                  </div>
                  <div>
                    <strong>Antibodies:</strong>
                    <p class="text-sm text-gray-600">AB has no anti-A or anti-B antibodies in plasma; O has both anti-A and anti-B antibodies.</p>
                  </div>
                  <div>
                    <strong>Compatibility:</strong>
                    <p class="text-sm text-gray-600">AB is universal recipient (can receive from all groups); O is universal donor (can donate to all groups).</p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-700 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 class="font-bold text-blue-900 dark:text-blue-100 mb-3">Question 2</h5>
                <p class="text-gray-800 mb-3">What is the similarity between blood groups AB and B?</p>
                <div class="ml-4">
                  <p class="text-gray-800">Both blood groups AB and B can receive blood from blood group B donors (AB can receive from all groups including B, while B can only receive from B and O).</p>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-700 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 class="font-bold text-purple-900 dark:text-purple-100 mb-3">Question 3</h5>
                <p class="text-gray-800 mb-3">In what order is the commonness of the blood types?</p>
                <div class="ml-4">
                  <p class="text-gray-800">The most common blood types in order are: O+ (most common, ~37%), A+ (~36%), B+ (~9%), O- (~7%), A- (~6%), AB+ (~3%), B- (~2%), AB- (least common, ~1%).</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-6">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-4">🧬 DNA Fingerprinting Questions</h4>

            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 dark:border-blue-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">1. State 3 importance of the DNA code.</p>
                <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                  <li>• Contains genetic information that determines physical characteristics</li>
                  <li>• Enables inheritance of traits from parents to offspring</li>
                  <li>• Provides unique identification through genetic variations</li>
                </ul>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500 dark:border-green-400 dark:border-green-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">2. What are the laboratory steps required for a successful DNA fingerprinting?</p>
                <ol class="text-sm text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li><strong>DNA Isolation:</strong> Extract DNA from biological samples</li>
                  <li><strong>Cutting, Sizing and Sorting:</strong> Use restriction enzymes to cut DNA, separate fragments by electrophoresis</li>
                  <li><strong>Transfer to Nylon:</strong> Move DNA fragments to nylon membrane via Southern blotting</li>
                  <li><strong>Probing:</strong> Add radioactive/colored probes to create visible banding patterns</li>
                </ol>
              </div>

              <div class="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 dark:border-purple-400">
                <p class="font-semibold text-gray-900 dark:text-white mb-2">3. Give 4 uses of DNA fingerprinting.</p>
                <ol class="text-sm text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li><strong>Medical Diagnosis:</strong> Early detection of inherited disorders</li>
                  <li><strong>Developing Cures:</strong> Identifying disease-causing genes for treatment</li>
                  <li><strong>Paternity/Maternity Testing:</strong> Establishing biological relationships</li>
                  <li><strong>Criminal Forensics:</strong> Identifying suspects from crime scene evidence</li>
                  <li><strong>Personal Identification:</strong> Immigration, missing persons, military ID</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 15
    }
  ]
};
