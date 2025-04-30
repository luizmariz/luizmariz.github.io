import React from 'react';
import GlobalStyles from '../../utils/global.styled';
import Carousel from '../Carrousel';
import Footer from '../Footer';
import * as S from '../Layout/styled';
import LayoutParticles from '../LayoutParticles';
import Nav from '../Nav';

function Layout({ children, location, enableVerticalText = false }) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Nav location={location} />
      <S.MainWrapper>
        {enableVerticalText && (
          <S.VerticalText>
            <Carousel
              vertical={true}
              items={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet feugiat ligula quis volutpat. '
              ]}
              duration={300}
            ></Carousel>
          </S.VerticalText>
        )}
        <S.Container>
          <S.PageContent>{children}</S.PageContent>
        </S.Container>
        <LayoutParticles />
      </S.MainWrapper>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
