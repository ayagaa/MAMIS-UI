import {post, put, get} from './apiService';

const ADD_FARMER_URL = 'http://138.68.144.98/api/farmers/register';

const GET_FARMERS_URL = 'http://138.68.144.98/api/farmers';

const ADD_BUYER_URL = 'http://138.68.144.98/api/buyers/register';

const DELETE_USER_URL = 'http://138.68.144.98/api/users/delete';

// const ADD_FARMER_URL = 'http://localhost:5000/api/farmers/register';

// const GET_FARMERS_URL = 'http://localhost:5000/api/farmers';

// const ADD_BUYER_URL = 'http://localhost:5000/api/buyers/register';

export function addBuyer(data){
    return post(ADD_BUYER_URL, {}, JSON.stringify(data));
}

export function addFarmer(data) {
    return post(ADD_FARMER_URL, {}, JSON.stringify(data));
}

export function deleteUser(user) {
    return post(DELETE_USER_URL, {}, JSON.stringify(user));
}

export function getFarmers() {
    return get(GET_FARMERS_URL);
}