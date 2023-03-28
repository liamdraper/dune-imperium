const Game = require('../../models/game');

module.exports = {
    getAllGames,
    addGame,
    getGame
}

async function getAllGames(req, res) {
    const games = await Game.find({})
    res.json(games);
}

async function addGame(req, res) {
    console.log(req.body)
    const game = await Game.create(req.body);
    res.json(game);
}

async function getGame(req, res) {
    const id = req.params.id;
    const game = await Game.findById(id);
    res.json(game);
}