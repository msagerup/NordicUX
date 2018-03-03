import React from 'react';
import { Link }from 'react-router-dom';

class ProjectAPI extends React.Component {
   constructor() {
      super()
      this.state = {
         projects: [],
         repos: []
      };
   }
   // Fetches the GitHub API
   componentDidMount () {
      fetch('https://api.github.com/users/msagerup/repos')
      .then(results => {
         return results.json();
      }).then(data => {
         let repos = data;
         this.setState({ repos });
      })
   }


   render () {
      let repos = this.state.repos;
      let selected = "Expense-App"
      return (
         <div>
            {repos.map(item => (item.name == selected) ? (
                  <div>
                  {item.name}
                     <a href="www.vg.no">{item.html_url}</a>
                     
                     
                  </div>
                  ) : null)}
         
         </div>
      );
   }
}
export default ProjectAPI;