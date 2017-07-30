/**
 * finite-state machine
 */

import {combineReducers, createStore} from 'redux';


/**
 * Create reducer by a spec
 */
const createReducer = function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action = {}) {
        if(handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
};


const actionTypes = {
    LOAD_MEMBERS: 'actions.loadMembers'
};

export const actions = {
    loadMembers: (members) => ({type: actionTypes.LOAD_MEMBERS, payload: {members}})
};

export const reducer = combineReducers({

    members: createReducer([], {
        [actionTypes.LOAD_MEMBERS]: (state, {payload: {members}}) => members
    }),

    publications: createReducer([], {})

});


export const getStore = (initialStates) =>
    createStore(reducer, initialStates);