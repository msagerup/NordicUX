import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Project extends React.Component {
   render() {
      return(

         <div className="content-holder large">
            <div className="infocorner content-holder__menu-tag">
               <h4>Pro-jec  -ts</h4>
            </div>
            <div className="project-content">
               <h3>My Projects</h3><hr />
               <div className="m-row">
                  <p>These are my projects. You will find a selection of a few
                     that are completed and a few thats is under production</p>
               </div>
               <div className="m-row">
                  <div className="project-content__projects-holder">
                     <div className="project-content__project">1</div>
                     <div className="project-content__project">2</div>
                     <div className="project-content__project">3</div>
                     <div className="project-content__project">4</div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      project: state.activeproject
   }
}

export default connect (mapStateToProps)(Project);