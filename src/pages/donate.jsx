import React from 'react';

import Layout from '../components/layout';
import Spacer from '../components/spacer';
import SEO from '../components/seo';
import Container from '../components/container';
import { H1, P } from '../components/typography';

const Donate = () => (
  <Layout>
    <SEO title="Donate" />
    <Spacer />
    <Container>
      <H1>Donations</H1>
      <P>
        We appreciate donations! We are constantly working to maintain this aged
        building, its art and architecture, the church ground and the cemetery
        markers. We depend on our friends to help us with this effort. Please
        send your tax deductible donation via check made out to "Taylor's
        Chapel" to our treasurer, Dr. Calvin Keeler; 8 Donna Dr.;
        Bear, DE 19701{' '}
      </P>
      <P>Tax exempt number 82-2407488.</P>
    </Container>
  </Layout>
);

export default Donate;
