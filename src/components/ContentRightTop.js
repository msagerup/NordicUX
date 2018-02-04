import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

 class ContentRightTop extends React.Component {
  showProjectDetails () {

  }
   render () {
      return (
      
         <div className="upper xlLargeTall">
           <ul>
              <p>{this.props.project.tech}</p>
           </ul>
         </div>

      );
   }
}

function mapStateToProps(state) {
   return {
      project: state.activeProject
   };
}

export default connect(mapStateToProps)(ContentRightTop);