import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ChristmasImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "2021_christmas_announcement.jpg" }) {
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
        className="h-full w-full mx-auto"
        fluid={data.image.childImageSharp.fluid}
      />
    </div>
  );
};

export default ChristmasImage;
