const Journee = require('../models/journee');

// Récupérer toutes les journées
async function getAllJournee() {
  return await Journee.find().populate('championnat');
}

// Récupérer les journées par championnat
async function getJourneeByChampionnat(championnatId) {
  return await Journee.find({ championnat: championnatId }).populate('championnat');
}

// Récupérer une journée par ID
async function getJourneeById(id) {
  return await Journee.findById(id).populate('championnat');
}

// Créer une journée
async function createJournee(data) {
  const journee = new Journee(data);
  return await journee.save();
}

// Mettre à jour une journée
async function updateJournee(id, data) {
  return await Journee.findByIdAndUpdate(id, data, { new: true });
}

// Supprimer une journée
async function deleteJournee(id) {
  return await Journee.findByIdAndDelete(id);
}

module.exports = {
  getAllJournee,
  getJourneeByChampionnat,
  getJourneeById,
  createJournee,
  updateJournee,
  deleteJournee
};
