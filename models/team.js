const mongoose = require('mongoose');
const championship = require('./championship');

const teamSchema = new mongoose.Schema({
  name:{ 
    type: String,
    required: true 
  },

  creationDate: {
     type: Date 
    },
  stade:        { type: String },
  logo:         { type: String },
  country:      { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true },
  championship: { type: mongoose.Schema.Types.ObjectId, ref: 'Championship', required: true }
});

module.exports = mongoose.model('Team', teamSchema);
