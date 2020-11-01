import api from "@/helpers/api.helpers";
import store from "@/store";
import { getUnique } from '@/helpers/utils'

import * as types from "./types";

// Auth
export const login = (token) => (dispatch) => {
  localStorage.setItem("token", token);
  dispatch({ type: types.LOGIN, payload: token });
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: types.LOGOUT });
};

export const setGroups = (bool) => (dispatch) => {
  localStorage.setItem("groups", bool);
  dispatch({ type: types.SET_GROUPS, payload: bool })
};

export const setSound = (bool) => (dispatch) => {
  localStorage.setItem("sound", bool);
  dispatch({ type: types.SET_SOUND, payload: bool  })
};

export const setParticipating = (bool) => (dispatch) => {
  localStorage.setItem("participating", bool);
  dispatch({ type: types.SET_PARTICIPATING, payload: bool })
  dispatch(fetchNotifications())
};
export const setAutostart = (bool) => (dispatch) => {
  localStorage.setItem("autostart", bool);
  dispatch({ type: types.SET_AUTOSTART, payload: bool })
};

export const setPerPage = (per_page) => (dispatch) => {
  localStorage.setItem("per_page", per_page);
  dispatch({ type: types.SET_PER_PAGE, payload: per_page })
  dispatch(fetchNotifications())
};

export const setTheme = (val) => (dispatch) => {
  localStorage.setItem("theme", val);
  dispatch({ type: types.SET_THEME, payload: val });
};

export const setLoading = (bool) => ({
  type: types.SET_LOADING,
  payload: bool,
});

export const setRequestLimit = (limit) => ({
  type: types.SET_REQUEST_LIMIT,
  payload: limit,
});

export const updateNotificationsList = (updatedList) => ({
  type: types.UPDATE_NOTIFICATIONS_LIST,
  payload: updatedList,
});

export const getUser = () => (dispatch) => {
  api.get("/user", {}).then((response) => {
    dispatch(setRequestLimit(response.headers['x-ratelimit-remaining']))
    dispatch({ type: types.GET_USER, payload: response.data });
  }).catch((error) => {
    console.log("GET_USER: ", error);
  });
};


export const fetchNotifications = () => (dispatch) => {
  dispatch(setLoading(true))
  api.get("/notifications", {
    params: {
      participating: store.getState().settingsReducer.participating,
      per_page: store.getState().settingsReducer.per_page,
    }
  }).then((response) => {
    dispatch(setRequestLimit(response.headers['x-ratelimit-remaining']))
    if (response.data.length) {
      dispatch(updateNotificationsList(getUnique(response.data, 'id')))
    }
    dispatch(setLoading(false))
  }).catch((error) => {
    console.log("FETCH_NOTIFICATIONS: ", error);
    dispatch(setLoading(false))
  });
};
