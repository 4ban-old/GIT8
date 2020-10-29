import styled from "styled-components";

export const Logo = styled.img`
  width: ${(props) => (props.width ? props.width : "128px")};
  height: ${(props) => (props.height ? props.height : "128px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
