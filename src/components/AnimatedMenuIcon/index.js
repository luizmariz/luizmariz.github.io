import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styled';

function AnimatedMenuIcon({ classname, onClick, active = false }) {
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

AnimatedMenuIcon.propTypes = {
  classname: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
};

export default AnimatedMenuIcon;
