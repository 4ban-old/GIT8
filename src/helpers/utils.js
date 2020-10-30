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

/**
 * Function returns an array with removed duplicates by any field in the object
 * @param {Array} arr - Array of objects to work with.
 * @param {string} comp - Field to check.
 *
 * @return {Array} Array of objects with removed duplicates
 *
 * @example
 *
 *    var unique = getUnique([{'key':1}, {'key':2}, {'key':3}, {'key':3}, {'key':3}], 'key')
 *    unique = [{'key':1}, {'key':2}, {'key':3}]
 */
export const getUnique = (arr, comp) => {
  const unique = arr
    .map((e) => e[comp])
    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the dead keys & store unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e]);
  return unique;
};