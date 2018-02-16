import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import LogoText from './sub-components/ContentLeft_logoText';
import Projects from './sub-components/Project';
import Contact from './sub-components/Contact';
import Info from './sub-components/Info';
import Order from './sub-components/Order';
import About from './sub-components/About';

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

            <CSSTransitionGroup //Menu Components loads on page with animation
               transitionName="menu-loader"
               transitionAppear= {false}
               transitionEnter= {true}
               transitionEnterTimeout = {900}
               transitionLeave= {true}
               transitionLeaveTimeout = {300}
            >
               {this.state.activeComponent === 'about' && <About />}
               {this.state.activeComponent === 'projects' && <Projects />}  
               {this.state.activeComponent === 'contact' && <Contact />} 
               {this.state.activeComponent === 'info' && <Info />}
               {this.state.activeComponent === 'order' && <Order />} 
            </CSSTransitionGroup> 

         <div className="menu-bar">
            <div className="menu-bar__items" 
              onClick={this.toggle.bind(this, 'about')}
            >
               About
            </div>
            <div className="menu-bar__items" 
              onClick={this.toggle.bind(this, 'projects')}
            >
               Projects
            </div>
            <div className="menu-bar__items"
               onClick={this.toggle.bind(this, 'contact')}
            >
               Contact
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