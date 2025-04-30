import { Link } from 'gatsby';
import React from 'react';
import Logo from '../../assets/svgs/logo-default.svg';

import * as S from './styled';

function Footer() {
  return (
    <S.MainRow>
      <S.Wrapper>
        <S.Container>
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
          <S.NewsletterTextTitle>
            Inscreva-se na newsletter
          </S.NewsletterTextTitle>
          <S.NewsletterText>Relaxa que não vou spammar 😇</S.NewsletterText>
          <S.ActionButton to={'/signup'}>Inscreva-se</S.ActionButton>
        </S.Container>
        <S.Container>
          <S.ContainerTitle>Mapa do site</S.ContainerTitle>
          <S.StyledLink to={'/'}>Início</S.StyledLink>
          <S.StyledLink to={'/about'}>Sobre mim</S.StyledLink>
        </S.Container>
        <S.Container>
          <S.ContainerTitle>Redes</S.ContainerTitle>
          <S.AnchorStyledLink
            href="https://linkedin.com/in/luiz-mariz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </S.AnchorStyledLink>
          <S.AnchorStyledLink
            href="https://github.com/luizmariz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </S.AnchorStyledLink>
        </S.Container>
      </S.Wrapper>
      <S.InnerRow>
        <S.InnerRowContainer>
          <p>© 2025 luizipsum.com · Todos os direitos reservados</p>
          <S.BasicLink to={'/policies'}>Política de Privacidade</S.BasicLink>
          <S.AnchorBasicLink
            href="https://github.com/luizmariz/luizmariz.github.io/blob/development/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termos de Uso
          </S.AnchorBasicLink>
        </S.InnerRowContainer>
      </S.InnerRow>
    </S.MainRow>
  );
}

export default Footer;
