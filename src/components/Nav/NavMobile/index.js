import React, { useState } from 'react';
import ToggleBtn from '../../shared/ToggleBtn';
import PropTypes from 'prop-types';
import * as S from './styled';

function NavMobile({ items, currentPath }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = e => {
    e.preventDefault();
    setShowMenu(showMenu => !showMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <S.Container toggle={showMenu ? 1 : 0}>
      <S.MenuBar>
        <S.MenuBtn
          onClick={toggleMenu}
          toggle={showMenu ? 1 : 0}
        >
          <S.MenuIcon />
        </S.MenuBtn>
        <S.Icons>
          <ToggleBtn />
          <S.ToTopBtn onClick={scrollToTop} />
        </S.Icons>
      </S.MenuBar>
      <S.Content>
        {items.map(item => (
          <S.StyledAnchor
            key={item.to}
            to={item.to}
            selected={item.to === currentPath}
          >
            <S.Item>
              {item.name}
            </S.Item>
          </S.StyledAnchor>
        ))}
      </S.Content>
    </S.Container>
  );
}

NavMobile.propTypes = {
  items: PropTypes.array.isRequired,
  currentPath: PropTypes.string
}

export default NavMobile;