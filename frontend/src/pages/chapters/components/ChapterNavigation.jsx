import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Play, Loader } from 'lucide-react';

const ChapterNavigation = ({
  prevChapter,
  nextChapter,
  completed,
  hasQuiz,
  onMarkComplete,
  onTakeQuiz,
  showMarkComplete = true,
  isCompleting = false
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Previous Chapter */}
          {prevChapter && (
            <Link
              to={`/chapters/${prevChapter._id}`}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </Link>
          )}

          {/* Mark Complete - Only show if showMarkComplete is true */}
          {!completed && showMarkComplete && (
            <button
              onClick={onMarkComplete}
              disabled={isCompleting || completed}
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg text-white transition-colors ${
                isCompleting || completed
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isCompleting ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  <span>Completing...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4" />
                  <span>Mark Complete</span>
                </>
              )}
            </button>
          )}

          {/* Take Quiz */}
          {hasQuiz && completed && (
            <button
              onClick={onTakeQuiz}
              className="flex items-center space-x-2 px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg text-white transition-colors"
            >
              <Play className="h-4 w-4" />
              <span>Take Quiz</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterNavigation;

