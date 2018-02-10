import {combineReducers} from 'redux';
import ProjectReducer from './reducer-projects';
import SelectedProjectReducer from './reducer-activeProject';

const rootReducer = combineReducers({
   projects: ProjectReducer,
   activeproject: SelectedProjectReducer,

});

export default rootReducer;