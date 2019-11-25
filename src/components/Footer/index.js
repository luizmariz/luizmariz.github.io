import React from 'react';
import * as S from './styled';

function Footer() {
  return (
    <footer>
      <S.MainRow>
        <S.Wrapper>
          <S.Row>
            <S.Anchor
              href="https://linkedin.com/in/luiz-mariz/"
              target="_blank"
              title="LinkedIn"
              rel="noopener noreferrer"
            >
              <S.Linkedin />
            </S.Anchor>
            <S.Anchor
              href="https://github.com/luizmariz/"
              target="_blank"
              title="Github"
              rel="noopener noreferrer"
            >
              <S.Github />
            </S.Anchor>
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
