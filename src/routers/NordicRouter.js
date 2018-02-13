import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import Menu from '../components/Menu';
import Golden from '../components/Golden';
import NotFound from '../components/NotFound';
import Projects from '../components/Projects';
import Contact from '../components/sub-components/Contact';
import MenuBar from '../components/sub-components/MenuBar';


const NordicRouter = () => (
   <BrowserRouter>
      <div>
         <Menu />
         <Switch>
            <Route path="/" component ={ Golden } exact={ true } />
            <Route path="/contact" component = { Contact } />
            <Route path="/projects" component = { Projects } />
            <Route path="/golden" component = { Golden } />
            <Route component ={ NotFound } />
         </Switch>
      </div>
   </BrowserRouter>
);

export default NordicRouter;