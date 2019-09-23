import React from 'react';
import {
  MainRow,
  BonusRow,
  Hearth,
  Title,
  Row,
  Github,
  Linkedin
} from './styled';

function Footer () {
  return (
    <footer>
      <MainRow>
        <div>
          <Title>contato</Title>
          <Row>
            <Linkedin />
            <Github />
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