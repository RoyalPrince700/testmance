import LegalDocument from './LegalDocument';

const sections = [
  {
    id: 'who',
    title: 'Who runs TestMancer',
    blocks: [
      {
        type: 'p',
        text: 'TestMancer is an exam-preparation platform for undergraduates, operated in Nigeria. In these terms, “we” and “us” mean TestMancer.',
      },
      {
        type: 'p',
        text: 'These terms cover the website, your account, courses, quizzes, continuous assessment, exams, gems, results, and the leaderboard.',
      },
    ],
  },
  {
    id: 'agreement',
    title: 'The agreement',
    blocks: [
      {
        type: 'p',
        text: 'Creating an account, or choosing Continue with Google, means you accept these terms and the privacy policy. If you do not accept them, do not use TestMancer.',
      },
      {
        type: 'p',
        text: 'The platform is built for university students. If you are under 18, use it only with a parent or guardian who has read these terms.',
      },
    ],
  },
  {
    id: 'account',
    title: 'Your account',
    blocks: [
      {
        type: 'p',
        text: 'You sign in with Google. You are responsible for the Google account you use and for the activity that happens after you sign in.',
      },
      {
        type: 'list',
        items: [
          'Use one account for yourself. Do not share it.',
          'Keep the username you choose honest. Do not impersonate another student or a member of staff.',
          'The profile you save, including university, faculty, department, and level, should be yours.',
        ],
      },
    ],
  },
  {
    id: 'study',
    title: 'What the platform is',
    blocks: [
      {
        type: 'p',
        text: 'An account is free. You can enroll in courses, read chapters, take quizzes, sit a continuous assessment, and sit a final exam. Results, gems, and the leaderboard show the work you have finished on TestMancer.',
      },
      {
        type: 'p',
        text: 'Those scores are for your studying. They are not an official university result, a departmental CA mark, or an exam grade. TestMancer is not your school’s examining body.',
      },
      {
        type: 'p',
        text: 'We may add, change, or remove a course, a quiz, or a feature. A course that is on the platform today may not stay in the same form.',
      },
    ],
  },
  {
    id: 'gems',
    title: 'Gems',
    blocks: [
      {
        type: 'p',
        text: 'Gems are points inside TestMancer. They have no cash value. You cannot buy, sell, gift, or transfer them.',
      },
      {
        type: 'list',
        items: [
          'Finishing a chapter earns 3 gems the first time.',
          'A correct quiz answer earns 1 gem, and only on the first attempt of that quiz.',
          'A continuous assessment costs 10 gems.',
          'A final exam costs 20 gems.',
        ],
      },
      {
        type: 'p',
        text: 'The cost is shown before a CA or exam starts. You choose whether to continue. If the balance is too low, the attempt does not start.',
      },
      {
        type: 'p',
        text: 'Earn and spend rates can change. We may correct a balance that was awarded or deducted in error, and we may remove gems if an account is closed or a feature ends.',
      },
    ],
  },
  {
    id: 'conduct',
    title: 'How to use it',
    blocks: [
      {
        type: 'p',
        text: 'Use TestMancer for your own studying. You agree not to:',
      },
      {
        type: 'list',
        items: [
          'Copy the question bank to republish or sell it.',
          'Use the platform to cheat in a live school assessment.',
          'Scrape, attack, or disrupt the service.',
          'Share another student’s private details.',
          'Create more than one account to farm gems or climb the leaderboard.',
        ],
      },
    ],
  },
  {
    id: 'material',
    title: 'Study material',
    blocks: [
      {
        type: 'p',
        text: 'Chapters and questions are study material. We work to keep them useful, and they can still contain a mistake. Check your lecture notes and the official course outline before you rely on an answer.',
      },
      {
        type: 'p',
        text: 'The courses, questions, explanations, and the TestMancer name and logo belong to us or to the people who supplied them. You receive a personal right to study with them, not a right to redistribute them.',
      },
    ],
  },
  {
    id: 'community',
    title: 'WhatsApp community',
    blocks: [
      {
        type: 'p',
        text: 'The WhatsApp group linked from TestMancer runs on WhatsApp. WhatsApp’s own terms apply there. A link on this site does not make that chat part of the platform, and we are not responsible for messages other people send in it.',
      },
    ],
  },
  {
    id: 'availability',
    title: 'Availability',
    blocks: [
      {
        type: 'p',
        text: 'We aim to keep TestMancer open, including during exam weeks. The service can still stop for maintenance, a fault, or a cause outside our control. We do not promise uninterrupted access.',
      },
      {
        type: 'p',
        text: 'TestMancer is a study aid. We are not responsible for a grade, an admission decision, or any other result that follows from how you use it.',
      },
    ],
  },
  {
    id: 'ending',
    title: 'Stopping or closing an account',
    blocks: [
      {
        type: 'p',
        text: 'You can sign out at any time. To close the account, contact us from the Contact page. Closing an account removes the personal data described in the privacy policy, including gems and scores we no longer need to keep.',
      },
      {
        type: 'p',
        text: 'We may suspend or close an account that breaks these terms, including gem farming, impersonation, or misuse of the question bank.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    blocks: [
      {
        type: 'p',
        text: 'We may update these terms. The date at the top of this page will change. If you keep using TestMancer after an update, you accept the new terms.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    blocks: [
      {
        type: 'p',
        text: 'Questions about these terms go through the Contact page.',
      },
    ],
  },
];

const Terms = () => (
  <LegalDocument
    eyebrow="Legal"
    title="Terms and conditions"
    summary="The rules for an account, for gems, and for using courses and quizzes as a study aid."
    updated="7 October 2026"
    sections={sections}
    related={{
      title: 'Privacy',
      text: 'The privacy policy explains what we store from your Google sign-in, your profile, and your scores.',
      to: '/privacy',
      label: 'Read the privacy policy',
    }}
  />
);

export default Terms;
