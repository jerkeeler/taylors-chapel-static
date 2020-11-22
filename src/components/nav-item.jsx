import React from 'react';

import { Link } from 'gatsby';

const NavItem = ({ to, children }) => (
  <Link className="hover:bg-gray-700 rounded-md p-2 text-white mr-2" to={to}>
    {children}
  </Link>
);

export default NavItem;
