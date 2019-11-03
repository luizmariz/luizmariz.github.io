import React from 'react';
import { SubTitle } from '../shared/styled';
import { MainRow, BonusRow, Hearth, Row, Github, Linkedin } from './styled';

function Footer() {
  return (
    <footer>
      <MainRow>
        <div>
          <SubTitle>contato</SubTitle>
          <Row>
            <a
              className="anchor"
              href="https://linkedin.com/in/luiz-mariz"
              target="_blank"
              title="LinkedIn"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              className="anchor"
              href="https://github.com/luizmariz"
              target="_blank"
              title="Github"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </Row>
        </div>
      </MainRow>
      <BonusRow>
        <div>
          Feito com react e <Hearth />
        </div>
      </BonusRow>
    </footer>
  );
}

export default Footer;
