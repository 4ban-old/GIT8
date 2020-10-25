import styled from "styled-components";

export const SpaceDivider = styled.hr`
  margin: 0 0.1em;
  padding: 0;
  border: 1px solid ${(props) => props.theme.app.text};
`;
