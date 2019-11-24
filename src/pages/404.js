import React, { Fragment } from 'react';
import { Anchor } from '../components/shared/styled';
import styled from 'styled-components';
import ovniLight from '../assets/images/ovni404Light.svg';
import ovniDark from '../assets/images/ovni404Dark.svg';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const OvniVector = styled.img`
  height: auto;
  width: 25vw;

  @media (max-width: 672px) {
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
    margin-top: 0.5rem;
  }

  a {
    display: block;
    text-transform: uppercase;
    border: 1px solid rgba(var(--text), 0.2);
    border-radius: 5px;
    margin: 0 30%;
    padding: 0.5rem 0;

    @media (max-width: 672px) {
      margin: 0 10%;
    }
  }

  a:hover {
    border-color: rgba(var(--text), 0.5);
  }
`;

export default function() {
  return (
    <Fragment>
      <SEO title="404: Not found" />
      <Layout location={{ pathname: '/404' }}>
        <Container>
          <OvniVector src={ovniDark} className="dark" />
          <OvniVector src={ovniLight} className="light" />
          <h1>404</h1>
          <p>Ixi, parece que essa página não existe.</p>
          <Anchor aria-label="Ir para a página inicial">
            me traz de volta!
          </Anchor>
        </Container>
      </Layout>
    </Fragment>
  );
}
