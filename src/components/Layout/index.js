import React, { useEffect } from 'react';
import GlobalStyles from '../../utils/global.styled';
import Footer from '../Footer';
import Nav from '../Nav';

import * as S from '../Layout/styled';

function Layout({ children, location }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${scrollbarWidth}px`
      );
    }
  });

  return (
    <React.Fragment>
      <GlobalStyles />
      <Nav location={location} />
      <S.MainWrapper>
        <S.Container>
          <S.PageContent>{children}</S.PageContent>
        </S.Container>
      </S.MainWrapper>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
