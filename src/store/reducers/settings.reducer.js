import * as types from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  theme: localStorage.getItem("theme") || 'dark',
  groups: JSON.parse(localStorage.getItem("groups")) || false,
  sound: JSON.parse(localStorage.getItem("sound")) || false,
  participating: JSON.parse(localStorage.getItem("participating")) || false,
  autostart: JSON.parse(localStorage.getItem("autostart")) || false,
  per_page: JSON.parse(localStorage.getItem("per_page")) || 30,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        token: null,
      };
    case types.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case types.SET_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    case types.SET_SOUND:
      return {
        ...state,
        sound: action.payload,
      };
    case types.SET_AUTOSTART:
      return {
        ...state,
        autostart: action.payload,
      };
    case types.SET_PARTICIPATING:
      return {
        ...state,
        participating: action.payload,
      };
    case types.SET_PER_PAGE:
      return {
        ...state,
        per_page: action.payload,
      };
    default:
      return state;
  }
}