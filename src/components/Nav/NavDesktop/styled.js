import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { MdArrowUpward } from 'react-icons/md';
import { Anchor } from '../../shared/styled';
import ToggleBtn from '../../shared/ToggleBtn';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  z-index: 100;

  display: flex;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  overflow: visible;

  background-color: var(--bg);
  box-shadow: var(--form-shadow);

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

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  height: 4rem;
  min-width: 58rem;
  padding: 1.2rem 1.3rem;
  flex-direction: row;
  justify-content: space-between;
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
  margin-right: 2rem;
  font-size: 1.6rem;
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  height: ${props => (props.show ? '4rem' : '0')};
  overflow: hidden;

  background-color: var(--footer);
  border: 1px solid #99999922;
  transition: all 0.25s ease-in-out;
`;

export const Navigation = styled.ul`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  flex-direction: row;

  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  height: 100%;
  margin: 0;
  justify-content: center;
  align-items: center;

  border-right: 1px solid #99999922;
`;

export const StyledAnchor = styled(Anchor)`
  height: 100%;
  width: 100%;
  padding: 0 3rem;

  color: rgb(var(--text));

  transition: background-color 0.1s ease-out;

  &:hover {
    background-color: rgb(var(--text), 0.03);
    transition: background-color 0.1s ease-in;
  }
`;
