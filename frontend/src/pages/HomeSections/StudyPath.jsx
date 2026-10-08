import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ClipboardCheck, FileText, Gem, GraduationCap, Target } from 'lucide-react';
import Reveal from '../../components/Reveal';

const modes = [
  {
    id: 'chapters',
    label: 'Chapters',
    icon: BookOpen,
    detail: 'A course is a set of chapters. Mark a section read and the progress stays on that course.',
  },
  {
    id: 'quizzes',
    label: 'Quizzes',
    icon: Target,
    detail: 'Each chapter has a quiz. A miss comes with the reason, and gems land when you finish.',
  },
  {
    id: 'ca',
    label: 'CA',
    icon: ClipboardCheck,
    detail: 'One continuous assessment per course. 30 questions, 15 minutes, 10 gems, and 30 of the final 100.',
  },
  {
    id: 'exam',
    label: 'Exam',
    icon: FileText,
    detail: 'The exam opens after the CA. 70 questions, 40 minutes, 20 gems, once, and 70 of the final 100.',
  },
  {
    id: 'results',
    label: 'Results',
    icon: GraduationCap,
    detail: 'The result adds the CA and the exam. A starts at 70, then B, C, D, E, and F.',
  },
];

const sections = [
  'The sound of a word',
  'Listening in a lecture',
  'A clear paragraph',
];

const questions = [
  {
    prompt: 'Continuous assessment counts for how much of the final 100?',
    options: ['30', '50', '70'],
    answer: 0,
    why: 'The CA is 30. The exam is the other 70, and it stays locked until the CA is done.',
  },
  {
    prompt: 'How many times can you sit the exam for one course?',
    options: ['As many times as you like', 'Once', 'Twice, if the first score is low'],
    answer: 1,
    why: 'Each course has one exam. That score stays on your results.',
  },
  {
    prompt: 'What happens after a miss on a chapter quiz?',
    options: ['The question is hidden', 'You see why it was wrong', 'It waits until exam week'],
    answer: 1,
    why: 'The explanation is in the same sitting, so you correct it before the paper.',
  },
];

const gradeFor = (total) => {
  if (total >= 70) return 'A';
  if (total >= 60) return 'B';
  if (total >= 50) return 'C';
  if (total >= 40) return 'D';
  if (total >= 30) return 'E';
  return 'F';
};

const Stepper = ({ value, max, label, onChange }) => (
  <div className="flex items-center justify-between gap-4">
    <span className="text-sm font-medium text-ink">{label}</span>
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label={`Lower ${label}`}
        onClick={() => onChange(Math.max(0, value - 1))}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink hover:bg-canvas"
      >
        −
      </button>
      <span className="w-8 text-center text-sm font-medium tabular-nums text-ink">{value}</span>
      <button
        type="button"
        aria-label={`Raise ${label}`}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink hover:bg-canvas"
      >
        +
      </button>
      <span className="w-10 text-sm text-slate">/ {max}</span>
    </div>
  </div>
);

