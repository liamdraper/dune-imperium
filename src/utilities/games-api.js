import sendRequest from "./send-request";
const BASE_URL = '/api/games';

export function addGame(gameData) {
    return sendRequest(BASE_URL, 'POST', gameData);
}