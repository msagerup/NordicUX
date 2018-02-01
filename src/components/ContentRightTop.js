import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

 class ContentRightTop extends React.Component {
   createListImages () {
      return this.props.projects.map((tech) => {
         return (
            <li key={tech.id}>{tech.tech}</li>
            );
      });
   }
   render () {
      return (
      
         <div className="upper xlLargeTall">
           <ul>
              {this.createListImages()}
           </ul>
         </div>

      );
   }
}

function mapStateToProps(state) {
   return {
      projects: state.projects
   };
}

export default connect(mapStateToProps)(ContentRightTop);