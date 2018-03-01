import React from 'react';
import ProjectHero from './project-sub-components/ProjectHero';
import ProjectImages from './project-sub-components/ProjectImages';
import ProjectAPI from './project-sub-components/ProjectAPI';


class ProjectFour extends React.Component {
   render () {
      return (
         <div className="projectContainer">
               <div className="projectContent-Left">
                  <div className="row">
                     <h2>Tech:</h2>
                     <ProjectHero projectName="Travel Website"/>
                  </div>
                  <div className="row">
                     <ProjectImages />
                  </div>
               </div>
               <div className="projectContent-Right">
                  <div className="row">
                     <h2>GitHub Info:</h2>
                  </div>
               </div>
         </div>     
      );
   }
}
export default ProjectFour;