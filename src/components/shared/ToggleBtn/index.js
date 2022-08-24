import React from 'react';
import useDarkMode from 'use-dark-mode';
import * as S from './styled';
import PropTypes from 'prop-types';

function ToggleBtn({ className }) {
  const darkMode = useDarkMode(false);

  return (
    <S.LighBulb
      className={`${className} light-bulb`}
      onClick={darkMode.toggle}
      title="Mudar o tema"
    />
  );
}

ToggleBtn.propTypes = {
  className: PropTypes.string
};

export default ToggleBtn;
