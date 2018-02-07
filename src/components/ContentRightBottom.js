import React from 'react';
import RightSideBottomLeft from '../components/RightSideBottomLeft';
import RightSideBottomRight from '../components/RightSideBottomRight';

export default class ContentRightBottom extends React.Component {
   


   render () {
      return (

         <div className="right-side__buttom">
           <RightSideBottomLeft />
           <RightSideBottomRight />
            
         </div>

      );  
   }
}