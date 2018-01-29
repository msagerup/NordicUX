import React from 'react';
import RightSideBottomLeft from '../components/RightSideBottomLeft';
import RightSideBottomRight from '../components/RightSideBottomRight';

export default class ContentRightBottom extends React.Component {
   
   trykk = () => {
      console.log('trykk')
   }

   render () {
      return (

         <div className="right-side__buttom">
           <button onClick={this.trykk}>Click</button>
           <RightSideBottomLeft />
           <RightSideBottomRight title="Test Value" />
            
         </div>

      );  
   }
}