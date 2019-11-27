import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function NavDesktop({ items }) {
  const [ scroll, setScroll ] = useState(0);
  const [ show, setShow ] = useState(true);

  const handleScroll = () => {
    const scrollPos = document.body.getBoundingClientRect().top;
    setShow(scrollPos > scroll);
    setScroll(scrollPos);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  });

  return (
    <S.Container show={show ? 1 : 0} >
      <S.Wrapper>
        <S.AnimatedMenu>
          <S.MenuBarTop />
          <S.MenuBarMiddle />
          <S.MenuBarBottom />
        </S.AnimatedMenu>
        <S.Row>
          <S.StyledToggleBtn />
          <S.ToTopBtn />
        </S.Row>
      </S.Wrapper>
    </S.Container>
  );
}

NavDesktop.propTypes = {
  items: PropTypes.array.isRequired,
}

export default NavDesktop;