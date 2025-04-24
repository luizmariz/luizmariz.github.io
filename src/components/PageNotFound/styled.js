import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'gatsby';

export const OvniVector = styled.img`
  height: auto;
  width: 80vw;

  ${media.greaterThan('medium')`
    width: 25vw;
  `}
`;

export const Container = styled.div`
  margin-top: -2rem;
  text-align: center;
`;

export const Title = styled.h1`
  margin-top: -1rem;
  margin-bottom: 0.5rem;

  font-size: 5rem;
`;

export const StyledAnchor = styled(Link)`
  display: block;
  margin: 0 10%;
  padding: 0.5rem 0;

  text-transform: uppercase;
  border: 1px solid rgba(var(--text), 0.2);
  border-radius: 5px;
  transition: border-color 0.1s ease-in;

  ${media.greaterThan('medium')`
    margin: 0 30%;
  `}

  &:hover {
    border-color: rgba(var(--text), 0.5);
    border-bottom: 1px solid rgba(var(--text), 0.5);
    transition: border-color 0.1s ease-in;
  }
`;
