import styled from 'styled-components';
import { MdLightbulbOutline } from 'react-icons/md';

export const LighBulb = styled(MdLightbulbOutline)`
  font-size: 1.5rem;
  color: ${props => props.dark ? '#ffffffbb' : '#ffd700'};
  transition: color 0.15s ease-in;

  &:hover {
    cursor: pointer;
    transition: color 0.15s ease-out;
  }

  @media (min-width: 770px) {
    &:hover { color: var(--tertiary); };
  }
`;