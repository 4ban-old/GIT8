import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
  * {
    font-size: inherit;
    margin: 0;
    padding: 0;
    max-width: none;
    -webkit-font-smoothing: auto;
    // -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.app.background || '#fcfcfc'};
    color: ${theme.app.text || '#232323'};
  }

  html,
  body {
    line-height: 1rem;
    font-family: ${theme.app.fontFamily || ''};
    font-size: ${theme.app.fontSize || '1em'};
  }
`);