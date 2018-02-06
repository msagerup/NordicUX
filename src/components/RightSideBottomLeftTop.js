import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {leftArrowClick} from '../actions/left-arrow-click';


class RightSideBottomLeftTop extends React.Component {

   selectProject () {
      this.props.projects.map((project, index) => {
         return leftArrowClick(project, index)
      });
   }
   
  

    render () {
     // console.log('this is from the reducer: ', this.props.arrowClick)
     // console.log('this is from the list of objects:   ', this.props.projects)
     // THIS IS NOT WOKING? Nothing returned.
     console.log('this is the new prop from the action:  ', this.props.leftArrowClick)

      return (

         <div className="right-side__buttom-left__med-top largeTall">
            <button onClick ={ () => this.selectProject()}>Left</button>
            <button>Right</button> 
         </div>

      );
   }
}

function mapStateToProps(state) {
   return {
      projects: state.projects,
      activePro: state.activeProject
   };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators ({leftArrowClick: leftArrowClick}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(RightSideBottomLeftTop);