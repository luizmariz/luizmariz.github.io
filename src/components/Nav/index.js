import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavMobile from './NavMobile';

const _ROUTES = [
  { name: 'Home', to: '/' },
  { name: 'Sobre mim', to: '/about/' }
];

function Nav({ location }) {
  return (
    <React.Fragment>
      <NavMobile items={_ROUTES}/>
    </React.Fragment>
  );
}

Nav.propTypes = {
  location: PropTypes.string
}

export default Nav;
