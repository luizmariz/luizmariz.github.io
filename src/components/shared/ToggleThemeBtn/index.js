import React from 'react';
import { Switch, Slider } from './styled';
import { MdBrightnessLow, MdBrightness2 } from 'react-icons/md';

function ToggleThemeBtn ({ darkMode, onToggle }) {
  return (
    <Switch>
      <input type='checkbox' />
      <Slider
        darkMode={darkMode}
        onClick={onToggle}
        checked
      >
        <MdBrightnessLow
          color='#D4D400'
          size='1.2rem'
        />
        <MdBrightness2
          color="#FFFFFF"
          size="1.3rem"
        />
      </Slider>
    </Switch>
  );
}

export default ToggleThemeBtn;