import {post, put} from './apiService';

const ADD_FARMER_URL = 'http://localhost:5000/api/farmers/register';

const ADD_BUYER_URL = 'http://localhost:5000/api/buyers/register';

export function addBuyer(data){
    return post(ADD_BUYER_URL, {}, JSON.stringify(data));
}

export function addFarmer(data) {
    return post(ADD_FARMER_URL, {}, JSON.stringify(data));
}