import React from 'react';

class Order extends React.Component {
   render () {

   return (
      <div className="content-holder large">
         <div className="infocorner content-holder__menu-tag">
            <h4>Ord-er</h4>
         </div>
         <div className="order-content">
            <h3>I would like to work with you</h3>
            <p>Please select what features you need for your business and I will get
            in touch with you. Your selected options will be show at the bottom on this tab</p>
         </div>
         <div className="order-content__main-feature">

            <ul>
               <li>Item1</li>
               <li>Item2</li>
               <li>Item3</li>
               <li>Item4</li>
               <li>Item5</li>
            </ul>

         </div>
      </div>
   )
   }
};

export default Order;

