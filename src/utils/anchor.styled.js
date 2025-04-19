import { Link } from 'gatsby';
import styled from 'styled-components';

export const Anchor = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  float: none;
  margin: 0;
  stroke: rgba(var(--text), 0.5);
  text-decoration: none;

  &::before {
    content: none !important;
  }
`;
