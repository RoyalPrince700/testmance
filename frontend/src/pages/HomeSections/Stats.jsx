import { useEffect, useState } from 'react';
import Reveal from '../../components/Reveal';

const stats = [
  { value: 1000, suffix: '+', label: 'Students' },
  { value: 50, suffix: '+', label: 'Courses' },
  { value: 5000, suffix: '+', label: 'Quizzes taken' },
  { value: 10, suffix: '+', label: 'Partners' },
];

const Count = ({ value, suffix, active }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setCurrent(value);
      return;
    }

    let frame;
    const start = performance.now();
    const duration = 900;

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <>
      {current}
      {suffix}
    </>
  );
};

const StatCell = ({ stat, index }) => {
  const [active, setActive] = useState(false);
  const borders = [
    index > 0 ? 'md:border-l md:border-line' : '',
    index % 2 === 1 ? 'border-l border-line' : '',
    index > 1 ? 'border-t border-line md:border-t-0' : '',
  ].join(' ');

  return (
    <Reveal className={`px-5 py-8 md:px-8 ${borders}`} delay={index * 80} onShow={() => setActive(true)}>
      <dt className="text-sm text-slate">{stat.label}</dt>
      <dd className="mt-1 text-3xl font-medium tracking-tight text-ink md:text-4xl">
        <Count value={stat.value} suffix={stat.suffix} active={active} />
      </dd>
    </Reveal>
  );
};

const Stats = () => {
  return (
    <section className="border-y border-line bg-surface">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCell key={stat.label} stat={stat} index={index} />
        ))}
      </dl>
    </section>
  );
};

export default Stats;
