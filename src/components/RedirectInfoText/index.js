import React from 'react';
import * as S from './styled';

function RedirectInfoText({ title, description }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.StyledLink to="/">Voltar para o site</S.StyledLink>
    </S.Container>
  );
}

export default RedirectInfoText;
