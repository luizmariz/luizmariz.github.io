import React from 'react';
import useDarkMode from 'use-dark-mode';
import * as S from './styled';
import PropTypes from 'prop-types';

function ToggleBtn({ className }) {
  const darkMode = useDarkMode(false);

  return (
    <S.LighBulb
      className={className}
      isDark={darkMode.value}
      onClick={darkMode.toggle}
    />
  );
}

ToggleBtn.propTypes = {
  className: PropTypes.string
};

export default ToggleBtn;
