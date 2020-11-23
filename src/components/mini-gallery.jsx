import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const FullImage = ({ imgProps, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen z-50"
  >
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 opacity-60 z-50" />
    <div className="w-4/12 z-50">
      <Img
        className="max-w-full max-h-full z-50"
        fluid={imgProps.childImageSharp.fluid}
      />
    </div>
  </div>
);

const Item = ({ imgProps }) => {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div onClick={() => setFullScreen(true)}>
        <Img
          className="hover:cursor-pointer"
          fixed={imgProps.childImageSharp.fixed}
        />
      </div>
      {fullScreen && (
        <FullImage imgProps={imgProps} onClick={() => setFullScreen(false)} />
      )}
    </div>
  );
};

const MiniGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { glob: "album1/*" } }
        sort: { order: ASC, fields: name }
        limit: 9
      ) {
        nodes {
          childImageSharp {
            fixed(width: 200) {
              originalName
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.allFile.nodes.map((img) => (
        <Item key={img.childImageSharp.fixed.originalName} imgProps={img} />
      ))}
    </div>
  );
};
export default MiniGallery;
