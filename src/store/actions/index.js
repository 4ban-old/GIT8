import api from "@/helpers/api.helpers";
import store from "@/store";

import * as types from "./types";

// Auth
export const login = (token) => ({
  type: types.LOGIN,
  payload: token ,
});

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: types.LOGOUT });
};

// Loading
export const setLoading = (bool) => ({
  type: types.SET_LOADING,
  payload: bool,
});

export const setRequestLimit = (limit) => ({
  type: types.SET_REQUEST_LIMIT,
  payload: limit,
});

// User
export const getUser = () => (dispatch) => {
  // dispatch(setLoading(true))
  api.get("/user", {}).then((response) => {
    // console.log("GET_USER: ", response);
    dispatch(setRequestLimit(response.headers['x-ratelimit-remaining']))
    dispatch({ type: types.GET_USER, payload: response.data });
    // dispatch(setLoading(false))
  }).catch((error) => {
    console.log("GET_USER error: ", error);
    // dispatch({});
    // dispatch(setLoading(false))
  });
};

// Theme
export const setTheme = (val) => (dispatch) => {
  localStorage.setItem("theme", val);
  dispatch({ type: types.SET_THEME, payload: val });
};

export const fetchNotifications = () => (dispatch) => {
  // dispatch(setLoading(true))
  api.get("/notifications", {
    params: {
      participating: store.getState().settingsReducer.participating,
      since: store.getState().sessionReducer.last_read_at
    }
  }).then((response) => {
    dispatch(setRequestLimit(response.headers['x-ratelimit-remaining']))
    console.log("Notifications: \n", response.data);
    // dispatch({ type: GET_USER, payload: response.data });
    // dispatch(setLoading(false))
  }).catch((error) => {
    console.log("GET_NOTIFICATIONS error: ", error);
    // dispatch({});
    // dispatch(setLoading(false))
  });
};
