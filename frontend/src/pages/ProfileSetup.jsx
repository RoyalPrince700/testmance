import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authAPI } from '../utils/api';
import { User, Save, X, Image as ImageIcon, Star } from 'lucide-react';
import testmancerLogo from '../assets/testmancer-logo.png';

import { getAllAvatars, getAvatarSrc } from '../utils/avatarUtils';

const avatars = getAllAvatars().map((avatar, index) => ({
  id: avatar.id,
  src: avatar.src,
  name: `Avatar ${avatar.id}`
}));

const ProfileSetup = () => {
  const { user, loadUser } = useAuth();
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(user?.avatar || '');
  const [username, setUsername] = useState(user?.username || '');
  const [usernameError, setUsernameError] = useState('');

  const validateUsername = (value) => {
    if (!value) {
      return ''; // Username is now optional
    }
    if (value.length < 3) {
      return 'Username must be at least 3 characters';
    }
    if (value.length > 30) {
      return 'Username must be no more than 30 characters';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return 'Username can only contain letters, numbers, and underscores';
    }
    return '';
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError(validateUsername(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateUsername(username);
    if (error) {
      setUsernameError(error);
      return;
    }

    try {
      setSaving(true);
      const profileData = {
        avatar: selectedAvatar
      };

      // Only include username if it was changed or is not empty
      if (username && username !== user?.username) {
        profileData.username = username;
      }

      const response = await authAPI.setupProfile(profileData);

      if (response.success) {
        // Reload user data to get updated profile
        await loadUser();
        // Redirect to dashboard
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Profile setup error:', error);
      if (error.data?.message === 'Username already taken') {
        setUsernameError('Username already taken. Please choose another one.');
      } else {
        alert('Failed to complete profile setup. Please try again.');
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src={testmancerLogo}
              alt="TestMancer Logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Complete Your Profile
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your username has been set from your Gmail. You can change it later in your profile settings.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Display */}
            <div>
              <label className="flex items-center space-x-2 text-gray-700 text-sm font-medium mb-2">
                <User className="h-4 w-4" />
                <span>Username (Optional)</span>
              </label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                  usernameError ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter a custom username (optional)"
              />
              {usernameError && (
                <p className="mt-1 text-sm text-red-600">{usernameError}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Leave empty to keep your Gmail username. 3-30 characters, letters, numbers, and underscores only.
              </p>
            </div>

            {/* Avatar Selection */}
            <div>
              <label className="flex items-center space-x-2 text-gray-700 text-sm font-medium mb-4">
                <ImageIcon className="h-4 w-4" />
                <span>Choose Avatar</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {avatars.map((avatar) => (
                  <div
                    key={avatar.id}
                    onClick={() => setSelectedAvatar(avatar.src)}
                    className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      selectedAvatar === avatar.src
                        ? 'border-teal-600 ring-2 ring-teal-500/50'
                        : 'border-gray-300 hover:border-teal-400'
                    }`}
                  >
                    <img
                      src={avatar.src}
                      alt={avatar.name}
                      className="w-full h-full object-cover aspect-square"
                    />
                    {selectedAvatar === avatar.src && (
                      <div className="absolute inset-0 bg-teal-600/20 flex items-center justify-center">
                        <div className="bg-teal-600 rounded-full p-1">
                          <Star className="h-3 w-3 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={saving || !!usernameError}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="h-5 w-5" />
              <span>{saving ? 'Setting up...' : 'Complete Setup'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
