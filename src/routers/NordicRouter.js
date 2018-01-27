import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import Menu from '../components/Menu';
import Golden from '../components/Golden';
import NotFound from '../components/NotFound';
import Contact from '../components/Contact';
import Projects from '../components/Projects';


const NordicRouter = () => (
   <BrowserRouter>
      <div>
         <Menu />
         <Switch>
            <Route path="/" component ={ Home } exact={ true } />
            <Route path="/contact" component = { Contact } />
            <Route path="/projects" component = { Projects } />
            <Route path="/golden" component = { Golden } />
            <Route component ={ NotFound } />
         </Switch>
      </div>
   </BrowserRouter>
);

export default NordicRouter;