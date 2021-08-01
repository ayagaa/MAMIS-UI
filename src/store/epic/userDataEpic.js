import * as userDataService from "../../services/userDataService";

import {farmerAdded, buyerAdded, farmersFetched, userDeleted} from "../actions/userDataCreator";

export function addFarmer(farmerData, dispatch){
    return userDataService.addFarmer(farmerData)
    .then(response => { dispatch(farmerAdded(response))});
}

export function addBuyer(buyerData, dispatch){
    return userDataService.addBuyer(buyerData)
    .then(response => {dispatch(buyerAdded(response))});
}

export function deleteUser(user, dispatch){
    return userDataService.deleteUser(user)
    .then(response => {dispatch(userDeleted(response))})
}

export function fetchFarmers(dispatch){
    return userDataService.getFarmers().then(response => { dispatch(farmersFetched(response)) });
}