import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Anchor } from '../shared/styled';
import ToggleBtn from '../shared/ToggleBtn';
import * as S from './styled';

const _ROUTES = [
  { name: 'Home', to: '/' },
  { name: 'Sobre mim', to: '/about/' }
]

function Nav({ checked, onToggle }) {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMenu = e => {
    e.preventDefault();
    setShowMobMenu(showMobMenu => !showMobMenu);
  };

  return (
    <React.Fragment>
      <S.SideMenu
        onClick={toggleMenu}
        aria-label="Side menu"
      >
        <MdMenu />
      </S.SideMenu>
      <S.MobContainer animate={showMobMenu}>
        <MdClose onClick={toggleMenu} />
        <S.Row>
          <S.MenuTitle>m e n u</S.MenuTitle>
          <ToggleBtn
            checked={checked}
            onToggle={onToggle}
          />
        </S.Row>
        {_ROUTES.map(route => (
          <React.Fragment key={route.to}>
            <Anchor to={route.to}>
              {route.name}
            </Anchor>
            <hr />
          </React.Fragment>
        ))}
      </S.MobContainer>
      <S.Container>
        <S.ItemList>
          {_ROUTES.map(route => (
            <S.Item key={route.to}>
              <Anchor to={route.to}>
                {route.name}
              </Anchor>
            </S.Item>
          ))}
        </S.ItemList>
      </S.Container>
    </React.Fragment>
  );
}

export default Nav;
