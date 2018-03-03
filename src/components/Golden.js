import React from 'react';
import ContentLeft from '../components/ContentLeft';
import ContentRight from '../components/ContentRight';
import MainLoader from '../components/loaders/MainLoader';


class Golden extends React.Component {
   render () {
      return (
         <div className="golden full">
            <ContentLeft />     
            <ContentRight />
            <MainLoader />
         </div>
      );
   }
}
   

export default Golden;