import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

const SectionViewer = ({ sections = [], onLastSection, onMarkComplete, completed }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate progress
    if (sections.length > 0) {
      const progressValue = ((currentSectionIndex + 1) / sections.length) * 100;
      setProgress(progressValue);
    }
  }, [currentSectionIndex, sections.length]);

  const currentSection = sections[currentSectionIndex];
  const hasPrevious = currentSectionIndex > 0;
  const hasNext = currentSectionIndex < sections.length - 1;
  const isLastSection = currentSectionIndex === sections.length - 1;

  // Notify parent when on last section
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

  if (!sections || sections.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 text-center">
        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">No content available for this chapter.</p>
      </div>
    );
  }

  if (!currentSection) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Section {currentSectionIndex + 1} of {sections.length}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Current Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        {/* Section Header */}
        <div className="mb-6 pb-4 border-b border-gray-200">
          {currentSection.subtitle && (
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
              {currentSection.subtitle}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            {currentSection.title}
          </h2>
          {currentSection.estimatedTime && (
            <p className="text-sm text-gray-500 mt-2">
              ⏱️ Estimated reading time: {currentSection.estimatedTime} minutes
            </p>
          )}
        </div>

        {/* Section Content */}
        <div
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: currentSection.content }}
        />
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
        <div className="flex items-center justify-between gap-2 md:gap-0">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            disabled={!hasPrevious}
            className={`flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors flex-shrink-0 ${
              hasPrevious
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                : 'bg-gray-50 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sm md:text-base">Previous</span>
          </button>

          {/* Section Indicator - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSectionIndex(index);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSectionIndex
                    ? 'bg-teal-500 w-8'
                    : index < currentSectionIndex
                    ? 'bg-teal-300'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button or Mark Complete on Last Section */}
          {isLastSection && !completed && onMarkComplete ? (
            <button
              onClick={onMarkComplete}
              className="flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors flex-shrink-0 bg-green-500 hover:bg-green-600 text-white"
            >
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">Mark Complete</span>
            </button>
          ) : (
            <button
              onClick={goToNext}
              disabled={!hasNext}
              className={`flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors flex-shrink-0 ${
                hasNext
                  ? 'bg-teal-500 hover:bg-teal-600 text-white'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span className="text-sm md:text-base">Next</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionViewer;

