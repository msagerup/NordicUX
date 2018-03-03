import React from 'react';

class LoaderDown extends React.Component {
   state = {
      showLoader: true
   }

   // Hides the Loader div after setTimeout so that
   // the div does not block user input.  
   componentDidMount() {
      setTimeout(() => {
         this.setState({
            showLoader: false
         });
      },2000);
   }

   render() {
      return (
         <div>
               {this.state.showLoader ? (
                  <div className="loader">
                     <div className="loader__subOne"></div>
                     <div className="loader__subTwo"></div>
                     <div className="loader__subThree"></div>
                  </div>
               ): null}
         </div>


      )
   }
}


export default LoaderDown;