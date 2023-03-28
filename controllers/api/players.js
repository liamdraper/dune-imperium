const Player = require('../../models/player');
const Game = require('../../models/game');

module.exports = {
    getAllPlayers,
    addPlayer,
    getPlayer
}

async function getAllPlayers(req, res) {
    const players = await Player.find({});
    res.json(players);
}

async function addPlayer(req, res) {
    const player = await Player.create(req.body);
    res.json(player);
}

async function getPlayer(req, res) {
    const id = req.params.id;
    const game = await Game.findById(id);
    const playerId = game.player.valueOf();
    const player = await Player.findById(playerId);
    res.json(player);
}