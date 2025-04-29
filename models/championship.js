const mongoose = require('mongoose');

const championshipSchema = new mongoose.Schema({
  name:         { type: String, required: true },
  startDate:    { type: Date },
  endDate:      { type: Date },
  wonPoint:     { type: Number, default: 3 },
  drawPoint:    { type: Number, default: 1 },
  lostPoint:    { type: Number, default: 0 },
  typeRanking:  { type: String }
});

module.exports = mongoose.model('Championship', championshipSchema);
