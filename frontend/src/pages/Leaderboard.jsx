import { useState, useEffect } from 'react';
import { leaderboardAPI, usersAPI } from '../utils/api';
import { Trophy, Medal, Award, Crown, TrendingUp, Star, Gem } from 'lucide-react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('global');

  useEffect(() => {
    const loadLeaderboardData = async () => {
      try {
        const [leaderboardResponse, userRankResponse] = await Promise.all([
          leaderboardAPI.getGlobal(),
          leaderboardAPI.getUserRank()
        ]);

        setLeaderboard(leaderboardResponse.data);
        setUserRank(userRankResponse.data);
      } catch (error) {
        console.error('Failed to load leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboardData();
  }, []);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-white/70">#{rank}</span>;
    }
  };

  const getRankBadge = (rank) => {
    if (rank <= 3) {
      return 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
    } else if (rank <= 10) {
      return 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30';
    } else if (rank <= 50) {
      return 'bg-gradient-to-r from-green-500/20 to-teal-500/20 border-green-500/30';
    }
    return 'bg-white/10 border-white/20';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Leaderboard</h1>
        <p className="text-white/70 text-lg">
          See how you rank against other learners!
        </p>
      </div>

      {/* User Rank Card */}
      {userRank && (
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-lg p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {getRankIcon(userRank.globalRank)}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Your Rank</h3>
                <p className="text-white/70">Keep learning to climb the leaderboard!</p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-white">#{userRank.globalRank}</div>
              <div className="text-white/70">Global Rank</div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-1">
          <button
            onClick={() => setActiveTab('global')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              activeTab === 'global'
                ? 'bg-white/20 text-white'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Global
          </button>
          <button
            onClick={() => setActiveTab('weekly')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              activeTab === 'weekly'
                ? 'bg-white/20 text-white'
                : 'text-white/70 hover:text-white'
            }`}
          >
            This Week
          </button>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">
            {activeTab === 'global' ? 'Global Rankings' : 'Weekly Rankings'}
          </h2>
        </div>

        {leaderboard.length === 0 ? (
          <div className="text-center py-12">
            <Trophy className="h-16 w-16 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No rankings yet</h3>
            <p className="text-white/70">Be the first to start learning and claim the top spot!</p>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {leaderboard.map((user, index) => {
              const rank = index + 1;
              const isCurrentUser = userRank && user._id === userRank.userId;

              return (
                <div
                  key={user._id}
                  className={`p-6 ${isCurrentUser ? 'bg-blue-500/10' : ''} ${
                    rank <= 3 ? 'bg-gradient-to-r from-yellow-500/5 to-orange-500/5' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Rank */}
                      <div className={`w-12 h-12 rounded-lg border flex items-center justify-center ${getRankBadge(rank)}`}>
                        {getRankIcon(rank)}
                      </div>

                      {/* User Info */}
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className={`font-semibold ${isCurrentUser ? 'text-blue-400' : 'text-white'}`}>
                            {user.username}
                            {isCurrentUser && <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded ml-2">You</span>}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-white/60 mt-1">
                          <span className="flex items-center space-x-1">
                            <TrendingUp className="h-3 w-3" />
                            <span>Level {user.level || 1}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Gem className="h-3 w-3" />
                            <span>{user.gems || 0} gems</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="text-right">
                      <div className="text-lg font-semibold text-white">{user.totalScore || 0}</div>
                      <div className="text-white/60 text-sm">Total Score</div>
                    </div>
                  </div>

                  {/* Detailed Stats */}
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-lg font-semibold text-green-400">{user.completedChapters || 0}</div>
                      <div className="text-white/60 text-xs">Chapters</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-lg font-semibold text-blue-400">{user.completedQuizzes || 0}</div>
                      <div className="text-white/60 text-xs">Quizzes</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-lg font-semibold text-yellow-400">{user.averageScore?.toFixed(1) || 0}%</div>
                      <div className="text-white/60 text-xs">Avg Score</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Achievement Badges */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Achievement Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg">
            <Crown className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold">#1 Rank</h3>
            <p className="text-white/70 text-sm">Top of the leaderboard</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
            <Trophy className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold">Quiz Master</h3>
            <p className="text-white/70 text-sm">Perfect quiz scores</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg">
            <Star className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold">Fast Learner</h3>
            <p className="text-white/70 text-sm">Complete chapters quickly</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
            <Gem className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold">Gem Collector</h3>
            <p className="text-white/70 text-sm">Earn the most gems</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
