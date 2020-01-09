import { createGlobalStyle } from 'styled-components';
import lightLink from '../assets/images/light-link.svg';
import darkLink from '../assets/images/dark-link.svg';

const GlobalStyles = createGlobalStyle`
  html {
    font: 100%/1.75 'Fira Code VF';
    box-sizing: border-box;
    overflow-y: scroll;
  }

  .light-mode {
    --bg: #ffffff;
    --footer: #f4f7f6;
    --text: 51, 51, 51;
    --primary: #4B334C;
    --secondary: #755671;
    --tertiary: #ffd1d0bf;
    --heart: 75, 51, 76;
    --icon: #333333;

    a::before {
      content: url(${lightLink});
    }

    .dark {
      display: none !important;
    }

    .light-bulb {
      color: #ffd700;
    }
  }

  .dark-mode {
    --bg: #282C35;
    --footer: #313642;
    --text: 255, 255, 255;
    --primary: #ffd1d0;
    --secondary: #755671;
    --tertiary: #ffffff22;
    --heart: 232, 113, 92;
    --icon: #ffd1d0;

    a::before {
      content: url(${darkLink});
    }

    .light {
      display: none !important;
    }

    .light-bulb {
      color: #ffffffbb;
    }
  }

  body {
    padding: 0;
    margin: 0;
    color: rgb(var(--text));
    background-color: var(--bg);
  }

  body,
  * {
    box-sizing: inherit;
    -webkit-transition: background-color .2s ease-in;
       -moz-transition: background-color .2s ease-in;
        -ms-transition: background-color .2s ease-in;
         -o-transition: background-color .2s ease-in;
            transition: background-color .2s ease-in;
  }

  h1 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding: 0;
    margin-bottom: 1.5rem;
    color: inherit;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 2.5rem;
    line-height: 1.1;
  }

  h2 {
    margin-top: 2rem;
    font-weight: 600;
    line-height: 2rem;
  }

  h3 {
    font-weight: 500;
  }

  p {
    margin-bottom: 1.7rem;
  }

  a {
    text-decoration: none;
    color: var(--primary);
    border-bottom: 2px dotted var(--primary);
  }

  a::before {
    margin-right: .3rem;
  }

  a.anchor,
  a.gatsby-resp-image-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: none;
    float: none;
    margin: 0;
  }

  a.anchor:hover,
  a.gatsby-resp-image-link:hover {
    border-bottom: none;
  }

  a.anchor::before,
  a.gatsby-resp-image-link::before {
    content: none;
  }

  a.anchor
  svg[aria-hidden="true"] {
    stroke: rgba(var(--text), .5);
    padding-right: 2px;
  }

  hr {
    margin-top: 0;
    margin-bottom: calc(1.75rem - 1px);
    background: rgba(var(--text), .3);
    border: none;
    height: 1px;
  }

  time {
    color: rgba(var(--text), .7);
    margin-bottom: 1.75rem;
    margin-top: -.7rem;
    display: block;
    font-size: 0.9rem;
  }

  .mobile-gif,
  .desktop-gif {
    text-align:center;
  }

  p,
  ul {
    margin: 0 0 1.5rem 0;
  }

  li {
    margin-bottom: .5rem;
  }

  /* Code */
  blockquote {
    margin-left: -1.75rem;
    margin-right: 1.75rem;
    margin-top: 0;
    margin-bottom: 1.75rem;
    padding-bottom: 0;
    padding-left: 1.3rem;
    padding-right: 0;
    padding-top: 0;
    font-size: 1.2rem;
    line-height: 1.75rem;
    font-style: italic;
    border-left: 0.35rem solid;
    font-weight: 300;
    border-left-color: #755671;
    color: inherit;
  }

  .gatsby-highlight-code-line {
    background-color: #75567144;
    display: block;
    padding-right: 1em;
    padding-left: 1.25em;
    border-left: 0.25em solid #FFD1D0;
    margin-right: -1.3rem;
    margin-left: -1.3rem;
  }

  .gatsby-highlight {
    margin-bottom: 1.75rem;
    border-radius: 10px;
    background-color: #4B334C;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    margin-right: -1.3rem;
    margin-left: -1.3rem;
  }

  pre[class*='language-'] {
    overflow: auto;
    padding: 1.3rem;
    background-color: transparent;
  }

  :not(pre) > code[class*='language-'] {
    background: var(--tertiary);
    color: inherit;
  }

  @media (max-width: 770px) {
    .gatsby-highlight {
      border-radius: 0;
    }

    blockquote {
      margin-left: -1.3rem;
      margin-right: 0;
      padding-left: 1rem;

      p {
        padding: 0 1.3rem;
      }
    }

    .desktop-gif {
      display: none
    }
  }

  @media (min-width: 770px){
    .mobile-gif {
      display: none;
    }

    a:hover {
      border-bottom: 2px solid var(--primary);
    }
  }

  .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }
`;

export default GlobalStyles;
