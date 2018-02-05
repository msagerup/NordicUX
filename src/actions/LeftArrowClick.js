export const leftArrow = (click) => {
   console.log('you clicked on project name', click);
   return {
      type: 'PROJECT_SELECTED',
      payload: click
   }
};