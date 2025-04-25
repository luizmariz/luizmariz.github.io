import React from 'react';
import * as S from './styled';

function SignUpConfirm() {
  return (
    <S.Container>
      <S.Title>Quase lá! ✨</S.Title>
      <S.Description>
        Checa o seu e-mail, inclusive a pasta de spam, e confirme sua inscrição.
      </S.Description>
      <S.StyledLink to="/">Voltar para o site</S.StyledLink>
    </S.Container>
  );
}

export default SignUpConfirm;
