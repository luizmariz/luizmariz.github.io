import React from 'react';
import { SubTitle } from '../shared/styled';
import * as S from './styled';

function Footer() {
  return (
    <footer>
      <S.MainRow>
        <div>
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
        </div>
      </S.MainRow>
      <S.BonusRow>
        <div>
          Feito com react e <S.Hearth />
        </div>
      </S.BonusRow>
    </footer>
  );
}

export default Footer;
