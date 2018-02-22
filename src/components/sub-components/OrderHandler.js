import React from 'react';
import OrderSelector from '../sub-components/OrderSelector';
import OrderSubSelector from '../sub-components/OrderSubSelector';

class OrderHandler extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         mainSelected: ['Platform/Tech', 'Website size', 'SEO', 'Payment solutions', 'Extra'],
         subSelected: ''
      };
      this.toggleSubSelected = this.toggleSubSelected.bind(this);
   }

   toggleSubSelected(selected) {
      console.log(selected)
      this.setState({
         subSelected: selected
      });
   }

   render () {
   return (
      <div className="order-handler">
         <OrderSelector mainSelected = {this.state.mainSelected} triggerSubSelected={this.toggleSubSelected}/>
         <OrderSubSelector  />
         <h3> {this.state.subSelected}</h3>
      </div>
   )
   }
};

export default OrderHandler;