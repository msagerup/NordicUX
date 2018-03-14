import react from 'react';
import ProjectHero from './project-sub-components/ProjectHero';
import ProjectImages from './project-sub-components/ProjectImages';
import ProjectNav from './project-sub-components/ProjectNav';


class ProjectThree extends React.Component {
   render () {
      return (
         <div className="projectContainer">
               <div className="projectContent-Left">
                  <div className="row">
                     <h2>Tech:</h2>
                     <ProjectHero projectName="Hotell Website"/>
                  </div>
                  <div className="row">
                     <ProjectImages />
                  </div>
               </div>
               <div className="projectContent-Right">
                  <div className="row">
                     <h2>GitHub Info:</h2>
                  </div>
                  <div className="row">
                     <ProjectNav />
                  </div>
               </div>
         </div>     
      );
   }
}

export default ProjectThree;