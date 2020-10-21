import api from "../../helpers/api.helpers";
import store from "@/store";

import { LOGIN, LOGOUT, LOADING, LOADING_DONE, GET_USER, SET_DARK_THEME } from "./types";

// Auth
export const loginSuccess = (token) => ({
  type: LOGIN,
  payload: { token },
});

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};

// Loading
export const setLoading = (bool) => ({
  type: LOADING,
  payload: { bool },
});

// User
export const getUserAction = () => (dispatch) => {
  // dispatch(setLoading(true))
  api
    .get("/user", {
      headers: {
        Authorization: `token ${store.getState().authReducer.token}`,
      },
    })
    .then((response) => {
      // console.log("GET_USER: ", response);
      dispatch({ type: GET_USER, payload: { user: response.data } });
      // dispatch(setLoading(false))
    })
    .catch((error) => {
      console.log("GET_USER error: ", error);
      dispatch({});
      // dispatch(setLoading(false))
    });
};

// Theme
export const setDarkTheme = (val) => (dispatch) => {
  localStorage.setItem("isDark", val);
  dispatch({ type: SET_DARK_THEME, payload: { val } });
};

export const fetchNotifications = () => (dispatch) => {

};
