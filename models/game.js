const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {type: String},
    turn: {type: Number},
    player: {type: Schema.Types.ObjectId, ref: 'Player'},
    rivals: {type: Array},
    conflictDeck: {type: Array},
    // Board Locations: set true or false
    boardLocations: {type: Array}
})

module.exports = mongoose.model('Game', gameSchema);