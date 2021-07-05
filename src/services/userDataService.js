import {post, put} from './apiService';

const ADD_FARMER_URL = 'http://mamis.co.ke/api/farmers/register';

const ADD_BUYER_URL = 'http://mamis.co.ke/api/buyers/register';

export function addBuyer(data){
    return post(ADD_BUYER_URL, {}, JSON.stringify(data));
}

export function addFarmer(data) {
    return post(ADD_FARMER_URL, {}, JSON.stringify(data));
}