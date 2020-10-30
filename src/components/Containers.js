import React from 'react';
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  color: ${(props) => props.theme.app.login.black};
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.app.login.primary},
    ${(props) => props.theme.app.login.secondary}
  );
`;

export const LoginWrapper = styled.div`
  flex: 0;
`;

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const SideBarContainer = styled.div`
  width: 10vw;
  background-color: ${(props) => props.theme.app.colors.primary};
  flex: 0;
`;

export const SideBarWrapper = styled.div`
  display: grid;
  grid-template-column: 1;
  grid-template-row: 1;
`;

export const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
