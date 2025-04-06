import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AnimatedMenu from '../AnimatedMenu';
import ToggleBtn from '../ToggleBtn';
import * as S from './styled';

function NavMobile({ items }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu((showMenu) => !showMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <S.Container toggle={showMenu ? 1 : 0}>
      <S.MenuBar>
        <AnimatedMenu onClick={toggleMenu} active={showMenu} />
        <S.Icons>
          <ToggleBtn />
          <S.ToTopBtn onClick={scrollToTop} />
        </S.Icons>
      </S.MenuBar>
      <S.Content>
        {items.map((item) => (
          <S.Item key={item.to}>
            <S.StyledAnchor to={item.to}>{item.name}</S.StyledAnchor>
          </S.Item>
        ))}
      </S.Content>
    </S.Container>
  );
}

NavMobile.propTypes = {
  items: PropTypes.array.isRequired
};

export default NavMobile;
