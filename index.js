import * as Redux from 'redux';
import {reducer as issues} from './modules/issues.js';
import {reducer as sprints} from './modules/sprints.js';

export * as modules from './modules/';

const reducer = Redux.combineReducers({
    issues,
    sprints
});

const store = Redux.createStore(
    reducer
);

export default store;
