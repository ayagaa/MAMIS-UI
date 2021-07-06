import {post, put} from './apiService';

const ADD_FARMER_URL = 'http://138.68.144.98/api/farmers/register';

const ADD_BUYER_URL = 'http://138.68.144.98/api/buyers/register';

export function addBuyer(data){
    return post(ADD_BUYER_URL, {}, JSON.stringify(data));
}

export function addFarmer(data) {
    return post(ADD_FARMER_URL, {}, JSON.stringify(data));
}