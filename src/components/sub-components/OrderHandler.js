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
    this.sendMail = this.sendMail.bind(this);
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

  // Send email based on selected value
  sendMail() {
   console.log(this.state.selectedSubItem)
   var subject = this.state.selectedSubItem;
   window.location.href= `mailto:msagerup@online.no?subject=I%20would%20like%20some%20info%20on:%20${subject}&body=Please%20specify%20how%20I%20can%20help%20you%20with:%20${subject}`
  }

  render() {
    console.log(this.state)
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
         {this.state.selectedSubItem && 
          <a className="submit" onClick={this.sendMail}><h3 className="h3big">Send E-mail</h3></a> }
         
      </div>
    );
  }
}

export default OrderHandler;