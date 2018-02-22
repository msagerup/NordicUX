import React from 'react';

class OrderSelector extends React.Component {
   constructor(props) {
      super(props);
   }

 

   render () {
   return (
      <div className="order-handler__field large">
         <h3>Please Select Features:</h3>
         <ul>
            {this.props.mainSelected.map((mainSelect) => {
               return (
                  <li
                     key={mainSelect}
                     onClick= {() => this.props.triggerSubSelected(mainSelect)}
                  >
                     {mainSelect}
                  </li>
                  )
            })}
         </ul>
      </div>
   )
   }
};

export default OrderSelector;