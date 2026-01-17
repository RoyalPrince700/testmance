// Quiz data for GNS 311 Chapter 5: Applications of Blood Group Systems and DNA Finger Printings
// Questions generated from the actual chapter content

export const gns311Chapter5Quiz = {
  title: 'GNS 311 Chapter 5: Applications of Blood Group Systems and DNA Finger Printings',
  description: 'Test your understanding of blood group systems (ABO and Rhesus), DNA fingerprinting applications, and their medical and forensic uses based on Chapter 5 content',
  courseCode: 'GNS 311',
  chapterTitle: 'Applications of Blood Group Systems and DNA Finger Printings',
  passingScore: 70,
  timeLimit: 35, // minutes
  questions: [
    // EASY QUESTIONS (Basic Recall)
    {
      question: 'What is the primary function of blood group systems?',
      options: [
        'To ensure safe blood transfusions',
        'To determine personality traits',
        'To predict future health',
        'To identify family members'
      ],
      correctAnswer: 0,
      explanation: 'Blood group systems primarily ensure compatibility for blood transfusions, preventing immune reactions that could cause severe complications or death.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'Which two blood group systems are most clinically significant?',
      options: [
        'ABO and Rhesus systems',
        'A and B systems only',
        'O and AB systems',
        'Universal donor and recipient systems'
      ],
      correctAnswer: 0,
      explanation: 'The ABO and Rhesus (Rh) systems are the most clinically significant blood group classifications used for transfusions and medical procedures.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'What does Rh positive (+) mean?',
      options: [
        'The person has type A blood',
        'The person can donate to anyone',
        'The person has the D antigen on red blood cells',
        'The person has both A and B antigens'
      ],
      correctAnswer: 2,
      explanation: 'Rh positive means the person has the D antigen on their red blood cells, while Rh negative means they lack this antigen.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'What is DNA fingerprinting?',
      options: [
        'A method to identify blood types',
        'A way to predict personality',
        'A test for blood diseases only',
        'A laboratory technique using tandem repeats to create unique genetic profiles'
      ],
      correctAnswer: 3,
      explanation: 'DNA fingerprinting is a laboratory technique that analyzes specific regions of DNA, particularly tandem repeats, to create unique genetic profiles for identification.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'What are tandem repeats in DNA?',
      options: [
        'Short sequences that repeat multiple times, varying between individuals',
        'Long sequences that are identical in everyone',
        'Sequences that determine eye color',
        'Sequences that change with age'
      ],
      correctAnswer: 0,
      explanation: 'Tandem repeats are short DNA sequences (like CAG-CAG-CAG) that repeat multiple times. The number of repetitions varies between individuals, creating unique genetic markers.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Which blood type is known as the universal donor?',
      options: [
        'Type AB',
        'Type A',
        'Type O',
        'Type B'
      ],
      correctAnswer: 2,
      explanation: 'Type O blood is the universal donor because it lacks A and B antigens, so it can be given to people with any ABO blood type.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Which blood type is known as the universal recipient?',
      options: [
        'Type O',
        'Type A',
        'Type B',
        'Type AB'
      ],
      correctAnswer: 3,
      explanation: 'Type AB blood is the universal recipient because it lacks antibodies against A or B antigens, so it can receive blood from any ABO group.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'What causes hemolytic disease of the newborn?',
      options: [
        'Rh incompatibility between mother and fetus',
        'ABO incompatibility only',
        'DNA mutations',
        'Blood type A only'
      ],
      correctAnswer: 0,
      explanation: 'Hemolytic disease of the newborn is caused by Rh incompatibility when an Rh-negative mother carries an Rh-positive fetus, leading to antibodies that destroy fetal red blood cells.',
      points: 1,
      difficulty: 'easy'
    },

    // MEDIUM QUESTIONS (Understanding)
    {
      question: 'Why is blood transfusion compatibility critical?',
      options: [
        'It affects blood color only',
        'It changes blood pressure',
        'Incompatible blood triggers immune responses that can cause clotting, cell destruction, and organ damage',
        'It affects heart rate only'
      ],
      correctAnswer: 2,
      explanation: 'Incompatible blood transfusions trigger immune responses where the recipient\'s immune system attacks the donor blood as foreign, potentially causing severe complications including clotting, cell destruction, and organ damage.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'What is the significance of restriction endonucleases in DNA fingerprinting?',
      options: [
        'They cut DNA at specific recognition sequences',
        'They amplify DNA sequences',
        'They color DNA fragments',
        'They store DNA information'
      ],
      correctAnswer: 0,
      explanation: 'Restriction endonucleases are molecular "scissors" that cut DNA at specific nucleotide recognition sequences, creating fragments that can be analyzed for genetic differences.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does electrophoresis work in DNA fingerprinting?',
      options: [
        'It amplifies DNA',
        'It cuts DNA sequences',
        'It separates DNA fragments by size using an electric current',
        'It colors DNA fragments'
      ],
      correctAnswer: 2,
      explanation: 'Electrophoresis uses an electric current to separate DNA fragments by size as they move through an agarose gel, with smaller fragments moving faster than larger ones.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'What is Southern blotting in DNA fingerprinting?',
      options: [
        'A method to cut DNA',
        'A method to amplify DNA',
        'A method to color DNA',
        'A method to transfer DNA fragments from gel to nylon membrane'
      ],
      correctAnswer: 3,
      explanation: 'Southern blotting transfers separated DNA fragments from the agarose gel to a nylon or nitrocellulose membrane by capillary action or electric current, creating a permanent record.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'Why are blood groups important in organ transplants?',
      options: [
        'ABO antigens are present on all tissues and organs, affecting graft survival',
        'They determine personality compatibility',
        'They predict transplant success rate',
        'They change organ function'
      ],
      correctAnswer: 0,
      explanation: 'ABO antigens are expressed on all body tissues and organs, not just red blood cells. Incompatible ABO matching can cause hyperacute rejection of transplanted organs.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'What is the accuracy of modern DNA paternity testing?',
      options: [
        '50% accurate',
        '80% accurate',
        '99.99% accurate',
        '100% accurate'
      ],
      correctAnswer: 2,
      explanation: 'Modern DNA paternity testing has >99.99% accuracy, making it one of the most reliable methods for establishing biological parentage.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does DNA fingerprinting differ from traditional fingerprints?',
      options: [
        'DNA fingerprints can be altered by surgery',
        'DNA fingerprints are visible to the naked eye',
        'DNA fingerprints are unique to each individual and cannot be changed',
        'DNA fingerprints change with age'
      ],
      correctAnswer: 2,
      explanation: 'Unlike traditional fingerprints that can be altered by injury or surgery, DNA fingerprints are present in every cell and cannot be changed by any known treatment.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'What is the role of probes in DNA fingerprinting?',
      options: [
        'To bind to complementary DNA sequences and create visible patterns',
        'To cut DNA sequences',
        'To separate DNA fragments',
        'To amplify DNA'
      ],
      correctAnswer: 0,
      explanation: 'Radioactive or chemically labeled DNA probes bind (hybridize) to specific complementary sequences on the membrane, creating visible dark bands when detected.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why is Rh screening important for pregnant women?',
      options: [
        'It determines baby\'s gender',
        'It predicts birth weight',
        'It determines blood pressure',
        'It prevents hemolytic disease of the newborn through early detection and treatment'
      ],
      correctAnswer: 3,
      explanation: 'Rh screening identifies Rh-negative women who may develop antibodies against Rh-positive fetal blood, allowing preventive treatment with Rh immune globulin to prevent hemolytic disease.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'What makes DNA fingerprinting valuable for forensic investigations?',
      options: [
        'It requires large blood samples',
        'It takes months to complete',
        'It can be performed on tiny biological samples like hair roots or skin cells',
        'It only works on fresh samples'
      ],
      correctAnswer: 2,
      explanation: 'DNA fingerprinting requires only tiny amounts of biological material and can analyze samples from crime scenes including hair follicles, skin cells, semen, or even bone fragments from old cases.',
      points: 1,
      difficulty: 'difficult'
    },

    // DIFFICULT QUESTIONS (Analysis/Application)
    {
      question: 'In a paternity dispute, if a child has blood type AB and the mother has blood type O, what can be concluded about the alleged father who has blood type O?',
      options: [
        'He is definitely not the father because the child cannot have AB blood',
        'He is definitely the father',
        'He might be the father if he has the right DNA markers',
        'Blood type alone cannot determine paternity conclusively'
      ],
      correctAnswer: 0,
      explanation: 'A child cannot have blood group antigens that aren\'t present in at least one parent. If the mother has type O (no A or B antigens) and the child has AB, the father must provide both A and B antigens, which a type O father cannot do.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why does type O blood pose the greatest risk in transfusions if the wrong type is given?',
      options: [
        'Type O has the most antigens',
        'Type O blood clots faster',
        'Type O recipients have both anti-A and anti-B antibodies that can cause severe reactions',
        'Type O blood is thicker'
      ],
      correctAnswer: 2,
      explanation: 'Type O individuals have both anti-A and anti-B antibodies in their plasma. If they receive type A, B, or AB blood containing antigens, both antibody types will attack simultaneously, causing the most severe immune reactions.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'How does the concept of "tandem repeats" enable DNA fingerprinting discrimination between individuals?',
      options: [
        'All people have identical tandem repeats',
        'Tandem repeats determine physical appearance',
        'Tandem repeats are only found in identical twins',
        'The number of repetitions varies between individuals, creating unique patterns'
      ],
      correctAnswer: 3,
      explanation: 'Tandem repeats vary in length between individuals due to different numbers of repetitions (e.g., 10 repeats vs 15 repeats). This variation creates unique banding patterns on DNA fingerprints, allowing individual identification.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why is cross-matching essential before blood transfusions?',
      options: [
        'It confirms ABO and Rh compatibility and detects other antibodies to prevent reactions',
        'It determines blood color compatibility',
        'It measures blood pressure',
        'It counts blood cells'
      ],
      correctAnswer: 0,
      explanation: 'Cross-matching tests for ABO compatibility, Rh compatibility, and screens for other antibodies or incompatibilities that could cause transfusion reactions, ensuring patient safety.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'How does DNA fingerprinting contribute to medical diagnosis of inherited disorders?',
      options: [
        'It identifies genetic markers associated with diseases, enabling early diagnosis and carrier detection',
        'It directly cures genetic diseases',
        'It changes DNA sequences',
        'It only works for infectious diseases'
      ],
      correctAnswer: 0,
      explanation: 'DNA fingerprinting identifies genetic variations and markers associated with inherited disorders, enabling early diagnosis in newborns, carrier identification in families, and genetic screening programs.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why are identical twins the only individuals who share identical DNA fingerprints?',
      options: [
        'They have the same physical appearance',
        'They have similar but not identical DNA',
        'They develop from a single fertilized egg and have identical genomes',
        'DNA fingerprinting cannot distinguish identical twins'
      ],
      correctAnswer: 2,
      explanation: 'Identical twins develop from a single fertilized egg that splits, resulting in genetically identical individuals with the same DNA sequence and thus identical DNA fingerprints.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'How does Rh immune globulin (RhoGAM) prevent hemolytic disease of the newborn?',
      options: [
        'It changes the baby\'s blood type',
        'It cures the disease after it occurs',
        'It changes the mother\'s blood type',
        'It blocks the mother\'s immune system from producing anti-Rh antibodies'
      ],
      correctAnswer: 3,
      explanation: 'Rh immune globulin contains antibodies that bind to any fetal Rh-positive blood cells that enter the maternal circulation, preventing sensitization and antibody production that would attack subsequent Rh-positive fetuses.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'Why is DNA fingerprinting particularly valuable for mass disaster victim identification?',
      options: [
        'It can analyze degraded DNA from bone fragments, teeth, or tissue samples',
        'It requires intact bodies',
        'It only works on fresh blood samples',
        'It takes too long for emergency situations'
      ],
      correctAnswer: 0,
      explanation: 'DNA fingerprinting can analyze minute amounts of degraded biological material from mass disasters, including bone fragments, teeth, or tissue samples that are unsuitable for other identification methods.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the ABO system demonstrate genetic inheritance patterns?',
      options: [
        'Blood types are randomly assigned',
        'Only one parent determines blood type',
        'ABO blood types follow Mendelian inheritance with multiple alleles at one locus',
        'Blood types change with age'
      ],
      correctAnswer: 2,
      explanation: 'The ABO system demonstrates codominance and multiple alleles (A, B, O) at a single genetic locus. Type A and B are codominant, while O is recessive, following predictable inheritance patterns.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why does electrophoresis separate DNA fragments by size rather than sequence?',
      options: [
        'Smaller fragments move faster through the gel matrix than larger ones',
        'DNA sequence affects electrical charge',
        'DNA sequence determines migration speed',
        'All DNA fragments move at the same speed'
      ],
      correctAnswer: 0,
      explanation: 'In electrophoresis, DNA fragments migrate through the agarose gel matrix under electric current. Smaller fragments encounter less resistance and move faster than larger fragments, separating them by size.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does DNA fingerprinting support developing cures for genetic disorders?',
      options: [
        'It directly repairs damaged DNA',
        'It prevents genetic disorders from occurring',
        'It only diagnoses existing conditions',
        'It identifies disease-causing gene mutations and enables targeted gene therapy research'
      ],
      correctAnswer: 3,
      explanation: 'By comparing DNA patterns between affected and unaffected individuals, researchers identify specific gene mutations causing diseases, paving the way for gene therapy, personalized medicine, and targeted treatments.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why is the exclusion principle in blood group paternity testing more useful than inclusion?',
      options: [
        'Inclusion proves paternity definitively',
        'Blood groups are 100% accurate for inclusion',
        'Exclusion can definitively rule out individuals who cannot be the biological father',
        'Exclusion requires DNA testing'
      ],
      correctAnswer: 2,
      explanation: 'Blood group testing can definitively exclude individuals who cannot be the biological parent (if they lack required antigens), but cannot conclusively prove paternity since many people share common blood types.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the principle of base pairing (A-T, C-G) enable DNA probe hybridization?',
      options: [
        'It allows probes to bind specifically to target DNA sequences through complementary base pairing',
        'It prevents complementary binding',
        'It makes DNA unstable',
        'It prevents DNA analysis'
      ],
      correctAnswer: 0,
      explanation: 'DNA probes bind specifically to complementary target sequences through base pairing (A pairs with T, C pairs with G), enabling specific detection of target DNA regions in fingerprinting.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'Why is early Rh screening critical for pregnant women?',
      options: [
        'It predicts baby gender',
        'It determines due date',
        'It allows preventive treatment before sensitization occurs, preventing hemolytic disease',
        'It measures blood pressure'
      ],
      correctAnswer: 2,
      explanation: 'Early Rh screening identifies at-risk pregnancies, allowing preventive treatment with Rh immune globulin before maternal sensitization occurs, which is 100% effective at preventing hemolytic disease.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does DNA fingerprinting resolve cold cases in forensic investigations?',
      options: [
        'It requires eyewitness testimony',
        'It can analyze degraded biological evidence that other methods cannot process',
        'It only works on recent crimes',
        'It replaces traditional investigation methods'
      ],
      correctAnswer: 1,
      explanation: 'DNA fingerprinting can analyze minute amounts of degraded biological material from old crime scenes, including samples that have been stored for years, providing evidence when traditional methods fail.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Why do type AB individuals rarely experience transfusion reactions?',
      options: [
        'They have no blood',
        'They lack antibodies against A and B antigens, accepting all ABO blood types',
        'They have extra blood volume',
        'Their blood is thicker'
      ],
      correctAnswer: 1,
      explanation: 'Type AB individuals have no anti-A or anti-B antibodies in their plasma, so they cannot have immune reactions against A or B antigens in donor blood, making them universal recipients.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'How does the variability of tandem repeats contribute to DNA fingerprint uniqueness?',
      options: [
        'All humans have identical repeat numbers',
        'Different individuals have different numbers of repeats at multiple loci, creating unique combinations',
        'Repeats are identical across populations',
        'Repeats change daily'
      ],
      correctAnswer: 1,
      explanation: 'The number of tandem repeats varies between individuals at multiple genetic loci. When analyzed together, these variations create unique combinations as distinctive as traditional fingerprints.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why is ABO compatibility more critical than Rh compatibility for organ transplants?',
      options: [
        'Rh antigens are not on organs',
        'ABO antigens are expressed on all tissues and cause hyperacute rejection',
        'Rh compatibility is impossible to achieve',
        'ABO matching is not required'
      ],
      correctAnswer: 1,
      explanation: 'ABO blood group antigens are present on all body tissues and organs, not just red blood cells. ABO incompatibility triggers hyperacute rejection, making ABO matching more critical than Rh for transplant success.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does PCR (Polymerase Chain Reaction) enhance DNA fingerprinting sensitivity?',
      options: [
        'It degrades DNA samples',
        'It amplifies tiny DNA amounts to detectable levels for analysis',
        'It cuts DNA sequences',
        'It prevents DNA analysis'
      ],
      correctAnswer: 1,
      explanation: 'PCR exponentially amplifies minute DNA samples, making it possible to analyze DNA from single cells, hair roots, or degraded forensic samples that would otherwise be undetectable.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why do forensic scientists use multiple DNA probes in fingerprinting?',
      options: [
        'To make the process slower',
        'To create complex banding patterns that increase identification accuracy',
        'To reduce accuracy',
        'To simplify the analysis'
      ],
      correctAnswer: 1,
      explanation: 'Multiple probes (5-10+) bind to different tandem repeat regions, creating complex, unique banding patterns that make false matches statistically impossible and increase identification certainty.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does DNA fingerprinting contribute to wildlife conservation?',
      options: [
        'It determines animal personalities',
        'It identifies individual animals for population studies and anti-poaching efforts',
        'It changes animal behavior',
        'It only works on humans'
      ],
      correctAnswer: 1,
      explanation: 'DNA fingerprinting identifies individual animals, enabling accurate population counts, tracking migration patterns, and supporting anti-poaching efforts by providing evidence of illegal wildlife trade.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'Why is the statistical probability of DNA fingerprint matches calculated?',
      options: [
        'To make matching less accurate',
        'To quantify the rarity of a particular DNA profile in the population',
        'To slow down the analysis',
        'To complicate court proceedings'
      ],
      correctAnswer: 1,
      explanation: 'Statistical analysis calculates how rare a specific combination of tandem repeat patterns is in the population, providing quantitative evidence of identification certainty in forensic and paternity cases.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does DNA fingerprinting support bone marrow transplantation?',
      options: [
        'It transplants bones',
        'It matches HLA compatibility between donors and recipients',
        'It changes bone structure',
        'It only works for blood transfusions'
      ],
      correctAnswer: 1,
      explanation: 'DNA fingerprinting analyzes HLA (human leukocyte antigen) markers to ensure compatibility between bone marrow donors and recipients, preventing graft rejection and graft-versus-host disease.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why are restriction fragment length polymorphisms (RFLPs) valuable in DNA fingerprinting?',
      options: [
        'They are identical in all people',
        'They create variable DNA fragment sizes when cut by restriction enzymes',
        'They prevent DNA cutting',
        'They make DNA analysis impossible'
      ],
      correctAnswer: 1,
      explanation: 'RFLPs are variations in DNA sequence that affect restriction enzyme cutting sites, resulting in different fragment sizes between individuals and contributing to unique DNA fingerprint patterns.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does DNA fingerprinting assist in immigration verification?',
      options: [
        'It determines citizenship',
        'It confirms biological relationships for family reunification claims',
        'It predicts immigration status',
        'It changes immigration laws'
      ],
      correctAnswer: 1,
      explanation: 'DNA fingerprinting provides definitive evidence of biological parentage for immigration cases, confirming or excluding claimed family relationships for visa applications and refugee status.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why is DNA fingerprinting considered more reliable than traditional fingerprinting?',
      options: [
        'It requires larger samples',
        'It cannot be altered by surgery, chemicals, or environmental factors',
        'It is visible to the naked eye',
        'It changes with age'
      ],
      correctAnswer: 1,
      explanation: 'Unlike traditional fingerprints that can be altered or destroyed, DNA fingerprints are present in every cell of the body and cannot be changed by any known treatment, surgery, or environmental factor.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter describe the relationship between DNA fingerprinting and human uniqueness?',
      options: [
        'All humans are genetically identical',
        'While 99% of DNA is identical, the remaining 1% makes each person genetically unique',
        'DNA determines only physical appearance',
        'Genetic uniqueness is a myth'
      ],
      correctAnswer: 1,
      explanation: 'The chapter emphasizes that while 99% of human DNA is identical across all people, the remaining 1% contains unique variations that make each individual genetically distinct, like a biological barcode.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why does the chapter emphasize that science provides information but humans make decisions?',
      options: [
        'Scientists cannot be trusted',
        'Blood group and DNA information guides medical decisions but ethical considerations influence choices',
        'Science is always wrong',
        'Decisions are made randomly'
      ],
      correctAnswer: 1,
      explanation: 'Blood group compatibility and DNA evidence provide critical information for transfusions and identifications, but humans must make decisions considering ethical, legal, and social factors alongside scientific data.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter connect blood group knowledge to emergency medicine?',
      options: [
        'Blood groups are irrelevant in emergencies',
        'Type O negative is the universal donor for emergency situations when blood type is unknown',
        'All blood types work in emergencies',
        'Blood groups slow down emergency response'
      ],
      correctAnswer: 1,
      explanation: 'In emergency situations when the recipient\'s blood type is unknown, type O negative blood can be safely transfused because it lacks A, B, and Rh antigens that could trigger immune reactions.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why does the chapter describe DNA as "stable" for identification purposes?',
      options: [
        'DNA changes daily',
        'DNA cannot be altered by surgery, chemicals, or environmental factors',
        'DNA degrades immediately',
        'DNA is affected by diet'
      ],
      correctAnswer: 1,
      explanation: 'DNA fingerprinting is valuable for identification because DNA patterns remain stable throughout life and cannot be altered by any known treatment, surgery, chemicals, or environmental factors.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter explain the importance of understanding blood group inheritance?',
      options: [
        'It predicts future health perfectly',
        'It helps explain why children cannot have blood group antigens absent in both parents',
        'It determines personality traits',
        'It changes blood types'
      ],
      correctAnswer: 1,
      explanation: 'Understanding blood group inheritance explains the exclusion principle: children cannot have blood group antigens that aren\'t present in at least one biological parent, which is valuable for paternity testing.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why is the chapter\'s discussion of tandem repeats significant for genetic identification?',
      options: [
        'They are identical in everyone',
        'Their variable lengths create unique genetic markers for individual identification',
        'They determine physical appearance only',
        'They change with environmental factors'
      ],
      correctAnswer: 1,
      explanation: 'Tandem repeats vary in length between individuals due to different numbers of sequence repetitions, creating unique genetic markers that enable precise individual identification through DNA fingerprinting.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter connect restriction enzymes to forensic science?',
      options: [
        'They prevent DNA analysis',
        'They cut DNA at specific sequences, creating fragments that reveal genetic variations',
        'They amplify DNA sequences',
        'They color DNA samples'
      ],
      correctAnswer: 1,
      explanation: 'Restriction enzymes act as molecular scissors, cutting DNA at specific recognition sequences. Variations in DNA sequence between individuals create different fragment patterns, enabling forensic identification.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why does the chapter emphasize the role of scientific attitudes in DNA fingerprinting?',
      options: [
        'Scientists must be skeptical of unproven claims',
        'Scientific attitudes like skepticism and objectivity ensure reliable DNA analysis',
        'Attitudes are irrelevant to science',
        'Scientists should accept all claims'
      ],
      correctAnswer: 1,
      explanation: 'Scientific attitudes like skepticism (unwillingness to believe superstitions), objectivity, and open-mindedness ensure DNA fingerprinting results are reliable and not influenced by bias or unproven assumptions.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter illustrate the application of parsimonious explanations in blood group systems?',
      options: [
        'Blood groups have complex explanations',
        'Simple antigen-antibody interactions explain transfusion compatibility',
        'Blood groups require elaborate theories',
        'Explanations are unnecessarily complicated'
      ],
      correctAnswer: 1,
      explanation: 'The chapter demonstrates parsimonious (simple, elegant) scientific explanations through blood group systems, where straightforward antigen-antibody interactions explain complex phenomena like transfusion compatibility and inheritance.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why is the chapter\'s discussion of Rh disease significant for preventive medicine?',
      options: [
        'Rh disease cannot be prevented',
        'Early detection and Rh immune globulin prevent hemolytic disease of the newborn',
        'Rh disease is always fatal',
        'Prevention is impossible'
      ],
      correctAnswer: 1,
      explanation: 'The chapter emphasizes preventive medicine by showing how routine Rh screening and timely Rh immune globulin administration can prevent hemolytic disease of the newborn with nearly 100% effectiveness.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter demonstrate the human element in DNA fingerprinting applications?',
      options: [
        'DNA fingerprinting eliminates human judgment',
        'Human values and ethics guide decisions about DNA evidence use in courts and medicine',
        'Scientists make decisions without ethical considerations',
        'DNA evidence is applied automatically'
      ],
      correctAnswer: 1,
      explanation: 'While DNA fingerprinting provides objective genetic evidence, the chapter emphasizes that human values, ethics, and judgment guide how this evidence is used in legal, medical, and social decisions.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why does the chapter describe DNA fingerprinting as a "revolutionary advance"?',
      options: [
        'It slowed down scientific progress',
        'It transformed criminal investigations, paternity testing, and medical diagnostics',
        'It made science more complicated',
        'It replaced all other identification methods'
      ],
      correctAnswer: 1,
      explanation: 'DNA fingerprinting revolutionized multiple fields by providing unprecedented accuracy in identification, enabling solutions to previously unsolvable cases and advancing medical diagnostics with reliable genetic information.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'How does the chapter connect blood group systems to the scientific method?',
      options: [
        'Blood groups ignore the scientific method',
        'Blood group discovery and application demonstrate systematic observation, hypothesis testing, and practical application',
        'Blood groups are based on superstition',
        'Scientific method is irrelevant to blood groups'
      ],
      correctAnswer: 1,
      explanation: 'Blood group systems exemplify the scientific method through systematic observation of transfusion reactions, hypothesis formation about antigen-antibody interactions, testing through compatibility studies, and practical application in medicine.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why is the chapter\'s emphasis on "universality" important for DNA fingerprinting?',
      options: [
        'DNA only works for certain populations',
        'Scientific knowledge transcends cultural boundaries, making DNA evidence equally valid worldwide',
        'DNA evidence varies by culture',
        'Universality limits DNA applications'
      ],
      correctAnswer: 1,
      explanation: 'The principle of universality means scientific knowledge and DNA evidence transcend cultural and national boundaries, allowing DNA fingerprinting to be equally valid and applicable across all human populations worldwide.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'How does the chapter illustrate the relationship between science and technology in DNA fingerprinting?',
      options: [
        'Science and technology are separate',
        'Scientific understanding of DNA structure enabled technological development of fingerprinting methods',
        'Technology drove all scientific discoveries',
        'They developed independently'
      ],
      correctAnswer: 1,
      explanation: 'The chapter shows how scientific understanding of DNA structure, base pairing, and genetic variation provided the foundation for developing DNA fingerprinting technology and its applications in medicine and forensics.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'Why does the chapter discuss "positive approach to failure" in the context of DNA fingerprinting?',
      options: [
        'DNA fingerprinting never fails',
        'Failed analyses provide valuable data for improving techniques and understanding limitations',
        'Failure means the end of research',
        'Scientists should avoid failures'
      ],
      correctAnswer: 1,
      explanation: 'A positive approach to failure recognizes that unsuccessful DNA analyses or unexpected results provide valuable learning opportunities, helping improve techniques and advance understanding of genetic analysis limitations.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter demonstrate the integration of Bacon\'s and Descartes\' approaches in DNA fingerprinting?',
      options: [
        'DNA fingerprinting uses only experimentation',
        'It combines systematic observation (Bacon) with mathematical analysis of genetic patterns (Descartes)',
        'It rejects both approaches',
        'It uses only mathematical reasoning'
      ],
      correctAnswer: 1,
      explanation: 'DNA fingerprinting integrates Bacon\'s inductive experimental approach (systematic data collection and analysis) with Descartes\' deductive mathematical reasoning (analyzing genetic patterns and probabilities), creating powerful identification technology.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'What is the significance of DNA fingerprinting in establishing biological relationships?',
      options: [
        'It can only confirm relationships, never exclude them',
        'It provides definitive evidence by comparing tandem repeat patterns inherited from parents',
        'It works only for identical twins',
        'It requires extensive family medical history'
      ],
      correctAnswer: 1,
      explanation: 'DNA fingerprinting establishes biological relationships by analyzing tandem repeat patterns. Children inherit half their DNA from each biological parent, creating identifiable patterns that can confirm or exclude parentage with >99.99% accuracy.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter relate blood group systems to the concept of "human discrimination" in immunity?',
      options: [
        'Blood groups make humans vulnerable to all diseases',
        'The immune system discriminates between "self" and "foreign" substances using blood group antigens',
        'Blood groups prevent immune responses',
        'All humans have identical immune discrimination'
      ],
      correctAnswer: 1,
      explanation: 'Blood group systems exemplify how the immune system discriminates between self and foreign substances. Incompatible blood transfusions trigger immune responses because the body recognizes foreign blood group antigens as invaders.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'Why is the chapter\'s emphasis on "orderliness in nature" important for DNA fingerprinting?',
      options: [
        'Nature is chaotic and unpredictable',
        'DNA structure and base pairing rules provide consistent, predictable patterns for analysis',
        'DNA changes randomly without patterns',
        'Natural laws do not apply to DNA'
      ],
      correctAnswer: 1,
      explanation: 'DNA fingerprinting assumes orderliness in nature - the consistent rules of base pairing (A-T, C-G) and genetic inheritance enable reliable analysis and identification based on predictable biological patterns.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter connect DNA fingerprinting to the modern scientific enterprise?',
      options: [
        'It represents purely theoretical science',
        'It combines human curiosity, systematic methods, and technological application for practical benefits',
        'It rejects human participation in science',
        'It focuses only on abstract knowledge'
      ],
      correctAnswer: 1,
      explanation: 'DNA fingerprinting exemplifies the modern scientific enterprise by combining human curiosity and motivation with systematic laboratory methods and advanced technology, resulting in practical applications that benefit society.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'What role does "cooperativity" play in blood group and DNA research according to the chapter?',
      options: [
        'Scientists work in isolation',
        'Scientific societies and peer review ensure reliable blood group and DNA findings',
        'Research is conducted competitively without collaboration',
        'Individual scientists verify their own work'
      ],
      correctAnswer: 1,
      explanation: 'The chapter emphasizes cooperativity in science - scientific societies, peer review, and collaborative verification ensure the reliability of blood group classifications and DNA fingerprinting techniques through shared knowledge and critical evaluation.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter illustrate the relationship between science and technology through blood transfusions?',
      options: [
        'Science and technology are separate fields',
        'Scientific understanding of blood groups enabled the technology of safe blood transfusions',
        'Technology drove all blood group discoveries',
        'Blood transfusions existed before scientific understanding'
      ],
      correctAnswer: 1,
      explanation: 'The chapter demonstrates how scientific understanding of blood group antigens and compatibility provided the foundation for blood transfusion technology, showing how science enables and guides technological development.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'Why is the chapter\'s discussion of "universality" significant for global DNA fingerprinting applications?',
      options: [
        'DNA fingerprinting varies by culture',
        'Scientific methods and DNA principles are universally applicable across all human populations',
        'DNA evidence is only valid in certain countries',
        'Cultural differences affect DNA analysis'
      ],
      correctAnswer: 1,
      explanation: 'The principle of universality means DNA fingerprinting methods and genetic principles are consistent across all human populations, allowing international collaboration and consistent application of DNA evidence worldwide.',
      points: 1,
      difficulty: 'easy'
    },
    {
      question: 'How does the chapter relate blood group inheritance to the concept of genetic variation?',
      options: [
        'All humans have identical blood types',
        'Multiple alleles (A, B, O) at the ABO locus create genetic diversity essential for population survival',
        'Blood types are environmentally determined',
        'Genetic variation is harmful'
      ],
      correctAnswer: 1,
      explanation: 'The ABO system demonstrates beneficial genetic variation - multiple alleles create diverse blood types that provide population-level advantages and demonstrate how genetic diversity contributes to species survival and adaptation.',
      points: 1,
      difficulty: 'medium'
    },
    {
      question: 'What is the chapter\'s perspective on the limitations of DNA fingerprinting?',
      options: [
        'DNA fingerprinting is perfect and infallible',
        'It provides powerful evidence but requires careful interpretation considering contamination and statistical probabilities',
        'DNA evidence should be accepted without question',
        'Limitations make DNA fingerprinting useless'
      ],
      correctAnswer: 1,
      explanation: 'The chapter acknowledges DNA fingerprinting\'s power while recognizing limitations - contamination risks, degradation issues, and the need for statistical interpretation require careful scientific practice and expert analysis.',
      points: 1,
      difficulty: 'easy'
    }
  ]
};
