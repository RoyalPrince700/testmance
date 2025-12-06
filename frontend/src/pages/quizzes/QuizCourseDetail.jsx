import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesAPI, quizzesAPI } from '../../utils/api';
import { BookOpen, ArrowRight, Target, Pencil, BarChart3, ChevronUp, CheckCircle } from 'lucide-react';
import { getQuizContent } from './content';

const QuizCourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chaptersLoading, setChaptersLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [quizCompletions, setQuizCompletions] = useState({});

  useEffect(() => {
    const loadCourseData = async () => {
      try {
        const [courseResponse, chaptersResponse, enrolledResponse] = await Promise.all([
          coursesAPI.getById(id),
          coursesAPI.getChapters(id),
          coursesAPI.getEnrolled().catch(() => ({ data: [] }))
        ]);

        const courseData = courseResponse.data;
        setCourse(courseData);
        setChapters(chaptersResponse.data);

        // Check if user is enrolled in this course
        const enrolledCourses = enrolledResponse.data || [];
        const enrolled = enrolledCourses.some(c => c._id === id || c._id === courseData._id);
        setIsEnrolled(enrolled);

        // Load quiz completions for chapters with quizzes
        if (enrolled) {
          await loadQuizCompletions(chaptersResponse.data, courseData);
        }
      } catch (error) {
        console.error('Failed to load course data:', error);
      } finally {
        setLoading(false);
        setChaptersLoading(false);
      }
    };

    loadCourseData();
  }, [id]);

  const loadQuizCompletions = async (chaptersData, courseData) => {
    const completions = {};

    for (const chapter of chaptersData) {
      const quizContent = getQuizContent(chapter.title, chapter.order, courseData?.code);
      if (quizContent) {
        try {
          // Try to get quiz results by chapter ID
          const resultsResponse = await quizzesAPI.getResults(chapter._id);
          if (resultsResponse.data && resultsResponse.data.length > 0) {
            // Check if any attempt was completed (has results)
            completions[chapter._id] = true;
          }
        } catch (error) {
          // Quiz not completed or error - leave as false
          console.log(`No quiz results for chapter ${chapter._id}`);
        }
      }
    }

    setQuizCompletions(completions);
  };

  // Filter chapters that have quizzes in frontend content
  const chaptersWithQuizzes = chapters.filter(chapter => {
    const quizContent = getQuizContent(chapter.title, chapter.order, course?.code);
    return quizContent !== null;
  });

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
          to="/quiz-hub"
          className="inline-block mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg text-white transition-colors"
        >
          Back to Quiz Hub
        </Link>
      </div>
    );
  }

  if (!isEnrolled && !loading) {
    return (
      <div className="text-center py-12">
        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Course Not Enrolled</h3>
        <p className="text-gray-600 mb-4">You need to enroll in this course to access its quizzes.</p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/quiz-hub"
            className="inline-block px-6 py-2 bg-gray-500 hover:bg-gray-600 rounded-lg text-white transition-colors"
          >
            Back to Quiz Hub
          </Link>
          <Link
            to="/courses"
            className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Main Course Card */}
      <div className="bg-gray-50 rounded-2xl shadow-lg p-8 mb-6">
        {/* Course Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4 flex-1">
            {/* Teal Icon */}
            <div className="hidden md:block bg-teal-500 p-3 rounded-lg shrink-0">
              <Target className="h-6 w-6 text-white" />
            </div>
            
            {/* Course Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
              <p className="text-gray-600 text-lg mb-4">{course.description || 'Test your knowledge with chapter quizzes'}</p>
              
              {/* Progress Indicators */}
              <div className="flex items-center space-x-6 mb-3">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700 font-medium">
                    {chaptersWithQuizzes.length} quiz{chaptersWithQuizzes.length !== 1 ? 'es' : ''} available
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700 font-medium">
                    {chapters.length} total chapters
                  </span>
                </div>
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
              <h2 className="text-xl font-bold text-gray-900">
                Available Quizzes ({chaptersWithQuizzes.length})
              </h2>
            </div>

            {chaptersLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
              </div>
            ) : chaptersWithQuizzes.length === 0 ? (
              <div className="text-center py-12">
                <Target className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">No quizzes available for this course yet.</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {chaptersWithQuizzes.map((chapter) => {
                  const isCompleted = quizCompletions[chapter._id];
                  return (
                    <Link
                      key={chapter._id}
                      to={`/quizzes/${chapter._id}`}
                      className="flex items-center justify-between bg-white hover:bg-gray-50 rounded-lg p-4 transition-colors border border-gray-200 hover:border-teal-300 group"
                    >
                      <div className="flex items-center space-x-4 flex-1 min-w-0">
                        {/* Quiz Icon or Completion Checkmark */}
                        <div className={`hidden lg:flex shrink-0 w-6 h-6 rounded-full items-center justify-center ${
                          isCompleted ? 'bg-green-500' : 'bg-teal-500'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="h-4 w-4 text-white fill-current" />
                          ) : (
                            <Target className="h-4 w-4 text-white fill-current" />
                          )}
                        </div>

                        {/* Chapter Title */}
                        <span className={`font-medium flex-1 truncate ${
                          isCompleted ? 'text-gray-600' : 'text-gray-900'
                        }`}>
                          {chapter.title}
                          {isCompleted && (
                            <span className="ml-2 text-green-600 text-sm font-normal">
                              (Completed)
                            </span>
                          )}
                        </span>
                      </div>

                      {/* Quiz Link */}
                      <div className="flex items-center space-x-1 text-teal-600 group-hover:text-teal-700 font-medium ml-4 shrink-0">
                        <span>{isCompleted ? 'Review Quiz' : 'Take Quiz'}</span>
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

export default QuizCourseDetail;
