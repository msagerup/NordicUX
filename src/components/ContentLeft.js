import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class ContentLeft extends React.Component {
   createListProjects () {
      return this.props.projects.map((project) => {
         return (
            <li key={project.id}>{project.name} : {project.desc}</li>
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

export default connect(mapStateToProps)(ContentLeft);