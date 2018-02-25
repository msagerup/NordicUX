import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Info from './sub-components/ContentRightTop_Info';
import InfoWork from './sub-components/ContentRightTop_Info-work';


 class ContentRightTop extends React.Component {
  
   render () {
      return (
         <div className="upper xlLargeTall">
            <Info />
            <InfoWork /> 
         </div>

      );
   }
}



export default ContentRightTop;