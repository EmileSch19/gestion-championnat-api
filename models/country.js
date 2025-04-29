const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name:  { type: String, required: true },
  logo:  { type: String } // URL vers une image
});

module.exports = mongoose.model('Country', countrySchema);
