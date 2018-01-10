import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NotFound = () => (
   <section id="not_found">
      <h3>404</h3>
      <p>Page is not found</p>
      <hr/>
      <Link to="/">Go Home</Link>
   </section>
);

export default NotFound;
