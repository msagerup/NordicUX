import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
   
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Homedddddddd</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default Hamburger;