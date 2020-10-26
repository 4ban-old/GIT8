import React from 'react';
import styled from "styled-components";

export const SpaceDivider = styled.hr`
  margin: 0 0.1em;
  padding: 0;
  border: 1px solid ${(props) => props.theme.app.text};
  flex-grow: 1;
  ${'' /* flex: 1 0 auto; */}
`;

export const Divider = () => {
  return <SpaceDivider />
}
