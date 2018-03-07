import React from 'react';
import { Link } from 'react-router-dom';
import LoaderDown from '../loaders/LoaderDown';
import ContentHolderHeader from '../sub-components/ContentHolderHeader';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Project extends React.Component {
   render() {
      return(
         <CSSTransitionGroup
          transitionName = "PageAppear"
          transitionAppear = {true}
          transitionAppearTimeout = {1000}
          transitionEnter = {false}
          transitionLeave = {false}
          >
            <div className="content-holder large">
               <LoaderDown />
               <ContentHolderHeader title="Projects"/>
               <div className="infocorner content-holder__menu-tag">
                  <h4>Pro-jec  -ts</h4>
               </div>
               <div className="project-content content-margin">
               
                  <h3>My Projects</h3><hr />
                  <div className="m-row">
                     <p>These are my projects. You will find a selection of a few
                        that are completed and a few thats is under production</p>
                  </div>
                  <div className="m-row">
                     <div className="project-content__projects-holder">
                        <Link to="/project/1"><div className="project-content__project"><img src="https://picsum.photos/358/220/?image1067" alt=""/></div></Link>
                        <Link to="/project/2"><div className="project-content__project"><img src="https://picsum.photos/358/220/?image1063" alt="" /></div></Link>
                        <Link to="/project/3"><div className="project-content__project"><img src="https://picsum.photos/358/220/?image1059" alt=""/></div></Link>
                        <Link to="/project/4"><div className="project-content__project"><img src="https://picsum.photos/358/220/?image1060" alt="" /></div></Link>
                     </div>
                  </div>
               </div>
            </div>

         </CSSTransitionGroup>
      );
   }
}



export default Project;