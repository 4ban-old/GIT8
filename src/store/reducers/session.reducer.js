import * as types from "../actions/types";

const initialState = {
  loading: false,
  user: null,
  request_limit: null,
  notifications: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SET_REQUEST_LIMIT:
      return {
        ...state,
        request_limit: action.payload,
      };
    case types.UPDATE_NOTIFICATIONS_LIST:
      return {
        ...state,
        notifications: action.payload,
      };
    default:
      return state;
  }
}
