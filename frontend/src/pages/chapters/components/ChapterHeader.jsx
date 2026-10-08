import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, ChevronUp } from 'lucide-react';
import { coursePath } from '../../../utils/slugs';

const ChapterHeader = ({ chapter, course, completed, onScrollTop }) => {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between gap-4">
        <Link
          to={course ? coursePath(course) : '/dashboard'}
          className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Back
        </Link>
        <button
          type="button"
          onClick={onScrollTop}
          className="btn-secondary h-10 w-10 px-0"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>

      {course && (
        <p className="mt-8 text-sm font-medium text-accent">
          {course.code}{chapter.order ? ` · Chapter ${chapter.order}` : ''}
        </p>
      )}
      <h1 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
        {chapter.title}
      </h1>
      {chapter.description && (
        <p className="mt-4 text-lg leading-relaxed text-graphite">{chapter.description}</p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
        <span className="inline-flex items-center gap-2 text-slate">
          <Clock className="h-4 w-4" strokeWidth={1.75} />
          {chapter.estimatedTime || 30} min read
        </span>
        {completed && (
          <span className="inline-flex items-center gap-2 font-medium text-accent">
            <CheckCircle className="h-4 w-4" strokeWidth={1.75} />
            Completed
          </span>
        )}
      </div>
    </header>
  );
};

export default ChapterHeader;
