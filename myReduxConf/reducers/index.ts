import { combineReducers } from 'redux';

// Reducers
import globalReducer from './globalReducer';
import projectsReducer from './projectsReducer';

export default combineReducers({
	globalReducer,
	projectsReducer,
});
