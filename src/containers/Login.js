import React from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/";

import { GitHubAuth } from "@/helpers/auth.helpers.js";
import { LoginButtonPurple } from "@/components/_styled/Button";
import {
  LoginContainer,
  LoginCenteredContainer,
} from "@/components/_styled/LoginContainer";
import Title from "@/components/Title";
import { Logo } from "@/components/_styled/Logo";
import LogoImage from "@/assets/images/app-icon.png";

const Login = () => {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.token !== null
  );
  if (isAuthenticated) return <Redirect to="/" />;
  return (
    <LoginContainer>
      <LoginCenteredContainer>
        <Logo src={LogoImage} width="256px" height="256px" />
        <Title size='2em' />
        <LoginButtonPurple onClick={GitHubAuth}>
          Sign in with <Github size="18" />
        </LoginButtonPurple>
      </LoginCenteredContainer>
    </LoginContainer>
  );
};

export default Login;
