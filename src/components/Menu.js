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
                  ...<Link to="/"><div className="hover">Home</div></Link>.
                  ... <Link to="/project/1"><div className="hover">01</div></Link>
                  . ... <Link to="/project/2"><div className="hover">02</div></Link>
                  . ... <Link to="/project/3"><div className="hover">03</div></Link>
                  . ... <Link to="/project/4"><div className="hover">04</div></Link>
                  ... <Link to="/contact"><div className="hover">05</div></Link> . ..
              </Typist>
            </div>
         </div>   
      );
   }
}
   


export default Menu;