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

/**
 * Sort array of object by key field
 *
 * @param {*} array
 * @param {*} key
 * @returns {Array} Sorted Array
 */
export const sortByKey = (array, key) => {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

export const getTime = () => {
  Math.floor(new Date().getTime() / 1000);
};

export const formatTime = (timestamp) => {
  // moment(timestamp).startOf("second").fromNow();
  return 0
};

export const formatBytes = (bytes, decimals) => {
  if (bytes === 0) return "0 Bytes";
  var k = 1024,
    dm = decimals <= 0 ? 0 : decimals || 2,
    sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};


export const reopenWindow = () => {
  ipcRenderer.send("reopen-window");
};

export function updateTrayIcon(notifications = 0) {
  if (notifications > 0) {
    ipcRenderer.send("update-icon", "TrayActive");
  } else {
    ipcRenderer.send("update-icon");
  }
}

export function notify() {
  if (!notifications.length) {
    return;
  }

  if (playSound) {
    playSound();
  }
  showNotifications()

};

export function showNotification (len = 0, latest = '') {
  if (latest) {
    console.log(latest)
    const newNotification = new Notification(latest.repository.full_name, {
      body: latest.subject.title
    })
    newNotification.onclick = () => {
      // store.commit(types.DELETE_NOTIFICATION, last.id)
      let u = latest.subject.url.replace('/pulls/', '/pull/')
      openExternal(u.replace('api.github.com/repos/', 'github.com/'))
    }
  } else {
    let newNotification = new Notification('You have new notifications', {
      body: len + ' new notifications'
    })
    newNotification.onclick = () => {
      console.log('Notification clicked')
    }
  }
}

function playSound() {
  const audio = new Audio('path to notification sound');
  audio.volume = 0.2;
  audio.play();
}
