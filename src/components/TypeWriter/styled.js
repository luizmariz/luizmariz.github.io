import styled, { keyframes } from 'styled-components';

export const blinkTextCursor = keyframes`
  from {border-right-color: rgba(var(--text), .75);}
  to {border-right-color: transparent}
`;

export const TextCursor = styled.span`
  display: inline;

  border-right: 1px solid rgba(var(--text), 0.75);
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

export const Container = styled.p`
  display: inline-block;
  margin: 0;

  font-weight: 300;

  opacity: 0.7;
`;
