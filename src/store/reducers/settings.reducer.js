import * as types from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  theme: localStorage.getItem("theme") || 'dark',
  sound: JSON.parse(localStorage.getItem("sound")) || false,
  participating: JSON.parse(localStorage.getItem("participating")) || false,
  autostart: JSON.parse(localStorage.getItem("autostart")) || false,
  perPage: JSON.parse(localStorage.getItem("perPage")) || 30,
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
    default:
      return state;
  }
}