import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as S from './styled';

function NavDesktop({ items }) {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = document.body.getBoundingClientRect().top;
      setShowMenu(false);
      setShow(scrollPos >= scroll);
      setScroll(scrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <S.Container show={show ? 1 : 0}>
      <S.Wrapper>
        <S.Row>
          <S.ToTopBtn onClick={scrollToTop} title="Ir para o topo" />
        </S.Row>
      </S.Wrapper>
    </S.Container>
  );
}

NavDesktop.propTypes = {
  items: PropTypes.array.isRequired
};

export default NavDesktop;
