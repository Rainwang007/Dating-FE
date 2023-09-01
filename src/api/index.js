import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Auth API
export const registerUser = async (username, email, password) => {
  try {
    await axios.post(`${API_URL}/api/register`, { username, email, password });
  } catch (err) {
    throw new Error('Registration failed, please try again.');
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, { email, password });
    return response.data.token;
  } catch (err) {
    throw new Error('Login failed, please check your credentials.');
  }
};

export const logoutUser = async () => {
  return await axios.get(`${API_URL}/api/logout`);
};

// Profile API
export const fetchProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/profile`);
    return response.data.profile;
  } catch (err) {
    throw new Error('Failed to fetch profile.');
  }
};

export const updateProfile = async (profile) => {
  try {
    await axios.put(`${API_URL}/api/profile`, profile);
  } catch (err) {
    throw new Error('Failed to update profile.');
  }
};

// Match API
export const getMatches = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/matches`);
    return response.data.matches;
  } catch (err) {
    throw new Error('Failed to fetch matches.');
  }
};

export const likeUser = async (userId) => {
  try {
    const response = await axios.post(`${API_URL}/api/matches/${userId}/like`);
    return response.data.message;
  } catch (err) {
    throw new Error('Failed to like user.');
  }
};

export const dislikeUser = async (userId) => {
  try {
    const response = await axios.post(`${API_URL}/api/matches/${userId}/dislike`);
    return response.data.message;
  } catch (err) {
    throw new Error('Failed to dislike user.');
  }
};

// Chat API
export const getChatMessages = async (targetUserId) => {
  try {
    const response = await axios.get(`${API_URL}/api/chat`, { params: { target_user_id: targetUserId } });
    return response.data.chat_history;
  } catch (err) {
    throw new Error('Failed to fetch chat messages.');
  }
};

export const sendMessage = async (targetUserId, message) => {
  try {
    await axios.post(`${API_URL}/api/chat`, { target_user_id: targetUserId, message });
  } catch (err) {
    throw new Error('Failed to send message.');
  }
};
