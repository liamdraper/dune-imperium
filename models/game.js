const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {type: String},
    turn: {type: String},
    player: {type: Schema.Types.ObjectId, ref: 'Player'},
    conflictDeck: {type: Array}
})

module.exports = mongoose.model('Game', gameSchema);