import axios from 'axios';

const API_URL = 'http://localhost:5000';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    'Authorization': `Bearer ${token}`
  };
};

// Auth API
export const registerUser = async (username, email, password) => {
 
  await axios.post(`${API_URL}/api/register`, { username, email, password });
};

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/api/login`, { email, password });
  return response.data.token;
};

export const logoutUser = async () => {
  await axios.get(`${API_URL}/api/logout`, { headers: getAuthHeader() });
};

// Profile API
export const fetchProfile = async () => {
  const response = await axios.get(`${API_URL}/api/profile`, { headers: getAuthHeader() });
  return response.data.profile;
};

export const updateProfile = async (profile) => {
  await axios.put(`${API_URL}/api/profile`, profile, { headers: getAuthHeader() });
};

// Match API

export const getRandomMatch = async () => {
  const response = await axios.get(`${API_URL}/api/matches/random`, { headers: getAuthHeader() });
  return response.data.match;
};

export const likeUser = async (userId) => {
  const response = await axios.post(`${API_URL}/api/matches/${userId}/like`, {}, { headers: getAuthHeader() });
  return response.data.message;
};


export const dislikeUser = async (userId) => {
  const response = await axios.post(`${API_URL}/api/matches/${userId}/dislike`, {}, { headers: getAuthHeader() });
  return response.data.message;
};

// Chat API

export const getEmailMatches = async () => {
  const response = await axios.get(`${API_URL}/api/get_email`, { headers: getAuthHeader() });
  return response.data.matched_users;
};

