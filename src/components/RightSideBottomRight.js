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
               <h4><a href="https://es.linkedin.com/in/sagerup">LinkedIn</a></h4>
               <h4><a href="http://www.github.com/msagerup">GitHub</a></h4>
               <h4><a href="http://www.facebook.com/sagerup">Facebook</a></h4>
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