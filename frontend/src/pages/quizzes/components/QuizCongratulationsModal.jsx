import { useEffect } from 'react';
import { X, Gem, Eye, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuizCongratulationsModal = ({
  isOpen,
  onClose,
  username,
  quizTitle,
  score,
  correctAnswers,
  totalQuestions,
  gemsEarned = 0,
  passed = false,
  isFirstAttempt = true,
  chapterId,
  courseId,
  backPath,
  onViewAnswers
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

  const handleBackToQuiz = () => {
    navigate(backPath || '/quiz-hub');
  };

  const handleBack = () => {
    if (courseId || chapterId) {
      handleBackToQuiz();
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
      <div className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-line bg-surface" role="dialog" aria-modal="true">
        <button
          type="button"
          onClick={handleBack}
          className="absolute right-4 top-4 rounded-full p-2 text-slate hover:text-ink"
          aria-label="Close"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
            <Trophy className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">
            {passed ? `Quiz complete, ${username}.` : 'Keep going.'}
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">
            {quizTitle ? `${quizTitle}. ` : ''}
            You scored {score}% with {correctAnswers} of {totalQuestions} correct.
          </p>

          <dl className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl border border-line">
            <div className="px-4 py-4">
              <dt className="text-sm text-slate">Score</dt>
              <dd className="mt-1 text-2xl font-medium tracking-tight text-ink">{score}%</dd>
            </div>
            <div className="border-l border-line px-4 py-4">
              <dt className="text-sm text-slate">Correct</dt>
              <dd className="mt-1 text-2xl font-medium tracking-tight text-ink">{correctAnswers}/{totalQuestions}</dd>
            </div>
          </dl>

          {isFirstAttempt && gemsEarned > 0 && (
            <p className="gem-pop mt-4 inline-flex items-center gap-2 rounded-full bg-gem-soft px-3 py-1 text-sm font-medium text-gem">
              <Gem className="h-4 w-4" strokeWidth={1.75} />
              {gemsEarned} gem{gemsEarned === 1 ? '' : 's'} on this first attempt
            </p>
          )}

          {isFirstAttempt && gemsEarned === 0 && (
            <p className="mt-4 text-[15px] leading-relaxed text-slate">
              Gems are one per correct answer, and only on the first attempt.
            </p>
          )}

          {!isFirstAttempt && (
            <p className="mt-4 text-[15px] leading-relaxed text-slate">
              This quiz was already attempted, so no new gems were added.
            </p>
          )}

          <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-line bg-canvas p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Trophy className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-sm font-medium text-ink">Leaderboard</p>
                <p className="text-[15px] leading-relaxed text-slate">See where this score puts you.</p>
              </div>
            </div>
            <button type="button" onClick={() => navigate('/leaderboard')} className="shrink-0 text-sm font-medium text-accent">
              View
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <button type="button" onClick={onViewAnswers} className="btn-primary w-full sm:w-auto">
              <Eye className="h-4 w-4" strokeWidth={1.75} />
              Review answers
            </button>
            <button type="button" onClick={() => window.location.reload()} className="btn-secondary w-full sm:w-auto">
              Retake quiz
            </button>
          </div>
          <button type="button" onClick={handleBack} className="mt-4 text-sm font-medium text-accent">
            {courseId || chapterId ? 'Back to quizzes' : 'Back to dashboard'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCongratulationsModal;
