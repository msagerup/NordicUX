import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Contact from '../components/Contact';
import MenuBorder from '../components/MenuBorder';

const NordicRouter = () => (
   <BrowserRouter>
      <div>
      <MenuBorder />
         <Switch>
            <Route path="/" component ={ Home } exact={ true } />
            <Route path="/contact" component = { Contact } />
            <Route component ={ NotFound } />
         </Switch>
      </div>
   </BrowserRouter>
);

export default NordicRouter;