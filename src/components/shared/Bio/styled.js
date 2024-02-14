import styled from 'styled-components';
import media from 'styled-media-query';

export const Text = styled.p`
  max-width: 14rem;
  margin: 0;
  padding: 0;
  padding-left: 1rem;

  white-space: pre-line;

  a::before {
    content: none !important;
  }

  ${media.greaterThan('375px')`
    max-width: 16rem;
  `}

  ${media.greaterThan('medium')`
    max-width: 25rem;
  `}
`;

export const Row = styled.div`
  display: flex;
`;
