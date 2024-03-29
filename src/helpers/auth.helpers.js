// TODO delete remote, move auth window creation to backend
import { remote, ipcRenderer } from "electron";
const BrowserWindow = remote.BrowserWindow;
const dialog = remote.dialog;

import Constants from "./constants";
import { login, logout } from "@/store/actions";

export const GitHubAuthStatus = (store) => {
  ipcRenderer.on("github-oauth-success", async (event, token) => {
    store.dispatch(login(token));
  });
  ipcRenderer.on("github-oauth-failure", async (event, err) => {
    store.dispatch(logout());
  });
};

export const GitHubAuth = () => {
  const authWindow = new BrowserWindow({
    show: true,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: false,
    },
  });
  const session = authWindow.webContents.session;
  session.clearStorageData();

  const authorizeUrl = `${Constants.OAUTH.authorizationUrl}?client_id=${Constants.OAUTH.clientID}&scope=${Constants.OAUTH.scope}`;

  authWindow.loadURL(authorizeUrl);
  // authWindow.webContents.openDevTools();

  authWindow.on("close", () => {
    authWindow.destroy();
  });

  authWindow.webContents.on(
    "did-fail-load",
    (event, errorCode, errorDescription) => {
      authWindow.destroy();
      dialog.showErrorBox(
        "Something went wrong",
        `Error: ${errorCode}, ${errorDescription}.`
      );
    }
  );
  authWindow.webContents.on("will-navigate", (event, url) => {
    onCallback(url);
  });

  const onCallback = (url) => {
    const params = new URL(url).searchParams;
    const code = params.get("code");
    const error = params.error;

    if (code) {
      // authWindow.removeAllListeners("closed");
      authWindow.destroy();
      getToken(Constants.OAUTH, code);
    } else if (error) {
      // TODO global alert with error
      console.error("code error");
      authWindow.destroy();
    }
  };

  const getToken = (authParams, code) => {
    const url = authParams.tokenUrl;
    const data = {
      client_id: authParams.clientID,
      client_secret: authParams.clientSecret,
      code: code,
    };

    ipcRenderer.send("github-oauth-token-request", { url, data });
  };
};
