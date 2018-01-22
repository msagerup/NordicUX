import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

class ContactIcon extends React.Component {
   render () {
      return (
         <div>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
         </div>
      );
   }
}
   


export default ContactIcon;