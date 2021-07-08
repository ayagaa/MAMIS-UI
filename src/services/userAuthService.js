import {get, post} from "./apiService";

const AUTHENTICATE_USER_URL = 'http://138.68.144.98/api/users/authenticate';

export function authenticateUser(data){
    return post(AUTHENTICATE_USER_URL, {}, JSON.stringify(data));
}