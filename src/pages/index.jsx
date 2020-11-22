import React from 'react';
import Contact from '../components/contact';

import Hero from '../components/hero';
import Layout from '../components/layout';
import Section from '../components/section';
import SEO from '../components/seo';
import Triangle from '../components/triangle';

const IndexPage = () => (
  <Layout>
    <Triangle />
    <SEO />

    <Hero />

    <Section id="history">
      <Section.Title>History</Section.Title>
      <Section.Text>
        Taylor's Chapel is an historic chapel located at Baltimore, Maryland,
        United States. It is a Greek Revival style chapel located in a quarter
        acre fenced-in plot, which also includes a graveyard, within Mount
        Pleasant Park in northeast Baltimore. The structure is a small,
        mid-19th-century country church, built of stone, covered with stucco,
        painted white, and has a gable roof. The interior features frescoes on
        the walls and ceiling, attributed by tradition to the Italian-American
        painter Constantino Brumidi. The frescoes are trompe l’oeil paintings of
        classical architectural detailing, including pilasters, panels,
        coffering, and ornaments. It has remained completely unaltered since its
        construction in 1853. It was built as a Methodist chapel by the Taylor
        family on their Mt. Pleasant plantation. In 1925 the City of Baltimore
        purchased the land surrounding the chapel and burial grounds for use as
        a public golf course. The site of the chapel and burial grounds was left
        to a self-perpetuating board of trustees. Taylor's Chapel is considered
        the mother church of St. John's United Methodist Church of Hamilton.
      </Section.Text>
      <Section.Text>
        Taylor's Chapel was listed on the National Register of Historic Places
        in 1983.
      </Section.Text>

      <iframe
        className="mx-auto mt-4"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/EKzHR0CSseA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="historyVideo"
      ></iframe>
    </Section>

    <Section>
      <Section.Title>Gallery</Section.Title>
    </Section>

    <Section id="location">
      <Section.Title>Location</Section.Title>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.519676990474!2d-76.57684372511129!3d39.36207741510433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8058a32bf9197%3A0x8bb1936807c6c867!2sTaylors+Chapel!5e0!3m2!1sen!2sus!4v1509838321966"
        width="100%"
        height="500"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        title="GoogleMaps"
      ></iframe>
    </Section>

    <Section id="contact">
      <Section.Title>Contact</Section.Title>
      <Contact />
    </Section>
  </Layout>
);

export default IndexPage;
