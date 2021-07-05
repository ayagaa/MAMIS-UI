import {get} from "./apiService";

const GET_VALUE_CHAINS_URL = "http://mamis.co.ke/api/valuechain/types";

export function getValueChains() {
    return get(GET_VALUE_CHAINS_URL);
}