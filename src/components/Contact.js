import React from 'react';

class Contact extends React.Component {
   render () {
      return (
         <section className="contact">
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
      );
   }
}
export default Contact;
