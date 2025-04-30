import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/svgs/logo-default.svg';
import AnimatedMenuIcon from '../AnimatedMenuIcon';

import * as S from './styled';

const _ROUTES = [
  { name: '🏡 Início', to: '/' },
  { name: 'Sobre mim', to: '/about/' }
];

function Nav({ location }) {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = document.body.getBoundingClientRect().top;
      setShow(scrollPos >= scroll);
      setShowMobileMenu(false);
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
    <React.Fragment>
      <S.Container show={show ? 1 : 0}>
        <S.Wrapper>
          <S.Row>
            <S.LogoContainer>
              <Link to="/" aria-label="Ir para a homepage">
                <img
                  alt="Logo Luiz Ipsum representado por blocos dispostos em forma de L e I"
                  src={Logo}
                  height={36}
                />
                <S.Title>Luiz Ipsum</S.Title>
              </Link>
            </S.LogoContainer>
          </S.Row>
          <S.Row>
            {_ROUTES.map((item) => (
              <S.NavLinkWrapper selected={location.pathname === item.to}>
                <S.NavLink to={item.to}>{item.name}</S.NavLink>
              </S.NavLinkWrapper>
            ))}
          </S.Row>
          <S.Row>
            <S.ToTopBtn onClick={scrollToTop} title="Ir para o topo" />
            <AnimatedMenuIcon
              active={showMobileMenu}
              onClick={() => {
                setShowMobileMenu((prev) => !prev);
              }}
            />
          </S.Row>
        </S.Wrapper>
      </S.Container>
      <S.MobileContainer show={showMobileMenu ? 1 : 0}>
        {_ROUTES.map((item) => (
          <S.NavLinkWrapper selected={location.pathname === item.to}>
            <S.NavLink to={item.to}>{item.name}</S.NavLink>
          </S.NavLinkWrapper>
        ))}
      </S.MobileContainer>
    </React.Fragment>
  );
}

Nav.propTypes = {
  location: PropTypes.object
};

export default Nav;
