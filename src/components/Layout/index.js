import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Link } from "gatsby";
import Helmet from 'react-helmet';

import lightTheme from '../../utils/light';
import darkTheme from '../../utils/dark';
import logoLight from '../../assets/images/logo-purple.png';
import logoDark from '../../assets/images/logo-cute-purple.png';
// import logoWhite from '../../assets/images/logo-white.png';
// import logoGrey from '../../assets/images/logo-grey.png';

import Nav from  '../Nav';
import Footer from '../Footer';
import ToggleThemeBtn from '../shared/ToggleThemeBtn';
import {
  GlobalStyles,
  Container,
  PageContent,
  BlogTitle,
  Logo,
  LogoContainer,
  Row
} from './styled';

function Layout ({ children, location }) {
  const [ theme, setTheme ] =  useState(typeof window != 'undefined' ? window.__theme : 'light');
  const isMobile = useMediaQuery({ query: '(max-width: 672px)' });

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    window.__setTheme(newTheme);
    setTheme(newTheme);
  }

  const renderTitle = () => location.pathname === '/'
    ? (<h1>luiz ipsum</h1>)
    : (<h3>luiz ipsum</h3>);

  const renderLogo = () => theme === 'light' ? logoLight : logoDark;

  if (location.pathname === '/404') {
    return (
      <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
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
            <PageContent>{children}</PageContent>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    );
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
          <header>
            <Nav
              darkMode={theme !== 'light'}
              onToggle={handleToggleTheme}
            />
            <LogoContainer>
              <Row>
                <Link to='/' className='anchor'>
                  <Logo src={renderLogo()} />
                </Link>
                  <BlogTitle>
                    <Link to='/' className='anchor'>
                      {renderTitle()}
                    </Link>
                  </BlogTitle>
              </Row>
              { !isMobile &&
                <ToggleThemeBtn
                  darkMode={theme !== 'light'}
                  onToggle={handleToggleTheme}
                />
              }
            </LogoContainer>
          </header>
          <PageContent>{children}</PageContent>
        </Container>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Layout;