import React from 'react';
import { NavContainer, NavLink, NavSideMenu } from './styled';
import { useMediaQuery } from 'react-responsive';
import { MdMenu } from 'react-icons/md';

function Nav () {
  const isMobile = useMediaQuery({
    query: '(max-width: 672px)'
  });

  if (isMobile) {
    return (
      <NavSideMenu>
        <MdMenu size="2.1rem" />
      </NavSideMenu>
    );
  }

  return (
    <NavContainer>
      <NavLink>Início</NavLink>
      <NavLink>Sobre mim</NavLink>
    </NavContainer>
  );
}

export default Nav;