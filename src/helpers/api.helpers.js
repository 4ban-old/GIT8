import axios from "axios";
import store from "@/store";
import Constants from "./constants";

export default axios.create({
  baseURL: Constants.API.url,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "If-None-Match": "",
    "Authorization": `token ${store.getState().settingsReducer.token}`,
    // "Cache-Control": "no-cache"
  },
  responseType: "json",
});