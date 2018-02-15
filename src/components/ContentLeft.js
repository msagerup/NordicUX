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
      }
   }

 // This passes in the component name and checks if its equal to the state
 toggle(componentName) {
   console.log('this is the state that is passed:', this.state)
  this.setState({
       activeComponent: this.state.activeComponent === componentName ? null : componentName
  });
}

   render () {
      console.log(!this.state.activeComponent === 'contact' && <Contact />)
       return (
         <div className="left-side large left"> 

         {this.state.activeComponent === 'contact' && <Contact />} 
         {this.state.activeComponent === 'info' && <Info />}
         {this.state.activeComponent === 'order' && <Order />}  
          

         <div className="menu-bar">
            <div className="menu-bar__items" 
              onClick={this.toggle.bind(this, 'contact')}
            >
               Contact
            </div>
            <div className="menu-bar__items"
               onClick={this.toggle.bind(this, 'info')}
            >
               Info
            </div>
            <div className="menu-bar__items"
               onClick={this.toggle.bind(this, 'order')}
               
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