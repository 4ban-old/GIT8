import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { GitHubAuth } from "@/helpers/auth.helpers.js";

import { Github } from "@styled-icons/boxicons-logos/";
import LogoImage from "@/assets/images/app-icon.png";

import { LoginContainer, LoginWrapper } from '@/components/Containers';
import { Title } from "@/components/Title";
import { Version } from "@/components/Version";
import { Logo } from "@/components/Logo";
import { LoginButtonPurple } from "@/components/Button";

const Login = () => {
  const isAuthenticated = useSelector(
    (state) => state.settingsReducer.token !== null
  );

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <LoginContainer>
      <LoginWrapper>
        <Logo src={LogoImage} width="256px" height="256px" />
        <Version />
        <Title size='2em' />
        <LoginButtonPurple onClick={GitHubAuth}>
          Sign in with <Github size="32" />
        </LoginButtonPurple>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
