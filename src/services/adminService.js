import {get} from "./apiService";

const GET_ADMINS_URL = 'http://mamis.co.ke/api/admins/counties';

export function getAdmins() {
    return get(GET_ADMINS_URL);
}