import React from 'react';
import * as S from './styled';

function ProfileCard() {
  return (
    <S.ProfileCardContainer>
      <S.ProfileHeader>
        <S.ProfileImage
          alt="Imagem do autor do blog"
          src="https://avatars.githubusercontent.com/u/37978726"
          width={35}
          height={35}
        />
        <div>
          <S.Name>{'Luiz Mariz'}</S.Name>
          <S.Title>{'Desenvolvedor Fullstack'}</S.Title>
        </div>
      </S.ProfileHeader>
      <S.Description>
        {'Sou um desenvolvedor com bastante experiência criando coisas...'}
      </S.Description>
      <S.StyledLink to={'/about'}>Saiba mais</S.StyledLink>
    </S.ProfileCardContainer>
  );
}

export default ProfileCard;
