import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {leftArrow} from '../actions/LeftArrowClick';

class RightSideBottomLeftTop extends React.Component {
   
   selectProjectUp () {
         return this.props.projects.map((click) => {
            leftArrow(click);
         });
         }
      
         
   render () {
     console.log(this.props.projects[0])
      return (

         <div className="right-side__buttom-left__med-top largeTall">
            <button onClick={() => this.selectProjectUp()}>Left</button>
            <button>Right</button>
            
         </div>

      );
   }
}

function mapStateToProps(state) {
   return {
      projects: state.projects
   };
}

export default connect(mapStateToProps)(RightSideBottomLeftTop);