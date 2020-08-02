import React from 'react';
import PropTypes from 'prop-types';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

// TODO: Refact

const _ROUTES = [
  { name: 'Home', to: '/' },
  { name: 'Sobre mim', to: '/about/' }
];

function Nav({ location }) {
  return (
    <React.Fragment>
      <NavMobile items={_ROUTES} />
      <NavDesktop items={_ROUTES} />
    </React.Fragment>
  );
}

Nav.propTypes = {
  location: PropTypes.object
};

export default Nav;
