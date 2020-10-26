import api from "@/helpers/api.helpers";
import store from "@/store";

import { LOGIN, LOGOUT, LOADING, GET_USER, SET_DARK_THEME, SET_REQUEST_LIMIT } from "./types";

// Auth
export const loginSuccess = (token) => ({
  type: LOGIN,
  payload: token ,
});

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};

// Loading
export const setLoading = (bool) => ({
  type: LOADING,
  payload: bool,
});

export const setRequestLimit = (limit) => ({
  type: SET_REQUEST_LIMIT,
  payload: limit,
});

// User
export const getUserAction = () => (dispatch) => {
  // dispatch(setLoading(true))
  api
    .get("/user", {})
    .then((response) => {
      // console.log("GET_USER: ", response);
      dispatch(setRequestLimit(response.headers['x-ratelimit-remaining']))
      dispatch({ type: GET_USER, payload: response.data });
      // dispatch(setLoading(false))
    })
    .catch((error) => {
      console.log("GET_USER error: ", error);
      // dispatch({});
      // dispatch(setLoading(false))
    });
};

// Theme
export const setDarkTheme = (val) => (dispatch) => {
  localStorage.setItem("isDark", val);
  dispatch({ type: SET_DARK_THEME, payload: val });
};

export const fetchNotifications = () => (dispatch) => {
  api
    .get("/notifications", {
      params: {
        participating: store.getState().settingsReducer.participating
      }
    })
    .then((response) => {
      console.log("GET_Notifications: ", response);
      dispatch(setRequestLimit(response.headers['x-ratelimit-remaining']))
      // dispatch({ type: GET_USER, payload: response.data });
      // dispatch(setLoading(false))
    })
    .catch((error) => {
      console.log("GET_NOTIFICATIONS error: ", error);
      // dispatch({});
      // dispatch(setLoading(false))
    });
};
