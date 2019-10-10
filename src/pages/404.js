import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ovniLight from '../assets/images/ovni404Light.svg';
import ovniDark from '../assets/images/ovni404Dark.svg';
import Layout from '../components/Layout';

const OvniVector = styled.img`
  height: auto;
  width: 25vw;

  @media ( max-width: 672px ) {
    width: 80vw;
  }
`;
const Container = styled.div`
  text-align: center;
  margin-top: -2rem;

  h1 {
    font-size: 5rem;
    margin-top: -1rem;
    margin-bottom: 0;
  }

  p {
    margin-top: .5rem;
  }

  a {
    display: block;
    text-transform: uppercase;
    border: 1px solid ${props => props.theme.text.concat('33')};
    border-radius: 5px;
    margin: 0 30%;
    padding: .5rem 0;

    @media ( max-width: 672px ) {
      margin: 0 10%;
    }
  }

  a:hover {
    border-color: ${props => props.theme.text.concat('99')};
  }
`;

function PageNotFound () {
  return (
    <Layout location={{ pathname: '/404' }}>
      <Container>
        <OvniVector src={window.__theme === 'light' ? ovniLight : ovniDark} />
        <h1>404</h1>
        <p>Ixi, essa página é de outro mundo.</p>
        <Link className='anchor'>me traz de volta!</Link>
      </Container>
    </Layout>
  );
}

export default PageNotFound;