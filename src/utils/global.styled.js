import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font: 100%/1.75 'Karla';
    font-weight: 300;
    overflow-y: scroll;
    overscroll-behavior: default;
    user-select: none;
    background: #000c1a;

    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  * {
    box-sizing: border-box;
    transition: background 275ms ease, opacity 375ms ease;
    scrollbar-width: thin;
    scrollbar-color: #505050 #252525;
    scroll-behavior: smooth;
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

  h1, h2 {
    line-height: 120%;
  }

  a {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    float: none;
    margin: 0;
    text-decoration: none;
  }

  pre[class*='language-'],
  code[class*='language-'] *,
  code[class*='language-'] {
    font-family:
      Fira Code VF,
      monospace !important;
    font-size: 0.75rem !important;
    user-select: text !important;
  }
`;

export default GlobalStyles;
