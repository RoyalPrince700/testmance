import { Link } from 'react-router-dom';
import { ArrowRight, Target, BookOpen, Users, BarChart3, Globe, Code, Award, MessageCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import Footer from './HomeSections/Footer';

const points = [
  {
    icon: BookOpen,
    title: 'For students',
    description: 'Courses and quizzes that stay with the exam you are actually sitting.',
  },
  {
    icon: Users,
    title: 'For educators',
    description: 'A way to see who is moving and where a class is stuck.',
  },
  {
    icon: BarChart3,
    title: 'A score you can follow',
    description: 'Gems, results, and the leaderboard show whether the studying is landing.',
  },
  {
    icon: Globe,
    title: 'On any device',
    description: 'Open a chapter between lectures. The same account follows you.',
  },
];

const technology = [
  {
    icon: Code,
    title: 'Adaptive quizzes',
    description: 'Questions move with your level, so practice stays at the edge of what you know.',
  },
  {
    icon: Award,
    title: 'Gems and boards',
    description: 'Finish a quiz, keep a streak, and see your name move on the leaderboard.',
  },
  {
    icon: MessageCircle,
    title: 'Answers, explained',
    description: 'Every miss comes with a reason, in the same sitting as the question.',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-canvas text-ink">
      <section className="pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="rise-in text-sm font-medium text-accent">About</p>
          <h1
            className="rise-in mt-4 max-w-3xl text-[2.6rem] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl"
            style={{ animationDelay: '70ms' }}
          >
            Exam prep, built around the work.
          </h1>
          <p className="rise-in mt-6 max-w-xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
            TestMancer turns courses, quizzes, continuous assessment, and finals into one path. Study, earn gems, and see where you stand.
          </p>
          <div className="rise-in mt-8" style={{ animationDelay: '210ms' }}>
            <Link to="/register" className="btn-primary group h-12 px-6 text-base">
              Get started free
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <Reveal>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Target className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
                Our mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-graphite">
                Exam weeks are stressful enough. TestMancer keeps the studying in one place and makes the progress visible, so a session ends with a score instead of a guess.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate">
                Students work through courses and quizzes. Gems, badges, and the leaderboard mark what they have actually finished.
              </p>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2">
              {points.map(({ icon: Icon, title, description }, index) => (
                <Reveal key={title} delay={index * 70}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium text-accent">How it is built</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
              Three pieces that carry a study session.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {technology.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 80}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
              Start with one course.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-graphite">
              The account is free. Pick a subject, take the first quiz, and see the gems land.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/register" className="btn-primary group h-12 px-6 text-base">
                Get started free
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link to="/courses" className="btn-secondary h-12 px-6 text-base">
                Browse courses
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
