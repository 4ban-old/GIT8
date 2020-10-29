import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  display: block;
  padding: 0.5em;
  margin: 0.2em;
  height: 3rem;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  transition: all 0.15s;
  color: ${(props) => props.theme.app.text};
  border-radius: 0.3em;
  ${'' /* flex: 1 0 auto; */}
  position: relative;

  &:after {
    color: ${(props) => props.theme.app.text};
    background: ${(props) => props.theme.app.colors.red};
    content: attr(data-count);
    text-align: center;
    border-radius: 1em;
    position: absolute;
    padding: 0 0.3rem;
    top: -0.4rem;
    right: 0rem;
    left: auto;
  }

  &:hover {
    opacity: 0.8;
    color: ${(props) => props.theme.app.colors.accent};
    background: ${(props) => props.theme.app.colors.secondary};
  }

  &:after:hover {
    opacity: 0.5;
  }
`;

// Login buttons: Shine and text
export const LoginButton = styled.button`
  padding: 0.5rem 2rem;
  margin: 0.3rem;
  line-height: 3;
  outline: none;
  border: none;
  border-radius: 100rem;
  transition: all 0.1s ease-in;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  &:active {
    transform: scale(1.03) translateY(3px);
  }
`;

export const LoginButtonBlue = styled(LoginButton)`
  color: white;
  background-color: #2998ff;
  box-shadow: 0 0.5rem 2rem rgba(41, 152, 255, 0.5);
  &:hover {
    background-color: #1d7acb;
  }
`;

export const LoginButtonPurple = styled(LoginButton)`
  color: white;
  background-color: #8800ff;
  box-shadow: 0 0.5rem 2rem rgba(136, 0, 255, 0.5);
  &:hover {
    background-color: #6800c5;
  }
`;

export const LoginButtonGreen = styled(LoginButton)`
  color: white;
  background-color: #28b485;
  box-shadow: 0 0.5rem 2rem rgba(40, 180, 133, 0.5);
  &:hover {
    background-color: #23986f;
  }
`;

export const Button = (props) => {
  const { to, text, icon, onClick = null, badge = null } = props;

  return (<LinkButton to={to} onClick={onClick} data-count={badge}>
    {icon}
    {text}
  </LinkButton>);
};
