const Game = require('../../models/game');

module.exports = {
    addGame
}

async function addGame(req, res) {
    const game = await Game.create(req.body);
    res.json(game);
}