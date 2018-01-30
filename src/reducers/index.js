import {combineReducers} from 'redux';
import ProjectReducer from './reducer-projects';

const allReducers = combineReducers ({
   projects: ProjectReducer
});

export default allReducers;