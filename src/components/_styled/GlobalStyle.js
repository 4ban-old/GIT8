import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-size: 1em;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
  }
`;

// export const GlobalStyle = createGlobalStyle`
// ${({ theme }) => css`
//   html {
//     height: 100%;

//     body {
//       display: flex;
//       flex-direction: column;
//       height: 100%;
//       margin: 0;

//       #root {
//         background: ${theme.colors.background};
//         color: ${theme.colors.text};
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         height: 100%;
//         padding: 15px;
//         font-size: 14px;
//         line-height: 1.5;
//         font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
//           Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
//       }
//     }
//   }
// `}
// `;
