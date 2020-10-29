import React from 'react';
import styled from "styled-components";

export const AppTitle = styled.div`
  text-transform: uppercase;
  font-size: ${(props) => (props.size || "10em")};
  font-weight: 900;
  text-align: center;
  ${'' /* border: 1px solid black; */}
  ${'' /* flex: 1 0 auto; */}
`;

export const Title = (props) => {
  const { size, sidebar } = props;
  return <AppTitle size={size} sidebar={sidebar}>GIT<sup>8</sup></AppTitle>
}