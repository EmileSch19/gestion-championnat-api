const resultatService = require('../services/resultatService');

// Récupérer tous les résultats
async function getAllResultat(req, res) {
  const resultats = await resultatService.getAllResultat();
  res.json(resultats);
}

// Récupérer les résultats d'un championnat
async function getResultatByChampionnat(req, res) {
  const resultats = await resultatService.getResultatByChampionnat(req.params.championnatId);
  res.json(resultats.filter(r => r.journee !== null)); // Filtrer les nulls
}

// Récupérer un résultat par ID
async function getResultatById(req, res) {
  const resultat = await resultatService.getResultatById(req.params.id);
  if (!resultat) return res.status(404).json({ message: 'Résultat non trouvé' });
  res.json(resultat);
}

// Créer un résultat
async function createResultat(req, res) {
  const resultat = await resultatService.createResultat(req.body);
  res.status(201).json(resultat);
}

// Mettre à jour un résultat
async function updateResultat(req, res) {
  const resultat = await resultatService.updateResultat(req.params.id, req.body);
  res.json(resultat);
}

// Supprimer un résultat
async function deleteResultat(req, res) {
  await resultatService.deleteResultat(req.params.id);
  res.json({ message: 'Résultat supprimé' });
}

module.exports = {
  getAllResultat,
  getResultatByChampionnat,
  getResultatById,
  createResultat,
  updateResultat,
  deleteResultat
};
