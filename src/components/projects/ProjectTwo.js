import react from 'react';
import ProjectHero from './project-sub-components/ProjectHero';
import ProjectImages from './project-sub-components/ProjectImages';
import ProjectAPI from './project-sub-components/ProjectAPI';
import ProjectNav from './project-sub-components/ProjectNav';

class ProjectTwo extends React.Component {
   render () {
      return (
         <div className="projectContainer">
               <div className="projectContent-Left">
                  <div className="row">
                     <h2>Tech:</h2>
                     <ProjectHero projectName="Conference Website"/>
                  </div>
                  <div className="row">
                     <ProjectImages url="http://www.sagerup.com/messe" imgUrl="../img/city.jpg"/>
                  </div>
               </div>
               <div className="projectContent-Right">
                  <div className="row">
                     <h2>GitHub Info:</h2>
                  </div>
                  <div className="row">
                     <ProjectAPI gitcall="Conference-website"/>
                  </div>
                  <div className="row">
                     <ProjectNav />
                  </div>
               </div>
         </div>     
      );
   }
}

export default ProjectTwo;