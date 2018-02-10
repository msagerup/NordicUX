import React from 'react';
import Typist from 'react-typist';

class Menu extends React.Component {
   render () {
    const myCur = {
    blink: true,
    show: true,
    element: '',
    hideWhenDone: true,
    hideWhenDoneDelay: 20000,
    isDone: false,
   }
      return (

         <div id="home-left-side">
            <div className="home-left-side__text">
            <Typist 
            startDelay = { 1000 }
            avgTypingDelay = { 50 }
            stdTypingDelay = { 25 }
            cursor = { myCur }
            >
              ...<div className="hover">Home</div>. ... <div className="hover">01</div> . ... <div className="hover">02</div> . ... <div className="hover">03</div> . ... <div className="hover">04</div> ... <div className="hover">05</div> . ..
            </Typist>
            </div>
         </div>   
      );
   }
}
   


export default Menu;