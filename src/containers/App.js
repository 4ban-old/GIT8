import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import store from "@/store";

import { GitHubAuthStatus } from "@/helpers/auth.helpers.js";

import { ThemeDecorator } from '@/components/ThemeDecorator';
import { PrivateRoute } from "@/components/PrivateRoute";

import Notifications from "@/containers/Notifications";
import Settings from "@/containers/Settings";
import Login from "@/containers/Login";
import Error404 from "@/containers/Error404";

const App = () => {
  useEffect(() => {
    GitHubAuthStatus(store);
  }, []);

  return (
    <ThemeDecorator>
      <Switch>
        <PrivateRoute exact path="/" component={Notifications} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={Error404} />
      </Switch>
    </ThemeDecorator>
  );
};

export default App;
