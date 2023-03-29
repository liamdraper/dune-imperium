import sendRequest from "./send-request";
const BASE_URL = '/api/games';

export function getAllGames() {
    return sendRequest(BASE_URL);
}

export function addGame(gameData) {
    return sendRequest(BASE_URL, 'POST', gameData);
}

export function getGame(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function saveGame(savedGame) {
    return sendRequest(`${BASE_URL}/${savedGame._id}`, 'PUT', { savedGame });
}