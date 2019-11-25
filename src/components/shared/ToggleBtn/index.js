import React from 'react';
import useDarkMode from 'use-dark-mode';
import * as S from './styled';
import PropTypes from 'prop-types';

function ToggleBtn({ className }) {
  const darkMode = useDarkMode(false);

  return (
    <S.LighBulb
      className={className}
      dark={darkMode.value ? 1 : 0}
      onClick={darkMode.toggle}
    />
  );
}

ToggleBtn.propTypes = {
  className: PropTypes.string
};

export default ToggleBtn;
