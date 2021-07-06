import { get, post } from "./apiService";


const SEARCH_URL = 'http://mamis.co.ke/api/search';

const MAP_03_URL = 'http://mamis.co.ke/api/maps/admin03';

const WEATHER_DATA_URL = "http://mamis.co.ke/api/maps/weatherdata"

//const MAP_URL = 'http://localhost:5000/api/maps/admin03?admin01id=34&admin02id=185&admin03name=oloosirkon/sholinke'

export function getLocations(query, admin01 = '', getForecastData = false) {
    return get(SEARCH_URL, { query, admin01, getForecastData });
}

export function get03Map(admin01id, admin02id, admin03name) {
    return get(MAP_03_URL, { admin01id, admin02id, admin03name });
}

export function getWeatherData(latitude, longitude) {
    return get(WEATHER_DATA_URL, { latitude, longitude });
}

