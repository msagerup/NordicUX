import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div id="outer-container">
  <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
  <main id="page-wrap">
    THIS IS THE INDEX
  </main>
</div>
);

export default Home;
