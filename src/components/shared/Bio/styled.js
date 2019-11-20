import styled from 'styled-components';
import Img from 'gatsby-image';

export const Text = styled.p`
  margin: 0;
  padding: 0;
  white-space: pre-line;
  padding-left: 1rem;
  max-width: 16rem;

  a::before {
    content: none !important;
  }

  @media (max-width: 355px) {
    max-width: 11rem;
  }

  @media (min-width: 672px) {
    max-width: 25rem;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const StyledImg = styled(Img)`
  border-radius: 50%;
  width: 55px;
  height: 55px;
`;
