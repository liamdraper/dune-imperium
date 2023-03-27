const Player = require('../../models/player');

module.exports = {
    addPlayer
}

async function addPlayer(req, res) {
    const player = await Player.create(req.body);
    res.json(player);
}