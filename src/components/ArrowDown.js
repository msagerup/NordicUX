import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDoubleDown from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown';

class ArrowDown extends React.Component {
   render () {
      return (
         <div>
            <FontAwesomeIcon icon={faAngleDoubleDown} size="lg" />
         </div>
      );
   }
}
   


export default ArrowDown;