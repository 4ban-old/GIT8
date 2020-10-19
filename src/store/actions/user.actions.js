import { GET_USER } from "./types";
import api from "../../helpers/api.helpers";
import store from "@/store";

export const getUserAction = () => (dispatch) => {
  api
    .get("/user", {
      headers: {
        Authorization: `token ${store.getState().authReducer.token}`,
      },
    })
    .then((response) => {
      console.log("GET_USER: ", response);
      dispatch({ type: GET_USER, payload: { user: response.data } });
    })
    .catch((error) => {
      console.log("GET_USER error: ", error);
      dispatch({});
    });
};
