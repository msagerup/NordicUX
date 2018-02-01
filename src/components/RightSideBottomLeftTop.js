import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class RightSideBottomLeftTop extends React.Component {
   
   render () {
     
      return (

         <div className="right-side__buttom-left__med-top largeTall">
            <button>Left</button>
            <button>Right</button>
            <p>{this.props.projects[0].id}</p>
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