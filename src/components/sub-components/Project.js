import React from 'react';
import LoaderDown from '../loaders/LoaderDown';
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
               <div className="infocorner content-holder__menu-tag">
                  <h4>Pro-jec  -ts</h4>
               </div>
               <div className="project-content">
               <LoaderDown />
                  <h3>My Projects</h3><hr />
                  <div className="m-row">
                     <p>These are my projects. You will find a selection of a few
                        that are completed and a few thats is under production</p>
                  </div>
                  <div className="m-row">
                     <div className="project-content__projects-holder">
                        <div className="project-content__project"><img src="https://picsum.photos/358/220/?image1067" alt=""/></div>
                        <div className="project-content__project"><img src="https://picsum.photos/358/220/?image1063" alt="" /></div>
                        <div className="project-content__project"><img src="https://picsum.photos/358/220/?image1059" alt=""/></div>
                        <div className="project-content__project"><img src="https://picsum.photos/358/220/?image1060" alt="" /></div>
                     </div>
                  </div>
               </div>
            </div>

         </CSSTransitionGroup>
      );
   }
}



export default Project;