import React from 'react';

const ContentHolderHeader = (props) => (
   
   <div className="content-holder__header">
      <div className="content-holder__header__square">
         <div className="content-holder__header__title">
            <h2><span className="content-holder__header__title__fistletters">{props.title}</span></h2>
         </div>
      </div>  
   </div>
   


);

export default ContentHolderHeader;