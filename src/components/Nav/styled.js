import styled from 'styled-components';

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
`