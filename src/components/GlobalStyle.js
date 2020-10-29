import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
  * {
    font-size: inherit;
    margin: 0;
    padding: 0;
    max-width: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.app.text || '#232323'};
  }


  body {
    line-height: 1rem;
    font-family: ${theme.app.fontFamily || ''};
    font-size: ${theme.app.fontSize || '1em'};
    background: ${theme.app.background || '#fcfcfc'};
    color: ${theme.app.text || '#232323'};
    box-sizing: border-box;
  }
`);