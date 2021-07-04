import { useReducer } from 'react';

import { ADD_FARMER, ADD_BUYER } from "../actions/userDataCreator";

import { updateObject } from "../../utils/stateUpdater";

const initialState = {
    farmerData: '',
    buyerData: '',
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FARMER:
            updateObject(state, {
                farmerData: action.farmer
            });
            return {
                farmerData: action.farmer
            };
        case ADD_BUYER:
            console.log(action);
            updateObject(state, {
                buyerData: action.buyer
            });
            return {
                buyerData: action.buyer
            };
        default:
            return state;
    }
}

export default () => useReducer(reducer, initialState);