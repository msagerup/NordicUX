import React from 'react';

const Golden = () => (
   <div className="golden full">
      <div className="large left">
         LEFT
      </div>     
      <div className="med right-side">
         <div className="upper xlLargeTall">
            TOP
         </div>
         <div className="right-side__buttom">
            <div className="right-side__buttom-left med">
               <div className="right-side__buttom-left__large large">Hello</div>
               <div className="right-side__buttom-left__med med">
                  <div className="right-side__buttom-left__med-top largeTall">
                     Top small
                  </div>
                  <div className="right-side__buttom-left__med-bottom">
                     right bottom
                  </div>
               </div>
            </div>
            <div className="right-side__buttom-right large">hello right</div>
         </div>
      </div>

   </div>
)

export default Golden;