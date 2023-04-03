const Game = require('../../models/game');

module.exports = {
    getAllGames,
    addGame,
    getGame,
    saveGame,
    deleteGame
}

async function getAllGames(req, res) {
    const games = await Game.find({})
    res.json(games);
}

async function addGame(req, res) {
    const game = await Game.create(req.body);
    res.json(game);
}

async function getGame(req, res) {
    const id = req.params.id;
    const game = await Game.findById(id);
    res.json(game);
}

async function saveGame(req, res) {
    const id = req.params.id;
    const newData = req.body.savedGame;
    const game = await Game.findOneAndUpdate({ _id: id}, {turn: newData.turn, boardLocations: newData.boardLocations}, { new: true });
    res.json(game);
}

async function deleteGame(req, res) {
    const id = req.params.id;
    const game = await Game.findByIdAndRemove(id);
}