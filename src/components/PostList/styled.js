import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Wrapper = styled.div`
  border: 1px solid #99999922;

  &:nth-child(even) {
    border-left: none;
  }
`;
