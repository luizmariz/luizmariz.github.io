import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageNotFound from '../components/PageNotFound';

function NotFound404() {
  return (
    <Fragment>
      <Seo title="404: Not found" />
      <Layout location={{ pathname: '/404' }}>
        <PageNotFound />
      </Layout>
    </Fragment>
  );
}

export default NotFound404;
