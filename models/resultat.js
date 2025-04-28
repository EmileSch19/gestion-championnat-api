const mongoose = require('mongoose');

const resultatSchema = new mongoose.Schema({
  journee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Journee',
    required: true
  },
  equipeDomicile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Equipe',
    required: true
  },
  equipeExterieur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Equipe',
    required: true
  },
  scoreDomicile: {
    type: Number,
    required: true
  },
  scoreExterieur: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Resultat', resultatSchema);
