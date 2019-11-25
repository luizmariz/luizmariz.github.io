import styled from 'styled-components';
import { MdDragHandle } from 'react-icons/md';

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  height: ${props => props.show ? '12rem' : '4rem'};
  width: 100vw;
  padding: .5rem 1.3rem;
  background-color: var(--footer);
  z-index: 100;
  border: 1px solid #99999922;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  transition: height .45s ease;

  @media (min-width: 672px) {
    display: none;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.ul`
  list-style-type: none;
  padding: 0;
  line-height: 2.5rem;

  a {
    font-weight: 400;
    margin-top: .5rem;
    color: rgb(var(--text));
  }
`;

export const MenuBtn = styled(MdDragHandle)`
  color: rgb(var(--text), .5);
  cursor: pointer;
  font-size: 2.6rem;
  border: 1px solid rgba(var(--text), 0.2);
  border-radius: 5px;
  transition: border 0.1s ease-in;
  width: 3.8rem;

  &:hover {
    transition: border 0.1s ease-in;
    border: 1px solid rgba(var(--text), 0.5);
  }
`;