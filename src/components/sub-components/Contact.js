import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Contact extends React.Component {
   

   componentWillEnter () {
      console.log('ENTEEERING')
   }

   render () {
      return (
      <div className="content-holder large">
         <h1>Hello This is from Contact!!!!</h1>
      </div>



         );
   }
}


export default Contact;