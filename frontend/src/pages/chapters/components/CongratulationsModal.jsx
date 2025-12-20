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
  courseId,
  gemsEarned = 3
}) => {
  const navigate = useNavigate();

  // Prevent body scroll when modal is open
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
    if (hasQuiz && quizId) {
      navigate(`/quizzes/${quizId}`); // quizId is now chapterId
      onClose();
    }
  };

  const handleBackToModule = () => {
    if (courseId) {
      navigate(`/courses/${courseId}`);
      onClose();
    } else {
      navigate('/dashboard');
      onClose();
    }
  };

  const handleTakeNewChapter = () => {
    if (courseId) {
      navigate(`/courses/${courseId}`);
      onClose();
    } else {
      navigate('/dashboard');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 rounded-full p-2 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Main Content */}
        <div className="text-center">
          {isFirstCompletion ? (
            <>
              {/* First Completion Message */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                🎉 Congratulations {username}! 🎉
              </h2>
              <p className="text-lg text-gray-700 mb-3">
                Well done for completing{' '}
                <span className="font-semibold">
                  {chapterOrder ? `Chapter ${chapterOrder}` : 'this chapter'}
                </span>
              </p>
              {chapterTitle && (
                <p className="text-base text-gray-600 mb-6 italic">
                  "{chapterTitle}"
                </p>
              )}
              
              {/* Gems Earned */}
              <div className="flex flex-col items-center justify-center gap-2 mt-6 mb-8">
                <p className="text-base text-gray-700">You have earned</p>
                <div className="flex items-center justify-center gap-2">
                  <Gem className="h-6 w-6 text-teal-500" />
                  <p className="text-2xl font-bold text-gray-900">
                    {gemsEarned} Gems! 💎
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Already Completed Message */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ⚡ Great Job! ⚡
              </h2>
              <p className="text-lg text-gray-700 mb-3">
                You have previously earned{' '}
                <span className="font-semibold">{gemsEarned} gems</span>{' '}
                for{' '}
                <span className="font-semibold">
                  {chapterOrder ? `Chapter ${chapterOrder}` : 'this chapter'}
                </span>
              </p>
              <p className="text-base text-gray-600 mb-6">
                To earn more gems, take the quiz or start a new chapter!
              </p>
            </>
          )}
        </div>
        
        {/* Leaderboard Encouragement */}
        <div className="mt-2 mb-6 p-4 bg-teal-50 rounded-xl border border-teal-100 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-teal-100 p-2 rounded-full shrink-0">
              <Trophy className="h-5 w-5 text-teal-600" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-teal-900">Track Your Progress</p>
              <p className="text-xs text-teal-700">See how your new gems affect your rank!</p>
            </div>
          </div>
          <button
            onClick={() => {
              navigate('/leaderboard');
              onClose();
            }}
            className="text-sm font-bold text-teal-600 hover:text-teal-700 whitespace-nowrap pl-12 sm:pl-0"
          >
            View Leaderboard →
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          {isFirstCompletion ? (
            <>
              {/* First Completion Buttons */}
              {hasQuiz && quizId ? (
                <button
                  onClick={handleTakeQuiz}
                  className="flex-1 flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Take Quiz
                  <ArrowRight className="h-5 w-5" />
                </button>
              ) : null}
              <button
                onClick={handleBackToModule}
                className={`flex-1 flex items-center justify-center gap-2 ${
                  hasQuiz && quizId
                    ? 'bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50'
                    : 'bg-teal-500 hover:bg-teal-600 text-white'
                } font-medium py-3 px-6 rounded-lg transition-colors`}
              >
                <ArrowLeft className="h-5 w-5" />
                Back
               
              </button>
            </>
          ) : (
            <>
              {/* Already Completed Buttons */}
              {hasQuiz && quizId ? (
                <button
                  onClick={handleTakeQuiz}
                  className="flex-1 flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Take Quiz
                  <ArrowRight className="h-5 w-5" />
                </button>
              ) : null}
              <button
                onClick={handleTakeNewChapter}
                className={`flex-1 flex items-center justify-center gap-2 ${
                  hasQuiz && quizId
                    ? 'bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50'
                    : 'bg-teal-500 hover:bg-teal-600 text-white'
                } font-medium py-3 px-6 rounded-lg transition-colors`}
              >
                <BookOpen className="h-5 w-5" />
                Take a New Chapter
                <ArrowRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;

