import { useEffect } from 'react';
import { X, Gem, ArrowRight, Eye, Trophy } from 'lucide-react';
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
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] flex flex-col">
        {/* Modal Header - Fixed */}
        <div className="flex justify-end p-4 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full p-2 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-8 pt-4">
          <div className="text-center">
          {passed ? (
            <>
              {/* Passed Message */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                🎉 Congratulations {username}! 🎉
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                Well done! You passed the quiz!
              </p>
              {quizTitle && (
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 italic">
                  "{quizTitle}"
                </p>
              )}
              
              {/* Score Display */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-200 dark:border-teal-700 rounded-xl p-4">
                  <div className="text-3xl font-bold text-teal-700 dark:text-teal-300">{score}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Score</div>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-200 dark:border-teal-700 rounded-xl p-4">
                  <div className="text-3xl font-bold text-teal-700 dark:text-teal-300">{correctAnswers}/{totalQuestions}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Correct</div>
                </div>
              </div>

              {/* Gems Earned - First Attempt */}
              {isFirstAttempt && gemsEarned > 0 && (
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-400 dark:border-yellow-600 rounded-xl p-6 mb-4 shadow-lg">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center justify-center gap-3">
                      <Gem className="h-10 w-10 text-yellow-600 dark:text-yellow-400 animate-pulse" />
                      <p className="text-3xl font-bold text-yellow-800 dark:text-yellow-200">
                        You Earned {gemsEarned} Gem{gemsEarned !== 1 ? 's' : ''}! 💎
                      </p>
                    </div>
                    <p className="text-base text-yellow-800 dark:text-yellow-200 font-semibold mt-1">
                      {gemsEarned} correct answer{gemsEarned !== 1 ? 's' : ''} = {gemsEarned} gem{gemsEarned !== 1 ? 's' : ''} earned
                    </p>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1 italic">
                      ✨ Gems are only awarded on your first attempt
                    </p>
                  </div>
                </div>
              )}

              {/* No Gems - Retake Attempt */}
              {!isFirstAttempt && (
                <div className="bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-6 mb-4">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <Gem className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        No Gems Awarded
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                      You've already taken this quiz before. Gems are only awarded on your first attempt.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mt-2 text-center">
                      💡 To earn more gems, take quizzes you haven't attempted before!
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Failed Message */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                💪 Keep Trying! 💪
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                You scored <span className="font-semibold">{score}%</span>
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                You got <span className="font-semibold">{correctAnswers} out of {totalQuestions}</span> questions correct.
              </p>
              {quizTitle && (
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 italic">
                  "{quizTitle}"
                </p>
              )}
              <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                Don't worry! Review the correct answers and try again!
              </p>

              {/* Gems Info for Failed Quiz */}
              {isFirstAttempt ? (
                gemsEarned > 0 ? (
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-400 dark:border-yellow-600 rounded-xl p-5 mb-4 shadow-lg">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center justify-center gap-2">
                        <Gem className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                        <p className="text-xl font-bold text-yellow-800 dark:text-yellow-200">
                          You Earned {gemsEarned} Gem{gemsEarned !== 1 ? 's' : ''}! 💎
                        </p>
                      </div>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium text-center">
                        {gemsEarned} correct answer{gemsEarned !== 1 ? 's' : ''} = {gemsEarned} gem{gemsEarned !== 1 ? 's' : ''} earned
                      </p>
                      <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1 italic">
                        ✨ Gems are only awarded on your first attempt
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-4 mb-4">
                    <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                      💡 <span className="font-semibold">Tip:</span> Gems are awarded based on correct answers (1 gem per correct answer), but only on your first attempt. Retake this quiz to improve your score, but you won't earn additional gems.
                    </p>
                  </div>
                )
              ) : (
                <div className="bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                    💡 <span className="font-semibold">Note:</span> No gems were awarded since you've taken this quiz before. Take quizzes you haven't attempted to earn gems!
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Leaderboard Encouragement */}
        <div className="mt-4 mb-2 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-700 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-teal-100 dark:bg-teal-800 p-2 rounded-full shrink-0">
              <Trophy className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">Check Your Rank!</p>
              <p className="text-xs text-teal-700 dark:text-teal-300">See where you stand on the leaderboard after this quiz.</p>
            </div>
          </div>
          <button
            onClick={() => {
              navigate('/leaderboard');
            }}
            className="text-sm font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 whitespace-nowrap pl-12 sm:pl-0"
          >
            View Leaderboard →
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-8">
          {/* View Answers Button - Always show */}
          <button
            onClick={onViewAnswers}
            className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <Eye className="h-5 w-5" />
            View Correct Answers
          </button>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {(courseId || chapterId) ? (
              <button
                onClick={handleBackToQuiz}
                className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border-2 border-teal-500 dark:border-teal-400 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
                Back to Quiz
              </button>
            ) : (
              <button
                onClick={handleBackToDashboard}
                className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border-2 border-teal-500 dark:border-teal-400 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
                Back to Dashboard
              </button>
            )}
            <button
              onClick={() => window.location.reload()}
              className="flex-1 flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Retake Quiz
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCongratulationsModal;

