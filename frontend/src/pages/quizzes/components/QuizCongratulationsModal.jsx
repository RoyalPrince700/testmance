import { useEffect } from 'react';
import { X, Gem, ArrowRight, Eye } from 'lucide-react';
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
  onViewAnswers
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

  const handleBackToQuiz = () => {
    // Always try to go to quiz details page if we have courseId
    if (courseId) {
      navigate(`/quiz-hub/courses/${courseId}`);
    } else {
      // Fallback to quiz hub if no courseId
      navigate('/quiz-hub');
    }
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  const handleClose = () => {
    // Close button should navigate to quiz hub (same as "Back to Quiz" button)
    // Don't call onClose() as it navigates to chapter page, which would override this navigation
    handleBackToQuiz();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 rounded-full p-2 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Main Content */}
        <div className="text-center">
          {passed ? (
            <>
              {/* Passed Message */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                🎉 Congratulations {username}! 🎉
              </h2>
              <p className="text-lg text-gray-700 mb-3">
                Well done! You passed the quiz!
              </p>
              {quizTitle && (
                <p className="text-base text-gray-600 mb-6 italic">
                  "{quizTitle}"
                </p>
              )}
              
              {/* Score Display */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-4">
                  <div className="text-3xl font-bold text-teal-700">{score}%</div>
                  <div className="text-sm text-gray-600">Score</div>
                </div>
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-4">
                  <div className="text-3xl font-bold text-teal-700">{correctAnswers}/{totalQuestions}</div>
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
              </div>

              {/* Gems Earned - First Attempt */}
              {isFirstAttempt && gemsEarned > 0 && (
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 rounded-xl p-6 mb-4 shadow-lg">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center justify-center gap-3">
                      <Gem className="h-10 w-10 text-yellow-600 animate-pulse" />
                      <p className="text-3xl font-bold text-yellow-800">
                        You Earned {gemsEarned} Gem{gemsEarned !== 1 ? 's' : ''}! 💎
                      </p>
                    </div>
                    <p className="text-base text-yellow-800 font-semibold mt-1">
                      {gemsEarned} correct answer{gemsEarned !== 1 ? 's' : ''} = {gemsEarned} gem{gemsEarned !== 1 ? 's' : ''} earned
                    </p>
                    <p className="text-sm text-yellow-700 mt-1 italic">
                      ✨ Gems are only awarded on your first attempt
                    </p>
                  </div>
                </div>
              )}

              {/* No Gems - Retake Attempt */}
              {!isFirstAttempt && (
                <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6 mb-4">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <Gem className="h-6 w-6 text-gray-400" />
                      <p className="text-lg font-semibold text-gray-700">
                        No Gems Awarded
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      You've already taken this quiz before. Gems are only awarded on your first attempt.
                    </p>
                    <p className="text-sm text-gray-700 font-medium mt-2 text-center">
                      💡 To earn more gems, take quizzes you haven't attempted before!
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Failed Message */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                💪 Keep Trying! 💪
              </h2>
              <p className="text-lg text-gray-700 mb-3">
                You scored <span className="font-semibold">{score}%</span>
              </p>
              <p className="text-base text-gray-600 mb-2">
                You got <span className="font-semibold">{correctAnswers} out of {totalQuestions}</span> questions correct.
              </p>
              {quizTitle && (
                <p className="text-base text-gray-600 mb-6 italic">
                  "{quizTitle}"
                </p>
              )}
              <p className="text-base text-gray-700 mb-4">
                Don't worry! Review the correct answers and try again!
              </p>

              {/* Gems Info for Failed Quiz */}
              {isFirstAttempt ? (
                gemsEarned > 0 ? (
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 rounded-xl p-5 mb-4 shadow-lg">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center justify-center gap-2">
                        <Gem className="h-8 w-8 text-yellow-600" />
                        <p className="text-xl font-bold text-yellow-800">
                          You Earned {gemsEarned} Gem{gemsEarned !== 1 ? 's' : ''}! 💎
                        </p>
                      </div>
                      <p className="text-sm text-yellow-800 font-medium text-center">
                        {gemsEarned} correct answer{gemsEarned !== 1 ? 's' : ''} = {gemsEarned} gem{gemsEarned !== 1 ? 's' : ''} earned
                      </p>
                      <p className="text-xs text-yellow-700 mt-1 italic">
                        ✨ Gems are only awarded on your first attempt
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
                    <p className="text-sm text-blue-800 text-center">
                      💡 <span className="font-semibold">Tip:</span> Gems are awarded based on correct answers (1 gem per correct answer), but only on your first attempt. Retake this quiz to improve your score, but you won't earn additional gems.
                    </p>
                  </div>
                )
              ) : (
                <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-700 text-center">
                    💡 <span className="font-semibold">Note:</span> No gems were awarded since you've taken this quiz before. Take quizzes you haven't attempted to earn gems!
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-8">
          {/* View Answers Button - Always show */}
          <button
            onClick={onViewAnswers}
            className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <Eye className="h-5 w-5" />
            View Correct Answers
          </button>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {(courseId || chapterId) ? (
              <button
                onClick={handleBackToQuiz}
                className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
                Back to Quiz
              </button>
            ) : (
              <button
                onClick={handleBackToDashboard}
                className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
                Back to Dashboard
              </button>
            )}
            <button
              onClick={() => window.location.reload()}
              className="flex-1 flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCongratulationsModal;

