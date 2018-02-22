import React from 'react';

class OrderSubSelector extends React.Component {

   switchSub(subselection) {
      switch (subselection) {
         case 'Platform/Tech':
            return ['React', 'React With Backend Database', 'WordPress', 'WordPress Theme']
            break;
         case 'Website size':
            return ['Single Landing Page', '1 - 5 Pages', ' 5 + Pages']
            break;
         case 'SEO':
            return ['Google+ business profile setup/optimization', 'Keyphrase research', '5 Keyword Optimization', 'Content Optimization']
            break;
         case 'Payment solutions':
            return ['Stripe', 'PayPal']
            break;
         case 'Extra':
            return ['Blog', 'Social Media Intergration', 'WebShop', 'Mobile Application']
         default:
            return ['None Selected']
            break;
      }
   }


   render () {
   console.log(this.props.subSelection)
   return (
      <div className="order-handler__field med">
         <h4>{this.props.mainSelectionTitle}</h4>
         <ul>
            {this.switchSub(this.props.subSelection).map((sublist) =>{
               return <li>{sublist}</li>
            } )}
         </ul>
      </div>
   )
   }
};

export default OrderSubSelector;

