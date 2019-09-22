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
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Footer;