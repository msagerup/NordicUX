import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LogoText from './sub-components/ContentLeft_logoText';
import Project from './sub-components/Project';
import Contact from './sub-components/Contact';
import Info from './sub-components/Info';
import Order from './sub-components/Order';

class ContentLeft extends React.Component {
   constructor () {
      super ()
      this.state = {
         isHidden: true,
         infoHidden: true,
         contactHidden: true,
         orderHidden: true
      }
   }
   toggleContact () {
      this.setState({
         contactHidden: !this.state.contactHidden,
      })
   }
   
   toggleInfo() {
      this.setState ({
         infoHidden: !this.state.infoHidden
      })
   }

   toggleOrder () {
      this.setState ({
         orderHidden: !this.state.orderHidden
      })
   }

   render () {
      const isHidden = this.state.isHidden;   
      const order = this.state.orderHidden;
      const contact = this.state.contactHidden;
      const info = this.state.infoHidden;

      console.log(contact, info, order, isHidden)

       return (
         <div className="left-side large left">
        
         {!contact && <Contact />}
         {!info && <Info />}
         {!order && <Order />}


         <div className="menu-bar">
            <div className="menu-bar__items" 
               onClick={ this.toggleContact.bind(this) }
            >
               Contact
            </div>
            <div className="menu-bar__items"
               onClick={this.toggleInfo.bind(this)}
            >
               Info
            </div>
            <div className="menu-bar__items"
               onClick={this.toggleOrder.bind(this)}
            >
               Order
            </div>
         </div>
            <LogoText />
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      project: state.activeproject
   }
}


export default ContentLeft;