import React from 'react';
import { MdBrightnessLow, MdBrightness2 } from 'react-icons/md';
import * as S from './styled';
import PropTypes from 'prop-types';

function ToggleThemeBtn({ checked, onToggle, className }) {
  return (
    <S.Switch className={className}>
      <input
        checked={checked}
        type="checkbox"
        // onChange is not working well on production
        // I need to figure out why
        onClick={onToggle}
        label="Alternar tema"
        aria-label="Alternar tema"
      />
      <S.Slider darkMode={checked}>
        <MdBrightnessLow color="#D4D400" size="1.2rem" />
        <MdBrightness2 color="#FFFFFF" size="1.3rem" />
      </S.Slider>
    </S.Switch>
  );
}

ToggleThemeBtn.propTypes = {
  checked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default ToggleThemeBtn;
