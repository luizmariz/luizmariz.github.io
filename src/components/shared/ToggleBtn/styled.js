import styled from 'styled-components';

export const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff55;
  border: 1px solid #33333333;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem;
  -webkit-tap-highlight-color: transparent;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &::before {
    position: absolute;
    content: '';
    right: 0.1rem;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    border: 1px solid ${props => (props.darkMode ? 'transparent' : '#33333333')};
    background-color: #ffffff;

    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 3.4rem;
  height: 1.63rem;

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