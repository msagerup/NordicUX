import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Contact from '../components/Contact';

const NordicRouter = () => (
   <BrowserRouter>
      <div>
      <Header />
         <Switch>
            <Route path="/" component ={ Contact } exact={ true } />
            <Route path="/contact" component = { Contact } />
            <Route component ={ NotFound } />
         </Switch>
      </div>
   </BrowserRouter>
);

export default NordicRouter;