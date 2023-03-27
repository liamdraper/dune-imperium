import sendRequest from "./send-request";
const BASE_URL = '/api/players';

export function addPlayer(playerData) {
    return sendRequest(BASE_URL, 'POST', playerData);
} 