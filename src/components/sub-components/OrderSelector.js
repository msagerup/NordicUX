import React from 'react';

const OrderSelector = (props) => (
  <div className="subSelected">
     <ul>
       {props.items.map(item => (
         <li
            key={item} 
            onClick={() => props.selectItem(item)}
         >
            {item}
         </li>
       ))}
     </ul>
  </div>
);


export default OrderSelector;