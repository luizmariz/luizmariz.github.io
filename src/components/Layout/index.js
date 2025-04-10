import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Anchor } from '../../utils/anchor.styled';
import Footer from '../Footer';
import LayoutBase from '../LayoutBase';
import Nav from '../Nav';
import * as S from './styled';

function Layout({ children, location }) {
  if (location.pathname === '/404') {
    return <LayoutBase children={children} />;
  }

  return (
    <React.Fragment>
      <Nav location={location} />
      <LayoutBase
        children={children}
        render={() => (
          <header>
            <S.LogoContainer>
              <S.Row>
                <Anchor to="/" aria-label="Ir para a homepage">
                  <StaticImage
                    alt="Logo Luiz Ipsum representado por blocos dispostos em forma de L e I"
                    src={'../../assets/svgs/logo-default.svg'}
                    height={50}
                    placeholder="none"
                    quality={100}
                    layout="fixed"
                  />
                </Anchor>
                <S.Title>{location.pathname === '/' && 'Luiz Ipsum'}</S.Title>
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
