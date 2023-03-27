import sendRequest from "./send-request";
const BASE_URL = '/api/games';

export function getAllGames() {
    return sendRequest(BASE_URL);
}

export function addGame(gameData) {
    return sendRequest(BASE_URL, 'POST', gameData);
}

// export function getGame(gameData) {
//     return sendRequest(BASE_URL, 'GET', gameData);
// }