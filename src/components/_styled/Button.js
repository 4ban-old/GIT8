import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 0;
  margin: 0.2em;
  width: 100%;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  transition: all 0.15s;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.text};
  border-radius: 0.3em;

  &:hover {
    opacity: 0.8;
    color: ${(props) => props.theme.colors.accent};
  }
`;

// Login buttons: Shine and text
export const LoginButton = styled.button`
  padding: 0.5rem 2rem;
  margin: 0.3rem;
  outline: none;
  border: none;
  border-radius: 100rem;
  transition: all 0.1s ease-in;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
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
