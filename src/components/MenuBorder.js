import React from 'react';
import { NavLink } from 'react-router-dom';

class MenuBorder extends React.Component {
  showSettings (event) {
    event.preventDefault();
   
  }



  render () {
    return (
      <div>
         <nav id="bt-menu" class="bt-menu">
          <a href="#" className="bt-menu-trigger"><span>Menu</span></a>
            <ul>
            <li>HELLO</li>
            <li>Home</li>
            <li><a href="#" className="bt-icon icon-lock">Lock</a></li>
            <li><a href="#" className="bt-icon icon-speaker">Sound</a></li>
            <li><a href="#" className="bt-icon icon-star">Favorite</a></li>
            </ul>
         </nav>
      </div>
    );
  }
}

export default MenuBorder;