const StudyPath = () => {
  const [mode, setMode] = useState('chapters');
  const [read, setRead] = useState([true, false, false]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizPick, setQuizPick] = useState(null);
  const [caQuestion, setCaQuestion] = useState(0);
  const [caDone, setCaDone] = useState(false);
  const [caScore, setCaScore] = useState(21);
  const [examScore, setExamScore] = useState(46);

  const active = modes.find((item) => item.id === mode);
  const question = questions[quizIndex];
  const total = caScore + examScore;
  const readCount = read.filter(Boolean).length;

  const onTabKeyDown = (event) => {
    const index = modes.findIndex((item) => item.id === mode);
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const next = event.key === 'ArrowRight'
      ? (index + 1) % modes.length
      : (index - 1 + modes.length) % modes.length;
    setMode(modes[next].id);
  };

  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">What you get</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            The whole paper, in one path.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">
            Read the chapter, practice, sit the CA, then the exam. The result is those two scores added together.
          </p>
        </Reveal>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Study path"
          onKeyDown={onTabKeyDown}
        >
          {modes.map(({ id, label, icon: Icon }) => {
            const selected = mode === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                id={`path-tab-${id}`}
                aria-selected={selected}
                aria-controls={`path-panel-${id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setMode(id)}
                className={`inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors ${
                  selected
                    ? 'bg-accent-fill text-on-accent'
                    : 'border border-line bg-surface text-graphite hover:text-ink'
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                {label}
              </button>
            );
          })}
        </div>

        <Reveal className="mt-6">
          <div
            role="tabpanel"
            id={`path-panel-${mode}`}
            aria-labelledby={`path-tab-${mode}`}
            className="rounded-3xl border border-line bg-surface p-5 sm:p-7"
          >
            <p className="text-sm text-slate">Preview · {active.detail}</p>

            {mode === 'chapters' && (
              <div className="mt-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-accent">GST 111</p>
                    <h3 className="mt-1 text-lg font-medium tracking-tight text-ink">Communication in English I</h3>
                  </div>
                  <p className="text-sm text-slate">{readCount} of {sections.length} read</p>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-canvas">
                  <div
                    className="h-full rounded-full bg-accent-fill motion-safe:transition-[width] motion-safe:duration-300"
                    style={{ width: `${(readCount / sections.length) * 100}%` }}
                  />
                </div>
                <ul className="mt-5 space-y-2">
                  {sections.map((title, index) => {
                    const done = read[index];
                    return (
                      <li key={title}>
                        <button
                          type="button"
                          aria-pressed={done}
                          onClick={() => setRead((current) => current.map((item, i) => (i === index ? !item : item)))}
                          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm ${
                            done
                              ? 'border-accent bg-accent-soft font-medium text-ink'
                              : 'border-line text-graphite hover:text-ink'
                          }`}
                        >
                          <span>{title}</span>
                          <span className="text-xs font-medium text-slate">{done ? 'Read' : 'Open'}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {mode === 'quizzes' && (
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate">Question {quizIndex + 1} of {questions.length}</span>
                  {quizPick === question.answer && (
                    <span className="inline-flex items-center gap-1 font-medium text-gem">
                      <Gem className="h-3.5 w-3.5" />
                      +5
                    </span>
                  )}
                </div>
                <p className="mt-4 text-xl font-medium leading-snug tracking-tight text-ink">{question.prompt}</p>
                <ul className="mt-5 space-y-2.5" role="listbox" aria-label="Answers">
                  {question.options.map((option, index) => {
                    const picked = quizPick !== null;
                    const isAnswer = index === question.answer;
                    const isPick = index === quizPick;
                    let style = 'border-line text-graphite hover:text-ink';
                    if (picked && isAnswer) style = 'border-accent bg-accent-soft font-medium text-ink';
                    else if (picked && isPick) style = 'border-line text-slate';
                    return (
                      <li key={option}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isPick}
                          disabled={picked}
                          onClick={() => setQuizPick(index)}
                          className={`w-full rounded-2xl border px-4 py-3 text-left text-sm disabled:cursor-default ${style}`}
                        >
                          {option}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                {quizPick !== null && (
                  <div className="mt-5 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-end sm:justify-between">
                    <p className="max-w-md text-[15px] leading-relaxed text-slate" aria-live="polite">{question.why}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setQuizIndex((index) => (index + 1) % questions.length);
                        setQuizPick(null);
                      }}
                      className="text-sm font-medium text-accent"
                    >
                      Another question
                    </button>
                  </div>
                )}
              </div>
            )}

            {mode === 'ca' && (
              <div className="mt-6">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <h3 className="text-lg font-medium tracking-tight text-ink">Question {caQuestion + 1} of 30</h3>
                  <p className="text-sm text-slate">15 minutes · once · 10 gems</p>
                </div>
                <div className="mt-5 grid grid-cols-6 gap-2 sm:grid-cols-10" role="group" aria-label="CA questions">
                  {Array.from({ length: 30 }, (_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-pressed={caQuestion === index}
                      aria-label={`Question ${index + 1}`}
                      onClick={() => setCaQuestion(index)}
                      className={`h-9 rounded-xl text-xs font-medium tabular-nums ${
                        caQuestion === index
                          ? 'bg-accent-fill text-on-accent'
                          : index < caQuestion
                            ? 'bg-accent-soft text-accent'
                            : 'bg-canvas text-slate hover:text-ink'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-slate">
                  You can move between questions until you submit. Leaving the page submits what you have answered.
                </p>
              </div>
            )}

            {mode === 'exam' && (
              <div className="mt-6">
                <h3 className="text-lg font-medium tracking-tight text-ink">
                  {caDone ? 'The exam is open.' : 'The exam stays closed.'}
                </h3>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-slate">
                  {caDone
                    ? '70 questions, 40 minutes, once. It closes itself when the time ends, and it counts for 70 of the final 100.'
                    : 'Finish the continuous assessment first. This preview uses that same rule.'}
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
                  {[
                    ['Questions', '70'],
                    ['Time', '40 min'],
                    ['Gems', '20'],
                    ['Weight', '70'],
                  ].map(([label, value]) => (
                    <div key={label} className={`bg-surface px-4 py-4 ${caDone ? '' : 'opacity-50'}`}>
                      <dt className="text-sm text-slate">{label}</dt>
                      <dd className="mt-1 text-lg font-medium tracking-tight text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
                <button
                  type="button"
                  onClick={() => setCaDone((done) => !done)}
                  className="btn-secondary mt-6"
                >
                  {caDone ? 'Close it again' : 'Mark the CA done'}
                </button>
              </div>
            )}

            {mode === 'results' && (
              <div className="mt-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate">GST 111</p>
                    <p className="mt-1 text-4xl font-medium tracking-tight text-ink" aria-live="polite">
                      {total}
                      <span className="ml-2 text-lg text-slate">/ 100 · {gradeFor(total)}</span>
                    </p>
                  </div>
                  <p className="text-sm text-slate">A from 70</p>
                </div>
                <div className="mt-6 space-y-4">
                  <Stepper value={caScore} max={30} label="CA" onChange={setCaScore} />
                  <Stepper value={examScore} max={70} label="Exam" onChange={setExamScore} />
                </div>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-canvas">
                  <div className="h-full rounded-full bg-accent-fill" style={{ width: `${total}%` }} />
                </div>
              </div>
            )}

            <div className="mt-6 border-t border-line pt-5">
              <Link to="/courses" className="text-sm font-medium text-accent">
                Browse the courses
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StudyPath;
