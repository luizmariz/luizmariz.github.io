import styled from 'styled-components';
import { ActionButtonStyles } from '../../utils/shared.styled';

import { Link } from 'gatsby';

export const PostFooterContainer = styled.aside`
  display: block;
  padding-top: 3rem;
  margin-bottom: 3.5rem;
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

  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
`;

export const StyledLink = styled(Link)`
  ${ActionButtonStyles}
  display: flex;
  align-items: center;
  width: 50%;
  gap: 1rem;
  height: 4.5rem;
  padding-top: 1.25rem;
  padding-right: 2rem;
  border: 1px solid #99999955;

  svg {
    font-size: 1rem;
    width: 3.5rem;
  }

  &:after {
    background-color: #5cbbab88;
  }

  @media (max-width: 1023px) {
    width: 100%;
    height: 5rem;
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
