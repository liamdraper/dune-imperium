const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    // userName: { type: Schema.Types.ObjectId, ref: 'User'},
    leader: {type: Object},
    color: {type: String},
    victoryPoints: {type: Number, default: 0},
    spice: {type: Number, default: 0},
    water: {type: Number, default: 1},
    solari: {type: Number, default: 0},
    agent: {type: Number, default: 2},
    unit: {type: Number, default: 2},
    persuassion: {type: Number, default: 0},
    hand: {type: Array},
    deck: {type: Array}
})

module.exports = mongoose.model('Player', playerSchema);