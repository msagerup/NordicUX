import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class RightSideBottomRight extends React.Component {
   renderList() {
      return this.props.projects.map((project) =>{
         <li key={project.id}>{project.name}</li>
      });
   }

   render () {
     return (
         <div className="right-side__buttom-right large">
            <ul>
               {() => this.renderList()}
            </ul>
         </div>

      )
   }
}

function mapStateToProps(state) {
   return {
      projects: state.projects
   }
}

export default connect(mapStateToProps)(RightSideBottomRight);