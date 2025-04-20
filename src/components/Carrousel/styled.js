import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: nowrap;
  height: max-content;
  animation: ${scroll} ${(props) => props.duration || '20s'} linear infinite;
  animation-play-state: ${(props) => props.animationstate};
`;

export const CarouselItem = styled.div`
  white-space: nowrap;
`;

export const CarouselContainer = styled.div`
  overflow: hidden;
  background: transparent;
  height: ${(props) => props.height}px;
  writing-mode: sideways-lr;
`;
