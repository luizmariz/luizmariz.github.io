import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import GlobalStyles from '../../../utils/global';
import * as S from './styled';

function BaseLayout({ render, children, darkMode }) {
  console.log(darkMode)
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
      <S.Container>
        {render()}
        <S.PageContent>{children}</S.PageContent>
      </S.Container>
    </React.Fragment>
  );
}

BaseLayout.defaultProps = {
  render: () => {}
};

BaseLayout.propTypes = {
  render: PropTypes.func,
  children: PropTypes.any.isRequired,
  darkMode: PropTypes.object.isRequired
};

export default BaseLayout;
