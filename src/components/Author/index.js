import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';

function Author() {
  const { avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(relativePath: { eq: "photo.png" }) {
          childImageSharp {
            fixed(width: 70, height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <S.Row>
      <S.StyledImg
        alt="Imagem do autor do blog"
        fixed={avatar.childImageSharp.fixed}
      />
      <S.Column>
        <S.Name>Luiz Gustavo Oliveira Mariz</S.Name>
        <S.Description>Desenvolvedor front end</S.Description>
      </S.Column>
    </S.Row>
  );
}

export default Author;