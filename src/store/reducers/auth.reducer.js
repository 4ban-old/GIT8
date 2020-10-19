import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case LOGIN_FAILURE:
      // call status reducer with error message
      return {
        ...state,
        token: null,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
}
