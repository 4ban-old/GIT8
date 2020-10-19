const { app, shell, Menu } = require("electron");
const { openNewGitHubIssue, debugInfo } = require("electron-util");

exports.generateAppMenu = (menubarApp) => {
  return Menu.buildFromTemplate([
    { label: app.name + ": " + app.getVersion(), enabled: false },
    { type: "separator" },
    {
      label: "Check for updates",
      enabled: true,
      click: () => {
        // autoUpdater.checkForUpdatesAndNotify();
      },
    },
    {
      label: "DevTools",
      click: () => {
        menubarApp.window.openDevTools();
      },
    },
    { type: "separator" },
    {
      label: "Report an issue",
      click: () => {
        const body = `<!-- Please succinctly describe your issue and steps to reproduce it. --> --- ${debugInfo()}`;
        openNewGitHubIssue({
          user: "4ban",
          repo: "GIT8",
          body,
        });
      },
    },
    { type: "separator" },
    {
      label: "Quit",
      click: () => {
        menubarApp.app.quit();
      },
    },
  ]);
};
