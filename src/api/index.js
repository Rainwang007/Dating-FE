import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Auth API
export const registerUser = async (email, password) => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
      });
    } catch (err) {
      throw new Error('Registration failed, please try again.');
    }
  };

export const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      return response.data.token;  // Assuming the JWT token is in response.data.token
    } catch (err) {
      throw new Error('Login failed, please check your credentials.');
    }
  };

export const logoutUser = async () => {
  return await axios.get(`${API_URL}/auth/logout`);
};

// Profile API
export const fetchProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/profile');
      return response.data;
    } catch (err) {
      throw new Error('Failed to fetch profile.');
    }
  };
  
  export const updateProfile = async (profile) => {
    try {
      await axios.put('http://localhost:5000/api/profile', profile);
    } catch (err) {
      throw new Error('Failed to update profile.');
    }
  };

// Match API
export const getMatches = async () => {
    try {
      const response = await axios.get(`${API_URL}/matches`);
      return response.data.matches;
    } catch (err) {
      throw new Error('Failed to fetch matches.');
    }
  };
  
  export const likeUser = async (userId) => {
    try {
      const response = await axios.post(`${API_URL}/matches/${userId}/like`);
      return response.data.message;
    } catch (err) {
      throw new Error('Failed to like user.');
    }
  };
  
  export const dislikeUser = async (userId) => {
    try {
      const response = await axios.post(`${API_URL}/matches/${userId}/dislike`);
      return response.data.message;
    } catch (err) {
      throw new Error('Failed to dislike user.');
    }
  };

// Chat API

export const getChatMessages = async (chatId) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/chat/${chatId}`);
    return response.data.messages;
  } catch (err) {
    throw new Error('Failed to fetch chat messages.');
  }
};

export const sendMessage = async (chatId, message) => {
  try {
    await axios.post(`http://localhost:5000/api/chat/${chatId}`, { content: message });
  } catch (err) {
    throw new Error('Failed to send message.');
  }
};