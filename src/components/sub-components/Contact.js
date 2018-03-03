import React from 'react';
import LoaderDown from '../loaders/LoaderDown';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Contact extends React.Component {
   constructor (props) {
      super(props)
      this.state = {
         firstname: '',
         lastname: '',
         email: '',
         message: '',
         time: new Date()
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   // Logs user input
  handleChange(key) {
    return function (e) {
      const state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this); 
  }
  // Submit Handler
   handleSubmit (event) {
      console.log(this.state)
      event.preventDefault();
   }
   // Load Clock element
   componentDidMount() {
      this.timerID = setInterval(
         () => this.tick(),
         1000
         );
   }

   componentWillUnmount() {
       clearInterval(this.timerID);
   }
   // Animate clock
   tick() {
      this.setState({
      time: new Date()
   });
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
           <div className="content-holder large mobile-content-holder">
              <div className="form-timer">
                 <div className="time">
                    {this.state.time.toLocaleTimeString()}
                 </div>
                 <div className="form-timer__toolate">
                    Contact me before it's too late, by that I mean hire me before someone else does :)
                 </div>
               </div>
              <div className="infocorner content-holder__menu-tag"><h4>Con -tat me</h4></div>
              <form onSubmit= { this.handleSubmit } className="contact-form">
                 <h3>Contact me</h3>
                 <label>
                    <span className="contact-form__label-name">Name:</span>
                    <input type="text" value={ this.state.firstname } onChange={ this.handleChange('firstname') } required />
                 </label>
                    <label>
                    <span className="contact-form__label-name">Last Name:</span>
                    <input type="text" value={ this.state.lastname } onChange={ this.handleChange('lastname') } required />
                 </label>
                 <label>
                   <span className="contact-form__label-name">E-mail:</span>
                    <input type="email" value={ this.state.email } onChange={ this.handleChange('email') } required />
                 </label>
                 <label>
                    <span className="contact-form__label-name">Message:</span>
                    <textarea type="text" value={ this.state.message } onChange={ this.handleChange('message') } required />
                 </label>
                 <input type="submit" value="Submit" />
              </form>
              <LoaderDown />
           </div>
        </CSSTransitionGroup>
      );
   }
}

export default Contact;