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
`;
export const NavSideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1.8rem;
  width: 4.5rem;
  height: 3.2rem;
  border-radius: 5px;
  background-color: #FFFFFF77;
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
  top:0;
  left:0;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.bg};
  transition: background-color ease-in .25s;
  padding: 2.35rem 3rem;

  & > svg {
    position: absolute;
    right: 3rem;
    font-size: 2.1rem;
    color: ${props => props.theme.text};
  }
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
  margin-top: 8rem;
  margin-bottom: 6rem;
`;