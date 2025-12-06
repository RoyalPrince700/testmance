const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    // Preserve the status code and message for better error handling
    const error = new Error(data.message || 'Something went wrong');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = getAuthToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);
  return handleResponse(response);
};

// Auth API
export const authAPI = {
  googleLogin: (googleData) => apiRequest('/auth/google/mobile', {
    method: 'POST',
    body: JSON.stringify(googleData),
  }),

  getMe: () => apiRequest('/auth/me'),

  updateProfile: (data) => apiRequest('/auth/update-profile', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
};

// Universities API
export const universitiesAPI = {
  getAll: () => apiRequest('/universities'),

  getById: (id) => apiRequest(`/universities/${id}`),

  getCourses: (id) => apiRequest(`/universities/${id}/courses`),
};

// Courses API
export const coursesAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/courses?${query}`);
  },

  getById: (id) => apiRequest(`/courses/${id}`),

  getChapters: (id) => apiRequest(`/courses/${id}/chapters`),

  getProgress: (id) => apiRequest(`/courses/${id}/progress`),

  enroll: (id) => apiRequest(`/courses/${id}/enroll`, {
    method: 'POST',
  }),

  unenroll: (id) => apiRequest(`/courses/${id}/unenroll`, {
    method: 'POST',
  }),

  getEnrolled: () => apiRequest('/courses/user/enrolled'),
};

// Chapters API
export const chaptersAPI = {
  getById: (id) => apiRequest(`/chapters/${id}`),

  complete: (id) => apiRequest(`/chapters/${id}/complete`, {
    method: 'POST',
  }),

  getProgress: (id) => apiRequest(`/chapters/${id}/progress`),
};

// Quizzes API
export const quizzesAPI = {
  getById: (id) => apiRequest(`/quizzes/${id}`),

  getByChapter: (chapterId) => apiRequest(`/quizzes/chapter/${chapterId}`),

  submit: (id, answers) => apiRequest(`/quizzes/${id}/submit`, {
    method: 'POST',
    body: JSON.stringify({ answers }),
  }),

  submitByChapter: (chapterId, answers, quizData) => apiRequest(`/quizzes/chapter/${chapterId}/submit`, {
    method: 'POST',
    body: JSON.stringify({ answers, quizData }),
  }),

  getResults: (id) => apiRequest(`/quizzes/${id}/results`),

  getAvailable: () => apiRequest('/quizzes/user/available'),
};

// Leaderboard API
export const leaderboardAPI = {
  getGlobal: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/leaderboard/global?${query}`);
  },

  getUniversity: (universityId, params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/leaderboard/university/${universityId}?${query}`);
  },

  getFaculty: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/leaderboard/faculty?${query}`);
  },

  getDepartment: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/leaderboard/department?${query}`);
  },

  getLevel: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/leaderboard/level?${query}`);
  },

  getUserRank: () => apiRequest('/leaderboard/user/rank'),

  getStats: () => apiRequest('/leaderboard/stats'),
};

// Users API
export const usersAPI = {
  getProfile: () => apiRequest('/users/profile'),

  getStats: () => apiRequest('/users/stats'),

  updateProfile: (data) => apiRequest('/auth/update-profile', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),

  updateAvatar: (avatar) => apiRequest('/users/avatar', {
    method: 'PUT',
    body: JSON.stringify({ avatar }),
  }),

  getUserById: (userId) => apiRequest(`/users/${userId}`),
};

// Uploads API (for file uploads)
export const uploadsAPI = {
  uploadAvatar: async (file) => {
    const formData = new FormData();
    formData.append('avatar', file);

    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/uploads/avatar`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    return handleResponse(response);
  },

  uploadCourseImage: async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/uploads/course-image`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    return handleResponse(response);
  },
};

// Health check
export const healthAPI = {
  check: () => apiRequest('/health'),
};

// AI API
export const aiAPI = {
  explain: (topic, content, analogy) => apiRequest('/ai/explain', {
    method: 'POST',
    body: JSON.stringify({ topic, content, analogy }),
  }),
};

export default apiRequest;
