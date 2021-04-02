// In this file we're going to merz all the "Reducer's" in rootReducer.js
// So we need to import "{ combineReducers }" from "redux" to merz all reducer's in RootRuducers.
import { combineReducers } from 'redux';

// below "Reducer" we need to import in "RootReducer.js", because we need only 'Reducer' in every React-Redux project
// for "store", So we make a "RootReducer" and keep all different reducer's i it.
import CardItems from './Reducer';

// Since, combineReducers() is a highLevel component that contains all parameters.
export default combineReducers({
    // Here, we werite all components that we imported in this file, and try to connect them into one reducers.
    // since, if we have one than one component then we merz them into one by one.
    CardItems
});
