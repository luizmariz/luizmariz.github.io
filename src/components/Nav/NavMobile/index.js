import React, { useState } from 'react';
import { Anchor } from '../../shared/styled';
import PropTypes from 'prop-types';
import * as S from './styled';

function NavMobile({ items }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = e => {
    e.preventDefault();
    setShowMenu(showMenu => !showMenu);
  };

  return (
    <S.Container show={showMenu}>
      <S.MenuBar>
        <S.MenuBtn onClick={toggleMenu} />
      </S.MenuBar>
      <S.Content>
        {items.map(item => (
          <li key={item.to}>
            <Anchor to={item.to}>{item.name}</Anchor>
          </li>
        ))}
      </S.Content>
    </S.Container>
  );
}

NavMobile.propTypes = {
  items: PropTypes.object.isRequired
}

export default NavMobile;