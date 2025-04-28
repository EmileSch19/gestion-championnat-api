const Championnat = require('../models/championnat');

// Récupérer tous les championnats
async function getAllChampionnat() {
  return await Championnat.find().populate('pays');
}

// Récupérer un championnat par ID
async function getChampionnatById(id) {
  return await Championnat.findById(id).populate('pays');
}

// Créer un championnat
async function createChampionnat(data) {
  const championnat = new Championnat(data);
  return await championnat.save();
}

// Mettre à jour un championnat
async function updateChampionnat(id, data) {
  return await Championnat.findByIdAndUpdate(id, data, { new: true });
}

// Supprimer un championnat
async function deleteChampionnat(id) {
  return await Championnat.findByIdAndDelete(id);
}

module.exports = {
  getAllChampionnat,
  getChampionnatById,
  createChampionnat,
  updateChampionnat,
  deleteChampionnat
};
