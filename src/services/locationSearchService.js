import {get, post} from "./apiService";


const SEARCH_URL = 'http://localhost:5021/api/search';
// const SEARCH_URL = '';

const ADMINS_URL = '';

export function getLocations(query, admin01 = '', getForecastData = false) {
    return get(SEARCH_URL, {query, admin01, getForecastData});
}

export function getAdmins(query) {
    return get(ADMINS_URL);
}