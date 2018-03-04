import React from 'react';

class MainLoader extends React.Component {
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
       },3000);
    }

   render() {
      return (
         <div>
               {this.state.showLoader ? (
                  <div className="introLoader">
                     <div className="rev1"></div>
                     <div className="rev2"></div>
                     <div className="rev3"></div>
                     <div className="rev4"></div>
                     <div className="rev5"></div>
                  </div>
               ): null}
         </div>


      )
   }
}


export default MainLoader;