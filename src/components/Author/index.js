import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styled';

function Author() {
  return (
    <S.Row>
      {/* <StaticImage
        alt="Imagem do autor do blog"
        src="../../assets/images/photo.png"
        placeholder="blurred"
        layout="fixed"
        width={70}
        height={70}
        quality={100}
        style={{ borderRadius: 50 }}
      /> */}
      <S.Column>
        <S.Name>Luiz Gustavo Oliveira Mariz</S.Name>
        <S.Description>Desenvolvedor full stack</S.Description>
      </S.Column>
    </S.Row>
  );
}

export default Author;
