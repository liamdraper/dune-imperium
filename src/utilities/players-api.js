import sendRequest from "./send-request";
const BASE_URL = '/api/players';

export function getAllPlayers() {
    return sendRequest(BASE_URL);
}

export function addPlayer(playerData) {
    return sendRequest(BASE_URL, 'POST', playerData);
} 

export function getPlayer(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function savePlayer(savedPlayer) {
    return sendRequest(`${BASE_URL}/${savedPlayer._id}`, 'PUT', { savedPlayer });
}