import React from 'react';
import * as S from './styled';

function Footer() {
  return (
    <S.MainRow>
      <S.Wrapper>
        <S.Container>
          <S.ContainerTitle>Mapa do site</S.ContainerTitle>
          <S.Anchor>Início</S.Anchor>
          <S.Anchor>Currículo</S.Anchor>
          <S.Anchor>Postagens</S.Anchor>
        </S.Container>
        <S.Container>
          <S.ContainerTitle>Redes</S.ContainerTitle>
          <S.Anchor
            href="https://linkedin.com/in/luiz-mariz/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            LinkedIn
          </S.Anchor>
          <S.Anchor
            href="https://github.com/luizmariz/"
            target="_blank"
            title="Github"
            rel="noopener noreferrer"
          >
            Github
          </S.Anchor>
        </S.Container>
        <S.Container>
          <S.ContainerTitle>© 2025</S.ContainerTitle>
          <S.AuxiliarText>
            Luiz Ipsum. Todos os direitos reservados
          </S.AuxiliarText>
        </S.Container>
      </S.Wrapper>
    </S.MainRow>
  );
}

export default Footer;
