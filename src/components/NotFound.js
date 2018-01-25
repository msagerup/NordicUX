import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link, NavLink } from 'react-router-dom';

const NotFound = () => (
   <CSSTransitionGroup
    transitionName = "PageAppear"
    transitionAppear = {true}
    transitionAppearTimeout = {1000}
    transitionEnter = {false}
    transitionLeave = {false}
    >
   <section id="not_found">
      <h3>404</h3>
      <p>Page is not found</p>
      <hr/>
      <Link to="/">Go Home</Link>
   </section>
   </CSSTransitionGroup>
);

export default NotFound;
