import { SUCCESS, ERROR, CLEAR } from "../actions/types";

const initialState = {
  type: null,
  msg: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        type: "success",
        msg: action.payload.msg,
      };
    case ERROR:
      return {
        type: "danger",
        msg: action.payload.msg,
      };
    case CLEAR:
      return {
        type: null,
        msg: null,
      };
    default:
      return state;
  }
}
