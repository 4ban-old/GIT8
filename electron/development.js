const {
  default: installExtension,
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS,
} = require("electron-devtools-installer");

[REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS].forEach((extension) => {
  installExtension(extension)
    .then((name) => console.warn(`Added Extension: ${name}`))
    .catch((err) => console.error("An error occurred: ", err));
});

module.exports = (menubarApp, BrowserWindowOptions) => {
  menubarApp.window.openDevTools();
  menubarApp.window.webContents.on("devtools-opened", () => {
    menubarApp.window.resizable = true;
  });

  menubarApp.window.webContents.on("devtools-closed", () => {
    const trayBounds = menubarApp.tray.getBounds();
    menubarApp.window.setSize(
      BrowserWindowOptions.width,
      BrowserWindowOptions.height
    );
    menubarApp.positioner.move("trayCenter", trayBounds);
    menubarApp.window.resizable = false;
  });
};
