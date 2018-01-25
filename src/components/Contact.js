import React from 'react';
import LoaderDown from './loaders/LoaderDown';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Contact extends React.Component {
   render () {

    //This find what page is loaded
    let page = this.props.location.pathname.substr(1);
    console.log(page)

      return (
        <CSSTransitionGroup
          transitionName = "PageAppear"
          transitionAppear = {true}
          transitionAppearTimeout = {4000}
          transitionEnter = {false}
          transitionLeave = {false}
          >
            
            <section className="contact">
              <LoaderDown />
              <div className="contact__header">
                <h2 className="contact__header-font">Who We Are</h2>
                <hr />
              </div>
                 <div className="contact__body">
                 <h3 className="contact__body-font">Meet <span className="contact__body-font__bold">Nordic UX</span>! Making your website and business stand out from the croud is our goal.
                 Nordic design has been on the forefront for many years. By partnering with us we can ensure
                 a <span className="contact__body-font__bold">Long-Term partnership</span> that will set your company apart from the rest.
                 </h3>
              </div>
            </section>
            
         </CSSTransitionGroup>
      );
   }
}
export default Contact;
