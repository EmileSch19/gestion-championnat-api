const championnatService = require('../services/championnatService');

// Récupérer tous les championnats
async function getAllChampionnat(req, res) {
  const championnats = await championnatService.getAllChampionnat();
  res.json(championnats);
}

// Récupérer un championnat par ID
async function getChampionnatById(req, res) {
  const championnat = await championnatService.getChampionnatById(req.params.id);
  if (!championnat) return res.status(404).json({ message: 'Championnat non trouvé' });
  res.json(championnat);
}

// Créer un championnat
async function createChampionnat(req, res) {
  const championnat = await championnatService.createChampionnat(req.body);
  res.status(201).json(championnat);
}

// Mettre à jour un championnat
async function updateChampionnat(req, res) {
  const championnat = await championnatService.updateChampionnat(req.params.id, req.body);
  res.json(championnat);
}

// Supprimer un championnat
async function deleteChampionnat(req, res) {
  await championnatService.deleteChampionnat(req.params.id);
  res.json({ message: 'Championnat supprimé' });
}

module.exports = {
  getAllChampionnat,
  getChampionnatById,
  createChampionnat,
  updateChampionnat,
  deleteChampionnat
};
