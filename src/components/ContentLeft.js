import React from 'react';
import {bindActionCreators} from 'redux';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import LogoText from './sub-components/ContentLeft_logoText';
import Project from './sub-components/Project';
import MenuBar from './sub-components/MenuBar';



class ContentLeft extends React.Component {
   
   render () {

      return (
         <div className="left-side large left">
         <NavLink to="/contact">THis is a link</NavLink>
            
            <MenuBar />
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