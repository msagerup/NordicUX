export default function (state={}, action) {
   switch (action.type) {
      case 'PROJECT_SELECTED':
         return action.payload
   }
   return state;
}