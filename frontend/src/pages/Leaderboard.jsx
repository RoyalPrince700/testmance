import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { leaderboardAPI, usersAPI } from '../utils/api';
import { Trophy, GraduationCap, User, X, School, Building2, Star, AlertCircle } from 'lucide-react';
import { getAvatarSrc } from '../utils/avatarUtils';

const Leaderboard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('global'); // Default to global view (filtered by level)
  const [selectedUser, setSelectedUser] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [validationModalOpen, setValidationModalOpen] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  // Check if user has level on mount
  useEffect(() => {
    if (!authLoading && user && !user.academicLevel) {
      setValidationMessage('Please set your academic level in your profile to view the leaderboard.');
      setValidationModalOpen(true);
    }
  }, [user, authLoading]);

  // Handle tab change with validation
  const handleTabChange = (tab) => {
    // Validate if user has required fields set
    if (tab === 'faculty' && !user?.faculty) {
      setValidationMessage('Please set your faculty in your profile to view faculty leaderboard.');
      setValidationModalOpen(true);
      return;
    }
    
    if (tab === 'department' && !user?.department) {
      setValidationMessage('Please set your department in your profile to view department leaderboard.');
      setValidationModalOpen(true);
      return;
    }
    
    setActiveTab(tab);
  };

  useEffect(() => {
    const loadLeaderboardData = async () => {
      try {
        setLoading(true);
        
        let response;
        const universityId = user?.university?._id || user?.university;
        
        switch (activeTab) {
          case 'global':
            response = await leaderboardAPI.getGlobal({ 
              limit: 50,
              academicLevel: user?.academicLevel 
            });
            setLeaderboard(response.data || []);
            break;
            
          case 'university':
            if (universityId) {
              response = await leaderboardAPI.getUniversity(universityId, { 
                limit: 50,
                academicLevel: user?.academicLevel 
              });
              setLeaderboard(response.data || []);
            } else {
              // Fallback to global if no university
              response = await leaderboardAPI.getGlobal({ 
                limit: 50,
                academicLevel: user?.academicLevel 
              });
              setLeaderboard(response.data || []);
            }
            break;
            
          case 'faculty':
            if (user?.faculty && universityId) {
              response = await leaderboardAPI.getFaculty({
                faculty: user.faculty,
                university: universityId,
                academicLevel: user.academicLevel,
                limit: 50
              });
              setLeaderboard(response.data || []);
            } else {
              setLeaderboard([]);
            }
            break;
            
          case 'department':
            if (user?.department && universityId) {
              response = await leaderboardAPI.getDepartment({
                department: user.department,
                faculty: user.faculty,
                university: universityId,
                academicLevel: user.academicLevel,
                limit: 50
              });
              setLeaderboard(response.data || []);
            } else {
              setLeaderboard([]);
            }
            break;
            
          default:
            response = await leaderboardAPI.getGlobal({ 
              limit: 50,
              academicLevel: user?.academicLevel 
            });
            setLeaderboard(response.data || []);
        }
        
        // Try to get user rank (optional)
        try {
          const rankResponse = await leaderboardAPI.getUserRank();
          if (rankResponse?.data) {
            setUserRank(rankResponse.data);
          }
        } catch (error) {
          // User rank is optional, ignore errors
        }
      } catch (error) {
        console.error('Failed to load leaderboard:', error);
        setLeaderboard([]);
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboardData();
  }, [activeTab, user?.university?._id, user?.faculty, user?.department, user?.academicLevel]);

  // Get rank color based on position
  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-400'; // Yellow for #1
      case 2:
        return 'bg-gray-400'; // Gray for #2
      case 3:
        return 'bg-orange-400'; // Orange for #3
      default:
        return 'bg-teal-400'; // Teal/Green for #4+
    }
  };

  // Get progress bar color
  const getProgressBarColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-400';
      case 2:
        return 'bg-gray-400';
      case 3:
        return 'bg-orange-400';
      default:
        return 'bg-teal-400';
    }
  };

  // Calculate progress percentage (based on highest gems)
  const getProgressPercentage = (gems, maxGems) => {
    if (!maxGems || maxGems === 0) return 0;
    return Math.min((gems / maxGems) * 100, 100);
  };

  // Calculate max gems for progress bar
  const maxGems = leaderboard.length > 0 
    ? Math.max(...leaderboard.map(u => u.gems || u.stats?.totalGems || 0))
    : 0;

  // Handle user click to view profile
  const handleUserClick = async (userId) => {
    setProfileModalOpen(true);
    setProfileLoading(true);
    setProfileData(null);
    
    try {
      const response = await usersAPI.getUserById(userId);
      setProfileData(response.data);
    } catch (error) {
      console.error('Failed to load user profile:', error);
      setProfileData({ error: true });
    } finally {
      setProfileLoading(false);
    }
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
    setProfileData(null);
    setSelectedUser(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header with Level Info */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
          <Trophy className="h-8 w-8 text-yellow-500" />
          Leaderboard
        </h1>
        {user?.academicLevel && (
          <p className="text-purple-600 bg-purple-50 inline-block px-4 py-1 rounded-full text-sm font-medium border border-purple-100">
            Level {user.academicLevel}
          </p>
        )}
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="bg-gray-100 rounded-lg p-1 flex flex-wrap gap-1">
          <button
            onClick={() => handleTabChange('global')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${
              activeTab === 'global'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Global
          </button>
          <button
            onClick={() => handleTabChange('university')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${
              activeTab === 'university'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4" />
              <span>University</span>
            </div>
          </button>
          <button
            onClick={() => handleTabChange('faculty')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${
              activeTab === 'faculty'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Building2 className="h-4 w-4" />
              <span>Faculty</span>
            </div>
          </button>
          <button
            onClick={() => handleTabChange('department')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${
              activeTab === 'department'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center space-x-2">
              <School className="h-4 w-4" />
              <span>Department</span>
            </div>
          </button>
        </div>
      </div>

      {/* Leaderboard List */}
      {!user?.academicLevel && !authLoading ? (
        <div className="text-center py-12 bg-gray-50 border border-gray-200 rounded-lg">
          <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Level Required</h3>
          <p className="text-gray-600 mb-6">You need to set your academic level in your profile to participate in the rankings.</p>
          <button
            onClick={() => navigate('/profile')}
            className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Update Profile Now
          </button>
        </div>
      ) : leaderboard.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 border border-gray-200 rounded-lg">
          <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No rankings yet</h3>
          <p className="text-gray-600">Be the first to start learning and claim the top spot!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {leaderboard.map((leaderboardUser, index) => {
            const rank = leaderboardUser.rank || index + 1;
            const isCurrentUser = user && (leaderboardUser._id === user.id || leaderboardUser._id === user._id);
            const gems = leaderboardUser.gems || leaderboardUser.stats?.totalGems || 0;
            const rankColor = getRankColor(rank);
            const progressColor = getProgressBarColor(rank);
            const progressPercentage = getProgressPercentage(gems, maxGems);

            return (
              <div
                key={leaderboardUser._id}
                onClick={() => handleUserClick(leaderboardUser._id)}
                className={`bg-white rounded-lg shadow-md p-4 flex items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow ${
                  isCurrentUser ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                {/* Rank Circle */}
                <div className={`${rankColor} w-10 h-10 rounded-full flex items-center justify-center shrink-0`}>
                  <span className="text-white text-base font-bold">{rank}</span>
                </div>

                {/* Avatar */}
                <div className="shrink-0">
                  {leaderboardUser.avatar ? (
                    <img
                      src={getAvatarSrc(leaderboardUser.avatar)}
                      alt={leaderboardUser.username}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full border-2 border-gray-200 bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-sm">
                      {leaderboardUser.username?.charAt(0).toUpperCase() || <User className="h-5 w-5" />}
                    </div>
                  )}
                </div>

                {/* User Info and Progress */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {leaderboardUser.username}
                    </h3>
                    {rank === 1 && (
                      <Trophy className="h-5 w-5 text-yellow-500" />
                    )}
                    {isCurrentUser && (
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">You</span>
                    )}
                  </div>
                  
                  <div className="text-sm font-bold text-gray-500 mb-2">
                    {gems.toLocaleString()} gems
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`${progressColor} h-full transition-all duration-500`}
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Profile Modal */}
      {profileModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeProfileModal}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">User Profile</h2>
                <button
                  onClick={closeProfileModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Loading State */}
              {profileLoading && (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                </div>
              )}

              {/* Profile Content */}
              {!profileLoading && profileData && (
                <>
                  {profileData.visible === false ? (
                    // Visibility Off Message
                    <div className="text-center py-12">
                      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <User className="h-10 w-10 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Profile Visibility Off</h3>
                      <p className="text-gray-600">
                        This user has chosen to keep their profile private.
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        University, faculty, department, and level information is not available.
                      </p>
                    </div>
                  ) : (
                    // Profile Details
                    <div className="space-y-6">
                      {/* Avatar and Username */}
                      <div className="flex items-center space-x-4">
                        {profileData.user.avatar ? (
                          <img
                            src={getAvatarSrc(profileData.user.avatar)}
                            alt={profileData.user.username}
                            className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-xl">
                            {profileData.user.username?.charAt(0).toUpperCase() || <User className="h-8 w-8" />}
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{profileData.user.username}</h3>
                          {profileData.user.level && (
                            <p className="text-gray-600">Level {profileData.user.level}</p>
                          )}
                        </div>
                      </div>

                      {/* Profile Details */}
                      <div className="space-y-4 pt-4 border-t border-gray-200">
                        {profileData.user.university && (
                          <div className="flex items-start space-x-3">
                            <School className="h-5 w-5 text-gray-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-sm text-gray-500">University</p>
                              <p className="text-gray-900 font-medium">
                                {typeof profileData.user.university === 'object' 
                                  ? profileData.user.university.name 
                                  : profileData.user.university}
                              </p>
                            </div>
                          </div>
                        )}

                        {profileData.user.faculty && (
                          <div className="flex items-start space-x-3">
                            <Building2 className="h-5 w-5 text-gray-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-sm text-gray-500">Faculty</p>
                              <p className="text-gray-900 font-medium">{profileData.user.faculty}</p>
                            </div>
                          </div>
                        )}

                        {profileData.user.department && (
                          <div className="flex items-start space-x-3">
                            <GraduationCap className="h-5 w-5 text-gray-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-sm text-gray-500">Department</p>
                              <p className="text-gray-900 font-medium">{profileData.user.department}</p>
                            </div>
                          </div>
                        )}

                        {profileData.user.academicLevel && (
                          <div className="flex items-start space-x-3">
                            <Star className="h-5 w-5 text-gray-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-sm text-gray-500">Level</p>
                              <p className="text-gray-900 font-medium">{profileData.user.academicLevel} Level</p>
                            </div>
                          </div>
                        )}

                        {profileData.user.gems !== undefined && (
                          <div className="flex items-start space-x-3 pt-2 border-t border-gray-200">
                            <Trophy className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-sm text-gray-500">Total Gems</p>
                              <p className="text-gray-900 font-medium">{profileData.user.gems.toLocaleString()} gems</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Error State */}
              {!profileLoading && profileData?.error && (
                <div className="text-center py-12">
                  <p className="text-red-600">Failed to load profile. Please try again.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Validation Modal */}
      {validationModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setValidationModalOpen(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 rounded-full p-2">
                    <AlertCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Profile Setup Required</h2>
                </div>
                <button
                  onClick={() => setValidationModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <p className="text-gray-700 mb-6">
                {validationMessage}
              </p>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setValidationModalOpen(false);
                    navigate('/profile');
                  }}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Go to Profile
                </button>
                <button
                  onClick={() => setValidationModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
