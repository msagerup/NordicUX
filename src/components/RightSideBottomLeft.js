import React from 'react';
import RightSideBottomLeftBig from '../components/RightSideBottomLeftBig';
import RightSideBottomLeftMedium from '../components/RightSideBottomLeftMedium';

export default class RightSideBottomLeft extends React.Component {
   render () {
      return (
         <div className="right-side__bottom-left med">
               <RightSideBottomLeftBig />
               <RightSideBottomLeftMedium />
            </div>

      )
   }
}
