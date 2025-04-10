import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import moneyGIF from '../../assets/gifs/money.gif';

import * as S from './styled';

function Intro() {
  return (
    <S.Column>
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
        <S.TextBold>Luiz</S.TextBold> sou eu.
      </S.Text>
      <S.Text>
        <S.TextBold>Luiz Ipsum</S.TextBold>, um domínio da internet onde escrevo
        coisas.
      </S.Text>
      <S.Text>
        Domínio pago com{' '}
        <S.MoneyGif alt="Imagem do autor do blog" src={moneyGIF} /> , que vêm
        dos programas que eu faço.
      </S.Text>
    </S.Column>
  );
}

export default Intro;
