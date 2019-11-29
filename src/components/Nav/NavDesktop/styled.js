import styled, { css } from 'styled-components';
import { MdMenu, MdArrowUpward } from 'react-icons/md';
import { Anchor } from '../../shared/styled';
import ToggleBtn from '../../shared/ToggleBtn';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: var(--bg);
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: visible;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .08);

  ${props => props.show
    ? css`
        visibility: visible;
        transition: all .25s ease-out;
        transform: translateY(0);
      `
    : css`
      visibility: hidden;
      transition: all .25s ease-in;
      transform: translateY(-100%);
    `
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  height: 4rem;
  min-width: 58rem;
  padding: 0 1.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuIcon = styled(MdMenu)`
  font-size: 2rem;
  color: rgb(var(--text));
  transition: color 0.2s ease-in;

  &:hover {
    cursor: pointer;
  }

`;

export const ToTopBtn = styled(MdArrowUpward)`
  color: rgb(var(--text));
  font-size: 1.7rem;

  &:hover {
    cursor: pointer;
  }

`;

export const StyledToggleBtn = styled(ToggleBtn)`
  font-size: 1.7rem;
  margin-right: 2rem;
`;

export const MenuBarTop = styled.div`
  width: 100%;
  height: 3px;
  background-color: rgb(var(--text), .9);
`;

export const MenuBarMiddle = styled.div`
  width: 100%;
  height: 3px;
  background-color: rgb(var(--text), .9);
`;

export const MenuBarBottom = styled.div`
  width: 100%;
  height: 3px;
  background-color: rgb(var(--text), .9);
`;

export const AnimatedMenu = styled.div`
  width: 2rem;
  height: 2rem;
  padding: .2rem .25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &:hover {
    cursor: pointer;

    ${MenuBarTop} { width: 45%; }
    ${MenuBarMiddle} { width: 85%; }
    ${MenuBarBottom} { width: 65%; }
  }

  * {
    transition: width .15s ease-in-out;
  }
`;

export const NavigationWrapper = styled.div`
  background-color: var(--footer);
  border: 1px solid #99999922;
  width: 100%;
  height: ${props => props.show ? '4rem' : '0'};
  overflow: hidden;
  transition: height .25s ease-in-out;
`;

export const Navigation = styled.ul`
  list-style-type: none;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

export const Item = styled.li`
  border-right: 1px solid #99999922;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
`;

export const StyledAnchor = styled(Anchor)`
  color: rgb(var(--text));
  transition: background-color .1s ease-out;

  &:hover {
    background-color: rgb(var(--text), .1);
    transition: background-color .1s ease-in;
  }
`;