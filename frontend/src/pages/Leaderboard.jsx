import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { leaderboardAPI, usersAPI } from '../utils/api';
import { Trophy, X } from 'lucide-react';
import { getAvatarSrc } from '../utils/avatarUtils';

const Leaderboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('global');
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [validationModalOpen, setValidationModalOpen] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [loadError, setLoadError] = useState('');
  const [emptyReason, setEmptyReason] = useState('');

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
        setLoadError('');
        setEmptyReason('');
        
        let response;
        const universityId = user?.university?._id || user?.university;
        
        switch (activeTab) {
          case 'global':
            response = await leaderboardAPI.getGlobal({ limit: 50 });
            setLeaderboard(response.data || []);
            break;
            
          case 'university':
            if (universityId) {
              response = await leaderboardAPI.getUniversity(universityId, { limit: 50 });
              setLeaderboard(response.data || []);
            } else {
              setLeaderboard([]);
              setEmptyReason('Add your university on your profile to see this board.');
            }
            break;
            
          case 'faculty':
            if (user?.faculty && universityId) {
              response = await leaderboardAPI.getFaculty({
                faculty: user.faculty,
                university: universityId,
                limit: 50
              });
              setLeaderboard(response.data || []);
            } else {
              setLeaderboard([]);
              setEmptyReason('Add your faculty on your profile to see this board.');
            }
            break;
            
          case 'department':
            if (user?.department && universityId) {
              response = await leaderboardAPI.getDepartment({
                department: user.department,
                faculty: user.faculty,
                university: universityId,
                limit: 50
              });
              setLeaderboard(response.data || []);
            } else {
              setLeaderboard([]);
              setEmptyReason('Add your department on your profile to see this board.');
            }
            break;
            
          default:
            response = await leaderboardAPI.getGlobal({ limit: 50 });
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
        setLoadError('The rankings did not load. Refresh and try again.');
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboardData();
  }, [activeTab, user?.university?._id, user?.university, user?.faculty, user?.department]);

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
  };

  const tabs = [
    { id: 'global', label: 'Global' },
    { id: 'university', label: 'University' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'department', label: 'Department' },
  ];
  const listedSelf = leaderboard.find((entry) => user && (entry._id === user.id || entry._id === user._id));
  const rankByScope = {
    global: userRank?.globalRank,
    university: userRank?.universityRank,
    faculty: userRank?.facultyRank,
    department: userRank?.departmentRank,
  };
  const yourRank = listedSelf?.rank || rankByScope[activeTab] || null;
  const universityName = user?.university?.name || user?.university?.shortName;
  const scopeLine = {
    global: 'Ranked by gems across every student.',
    university: universityName ? `Ranked by gems at ${universityName}.` : 'Ranked by gems at your university.',
    faculty: user?.faculty ? `Ranked by gems in ${user.faculty}.` : 'Ranked by gems in your faculty.',
    department: user?.department ? `Ranked by gems in ${user.department}.` : 'Ranked by gems in your department.',
  }[activeTab];

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      </div>
    );
  }

  return (
    <div className="bg-canvas pb-20 text-ink">
      <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
        <p className="rise-in text-sm font-medium text-accent">Leaderboard</p>
        <h1 className="rise-in mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]" style={{ animationDelay: '70ms' }}>
          Where you stand.
        </h1>
        <p className="rise-in mt-4 max-w-xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
          {scopeLine}{yourRank ? ` You are #${yourRank}.` : ''}
        </p>
        <div className="rise-in mt-8 flex flex-wrap gap-2" style={{ animationDelay: '210ms' }} role="group" aria-label="Leaderboard scope">
          {tabs.map((tab) => {
            const selected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                aria-pressed={selected}
                className={`h-9 rounded-full px-4 text-sm font-medium transition-colors ${
                  selected
                    ? 'bg-accent-fill text-on-accent'
                    : 'border border-line bg-surface text-graphite hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pt-12 md:px-8">
        {loadError ? (
          <div className="rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <Trophy className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
            <h2 className="mt-4 text-lg font-medium tracking-tight text-ink">Rankings did not load</h2>
            <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">{loadError}</p>
          </div>
        ) : leaderboard.length === 0 ? (
          <div className="rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <Trophy className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
            <h2 className="mt-4 text-lg font-medium tracking-tight text-ink">No rankings yet</h2>
            <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">
              {emptyReason || 'Finish a quiz and the first name appears here.'}
            </p>
            {emptyReason && (
              <button type="button" onClick={() => navigate('/profile')} className="btn-primary mt-6">
                Edit profile
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <caption className="sr-only">Students ranked by gems</caption>
                <thead>
                  <tr className="border-b border-line bg-canvas">
                    <th scope="col" className="px-5 py-3 text-sm font-medium text-slate md:px-8">Rank</th>
                    <th scope="col" className="px-4 py-3 text-sm font-medium text-slate">Student</th>
                    <th scope="col" className="px-5 py-3 text-right text-sm font-medium text-slate md:px-8">Gems</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((leaderboardUser, index) => {
                    const rank = leaderboardUser.rank || index + 1;
                    const isCurrentUser = user && (leaderboardUser._id === user.id || leaderboardUser._id === user._id);
                    const gems = leaderboardUser.gems || leaderboardUser.stats?.totalGems || 0;
                    const progressPercentage = getProgressPercentage(gems, maxGems);

                    return (
                      <tr key={leaderboardUser._id} className={`border-b border-line last:border-b-0 ${isCurrentUser ? 'bg-accent-soft' : ''}`}>
                        <td className="px-5 py-4 text-sm font-medium tabular-nums text-ink md:px-8">{rank}</td>
                        <td className="px-4 py-4">
                          <button
                            type="button"
                            onClick={() => handleUserClick(leaderboardUser._id)}
                            className="flex items-center gap-3 text-left"
                          >
                            {leaderboardUser.avatar ? (
                              <img
                                src={getAvatarSrc(leaderboardUser.avatar)}
                                alt=""
                                className="h-9 w-9 rounded-full border border-line object-cover"
                              />
                            ) : (
                              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-canvas text-sm font-medium text-ink">
                                {leaderboardUser.username?.charAt(0).toUpperCase() || '?'}
                              </span>
                            )}
                            <span>
                              <span className="block text-sm font-medium text-ink">{leaderboardUser.username}</span>
                              {isCurrentUser && <span className="block text-xs font-medium text-accent">You</span>}
                            </span>
                          </button>
                        </td>
                        <td className="px-5 py-4 text-right md:px-8">
                          <span className="text-sm font-medium tabular-nums text-gem">{gems.toLocaleString()}</span>
                          <div className="ml-auto mt-2 h-1 w-24 overflow-hidden rounded-full bg-canvas">
                            <div className="h-full rounded-full bg-accent-fill" style={{ width: `${progressPercentage}%` }} />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {profileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4" onClick={closeProfileModal}>
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-line bg-surface p-6" role="dialog" aria-modal="true" aria-labelledby="board-profile-title" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between">
                <h2 id="board-profile-title" className="text-lg font-medium tracking-tight text-ink">Profile</h2>
                <button type="button" onClick={closeProfileModal} className="rounded-full p-2 text-slate hover:text-ink" aria-label="Close">
                  <X className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>

              {profileLoading && (
                <div className="flex items-center justify-center py-12">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
                </div>
              )}

              {/* Profile Content */}
              {!profileLoading && profileData && (
                <>
                  {profileData.visible === false ? (
                    <div className="py-10 text-center">
                      <h3 className="text-lg font-medium tracking-tight text-ink">This profile is hidden</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-slate">
                        University, faculty, department, and level stay private.
                      </p>
                    </div>
                  ) : (
                    // Profile Details
                    <div className="mt-6">
                      <div className="flex items-center gap-4">
                        {profileData.user.avatar ? (
                          <img src={getAvatarSrc(profileData.user.avatar)} alt="" className="h-14 w-14 rounded-full border border-line object-cover" />
                        ) : (
                          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-canvas text-lg font-medium text-ink">
                            {profileData.user.username?.charAt(0).toUpperCase() || '?'}
                          </span>
                        )}
                        <div>
                          <h3 className="text-lg font-medium tracking-tight text-ink">{profileData.user.username}</h3>
                          {profileData.user.level && <p className="mt-1 text-sm text-slate">Level {profileData.user.level}</p>}
                        </div>
                      </div>
                      <dl className="mt-6 grid gap-4 border-t border-line pt-4">
                        {profileData.user.university && (
                          <div>
                            <dt className="text-sm text-slate">University</dt>
                            <dd className="mt-1 text-sm font-medium text-ink">
                              {typeof profileData.user.university === 'object' ? profileData.user.university.name : profileData.user.university}
                            </dd>
                          </div>
                        )}
                        {profileData.user.faculty && (
                          <div>
                            <dt className="text-sm text-slate">Faculty</dt>
                            <dd className="mt-1 text-sm font-medium text-ink">{profileData.user.faculty}</dd>
                          </div>
                        )}
                        {profileData.user.department && (
                          <div>
                            <dt className="text-sm text-slate">Department</dt>
                            <dd className="mt-1 text-sm font-medium text-ink">{profileData.user.department}</dd>
                          </div>
                        )}
                        {profileData.user.academicLevel && (
                          <div>
                            <dt className="text-sm text-slate">Level</dt>
                            <dd className="mt-1 text-sm font-medium text-ink">{profileData.user.academicLevel} level</dd>
                          </div>
                        )}
                        {profileData.user.gems !== undefined && (
                          <div>
                            <dt className="text-sm text-slate">Gems</dt>
                            <dd className="mt-1 text-sm font-medium tabular-nums text-gem">{profileData.user.gems.toLocaleString()}</dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  )}
                </>
              )}

              {/* Error State */}
              {!profileLoading && profileData?.error && (
                <p className="py-10 text-center text-[15px] text-slate">The profile did not load. Try again.</p>
              )}
          </div>
        </div>
      )}

      {validationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4" onClick={() => setValidationModalOpen(false)}>
          <div className="w-full max-w-md rounded-3xl border border-line bg-surface p-6" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-medium tracking-tight text-ink">Finish your profile</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">{validationMessage}</p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setValidationModalOpen(false);
                  navigate('/profile');
                }}
                className="btn-primary w-full sm:w-auto"
              >
                Edit profile
              </button>
              <button type="button" onClick={() => setValidationModalOpen(false)} className="btn-secondary w-full sm:w-auto">
                Not now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
