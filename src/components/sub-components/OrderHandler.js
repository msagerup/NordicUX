import React from 'react';
import OrderSelector from '../sub-components/OrderSelector';
import OrderSummery from '../sub-components/OrderSummery';

class OrderHandler extends React.Component {
  constructor(props) {
    super(props);
    this.orderData = {
      'Platform/Tech': [
        'React',
        'React With Backend Database', 
        'WordPress', 
        'WordPress Theme'
      ],
      'Website size': [
        'Single Landing Page', 
        '1 - 5 Pages', 
        ' 5 + Pages'
      ],
      'SEO': [
        'Google+ business profile setup/optimization', 
        'Keyphrase research', 
        '5 Keyword Optimization', 
        'Content Optimization'
      ],
      'Payment solutions': [
        'Stripe', 
        'PayPal'
      ],
      'Extra': [
        'Blog',
        'Social Media Intergration',
        'WebShop',
        'Mobile Application'
      ]
    }
    this.state = {
      selectedItem: null,
      availableSubItems: null,
      selectedSubItem: null
    }
    this.selectItem = this.selectItem.bind(this);
    this.selectSubItem = this.selectSubItem.bind(this);
  }
  selectItem(item) {
    const availableSubItems = this.orderData[item];
    this.setState({
      selectedItem: item,
      availableSubItems : availableSubItems,
      selectedSubItem: null
    });
  }
  selectSubItem(item) {
    this.setState({ selectedSubItem: item });
  }
  render() {
    return (
      <div className="order-handler__field">
        <OrderSelector
          items={Object.keys(this.orderData)}
          selectItem={this.selectItem}
        />
        {(this.state.availableSubItems) ? (
          <OrderSelector
            items={this.state.availableSubItems}
            selectItem={this.selectSubItem}
          />
        ) : null
         }
       
        <OrderSummery 
            selectedItem={this.state.selectedItem}
            selectedSubItem={this.state.selectedSubItem}
         />
      </div>
    );
  }
}

export default OrderHandler;