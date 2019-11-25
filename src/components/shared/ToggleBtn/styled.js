import styled from 'styled-components';
import { MdLightbulbOutline } from 'react-icons/md';

export const LighBulb = styled(MdLightbulbOutline)`
  font-size: 2rem;
  color: ${props => props.isDark ? '#ffffff77' : '#ffd700'};
  transition: color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: var(--secondary);
    transition: color 0.3s ease-in-out;
  }
`;