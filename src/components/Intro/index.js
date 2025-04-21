import React from 'react';
import moneyGIF from '../../assets/gifs/money.gif';

import CodeEditorWindow from '../CodeEditor';
import ProfileCard from '../ProfileCard';

import * as S from './styled';

function Intro() {
  const initialCode = `/**
*  Sim, a marca é um trocadilho com Lorem Ipsum
*  Sim, achei genial. E tá tudo bem.
*/
function saudar(nome) {
  return "Olá," + nome + "!";
}

const message = greet('Mundo');
console.log(message);

// Experimente editar este código!
`.trim();

  return (
    <S.Container>
      <S.Column>
        <S.Text>
          <S.TextBold>Luiz</S.TextBold> sou eu.
        </S.Text>
        <S.Text>
          <S.TextBold>Luiz Ipsum</S.TextBold>, um domínio da internet onde
          escrevo coisas.
        </S.Text>
        <S.Text>
          Domínio pago com{' '}
          <S.MoneyGif alt="Imagem do autor do blog" src={moneyGIF} /> , que vêm
          dos programas que eu faço.
        </S.Text>
        <S.ConnectButton
          href="https://linkedin.com/in/luiz-mariz/"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          Me adiciona lá!
        </S.ConnectButton>
      </S.Column>
      <S.Column>
        <CodeEditorWindow initialCode={initialCode} language="javascript" />
        <S.ProfileWrapper>
          <ProfileCard />
        </S.ProfileWrapper>
      </S.Column>
    </S.Container>
  );
}

export default Intro;
