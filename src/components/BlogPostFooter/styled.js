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
  height: 4rem;
  padding: 0.5rem 1rem;
  opacity: 0.5;
  width: 50%;
  gap: 1rem;
  position: relative;
  font-size: 0.875rem;

  svg {
    font-size: 1.6rem;
    width: 2.5rem;
  }

  &:hover {
    opacity: 1;
  }
`;

export const Next = styled(StyledLink)`
  justify-content: end;
  text-align: right;
`;

export const Previous = styled(StyledLink)`
  justify-content: start;
  text-align: left;
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
