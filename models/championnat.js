const mongoose = require('mongoose');

const championnatSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    unique: true
  },
  pays: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pays',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Championnat', championnatSchema);
