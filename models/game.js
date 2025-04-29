const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  team1Point: { type: Number, required: true },
  team2Point: { type: Number, required: true },
  idTeam1:    { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  idTeam2:    { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  idDay:      { type: mongoose.Schema.Types.ObjectId, ref: 'Day', required: true }
});

module.exports = mongoose.model('Game', gameSchema);
