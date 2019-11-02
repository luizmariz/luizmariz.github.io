import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MdMenu, MdClose } from 'react-icons/md';
import ToggleThemeBtn from '../shared/ToggleThemeBtn';
import { Link } from 'gatsby';
import {
  NavContainer,
  NavLink,
  NavSideMenu,
  MobMenuContainer,
  MenuTitle,
  Row,
} from './styled';

function Nav({ darkMode, onToggle }) {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 672px)' });

  const toggleMenu = e => {
    e.preventDefault();
    setShowMobMenu(showMobMenu => !showMobMenu);
  };

  if (isMobile) {
    return (
      <React.Fragment>
        <NavSideMenu onClick={toggleMenu}>
          <MdMenu />
        </NavSideMenu>
        <MobMenuContainer animate={showMobMenu}>
          <MdClose onClick={toggleMenu} />
          <Row>
            <MenuTitle>m e n u</MenuTitle>
            <ToggleThemeBtn darkMode={darkMode} onToggle={onToggle} />
          </Row>
          <Link to="/" className="anchor">
            Início
          </Link>
          <hr />
          <Link to="/about" className="anchor">
            Sobre mim
          </Link>
          <hr />
        </MobMenuContainer>
      </React.Fragment>
    );
  }

  return (
    <NavContainer>
      <NavLink>
        <Link to="/" className="anchor">
          Início
        </Link>
      </NavLink>
      <NavLink>
        <Link to="/about" className="anchor">
          Sobre mim
        </Link>
      </NavLink>
    </NavContainer>
  );
}

export default Nav;
