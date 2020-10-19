import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;

  &:hover {
    background: black;
  }
`;

export const Button = styled.button`
  display:inline-block;
  padding:0.5em 3em;
  border:0.16em solid #FFFFFF;
  margin:0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration:none;
  text-transform:uppercase;
  font-weight:400;
  text-align:center;
  transition: all 0.15s;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.accent};
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    border-color:${(props) => props.theme.colors.secondary};
  }
`;

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
