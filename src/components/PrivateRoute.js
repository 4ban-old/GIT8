import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { Loading } from "@/components/Loading";

import { PageContainer, MainContainer, SideBarContainer } from "@/components/Containers";
import SideBar from "@/containers/SideBar";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.settingsReducer.token);
  const isAuthenticated = token !== null;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <PageContainer>
            <Loading />
            <MainContainer>
              <Component {...props} />
            </MainContainer>
            <SideBarContainer>
              <SideBar />
            </SideBarContainer>
          </PageContainer>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
