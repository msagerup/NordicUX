import React from 'react';
class OrderSummery extends React.Component {

   render () {
   return (
      <div className="order-handler__summery large">
          Your selection
          <p>
          {(this.props.selectedItem) ? (
            <span>
              <strong>{this.props.selectedItem}</strong>
              {' '}&raquo;{' '}
              {(this.props.selectedSubItem) ? (
                <strong>{this.props.selectedSubItem}</strong>
              ) : (
                <em>No Sub-Item selected, please select</em>
              )}
            </span>
          ) : (
            <em>No item selected</em>
          )}
        </p>       
      </div>
   )
   }
};

export default OrderSummery;

