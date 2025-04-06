import PropTypes from 'prop-types';
import React from 'react';
import NavDesktop from '../NavDesktop';
import NavMobile from '../NavMobile';

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
