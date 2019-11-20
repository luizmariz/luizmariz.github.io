import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import BaseLayout from './BaseLayout';
import Nav from '../Nav';
import Footer from '../Footer';
import * as S from './styled';

function Layout({ children, location }) {
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
    return <BaseLayout children={children} />;
  }

  return (
    <React.Fragment>
      <BaseLayout
        children={children}
        render={(darkMode) => (
          <header>
            <Nav
              checked={darkMode.value}
              onToggle={darkMode.toggle}
            />
            <S.LogoContainer>
              <S.Row>
                <Link
                  to="/"
                  className="anchor"
                  aria-label="Ir para a homepage"
                >
                  <S.Logo
                    className="dark"
                    alt="Luiz Ipsum"
                    fixed={logoDark.childImageSharp.fixed}
                    loading="eager"
                    critical
                    fadeIn={false}
                  />
                  <S.Logo
                    className="light"
                    alt="Luiz Ipsum"
                    fixed={logoLight.childImageSharp.fixed}
                    loading="eager"
                    critical
                    fadeIn={false}
                  />
                </Link>
                <S.BlogTitle>
                  {location.pathname === '/' &&
                    <h1>Luiz Ipsum</h1>
                  }
                </S.BlogTitle>
              </S.Row>
              <S.ResponsiveToggleBtn
                checked={darkMode.value}
                onToggle={darkMode.toggle}
              />
            </S.LogoContainer>
          </header>
        )}
      />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
