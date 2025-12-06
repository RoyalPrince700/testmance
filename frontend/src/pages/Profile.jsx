import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { usersAPI, universitiesAPI } from '../utils/api';
import { User, Mail, Calendar, Trophy, BookOpen, Target, Gem, Star, Edit, Save, X, Settings, GraduationCap, School, Building2, Image as ImageIcon } from 'lucide-react';

import { getAllAvatars, getAvatarSrc } from '../utils/avatarUtils';

const avatars = getAllAvatars().map((avatar, index) => ({
  id: avatar.id,
  src: avatar.src,
  name: `Avatar ${avatar.id}`
}));

const analogyOptions = [
  { value: 'general', label: 'General' },
  { value: 'football', label: 'Football' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'movies', label: 'Movies' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'cooking', label: 'Cooking' },
  { value: 'music', label: 'Music' },
];

// University of Ilorin Faculties and Departments
const facultiesAndDepartments = {
  'Faculty of Agriculture': [
    'Agricultural Extension & Rural Development',
    'Agricultural Economics & Farm Management',
    'Agronomy',
    'Animal Production',
    'Crop Protection',
    'Aquaculture and Fisheries',
    'Forest Resources Management',
    'Home Economics and Food Science'
  ],
  'Faculty of Arts': [
    'Arabic and Transnational Studies',
    'English and Literary Studies',
    'French and Diplomatic Studies',
    'History and International Studies',
    'Linguistics and Nigerian Languages',
    'Performing and Film Arts',
    'Religions'
  ],
  'Faculty of Basic Clinical Sciences': [
    'Anatomic Pathology',
    'Chemical Pathology & Immunology',
    'Haematology & Blood Transfusion',
    'Medical Microbiology and Parasitology',
    'Pharmacology & Therapeutics',
    'Medical Laboratory Science',
    'Physiotherapy',
    'Radiography'
  ],
  'Faculty of Basic Medical Sciences': [
    'Anatomy',
    'Physiology',
    'Medical Biochemistry'
  ],
  'Faculty of Clinical Sciences': [
    'Anesthesia',
    'Behavioral Sciences',
    'Epidemiology & Community Health',
    'Family Medicine',
    'Medicine',
    'Obstetrics & Gynaecology',
    'Ophthalmology',
    'Otorhinolaryngology',
    'Pediatrics & Child Health',
    'Radiology',
    'Surgery',
    'Dentistry',
    'Nursing'
  ],
  'Faculty of Communication & Information Sciences': [
    'Computer Science',
    'Information Technology',
    'Library & Information Science',
    'Mass Communication',
    'Telecommunication Science'
  ],
  'Faculty of Education': [
    'Adult & Primary Education',
    'Arts Education',
    'Counsellor Education',
    'Educational Management',
    'Educational Technology',
    'Health Promotion & Environmental Health Education',
    'Human Kinetics Education',
    'Science Education',
    'Social Sciences Education'
  ],
  'Faculty of Engineering & Technology': [
    'Agricultural and Biosystems Engineering',
    'Biomedical Engineering',
    'Chemical Engineering',
    'Civil Engineering',
    'Computer Engineering',
    'Electrical Engineering',
    'Food Engineering',
    'Materials & Metallurgical Engineering',
    'Mechanical Engineering',
    'Water Resources and Environmental Engineering'
  ],
  'Faculty of Environmental Sciences': [
    'Architecture',
    'Estate Management',
    'Quantity Surveying',
    'Surveying & Geo-Informatics',
    'Urban & Regional Planning'
  ],
  'Faculty of Law': [
    'Jurisprudence & International Law',
    'Business Law',
    'Islamic Law',
    'Public Law',
    'Private & Property Law'
  ],
  'Faculty of Life Sciences': [
    'Biochemistry',
    'Microbiology',
    'Optometry & Vision Science',
    'Plant Biology',
    'Zoology'
  ],
  'Faculty of Management Sciences': [
    'Accounting',
    'Business Administration',
    'Finance',
    'Industrial Relations & Personnel Management',
    'Marketing',
    'Public Administration'
  ],
  'Faculty of Physical Sciences': [
    'Chemistry',
    'Geology & Mineral Science',
    'Geophysics',
    'Industrial Chemistry',
    'Mathematics',
    'Physics',
    'Statistics'
  ],
  'Faculty of Pharmaceutical Sciences': [
    'Clinical Pharmacy & Pharmacy Practice',
    'Pharmacognosy & Drug Development',
    'Pharmaceutical & Medical Chemistry',
    'Pharmacology',
    'Pharmaceutical Microbiology & Biotechnology',
    'Pharmaceutical & Industrial Pharmacy'
  ],
  'Faculty of Social Sciences': [
    'Criminology & Security Studies',
    'Economics',
    'Geography & Environmental Management',
    'Political Science',
    'Psychology',
    'Social Work',
    'Sociology'
  ],
  'Faculty of Veterinary Medicine': [
    'Veterinary Anatomy',
    'Veterinary Medicine',
    'Veterinary Microbiology',
    'Veterinary Parasitology and Entomology',
    'Veterinary Pathology',
    'Veterinary Pharmacology And Toxicology',
    'Veterinary Physiology and Biochemistry',
    'Veterinary Public Health And Preventive Medicine',
    'Veterinary Surgery and Radiology',
    'Theriogenology and Production'
  ]
};

