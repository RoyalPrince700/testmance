import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { usersAPI } from '../utils/api';
import { User, Mail, Calendar, Trophy, BookOpen, Target, Gem, Star, Edit, Save, X } from 'lucide-react';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    bio: ''
  });

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const statsResponse = await usersAPI.getStats();
        setStats(statsResponse.data);

        setFormData({
          username: user?.username || '',
          email: user?.email || '',
          bio: user?.bio || ''
        });
      } catch (error) {
        console.error('Failed to load profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfileData();
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      const response = await usersAPI.updateProfile(formData);
      updateUser(response.data);
      setEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  const handleCancel = () => {
    setFormData({
      username: user?.username || '',
      email: user?.email || '',
      bio: user?.bio || ''
    });
    setEditing(false);
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
      {/* Profile Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-white/60" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{user?.username}</h1>
              <p className="text-white/70">{user?.email}</p>
              <p className="text-white/60 text-sm">
                Member since {new Date(user?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
            >
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-green-400 transition-colors"
              >
                <Save className="h-4 w-4" />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-red-400 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
            </div>
          )}
        </div>

        {/* Profile Form */}
        {editing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-white/70 text-sm mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>
        ) : (
          <div>
            <p className="text-white/80">{user?.bio || 'No bio provided yet.'}</p>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
          <div className="bg-yellow-500/20 p-3 rounded-lg w-fit mx-auto mb-3">
            <Gem className="h-6 w-6 text-yellow-400" />
          </div>
          <p className="text-2xl font-bold text-white">{user?.gems || 0}</p>
          <p className="text-white/70">Total Gems</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
          <div className="bg-blue-500/20 p-3 rounded-lg w-fit mx-auto mb-3">
            <Star className="h-6 w-6 text-blue-400" />
          </div>
          <p className="text-2xl font-bold text-white">{user?.level || 1}</p>
          <p className="text-white/70">Current Level</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
          <div className="bg-green-500/20 p-3 rounded-lg w-fit mx-auto mb-3">
            <BookOpen className="h-6 w-6 text-green-400" />
          </div>
          <p className="text-2xl font-bold text-white">{stats?.completedChapters || 0}</p>
          <p className="text-white/70">Chapters Completed</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
          <div className="bg-purple-500/20 p-3 rounded-lg w-fit mx-auto mb-3">
            <Target className="h-6 w-6 text-purple-400" />
          </div>
          <p className="text-2xl font-bold text-white">{stats?.completedQuizzes || 0}</p>
          <p className="text-white/70">Quizzes Completed</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats?.achievements?.includes('firstChapter') && (
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-yellow-400" />
              <div>
                <h3 className="text-white font-semibold">First Chapter!</h3>
                <p className="text-white/70 text-sm">Completed your first chapter</p>
              </div>
            </div>
          )}

          {stats?.achievements?.includes('firstQuiz') && (
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 flex items-center space-x-3">
              <Target className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-white font-semibold">Quiz Master</h3>
                <p className="text-white/70 text-sm">Took your first quiz</p>
              </div>
            </div>
          )}

          {stats?.achievements?.includes('perfectScore') && (
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg p-4 flex items-center space-x-3">
              <Trophy className="h-8 w-8 text-green-400" />
              <div>
                <h3 className="text-white font-semibold">Perfect Score!</h3>
                <p className="text-white/70 text-sm">Got 100% on a quiz</p>
              </div>
            </div>
          )}

          {(!stats?.achievements || stats.achievements.length === 0) && (
            <div className="col-span-full text-center py-8">
              <Trophy className="h-16 w-16 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No achievements yet</h3>
              <p className="text-white/70">Complete chapters and quizzes to earn achievements!</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {stats?.recentActivity?.length > 0 ? (
            stats.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                <div className="flex-shrink-0">
                  {activity.type === 'chapter' && <BookOpen className="h-6 w-6 text-green-400" />}
                  {activity.type === 'quiz' && <Target className="h-6 w-6 text-blue-400" />}
                  {activity.type === 'achievement' && <Trophy className="h-6 w-6 text-yellow-400" />}
                </div>
                <div className="flex-1">
                  <p className="text-white">{activity.description}</p>
                  <p className="text-white/60 text-sm">
                    {new Date(activity.date).toLocaleDateString()} • {activity.points || 0} points
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-white/30 mx-auto mb-4" />
              <p className="text-white/70">No recent activity</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
