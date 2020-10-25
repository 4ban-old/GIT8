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
