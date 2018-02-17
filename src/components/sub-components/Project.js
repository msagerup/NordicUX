import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Project extends React.Component {
   render() {
      return(

         <div className="content-holder large">
            <div className="infocorner content-holder__menu-tag">
               <h4>Pro-jec  -ts</h4>
            </div>

            <h3>{this.props.project.name}</h3>
            <p>{this.props.project.desc}</p>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      project: state.activeproject
   }
}

export default connect (mapStateToProps)(Project);