"use strict";

const { app, ipcMain } = require("electron");
const path = require("path");
const { is } = require("electron-util");
const { menubar } = require("menubar");

const { iconDefault, iconActive, iconUpdate } = require("./constants");
const { generateAppMenu } = require("./menu");

const BrowserWindowOptions = {
  width: 600,
  height: 400,
  webPreferences: {
    // backgroundThrottling: false,
    overlayScrollbars: true,
    nodeIntegration: true,
    enableRemoteModule: true,
  },
};

const menubarApp = menubar({
  icon: iconDefault,
  index: is.development
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`,
  browserWindow: BrowserWindowOptions,
  preloadWindow: true,
  showOnAllWorkspaces: true,
  tooltip: app.name,
  showDockIcon: false,
});

// TODO replace event with _
menubarApp.on("ready", () => {
  menubarApp.tray.setIgnoreDoubleClickEvents(true);
  menubarApp.tray.on("right-click", (event) => {
    menubarApp.tray.popUpContextMenu(generateAppMenu(menubarApp));
  });

  ipcMain.on("github-oauth-token-request", (event, params) => {
    // TODO refactor
    const axios = require("axios");
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Cache-Control"] = "no-cache";
    axios
      .post(params.url, params.data)
      .then((response) => {
        menubarApp.window.send(
          "github-oauth-success",
          response.data.access_token
        );
      })
      .catch((err) => {
        menubarApp.window.send("github-oauth-failure", err);
      });
  });

  ipcMain.on("reopen-window", () => menubarApp.showWindow());
  ipcMain.on("app-quit", () => menubarApp.app.quit());
  ipcMain.on("update-icon", (_, arg) => {
    if (!menubarApp.tray.isDestroyed()) {
      if (arg === "TrayActive") {
        menubarApp.tray.setImage(iconActive);
      } else if (arg === "TrayUpdate") {
        menubarApp.tray.setImage(iconUpdate);
      } else {
        menubarApp.tray.setImage(iconDefault);
      }
    }
  });

  if (is.development)
    require("./development")(menubarApp, BrowserWindowOptions);
});
