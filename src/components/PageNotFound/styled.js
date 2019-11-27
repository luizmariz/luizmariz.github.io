import styled from 'styled-components';
import { Anchor } from '../shared/styled';

export const OvniVector = styled.img`
  height: auto;
  width: 25vw;

  @media (max-width: 770px) {
    width: 80vw;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin-top: -2rem;
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-top: -1rem;
  margin-bottom: 0.5rem;
`;

export const StyledAnchor = styled(Anchor)`
  display: block;
  text-transform: uppercase;
  border: 1px solid rgba(var(--text), 0.2);
  border-radius: 5px;
  margin: 0 30%;
  padding: 0.5rem 0;
  transition: border-color 0.1s ease-in;

  @media (max-width: 770px) {
    margin: 0 10%;
  }

  &:hover {
    transition: border-color 0.1s ease-in;
    border-color: rgba(var(--text), 0.5);
  }
`;
