import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import lightTheme from "@/themes/light";
import darkTheme from "@/themes/dark";

import { PrivateRoute } from "@/components/PrivateRoute";
import { GlobalStyle } from "@/components/_styled/GlobalStyle";
import { GitHubAuthStatus } from "@/helpers/auth.helpers.js";
import store from "@/store";

import Notifications from "@/containers/Notifications";
import Settings from "@/containers/Settings";
import Login from "@/containers/Login";
import Error404 from "@/containers/Error404";
import Loading from "@/components/Loading";

const App = () => {
  const isDark = useSelector((state) => state.themeReducer.isDark);

  useEffect(() => {
    GitHubAuthStatus(store);
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      {/* <Loading /> */}
      <Switch>
        <PrivateRoute exact path="/" component={Notifications} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={Error404} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
