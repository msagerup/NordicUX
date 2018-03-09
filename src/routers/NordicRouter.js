import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Menu from '../components/Menu';
import Golden from '../components/Golden';
import NotFound from '../components/NotFound';
import Contact from '../components/Contact';
import ProjectOne from '../components/projects/ProjectOne';
import ProjectTwo from '../components/projects/ProjectTwo';
import ProjectThree from '../components/projects/ProjectThree';
import ProjectFour from '../components/projects/ProjectFour';



const NordicRouter = () => (
   <BrowserRouter>
      <div>
         <Menu />
         <Switch>
            <Route path="/" component ={ Golden } exact={ true } />
            <Route path="/contact" component = { Contact } />
            <Route path="/project/1" component = { ProjectOne } />
            <Route path="/project/2" component = { ProjectTwo } />
            <Route path="/project/3" component = { ProjectThree } />
            <Route path="/project/4" component = { ProjectFour } />
            <Route path="/golden" component = { Golden } />
            <Route component ={ NotFound } />
         </Switch>
      </div>
   </BrowserRouter>
);

export default NordicRouter;