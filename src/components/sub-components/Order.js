import React from 'react';
import OrderHandler from '../sub-components/OrderHandler';


class Order extends React.Component {
   render () {

   return (
      <div className="content-holder large">
         <div className="infocorner content-holder__menu-tag">
            <h4>Ord-er</h4>
         </div>
         <div className="order-content">
            <h3>Let's work together</h3>
            <p>Please select what features you need for your business and I will get
            in touch with you. Your selected options will be show at the bottom on this tab</p>
         </div>
         <OrderHandler />
      </div>
   )
   }
};

export default Order;

