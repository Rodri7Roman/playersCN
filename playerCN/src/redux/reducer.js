import {
  GET_USER,
  UPDATE_USER,
  LOGIN,
  REGISTER,
  REFRESH,
} from "./actions/users/types";

const initialState = {
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
