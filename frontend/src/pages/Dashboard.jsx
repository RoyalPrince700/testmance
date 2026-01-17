import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { coursesAPI, leaderboardAPI, usersAPI, resultsAPI } from '../utils/api';
import { BookOpen, Trophy, Target, TrendingUp, Clock, Award, Gem, Star, FileText, PenTool, CheckCircle, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [courseProgress, setCourseProgress] = useState({}); // Map of courseId -> progress data
  const [resultsSummary, setResultsSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [statsResponse, enrolledCoursesResponse, rankResponse, resultsResponse] = await Promise.all([
          usersAPI.getStats(),
          coursesAPI.getEnrolled().catch(() => ({ data: [] })),
          leaderboardAPI.getUserRank(),
          resultsAPI.getAll().catch(() => ({ data: [] }))
        ]);

          setStats(statsResponse.data);
        
        // Show only enrolled courses
        setAvailableCourses(enrolledCoursesResponse.data || []);
        setUserRank(rankResponse.data);
        setResultsSummary(resultsResponse.data || []);

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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, {user?.username}! 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Ready to continue your learning adventure?
        </p>
      </div>

      {/* Stats Cards */}
      <div className="flex items-center justify-between gap-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
        <div className="flex items-center space-x-2 flex-1">
          <Gem className="h-4 w-4 text-yellow-500" />
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-xs">Gems</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{user?.gems || 0}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-1">
          <TrendingUp className="h-4 w-4 text-blue-500" />
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-xs">Level</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{user?.level || 1}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-1">
          <BookOpen className="h-4 w-4 text-green-500" />
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-xs">Chapters</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{stats?.completedChapters || 0}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-1">
          <Trophy className="h-4 w-4 text-purple-500" />
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-xs">Global Rank</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">#{userRank?.globalRank || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Available Courses */}
      {availableCourses.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-12 text-center mb-12 shadow-sm">
          <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Enrolled Courses</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Start your learning journey by enrolling in courses that interest you!
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-800 text-white rounded-lg hover:bg-teal-900 transition-colors"
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
              bar: 'bg-teal-700',
              iconBg: 'bg-teal-700',
              iconColor: 'text-[#ffffff]',
              button: 'bg-teal-700 hover:bg-teal-800',
              progressColor: 'text-teal-700'
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
            <div key={course._id} className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              {/* Progress Header */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Progress</span>
                <span className={`text-sm font-bold ${theme.progressColor}`}>{progress}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-8 overflow-hidden">
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
              <div className="text-center flex-grow">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1">{course.code}</h3>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">{course.title}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{course.description?.substring(0, 50)}...</p>

                <div className="flex items-center justify-center mt-4 space-x-1">
                   <TrendingUp className={`h-4 w-4 ${theme.progressColor}`} />
                   <span className={`text-sm font-medium ${theme.progressColor}`}>Leaderboard</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto">
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
            </div>
          );
        })}
        </div>
      )}

      {/* Assessments Section */}
      {availableCourses.length > 0 && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-600 dark:text-purple-400" />
              Assessments Status
            </h2>
            <Link to="/results" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold flex items-center text-sm">
              View All Results
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {availableCourses.map((course) => {
              const result = resultsSummary?.find(r => r.course?._id === course._id);
              const caDone = result?.caCompletedAt;
              const examDone = result?.examCompletedAt;
              
              return (
                <div key={course._id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-bold text-gray-900 dark:text-white">{course.code}: {course.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {result?.isComplete ? (
                        <span className="text-green-600 dark:text-green-400 font-semibold flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Completed - Grade: {result.grade}
                        </span>
                      ) : (
                        <span>Overall Progress: {result?.totalScore || 0}/100</span>
                      )}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Link
                      to={`/ca/${course._id}`}
                      className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 ${
                        caDone
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 pointer-events-none'
                          : 'bg-teal-700 text-white hover:bg-teal-800'
                      }`}
                    >
                      {caDone ? <CheckCircle className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                      <span>{caDone ? `CA: ${result.caScore}/30` : 'Take CA'}</span>
                    </Link>

                    <Link
                      to={`/exam/${course._id}`}
                      className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 ${
                        examDone 
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 pointer-events-none' 
                          : 'bg-red-500 text-white hover:bg-red-600'
                      }`}
                    >
                      {examDone ? <CheckCircle className="h-4 w-4" /> : <PenTool className="h-4 w-4" />}
                      <span>{examDone ? `Exam: ${result.examScore}/70` : 'Take Exam'}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.isArray(stats?.achievements) && stats.achievements.length > 0 ? (
            <>
              {stats.achievements.includes('firstChapter') && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900/30 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-500 mx-auto mb-2" />
                  <h3 className="text-gray-900 dark:text-white font-semibold">First Chapter!</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Completed your first chapter</p>
                </div>
              )}
              {stats.achievements.includes('firstQuiz') && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-4 text-center">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-500 mx-auto mb-2" />
                  <h3 className="text-gray-900 dark:text-white font-semibold">Quiz Master</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Took your first quiz</p>
                </div>
              )}
              {stats.achievements.includes('perfectScore') && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-lg p-4 text-center">
                  <Trophy className="h-8 w-8 text-green-600 dark:text-green-500 mx-auto mb-2" />
                  <h3 className="text-gray-900 dark:text-white font-semibold">Perfect Score!</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Got 100% on a quiz</p>
                </div>
              )}
            </>
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
              <Award className="h-12 w-12 mx-auto mb-2 text-gray-300 dark:text-gray-600" />
              <p>No achievements yet. Start learning to unlock achievements!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
