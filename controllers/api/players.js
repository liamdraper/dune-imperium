const Player = require('../../models/player');
const Game = require('../../models/game');

module.exports = {
    getAllPlayers,
    addPlayer,
    getPlayer,
    savePlayer
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

async function savePlayer(req, res) {
    const id = req.params.id;
    const newData = req.body.savedPlayer;
    const player = await Player.findOneAndUpdate({ _id: id}, {spice: newData.spice, solari: newData.solari, water: newData.water}, { new: true });
    res.json(player);
}