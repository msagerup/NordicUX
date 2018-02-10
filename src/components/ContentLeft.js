import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LogoText from './sub-components/ContentLeft_logoText.js';


class ContentLeft extends React.Component {
   
   render () {

      return (
         <div className="left-side large left">
           <h2>{this.props.project.name}</h2>
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


export default connect(mapStateToProps)(ContentLeft);