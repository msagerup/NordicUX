import React from 'react';

class LogoText extends React.Component { 
   render () {
      const letters = ['N','O','R','D','-','I','C','  ', 'U','X'];
      
      return (
         <div className="logo-text">
            {letters.map(letter => {
               return <span>{letter}</span>
            })}
         </div>


      );
   }
}

export default LogoText;