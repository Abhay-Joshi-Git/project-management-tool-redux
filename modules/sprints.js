import immutable from 'immutable';


const LOAD = 'LOAD';


const initialState = immutable.List([]);

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD:
            return state;
        default:
            return state;
    }
}
