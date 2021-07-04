import {get, post} from "./apiService";

const AUTHENTICATE_USER_URL = 'http://localhost:5000/api/users/authenticate';

export function authenticateUser(data){
    return post(AUTHENTICATE_USER_URL, {}, JSON.stringify(data));
}