import React from 'react';

import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => (
  <div className="flex flex-col justify-between min-h-screen layout">
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
