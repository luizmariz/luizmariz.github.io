import styled from 'styled-components';
import Img from 'gatsby-image';

export const Row = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 3rem 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 1rem;
`;

export const StyledImg = styled(Img)`
  width: 70px;
  height: 70px;

  vertical-align: middle;
  object-fit: cover;
  border-radius: 50%;
`;

export const Name = styled.div`
  margin-bottom: 0.2rem;
  max-width: 10rem;

  line-height: 1.4rem;
  font-weight: 500;
`;

export const Description = styled.div`
  font-weight: 300;
  opacity: 0.7;
`;
