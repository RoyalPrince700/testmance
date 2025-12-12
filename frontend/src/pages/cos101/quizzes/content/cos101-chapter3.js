// Quiz data for COS 101 Chapter 3: Boolean Algebra, Fundamentals of Truth Tables and Precedence Algebra
// Questions generated from the actual chapter content

export const cos101Chapter3Quiz = {
  title: 'COS 101 Chapter 3: Boolean Algebra, Fundamentals of Truth Tables and Precedence Algebra',
  description: 'Comprehensive test of Boolean algebra fundamentals, truth tables, logic gates, and digital circuit design',
  courseCode: 'COS 101',
  chapterTitle: 'Boolean Algebra, Fundamentals of Truth Tables and Precedence Algebra',
  passingScore: 70,
  timeLimit: 0, // no time limit
  questions: [
    {
      question: 'What is Boolean algebra?',
      options: [
        'A branch of mathematics dealing with continuous values',
        'The branch of algebra where variables have true/false values denoted by 1 and 0',
        'A type of polynomial algebra',
        'The study of complex numbers'
      ],
      correctAnswer: 1,
      explanation: 'Boolean algebra is the branch of algebra in which variables have values of true (1) and false (0), used to describe logic circuits and digital operations.',
      points: 1
    },
    {
      question: 'Who developed Boolean algebra?',
      options: [
        'Charles Babbage',
        'George Boole',
        'Ada Lovelace',
        'Alan Turing'
      ],
      correctAnswer: 1,
      explanation: 'Boolean algebra was developed by George Boole in the 1840s and is extensively used in computer operations.',
      points: 1
    },
    {
      question: 'What does the value 1 represent in Boolean algebra?',
      options: [
        'False',
        'Off',
        'True and On',
        'Undefined'
      ],
      correctAnswer: 2,
      explanation: 'In Boolean algebra, 1 represents "true" or "on", while 0 represents "false" or "off".',
      points: 1
    },
    {
      question: 'Which of the following is an example of a polynomial?',
      options: [
        'x² + 2x − 3',
        'x = 5',
        '2x > 3',
        'x² = 4'
      ],
      correctAnswer: 0,
      explanation: 'A polynomial involves addition, subtraction, multiplication, and non-negative integer exponents of terms with variables and coefficients, like x² + 2x − 3.',
      points: 1
    },
    {
      question: 'What is factorization in polynomial algebra?',
      options: [
        'Adding polynomials together',
        'Expressing a polynomial as a product of other polynomials',
        'Dividing polynomials',
        'Finding the derivative'
      ],
      correctAnswer: 1,
      explanation: 'Factorization involves expressing a given polynomial as a product of other polynomials that cannot be factored further, like x² + 2x − 3 = (x − 1)(x + 3).',
      points: 1
    },
    {
      question: 'What is a truth table used for?',
      options: [
        'Storing data in computers',
        'Computing functional values of logical expressions',
        'Creating polynomials',
        'Performing arithmetic operations'
      ],
      correctAnswer: 1,
      explanation: 'A truth table is a mathematical table used in logic to compute the functional values of logical expressions on each of their functional arguments.',
      points: 1
    },
    {
      question: 'What does NAND stand for?',
      options: [
        'Not AND',
        'Not OR',
        'New AND',
        'Negative AND'
      ],
      correctAnswer: 0,
      explanation: 'NAND stands for Not AND - it operates as an AND gate followed by a NOT gate.',
      points: 1
    },
    {
      question: 'What is the output of an XOR gate when both inputs are the same?',
      options: [
        'Always 1',
        'Always 0',
        'Depends on the inputs',
        'Undefined'
      ],
      correctAnswer: 1,
      explanation: 'The XOR gate produces 1 when inputs are different (0⊕1=1, 1⊕0=1) and 0 when inputs are the same (0⊕0=0, 1⊕1=0).',
      points: 1
    },
    {
      question: 'What is the output of an XNOR gate when both inputs are different?',
      options: [
        '1',
        '0',
        'Depends on the gate type',
        'Undefined'
      ],
      correctAnswer: 1,
      explanation: 'The XNOR gate produces 1 when inputs are the same and 0 when inputs are different. It is an XOR gate followed by an inverter.',
      points: 1
    },
    {
      question: 'Which of the following is NOT a basic logic gate?',
      options: [
        'AND',
        'OR',
        'NOT',
        'NAND'
      ],
      correctAnswer: 3,
      explanation: 'AND, OR, and NOT are the three basic logic gates. NAND, NOR, XOR, and XNOR are derived from combinations of the basic gates.',
      points: 1
    },
    {
      question: 'What is the result of the Boolean expression 1 AND 0?',
      options: [
        '1',
        '0',
        'Undefined',
        'Depends on context'
      ],
      correctAnswer: 1,
      explanation: '1 AND 0 = 0. The AND operation returns 1 only when both inputs are 1.',
      points: 1
    },
    {
      question: 'What is the result of the Boolean expression 1 OR 0?',
      options: [
        '0',
        '1',
        'Undefined',
        'Depends on context'
      ],
      correctAnswer: 1,
      explanation: '1 OR 0 = 1. The OR operation returns 1 if either or both inputs are 1.',
      points: 1
    },
    {
      question: 'What is the result of the Boolean expression NOT 1?',
      options: [
        '1',
        '0',
        'Undefined',
        'Depends on context'
      ],
      correctAnswer: 1,
      explanation: 'NOT 1 = 0. The NOT operation negates the input value.',
      points: 1
    },
    {
      question: 'How many columns does a truth table for a 2-variable Boolean function have?',
      options: [
        '2',
        '3',
        '4',
        '5'
      ],
      correctAnswer: 2,
      explanation: 'A truth table has one column for each input variable (2 columns) plus one column for the output (1 column), for a total of 3 columns.',
      points: 1
    },
    {
      question: 'What is the primary application of Boolean algebra?',
      options: [
        'Financial calculations',
        'Describing logic circuits and reducing digital circuit complexity',
        'Weather forecasting',
        'Medical diagnosis'
      ],
      correctAnswer: 1,
      explanation: 'Boolean algebra is used to describe logic circuits and reduce the complexity of digital circuits by simplifying logic circuits.',
      points: 1
    },
    {
      question: 'What does the symbol (·) represent in Boolean algebra?',
      options: [
        'OR operation',
        'NOT operation',
        'AND operation',
        'XOR operation'
      ],
      correctAnswer: 2,
      explanation: 'The period (·) or dot represents the AND operation in Boolean algebra.',
      points: 1
    },
    {
      question: 'What does the symbol (+) represent in Boolean algebra?',
      options: [
        'AND operation',
        'NOT operation',
        'OR operation',
        'XNOR operation'
      ],
      correctAnswer: 2,
      explanation: 'The plus sign (+) represents the OR operation in Boolean algebra.',
      points: 1
    },
    {
      question: 'What does the symbol (\') represent in Boolean algebra?',
      options: [
        'AND operation',
        'OR operation',
        'NOT operation',
        'XOR operation'
      ],
      correctAnswer: 2,
      explanation: 'The apostrophe (\') represents the NOT operation in Boolean algebra.',
      points: 1
    },
    {
      question: 'Which logic gate is also known as an inverter?',
      options: [
        'AND gate',
        'OR gate',
        'NOT gate',
        'XOR gate'
      ],
      correctAnswer: 2,
      explanation: 'The NOT gate is also known as an inverter because it reverses the logic state.',
      points: 1
    },
    {
      question: 'What is a combinatorial logic circuit?',
      options: [
        'A circuit that stores memory',
        'A circuit that performs complex operations through gate combinations',
        'A circuit that generates clock signals',
        'A circuit that converts analog to digital'
      ],
      correctAnswer: 1,
      explanation: 'Combinatorial logic circuits perform complex operations by combining several logic gates, found in digital integrated circuits.',
      points: 1
    },
    {
      question: 'What is the output of a NOR gate when both inputs are 1?',
      options: [
        '1',
        '0',
        'Undefined',
        'Depends on implementation'
      ],
      correctAnswer: 1,
      explanation: 'A NOR gate is an OR gate followed by a NOT gate. When both inputs are 1, OR gives 1, NOT gives 0.',
      points: 1
    },
    {
      question: 'What is the output of a NAND gate when both inputs are 0?',
      options: [
        '0',
        '1',
        'Undefined',
        'Depends on implementation'
      ],
      correctAnswer: 1,
      explanation: 'A NAND gate is an AND gate followed by a NOT gate. When both inputs are 0, AND gives 0, NOT gives 1.',
      points: 1
    },
    {
      question: 'Which Boolean operation is represented by the symbol (⊕)?',
      options: [
        'AND',
        'OR',
        'NOT',
        'XOR'
      ],
      correctAnswer: 3,
      explanation: 'The symbol (⊕) represents the XOR (exclusive OR) operation.',
      points: 1
    },
    {
      question: 'What is the Boolean expression for an XNOR gate?',
      options: [
        'A + B',
        'A · B',
        'A̅ · B + A · B̅',
        'A̅ + B̅'
      ],
      correctAnswer: 2,
      explanation: 'XNOR is equivalent to (NOT A AND B) OR (A AND NOT B), which is A̅·B + A·B̅.',
      points: 1
    },
    {
      question: 'How many basic logic gates are there?',
      options: [
        '1',
        '2',
        '3',
        '4'
      ],
      correctAnswer: 2,
      explanation: 'There are 3 basic logic gates: AND, OR, and NOT. Other gates like NAND, NOR, XOR are derived from these.',
      points: 1
    },
    {
      question: 'What is the result of A(B + D) when A=1, B=0, D=1?',
      options: [
        '0',
        '1',
        'Undefined',
        'Cannot be determined'
      ],
      correctAnswer: 1,
      explanation: 'A(B + D) = 1 · (0 + 1) = 1 · 1 = 1. First OR the terms in parentheses, then AND with A.',
      points: 1
    },
    {
      question: 'In Boolean algebra, what does the expression A + A equal?',
      options: [
        '0',
        'A',
        '2A',
        'A²'
      ],
      correctAnswer: 1,
      explanation: 'In Boolean algebra, A + A = A (absorption law) because ORing a value with itself gives the same value.',
      points: 1
    },
    {
      question: 'In Boolean algebra, what does the expression A · A equal?',
      options: [
        '0',
        'A',
        '2A',
        'A²'
      ],
      correctAnswer: 1,
      explanation: 'In Boolean algebra, A · A = A (idempotent law) because ANDing a value with itself gives the same value.',
      points: 1
    },
    {
      question: 'What is the complement of the AND operation?',
      options: [
        'OR',
        'NOT',
        'NAND',
        'XOR'
      ],
      correctAnswer: 2,
      explanation: 'NAND is the complement of AND - it performs AND followed by NOT.',
      points: 1
    },
    {
      question: 'What is the complement of the OR operation?',
      options: [
        'AND',
        'NOT',
        'NOR',
        'XOR'
      ],
      correctAnswer: 2,
      explanation: 'NOR is the complement of OR - it performs OR followed by NOT.',
      points: 1
    }
  ]
};
