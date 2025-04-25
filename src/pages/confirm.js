import React from 'react';
import Layout from '../components/Layout';
import SignUpConfirm from '../components/SignUpConfirm';

function Confirm({ location }) {
  return (
    <Layout location={location}>
      <main>
        <SignUpConfirm />
      </main>
    </Layout>
  );
}

export default Confirm;
