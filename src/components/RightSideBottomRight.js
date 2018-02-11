import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectProject} from '../actions/action-selectProject';

class RightSideBottomRight extends React.Component {
   renderList() {
      return this.props.projects.map((project) => {
         return (
               <li 
                  key={project.id}
                  onClick={() => this.props.selectProject(project)}
               >
                  {project.name}
               </li>
            )
      });
   }

   render () {   
     return (
         <div className="right-side__bottom-right large">
            <ul>
               {this.renderList()}
            </ul>
            <h4>HELLLO </h4>    
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      projects: state.projects,
      project: state.SelectedProject
   }
}

function matchDispatchToProps(dispatch){
   return bindActionCreators({ selectProject : selectProject }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(RightSideBottomRight);