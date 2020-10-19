import { SET_DARK_THEME } from "./types";

export const setDarkTheme = (val) => (dispatch) => {
  localStorage.setItem("isDark", val);
  dispatch({ type: SET_DARK_THEME, payload: { val } });
};
