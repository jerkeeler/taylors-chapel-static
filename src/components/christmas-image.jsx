import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ChristmasImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "2025_christmas_announcement.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 978) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="">
      <Img
        className="mx-auto"
        style={{
          maxWidth: "800px"
        }}
        fluid={data.image.childImageSharp.fluid}
      />
    </div>
  );
};

export default ChristmasImage;
