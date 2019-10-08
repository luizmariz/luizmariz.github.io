import React from 'react';
import { MdBrightnessLow, MdBrightness2 } from 'react-icons/md';
import styled from 'styled-components';

const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FFFFFF55;
  border: 1px solid #33333333;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .1rem;
  -webkit-tap-highlight-color: transparent;
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;

  &::before {
    position: absolute;
    content: "";
    right: 0.1rem;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    border: 1px solid ${props => props.darkMode ? 'transparent' : '#33333333'};
    background-color: #FFFFFF;

    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
  }

`;
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 3.4rem;
  height: 1.63rem;;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + ${Slider}::before {
    -webkit-transform: translateX(-1.68rem);
    -ms-transform: translateX(-1.68rem);
    transform: translateX(-1.68rem);
  }
`;

function ToggleThemeBtn ({ darkMode, onToggle }) {
  return (
    <Switch>
      <input defaultChecked={darkMode} type='checkbox' />
      <Slider
        darkMode={darkMode}
        onClick={onToggle}
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