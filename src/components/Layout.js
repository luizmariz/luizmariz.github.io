import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Link } from "gatsby"
import linkSvg from '../assets/images/link.svg';
import logo from '../assets/images/logo-purple.svg';
import lightTheme from '../utils/light';

const GlobalStyles = createGlobalStyle`
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
    border-bottom: none;
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
    background: rgba(0,0,0,0.2);
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
    background: ${props => props.theme.tertiary.concat('BF')};
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
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  padding: 2.6rem 1.3rem;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Logo = styled.img`
  width: 4.5rem;
`
const BlogTitle = styled.h1`
  font-family: 'Fira Code Medium';
  font-size: 1.2rem;
  margin-left: 1rem;
  margin-bottom: 0;
  margin-right: 0;
`

function Layout ({children}) {
  const [ theme, setTheme ] =  useState('light');

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : {} }>
      {/* ThemeProvider allows just a single child */}
      <React.Fragment>
        <GlobalStyles />
        <Container>
          <Link to='/' className='link'>
            <Row>
              <Logo src={logo} />
              <BlogTitle>LUIZ IPSUM</BlogTitle>
            </Row>
          </Link>
          {children}
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Layout;