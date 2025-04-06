import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';
import { StaticImage } from 'gatsby-plugin-image';

function Bio() {
  return (
    <S.Row>
      <StaticImage
        alt="Imagem do autor do blog"
        src="../../../assets/images/photo.png"
        placeholder="blurred"
        layout="fixed"
        width={55}
        height={55}
        quality={100}
        style={{ borderRadius: 50 }}
      />
      <S.Text>
        Blog por <Link to="/about/">Luiz Gustavo</Link>.{'\n'}
        Entusiasta de coisas que funcionam.
      </S.Text>
    </S.Row>
  );
}

export default Bio;
