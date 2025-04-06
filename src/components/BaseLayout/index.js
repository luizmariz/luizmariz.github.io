import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import useDarkMode from 'use-dark-mode';
import GlobalStyles from '../../utils/global.styled';
import * as S from './styled';

function BaseLayout({ render, children }) {
  const darkMode = useDarkMode(false);

  return (
    <React.Fragment>
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: darkMode.value ? '#282C35' : '#4B334C'
          }
        ]}
      />
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

BaseLayout.defaultProps = {
  render: () => {}
};

BaseLayout.propTypes = {
  render: PropTypes.func,
  children: PropTypes.any.isRequired
};

export default BaseLayout;
