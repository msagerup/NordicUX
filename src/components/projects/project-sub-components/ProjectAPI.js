import React from 'react';

class ProjectAPI extends React.Component {
   constructor() {
      super()
      this.state = {
         projects: [],
         repos: []
      };
      this.renderRepo = this.renderRepo.bind(this);
   }

   componentDidMount () {
      fetch('https://api.github.com/users/msagerup/repos')
      .then(results => {
         return results.json();
      }).then(data => {
         let repos = data;
         this.setState({ repos });
      })
   }

   renderRepo(repo) {
      console.log(repo[0])
   }

   render () {
      return (
         <div>
         {this.state.repos.length && this.renderRepo(this.state.repos)}
         </div>
      );
   }
}
export default ProjectAPI;