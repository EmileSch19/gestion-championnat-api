const Resultat = require('../models/resultat');

// Récupérer tous les résultats
async function getAllResultat() {
  return await Resultat.find().populate('journee equipeDomicile equipeExterieur');
}

// Récupérer les résultats d'un championnat (en passant par la journée)
async function getResultatByChampionnat(championnatId) {
  return await Resultat.find()
    .populate({
      path: 'journee',
      match: { championnat: championnatId }
    })
    .populate('equipeDomicile equipeExterieur');
}

// Récupérer un résultat par ID
async function getResultatById(id) {
  return await Resultat.findById(id).populate('journee equipeDomicile equipeExterieur');
}

// Créer un résultat
async function createResultat(data) {
  const resultat = new Resultat(data);
  return await resultat.save();
}

// Mettre à jour un résultat
async function updateResultat(id, data) {
  return await Resultat.findByIdAndUpdate(id, data, { new: true });
}

// Supprimer un résultat
async function deleteResultat(id) {
  return await Resultat.findByIdAndDelete(id);
}

module.exports = {
  getAllResultat,
  getResultatByChampionnat,
  getResultatById,
  createResultat,
  updateResultat,
  deleteResultat
};
