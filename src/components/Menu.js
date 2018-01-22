import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

class Menu extends React.Component {
   render () {
      return (
         <div>
            <FontAwesomeIcon icon={faBars} size="lg" />
         </div>
      );
   }
}
   


export default Menu;