const mongoose = require('mongoose');

const teamChampionshipSchema = new mongoose.Schema({
  idChampionship: { type: mongoose.Schema.Types.ObjectId, ref: 'Championship', required: true },
  idTeam:         { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true }
});

module.exports = mongoose.model('TeamChampionship', teamChampionshipSchema);
