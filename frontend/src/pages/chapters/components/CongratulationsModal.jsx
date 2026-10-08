import { useEffect } from 'react';
import { X, Gem, ArrowRight, BookOpen, Trophy, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CongratulationsModal = ({
  isOpen,
  onClose,
  username,
  chapterTitle,
  chapterOrder,
  isFirstCompletion,
  hasQuiz,
  quizId,
  quizTo,
  courseId,
  backPath,
  gemsEarned = 3
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTakeQuiz = () => {
    if (hasQuiz && (quizTo || quizId)) {
      navigate(quizTo || `/quizzes/${quizId}`);
      onClose();
    }
  };

  const handleBackToModule = () => {
    navigate(backPath || (courseId ? `/courses/${courseId}` : '/dashboard'));
    onClose();
  };

  const chapterLabel = chapterOrder ? `Chapter ${chapterOrder}` : 'this chapter';
  const quizIsPrimary = Boolean(hasQuiz && (quizTo || quizId));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
      <div className="relative w-full max-w-md rounded-3xl border border-line bg-surface p-6 sm:p-8" role="dialog" aria-modal="true">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate hover:text-ink"
          aria-label="Close"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gem-soft text-gem">
          <Gem className="h-5 w-5" strokeWidth={1.75} />
        </div>

        {isFirstCompletion ? (
          <>
            <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">
              Chapter complete, {username}.
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">
              You finished {chapterLabel}
              {chapterTitle ? `, ${chapterTitle}` : ''}.
            </p>
            <p className="gem-pop mt-4 inline-flex items-center gap-2 rounded-full bg-gem-soft px-3 py-1 text-sm font-medium text-gem">
              <Gem className="h-4 w-4" strokeWidth={1.75} />
              {gemsEarned} gems
            </p>
          </>
        ) : (
          <>
            <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">Already completed.</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">
              You already earned {gemsEarned} gems for {chapterLabel}. Take the quiz or open another chapter to earn more.
            </p>
          </>
        )}

        <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-line bg-canvas p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Trophy className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Leaderboard</p>
              <p className="text-[15px] leading-relaxed text-slate">See how these gems change your rank.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              navigate('/leaderboard');
              onClose();
            }}
            className="shrink-0 text-sm font-medium text-accent"
          >
            View
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          {quizIsPrimary && (
            <button type="button" onClick={handleTakeQuiz} className="btn-primary w-full sm:w-auto">
              Take quiz
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
          )}
          <button
            type="button"
            onClick={handleBackToModule}
            className={quizIsPrimary ? 'btn-secondary w-full sm:w-auto' : 'btn-primary w-full sm:w-auto'}
          >
            {isFirstCompletion ? (
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <BookOpen className="h-4 w-4" strokeWidth={1.75} />
            )}
            {isFirstCompletion ? 'Back to course' : 'Another chapter'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;
