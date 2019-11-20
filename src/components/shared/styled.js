import styled from 'styled-components';
import { Link } from 'gatsby';

export const SubTitle = styled.h2`
  text-transform: uppercase;
  color: var(--primary);
  font-size: 1.1rem;
  margin: 0;
`;

export const Anchor = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: none;
  float: none;
  margin: 0;
  stroke: rgba(var(--text), 0.5);
  padding-right: 2px;

  &:hover {
    opacity: 1;
  }

  &::before {
    content: none !important;
  }
`;
