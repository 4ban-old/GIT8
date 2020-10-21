import { LOGIN, LOGIN_FAILURE, LOGOUT } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
}
