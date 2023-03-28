const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {type: String},
    turn: {type: Number},
    player: {type: Schema.Types.ObjectId, ref: 'Player'}
})

module.exports = mongoose.model('Game', gameSchema);