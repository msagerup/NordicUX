import React from 'react';
import { Link } from 'react-router-dom';
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
                  ...<div className="hover"><Link to="/">Home</Link></div>.
                  ... <div className="hover"><Link to="/project/1">01</Link></div>
                  . ... <div className="hover"><Link to="/project/2">02</Link></div>
                  . ... <div className="hover"><Link to="/project/3">03</Link></div>
                  . ... <div className="hover"><Link to="/project/4">04</Link></div>
                  ... <div className="hover"><Link to="/project/5">05</Link></div> . ..
              </Typist>
            </div>
         </div>   
      );
   }
}
   


export default Menu;