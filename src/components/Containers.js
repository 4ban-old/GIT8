import React from 'react';
import styled from "styled-components";

export const LoginContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  color: ${(props) => props.theme.app.login.black};
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.app.login.primary},
    ${(props) => props.theme.app.login.secondary}
  );
`;


export const LoginCenteredContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 85%;
  ${"" /* border: 1px solid red; */}
  text-align: center;
`;

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const MainContainer = styled.div`
  flex: 1;
`;

export const SideBarContainer = styled.div`
  width: 10vw;
  background-color: ${(props) => props.theme.app.colors.primary};
  flex: 0;
`;

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const TopBarContainer = styled.div`
  flex: 0;
  background-color: ${(props) => props.theme.app.colors.primary};
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
