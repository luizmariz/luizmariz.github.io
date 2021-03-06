import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Anchor } from '../shared/styled';
import BaseLayout from './BaseLayout';
import Nav from '../Nav';
import Footer from '../Footer';
import * as S from './styled';

function Layout({ children, location }) {
  const { logoDark, logoLight } = useStaticQuery(
    graphql`
      query {
        logoDark: file(relativePath: { eq: "logo-cute-pink.png" }) {
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
      <Nav location={location} />
      <BaseLayout
        children={children}
        render={() => (
          <header>
            <S.LogoContainer>
              <S.Row>
                <Anchor to="/" aria-label="Ir para a homepage">
                  <S.Logo
                    className="dark"
                    alt="Luiz Ipsum"
                    fixed={logoDark.childImageSharp.fixed}
                    loading="eager"
                    fadeIn={false}
                  />
                  <S.Logo
                    className="light"
                    alt="Luiz Ipsum"
                    fixed={logoLight.childImageSharp.fixed}
                    loading="eager"
                    fadeIn={false}
                  />
                </Anchor>
                <S.BlogTitle>
                  {location.pathname === '/' && <h1>Luiz Ipsum</h1>}
                </S.BlogTitle>
              </S.Row>
            </S.LogoContainer>
          </header>
        )}
      />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
