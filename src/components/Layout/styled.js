import styled, { createGlobalStyle } from 'styled-components';
import lightLink from '../../assets/images/light-link.svg';
import darkLink from '../../assets/images/dark-link.svg';

export const GlobalStyles = createGlobalStyle`
  html {
    font: 100%/1.75 'Fira Code';
    box-sizing: border-box;
    overflow-y: scroll;
    color: ${props => props.theme.text};
  }

  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.bg};

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
    font-family: 'Fira Code Bold';
    text-rendering: optimizeLegibility;
    font-size: 2.5rem;
    line-height: 1.1;
    font-weight: normal;
  }

  h2 {
    margin-top: 2rem;
    font-weight: normal;
    font-family: 'Fira Code SemiBold';
    line-height: 2rem;
  }

  p {
    margin-bottom: 1.7rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.secondary};
    border-bottom: 2px dotted ${props => props.theme.secondary};
  }

  a::before {
    content: url(${props => props.theme.bg === '#FFFFFF' ? lightLink : darkLink });
  }

  a:hover {
    opacity: 0.7;
  }

  a.anchor {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: none;
    float: none;
    margin: 0;
  }

  a.anchor:hover {
    opacity: 1;
  }

  a.anchor::before {
    content: none;
  }

  a.anchor
  svg[aria-hidden="true"] {
    stroke: ${props=> props.theme.text.concat('99')};
    padding-right: 2px;
  }

  hr {
    margin-top: 0;
    margin-bottom: calc(1.75rem - 1px);
    background: ${props => props.theme.text.concat('44')};
    border: none;
    height: 1px;
  }

  time {
    color: ${props => props.theme.text.concat('AA')};
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
    color: inherit;
    font-style: italic;
    border-left: 0.35rem solid;
    border-left-color: inherit;
    opacity: 0.8;
  }

  .gatsby-highlight-code-line {
    display: block;
    padding-right: 1em;
    padding-left: 13em;
  }

  .gatsby-highlight {
    margin-bottom: 1.75rem;
    border-radius: 10px;
    background-color: #4B334C;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }

  .gatsby-highlight,
  .gatsby-highlight-code-line {
    margin-right: -1.3rem;
    margin-left: -1.3rem;
  }

  pre[class*='language-'] {
    overflow: auto;
    padding: 1.3rem;
    background-color: transparent;
  }

  :not(pre) > code[class*='language-'] {
    background: ${props => props.theme.tertiary};
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
    }
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
  margin-left: 0.5rem;
  text-transform: uppercase;
  display: flex;

  h1 {
    margin: 0;
    color: ${props => props.theme.primary};
    font-size: 1.5rem;
    font-family: 'Fira Code SemiBold';
  }

  h3 {
    margin: 0;
    width: 0;
    height: 0;
    display: none;
    font-size: 1.5rem;
    color: ${props => props.theme.primary};
    font-weight: normal;
    font-family: 'Fira Code SemiBold';
    -webkit-tap-highlight-color: transparent;
  }
`;
export const Logo = styled.img`
  width: 70px;
  /* Oops */
  margin-left: -.4rem;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.6rem;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;