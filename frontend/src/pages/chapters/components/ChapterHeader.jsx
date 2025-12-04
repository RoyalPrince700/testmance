import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, ChevronUp } from 'lucide-react';

const ChapterHeader = ({ chapter, course, completed, onScrollTop }) => {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-lg p-4 md:p-8 mb-6">
      {/* Back Button - Mobile: Top, Desktop: Inline */}
      <div className="mb-4 md:mb-0 md:hidden">
        <Link
          to={course ? `/courses/${course._id}` : "/dashboard"}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors w-full py-2"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          {/* Back Button - Desktop Only */}
          <Link
            to={course ? `/courses/${course._id}` : "/dashboard"}
            className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </Link>

          {/* Chapter Info */}
          <div className="flex-1 min-w-0">
            {course && (
              <div className="text-sm text-gray-500 mb-2">
                {course.code} - {course.title}
              </div>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{chapter.title}</h1>
            {chapter.description && (
              <p className="text-gray-600 text-base md:text-lg mb-4">{chapter.description}</p>
            )}
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 md:space-x-6 mb-3">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-700 font-medium">
                  {chapter.estimatedTime || 30} min read
                </span>
              </div>
              {completed && (
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Completed</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={onScrollTop}
          className="hidden md:flex w-12 h-12 bg-teal-500 hover:bg-teal-600 rounded-full items-center justify-center text-white transition-colors flex-shrink-0 ml-4"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ChapterHeader;

