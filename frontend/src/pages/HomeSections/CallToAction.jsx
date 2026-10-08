import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../../components/Reveal';

const CallToAction = () => {
  return (
    <section className="py-20 md:py-28">
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
              Explore courses
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CallToAction;