const facultyList = Object.keys(facultiesAndDepartments);

// Academic Level Options
const levelOptions = [
  { value: '100', label: '100 Level' },
  { value: '200', label: '200 Level' },
  { value: '300', label: '300 Level' },
  { value: '400', label: '400 Level' },
  { value: '500', label: '500 Level' },
  { value: '600', label: '600 Level' }
];

const Profile = () => {
  const { user, updateProfile, loadUser } = useAuth();
  const [stats, setStats] = useState(null);
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    bio: '',
    university: '',
    faculty: '',
    department: '',
    academicLevel: '',
    preferredAnalogy: '',
    profileVisibility: false
  });

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const [statsResponse, universitiesResponse] = await Promise.all([
          usersAPI.getStats(),
          universitiesAPI.getAll()
        ]);
        
        setStats(statsResponse.data);
        
        if (universitiesResponse.success) {
          setUniversities(universitiesResponse.data);
        }

        const universityId = user?.university?._id || user?.university || '';
        
        setFormData({
          username: user?.username || '',
          email: user?.email || '',
          bio: user?.bio || '',
          university: universityId,
          faculty: user?.faculty || '',
          department: user?.department || '',
          academicLevel: user?.academicLevel || '',
          preferredAnalogy: user?.preferredAnalogy || '',
          profileVisibility: user?.profileVisibility || false
        });
      } catch (error) {
        console.error('Failed to load profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadProfileData();
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // If faculty changes, reset department
    if (name === 'faculty') {
      setFormData({
        ...formData,
        faculty: value,
        department: '' // Reset department when faculty changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Get departments for selected faculty
  const getDepartmentsForFaculty = () => {
    if (!formData.faculty) return [];
    return facultiesAndDepartments[formData.faculty] || [];
  };

  const handleAvatarSelect = async (avatarSrc) => {
    try {
      setSaving(true);
      // Find the avatar index
      const avatarIndex = avatars.findIndex(a => a.src === avatarSrc);
      if (avatarIndex === -1) return;
      
      // Store avatar reference as avatar_X.jpg
      const avatarRef = `avatar_${avatarIndex + 1}.jpg`;
      
      // Update avatar via API
      await usersAPI.updateAvatar(avatarRef);
      
      // Reload user data to get updated avatar
      await loadUser();
      
      setShowAvatarModal(false);
    } catch (error) {
      console.error('Failed to update avatar:', error);
      alert('Failed to update avatar. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const response = await updateProfile(formData);
      
      if (response.success) {
        setEditing(false);
      } else {
        alert(response.error || 'Failed to update profile. Please try again.');
      }
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    const universityId = user?.university?._id || user?.university || '';
    setFormData({
      username: user?.username || '',
      email: user?.email || '',
      bio: user?.bio || '',
      university: universityId,
      faculty: user?.faculty || '',
      department: user?.department || '',
      academicLevel: user?.academicLevel || '',
      preferredAnalogy: user?.preferredAnalogy || '',
      profileVisibility: user?.profileVisibility || false
    });
    setEditing(false);
  };

  const getCurrentAvatar = () => {
    return getAvatarSrc(user?.avatar);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer hover:border-purple-500 transition-colors"
                   onClick={() => setShowAvatarModal(true)}>
                <img 
                  src={getCurrentAvatar()} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1.5 cursor-pointer hover:bg-purple-700 transition-colors shadow-md"
                   onClick={() => setShowAvatarModal(true)}>
                <ImageIcon className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user?.username}</h1>
              <p className="text-gray-600">{user?.email}</p>
              {user?.university && (
                <p className="text-gray-500 text-sm">
                  {user.university.name || user.university}
                </p>
              )}
              <p className="text-gray-500 text-sm">
                Member since {new Date(user?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {!editing && (
            <button
              onClick={() => setEditing(true)}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors w-full md:w-auto"
            >
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>
          )}
        </div>

        {/* Profile Form */}
        {editing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="flex items-center space-x-2 text-gray-700 text-sm font-medium mb-2">
                <School className="h-4 w-4" />
                <span>University</span>
              </label>
              <select
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select University</option>
                {universities.map((uni) => (
                  <option key={uni._id} value={uni._id}>
                    {uni.name} ({uni.shortName})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="flex items-center space-x-2 text-gray-700 text-sm font-medium mb-2">
                <Building2 className="h-4 w-4" />
                <span>Faculty</span>
              </label>
              <select
                name="faculty"
                value={formData.faculty}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select Faculty</option>
                {facultyList.map((faculty) => (
                  <option key={faculty} value={faculty}>
                    {faculty}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="flex items-center space-x-2 text-gray-700 text-sm font-medium mb-2">
                <GraduationCap className="h-4 w-4" />
                <span>Department</span>
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                disabled={!formData.faculty}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                <option value="">
                  {formData.faculty ? 'Select Department' : 'Select Faculty First'}
                </option>
                {getDepartmentsForFaculty().map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Level</label>
              <select
                name="academicLevel"
                value={formData.academicLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select Level</option>
                {levelOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="flex items-center space-x-2 text-gray-700 text-sm font-medium mb-2">
                <Settings className="h-4 w-4" />
                <span>Preferred Analogy Style</span>
              </label>
              <select
                name="preferredAnalogy"
                value={formData.preferredAnalogy}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select Analogy Style</option>
                {analogyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <input
                type="checkbox"
                id="profileVisibility"
                name="profileVisibility"
                checked={formData.profileVisibility}
                onChange={(e) => setFormData({ ...formData, profileVisibility: e.target.checked })}
                className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="profileVisibility" className="flex-1 text-gray-700 text-sm font-medium cursor-pointer">
                <div className="font-semibold">Make my profile visible to others</div>
                <div className="text-gray-500 text-xs mt-1">
                  Allow other users to view your university, faculty, department, and level from the leaderboard
                </div>
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50 w-full sm:w-auto"
              >
                <Save className="h-4 w-4" />
                <span>{saving ? 'Saving...' : 'Save'}</span>
              </button>
              <button
                onClick={handleCancel}
                disabled={saving}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors disabled:opacity-50 w-full sm:w-auto"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {user?.bio && (
              <div>
                <p className="text-gray-700">{user.bio}</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              {user?.faculty && (
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">Faculty: </span>
                  <span className="text-gray-900 font-medium">{user.faculty}</span>
                </div>
              )}
              {user?.department && (
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">Department: </span>
                  <span className="text-gray-900 font-medium">{user.department}</span>
                </div>
              )}
              {user?.academicLevel && (
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">Level: </span>
                  <span className="text-gray-900 font-medium">{user.academicLevel} Level</span>
                </div>
              )}
              {user?.preferredAnalogy && (
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">Analogy Style: </span>
                  <span className="text-gray-900 font-medium capitalize">{user.preferredAnalogy}</span>
                </div>
              )}
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">Profile Visibility: </span>
                <span className={`font-medium ${user?.profileVisibility ? 'text-green-600' : 'text-gray-500'}`}>
                  {user?.profileVisibility ? 'Visible' : 'Hidden'}
                </span>
              </div>
              <p className="text-gray-500 text-xs mt-1 ml-7">
                {user?.profileVisibility 
                  ? 'Other users can view your profile details from the leaderboard'
                  : 'Your profile details are hidden from other users'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-yellow-100 p-3 rounded-lg w-fit mx-auto mb-3">
            <Gem className="h-6 w-6 text-yellow-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{user?.gems || 0}</p>
          <p className="text-gray-600">Total Gems</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-3">
            <Star className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{user?.level || 1}</p>
          <p className="text-gray-600">Current Level</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-3">
            <BookOpen className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats?.overview?.completedChapters || stats?.completedChapters || 0}</p>
          <p className="text-gray-600">Chapters Completed</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-3">
            <Target className="h-6 w-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats?.overview?.totalQuizzes || stats?.completedQuizzes || 0}</p>
          <p className="text-gray-600">Quizzes Completed</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats?.achievements?.firstChapter && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="text-gray-900 font-semibold">First Chapter!</h3>
                <p className="text-gray-600 text-sm">Completed your first chapter</p>
              </div>
            </div>
          )}

          {stats?.achievements?.firstQuiz && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 flex items-center space-x-3">
              <Target className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-gray-900 font-semibold">Quiz Master</h3>
                <p className="text-gray-600 text-sm">Took your first quiz</p>
              </div>
            </div>
          )}

          {stats?.achievements?.perfectScore && (
            <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
              <Trophy className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-gray-900 font-semibold">Perfect Score!</h3>
                <p className="text-gray-600 text-sm">Got 100% on a quiz</p>
              </div>
            </div>
          )}

          {(!stats?.achievements || Object.values(stats.achievements).every(a => !a)) && (
            <div className="col-span-full text-center py-8">
              <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No achievements yet</h3>
              <p className="text-gray-600">Complete chapters and quizzes to earn achievements!</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {stats?.recentActivity ? (
            <div className="space-y-4">
              {stats.recentActivity.quizzesThisWeek > 0 && (
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <Target className="h-6 w-6 text-blue-600" />
                  <div className="flex-1">
                    <p className="text-gray-900">Completed {stats.recentActivity.quizzesThisWeek} quiz(es) this week</p>
                  </div>
                </div>
              )}
              {stats.recentActivity.chaptersThisWeek > 0 && (
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <BookOpen className="h-6 w-6 text-green-600" />
                  <div className="flex-1">
                    <p className="text-gray-900">Completed {stats.recentActivity.chaptersThisWeek} chapter(s) this week</p>
                  </div>
                </div>
              )}
              {stats.recentActivity.quizzesThisWeek === 0 && stats.recentActivity.chaptersThisWeek === 0 && (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No recent activity</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No recent activity</p>
            </div>
          )}
        </div>
      </div>

      {/* Avatar Selection Modal */}
      {showAvatarModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Select Avatar</h2>
              <button
                onClick={() => setShowAvatarModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {avatars.map((avatar) => (
                <div
                  key={avatar.id}
                  onClick={() => handleAvatarSelect(avatar.src)}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    getCurrentAvatar() === avatar.src
                      ? 'border-purple-600 ring-2 ring-purple-500/50'
                      : 'border-gray-300 hover:border-purple-400'
                  }`}
                >
                  <img
                    src={avatar.src}
                    alt={avatar.name}
                    className="w-full h-full object-cover aspect-square"
                  />
                  {getCurrentAvatar() === avatar.src && (
                    <div className="absolute inset-0 bg-purple-600/20 flex items-center justify-center">
                      <div className="bg-purple-600 rounded-full p-2">
                        <Star className="h-5 w-5 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {saving && (
              <div className="mt-4 text-center text-gray-600">
                Saving avatar...
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
