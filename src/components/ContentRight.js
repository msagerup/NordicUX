import React from 'react';
import ContentRightTop from '../components/ContentRightTop';
import ContentRightBottom from '../components/ContentRightBottom';

class ContentRight extends React.Component {
   render () {
      return (
         <div className="med right-side">
            <ContentRightTop />
            <ContentRightBottom />
         </div>

      );
   }
}

export default ContentRight;