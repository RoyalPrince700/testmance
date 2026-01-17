import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesAPI } from '../utils/api';
import { BookOpen, ArrowRight, CheckCircle, Pencil, BarChart3, ChevronUp } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chaptersLoading, setChaptersLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const loadCourseData = async () => {
      try {
        const [courseResponse, chaptersResponse, progressResponse, enrolledResponse] = await Promise.all([
          coursesAPI.getById(id),
          coursesAPI.getChapters(id),
          coursesAPI.getProgress(id).catch(() => ({ data: { completedChapters: 0, totalChapters: 0, progressPercentage: 0, completedChapterIds: [] } })),
          coursesAPI.getEnrolled().catch(() => ({ data: [] }))
        ]);

        const courseData = courseResponse.data;
        setCourse(courseData);
        setChapters(chaptersResponse.data);
        setProgress(progressResponse.data);

        // Check if user is enrolled in this course
        const enrolledCourses = enrolledResponse.data || [];
        const enrolled = enrolledCourses.some(c => c._id === id || c._id === courseData._id);
        setIsEnrolled(enrolled);
      } catch (error) {
        console.error('Failed to load course data:', error);
      } finally {
        setLoading(false);
        setChaptersLoading(false);
      }
    };

    loadCourseData();
  }, [id]);

  const completedChapterIds = progress?.completedChapterIds || [];
  const completedCount = completedChapterIds.length;
  const totalChapters = chapters.length;
  const progressPercentage = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

  const isChapterCompleted = (chapterId) => {
    const chapterIdStr = typeof chapterId === 'string' ? chapterId : chapterId.toString();
    return completedChapterIds.some(id => id.toString() === chapterIdStr);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center py-12">
        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Course not found</h3>
        <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        <Link
          to="/dashboard"
          className="inline-block mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg text-white transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  if (!isEnrolled && !loading) {
    return (
      <div className="text-center py-12">
        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Course Not Enrolled</h3>
        <p className="text-gray-600 mb-4">You need to enroll in this course to access its content.</p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/courses"
            className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
          >
            Browse Courses
          </Link>
          <Link
            to="/dashboard"
            className="inline-block px-6 py-2 bg-gray-500 hover:bg-gray-600 rounded-lg text-white transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Main Course Card */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
        {/* Course Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4 flex-1">
            {/* Teal Icon */}
            <div className="hidden md:block bg-teal-500 p-3 rounded-lg shrink-0">
              <Pencil className="h-6 w-6 text-white" />
            </div>

            {/* Course Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">{course.description || 'Master the fundamentals and advance your knowledge'}</p>
              
              {/* Progress Indicators */}
              <div className="flex items-center space-x-6 mb-3">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {completedCount}/{totalChapters} modules
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {progressPercentage}% complete
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-500 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
          
          {/* Circular Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-12 h-12 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center text-white transition-colors shrink-0 ml-4"
          >
            <ChevronUp className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`} />
          </button>
        </div>

        {/* Modules Section */}
        {isExpanded && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Modules ({completedCount}/{totalChapters} completed)
              </h2>
            </div>

            {chaptersLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
              </div>
            ) : chapters.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">No modules available for this course yet.</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {chapters.map((chapter) => {
                  const isCompleted = isChapterCompleted(chapter._id);
                  return (
                    <Link
                      key={chapter._id}
                      to={`/chapters/${chapter._id}`}
                      className="flex items-center justify-between bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-4 transition-colors border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 group"
                    >
                      <div className="flex items-center space-x-4 flex-1 min-w-0">
                        {/* Checkmark or Empty Circle */}
                        {isCompleted ? (
                          <div className="shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white fill-current" />
                          </div>
                        ) : (
                          <div className="shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                        )}

                        {/* Chapter Title */}
                        <span className="text-gray-900 dark:text-white font-medium flex-1 truncate">
                          {chapter.title}
                        </span>
                      </div>

                      {/* Study Link */}
                      <div className="flex items-center space-x-1 text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 font-medium ml-4 shrink-0">
                        <span>Study</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
