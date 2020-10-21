import { LOGIN, LOGOUT, SET_DARK_THEME } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isDark: JSON.parse(localStorage.getItem("isDark")) || false,
  sound: JSON.parse(localStorage.getItem("sound")) || false,
  participating: JSON.parse(localStorage.getItem("participating")) || false,
  autostart: JSON.parse(localStorage.getItem("autostart")) || false,
  perPage: JSON.parse(localStorage.getItem("perPage")) || 30,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    case SET_DARK_THEME:
      return {
        ...state,
        isDark: action.payload,
      };
    default:
      return state;
  }
}