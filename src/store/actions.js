// src/store/actions.js
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_MATCHES = 'SET_MATCHES';
export const ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE';

export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  payload: userInfo,
});

export const setMatches = (matches) => ({
  type: SET_MATCHES,
  payload: matches,
});

export const addChatMessage = (message) => ({
  type: ADD_CHAT_MESSAGE,
  payload: message,
});
