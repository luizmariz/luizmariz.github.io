import styled from 'styled-components';
import { SubTitle } from '../shared/styled';

export const Container = styled.nav`
  @media (max-width: 672px) {
    display: none;
  }
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
`;

export const Item = styled.li`
  list-style-type: none;
  font-size: 1rem;
  margin-left: 2rem;
  display: grid;

  a {
    color: rgb(var(--text));
    padding-right: 0;
  }

  &::after {
    content: '';
    margin-top: -4px;
    height: 1px;
    background-color: rgb(var(--text));
    width: 0;
    transition: width 0.35s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const SideMenu = styled.div`
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
  z-index: 100;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  & > svg {
    font-size: 2.1rem;
    color: #333333;
  }

  @media (min-width: 672px) {
    display: none;
  }
`;

export const MobContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${props => (props.animate ? '100' : '-100')};
  background-color: var(--bg);
  padding: 2.35rem 3rem;
  width: 100vw;
  height: 100vh;
  opacity: ${props => (props.animate ? '1' : '0')};

  & > svg {
    position: absolute;
    right: 3rem;
    font-size: 2.1rem;
    color: rgb(var(--text));
  }

  a {
    color: rgb(var(--text));
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

  @media (min-width: 672px) {
    display: none;
  }
`;

export const MenuTitle = styled(SubTitle)`
  color: rgb(var(--text));
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