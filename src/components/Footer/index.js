import React from 'react';
import { SubTitle } from '../shared/styled';
import * as S from './styled';

function Footer() {
  return (
    <footer>
      <S.MainRow>
        <S.Wrapper>
          <SubTitle>contato</SubTitle>
          <S.Row>
            <a
              className="anchor"
              href="https://linkedin.com/in/luiz-mariz/"
              target="_blank"
              title="LinkedIn"
              rel="noopener noreferrer"
            >
              <S.Linkedin />
            </a>
            <a
              className="anchor"
              href="https://github.com/luizmariz/"
              target="_blank"
              title="Github"
              rel="noopener noreferrer"
            >
              <S.Github />
            </a>
          </S.Row>
        </S.Wrapper>
      </S.MainRow>
      <S.BonusRow>
        <S.Wrapper>
          Feito com react e <S.Hearth />
        </S.Wrapper>
      </S.BonusRow>
    </footer>
  );
}

export default Footer;
