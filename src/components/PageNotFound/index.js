import React from 'react';
import ovniLight from '../../assets/images/ovni404Light.svg';
import ovniDark from '../../assets/images/ovni404Dark.svg';
import * as S from './styled';

function PageNotFound() {
  return (
    <S.Container>
      <S.OvniVector
        src={ovniDark}
        className="dark"
      />
      <S.OvniVector
        src={ovniLight}
        className="light"
      />
      <S.Title>404</S.Title>
      <p>Ixi, parece que essa página não existe.</p>
      <S.StyledAnchor aria-label="Ir para a página inicial">
        me traz de volta!
      </S.StyledAnchor>
    </S.Container>
  );
}

export default PageNotFound;