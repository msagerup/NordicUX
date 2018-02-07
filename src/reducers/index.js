import {combineReducers} from 'redux';
import ProjectReducer from './reducer-projects';

const rootReducer = combineReducers({
   projects: ProjectReducer
});

export default rootReducer;