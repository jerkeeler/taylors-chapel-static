import React from 'react';

const Footer = () => (
  <footer>
    <div className="container mx-auto flex flex-col items-center">
      <hr className="w-5/6 mb-4" />
      <p className="text-center mb-4">
        &copy; Taylor's Chapel 2020 - {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
