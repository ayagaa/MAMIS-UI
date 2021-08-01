export const ADD_FARMER = 'ADD_FARMER';

export const ADD_BUYER = 'ADD_BUYER';

export const UPDATE_FARMER = 'UPDATE_FARMER';

export const UPDATE_BUYER = 'UPDATE_BUYER';

export const FARMERS_FETCHED = 'FARMERS_FETCHED';

export const USER_DELETED = 'USER_DELETED';

export function farmersFetched(farmers){
    return {
        type: FARMERS_FETCHED,
        farmers
    };
}

export function farmerAdded(farmer) {
    return {
        type: ADD_FARMER,
        farmer
    };
}

export function buyerAdded(buyer) {
    return {
        type: ADD_BUYER,
        buyer
    };
}

export function userDeleted(user) {
    return {
        type: USER_DELETED,
        user
    };
}

export function farmerUpdated(farmer) {
    return {
        type: UPDATE_FARMER,    
        farmer
    };
}

export function buyerUpdated(buyer) {
    return {
        type: UPDATE_BUYER,
        buyer
    };
}