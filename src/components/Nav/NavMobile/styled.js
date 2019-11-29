import styled from 'styled-components';
import { MdMenu, MdArrowUpward } from 'react-icons/md';
import { Anchor } from '../../shared/styled';

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  height: ${props => props.toggle ? '10.5rem' : '3.5rem'};
  width: 100vw;
  background-color: var(--footer);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;

  -webkit-transition: height .3s ease, background-color .2s ease-in;
     -moz-transition: height .3s ease, background-color .2s ease-in;
      -ms-transition: height .3s ease, background-color .2s ease-in;
       -o-transition: height .3s ease, background-color .2s ease-in;
          transition: height .3s ease, background-color .2s ease-in;

  @media (min-width: 770px) {
    display: none;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 3.5rem;
  width: 100%;
  padding: .5rem 1.3rem;
  border: 1px solid #99999922;
`;

export const MenuIcon = styled(MdMenu)`
  font-size: 1.6rem;
  color: rgb(var(--text), .8);
`;

export const ToTopBtn = styled(MdArrowUpward)`
  color: rgb(var(--text), .8);
  font-size: 1.5rem;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 5rem;
`;

export const Content = styled.ul`
  list-style-type: none;
  line-height: 2.5rem;
  margin: 0;
  padding: 0;
`;

export const StyledAnchor = styled(Anchor)`
  color: rgb(var(--text));
  border-bottom: 1px solid #99999922;
`;

export const Item = styled.li`
  padding: 0 1.3rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
`;
