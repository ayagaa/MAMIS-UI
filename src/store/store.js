import search from "../store/reducers/locationSearchReducer";
import admins from "../store/reducers/adminsReducer";
import valueChains from "../store/reducers/valueChainsReducer";
import userData from "../store/reducers/userDataReducer";
import authUser from "../store/reducers/userAuthReducer";

export default function createStore() {
    return {
        search: search(),
        admins: admins(),
        valueChains: valueChains(),
        userData: userData(),
        authUser: authUser()
    };
}