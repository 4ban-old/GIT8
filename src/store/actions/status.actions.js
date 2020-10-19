import { SUCCESS, ERROR, CLEAR } from "./types";

export const success = (type, msg) => ({
  type: SUCCESS,
  payload: { type, msg },
});

export const error = (type, msg) => ({ type: ERROR, payload: { type, msg } });

export const clear = () => ({ type: CLEAR });
