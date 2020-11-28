import React from 'react';

import { Star } from './icons';
import NavItem from './nav-item';

const Navbar = () => (
  <nav className="w-full bg-gray-800 opacity-90 fixed z-50">
    <div className="container mx-auto flex items-center justify-between h-16">
      <div>
        <NavItem to="/">TC</NavItem>
      </div>
      <div>
        <NavItem to="/#history">History</NavItem>
        <NavItem to="/#gallery">Gallery</NavItem>
        <NavItem to="/#location">Location</NavItem>
        <NavItem to="/#contact">Contact</NavItem>
        <NavItem to="/tour">Virtual Tour</NavItem>
        <NavItem to="/special">Special Events</NavItem>
        <a
          className="rounded-md bg-green-600 text-white p-2 hover:bg-green-800"
          href="/donate"
        >
          <Star className="w-4 h-4 inline text-yellow-300 -top-0.5 relative mr-0.5" />
          Donate!
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
