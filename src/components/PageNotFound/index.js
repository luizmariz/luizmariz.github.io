import React from 'react';
import { AnimatedText } from '../../utils/shared.styled';

import * as S from './styled';

function PageNotFound() {
  return (
    <S.Container>
      <S.Title>
        <AnimatedText>Error: </AnimatedText>404!
      </S.Title>
      <S.Description>Ixi, parece que essa página não existe.</S.Description>
      <S.StyledLink to="/">Me traz de volta!</S.StyledLink>
    </S.Container>
  );
}

export default PageNotFound;
