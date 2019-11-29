import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function AnimatedMenu({ classname, onClick, active }) {
  return (
    <S.Container
      onClick={onClick}
      title={`${active ? 'Fechar' : 'Abrir'} menu`}
      active={active ? 1 : 0}
      classname={classname}
    >
      <S.MenuBarTop />
      <S.MenuBarMiddle />
      <S.MenuBarBottom />
    </S.Container>
  );
}

AnimatedMenu.defaultProps = {
  active: false
}

AnimatedMenu.propTypes = {
  classname: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
}

export default AnimatedMenu;