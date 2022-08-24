import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PageNotFound from '../components/PageNotFound';

export default function() {
  return (
    <Fragment>
      <SEO title="404: Not found" />
      <Layout location={{ pathname: '/404' }}>
        <PageNotFound />
      </Layout>
    </Fragment>
  );
}
