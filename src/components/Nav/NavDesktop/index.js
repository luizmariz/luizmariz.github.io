import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function NavDesktop({ items }) {
  const [ scroll, setScroll ] = useState(0);
  const [ show, setShow ] = useState(true);
  const [ showMenu, setShowMenu ] = useState(false);

  const handleScroll = () => {
    const scrollPos = document.body.getBoundingClientRect().top;
    setShowMenu(false);
    setShow(scrollPos > scroll);
    setScroll(scrollPos);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  });

  return (
    <S.Container show={show ? 1 : 0} >
      <S.Wrapper>
        <S.AnimatedMenu onClick={handleToggleMenu}>
          <S.MenuBarTop />
          <S.MenuBarMiddle />
          <S.MenuBarBottom />
        </S.AnimatedMenu>
        <S.Row>
          <S.StyledToggleBtn />
          <S.ToTopBtn />
        </S.Row>
      </S.Wrapper>
      <S.NavigationWrapper show={showMenu ? 1: 0}>
        <S.Navigation>
          {items.map(item =>
            <S.StyledAnchor to={item.to} >
              <S.Item>
                {item.name}
              </S.Item>
            </S.StyledAnchor>
          )}
        </S.Navigation>
      </S.NavigationWrapper>
    </S.Container>
  );
}

NavDesktop.propTypes = {
  items: PropTypes.array.isRequired,
}

export default NavDesktop;