import React from 'react';
import Typist from 'react-typist';

class SubTitle extends React.Component {
   render () {
    const myCur = {
    blink: true,
    show: true,
    element: '.',
    hideWhenDone: true,
    hideWhenDoneDelay: 20000,
    isDone: false,
  }
      return (
         <Typist 
            startDelay = { 1000 }
            avgTypingDelay = { 10 }
            stdTypingDelay = { 80 }
            cursor = { myCur }
            >
               Designing for our pleasure
               <Typist.Backspace count={ 12 } delay = { 2000 } />
               fun
               <Typist.Backspace count={ 7 } delay = { 2000 } />
               to learn
               <Typist.Backspace count={ 8 } delay = { 2000 } />
               to challange ourselves
               <Typist.Backspace count={ 22 } delay = { 2000 } />
               for cReaTiviTy...
               <Typist.Backspace count={ 3 } delay = { 4000 } />
         </Typist>
      );
   }
}

export default SubTitle;