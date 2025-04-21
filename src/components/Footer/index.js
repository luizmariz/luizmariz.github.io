import React from 'react';
import Logo from '../../assets/svgs/logo-default.svg';
import { Anchor } from '../../utils/anchor.styled';

import * as S from './styled';

function Footer() {
  return (
    <S.MainRow>
      <S.Wrapper>
        <S.Container>
          <S.LogoContainer>
            <Anchor to="/" aria-label="Ir para a homepage">
              <img
                alt="Logo Luiz Ipsum representado por blocos dispostos em forma de L e I"
                src={Logo}
                height={36}
              />
              <S.Title>Luiz Ipsum</S.Title>
            </Anchor>
          </S.LogoContainer>
          <S.NewsletterTextTitle>
            Inscreva-se na newsletter
          </S.NewsletterTextTitle>
          <S.NewsletterText>Relaxa que não vou spammar 😇</S.NewsletterText>
          <S.NewsletterBtn to={'/signup'}>Inscreva-se</S.NewsletterBtn>
        </S.Container>
        <S.Container>
          <S.ContainerTitle>Mapa do site</S.ContainerTitle>
          <S.Link to={'/'}>Início</S.Link>
          <S.Link to={'/about'}>Sobre mim</S.Link>
        </S.Container>
        <S.Container>
          <S.ContainerTitle>Redes</S.ContainerTitle>
          <S.Link
            href="https://linkedin.com/in/luiz-mariz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </S.Link>
          <S.Link
            href="https://github.com/luizmariz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </S.Link>
        </S.Container>
      </S.Wrapper>
      <S.InnerRow>
        <S.InnerRowContainer>
          <p>© 2025 luizipsum.com · Todos os direitos reservados</p>
          <S.BasicLink>Política de Privacidade</S.BasicLink>
          <S.BasicLink>Termos de Uso</S.BasicLink>
        </S.InnerRowContainer>
      </S.InnerRow>
    </S.MainRow>
  );
}

export default Footer;
