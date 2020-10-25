import React from "react";
import { getVersion } from '@/helpers/utils'
import styled from "styled-components";

export const AppVersion = styled.div`
  font-weight: 700;
  background: ${props => props.theme.app.login.purple};
  border-radius: 100px;
  width: 10vw;
  text-align:center;
  margin: 0 auto;
`;

export const Version = () => {
  const version = getVersion()
  return <AppVersion>v{version}</AppVersion>;
};