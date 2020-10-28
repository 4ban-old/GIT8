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

export const groupBy = (list, keyGetter) => {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) map.set(key, [item]);
    else collection.push(item);
  });
  return map;
}
