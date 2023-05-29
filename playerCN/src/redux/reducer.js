import {
  GET_USER,
  UPDATE_NAME,
  UPDATE_USERNAME,
  LOGIN,
  REGISTER,
  REFRESH,
  LOGOUT,
  ERROR,
} from "./actions/users/types";
import { GET_POSTS } from "./actions/posts/types";

const initialState = {
  user: {},
  error: false,
  posts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case GET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
