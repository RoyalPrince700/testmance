import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Sparkles, X, Loader, Clock, Play } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';

const SectionViewer = ({ sections = [], onLastSection, onMarkComplete, completed, isCompleting = false, hasQuiz = false, onTakeQuiz }) => {
  const { user } = useAuth();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const rawUsername = user?.username || 'Student';
  const username = rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1);

  const processContent = (content) => {
    if (!content) return '';
    return content.replace(/Royal Prince/g, username);
  };

  const [isExplaining, setIsExplaining] = useState(false);
  const [explanation, setExplanation] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sections.length > 0) {
      const progressValue = ((currentSectionIndex + 1) / sections.length) * 100;
      setProgress(progressValue);
    }
    setExplanation(null);
    setShowExplanation(false);
    setError(null);
  }, [currentSectionIndex, sections.length]);

  const currentSection = sections[currentSectionIndex];
  const hasPrevious = currentSectionIndex > 0;
  const hasNext = currentSectionIndex < sections.length - 1;
  const isLastSection = currentSectionIndex === sections.length - 1;

  useEffect(() => {
    if (onLastSection) {
      onLastSection(isLastSection);
    }
  }, [isLastSection, onLastSection]);

  const goToPrevious = () => {
    if (hasPrevious) {
      setCurrentSectionIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNext = () => {
    if (hasNext) {
      setCurrentSectionIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const generateExplanation = async () => {
    if (!currentSection) return;

    setIsExplaining(true);
    setError(null);
    setShowExplanation(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      const manualExplanation = currentSection.manualExplanation || 'No explanation available for this section.';
      setExplanation(manualExplanation);
    } catch (err) {
      console.error('AI Explain Error:', err);
      setError('Failed to generate explanation. Please try again.');
    } finally {
      setIsExplaining(false);
    }
  };

  if (!sections || sections.length === 0) {
    return (
      <div className="rounded-3xl border border-line bg-surface px-6 py-16 text-center">
        <BookOpen className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
        <p className="mt-4 text-[15px] leading-relaxed text-slate">No content available for this chapter.</p>
      </div>
    );
  }

  if (!currentSection) {
    return null;
  }

  const showComplete = isLastSection && !completed && onMarkComplete;

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-ink">
            Section {currentSectionIndex + 1} of {sections.length}
          </span>
          <span className="text-slate">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-accent-fill transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <article className="rounded-3xl border border-line bg-surface p-6 md:p-8">
        <div className="border-b border-line pb-5">
          {currentSection.subtitle && (
            <p className="text-sm font-medium text-accent">{currentSection.subtitle}</p>
          )}
          <h2 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-ink md:text-3xl">
            {currentSection.title}
          </h2>
          {currentSection.estimatedTime && (
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate">
              <Clock className="h-4 w-4" strokeWidth={1.75} />
              {currentSection.estimatedTime} min
            </p>
          )}
        </div>

        <div
          className="chapter-body mt-6 text-lg leading-relaxed text-graphite"
          dangerouslySetInnerHTML={{ __html: processContent(currentSection.content) }}
        />

        <div className="mt-8">
          <button
            type="button"
            onClick={generateExplanation}
            disabled={isExplaining}
            className="btn-secondary disabled:opacity-50"
          >
            {isExplaining ? (
              <Loader className="h-4 w-4 animate-spin" strokeWidth={1.75} />
            ) : (
              <Sparkles className="h-4 w-4" strokeWidth={1.75} />
            )}
            Explain this section
          </button>
        </div>

        {showExplanation && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-accent-soft">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div className="flex items-center gap-3 text-sm font-medium text-ink">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-surface text-accent">
                  <Sparkles className="h-5 w-5" strokeWidth={1.75} />
                </div>
                Explanation
              </div>
              <button
                type="button"
                onClick={() => setShowExplanation(false)}
                className="rounded-full p-2 text-slate hover:text-ink"
                aria-label="Close explanation"
              >
                <X className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>
            <div className="px-5 py-6 md:px-8">
              {isExplaining ? (
                <div className="flex items-center gap-3 py-6 text-sm text-slate">
                  <Loader className="h-4 w-4 animate-spin" strokeWidth={1.75} />
                  Writing the explanation
                </div>
              ) : error ? (
                <div>
                  <p className="text-[15px] leading-relaxed text-ink">{error}</p>
                  <button type="button" onClick={generateExplanation} className="btn-secondary mt-4">
                    Try again
                  </button>
                </div>
              ) : (
                <div
                  className="chapter-body text-lg leading-relaxed text-graphite"
                  dangerouslySetInnerHTML={{ __html: processContent(explanation) }}
                />
              )}
            </div>
          </div>
        )}
      </article>

      <div className="flex min-w-0 flex-wrap items-center gap-3 rounded-3xl border border-line bg-surface p-4 md:p-6">
        <button
          type="button"
          onClick={goToPrevious}
          disabled={!hasPrevious}
          className="btn-secondary shrink-0 disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Previous
        </button>

        <div className="hidden min-w-0 flex-1 overflow-x-auto md:block">
          <div className="mx-auto flex w-max items-center gap-1.5">
            {sections.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setCurrentSectionIndex(index);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`h-1.5 shrink-0 rounded-full transition-all ${
                  index === currentSectionIndex
                    ? 'w-8 bg-accent'
                    : index < currentSectionIndex
                    ? 'w-1.5 bg-accent/40'
                    : 'w-1.5 bg-line'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {showComplete ? (
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
        ) : hasNext ? (
          <div className="ml-auto flex shrink-0 items-center gap-4">
            {completed && hasQuiz && onTakeQuiz && (
              <button type="button" onClick={onTakeQuiz} className="text-sm font-medium text-accent">
                Take quiz
              </button>
            )}
            <button type="button" onClick={goToNext} className="btn-primary">
              Next
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        ) : completed && hasQuiz && onTakeQuiz ? (
          <button type="button" onClick={onTakeQuiz} className="btn-primary ml-auto shrink-0">
            <Play className="h-4 w-4" strokeWidth={1.75} />
            Take quiz
          </button>
        ) : (
          <span className="ml-auto" />
        )}
      </div>
    </div>
  );
};

export default SectionViewer;
