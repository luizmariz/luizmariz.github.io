import styled, { css } from 'styled-components';
import { MdArrowUpward } from 'react-icons/md';
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
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);

  ${props =>
    props.show
      ? css`
          visibility: visible;
          transition: all 0.25s ease-out, background-color 0.2s ease-in;
          transform: translateY(0);
        `
      : css`
          visibility: hidden;
          transition: all 0.25s ease-in, background-color 0.2s ease-in;
          transform: translateY(-100%);
        `}

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

export const ToTopBtn = styled(MdArrowUpward)`
  color: rgb(var(--text));
  font-size: 1.6rem;
  transition: color 0.15s ease-in;

  &:hover {
    color: var(--tertiary);
    cursor: pointer;
    transition: color 0.15s ease-out;
  }
`;

export const StyledToggleBtn = styled(ToggleBtn)`
  font-size: 1.6rem;
  margin-right: 2rem;
`;

export const NavigationWrapper = styled.div`
  background-color: var(--footer);
  border: 1px solid #99999922;
  width: 100%;
  height: ${props => (props.show ? '4rem' : '0')};
  overflow: hidden;
  transition: all 0.25s ease-in-out;
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
  transition: background-color 0.1s ease-out;

  &:hover {
    background-color: rgb(var(--text), 0.03);
    transition: background-color 0.1s ease-in;
  }
`;
