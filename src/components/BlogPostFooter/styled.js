import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'gatsby';

export const PostNav = styled.ul`
  display: inline-block;
  max-width: 100%;
  margin-top: 4rem;
  margin-bottom: 0;
  padding: 0;

  list-style-type: none;

  svg {
    font-size: 1.2rem;
  }

  ${media.greaterThan('medium')`
    max-width: 80%;
  `}
`;

export const Next = styled.li`
  display: inline;

  svg {
    margin-left: 1rem;
  }
`;

export const Previous = styled.li`
  display: inline;
  text-align: right;

  svg {
    margin-right: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 1.5rem;
  line-height: 2.1rem;

  svg {
    margin-bottom: -0.2rem;
  }

  &::before {
    content: none !important;
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
