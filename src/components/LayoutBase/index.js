import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import GlobalStyles from '../../utils/global.styled';
import * as S from './styled';

function LayoutBase({ render, children }) {
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
      <S.MainWrapper>
        <S.Container>
          {render()}
          <S.PageContent>{children}</S.PageContent>
        </S.Container>
      </S.MainWrapper>
    </React.Fragment>
  );
}

LayoutBase.defaultProps = {
  render: () => {}
};

LayoutBase.propTypes = {
  render: PropTypes.func,
  children: PropTypes.any.isRequired
};

export default LayoutBase;
