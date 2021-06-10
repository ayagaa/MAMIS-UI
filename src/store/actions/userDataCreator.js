export const ADD_FARMER = 'ADD_FARMER';

export const ADD_BUYER = 'ADD_BUYER';

export const UPDATE_FARMER = 'UPDATE_FARMER';

export const UPDATE_BUYER = 'UPDATE_BUYER';

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