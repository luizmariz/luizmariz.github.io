import React, { useState } from 'react';
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

function Nav({ checked, onToggle }) {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMenu = e => {
    e.preventDefault();
    setShowMobMenu(showMobMenu => !showMobMenu);
  };

  return (
    <React.Fragment>
      <NavSideMenu onClick={toggleMenu}>
        <MdMenu />
      </NavSideMenu>
      <MobMenuContainer animate={showMobMenu}>
        <MdClose onClick={toggleMenu} />
        <Row>
          <MenuTitle>m e n u</MenuTitle>
          <ToggleThemeBtn checked={checked} onToggle={onToggle} />
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
    </React.Fragment>
  );
}

export default Nav;
