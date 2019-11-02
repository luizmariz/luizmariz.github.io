import styled from 'styled-components';
import { SubTitle } from '../shared/styled';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled.li`
  list-style-type: none;
  font-size: 1rem;
  margin-left: 2rem;

  a.anchor {
    color: ${props => props.theme.text};
  }
`;
export const NavSideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1.8rem;
  width: 4.5rem;
  height: 3.2rem;
  border-radius: 5px;
  background-color: #ffffff77;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  & > svg {
    font-size: 2.1rem;
    color: #333333;
  }
`;
export const MobMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${props => (props.animate ? '100' : '-100')};
  background-color: ${props => props.theme.bg};
  padding: 2.35rem 3rem;
  width: 100vw;
  height: 100vh;
  opacity: ${props => (props.animate ? '1' : '0')};

  & > svg {
    position: absolute;
    right: 3rem;
    font-size: 2.1rem;
    color: ${props => props.theme.text};
  }

  & > a.anchor {
    color: ${props => props.theme.text};
    margin-bottom: 1.7rem;
  }

  -webkit-transition: background-color 0.2s ease-in,
    opacity 0.2s cubic-bezier(0, 0.995, 0.99, 1);
  -moz-transition: background-color 0.2s ease-in,
    opacity 0.2s cubic-bezier(0, 0.995, 0.99, 1);
  -ms-transition: background-color 0.2s ease-in,
    opacity 0.2s cubic-bezier(0, 0.995, 0.99, 1);
  -o-transition: background-color 0.2s ease-in,
    opacity 0.2s cubic-bezier(0, 0.995, 0.99, 1);
  transition: background-color 0.2s ease-in,
    opacity 0.2s cubic-bezier(0, 0.995, 0.99, 1);
`;
export const MenuTitle = styled(SubTitle)`
  color: ${props => props.theme.text};
  font-size: 1.2rem;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 6rem;
`;
