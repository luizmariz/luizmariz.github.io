import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import * as S from './styled';

function Bio() {
  const { avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(relativePath: { eq: "photo.png" }) {
          childImageSharp {
            fixed(width: 55, height: 55) {
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
        style={{ display: 'inherit' }}
      />
      <S.Text>
        Blog por <Link to="/about/">Luiz Gustavo</Link>.{'\n'}
        Grande entusiasta do eXtreme Go Horse.
      </S.Text>
    </S.Row>
  );
}

export default Bio;
