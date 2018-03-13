import react from 'react';
import ProjectHero from './project-sub-components/ProjectHero';
import ProjectImages from './project-sub-components/ProjectImages';
import ProjectAPI from './project-sub-components/ProjectAPI';

class ProjectTwo extends React.Component {
   render () {
      return (
         <div className="projectContainer">
               <div className="Business website">
                  <div className="row">
                     <h2>Tech:</h2>
                     <ProjectHero projectName="Resturant Website"/>
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
                     <ProjectAPI gitcall="Conference-website"/>
                  </div>
               </div>
         </div>     
      );
   }
}

export default ProjectTwo;