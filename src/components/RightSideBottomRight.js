import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class RightSideBottomRight extends React.Component {
   

   render () {
     
      return (
         <div className="right-side__buttom-right large">
            <p>RIGHT BOTTOM</p>
         </div>

      )
   }
}

function mapStateToProps(state) {
   return {
      project: state.activeProject
   };
}

export default connect(mapStateToProps)(RightSideBottomRight);