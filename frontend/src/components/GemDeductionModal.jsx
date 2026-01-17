import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gem, X, AlertCircle, Target, BookOpen, TrendingUp, Sparkles } from 'lucide-react';

const GemDeductionModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  amount, 
  userGems, 
  title = "Start Activity",
  type = "CA", // "CA" or "Exam"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm overflow-hidden">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8 border-4 border-purple-100 dark:border-purple-900 transform transition-all animate-in fade-in zoom-in duration-300 scrollbar-thin scrollbar-thumb-purple-200 dark:scrollbar-thumb-purple-700 scrollbar-track-transparent">
        <button
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-200 rounded-full p-2 transition-colors z-10 bg-white dark:bg-gray-800 shadow-sm disabled:opacity-50"
        >
          <X className="h-6 w-6" />
        </button>

        {hasEnoughGems ? (
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Gem className="h-10 w-10 text-purple-600 dark:text-purple-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Ready to shine? ✨
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Starting this <span className="font-bold text-purple-600 dark:text-purple-400">{type}</span> will cost <span className="font-bold text-purple-600 dark:text-purple-400">{amount} Gems</span>.
              </p>
              <div className="flex items-center justify-center space-x-2 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded-xl border border-yellow-200 dark:border-yellow-800 w-fit mx-auto">
                <span className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">Your Balance:</span>
                <Gem className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                <span className="font-bold text-yellow-700 dark:text-yellow-300">{userGems || 0}</span>
                <span className="text-yellow-600 dark:text-yellow-400">→</span>
                <span className="font-bold text-yellow-700 dark:text-yellow-300">{(userGems || 0) - amount}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onConfirm}
                disabled={isLoading}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <Sparkles className="h-5 w-5" />
                )}
                {isLoading ? 'Processing...' : 'Deduct & Proceed'}
              </button>
              <button
                onClick={onClose}
                disabled={isLoading}
                className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold py-4 px-6 rounded-xl transition-all disabled:opacity-50"
              >
                Not Now
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-red-100 dark:bg-red-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-red-500 dark:text-red-400" />
            </div>

            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Gems are low! 💎💨
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Oops! You need <span className="font-bold text-red-600 dark:text-red-400">{amount} Gems</span> to start this {type}, but you only have <span className="font-bold text-red-600 dark:text-red-400">{userGems || 0}</span>.
              </p>
              <p className="text-md text-gray-600 dark:text-gray-400 italic">
                Time to go on a gem-collecting quest! 🏹
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-6 mb-8 border border-teal-100 dark:border-teal-800 text-left">
              <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                How to earn more:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start text-teal-700 dark:text-teal-300">
                  <div className="bg-teal-200 dark:bg-teal-800 rounded-full p-1 mr-3 mt-0.5">
                    <BookOpen className="h-3 w-3" />
                  </div>
                  <span>Complete a chapter: <span className="font-bold">+3 Gems</span></span>
                </li>
                <li className="flex items-start text-teal-700 dark:text-teal-300">
                  <div className="bg-teal-200 dark:bg-teal-800 rounded-full p-1 mr-3 mt-0.5">
                    <Target className="h-3 w-3" />
                  </div>
                  <span>Every correct quiz answer: <span className="font-bold">+1 Gem</span></span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleEarnGems('/courses')}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                Go to Courses
              </button>
              <button
                onClick={() => handleEarnGems('/quiz-hub')}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Target className="h-5 w-5" />
                Go to Quiz Hub
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold py-3 px-6 rounded-xl transition-all"
              >
                Maybe Later
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GemDeductionModal;
