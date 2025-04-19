import React from 'react';
import Layout from '../components/Layout';
import SignUpForm from '../containers/SignUpForm';

function SignUp({ location }) {
  return (
    <Layout location={location}>
      <main>
        <SignUpForm />
      </main>
    </Layout>
  );
}

export default SignUp;
