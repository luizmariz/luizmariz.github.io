import React from 'react';

import CodeEditorWindow from '../CodeEditor';
import ProfileCard from '../ProfileCard';

import * as S from './styled';

function Intro() {
  const initialCode = `/**
*  Sim, a marca é um trocadilho com Lorem Ipsum
*  Sim, achei genial e tá tudo bem.
*/
function greet(name = 'Pessoa') {
  return 'Olá,' + name + '!';
}

const message = greet();
console.log(message);

// Experimenta editar o código!
`.trim();

  return (
    <S.Container>
      <S.Column>
        <S.Text title="Precisa de copyright? @gaveta">
          <S.TextBold id="app">Olá</S.TextBold> pessoa!
        </S.Text>
        <S.Text>
          <S.TextBold>Luiz Ipsum</S.TextBold> é um domínio da internet onde
          escrevo coisas.
        </S.Text>
        <S.Text>
          É também um playground pessoal, então não espere muita coerência.
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
