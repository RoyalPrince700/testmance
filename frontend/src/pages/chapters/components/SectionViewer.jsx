import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Sparkles, X, Loader } from 'lucide-react';
import { aiAPI } from '../../../utils/api';
import { useAuth } from '../../../contexts/AuthContext';
import AnalogyPreferenceModal from '../../../components/AnalogyPreferenceModal';

const SectionViewer = ({ sections = [], onLastSection, onMarkComplete, completed, isCompleting = false }) => {
  const { user, updateProfile } = useAuth();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // AI State
  const [isExplaining, setIsExplaining] = useState(false);
  const [explanation, setExplanation] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [error, setError] = useState(null);
  
  // Modal State
  const [showPreferenceModal, setShowPreferenceModal] = useState(false);

  useEffect(() => {
    // Calculate progress
    if (sections.length > 0) {
      const progressValue = ((currentSectionIndex + 1) / sections.length) * 100;
      setProgress(progressValue);
    }
    // Reset AI state when changing sections
    setExplanation(null);
    setShowExplanation(false);
    setError(null);
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

  const handleExplainClick = () => {
    if (!user.preferredAnalogy) {
      setShowPreferenceModal(true);
    } else {
      generateExplanation(user.preferredAnalogy);
    }
  };

  const handlePreferenceSelect = async (analogy) => {
    setShowPreferenceModal(false);
    
    // Update user profile with preference
    await updateProfile({ preferredAnalogy: analogy });
    
    // Continue with explanation
    generateExplanation(analogy);
  };

  const generateExplanation = async (analogy) => {
    if (!currentSection) return;
    
    setIsExplaining(true);
    setError(null);
    setShowExplanation(true);

    try {
      // Combine title and subtitle for topic context
      const topic = `${currentSection.title} - ${currentSection.subtitle || ''}`;
      
      // Helper to strip HTML tags for cleaner prompt
      const cleanContent = currentSection.content.replace(/<[^>]*>/g, ' ');

      const response = await aiAPI.explain(topic, cleanContent, analogy);
      
      // Clean up the explanation text (remove markdown code blocks)
      let cleanedExplanation = response.explanation;
      cleanedExplanation = cleanedExplanation.replace(/```html/gi, '').replace(/```/g, '').trim();
      
      setExplanation(cleanedExplanation);
    } catch (err) {
      console.error('AI Explain Error:', err);
      setError('Failed to generate explanation. Please try again.');
    } finally {
      setIsExplaining(false);
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
      <AnalogyPreferenceModal 
        isOpen={showPreferenceModal} 
        onClose={() => setShowPreferenceModal(false)}
        onSelect={handlePreferenceSelect}
      />

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
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 relative">
        {/* Section Header */}
        <div className="mb-6 pb-4 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div className="flex-1">
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
          </div>
        </div>

        {/* Section Content */}
        <div
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: currentSection.content }}
        />

        {/* AI Explanation Button - Commented out for now */}
        {/* <div className="mt-8 flex justify-center">
          <button
            onClick={handleExplainClick}
            disabled={isExplaining}
            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            title="Get an AI explanation of this section"
          >
            {isExplaining ? (
              <Loader className="h-5 w-5 animate-spin" />
            ) : (
              <Sparkles className="h-5 w-5" />
            )}
            <span className="font-semibold">Explain this section with AI</span>
          </button>
        </div> */}

        {/* AI Explanation Panel */}
        {showExplanation && (
          <div className="mt-8 bg-indigo-50 border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-xl shadow-indigo-100/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-indigo-100">
              <div className="flex items-center space-x-3 text-indigo-900 font-bold text-lg">
                <div className="p-1.5 bg-indigo-100 rounded-lg">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                  <span>AI Tutor Explanation</span>
                  <span className="text-indigo-600 font-medium text-xs md:text-sm bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200 self-start md:self-auto">
                    {user.preferredAnalogy || 'General'} Mode
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setShowExplanation(false)}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-8 md:p-10">
              {isExplaining ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-indigo-200 rounded-full animate-ping opacity-25"></div>
                    <Loader className="h-10 w-10 text-indigo-600 animate-spin relative z-10" />
                  </div>
                  <p className="text-indigo-900 font-medium animate-pulse text-lg">
                    Cooking up a {user.preferredAnalogy || 'simple'} explanation... 🍳
                  </p>
                </div>
              ) : error ? (
                <div className="text-red-600 text-center py-8 bg-red-50 rounded-xl border border-red-100">
                  <p className="font-medium">{error}</p>
                  <button 
                    onClick={() => generateExplanation(user.preferredAnalogy)}
                    className="mt-3 text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors shadow-sm"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <div className="prose prose-lg prose-indigo max-w-none prose-headings:text-indigo-900 prose-headings:font-extrabold prose-p:text-indigo-900 prose-p:leading-loose prose-p:text-lg prose-strong:text-indigo-700 prose-strong:font-bold">
                  <div 
                    dangerouslySetInnerHTML={{ __html: explanation }} 
                  />
                </div>
              )}
            </div>
          </div>
        )}
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
              disabled={isCompleting || completed}
              className={`flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors shrink-0 ${
                isCompleting || completed
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isCompleting ? (
                <>
                  <Loader className="h-4 w-4 md:h-5 md:w-5 animate-spin" />
                  <span className="text-sm md:text-base">Completing...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Mark Complete</span>
                </>
              )}
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
