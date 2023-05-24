import {
  GET_USER,
  UPDATE_USER,
  LOGIN,
  REGISTER,
  REFRESH,
} from "./actions/users/types";

const initialState = {
  user: {},
  token: {},
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
        token: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
