import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import ToggleBtn from '../../shared/ToggleBtn';
import AnimatedMenu from '../../shared/AnimatedMenu';

function NavMobile({ items }) {
  const [ showMenu, setShowMenu ] = useState(false);

  const toggleMenu = e => {
    e.preventDefault();
    setShowMenu(showMenu => !showMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  });

  return (
    <S.Container toggle={showMenu ? 1 : 0}>
      <S.MenuBar>
        <AnimatedMenu
          onClick={toggleMenu}
          active={showMenu}
        />
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
}

export default NavMobile;