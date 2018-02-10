export const selectProject = (project) => {
   console.log(`you clicked on ${project.name}`);
   return {
      type: 'PROJECT_SELECTED',
      payload: project
   }
};