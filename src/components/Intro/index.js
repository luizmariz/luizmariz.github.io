import React from 'react';
import moneyGIF from '../../assets/gifs/money.gif';

import CodeEditorWindow from '../CodeEditor';
import * as S from './styled';

function Intro() {
  const initialCode = `
  // Welcome to the code editor!
  function greet(name) {
    return 'Hello, ' + name + '!';
  }

  const message = greet('World');
  console.log(message);

  // Try editing this code!
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
      </S.Column>
      <S.Column>
        <CodeEditorWindow initialCode={initialCode} language="javascript" />
      </S.Column>
    </S.Container>
  );
}

export default Intro;
