import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "taylor1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 978) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="h-full w-full absolute z-0">
        <Img
          className="h-full w-full"
          fluid={data.image.childImageSharp.fluid}
        />
      </div>
      <h1 className="text-6xl z-10 mb-4 text-white text-shadow">
        Taylor's Chapel
      </h1>
      <h3 className="text-4xl z-10 text-white text-shadow">Baltimore's gem</h3>
    </div>
  );
};

export default Hero;
