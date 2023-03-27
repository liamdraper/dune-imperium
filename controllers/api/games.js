const Game = require('../../models/game');

module.exports = {
    getAllGames,
    addGame
}

async function getAllGames(req, res) {
    const games = await Game.find({})
    res.json(games);
}

async function addGame(req, res) {
    const game = await Game.create(req.body);
    res.json(game);
}