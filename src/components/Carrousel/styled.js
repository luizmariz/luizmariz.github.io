import styled, { css, keyframes } from 'styled-components';

const scrollY = keyframes`
  0% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const scrollYReverse = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(50%);
  }
`;

const scrollX = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const scrollXReverse = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: nowrap;

  animation: ${(props) =>
      props.reverse
        ? props.vertical
          ? scrollYReverse
          : scrollXReverse
        : props.vertical
          ? scrollY
          : scrollX}
    ${(props) => props.duration || '20s'} linear infinite;
  animation-play-state: ${(props) => props.animationstate};

  ${(props) =>
    props.vertical
      ? css`
          height: min-content;
        `
      : css`
          width: min-content;
        `}
`;

export const CarouselItem = styled.div`
  white-space: nowrap;
`;

export const CarouselContainer = styled.div`
  overflow: hidden;
  background: transparent;

  ${(props) =>
    props.vertical
      ? css`
          writing-mode: vertical-lr;
          -webkit-writing-mode: vertical-lr;
          transform: rotate(180deg);
          -webkit-transform: rotate(180deg);
        `
      : css`
          width: 100%;
        `}
`;
