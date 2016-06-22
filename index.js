import * as Redux from 'redux';
import * as modules from './modules';
import Immutable from 'immutable';
import { combineReducers } from 'redux-immutablejs';

export { modules }

const reducer = combineReducers({
    issues: modules.issues.reducer,
    sprints: modules.sprints.reducer
});

const state = Immutable.fromJS({});
const initialState = reducer(state);

export default Redux.createStore(
    reducer,
    initialState
);
