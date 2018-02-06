export default function (state = {}, action) {
   switch (action.type) {
      case 'LEFT_CLICK':
         return action.payload;
         break;
      case 'RIGTH_CLICK':
         return action.payload;   
   }
   return state;
}