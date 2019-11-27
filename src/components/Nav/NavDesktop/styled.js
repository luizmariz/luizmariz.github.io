import styled, { css } from 'styled-components';
import { MdMenu, MdArrowUpward } from 'react-icons/md';
import ToggleBtn from '../../shared/ToggleBtn';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  height: 4rem;
  width: 100vw;
  background-color: var(--bg);
  z-index: 100;
  display: flex;
  justify-content: center;
  overflow: visible;
  border-bottom: 1px solid #99999922;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .08);

  ${props => props.show
    ? css`
        visibility: visible;
        transition: all 300ms ease-out;
        transform: translateY(0);
      `
    : css`
      visibility: hidden;
      transition: all 300ms ease-in;
      transform: translateY(-100%);
    `
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
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
  background-color: rgb(var(--text));
`;

export const MenuBarMiddle = styled.div`
  width: 100%;
  height: 3px;
  background-color: rgb(var(--text));
`;

export const MenuBarBottom = styled.div`
  width: 100%;
  height: 3px;
  background-color: rgb(var(--text));
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

    ${MenuBarTop} { width: 35%; }

    ${MenuBarMiddle} { width: 85%; }

    ${MenuBarBottom} { width: 65%; }
  }

  * {
    transition: width .15s ease-in-out;
  }
`;