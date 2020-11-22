import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Spacer from '../components/spacer';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Spacer />
    <div className="container mx-auto">
      <h1 className="text-4xl mb-4">404: Not Found</h1>
      <p className="text-xl mb-8">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
