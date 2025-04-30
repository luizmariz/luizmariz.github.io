import styled, { keyframes } from 'styled-components';

export const blinkTextCursor = keyframes`
  from {border-right-color: rgba(207, 218, 225, .75);}
  to {border-right-color: transparent}
`;

export const TextCursor = styled.span`
  display: inline;
  border-right: 1px solid rgba(207, 218, 225, 0.75);
  animation: ${blinkTextCursor} 1s steps(44) infinite normal;
`;

export const Container = styled.span`
  display: inline-block;
  margin: 0;
  font-weight: 300;
  opacity: 0.7;
`;
