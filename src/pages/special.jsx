import React from 'react';

import Layout from '../components/layout';
import Spacer from '../components/spacer';
import SEO from '../components/seo';
import Container from '../components/container';
import { H1, P } from '../components/typography';

const Special = () => (
  <Layout>
    <SEO title="Special Events" />
    <Spacer />
    <Container>
      <H1>Weddings, Baptisms, Memorial Services, Musical performances</H1>
      <P>
        If you are looking for a quaint, intimate venue for weddings, baptisms,
        memorial services, or, musical presentations, Taylor's Chapel may be the
        place for you. Taylor's Chapel is a small chapel (it seats approximately
        70 people) that was built by the Taylor family of Baltimore, Maryland,
        in 1853. It is available for events in the months of March, April, May,
        September, October, and November.
      </P>
      <P>
        Originally affiliated with the Methodist Church, Taylor's Chapel no
        longer has a regular congregation, but Ecumenical Christian services are
        held there several times a year, organized by the Chapel's Board of
        Trustees. Weddings, baptisms or funerals may be conducted by any
        accredited officiant.
      </P>
      <P>
        Taylor's Chapel is located on the edge of the original Taylor family
        farm which was bought by the city of Baltimore in 1925 and is now a city
        park known as Mt. Pleasant Golf Course. The official address is 6001
        Hillen Road, Baltimore, Maryland, 21239. The golf course driveway leads
        to the chapel and there is adequate parking immediately adjacent to the
        chapel. The chapel has excellent acoustics and would be suitable for
        small musical ensembles.
      </P>
      <P>
        Due to its' small size, the chapel has no plumbing and therefore no
        bathroom facilities. However, a short walk up the driveway brings you to
        the golf course club house (once the Taylor Family home) with facilities
        open during park hours from 9 to dusk. There is also a lunch counter and
        eating area where anyone is welcome.
      </P>

      <P>
        A donation, which is tax deductible, is requested for use of the chapel.
        The amount depends on the length of time involved, including decorating
        and cleaning but generally is around $250 for small gatherings and $500
        for larger, more elaborate weddings. No food or beverages, other than
        water, are allowed inside the church, but light refreshments could be
        served immediately outside the church.
      </P>

      <P>
        If you are interested in reserving the Chapel for a future event, please
        call or e-mail Mrs. Barbara Panowitz, 443-504-5542 or{' '}
        <a
          className="underline hover:text-blue-700"
          href="mailto:taylorschapelbaltimore@gmail.com?Subject=Taylor's%20Chapel"
          target="_top"
        >
          taylorschapelbaltimore@gmail.com
        </a>
      </P>
    </Container>
  </Layout>
);

export default Special;
