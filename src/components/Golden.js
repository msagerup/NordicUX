import React from 'react';
import ContentLeft from '../components/ContentLeft';
import ContentRight from '../components/ContentRight';


class Golden extends React.Component {

     state = {
      projects: [
         { name: 'SeaFood Resturant', tech: 'React, Webpack' },
         { name: 'Clothes Store', tech: 'React, Webpack, Node, SQL'},
         { name: 'StoreFront', tech: 'CSS Grid'}
      ]
   }
   
   render () {
      return (

         <div className="golden full">
            <ContentLeft />     
            <ContentRight />
         </div>

      );
   }
}
   

export default Golden;