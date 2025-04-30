import React from 'react';
import Layout from '../components/Layout';
import RedirectInfoText from '../components/RedirectInfoText';

function Confirm({ location }) {
  return (
    <Layout location={location}>
      <main>
        <RedirectInfoText
          title={'Quase lá! ✨'}
          description={
            'Checa o seu e-mail, inclusive a pasta de spam, e confirme sua inscrição.'
          }
        />
      </main>
    </Layout>
  );
}

export default Confirm;
