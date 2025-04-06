import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font: 100%/1.75 'Karla';
    font-weight: 400;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #505050 #252525;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
