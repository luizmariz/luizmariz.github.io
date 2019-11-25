import styled from 'styled-components';
import { MdLightbulbOutline } from 'react-icons/md';

export const LighBulb = styled(MdLightbulbOutline)`
  font-size: 1.5rem;
  color: ${props => props.dark ? '#ffffffbb' : '#ffd700'};
  transition: color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transition: color 0.3s ease-in-out;
  }

  @media (min-width: 672px) {
    &:hover { color: var(--secondary); };
  }
`;