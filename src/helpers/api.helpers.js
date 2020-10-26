import axios from "axios";
import store from "@/store";
import Constants from "./constants";

export default axios.create({
  baseURL: Constants.API.url,
  headers: {
    "Content-Type": "application/json",
    "If-None-Match": "",
    "Authorization": `token ${store.getState().settingsReducer.token}`
  },
  responseType: "json",
});
