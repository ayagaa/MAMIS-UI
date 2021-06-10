import { get } from "../../services/apiService";
import * as locationSearchService from "../../services/locationSearchService";
import {locationsReceived, locationResultsReceived, locationDataReceived,  adminsReceived, locationsReset} from "../actions/locationSearchCreator";

export function getLocations(locationName, admin03, getForecastData, dispatch) {
    return locationSearchService.getLocations((locationName ? locationName: 'Nairobi'), admin01, getForecastData)
    .then(response => {dispatch(locationDataReceived(response))});
}

export function getAdmins(adminId = 0, dispatch) {
    return locationSearchService.getAdmins(adminId)
    .then(response => {dispatch(adminsReceived(response))} );
}