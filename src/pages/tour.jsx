import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Spacer from '../components/spacer';
import Container from '../components/container';
import { H1 } from '../components/typography';

const Tour = () => (
  <Layout>
    <SEO title="Virtual Tour" />
    <Spacer />
    <Container>
      <H1>Virtual Tour</H1>
      <iframe
        className="mx-auto"
        width="853"
        height="480"
        src="https://my.matterport.com/show/?m=Kvo6wKBL6p1"
        frameBorder="0"
        allowFullScreen
        allow="xr-spatial-tracking"
        title="virtualTour"
      />
    </Container>
  </Layout>
);

export default Tour;
