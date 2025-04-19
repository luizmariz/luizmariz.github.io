import styled from 'styled-components';

import { Link } from 'gatsby';

export const PostFooterContainer = styled.aside`
  display: block;
  padding-top: 3rem;
`;

export const PostNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 2rem;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  line-height: 1.5rem;
  text-decoration: none;
  color: #5cbbab;
  font-weight: 600;
  border: 1px solid #5cbbab;
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0.5rem 1rem;
  margin-left: auto;
  opacity: 0.5;
  width: 50%;

  svg {
    font-size: 1.6rem;
  }

  &:hover {
    opacity: 1;
  }
`;

export const Next = styled(StyledLink)`
  text-align: right;

  svg {
    margin-left: 1rem;
  }
`;

export const Previous = styled(StyledLink)`
  text-align: left;

  svg {
    margin-right: 1rem;
  }
`;

export const BlogIndex = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0.5em;
  align-self: flex-start;

  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary);

  text-transform: uppercase;
`;
