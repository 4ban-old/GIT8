import { LOADING, GET_USER, SET_REQUEST_LIMIT } from "../actions/types";

const initialState = {
  loading: false,
  user: null,
  request_limit: null,
  last_read_at: null,
  notifications: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_REQUEST_LIMIT:
      return {
        ...state,
        request_limit: action.payload,
      };
    default:
      return state;
  }
}