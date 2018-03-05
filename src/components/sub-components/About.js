import React from 'react';
import LoaderDown from '../loaders/LoaderDown';
import ContentHolderHeader from '../sub-components/ContentHolderHeader';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class About extends React.Component {
   

   age() {
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      const myDoB = 1980;
      let myAge = year - myDoB;
      return myAge
   }

   render () {
   return (
      <CSSTransitionGroup
          transitionName = "PageAppear"
          transitionAppear = {true}
          transitionAppearTimeout = {500}
          transitionEnter = {false}
          transitionLeave = {false}
          >
         <div className="content-holder large">
            <LoaderDown />
            <ContentHolderHeader title="About" />
            
            <div className="infocorner content-holder__menu-tag">
               <h4>Abo-ut me</h4>
            </div>
            <div className="about-content content-margin">
            <div className="about-content__sectionOne aboutSection">
               <h3>Nice to meet you!</h3><hr/>
               <p><span>Magnus Sagerup</span> is my name, I am {this.age()} years old and  and I am a self tought front-end
               developer. I started learning in November 2016 as I realized that I realy wanted to follow my passion and 
               truly learn how to code.</p>
               <p>During my time learning how to code I have come to realize that alltough learning my yourself is truly a 
               big challange, but it also enables you to keep up with the most up to date technologies. When I frist started I 
               did not know about alot of these, just thinking about how much there was to learn keept me up at night, but well, hell,
               look at me now, this whole page is built with React :)</p>
            </div>
            <div className="about-content__sectionOne aboutSection">
               <h3>
                  What I work with
               </h3>
                  <hr/>
               <p>I take pride to work with many technologies and my favorite one at the moment would
                  have to be React and React Native. I also work on the <span>back-end</span> with Node, 
                  <span> Express</span> and <span>MySQL</span></p>
                  <p>I take pride in that I have come so far in a short amount of time and that I will continue
                     to evovle as a developer as time goes on, going forward I will focus on full stack development,
                     mobile applications and further down the line I find A.I (Artificial Intelligence) extremely 
                     facinating and I will follow that path.</p>
                     <p>I have come to realize that beeing a developer, learning never ends. And I love it.</p>
            </div>
            </div>
         </div>

      </CSSTransitionGroup>
   )
   }
};

export default About;

