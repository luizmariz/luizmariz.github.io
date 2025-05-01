import styled, { css, keyframes } from 'styled-components';

export const ActionButtonStyles = css`
  display: inline-block;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 1rem 1.5rem;
  padding-right: 1.75rem;
  outline: 0;
  border: 1px solid #99999933;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  color: rgb(207, 218, 225);
  text-decoration: none;
  width: fit-content;
  margin-left: 0.25rem;
  transition: 375ms;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.8rem;
  line-height: 150%;
  height: 3rem;

  &:after {
    content: '';
    background-color: #2a3177;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 0.25rem;
    right: 0.25rem;
    transition: 375ms;
    opacity: 0.5;
    border-color: #99999988;
  }

  &:hover:after {
    opacity: 0.7;
  }
`;

export const turnOn = keyframes`
  0% {
    opacity: 0.6;
  }
  10% {
    opacity: .4;
  }
    20% {
    opacity: 0.7;
  }
  40% {
    opacity: 0.5;
  }
    50% {
    opacity: 0.6;
  }
  60% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

export const TextbackgroundAnimation = keyframes`
 0%,
    100% {
      background-position: 0;
    }

    50% {
      background-position: 100%;
    }
`;

export const AnimatedText = styled.span`
  background: linear-gradient(
    288deg,
    rgb(55, 119, 108),
    rgb(53, 53, 116),
    #5cbbab
  );
  background-size: 200% 200%;
  animation: ${TextbackgroundAnimation} 4s infinite;

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const SectionSubTitle = styled.h4`
  width: 100%;
  text-align: center;
  font-weight: 800;
  opacity: 0.8;
  font-size: 2rem;
  max-width: 29rem;
  font-style: italic;
  text-transform: uppercase;
  line-height: 120%;
`;
