import authReducer from './authReducer'
import projectRedcer from './projectReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth : authReducer,
    project : projectRedcer
});

export default rootReducer;