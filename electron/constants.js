const path = require("path");

exports.iconDefault =
  process.platform === "win32"
    ? path.join(__dirname, "..", "resources", "tray", "trayTemplateWindows.png")
    : path.join(__dirname, "..", "resources", "tray", "trayTemplate.png");

exports.iconActive =
  process.platform === "win32"
    ? path.join(__dirname, "..", "resources", "tray", "trayActiveWindows.png")
    : path.join(__dirname, "..", "resources", "tray", "trayActive.png");

exports.iconUpdate =
  process.platform === "win32"
    ? path.join(__dirname, "..", "resources", "tray", "trayTemplateWindows.png")
    : path.join(__dirname, "..", "resources", "tray", "trayUpdate.png");
