import { SET_DARK_THEME } from "../actions/types";

const initialState = {
  isDark: JSON.parse(localStorage.getItem("isDark")) || false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DARK_THEME:
      return {
        ...state,
        isDark: action.payload.val,
      };
    default:
      return state;
  }
}
