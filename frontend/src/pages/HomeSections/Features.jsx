import { Brain, Trophy, BarChart3, Users, Zap, Award } from 'lucide-react';
import Reveal from '../../components/Reveal';

const features = [
  {
    icon: Brain,
    title: 'Adaptive quizzes',
    description: 'Questions get harder as you improve, so each session stays at the edge of what you know.',
  },
  {
    icon: Trophy,
    title: 'Gems and streaks',
    description: 'Finish a quiz, keep a streak, and climb the board. The work shows up as progress you can see.',
  },
  {
    icon: BarChart3,
    title: 'A clear score',
    description: 'See the topics you hold and the ones that still slip, before CA or the final exam.',
  },
  {
    icon: Users,
    title: 'A class to compete with',
    description: 'Leaderboards turn private study into a shared score. You can see who is moving.',
  },
  {
    icon: Zap,
    title: 'Answers, explained',
    description: 'Every miss comes with a reason. You correct it in the same sitting, not the night before the paper.',
  },
  {
    icon: Award,
    title: 'Course mastery',
    description: 'Finish the course path and leave with a record of what you actually completed.',
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Why TestMancer</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            Everything between the first quiz and the exam.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} as="article" className="group" delay={index * 70}>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-transform duration-200 group-hover:-translate-y-1">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
