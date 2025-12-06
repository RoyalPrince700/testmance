import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { coursesAPI } from '../../utils/api';
import { BookOpen, Target, TrendingUp, Trophy } from 'lucide-react';

const QuizHub = () => {
  const { user } = useAuth();
  const [availableCourses, setAvailableCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        // Only load enrolled courses for quiz hub
        const enrolledCoursesResponse = await coursesAPI.getEnrolled();
        setAvailableCourses(enrolledCoursesResponse.data || []);
      } catch (error) {
        console.error('Failed to load enrolled courses:', error);
        setAvailableCourses([]);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadCourses();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Quiz Hub 🎯
        </h1>
        <p className="text-gray-600 text-lg">
          Test your knowledge and earn gems!
        </p>
      </div>

      {/* Available Courses */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {availableCourses.map((course, index) => {
          // Color palettes similar to the dashboard
          const colors = [
            { // Pink/Red theme
              bar: 'bg-pink-500',
              iconBg: 'bg-pink-500',
              iconColor: 'text-[#ffffff]',
              button: 'bg-pink-500 hover:bg-pink-600',
              progressColor: 'text-pink-500'
            },
            { // Teal/Green theme
              bar: 'bg-teal-500',
              iconBg: 'bg-teal-500',
              iconColor: 'text-[#ffffff]',
              button: 'bg-teal-500 hover:bg-teal-600',
              progressColor: 'text-teal-500'
            },
            { // Purple theme
              bar: 'bg-purple-500',
              iconBg: 'bg-purple-500',
              iconColor: 'text-[#ffffff]',
              button: 'bg-purple-500 hover:bg-purple-600',
              progressColor: 'text-purple-500'
            }
          ];
          
          const theme = colors[index % colors.length];

          return (
            <Link
              key={course._id}
              to={`/quiz-hub/courses/${course._id}`}
              className="bg-white rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Course Icon */}
              <div className="flex justify-center mb-6">
                <div className={`${theme.iconBg} p-4 rounded-2xl shadow-inner`}>
                  {/* Dynamic icon based on index */}
                  {index === 0 ? (
                    <BookOpen className={`h-8 w-8 ${theme.iconColor}`} />
                  ) : index === 1 ? (
                    <Target className={`h-8 w-8 ${theme.iconColor}`} />
                  ) : (
                    <TrendingUp className={`h-8 w-8 ${theme.iconColor}`} />
                  )}
                </div>
              </div>

              {/* Course Info */}
              <div className="text-center mb-8">
                <p className="text-sm font-semibold text-gray-600 mb-1">{course.code}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm">{course.description?.substring(0, 50)}...</p>
                
                <div className="flex items-center justify-center mt-4 space-x-1">
                  <Target className={`h-4 w-4 ${theme.progressColor}`} />
                  <span className={`text-sm font-medium ${theme.progressColor}`}>Take Quiz</span>
                </div>
              </div>

              {/* Action Button */}
              <div
                className={`block w-full py-3 px-4 rounded-xl text-[#ffffff] font-bold text-center transition-colors shadow-md hover:shadow-lg ${theme.button}`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>View Chapters</span>
                  <Target className="h-4 w-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {availableCourses.length === 0 && (
        <div className="text-center py-12">
          <Target className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No enrolled courses</h3>
          <p className="text-gray-600 mb-4">You need to enroll in courses to access their quizzes.</p>
          <Link
            to="/courses"
            className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default QuizHub;

