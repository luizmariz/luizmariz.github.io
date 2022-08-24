import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Footer from '../Footer';
import Nav from '../Nav';
import { Anchor } from '../shared/styled';
import BaseLayout from './BaseLayout';
import * as S from './styled';

function Layout({ children, location }) {
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
                <Anchor to="/" aria-label="Ir para a homepage" style={{marginLeft: '-0.4rem', marginRight: '2px'}}>
                  <StaticImage
                    className="dark"
                    alt="Luiz Ipsum"
                    src={'../../assets/images/logo-cute-pink.png'}
                    width={70}
                    height={70}
                    placeholder="blurred"
                  />
                  <StaticImage
                    className="light"
                    alt="Luiz Ipsum"
                    src={'../../assets/images/logo-purple.png'}
                    width={70}
                    height={70}
                    placeholder="blurred"
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
