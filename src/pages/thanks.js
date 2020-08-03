import React from 'react';
import Layout from '../components/Layout';

function Thanks({ location }) {
  return (
    <Layout location={location}>
      <main>
        <h1>Obrigado por se inscrever!</h1>
        <p>
          Seu email foi confirmado e agora você deve receber um email sempre que
          tiver conteúdo novo por aqui.
        </p>
      </main>
    </Layout>
  );
}

export default Thanks;
