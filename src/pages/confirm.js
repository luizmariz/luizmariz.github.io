import React from 'react';
import Layout from '../components/Layout';

function Confirm({ location }) {
  return (
    <Layout location={location}>
      <main>
        <h1>Só mais um passo...</h1>
        <p>É só checar sua caixa de entrada e confirmar a inscrição.</p>
      </main>
    </Layout>
  );
}

export default Confirm;
