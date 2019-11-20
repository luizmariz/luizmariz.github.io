import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostNav = styled.ul`
  display: inline-block;
  padding: 0;
  margin-top: 4rem;
  margin-bottom: 0;
  list-style-type: none;

  svg {
    font-size: 1.2rem;
  }
`;

export const Next = styled.li`
  svg {
    margin-left: 1rem;
  }
`;

export const Previous = styled.li`
  text-align: right;

  svg {
    margin-right: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  float: left;
  margin-top: 1.5rem;
  align-items: center;

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
