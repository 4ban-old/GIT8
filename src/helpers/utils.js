import { shell, remote } from "electron";
const {ipcRenderer, app}  = remote

/**
 * @description Open link in the browser
 * @param {*} link
 * @param {string} [parameter=""]
 */
export const openExternal = (link, parameter = "") => {
  shell.openExternal(link + parameter);
};

export const getVersion = () => {
  return app.getVersion();
};