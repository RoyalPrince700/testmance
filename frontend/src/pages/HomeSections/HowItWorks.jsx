import { useState } from 'react';
import Reveal from '../../components/Reveal';

const steps = [
  {
    title: 'Create an account',
    description: 'Sign up with email or Google, then set the campus you actually attend.',
    points: ['University, faculty, and department', 'Level from 100 to 600', 'A gem balance that starts at zero'],
  },
  {
    title: 'Pick a course',
    description: 'Search the library by code and enroll. The chapters for that course open from there.',
    points: ['Filter by subject', 'Enroll in one course or several', 'Progress stays on the course'],
  },
  {
    title: 'Answer the quizzes',
    description: 'Work the chapter quiz, then the CA, then the exam. Each miss includes the reason.',
    points: ['Chapter quizzes you can retake', 'CA once, 30 of the final 100', 'Exam once, after the CA'],
  },
  {
    title: 'Watch the score',
    description: 'Results, gems, and the leaderboard show whether the studying is landing.',
    points: ['CA plus exam, out of 100', 'Boards for campus, faculty, and department', 'Gems for the work you finish'],
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">How it works</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            Four steps from signup to a score you can trust.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <ol className="space-y-2">
            {steps.map((item, index) => {
              const selected = index === active;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActive(index)}
                    className={`flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition-colors ${
                      selected
                        ? 'border-accent bg-accent-soft'
                        : 'border-transparent hover:bg-surface'
                    }`}
                  >
                    <span className={`mt-0.5 text-sm font-medium ${selected ? 'text-accent' : 'text-slate'}`}>
                      0{index + 1}
                    </span>
                    <span>
                      <span className="block text-lg font-medium tracking-tight text-ink">{item.title}</span>
                      <span className="mt-1 block text-[15px] leading-relaxed text-slate">{item.description}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8" aria-live="polite">
              <p className="text-sm font-medium text-accent">0{active + 1}</p>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-ink">{step.title}</h3>
              <ul className="mt-6 space-y-3">
                {step.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 border-t border-line pt-3 text-[15px] leading-relaxed text-graphite">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
