import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Link } from "gatsby";
import { GlobalStyles, Container, PageContent, BlogTitle, Logo} from './styled';
import Helmet from 'react-helmet';
import logoLight from '../../assets/images/logo-purple.png';
import lightTheme from '../../utils/light';
import Nav from  '../Nav';


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
          <Link to='/' className='anchor'>
            <Logo src={ theme === 'light' ? logoLight : null } />
            <BlogTitle>LUIZ IPSUM</BlogTitle>
          </Link>
          <PageContent>{children}</PageContent>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Layout;