import React from 'react';
import RightSideBottomLeftTop from '../components/RightSideBottomLeftTop';
import RightSideBottomLeftBottom from '../components/RightSideBottomLeftBottom';

class RightSideBottomLeftMedium extends React.Component {
   render () {
      return (
         <div className="right-side__buttom-left__med med">
            <RightSideBottomLeftTop />
            <RightSideBottomLeftBottom />
            
         </div>

      );
   }
}

export default RightSideBottomLeftMedium ;