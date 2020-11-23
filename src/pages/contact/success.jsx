import React from 'react';

import Layout from '../../components/layout';
import Container from '../../components/container';
import SEO from '../../components/seo';
import { P } from '../../components/typography';
import Spacer from '../../components/spacer';

const ContactSuccess = () => (
  <Layout>
    <SEO title="Success!" />
    <Spacer />
    <Container>
      <P>
        Success! Thank you for contacting Taylor's Chapel. We will respond as
        soon as possible.
      </P>
    </Container>
  </Layout>
);

export default ContactSuccess;
