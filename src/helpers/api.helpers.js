import axios from "axios";
import Constants from "./constants";

export default axios.create({
  baseURL: Constants.API.url,
  headers: {
    "Content-Type": "application/json",
    "If-None-Match": "",
  },
  responseType: "json",
});
