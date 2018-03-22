import React from 'react';

const ProjectImages = (props)=> (
  <div className="project-images">
      <div className="proj-image"><a target="_blank" href={props.url}><img src={props.imgUrl} alt={props.imgUrl}/></a></div>
  </div>
);

export default ProjectImages;