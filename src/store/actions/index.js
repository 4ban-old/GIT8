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
  api.get("/user", {}).then((response) => {
    dispatch(setRequestLimit(response.headers['x-ratelimit-remaining']))
    dispatch({ type: types.GET_USER, payload: response.data });
  }).catch((error) => {
    console.log("GET_USER: ", error);
  });
};

// Theme
export const setTheme = (val) => (dispatch) => {
  localStorage.setItem("theme", val);
  dispatch({ type: types.SET_THEME, payload: val });
};

export const fetchNotifications = () => (dispatch) => {
  dispatch(setLoading(true))
  api.get("/notifications", {
    params: {
      participating: store.getState().settingsReducer.participating,
      per_page: store.getState().settingsReducer.per_page,
      since: store.getState().sessionReducer.last_fetch_at,
    }
  }).then((response) => {
    dispatch(setRequestLimit(response.headers['x-ratelimit-remaining']))
    // TODO
    // 1. Send notifications if any to he separate action saveNotifications()
    // 2. update the last_fetch_at date with the newest notification + 1 sec optional
    // 3. do a merge of arrays, the newest on top - merge(new, old)
    dispatch(setLoading(false))
    console.log("Notifications: \n", response.data);
  }).catch((error) => {
    console.log("FETCH_NOTIFICATIONS: ", error);
    dispatch(setLoading(false))
  });
};
