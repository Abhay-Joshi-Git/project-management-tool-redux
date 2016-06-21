import immutable from 'immutable';
import mockAPIs from '../mocks/serverAPIs/issues.js';

const LOAD = 'LOAD';

/*action creators*/
export const loadIssues = (payLoad) => {
    return {
        type: LOAD,
        payLoad: payLoad
    }
}

const initialState = immutable.List([]);

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return loadData(state, action)
        default:
            return state
    }
}

const loadData = (state, action) => {
    const offset = action.offset || 0;
    const qty = action.qty || 25;

    const data = mockAPIs.loadIssues(offset, qty);

    return state.push(immutable.List(data));
}
