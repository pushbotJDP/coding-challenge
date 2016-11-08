import { combineReducers } from 'redux';

// Reducers
import processReducer from './processReducer';
import stepsReducer from './stepsReducer';
import usersReducer from './usersReducer';

// Combine Reducers
var reducers = combineReducers({
    processState: processReducer,
    stepsState: stepsReducer,
    usersState: usersReducer
});

export default reducers;
