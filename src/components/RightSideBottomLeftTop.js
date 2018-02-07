import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class RightSideBottomLeftTop extends React.Component {

   
  

    render () {
     
      return (
         <div className="right-side__buttom-left__med-top largeTall">
            <button>Left</button>
            <button>Right</button> 
         </div>
      );
   }
}


export default (RightSideBottomLeftTop);