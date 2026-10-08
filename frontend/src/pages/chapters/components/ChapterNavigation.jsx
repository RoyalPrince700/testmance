import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Play, Loader } from 'lucide-react';
import { chapterPath } from '../../../utils/slugs';

const ChapterNavigation = ({
  prevChapter,
  completed,
  hasQuiz,
  onMarkComplete,
  onTakeQuiz,
  showMarkComplete = true,
  isCompleting = false,
  course,
  chapters = []
}) => {
  const showComplete = !completed && showMarkComplete;
  const showQuiz = hasQuiz && completed;

  if (!prevChapter && !showComplete && !showQuiz) {
    return null;
  }

  return (
    <div className="mt-6 flex min-w-0 flex-wrap items-center gap-3 rounded-3xl border border-line bg-surface p-4 md:p-6">
      {prevChapter ? (
        <Link
          to={course ? chapterPath(course, prevChapter, chapters) : `/chapters/${prevChapter._id}`}
          className="btn-secondary shrink-0"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Previous
        </Link>
      ) : (
        <span />
      )}

      {showComplete && (
        <button
          type="button"
          onClick={onMarkComplete}
          disabled={isCompleting || completed}
          className="btn-primary ml-auto shrink-0 disabled:opacity-50"
        >
          {isCompleting ? (
            <Loader className="h-4 w-4 animate-spin" strokeWidth={1.75} />
          ) : (
            <CheckCircle className="h-4 w-4" strokeWidth={1.75} />
          )}
          {isCompleting ? 'Completing...' : 'Mark complete'}
        </button>
      )}

      {showQuiz && (
        <button type="button" onClick={onTakeQuiz} className="btn-primary ml-auto shrink-0">
          <Play className="h-4 w-4" strokeWidth={1.75} />
          Take quiz
        </button>
      )}
    </div>
  );
};

export default ChapterNavigation;
