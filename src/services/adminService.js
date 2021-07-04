import {get} from "./apiService";

const GET_ADMINS_URL = 'http://localhost:5000/api/admins/counties';

export function getAdmins() {
    return get(GET_ADMINS_URL);
}