import React from 'react';
import ArrowDown from './ArrowDown';
import ContactIcon from './ContactIcon';
import Subtitle from './Subtitle';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';




const Home = () => (
   <div>
      <section className="hero">
         <div id="home-left-side">
            <Menu />
         </div>
         <div id="home-right-side">
            <ContactIcon />
            <ArrowDown />
         </div>  
         <div className="hero__background-image"></div>
         <div className="hero__content-text">
            <h1 className="hero__title">Nordic UX Studio</h1>
            <Subtitle />
         </div>
      </section>
         
   </div>

);

export default Home;
