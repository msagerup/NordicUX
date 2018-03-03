import React from 'react';
import OrderHandler from '../sub-components/OrderHandler';
import LoaderDown from '../loaders/LoaderDown';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


class Order extends React.Component {
   render () {

   return (
      <CSSTransitionGroup
         transitionName = "PageAppear"
         transitionAppear = {true}
         transitionAppearTimeout = {500}
         transitionEnter = {false}
         transitionLeave = {false}
      >
         <div className="content-holder large">
            <LoaderDown />
            <div className="infocorner content-holder__menu-tag">
               <h4>Ord-er</h4>
            </div>
            <div className="order-content">
               <h3>Let's work together</h3><hr/>
               <p>Please select what features you need for your business and I will get
               in touch with you. Your selected options will be show at the bottom on this tab</p>
            </div>
            <OrderHandler />
         </div>
      </CSSTransitionGroup>
   )
   }
};

export default Order;

