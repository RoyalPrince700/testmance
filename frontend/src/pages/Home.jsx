import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const stats = [
    { number: '1000+', label: 'Students' },
    { number: '50+', label: 'Courses' },
    { number: '10+', label: 'Universities' },
    { number: '5000+', label: 'Quizzes Taken' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {!isAuthenticated ? (
            <>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
               Make Learning Fun & Rewarding!
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
                Study. Play. Win. 🎮
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get ready ace your studies with courses, quizzes, badges, and a leaderboard that keeps you motivated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/courses"
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors card-hover"
                >
                  Browse Courses
                </Link>
              </div>

              {/* Stats Section */}
              <div className="max-w-4xl mx-auto mt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center card-hover">
                    <div className="text-3xl mb-2">🔥</div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">1 day</div>
                    <div className="text-gray-600 text-sm">Daily Streak</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center card-hover">
                    <div className="text-3xl mb-2">🎖️</div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">0</div>
                    <div className="text-gray-600 text-sm">Badges Earned</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center card-hover">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">#24</div>
                    <div className="text-gray-600 text-sm">Leaderboard Rank</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center card-hover">
                    <div className="text-3xl mb-2">✅</div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">10 / 56</div>
                    <div className="text-gray-600 text-sm">Topics Mastered</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Welcome to TestMancer
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
                The fun learning platform that makes education exciting! Learn at your own pace,
                earn rewards, and compete with fellow students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/dashboard"
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors card-hover"
                >
                  Go to Dashboard
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Stats Section - Only show when authenticated */}
      {isAuthenticated && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default Home;
