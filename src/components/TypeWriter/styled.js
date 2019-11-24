import styled, { keyframes } from 'styled-components';

export const blinkTextCursor = keyframes`
  from {border-right-color: rgba(var(--text), .75);}
  to {border-right-color: transparent}
`;

export const TextCursor = styled.span`
  border-right: 1px solid rgba(var(--text), 0.75);
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

export const Container = styled.p`
  opacity: 0.7;
  font-weight: 300;
  display: inline-block;
  margin: 0;
`;
