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
import BackgroundIMG from './sub-components/BackgroundIMG';


class ContentLeft extends React.Component {
   constructor (props) {
      super (props)
      this.state = {
        MenuVisible: false    
      }
      this.toggleMenu = this.toggleMenu.bind(this)
   }

 // This passes in the component name and checks if its equal to the state
 toggle(componentName) {
   console.log('this is the state that is passed:', this.state)
  this.setState({
       activeComponent: this.state.activeComponent === componentName ? null : componentName,
       MenuVisible: !this.state.MenuVisible
  });
}
  
  toggleMenu() {
    console.log(this.state)
    this.setState({
      MenuVisible: !this.state.MenuVisible
    })
  }

   render () {
       return (
         <div className="left-side large left"> 

               {this.state.activeComponent === 'about' && <About />}
               {this.state.activeComponent === 'projects' && <Projects />}  
               {this.state.activeComponent === 'contact' && <Contact />} 
               {this.state.activeComponent === 'info' && <Info />}
               {this.state.activeComponent === 'order' && <Order />} 
            
           <div className="menuBarToggle"><button onClick={ this.toggleMenu }><h6>=</h6></button></div>     
             {this.state.MenuVisible && (
             <div className="menu-bar">
                <div className="menu-bar__items" 
                  onClick={this.toggle.bind(this, 'about')}
                >
                   <h5>About</h5>
                </div>
                <div className="menu-bar__items" 
                  onClick={this.toggle.bind(this, 'projects')}
                >
                   <h5>Projects</h5>
                </div>
                <div className="menu-bar__items"
                   onClick={this.toggle.bind(this, 'contact')}
                >
                   <h5>Contact</h5>
                </div>
                <div className="menu-bar__items"
                   onClick={this.toggle.bind(this, 'order')}
                   
                >
                   <h5>Order</h5>
                </div>
             </div>    
                )}
            <LogoText />
            <BackgroundIMG />
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