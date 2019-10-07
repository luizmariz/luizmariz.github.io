import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MdMenu, MdClose } from 'react-icons/md';
import ToggleThemeBtn from '../shared/ToggleThemeBtn';
import {
  NavContainer,
  NavLink,
  NavSideMenu,
  MobMenuContainer,
  MenuTitle,
  Row
} from './styled';

function Nav ({ darkMode, onToggle }) {
  const [ showMobMenu, setShowMobMenu ] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 672px)' });

  const toggleMenu = e => {
    e.preventDefault();
    setShowMobMenu( showMobMenu => !showMobMenu );
  }

  if (isMobile) {
    return (
      <React.Fragment>
        <NavSideMenu onClick={toggleMenu}>
          <MdMenu />
        </NavSideMenu>
        { showMobMenu &&
          <MobMenuContainer>
            <MdClose onClick={toggleMenu} />
            <Row>
              <MenuTitle>m e n u</MenuTitle>
              <ToggleThemeBtn
                darkMode={darkMode}
                onToggle={onToggle}
              />
            </Row>
            <p>Início</p>
            <hr/>
            <p>Sobre mim</p>
            <hr/>
          </MobMenuContainer>
        }
      </React.Fragment>
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