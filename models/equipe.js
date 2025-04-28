const mongoose = require('mongoose');

const equipeSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  pays: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pays',
    required: true
  },
  championnat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Championnat',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Equipe', equipeSchema);
