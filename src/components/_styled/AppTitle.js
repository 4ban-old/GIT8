import styled from "styled-components";

export const AppTitle = styled.div`
  text-transform: uppercase;
  font-size: ${(props) => (props.size || "10em")};
  font-weight: 900;
  text-align: center;
  color: ${props => (props.sidebar ? props.theme.colors.text : 'inherit')};
  margin: 0.2em;
  ${'' /* border: 1px solid black; */}
`;
