// src/store/reducers.js
import { SET_USER_INFO, SET_MATCHES, ADD_CHAT_MESSAGE } from './actions';

const initialState = {
  userInfo: null,
  matches: [],
  chatMessages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    case SET_MATCHES:
      return { ...state, matches: action.payload };
    case ADD_CHAT_MESSAGE:
      return { ...state, chatMessages: [...state.chatMessages, action.payload] };
    default:
      return state;
  }
};

export default reducer;
