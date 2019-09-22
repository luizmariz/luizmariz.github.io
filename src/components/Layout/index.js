import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Link } from "gatsby";
import Helmet from 'react-helmet';
import logoLight from '../../assets/images/logo-purple.png';
import lightTheme from '../../utils/light';
import Nav from  '../Nav';
import Footer from '../Footer';
import {
  GlobalStyles,
  Container,
  PageContent,
  BlogTitle,
  Logo,
  LogoContainer
} from './styled';


function Layout ({children}) {
  const [ theme, setTheme ] =  useState('light');

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : {} }>
      {/* ThemeProvider allows just a single child */}
      <React.Fragment>
        <GlobalStyles />
        <Helmet
          meta={[
            {
              name: 'theme-color',
              content: theme === 'light' ? '#4B334C' : '#282C35'
            }
          ]}
        />
        <Container>
          <Nav />
          <LogoContainer>
            <Link to='/' className='anchor'>
              <Logo src={ theme === 'light' ? logoLight : null } />
            </Link>
            <Link to='/' className='anchor'>
              <BlogTitle>LUIZ IPSUM</BlogTitle>
            </Link>
          </LogoContainer>
          <PageContent>{children}</PageContent>
        </Container>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Layout;