import React, { useEffect, useRef, useState } from 'react';
import GlobalStyles from '../../utils/global.styled';
import Carousel from '../Carrousel';
import Footer from '../Footer';
import * as S from '../Layout/styled';
import Nav from '../Nav';

function Layout({ children, location, enableVerticalText = false }) {
  const mainWrapperRef = useRef(null);

  const [mainWrapperHeight, setMainWrapperHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${scrollbarWidth}px`
      );

      setMainWrapperHeight(mainWrapperRef.current.clientHeight);
    }
  });

  return (
    <React.Fragment>
      <GlobalStyles />
      <Nav location={location} />
      <S.MainWrapper ref={mainWrapperRef} id="app">
        {enableVerticalText && (
          <S.VerticalText height={mainWrapperHeight}>
            <Carousel
              height={mainWrapperHeight}
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
      </S.MainWrapper>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
