import React from 'react';
import ArrowDown from './ArrowDown';
import ContactIcon from './ContactIcon';
import { NavLink } from 'react-router-dom';

const Home = () => (
   <div>
      <section className="hero">
         <div className="hero__background-image"></div>
         <div className="hero__content-text">
            <h1 className="hero__title">Nordic UX Studio</h1>
         </div>
      </section>
         <div id="home-right-side">
            <ContactIcon />
            <ArrowDown />
         </div>  
   </div>

);

export default Home;
