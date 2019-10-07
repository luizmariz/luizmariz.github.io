import styled, { createGlobalStyle } from 'styled-components';
import linkSvg from '../../assets/images/link.svg';

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
      transition: background-color ease-in .25s;
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
    margin-bottom: 1.75rem;
    color: inherit;
    font-family: 'Fira Code SemiBold';
    text-rendering: optimizeLegibility;
    font-size: 2.5rem;
    line-height: 1.1;
    font-weight: normal;
  }

  p {
    margin-bottom: 1.7rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    border-bottom: 2px dotted #755671;
  }

  a::before {
    content: url(${linkSvg});
  }

  a:hover {
    opacity: 0.8;
  }

  a.anchor {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: none;
    float: none;
    padding: 0;
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

  a.link {
    border-bottom: none;
  }

  a.link::before {
    content: none;
  }

  hr {
    margin-top: 0;
    margin-bottom: calc(1.75rem - 1px);
    background: ${props => props.theme.text.concat('44')};
    border: none;
    height: 1px;
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
    padding-left: 1.25em;
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
  margin-top: 4.5rem;
`;
export const BlogTitle = styled.h1`
  font-family: 'Fira Code Medium';
  font-size: 1rem;
  margin-left: 1rem;
  margin-bottom: 0;
  margin-right: 0;
`;
export const Logo = styled.img`
  width: 70px;
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