import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
   <header>
      <h2>Nordic UX</h2>
      <nav>
         <NavLink to="/" exact = { true }>Home</NavLink>
         <NavLink to="/order">Order your website</NavLink>
         <NavLink to="/pricing">Pricing</NavLink>
         <NavLink to="/contact">Contact</NavLink>
      </nav>
   </header>
);

export default Header;
