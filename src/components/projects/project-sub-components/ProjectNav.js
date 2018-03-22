import React from 'react';
import { Link } from 'react-router-dom';

const ProjectNav = (props)=> (
  <div className="projectNav">
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/project/1">Resturant App</Link></li>
         <li><Link to="/project/2">Conference website</Link></li>
         <li><Link to="/project/3">Travel Website</Link></li>
         <li><Link to="/project/4">Real Estate Portal</Link></li>
      </ul>
  </div>
);

export default ProjectNav;