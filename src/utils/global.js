import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import lightLink from '../assets/images/light-link.svg';
import darkLink from '../assets/images/dark-link.svg';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font: 100%/1.75 'Fira Code VF';
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
    padding: 0;
    margin: 0 0 1.5rem 0;

    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.1;
    text-rendering: optimizeLegibility;
    color: inherit;
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
    color: var(--primary);

    text-decoration: none;
    border-bottom: 2px dotted var(--primary);
  }

  a::before {
    margin-right: .3rem;
  }

  a.anchor,
  a.gatsby-resp-image-link {
    display: flex;
    float: none;
    flex-direction: row;
    align-items: center;
    margin: 0;

    border-bottom: none;
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
    padding-right: 2px;
    stroke: rgba(var(--text), .5);
  }

  hr {
    height: 1px;
    margin-top: 0;
    margin-bottom: calc(1.75rem - 1px);

    background: rgba(var(--text), .3);
    border: none;
  }

  time {
    display: block;
    margin-bottom: 1.75rem;
    margin-top: -.7rem;

    font-size: 0.9rem;
    color: rgba(var(--text), .7);
  }

  .mobile-gif,
  .desktop-gif {
    text-align:center;
  }

  .desktop-gif {
    display: none
  }

  ul {
    margin: 0 0 1.5rem 0;
  }

  li {
    margin-bottom: .5rem;
  }

  /* Code */
  blockquote {
    margin: 0 0 1.75rem -1.3rem;
    padding: 0 0 0 1.3rem;

    font-size: 1.2rem;
    font-style: italic;
    font-weight: 300;
    line-height: 1.75rem;
    color: inherit;


    border-left: 0.35rem solid;
    border-left-color: #755671;

    p {
      padding: 0 1.3rem;
    }
  }

  .gatsby-highlight-code-line {
    display: block;
    padding-right: 1em;
    padding-left: 1.25em;
    margin-right: -1.3rem;
    margin-left: -1.3rem;

    background-color: #75567144;
    border-left: 0.25em solid #FFD1D0;
  }

  .gatsby-highlight {
    margin-bottom: 1.75rem;
    margin-right: -1.3rem;
    margin-left: -1.3rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    border-radius: 0;
    background-color: #4B334C;
  }

  pre[class*='language-'] {
    padding: 1.3rem;
    overflow: auto;

    background-color: transparent;
  }

  :not(pre) > code[class*='language-'] {
    color: inherit;
    background: var(--tertiary);
  }

  .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }

  ${media.greaterThan("medium")`
    .mobile-gif {
      display: none;
    }

    .desktop-gif {
      display: inherit;
    }

    a:hover {
      border-bottom: 2px solid var(--primary);
    }

    .gatsby-highlight {
      border-radius: 10px;
    }

    blockquote {
      margin-right: 1.75rem;
      margin-left: -1.75rem;
      padding-left: 1rem;

      p {
        padding: 0;
      }
    }
  `}
`;

export default GlobalStyles;
