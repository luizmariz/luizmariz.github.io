import styled, { createGlobalStyle } from 'styled-components';
import Img from 'gatsby-image';
import ToggleThemeBtn from '../../components/shared/ToggleThemeBtn';
import lightLink from '../../assets/images/light-link.svg';
import darkLink from '../../assets/images/dark-link.svg';

export const Logo = styled(Img)`
  width: 70px;
  /* Oops */
  margin-left: -0.4rem;
`;

export const GlobalStyles = createGlobalStyle`
  html {
    font: 100%/1.75 'Fira Code VF';
    box-sizing: border-box;
    overflow-y: scroll;
  }

  .light-mode {
    --bg: #FFFFFF;
    --footer: #C3C3C355;
    --text: 51, 51, 51;
    --primary: #4B334C;
    --secondary: #755671;
    --tertiary: #FFD1D0BF;
    --heart: 75, 51, 76;

    a::before {
      content: url(${lightLink});
    }

    .dark {
      display: none !important;
    }
  }

  .dark-mode {
    --bg: #282C35;
    --footer: #F6F6F611;
    --text: 255, 255, 255;
    --primary: #755671;
    --secondary: #FFD1D0;
    --tertiary: #FFFFFF22;
    --heart: 232, 113, 92;

    a::before {
      content: url(${darkLink});
    }

    .light {
      display: none !important;
    }
  }

  body {
    padding: 0;
    margin: 0;
    color: rgb(var(--text));
    background-color: var(--bg);

    @media (min-width: 672px) {
      -webkit-transition: background-color .2s ease-in;
	       -moz-transition: background-color .2s ease-in;
	        -ms-transition: background-color .2s ease-in;
	         -o-transition: background-color .2s ease-in;
	            transition: background-color .2s ease-in;
    }
  }

  * {
    box-sizing: inherit;
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
    color: var(--secondary);
    border-bottom: 2px dotted var(--primary);
  }

  a:hover {
    opacity: 0.7;
  }

  /* TODO: Refact classname anchor as a Anchor shareable component */
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
    opacity: 1;
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

  @media (max-width: 672px) {
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
  }

  .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  padding: 2.6rem 1.3rem;
`;

export const PageContent = styled.div`
  margin-top: 2.5rem;
`;

export const BlogTitle = styled.div`
  margin-left: 0.2rem;
  text-transform: uppercase;
  display: flex;

  h1 {
    margin: 0;
    color: var(--primary);
    font-size: 1.5rem;
    font-weight: 600;
  }

  h3 {
    margin: 0;
    width: 0;
    height: 0;
    display: none;
    font-size: 1.5rem;
    color: var(--primary);
    font-weight: 600;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.6rem;

  .anchor:hover {
    opacity: 1;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 70px;
`;

export const ResponsiveToggleBtn = styled(ToggleThemeBtn)`
  @media (max-width: 672px) {
    display: none;
  }
`;
