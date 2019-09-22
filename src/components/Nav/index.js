import React from 'react';
import { NavContainer, NavLink } from './styled';

// TODO: mobile sidemenu mode, polish desktop nav
function Nav () {
  return (
    <NavContainer>
      <NavLink>Início</NavLink>
      <NavLink>Sobre mim</NavLink>
    </NavContainer>
  );
}

export default Nav;