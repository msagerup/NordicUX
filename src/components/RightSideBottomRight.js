import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectProject} from '../actions/action-selectProject';

class RightSideBottomRight extends React.Component {
   // renderList() {
   //    return this.props.projects.map((project) => {
   //       return (
   //             <li 
   //                key={project.id}
   //                onClick={() => this.props.selectProject(project)}
   //             >
   //                {project.name}
   //             </li>
   //          )
   //    });
   // }

   render () {   
     return (
         <div className="right-side__bottom-right large">
            <div className="right-side__bottom-right__contact">
               <h4 className="paleGreen">Designed with tears and sleepless nighs by, Magnus Sagerup.</h4>
            </div>
            <div className="right-side__bottom-right__contact">
               <h4 className="h4_black">Please feel free to contact me on:</h4>
            </div>
            <div className="right-side__bottom-right__contact contactRow paleRed">
               <h4>LinkedIn</h4>
               <h4>GitHub</h4>
               <h4>Email</h4>
               <h4>Facebook</h4>
            </div>
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