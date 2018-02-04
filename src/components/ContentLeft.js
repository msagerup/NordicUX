import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectProject} from '../actions/index';

class ContentLeft extends React.Component {
   createListProjects () {
      return this.props.projects.map((project) => {
         return (
            <li 
               key={project.id}
               onClick={()=> this.props.selectProject(project)}
            >
               {project.name} : {project.desc}
            </li>
            );
      });
   }   
   render () {

      return (
          <div className="large left">
            <ul>
              {this.createListProjects()}
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

function matchDispatchToProps(dispatch) {
   return bindActionCreators({selectProject: selectProject}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ContentLeft);