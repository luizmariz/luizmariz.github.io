import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Link } from "gatsby";
import Helmet from 'react-helmet';
import logoLight from '../../assets/images/logo-purple.png';
import logoDark from '../../assets/images/logo-cute-purple.png';
import lightTheme from '../../utils/light';
import darkTheme from '../../utils/dark';
import Nav from  '../Nav';
import Footer from '../Footer';
import ToggleThemeBtn from '../shared/ToggleThemeBtn';
import { useMediaQuery } from 'react-responsive';
import {
  GlobalStyles,
  Container,
  PageContent,
  BlogTitle,
  Logo,
  LogoContainer,
  Row
} from './styled';

function Layout ({ children }) {
  const [ theme, setTheme ] =  useState(window.__theme);
  const isMobile = useMediaQuery({ query: '(max-width: 672px)' });

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
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
          <Nav
            darkMode={theme !== 'light'}
            onToggle={handleToggleTheme}
          />
          <LogoContainer>
            <Row>
              <Link to='/' className='anchor'>
                <Logo src={ theme === 'light' ? logoLight : logoDark } />
              </Link>
              <Link to='/' className='anchor'>
                <BlogTitle>luiz ipsum</BlogTitle>
              </Link>
            </Row>
            { !isMobile &&
              <ToggleThemeBtn
                darkMode={theme !== 'light'}
                onToggle={handleToggleTheme}
              />
            }
          </LogoContainer>
          <PageContent>{children}</PageContent>
        </Container>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Layout;