import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectProject} from '../actions/index';

class ContentLeft extends React.Component {
   
   render () {

      return (
          <div className="large left">
            <ul>
              LEFT
            </ul>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      projects: state.projects
   };
}



export default connect(mapStateToProps)(ContentLeft);