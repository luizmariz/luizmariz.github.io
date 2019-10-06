import React from 'react';
import { SubTitle } from '../shared/styled';
import {
  MainRow,
  BonusRow,
  Hearth,
  Row,
  Github,
  Linkedin
} from './styled';

function Footer () {
  return (
    <footer>
      <MainRow>
        <div>
          <SubTitle>contato</SubTitle>
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