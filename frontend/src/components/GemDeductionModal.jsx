import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gem, X, AlertCircle, Target, BookOpen } from 'lucide-react';

const GemDeductionModal = ({
  isOpen,
  onClose,
  onConfirm,
  amount,
  userGems,
  type = "CA",
  isLoading = false
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const hasEnoughGems = (userGems || 0) >= amount;

  const handleEarnGems = (path) => {
    if (isLoading) return;
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
      <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-line bg-surface p-6 sm:p-8" role="dialog" aria-modal="true">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="absolute right-4 top-4 rounded-full p-2 text-slate hover:text-ink disabled:opacity-50"
          aria-label="Close"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>

        {hasEnoughGems ? (
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gem-soft text-gem">
              <Gem className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">This {type} costs {amount} gems.</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">
              Your balance moves from {userGems || 0} to {(userGems || 0) - amount} when you continue.
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gem-soft px-3 py-1 text-sm font-medium text-gem">
              <Gem className="h-3.5 w-3.5" strokeWidth={1.75} />
              {userGems || 0} gems
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button type="button" onClick={onConfirm} disabled={isLoading} className="btn-primary w-full disabled:opacity-50 sm:w-auto">
                {isLoading ? 'Working…' : 'Continue'}
              </button>
              <button type="button" onClick={onClose} disabled={isLoading} className="btn-secondary w-full disabled:opacity-50 sm:w-auto">
                Not now
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <AlertCircle className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">You need {amount} gems.</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">
              This {type} costs {amount} gems and you have {userGems || 0}. Finish a chapter or a quiz to earn more.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-accent" strokeWidth={1.75} />
                A finished chapter is worth 3 gems.
              </li>
              <li className="flex items-center gap-2">
                <Target className="h-4 w-4 text-accent" strokeWidth={1.75} />
                A correct quiz answer is worth 1 gem.
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button type="button" onClick={() => handleEarnGems('/courses')} className="btn-primary w-full sm:w-auto">
                Browse courses
              </button>
              <button type="button" onClick={() => handleEarnGems('/quiz-hub')} className="btn-secondary w-full sm:w-auto">
                Quiz hub
              </button>
            </div>
            <button type="button" onClick={onClose} className="mt-3 text-sm font-medium text-slate hover:text-ink">
              Not now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GemDeductionModal;
