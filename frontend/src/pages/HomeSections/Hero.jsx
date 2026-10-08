import { Link } from 'react-router-dom';
import { ArrowRight, Gem } from 'lucide-react';

const options = [
  'Reread the notes and hope it sticks',
  'Answer questions, then review the miss',
  'Leave it until the night before',
];

const Hero = () => {
  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <p className="rise-in text-sm font-medium text-accent">Courses, quizzes, CA, and exams</p>
          <h1
            className="rise-in mt-4 max-w-xl text-[2.6rem] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.5rem]"
            style={{ animationDelay: '70ms' }}
          >
            Exam prep that keeps the score.
          </h1>
          <p className="rise-in mt-6 max-w-lg text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
            Study a course, answer adaptive questions, and earn gems for the work. TestMancer shows where you stand before the paper does.
          </p>
          <div className="rise-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '210ms' }}>
            <Link to="/register" className="btn-primary group h-12 px-6 text-base">
              Get started free
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link to="/courses" className="btn-secondary h-12 px-6 text-base">
              Browse courses
            </Link>
          </div>
          <ul className="rise-in mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate" style={{ animationDelay: '280ms' }}>
            <li>Free to start</li>
            <li>Adaptive quizzes</li>
            <li>Gems and leaderboards</li>
          </ul>
        </div>

        <div className="rise-in" style={{ animationDelay: '180ms' }}>
        <div className="float-card rounded-3xl border border-line bg-surface p-5 shadow-[0_24px_50px_-28px_rgba(20,32,30,0.35)] sm:p-7">
          <div className="h-1.5 overflow-hidden rounded-full bg-canvas">
            <div className="quiz-progress h-full rounded-full bg-accent-fill" />
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-slate">Question 4 of 10</span>
            <span className="gem-pop inline-flex items-center gap-1 font-medium text-gem">
              <Gem className="h-3.5 w-3.5" />
              +5
            </span>
          </div>
          <p className="mt-5 text-xl font-medium leading-snug tracking-tight text-ink">
            Which habit does TestMancer reward?
          </p>
          <ul className="mt-5 space-y-2.5">
            {options.map((option, index) => {
              const selected = index === 1;
              return (
                <li
                  key={option}
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    selected
                      ? 'border-accent bg-accent-soft font-medium text-ink'
                      : 'border-line text-graphite'
                  }`}
                >
                  {option}
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate">Chapter quiz</span>
            <span className="btn-primary pointer-events-none h-9">Check answer</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
