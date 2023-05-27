import {
  GET_USER,
  UPDATE_USER,
  LOGIN,
  REGISTER,
  REFRESH,
  LOGOUT,
  ERROR,
} from "./actions/users/types";

const initialState = {
  user: {},
  error: false,
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
    default:
      return { ...state };
  }
};

export default rootReducer;
