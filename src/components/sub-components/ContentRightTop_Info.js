import React from 'react';
import InfoCorner from '../sub-components/ContentRightTop_infoCorner';


const Info = () => (
   
   <div className="infobars">
      <InfoCorner />
      <h3>Meet Nordic UX!</h3>
      <p className="paleGreen">
         We are a Norwegian webdesign company witch goal it is to
         make your company stand out for the crowd in these days
         where it seems most webpages look the same.
      </p>
      <p className="paleGreen">
         We have seen that many webpages look and act exactly alike,
         now who wants that?
      </p>
      <h3 className="h3padded">Partner with us</h3>
      <p className="paleRed">
         By partnering with us we can ensure a <span>Long-Term </span>
         Partnership that will set your company apart from the rest
      </p>
   </div>
   


);

export default Info;