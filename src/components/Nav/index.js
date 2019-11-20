import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MdMenu, MdClose } from 'react-icons/md';
import ToggleBtn from '../shared/ToggleBtn';
import * as S from './styled';

function Nav({ checked, onToggle }) {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMenu = e => {
    e.preventDefault();
    setShowMobMenu(showMobMenu => !showMobMenu);
  };

  return (
    <React.Fragment>
      <S.NavSideMenu onClick={toggleMenu} aria-label="Side menu">
        <MdMenu />
      </S.NavSideMenu>
      <S.MobMenuContainer animate={showMobMenu}>
        <MdClose onClick={toggleMenu} />
        <S.Row>
          <S.MenuTitle>m e n u</S.MenuTitle>
          <ToggleBtn
            checked={checked}
            onToggle={onToggle}
          />
        </S.Row>
        <Link to="/" className="anchor">
          Home
        </Link>
        <hr />
        <Link to="/about/" className="anchor">
          Sobre mim
        </Link>
        <hr />
      </S.MobMenuContainer>
      <S.NavContainer>
        <ul>
          <S.NavLink>
            <Link to="/" className="anchor">
              Home
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link to="/about/" className="anchor">
              Sobre mim
            </Link>
          </S.NavLink>
        </ul>
      </S.NavContainer>
    </React.Fragment>
  );
}

export default Nav;
