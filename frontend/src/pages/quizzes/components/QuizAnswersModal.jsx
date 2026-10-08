import { useEffect, useState } from 'react';
import { X, CheckCircle, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';

const QuizAnswersModal = ({
  isOpen,
  onClose,
  questions = [],
  userAnswers = [],
  quizTitle,
  correctness = []
}) => {
  const { user } = useAuth();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const rawUsername = user?.username || 'Student';
  const username = rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1);

  const processText = (text) => {
    if (!text) return '';
    return text.replace(/Royal Prince/g, username);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentQuestionIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !questions.length) return null;

  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];
  const isCorrect = correctness[currentQuestionIndex] !== undefined
    ? correctness[currentQuestionIndex]
    : userAnswer === currentQuestion.correctAnswer;
  const totalQuestions = questions.length;

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-line bg-surface" role="dialog" aria-modal="true">
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
          <div className="min-w-0">
            <h2 className="text-lg font-medium tracking-tight text-ink">Review</h2>
            {quizTitle && <p className="mt-1 truncate text-sm text-slate">{quizTitle}</p>}
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-slate hover:text-ink" aria-label="Close">
            <X className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>

        <div className="border-b border-line px-5 py-4 md:px-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-sm text-slate">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
          </div>
          <div className="flex gap-1.5 overflow-x-auto">
            {questions.map((_, index) => {
              const userAns = userAnswers[index];
              const correct = correctness[index] !== undefined
                ? correctness[index]
                : userAns === questions[index].correctAnswer;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`h-8 w-8 shrink-0 rounded-full text-sm font-medium ${
                    index === currentQuestionIndex
                      ? 'bg-accent-fill text-on-accent'
                      : correct
                      ? 'bg-accent-soft text-accent'
                      : 'border border-line text-slate'
                  }`}
                  aria-label={`Question ${index + 1}, ${correct ? 'correct' : 'incorrect'}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 md:px-6">
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
            ) : (
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-slate" strokeWidth={1.75} />
            )}
            <div>
              <p className="text-sm font-medium text-accent">{isCorrect ? 'Correct' : 'Incorrect'}</p>
              <h3 className="mt-2 text-lg font-medium tracking-tight text-ink">
                {processText(currentQuestion.question)}
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isUserAnswer = userAnswer === index;
              const isCorrectAnswer = index === currentQuestion.correctAnswer;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border p-4 text-[15px] leading-relaxed ${
                    isCorrectAnswer
                      ? 'border-accent bg-accent-soft text-ink'
                      : isUserAnswer
                      ? 'border-line bg-canvas text-ink'
                      : 'border-line text-graphite'
                  }`}
                >
                  <span>{processText(option)}</span>
                  {isCorrectAnswer && <span className="mt-1 block text-sm font-medium text-accent">Correct answer</span>}
                  {isUserAnswer && !isCorrectAnswer && <span className="mt-1 block text-sm text-slate">Your answer</span>}
                </div>
              );
            })}
          </div>

          {currentQuestion.explanation && (
            <div className="mt-6 rounded-2xl border border-line bg-canvas p-4">
              <h4 className="text-sm font-medium text-ink">Explanation</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-graphite">{processText(currentQuestion.explanation)}</p>
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-wrap items-center gap-3 border-t border-line px-5 py-4 md:px-6">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="btn-secondary shrink-0 disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
            Previous
          </button>
          <span className="text-sm text-slate">{currentQuestionIndex + 1} / {totalQuestions}</span>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
            className="btn-primary ml-auto shrink-0 disabled:opacity-40"
          >
            Next
            <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizAnswersModal;
