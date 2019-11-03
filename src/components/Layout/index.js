import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import useDarkMode from 'use-dark-mode';
import Helmet from 'react-helmet';
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
  ResponsiveToggleBtn,
} from './styled';

function BasicLayout({ render, children, darkMode, location }) {
  return (
    <React.Fragment>
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: darkMode.value ? '#282C35' : '#4B334C',
          },
        ]}
      />
      <GlobalStyles />
      <Container>
        {render(darkMode, location)}
        <PageContent>{children}</PageContent>
      </Container>
    </React.Fragment>
  );
}

BasicLayout.defaultProps = {
  render: () => {},
};

BasicLayout.propTypes = {
  render: PropTypes.func,
  children: PropTypes.any,
  location: PropTypes.object,
  darkMode: PropTypes.object.isRequired,
};

function Layout({ children, location }) {
  const darkMode = useDarkMode();
  const { logoDark, logoLight } = useStaticQuery(
    graphql`
      query {
        logoDark: file(relativePath: { eq: "logo-cute-purple.png" }) {
          childImageSharp {
            fixed(width: 70, height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoLight: file(relativePath: { eq: "logo-purple.png" }) {
          childImageSharp {
            fixed(width: 70, height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  if (location.pathname === '/404') {
    return <BasicLayout children={children} darkMode={darkMode} />;
  }

  return (
    <React.Fragment>
      <BasicLayout
        children={children}
        darkMode={darkMode}
        location={location}
        render={(darkMode, location) => (
          <header>
            <Nav checked={darkMode.value} onToggle={darkMode.toggle} />
            <LogoContainer>
              <Row>
                <Link
                  to="/"
                  className="anchor"
                  aria-label="Ir para a página principal"
                >
                  <Logo
                    className="dark"
                    alt="Luiz Ipsum"
                    fixed={logoDark.childImageSharp.fixed}
                    draggable={false}
                    fadeIn={false}
                    loading={'eager'}
                  />
                  <Logo
                    className="light"
                    alt="Luiz Ipsum"
                    fixed={logoLight.childImageSharp.fixed}
                    draggable={false}
                    fadeIn={false}
                    loading={'eager'}
                  />
                </Link>
                <BlogTitle>
                  {location.pathname === '/' ? (
                    <h1>luiz ipsum</h1>
                  ) : (
                    <h3>luiz ipsum</h3>
                  )}
                </BlogTitle>
              </Row>
              <ResponsiveToggleBtn
                checked={darkMode.value}
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
