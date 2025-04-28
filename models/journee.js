const mongoose = require('mongoose');

const journeeSchema = new mongoose.Schema({
  numero: {
    type: Number,
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

module.exports = mongoose.model('Journee', journeeSchema);
