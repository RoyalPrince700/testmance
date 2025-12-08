import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { coursesAPI, leaderboardAPI, usersAPI } from '../utils/api';
import { BookOpen, Trophy, Target, TrendingUp, Clock, Award, Gem, Star } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [courseProgress, setCourseProgress] = useState({}); // Map of courseId -> progress data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [statsResponse, enrolledCoursesResponse, rankResponse] = await Promise.all([
          usersAPI.getStats(),
          coursesAPI.getEnrolled().catch(() => ({ data: [] })),
          leaderboardAPI.getUserRank()
        ]);

          setStats(statsResponse.data);
        
        // Show only enrolled courses
        setAvailableCourses(enrolledCoursesResponse.data || []);
        setUserRank(rankResponse.data);

        // Fetch progress and chapters for each course
        const progressPromises = (enrolledCoursesResponse.data || []).map(async (course) => {
          try {
            // Fetch both progress and chapters (like CourseDetail does)
            const [progressResponse, chaptersResponse] = await Promise.all([
              coursesAPI.getProgress(course._id).catch(() => ({ data: { completedChapters: 0, totalChapters: 0, progressPercentage: 0, completedChapterIds: [] } })),
              coursesAPI.getChapters(course._id).catch(() => ({ data: [] }))
            ]);

            // Extract progress data
            const progressData = progressResponse.data || progressResponse;
            const chapters = chaptersResponse.data || chaptersResponse || [];
            
            // Use chapters.length for totalChapters (like CourseDetail does)
            // This ensures we count only published/active chapters
            const totalChapters = Array.isArray(chapters) ? chapters.length : (progressData.totalChapters || 0);
            const completedChapterIds = progressData.completedChapterIds || [];
            const completedChapters = completedChapterIds.length;
            
            // Recalculate progress percentage using actual chapters count
            const progressPercentage = totalChapters > 0 
              ? Math.round((completedChapters / totalChapters) * 100)
              : 0;

            return {
              courseId: course._id,
              progress: {
                progressPercentage,
                completedChapters,
                totalChapters,
                completedChapterIds
              }
            };
          } catch (error) {
            return {
              courseId: course._id,
              progress: {
                progressPercentage: 0,
                completedChapters: 0,
                totalChapters: 0,
                completedChapterIds: []
              }
            };
          }
        });

        const progressResults = await Promise.all(progressPromises);
        
        const progressMap = {};
        progressResults.forEach(({ courseId, progress }) => {
          if (courseId) {
            // Normalize ID to string for consistent key matching
            const normalizedId = courseId.toString();
            progressMap[normalizedId] = progress;
          }
        });
        setCourseProgress(progressMap);
      } catch (error) {
        // Silently handle errors
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadDashboardData();
    }
  }, [user]);

  // Refresh progress when page becomes visible (user navigates back)
  useEffect(() => {
    if (availableCourses.length === 0 || !user) return;

    const refreshProgress = async () => {
      try {
        const progressPromises = availableCourses.map(course => 
          coursesAPI.getProgress(course._id)
            .then(response => ({ courseId: course._id, progress: response.data }))
            .catch(() => null)
        );

        const progressResults = await Promise.all(progressPromises);
        setCourseProgress(prevProgress => {
          const progressMap = { ...prevProgress };
          progressResults.forEach(result => {
            if (result && result.courseId) {
              // Normalize ID to string for consistent key matching
              const normalizedId = result.courseId.toString();
              progressMap[normalizedId] = result.progress;
            }
          });
          return progressMap;
        });
      } catch (error) {
        // Silently handle errors
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshProgress();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [availableCourses, user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.username}! 👋
        </h1>
        <p className="text-gray-600 text-lg">
          Ready to continue your learning adventure?
        </p>
      </div>

      {/* Stats Cards */}
      <div className="flex items-center justify-between gap-4 bg-gray-50 border border-gray-200 rounded-lg p-4 card-hover">
        <div className="flex items-center space-x-2 flex-1">
          <Gem className="h-4 w-4 text-yellow-500" />
          <div>
            <p className="text-gray-600 text-xs">Gems</p>
            <p className="text-lg font-bold text-gray-900">{user?.gems || 0}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-1">
          <TrendingUp className="h-4 w-4 text-blue-500" />
          <div>
            <p className="text-gray-600 text-xs">Level</p>
            <p className="text-lg font-bold text-gray-900">{user?.level || 1}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-1">
          <BookOpen className="h-4 w-4 text-green-500" />
          <div>
            <p className="text-gray-600 text-xs">Chapters</p>
            <p className="text-lg font-bold text-gray-900">{stats?.completedChapters || 0}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-1">
          <Trophy className="h-4 w-4 text-purple-500" />
          <div>
            <p className="text-gray-600 text-xs">Global Rank</p>
            <p className="text-lg font-bold text-gray-900">#{userRank?.globalRank || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Available Courses */}
      {availableCourses.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center mb-12">
          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No Enrolled Courses</h3>
          <p className="text-gray-600 mb-6">
            Start your learning journey by enrolling in courses that interest you!
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            Browse Courses
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {availableCourses.map((course, index) => {
          // Color palettes similar to the screenshot
          const colors = [
            { // Pink/Red theme (English)
              bar: 'bg-pink-500',
              iconBg: 'bg-pink-500',
              iconColor: 'text-[#ffffff]',
              button: 'bg-pink-500 hover:bg-pink-600',
              progressColor: 'text-pink-500'
            },
            { // Teal/Green theme (Mathematics)
              bar: 'bg-teal-500',
              iconBg: 'bg-teal-500',
              iconColor: 'text-[#ffffff]',
              button: 'bg-teal-500 hover:bg-teal-600',
              progressColor: 'text-teal-500'
            },
            { // Purple theme (Current Affairs)
              bar: 'bg-purple-500',
              iconBg: 'bg-purple-500',
              iconColor: 'text-[#ffffff]',
              button: 'bg-purple-500 hover:bg-purple-600',
              progressColor: 'text-purple-500'
            }
          ];
          
          const theme = colors[index % colors.length];
          // Normalize course ID for consistent lookup
          const courseId = course._id?.toString() || course._id;
          const progressData = courseProgress[courseId] || { progressPercentage: 0, completedChapters: 0, totalChapters: 0 };
          
          // Ensure progress is a number and handle edge cases
          const progress = typeof progressData.progressPercentage === 'number' 
            ? progressData.progressPercentage 
            : (progressData.completedChapters && progressData.totalChapters 
                ? Math.round((progressData.completedChapters / progressData.totalChapters) * 100)
                : 0);

          return (
            <div key={course._id} className="bg-white rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              {/* Progress Header */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-sm font-medium">Progress</span>
                <span className={`text-sm font-bold ${theme.progressColor}`}>{progress}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="h-2 bg-gray-100 rounded-full mb-8 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${theme.bar}`} 
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Course Icon */}
              <div className="flex justify-center mb-6">
                <div className={`${theme.iconBg} p-4 rounded-2xl shadow-inner`}>
                  {/* Dynamic icon based on index or category */}
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
                <h3 className="text-2xl font-black text-gray-900 mb-1">{course.code}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">{course.title}</p>
                <p className="text-gray-500 text-sm">{course.description?.substring(0, 50)}...</p>
                
                <div className="flex items-center justify-center mt-4 space-x-1">
                   <TrendingUp className={`h-4 w-4 ${theme.progressColor}`} />
                   <span className={`text-sm font-medium ${theme.progressColor}`}>Leaderboard</span>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to={`/courses/${course._id}`}
                className={`block w-full py-3 px-4 rounded-xl text-[#ffffff] font-bold text-center transition-colors shadow-md hover:shadow-lg ${theme.button}`}
              >
                <div className="flex items-center justify-center space-x-2">
                   <span>Resume</span>
                   <Target className="h-4 w-4" />
                </div>
              </Link>
            </div>
          );
        })}
        </div>
      )}

      {/* Achievements */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.isArray(stats?.achievements) && stats.achievements.length > 0 ? (
            <>
              {stats.achievements.includes('firstChapter') && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h3 className="text-gray-900 font-semibold">First Chapter!</h3>
                  <p className="text-gray-600 text-sm">Completed your first chapter</p>
                </div>
              )}
              {stats.achievements.includes('firstQuiz') && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-gray-900 font-semibold">Quiz Master</h3>
                  <p className="text-gray-600 text-sm">Took your first quiz</p>
                </div>
              )}
              {stats.achievements.includes('perfectScore') && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="text-gray-900 font-semibold">Perfect Score!</h3>
                  <p className="text-gray-600 text-sm">Got 100% on a quiz</p>
                </div>
              )}
            </>
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              <Award className="h-12 w-12 mx-auto mb-2 text-gray-300" />
              <p>No achievements yet. Start learning to unlock achievements!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
