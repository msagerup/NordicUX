import react from 'react';
import ProjectHero from './project-sub-components/ProjectHero';
import ProjectImages from './project-sub-components/ProjectImages';

class ProjectOne extends React.Component {
   render () {
      return (
         <div className="projectContainer">
               <div className="projectContent-Left">
                  <div className="row">
                     <h2>Tech:</h2>
                     <ProjectHero projectName="React App"/>
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

export default ProjectOne;