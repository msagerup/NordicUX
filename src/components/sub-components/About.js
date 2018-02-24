import React from 'react';

class About extends React.Component {
   

   age() {
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      const myDoB = 1981;
      let myAge = year - myDoB;
      return myAge
   }

   render () {
   return (
      <div className="content-holder large">
         <div className="infocorner content-holder__menu-tag">
            <h4>Abo-ut me</h4>
         </div>
         <div className="about-content">
            <h3>Nice to meet you!</h3><hr/>
            <p><span>Magnus Sagerup</span> is my name, I am {this.age()} years old and  and I am a self tought front-end
            developer. I started learning in November 2016 as I realized that I realy wanted to follow my passion and 
            truly learn how to code.</p>
            <p>During my time learning how to code I have come to realize that alltough learning my yourself is truly a 
            big challange, but it also enables you to keep up with the most up to date technologies. When I frist started I 
            did not know about alot of these, just thinking about how much there was to learn keept me up at night, but well, hell,
            look at me now, this whole page is built with React :)</p>
            <h3>
               What I know
            </h3>
               <hr/>
            <p>I will focus on the MERN stack and continue developing with this stack on future projects.</p>
            <div className="about-content__tech-images">
               <img src="https://hevodata.com/blog/wp-content/uploads/2017/09/mn.png" alt="Node and Mongo DB logo"/>
            </div>
         </div>
      </div>
   )
   }
};

export default About;

