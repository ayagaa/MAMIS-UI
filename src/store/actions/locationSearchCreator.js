export const LOCATIONS_RECEIVED = 'LOCATIONS_RECEIVED';
export const LOCATION_RESULTS_RECEIVED = 'LOCATION_RESULTS_RECEIVED';
export const LOCATION_DATA_RECEIVED = 'LOCATION_DATA_RECEIVED';
export const GET_ADMINISTRATION_DATA = 'GET_ADMINISTRATION_DATA';
export const RESET_LOCATION = 'RESET_LOCATION';

export function locationsReceived(locations) {
    return {
        type: LOCATIONS_RECEIVED,
        locations
    };
}

export function locationResultsReceived(locationResults) {
    return {
        type: LOCATION_RESULTS_RECEIVED,
        locationResults
    };
}

export function locationDataReceived(locationData) {
    return {
        type: LOCATION_DATA_RECEIVED,
        locationData
    };
}

export function adminsReceived(admins) {
    return {
        type: GET_ADMINISTRATION_DATA,
        admins
    };
}

export function locationsReset() {
    return {
        type: RESET_LOCATION,
        locations: ''
    }
}