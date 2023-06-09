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
import {
  GET_COMMENTS,
  GET_POSTS,
  GET_POSTS_USER,
  POST_POST,
} from "./actions/posts/types";

const initialState = {
  user: {},
  error: false,
  posts: [],
  comments: [],
  postsUser: [],
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

    case GET_POSTS_USER: {
      return {
        ...state,
        postsUser: action.payload,
      };
    }
    case POST_POST: {
      return {
        ...state,
        post: [...post, action.payload],
      };
    }
    case GET_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
