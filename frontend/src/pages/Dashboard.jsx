import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { coursesAPI, quizzesAPI, leaderboardAPI, usersAPI } from '../utils/api';
import { BookOpen, Trophy, Target, TrendingUp, Clock, Award, Gem, Star } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [availableQuizzes, setAvailableQuizzes] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [statsResponse, coursesResponse, quizzesResponse, rankResponse] = await Promise.all([
          usersAPI.getStats(),
          coursesAPI.getAll({ limit: 3 }),
          quizzesAPI.getAvailable(),
          leaderboardAPI.getUserRank()
        ]);

          setStats(statsResponse.data);
        
        // Filter courses for the user's university if available
        const userUniversityId = user?.university?._id || user?.university;
        const allCourses = coursesResponse.data;
        
        // If we have university info, filter courses
        const relevantCourses = userUniversityId 
          ? allCourses.filter(course => {
              const courseUniId = course.university?._id || course.university;
              return courseUniId === userUniversityId;
            })
          : allCourses;

        // Show all available courses for the user's university
        setAvailableCourses(relevantCourses);
        setAvailableQuizzes(quizzesResponse.data.slice(0, 3));
        setUserRank(rankResponse.data);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadDashboardData();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome back, {user?.username}! 👋
        </h1>
        <p className="text-white/70 text-lg">
          Ready to continue your learning adventure?
        </p>
      </div>

      {/* Stats Cards */}
      <div className="flex items-center justify-between gap-4 bg-white/10 backdrop-blur-md rounded-lg p-4 card-hover">
        <div className="flex items-center space-x-2 flex-1">
          <Gem className="h-4 w-4 text-yellow-400" />
          <div>
            <p className="text-white/70 text-xs">Gems</p>
            <p className="text-lg font-bold text-white">{user?.gems || 0}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-1">
          <TrendingUp className="h-4 w-4 text-blue-400" />
          <div>
            <p className="text-white/70 text-xs">Level</p>
            <p className="text-lg font-bold text-white">{user?.level || 1}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-1">
          <BookOpen className="h-4 w-4 text-green-400" />
          <div>
            <p className="text-white/70 text-xs">Chapters</p>
            <p className="text-lg font-bold text-white">{stats?.completedChapters || 0}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-1">
          <Trophy className="h-4 w-4 text-purple-400" />
          <div>
            <p className="text-white/70 text-xs">Global Rank</p>
            <p className="text-lg font-bold text-white">#{userRank?.globalRank || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Available Courses */}
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
          const progress = 0; // Default to 0 since we don't have per-course progress yet

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
                  className={`h-full rounded-full ${theme.bar}`} 
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
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

      {/* Recent Activity & Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Available Quizzes */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Take a Quiz</h2>
            <Link
              to="/quizzes"
              className="text-white/70 hover:text-white text-sm font-medium"
            >
              View All →
            </Link>
          </div>

          <div className="space-y-4">
            {availableQuizzes.map((quiz) => (
              <Link
                key={quiz._id}
                to={`/quizzes/${quiz._id}`}
                className="block bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors card-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{quiz.title}</h3>
                    <p className="text-white/70 text-sm">{quiz.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                        {quiz.gemsReward} gems
                      </span>
                      {quiz.hasPassed ? (
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                          Completed
                        </span>
                      ) : (
                        <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">
                          Available
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="ml-4">
                    <Target className="h-6 w-6 text-white/60" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.isArray(stats?.achievements) && stats.achievements.includes('firstChapter') && (
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 text-center">
              <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">First Chapter!</h3>
              <p className="text-white/70 text-sm">Completed your first chapter</p>
            </div>
          )}
          {Array.isArray(stats?.achievements) && stats.achievements.includes('firstQuiz') && (
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 text-center">
              <Target className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Quiz Master</h3>
              <p className="text-white/70 text-sm">Took your first quiz</p>
            </div>
          )}
          {Array.isArray(stats?.achievements) && stats.achievements.includes('perfectScore') && (
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg p-4 text-center">
              <Trophy className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Perfect Score!</h3>
              <p className="text-white/70 text-sm">Got 100% on a quiz</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
