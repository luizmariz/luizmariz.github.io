import React from 'react';
import Layout from '../components/Layout';
import RedirectInfoText from '../components/RedirectInfoText';

function Thanks({ location }) {
  return (
    <Layout location={location}>
      <main>
        <RedirectInfoText
          title={'Obrigado por se inscrever! 🎊'}
          description={
            'Seu email foi confirmado e agora você deve receber um email sempre que tiver conteúdo novo por aqui.'
          }
        />
      </main>
    </Layout>
  );
}

export default Thanks;
