import styled from 'styled-components';
import media from 'styled-media-query';

import { MdMenu, MdArrowUpward } from 'react-icons/md';
import { Anchor } from '../../shared/styled';

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 100;

  display: flex;
  height: ${props => (props.toggle ? '10.5rem' : '3.5rem')};
  width: 100vw;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;

  background-color: var(--footer);

  -webkit-transition: height 0.3s ease, background-color 0.2s ease-in;
  -moz-transition: height 0.3s ease, background-color 0.2s ease-in;
  -ms-transition: height 0.3s ease, background-color 0.2s ease-in;
  -o-transition: height 0.3s ease, background-color 0.2s ease-in;
  transition: height 0.3s ease, background-color 0.2s ease-in;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const MenuBar = styled.div`
  display: flex;
  width: 100%;
  min-height: 3.5rem;
  padding: 0.5rem 1.05rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #99999922;
`;

export const MenuIcon = styled(MdMenu)`
  font-size: 1.6rem;
  color: rgb(var(--text), 0.8);
`;

export const ToTopBtn = styled(MdArrowUpward)`
  font-size: 1.5rem;
  color: rgb(var(--text), 0.8);
`;

export const Icons = styled.div`
  display: flex;
  width: 5rem;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.ul`
  margin: 0;
  padding: 0;

  line-height: 2.5rem;

  list-style-type: none;
`;

export const StyledAnchor = styled(Anchor)`
  height: 100%;
  width: 100%;
  padding: 0 1.3rem;

  color: rgb(var(--text));

  border-bottom: 1px solid #99999922;
`;

export const Item = styled.li`
  display: flex;
  height: 3.5rem;
  margin: 0;
  align-items: center;
`;
