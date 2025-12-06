// Avatar utility functions for consistent avatar handling across the app

// Import avatar images
import avatar1 from '../assets/avatars/avatar_1.jpg';
import avatar2 from '../assets/avatars/avatar_2.jpg';
import avatar3 from '../assets/avatars/avatar_3.jpg';
import avatar4 from '../assets/avatars/avatar_4.jpg';
import avatar5 from '../assets/avatars/avatar_5.jpg';
import avatar6 from '../assets/avatars/avatar_6.jpg';
import avatar7 from '../assets/avatars/avatar_7.jpg';
import avatar8 from '../assets/avatars/avatar_8.jpg';
import avatar9 from '../assets/avatars/avatar_9.jpg';

const avatars = [
  { id: 1, src: avatar1 },
  { id: 2, src: avatar2 },
  { id: 3, src: avatar3 },
  { id: 4, src: avatar4 },
  { id: 5, src: avatar5 },
  { id: 6, src: avatar6 },
  { id: 7, src: avatar7 },
  { id: 8, src: avatar8 },
  { id: 9, src: avatar9 },
];

/**
 * Get the avatar image source from an avatar reference
 * @param {string} avatarRef - Avatar reference (e.g., "avatar_1.jpg")
 * @returns {string} - Avatar image source or default avatar
 */
export const getAvatarSrc = (avatarRef) => {
  if (!avatarRef) {
    return avatars[0].src; // Default to first avatar
  }

  // Try to match the avatar reference (avatar_X.jpg)
  const avatarMatch = avatarRef.match(/avatar_(\d+)\.jpg/);
  if (avatarMatch) {
    const index = parseInt(avatarMatch[1]) - 1;
    if (index >= 0 && index < avatars.length) {
      return avatars[index].src;
    }
  }

  // Fallback to default avatar
  return avatars[0].src;
};

/**
 * Get all available avatars
 * @returns {Array} - Array of avatar objects with id and src
 */
export const getAllAvatars = () => {
  return avatars;
};

