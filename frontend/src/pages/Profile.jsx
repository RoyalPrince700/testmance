import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { usersAPI, universitiesAPI } from '../utils/api';
import { Trophy, BookOpen, Target, X, GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';

import { getAllAvatars, getAvatarSrc } from '../utils/avatarUtils';

const avatars = getAllAvatars().map((avatar, index) => ({
  id: avatar.id,
  src: avatar.src,
  name: `Avatar ${avatar.id}`
}));


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
      profileVisibility: user?.profileVisibility || false
    });
    setEditing(false);
  };

  const getCurrentAvatar = () => {
    return getAvatarSrc(user?.avatar);
  };

  const fieldClass = 'h-11 w-full rounded-2xl border border-line bg-surface px-4 text-sm text-ink focus:border-accent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50';
  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })
    : null;
  const universityName = user?.university?.name || (typeof user?.university === 'string' ? user.university : null);
  const achievements = [
    { key: 'firstChapter', icon: BookOpen, title: 'First chapter', description: 'Completed your first chapter' },
    { key: 'firstQuiz', icon: Target, title: 'First quiz', description: 'Took your first quiz' },
    { key: 'perfectScore', icon: Trophy, title: 'Perfect score', description: 'Got 100% on a quiz' },
    { key: 'quizMaster', icon: Target, title: 'Quiz master', description: 'Passed 10 quizzes' },
    { key: 'scholar', icon: GraduationCap, title: 'Scholar', description: 'Reached level 5' },
  ].filter((item) => stats?.achievements?.[item.key]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      </div>
    );
  }

  const profileDetails = [
    { label: 'University', value: universityName },
    { label: 'Faculty', value: user?.faculty },
    { label: 'Department', value: user?.department },
    { label: 'Level', value: user?.academicLevel ? `${user.academicLevel} level` : null },
  ].filter((item) => item.value);

  const statCells = [
    { label: 'Gems', value: user?.gems || 0, gem: true },
    { label: 'Level', value: user?.level || 1 },
    { label: 'Chapters', value: stats?.overview?.completedChapters || stats?.completedChapters || 0 },
    { label: 'Quizzes', value: stats?.overview?.totalQuizzes || stats?.completedQuizzes || 0 },
  ];

  const quizzesThisWeek = stats?.recentActivity?.quizzesThisWeek || 0;
  const chaptersThisWeek = stats?.recentActivity?.chaptersThisWeek || 0;

  return (
    <div className="bg-canvas pb-20 text-ink">
      <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
        <p className="rise-in text-sm font-medium text-accent">Profile</p>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setShowAvatarModal(true)}
              className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line"
              aria-label="Change avatar"
            >
              <img src={getCurrentAvatar()} alt="" className="h-full w-full object-cover" />
            </button>
            <div>
              <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
                {user?.username || 'Set a username'}
              </h1>
              <p className="mt-2 text-[15px] text-slate">{user?.email}</p>
              {memberSince && <p className="mt-1 text-sm text-slate">Member since {memberSince}</p>}
            </div>
          </div>
          {!editing && (
            <button type="button" onClick={() => setEditing(true)} className="btn-primary w-full sm:w-auto">
              Edit profile
            </button>
          )}
        </div>
      </header>

      <section className="mt-12 border-y border-line bg-surface" aria-label="Your record">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {statCells.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-8 md:px-8 ${index > 0 ? 'md:border-l md:border-line' : ''} ${index % 2 === 1 ? 'border-l border-line' : ''} ${index > 1 ? 'border-t border-line md:border-t-0' : ''}`}
            >
              <dt className="text-sm text-slate">{stat.label}</dt>
              <dd className={`mt-1 text-3xl font-medium tracking-tight md:text-4xl ${stat.gem ? 'text-gem' : 'text-ink'}`}>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-12 md:px-8">
        <div className="rounded-3xl border border-line bg-surface p-5 sm:p-8">
        {editing ? (
          <form
            className="grid gap-4 md:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              handleSave();
            }}
          >
            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-medium text-ink">Username</label>
              <input id="username" type="text" name="username" value={formData.username} onChange={handleInputChange} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="university" className="mb-2 block text-sm font-medium text-ink">University</label>
              <select id="university" name="university" value={formData.university} onChange={handleInputChange} className={fieldClass}>
                <option value="">Select university</option>
                {universities.map((uni) => (
                  <option key={uni._id} value={uni._id}>{uni.name} ({uni.shortName})</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="faculty" className="mb-2 block text-sm font-medium text-ink">Faculty</label>
              <select id="faculty" name="faculty" value={formData.faculty} onChange={handleInputChange} className={fieldClass}>
                <option value="">Select faculty</option>
                {facultyList.map((faculty) => (
                  <option key={faculty} value={faculty}>{faculty}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="department" className="mb-2 block text-sm font-medium text-ink">Department</label>
              <select id="department" name="department" value={formData.department} onChange={handleInputChange} disabled={!formData.faculty} className={fieldClass}>
                <option value="">{formData.faculty ? 'Select department' : 'Select a faculty first'}</option>
                {getDepartmentsForFaculty().map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="academicLevel" className="mb-2 block text-sm font-medium text-ink">Level</label>
              <select id="academicLevel" name="academicLevel" value={formData.academicLevel} onChange={handleInputChange} className={fieldClass}>
                <option value="">Select level</option>
                {levelOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="bio" className="mb-2 block text-sm font-medium text-ink">Bio</label>
              <textarea id="bio" name="bio" value={formData.bio} onChange={handleInputChange} rows={3} placeholder="A short note about you" className="w-full resize-none rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-slate focus:border-accent focus:outline-none" />
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-line p-4 md:col-span-2">
              <input
                type="checkbox"
                id="profileVisibility"
                name="profileVisibility"
                checked={formData.profileVisibility}
                onChange={(e) => setFormData({ ...formData, profileVisibility: e.target.checked })}
                className="mt-1 h-4 w-4 accent-accent"
              />
              <label htmlFor="profileVisibility" className="cursor-pointer">
                <span className="block text-sm font-medium text-ink">Show this profile on the leaderboard</span>
                <span className="mt-1 block text-sm text-slate">Other students can see your university, faculty, department, and level.</span>
              </label>
            </div>
            <div className="flex flex-col gap-2 border-t border-line pt-4 sm:flex-row md:col-span-2">
              <button type="submit" disabled={saving} className="btn-primary w-full disabled:opacity-50 sm:w-auto">
                {saving ? 'Saving…' : 'Save'}
              </button>
              <button type="button" onClick={handleCancel} disabled={saving} className="btn-secondary w-full disabled:opacity-50 sm:w-auto">
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            {user?.bio && <p className="text-lg leading-relaxed text-graphite">{user.bio}</p>}
            {profileDetails.length > 0 && (
              <dl className={`grid gap-4 sm:grid-cols-2 ${user?.bio ? 'mt-6 border-t border-line pt-6' : ''}`}>
                {profileDetails.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm text-slate">{item.label}</dt>
                    <dd className="mt-1 text-sm font-medium text-ink">{item.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <div className={`${user?.bio || profileDetails.length > 0 ? 'mt-6 border-t border-line pt-6' : ''}`}>
              <p className="text-sm text-slate">Leaderboard</p>
              <p className="mt-1 text-sm font-medium text-ink">{user?.profileVisibility ? 'Visible' : 'Hidden'}</p>
              <p className="mt-1 text-sm text-slate">
                {user?.profileVisibility
                  ? 'Other students can open your details from the leaderboard.'
                  : 'Your details stay off the leaderboard.'}
              </p>
            </div>
          </div>
        )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16 md:px-8">
        <Reveal>
          <p className="text-sm font-medium text-accent">Achievements</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            What you have unlocked.
          </h2>
        </Reveal>
        {achievements.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <Trophy className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
            <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">Nothing unlocked yet</h3>
            <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">
              Finish a chapter or a quiz and the first mark shows up here.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {achievements.map(({ key, icon: Icon, title, description }, index) => (
              <Reveal key={key} as="article" className="rounded-3xl border border-line bg-surface p-6" delay={index * 80}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{description}</p>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16 md:px-8">
        <p className="text-sm font-medium text-accent">This week</p>
        <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
          Recent work.
        </h2>
        {quizzesThisWeek === 0 && chaptersThisWeek === 0 ? (
          <p className="mt-6 text-[15px] leading-relaxed text-slate">No chapters or quizzes finished this week.</p>
        ) : (
          <ul className="mt-8 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
            {chaptersThisWeek > 0 && (
              <li className="flex items-center gap-3 px-5 py-4 text-sm text-ink">
                <BookOpen className="h-4 w-4 text-accent" strokeWidth={1.75} />
                {chaptersThisWeek} {chaptersThisWeek === 1 ? 'chapter' : 'chapters'} finished
              </li>
            )}
            {quizzesThisWeek > 0 && (
              <li className="flex items-center gap-3 px-5 py-4 text-sm text-ink">
                <Target className="h-4 w-4 text-accent" strokeWidth={1.75} />
                {quizzesThisWeek} {quizzesThisWeek === 1 ? 'quiz' : 'quizzes'} finished
              </li>
            )}
          </ul>
        )}
      </section>

      {showAvatarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-line bg-surface p-6" role="dialog" aria-modal="true" aria-labelledby="avatar-title">
            <div className="flex items-center justify-between">
              <h2 id="avatar-title" className="text-lg font-medium tracking-tight text-ink">Choose an avatar</h2>
              <button type="button" onClick={() => setShowAvatarModal(false)} className="rounded-full p-2 text-slate hover:text-ink" aria-label="Close">
                <X className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {avatars.map((avatar) => {
                const selected = getCurrentAvatar() === avatar.src;
                return (
                  <button
                    key={avatar.id}
                    type="button"
                    onClick={() => handleAvatarSelect(avatar.src)}
                    disabled={saving}
                    aria-label={avatar.name}
                    aria-pressed={selected}
                    className={`overflow-hidden rounded-2xl border disabled:opacity-50 ${selected ? 'border-accent' : 'border-line'}`}
                  >
                    <img src={avatar.src} alt="" className="aspect-square w-full object-cover" />
                  </button>
                );
              })}
            </div>
            {saving && <p className="mt-4 text-sm text-slate">Saving avatar…</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
