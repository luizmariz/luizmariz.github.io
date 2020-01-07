import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostNav = styled.ul`
  display: inline-block;
  padding: 0;
  margin-top: 4rem;
  margin-bottom: 0;
  list-style-type: none;
  max-width: 80%;

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 770px) {
    max-width: 100%;
  }
`;

export const Next = styled.li`
  display: inline;

  svg {
    margin-left: 1rem;
  }
`;

export const Previous = styled.li`
  text-align: right;
  display: inline;

  svg {
    margin-right: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 1.5rem;
  line-height: 2.1rem;

  svg {
    margin-bottom: -.2rem;
  }

  &::before {
    content: none !important;
  }
`;

export const BlogIndex = styled.h3`
  text-transform: uppercase;
  margin-block-start: 2em;
  margin-block-end: 0.5em;
  font-size: 1.5rem;
  color: var(--primary);
  font-weight: 600;
  align-self: flex-start;
`;
