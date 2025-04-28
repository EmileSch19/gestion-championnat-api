const Equipe = require('../models/equipe');

// Récupérer toutes les équipes
async function getAllEquipe() {
  return await Equipe.find().populate('pays championnat');
}

// Récupérer les équipes par ID de pays
async function getEquipeByPays(paysId) {
  return await Equipe.find({ pays: paysId }).populate('pays championnat');
}

// Récupérer les équipes par ID de championnat
async function getEquipeByChampionnat(championnatId) {
  return await Equipe.find({ championnat: championnatId }).populate('pays championnat');
}

// Récupérer une équipe par ID
async function getEquipeById(id) {
  return await Equipe.findById(id).populate('pays championnat');
}

// Créer une équipe
async function createEquipe(data) {
  const equipe = new Equipe(data);
  return await equipe.save();
}

// Mettre à jour une équipe
async function updateEquipe(id, data) {
  return await Equipe.findByIdAndUpdate(id, data, { new: true });
}

// Supprimer une équipe
async function deleteEquipe(id) {
  return await Equipe.findByIdAndDelete(id);
}

module.exports = {
  getAllEquipe,
  getEquipeByPays,
  getEquipeByChampionnat,
  getEquipeById,
  createEquipe,
  updateEquipe,
  deleteEquipe
};
