import styled from 'styled-components';
import { Link } from 'gatsby';

export const Anchor = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: none;
  float: none;
  margin: 0;
  stroke: rgba(var(--text), 0.5);

  &:hover {
    opacity: 1;
  }

  &::before {
    content: none !important;
  }
`;
