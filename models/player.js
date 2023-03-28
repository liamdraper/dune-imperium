const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    // userName: { type: Schema.Types.ObjectId, ref: 'User'},
    leader: {type: Object},
    color: {type: String},
    victoryPoints: {type: Number},
    spice: {type: Number},
    water: {type: Number},
    solari: {type: Number},
    agent: {type: Number},
    unit: {type: Number},
    persuassion: {type: Number},
    hand: {type: Array},
    deck: {type: Array},
    discardPile: {type: Array}
})

module.exports = mongoose.model('Player', playerSchema);