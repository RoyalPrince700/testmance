// Quiz data for ENT 211 Chapter 9: Introduction to Electronic Commerce
// Comprehensive quiz with 50 difficult questions covering all major sections

export const ent211Chapter9Quiz = {
  title: 'ENT 211 Chapter 9: Introduction to Electronic Commerce',
  description: 'Advanced assessment of electronic commerce concepts, business models, payment systems, and security requirements',
  courseCode: 'ENT 211',
  chapterTitle: 'Introduction to Electronic Commerce',
  passingScore: 70,
  timeLimit: 0, // no time limit
  questions: [
    // Section 9.1: Definition and History (Questions 1-5)
    {
      question: 'According to the textbook definition, which of the following best describes the core infrastructure required for electronic commerce?',
      options: [
        'Telecommunication networks and physical delivery systems',
        'Information technology infrastructures and internet connectivity',
        'Traditional banking systems and financial institutions',
        'Government regulatory frameworks and legal documentation'
      ],
      correctAnswer: 1,
      explanation: 'Electronic commerce requires information technology infrastructures, specifically computer networks and internet connectivity, to enable trading of goods and services.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What was the primary technological precursor to modern e-commerce that involved electronic exchange of business documents between organizations?',
      options: [
        'World Wide Web development',
        'Electronic Data Interchange (EDI)',
        'Mobile payment applications',
        'Social media platforms'
      ],
      correctAnswer: 1,
      explanation: 'Electronic Data Interchange (EDI), developed in 1948-1949, was the technological foundation that enabled electronic business document exchange before the internet era.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which critical component of the textbook definition of e-commerce distinguishes it from traditional commerce involving information technology?',
      options: [
        'Physical delivery of goods',
        'Face-to-face negotiations',
        'Trading of goods and services',
        'Information technology infrastructures'
      ],
      correctAnswer: 3,
      explanation: 'The textbook specifically mentions "using information technology infrastructures" as the key differentiator that makes commerce electronic.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'In the historical development of e-commerce, what major technological advancement transformed EDI from a limited system to global electronic commerce?',
      options: [
        'Development of credit cards',
        'Invention of personal computers',
        'Creation of the World Wide Web and internet',
        'Establishment of international trade laws'
      ],
      correctAnswer: 2,
      explanation: 'The World Wide Web and widespread internet access in the late 1990s transformed EDI from a limited inter-organizational system to global e-commerce accessible to businesses and consumers worldwide.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which e-commerce pioneer company demonstrated how online bookstores could scale to become the world\'s largest retailer?',
      options: [
        'eBay',
        'Alibaba',
        'Amazon',
        'Walmart'
      ],
      correctAnswer: 2,
      explanation: 'Amazon started as an online bookstore in the late 1990s and evolved into the world\'s largest retailer, showcasing the scalability potential of e-commerce business models.',
      points: 1,
      difficulty: 'difficult'
    },

    // Section 9.2: Features of E-Commerce (Questions 6-9)
    {
      question: 'Which feature of e-commerce enables Nigerian entrepreneurs to sell palm oil directly to international customers without establishing physical presence abroad?',
      options: [
        'Cost reduction through digital operations',
        'Ubiquity allowing 24/7 operations',
        'Global reach eliminating geographical barriers',
        'Standardization of transaction processes'
      ],
      correctAnswer: 2,
      explanation: 'Global reach allows businesses to access international markets without physical presence, enabling a Nigerian palm oil seller to reach customers worldwide through digital platforms.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'In the context of e-commerce features, which characteristic ensures that customers in different time zones can complete transactions simultaneously?',
      options: [
        'Global reach',
        'Ubiquity',
        'Cost reduction',
        'Standardization'
      ],
      correctAnswer: 1,
      explanation: 'Ubiquity means being available anytime, anywhere, enabling customers in Lagos, London, and Los Angeles to shop simultaneously during their respective business hours.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which e-commerce feature directly contributes to environmental benefits by reducing transportation needs and associated carbon emissions?',
      options: [
        'Ubiquity enabling instant access',
        'Global reach expanding markets',
        'Cost reduction through digital delivery',
        'Standardization of processes'
      ],
      correctAnswer: 2,
      explanation: 'Cost reduction through digital goods delivery and reduced physical transportation directly contributes to environmental benefits by lowering carbon emissions from shipping and travel.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What does the standardization feature of e-commerce ensure across different countries and cultures?',
      options: [
        'Uniform pricing strategies',
        'Consistent transaction processes and protocols',
        'Same product availability everywhere',
        'Identical customer service approaches'
      ],
      correctAnswer: 1,
      explanation: 'Standardization ensures consistent transaction processes and protocols worldwide, allowing seamless cross-border e-commerce despite different local customs and regulations.',
      points: 1,
      difficulty: 'difficult'
    },

    // Section 9.2.1: Advantages to Business Organizations (Questions 10-14)
    {
      question: 'Which business advantage of e-commerce allows companies to serve customers across multiple time zones without additional staffing costs?',
      options: [
        'Worldwide reach',
        'Efficient supply chain management',
        '24/7 operations capability',
        'Better customer service channels'
      ],
      correctAnswer: 2,
      explanation: '24/7 operations allow businesses to serve customers in different time zones (e.g., Nigeria, UK, USA) without needing round-the-clock staff, as automated systems handle transactions.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'How does e-commerce enable productivity boosts in business operations compared to traditional commerce?',
      options: [
        'By reducing the need for physical store maintenance',
        'Through automation of routine tasks and digital document processing',
        'By eliminating the need for customer service staff',
        'Through reduction of transportation logistics'
      ],
      correctAnswer: 1,
      explanation: 'Automation of routine tasks (order processing, invoicing, inventory management) and digital document processing frees staff for creative work like product development and strategic planning.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which advantage allows Nigerian businesses to compete directly with international corporations in global markets?',
      options: [
        'Paperless transactions',
        'Better customer service',
        'Worldwide reach through digital platforms',
        '24/7 operations'
      ],
      correctAnswer: 2,
      explanation: 'Worldwide reach enables small Nigerian businesses to access global markets on equal footing with large corporations, leveling the playing field through digital platforms.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What specific benefit does efficient supply chain management provide in e-commerce operations?',
      options: [
        'Reduced storage space requirements',
        'Digital document processing and instant information flow',
        'Lower transportation costs',
        'Automated customer ordering systems'
      ],
      correctAnswer: 1,
      explanation: 'Efficient supply chain management through digital document processing enables instant flow of orders, invoices, and shipping information between suppliers, businesses, and customers.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'How does e-commerce achieve paperless transactions as a business advantage?',
      options: [
        'By eliminating all physical documentation',
        'Through digital processing of orders, invoices, and contracts',
        'By removing the need for printed receipts',
        'Through electronic fund transfers only'
      ],
      correctAnswer: 1,
      explanation: 'Paperless transactions involve digital processing of all business documents - orders, invoices, contracts, receipts, and records - eliminating printing, filing, and storage costs.',
      points: 1,
      difficulty: 'difficult'
    },

    // Section 9.2.2: Advantages to Consumers (Questions 15-19)
    {
      question: 'Which consumer advantage of e-commerce allows customers to make informed purchasing decisions by comparing products from multiple international suppliers?',
      options: [
        'Easy access from home',
        '24/7 support availability',
        'Global product choices and price comparisons',
        'Customer reviews and ratings access'
      ],
      correctAnswer: 2,
      explanation: 'Global product choices enable consumers to compare products, features, and prices from suppliers worldwide, making informed decisions beyond local market limitations.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'How do customer reviews contribute to the consumer advantages of e-commerce?',
      options: [
        'They provide entertainment content',
        'They offer social proof and reduce purchase risk',
        'They enable direct communication with sellers',
        'They provide technical product specifications'
      ],
      correctAnswer: 1,
      explanation: 'Customer reviews provide social proof from other buyers\' experiences, helping consumers avoid poor quality products and make informed purchasing decisions.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which consumer benefit directly results from e-commerce\'s ability to connect buyers with sellers globally, creating competitive pricing?',
      options: [
        'Detailed product information access',
        'Always available customer support',
        'Price discounts through market competition',
        'Convenient home delivery options'
      ],
      correctAnswer: 2,
      explanation: 'Global market access creates competition among sellers, driving down prices and providing consumers with better deals and discounts compared to local monopoly situations.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What specific advantage does 24/7 customer support provide in e-commerce that traditional businesses cannot match?',
      options: [
        'Personal face-to-face interactions',
        'Immediate response to queries anytime',
        'Physical product demonstrations',
        'In-store return processing'
      ],
      correctAnswer: 1,
      explanation: '24/7 customer support provides immediate responses to queries regardless of time zones or business hours, which traditional businesses cannot offer without 24/7 staffing.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'How does detailed product information access benefit e-commerce consumers compared to traditional shopping?',
      options: [
        'It provides physical product inspection',
        'It offers comprehensive specifications, reviews, and usage guides',
        'It enables negotiation with sellers',
        'It allows product testing before purchase'
      ],
      correctAnswer: 1,
      explanation: 'Detailed product information includes specifications, multiple photos, user guides, technical details, and reviews, enabling better-informed decisions than physical store browsing.',
      points: 1,
      difficulty: 'difficult'
    },

    // Section 9.2.3: Advantages to Society (Questions 20-23)
    {
      question: 'Which societal benefit of e-commerce helps reduce traffic congestion in major Nigerian cities like Lagos and Abuja?',
      options: [
        'Affordable access to essential goods',
        'Rural area service accessibility',
        'Reduced physical transportation needs',
        'Improved government service delivery'
      ],
      correctAnswer: 2,
      explanation: 'E-commerce reduces the need for physical travel to shops and markets, decreasing traffic congestion and associated accidents in crowded Nigerian cities.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'How does e-commerce contribute to bridging the urban-rural divide in developing countries like Nigeria?',
      options: [
        'By providing government subsidies to rural areas',
        'Through internet access bringing services and products to remote communities',
        'By establishing physical stores in rural areas',
        'Through improved road infrastructure'
      ],
      correctAnswer: 1,
      explanation: 'Internet-enabled e-commerce brings modern products, healthcare, education, and financial services to rural areas that previously lacked access due to geographical isolation.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which societal advantage enables people in underserved communities to access affordable healthcare and educational materials?',
      options: [
        'Reduced traffic congestion',
        'Rural access to modern services and products',
        'Government efficiency improvements',
        'Environmental pollution reduction'
      ],
      correctAnswer: 1,
      explanation: 'Rural access brings affordable healthcare supplies, educational materials, and modern products to communities that previously had limited access due to transportation costs and geographical barriers.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'How does e-commerce improve government service delivery to citizens?',
      options: [
        'By reducing the number of government offices',
        'Through online tax filing, license renewals, and permit applications',
        'By eliminating the need for government employees',
        'Through automated decision-making systems'
      ],
      correctAnswer: 1,
      explanation: 'E-commerce enables online government services like tax filing, passport renewal, business registration, and license renewals, reducing corruption and improving efficiency.',
      points: 1,
      difficulty: 'difficult'
    },

    // Section 9.2.4: Disadvantages of E-Commerce (Questions 24-26)
    {
      question: 'Which major disadvantage of e-commerce poses the greatest barrier for small businesses in developing countries?',
      options: [
        'Complex EDI implementation requirements',
        'High setup costs for secure online platforms',
        'Limited access to international markets',
        'Reduced customer interaction opportunities'
      ],
      correctAnswer: 1,
      explanation: 'High setup costs for secure websites, payment systems, and cybersecurity measures create significant barriers for small businesses in developing countries with limited capital.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What is the primary security disadvantage that threatens the entire e-commerce ecosystem?',
      options: [
        'Slow transaction processing speeds',
        'Cyber attacks, data breaches, and unauthorized access',
        'Limited payment method options',
        'Complex user interface designs'
      ],
      correctAnswer: 1,
      explanation: 'Security threats including cyber attacks, data breaches, viruses, malware, and unauthorized access pose the greatest risk to e-commerce, potentially destroying businesses and eroding customer trust.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which disadvantage specifically affects businesses that rely heavily on Electronic Data Interchange systems?',
      options: [
        'High internet bandwidth requirements',
        'EDI complexity and implementation challenges for SMEs',
        'Limited global communication capabilities',
        'Reduced data storage capacities'
      ],
      correctAnswer: 1,
      explanation: 'EDI systems are complex and expensive to implement, particularly challenging for small and medium enterprises (SMEs) who lack the technical expertise and financial resources.',
      points: 1,
      difficulty: 'difficult'
    },

    // Section 9.3: Business Models (Questions 27-34)
    {
      question: 'In B2B e-commerce, which activity involves companies purchasing goods and services electronically from other businesses?',
      options: [
        'E-procurement and supply chain management',
        'Consumer product advertising',
        'Retail sales operations',
        'Individual customer support'
      ],
      correctAnswer: 0,
      explanation: 'B2B involves e-procurement (electronic purchasing), supply chain management, bulk order processing, and business-to-business transactions between companies.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which statement correctly distinguishes B2C from B2B e-commerce models?',
      options: [
        'B2C involves government transactions while B2B involves individual consumers',
        'B2C eliminates intermediaries while B2B always involves wholesalers',
        'B2C involves direct sales to individual consumers without intermediaries',
        'B2C focuses on bulk transactions while B2B involves retail sales'
      ],
      correctAnswer: 2,
      explanation: 'B2C involves direct transactions between businesses and individual consumers without wholesale intermediaries, while B2B involves business-to-business transactions.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'In the C2B e-commerce model, what unique power do consumers hold compared to traditional business models?',
      options: [
        'They set prices and select winning business proposals',
        'They control product manufacturing processes',
        'They determine business operating hours',
        'They manage company financial records'
      ],
      correctAnswer: 0,
      explanation: 'In C2B, consumers post their service/product requirements and businesses bid competitively, with consumers having the power to set terms and select winning proposals.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which Nigerian e-commerce platform exemplifies the C2C model where individuals sell to other individuals?',
      options: [
        'Konga (B2C marketplace)',
        'Jiji (classified marketplace for individual sellers)',
        'Alibaba Nigeria (B2B platform)',
        'Payporte (food delivery service)'
      ],
      correctAnswer: 1,
      explanation: 'Jiji is a C2C platform where individuals sell cars, electronics, and personal items directly to other consumers, unlike B2C platforms like Konga.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'In government e-commerce models, which type involves businesses selling services to government agencies?',
      options: [
        'G2B (Government-to-Business)',
        'G2C (Government-to-Citizen)',
        'B2G (Business-to-Government)',
        'C2G (Consumer-to-Government)'
      ],
      correctAnswer: 2,
      explanation: 'B2G involves businesses selling to government agencies through contracts, tenders, and procurement processes, such as companies bidding for government construction projects.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which government e-commerce model enables citizens to access services like online tax filing and passport renewal?',
      options: [
        'B2G (Business-to-Government)',
        'G2B (Government-to-Business)',
        'G2C (Government-to-Citizen)',
        'C2B (Consumer-to-Business)'
      ],
      correctAnswer: 2,
      explanation: 'G2C provides government services directly to citizens, including online tax filing, passport applications, license renewals, and other public services.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What distinguishes C2C e-commerce from other models in terms of seller requirements?',
      options: [
        'Requires formal business registration',
        'Needs expensive marketing campaigns',
        'No formal business license required for individuals',
        'Demands large inventory investments'
      ],
      correctAnswer: 2,
      explanation: 'C2C allows ordinary individuals to become sellers without formal business licenses, registration, or significant startup costs, unlike formal business models.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which e-commerce business model involves the reverse flow of traditional commerce where consumers set the terms?',
      options: [
        'B2B (Business-to-Business)',
        'B2C (Business-to-Consumer)',
        'C2B (Consumer-to-Business)',
        'C2C (Consumer-to-Consumer)'
      ],
      correctAnswer: 2,
      explanation: 'C2B reverses traditional commerce by giving consumers the power to set requirements, post projects, and select from competing business proposals.',
      points: 1,
      difficulty: 'difficult'
    },

    // Section 9.4: Payment Systems (Questions 35-42)
    {
      question: 'Which electronic payment system allows direct bank-to-bank money transfers without physical cash movement?',
      options: [
        'Credit cards',
        'E-cash systems',
        'Electronic Fund Transfer (EFT)',
        'Smart cards'
      ],
      correctAnswer: 2,
      explanation: 'EFT enables direct electronic transfers between bank accounts through secure banking networks, eliminating the need for physical cash or check movement.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What is the key operational difference between credit cards and debit cards in e-commerce transactions?',
      options: [
        'Credit cards use magnetic strips while debit cards use chips',
        'Credit cards allow spending borrowed money while debit cards require available funds',
        'Credit cards work online only while debit cards work offline',
        'Credit cards are issued by banks while debit cards are issued by retailers'
      ],
      correctAnswer: 1,
      explanation: 'Credit cards allow spending money that will be paid later (borrowed), while debit cards deduct money immediately from the account, requiring sufficient funds.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which payment system mimics physical currency by storing value electronically in digital wallets?',
      options: [
        'Credit cards',
        'Electronic Fund Transfer',
        'E-cash systems',
        'Debit cards'
      ],
      correctAnswer: 2,
      explanation: 'E-cash stores monetary value electronically in digital wallets or smart cards, functioning like physical cash but in digital form with digital signatures for security.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What security mechanism protects e-cash transactions from unauthorized duplication or alteration?',
      options: [
        'Physical card signatures',
        'Digital signatures and encryption',
        'Bank account verification only',
        'PIN numbers'
      ],
      correctAnswer: 1,
      explanation: 'E-cash uses digital signatures and cryptographic methods to ensure transaction authenticity and prevent duplication or unauthorized alteration of electronic money.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which payment card type contains an embedded microprocessor chip rather than just a magnetic strip?',
      options: [
        'Credit cards',
        'Debit cards',
        'Smart cards',
        'ATM cards'
      ],
      correctAnswer: 2,
      explanation: 'Smart cards contain embedded microprocessor chips that can store data, process information, and perform multiple functions beyond simple magnetic strip cards.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What happens when attempting a debit card transaction without sufficient account funds?',
      options: [
        'The bank lends additional money',
        'Interest charges are automatically applied',
        'The transaction is declined',
        'A portion of the purchase is processed'
      ],
      correctAnswer: 2,
      explanation: 'Debit cards require sufficient funds in the linked account; without adequate balance, the transaction is declined, unlike credit cards which allow borrowing.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which smart card function enables it to serve as an electronic identity document?',
      options: [
        'Payment processing only',
        'Data storage and access control capabilities',
        'Internet connectivity',
        'Physical cash dispensing'
      ],
      correctAnswer: 1,
      explanation: 'Smart cards can store personal data and control access to buildings, computers, and services, functioning as electronic IDs alongside payment capabilities.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'How does EFT contribute to e-commerce security compared to traditional payment methods?',
      options: [
        'It eliminates the need for banks',
        'It provides instant, verifiable transaction confirmation',
        'It allows anonymous transactions',
        'It reduces transaction fees to zero'
      ],
      correctAnswer: 1,
      explanation: 'EFT provides instant electronic verification and confirmation of fund transfers between bank accounts, ensuring secure and traceable transactions.',
      points: 1,
      difficulty: 'difficult'
    },

    // Section 9.5: Platforms and Companies (Questions 43-45)
    {
      question: 'Which Nigerian e-commerce company specializes in food delivery and competes with international services like Uber Eats?',
      options: [
        'Konga',
        'Jiji',
        'Payporte',
        'Jumia'
      ],
      correctAnswer: 2,
      explanation: 'Payporte specializes in food delivery services, competing with platforms like Uber Eats and DoorDash in the Nigerian market.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What distinguishes Shopify from other e-commerce platforms in terms of business model?',
      options: [
        'It only serves Nigerian businesses',
        'It provides platform-as-a-service for entrepreneurs to build their own stores',
        'It manufactures its own products',
        'It only operates physical stores'
      ],
      correctAnswer: 1,
      explanation: 'Shopify is a platform-as-a-service company that provides tools and infrastructure for entrepreneurs to build and manage their own e-commerce stores.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which Nigerian e-commerce success story demonstrates how local platforms can achieve international-level operations?',
      options: [
        'Amazon Nigeria',
        'Jumia\'s pan-African expansion',
        'Alibaba\'s Nigerian operations',
        'eBay\'s African marketplace'
      ],
      correctAnswer: 1,
      explanation: 'Jumia started as a Nigerian company and expanded across Africa, demonstrating how local e-commerce platforms can achieve international-scale operations.',
      points: 1,
      difficulty: 'difficult'
    },

    // Section 9.6.1: Security Threats and Requirements (Questions 46-48)
    {
      question: 'Which security threat involves malicious software that replicates itself and spreads through networks, potentially destroying data?',
      options: [
        'Confidentiality breaches',
        'Integrity violations',
        'Malicious codes (viruses, worms)',
        'Availability attacks'
      ],
      correctAnswer: 2,
      explanation: 'Malicious codes include viruses, worms, and trojans that replicate themselves, spread through networks, and can destroy data or disrupt system operations.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What does the "availability" security requirement protect against in e-commerce systems?',
      options: [
        'Data theft by hackers',
        'Unauthorized data modifications',
        'Service denial and system unavailability',
        'Identity theft'
      ],
      correctAnswer: 2,
      explanation: 'Availability ensures systems remain accessible and operational, protecting against denial-of-service attacks that render web servers unreachable to legitimate users.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'Which security requirement ensures that users cannot deny actions they performed in e-commerce transactions?',
      options: [
        'Authentication',
        'Authorization',
        'Confidentiality',
        'Non-repudiation'
      ],
      correctAnswer: 3,
      explanation: 'Non-repudiation prevents users from denying their actions, ensuring digital signatures and transaction logs provide undeniable proof of participation.',
      points: 1,
      difficulty: 'difficult'
    },

    // Section 9.6.2: Cryptography (Questions 49-50)
    {
      question: 'Which cryptography type uses a public key for encryption and a private key for decryption, enabling secure key exchange?',
      options: [
        'Symmetric cryptography',
        'Basic cryptography',
        'Asymmetric cryptography',
        'Hash cryptography'
      ],
      correctAnswer: 2,
      explanation: 'Asymmetric cryptography uses public/private key pairs, allowing secure key exchange over insecure channels and enabling digital signatures for authentication.',
      points: 1,
      difficulty: 'difficult'
    },
    {
      question: 'What is the primary advantage of asymmetric cryptography over symmetric cryptography in e-commerce?',
      options: [
        'Faster processing speeds',
        'Secure key exchange without prior shared secrets',
        'Smaller key sizes',
        'Lower computational requirements'
      ],
      correctAnswer: 1,
      explanation: 'Asymmetric cryptography enables secure key exchange between parties who have never met, without requiring prior shared secret keys, which is essential for e-commerce.',
      points: 1,
      difficulty: 'difficult'
    },

  ],
};