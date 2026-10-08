import LegalDocument from './LegalDocument';

const sections = [
  {
    id: 'who',
    title: 'Who this covers',
    blocks: [
      {
        type: 'p',
        text: 'This policy explains what TestMancer stores when you create an account and study. TestMancer is operated in Nigeria. Personal data we hold is handled under the Nigeria Data Protection Act 2023.',
      },
      {
        type: 'p',
        text: 'We do not sell your data, and we do not use your study history for advertising.',
      },
    ],
  },
  {
    id: 'collect',
    title: 'What we collect',
    blocks: [
      {
        type: 'p',
        text: 'When you continue with Google, we receive the details Google sends for sign-in. That includes your email, your Google ID, and the profile information Google shares with us.',
      },
      {
        type: 'p',
        text: 'From the profile you save, we store your username, avatar, university, faculty, department, level, the analogy style you pick if you set one, and whether your profile is visible on the leaderboard.',
      },
      {
        type: 'p',
        text: 'From studying, we store the courses you enroll in, the chapters you finish, quiz, CA, and exam attempts and scores, gems, level, XP, achievements, and the time you last signed in.',
      },
    ],
  },
  {
    id: 'why',
    title: 'Why we use it',
    blocks: [
      {
        type: 'list',
        items: [
          'To open your account and keep you signed in.',
          'To save progress, scores, gems, and results.',
          'To show the leaderboard.',
          'To run, protect, and improve the platform.',
          'To answer a request you send us, including a request to close the account.',
        ],
      },
    ],
  },
  {
    id: 'visible',
    title: 'Who can see it',
    blocks: [
      {
        type: 'p',
        text: 'The leaderboard shows your username, avatar, and gem count to other students. Your university, faculty, department, and level stay hidden unless you turn on “Show this profile on the leaderboard” in Profile.',
      },
      {
        type: 'p',
        text: 'People who operate TestMancer can see account data so they can run the service, fix a gem balance, and respond to you. We may also disclose information if the law requires it.',
      },
    ],
  },
  {
    id: 'google',
    title: 'Google and WhatsApp',
    blocks: [
      {
        type: 'p',
        text: 'Sign-in goes through Google. Google processes that sign-in under its own privacy policy. We store the account details we need to recognise you on your next visit.',
      },
      {
        type: 'p',
        text: 'The WhatsApp community is separate. Messages you send there are handled by WhatsApp, not stored as part of your TestMancer account.',
      },
    ],
  },
  {
    id: 'device',
    title: 'What stays on your device',
    blocks: [
      {
        type: 'p',
        text: 'The browser keeps a sign-in token and a copy of your account so you stay signed in. It also keeps your light or dark theme. Signing out removes the token and the account copy from that browser. We do not use advertising cookies.',
      },
    ],
  },
  {
    id: 'keep',
    title: 'How long we keep it',
    blocks: [
      {
        type: 'p',
        text: 'We keep account and study data while the account is open, so your courses, gems, and results are still there when you come back.',
      },
      {
        type: 'p',
        text: 'If you ask us to close the account, we delete or anonymise the personal data we no longer need. We may keep a limited record where the law requires it, or where we need it to prevent abuse of the platform.',
      },
    ],
  },
  {
    id: 'choices',
    title: 'Your choices',
    blocks: [
      {
        type: 'list',
        items: [
          'Update your username, avatar, and school details from Profile.',
          'Hide your school details from the leaderboard. Your username, avatar, and gems can still appear on the board.',
          'Sign out on a device you share.',
          'Ask for a copy of your data, or ask us to close the account, from the Contact page.',
        ],
      },
    ],
  },
  {
    id: 'age',
    title: 'Students under 18',
    blocks: [
      {
        type: 'p',
        text: 'TestMancer is for university students. If you are under 18, use it only with a parent or guardian who accepts the terms and this policy.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    blocks: [
      {
        type: 'p',
        text: 'We may update this policy. The date at the top of this page will change. Continued use of TestMancer after an update means you accept the new policy.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    blocks: [
      {
        type: 'p',
        text: 'Privacy requests, including access and deletion, go through the Contact page.',
      },
    ],
  },
];

const Privacy = () => (
  <LegalDocument
    eyebrow="Legal"
    title="Privacy policy"
    summary="What we store from Google sign-in, your profile, and your scores, and who else can see it."
    updated="7 October 2026"
    sections={sections}
    related={{
      title: 'Terms',
      text: 'The terms cover gems, study scores, and the rules for using an account.',
      to: '/terms',
      label: 'Read the terms',
    }}
  />
);

export default Privacy;
