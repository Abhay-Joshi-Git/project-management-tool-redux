import immutable from 'immutable';
import * as mockIssuesAPIs from '../mocks/serverAPIs/issues.js';

const LOAD = 'LOAD';

/*action creators*/
export const loadIssues = (payLoad) => {
    return {
        type: LOAD,
        payLoad: payLoad
    }
}

const initialState = immutable.List([]);

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD:
            return loadData(state, action.payLoad)
        default:
            return state
    }
}

const loadData = (state, payLoad) => {
    const offset = payLoad.offset || 0;
    const qty = payLoad.qty || 25;

    const data = mockIssuesAPIs.loadIssues(offset, qty);

    //ToDo : check for better option
    const immutableData = data.map(item => {return immutable.Map(item)})

    return state.push(...immutableData);
}
