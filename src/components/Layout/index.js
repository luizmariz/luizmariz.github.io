import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import useDarkMode from 'use-dark-mode';
import Helmet from 'react-helmet';
import logoLight from '../../assets/images/logo-purple.png';
import logoDark from '../../assets/images/logo-cute-purple.png';
import Nav from '../Nav';
import Footer from '../Footer';
import {
  GlobalStyles,
  Container,
  PageContent,
  BlogTitle,
  Logo,
  LogoContainer,
  Row,
  ResponsiveToggleBtn
} from './styled';


function BasicLayout ({ render, children, darkMode }) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: darkMode ? '#282C35' : '#4B334C',
          },
        ]}
      />
      <Container>
        {render()}
        <PageContent>{children}</PageContent>
      </Container>
    </React.Fragment>
  );
}

BasicLayout.defaultProps = {
  render: () => {}
}

BasicLayout.propTypes = {
  render: PropTypes.func,
  children: PropTypes.any,
  darkMode: PropTypes.bool
}

function Layout ({ children, location }) {
  const darkMode = useDarkMode();

  if (location.pathname === '/404') {
    return <BasicLayout children={children} darkMode={darkMode.value} />
  }

  return (
      <React.Fragment>
        <BasicLayout
          children={children}
          darkMode={darkMode.value}
          render={() => (
            <header>
              <Nav darkMode={darkMode.value} onToggle={darkMode.toggle} />
              <LogoContainer>
              <Row>
                <Link to="/" className="anchor">
                  <Logo src={darkMode.value ? logoDark : logoLight} />
                </Link>
                <BlogTitle>
                  {
                    location.pathname === '/'
                      ? <h1>luiz ipsum</h1>
                      : <h3>luiz ipsum</h3>
                  }
                </BlogTitle>
              </Row>
              <ResponsiveToggleBtn
                darkMode={darkMode.value}
                onToggle={darkMode.toggle}
              />
            </LogoContainer>
          </header>
        )}
      />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
