import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../assets/fonts/fonts.css';
import lightTheme from '../utils/light';

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    background-color: ${props => props.theme.bg};
    font-family: "Fira Code";
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 650;
  padding: 0 1rem;
`

function Layout ({children}) {
  const [ theme, setTheme ] =  useState('light');

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : {} }>
      {/* ThemeProvider allows just a single child */}
      <React.Fragment>
        <GlobalStyles />
        <Container>
          {children}
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Layout;