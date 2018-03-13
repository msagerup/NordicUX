import React from 'react';
import { Link }from 'react-router-dom';

class ProjectAPI extends React.Component {
   constructor(props) {
      super(props)
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
      return (
         <div>
            {repos.map(item => (item.name == this.props.gitcall) ? (
                  <ul>
                     <li><a href={item.html_url}>{item.html_url}</a></li>
                     <li>Short description: {item.description}</li>
                     <li>created at: {item.created_at}</li>
                     <li>Pushed at: {item.pushed_at}</li>
                     <li>Updated at: {item.updated_at}</li>
                  </ul>
                  ) : null)}
         
         </div>
      );
   }
}
export default ProjectAPI;