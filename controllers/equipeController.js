const equipeService = require('../services/equipeService');

// Récupérer toutes les équipes
async function getAllEquipe(req, res) {
  const equipes = await equipeService.getAllEquipe();
  res.json(equipes);
}

// Récupérer les équipes par ID de pays
async function getEquipeByPays(req, res) {
  const equipes = await equipeService.getEquipeByPays(req.params.paysId);
  res.json(equipes);
}

// Récupérer les équipes par ID de championnat
async function getEquipeByChampionnat(req, res) {
  const equipes = await equipeService.getEquipeByChampionnat(req.params.championnatId);
  res.json(equipes);
}

// Récupérer une équipe par ID
async function getEquipeById(req, res) {
  const equipe = await equipeService.getEquipeById(req.params.id);
  if (!equipe) return res.status(404).json({ message: 'Equipe non trouvée' });
  res.json(equipe);
}

// Créer une équipe
async function createEquipe(req, res) {
  const equipe = await equipeService.createEquipe(req.body);
  res.status(201).json(equipe);
}

// Mettre à jour une équipe
async function updateEquipe(req, res) {
  const equipe = await equipeService.updateEquipe(req.params.id, req.body);
  res.json(equipe);
}

// Supprimer une équipe
async function deleteEquipe(req, res) {
  await equipeService.deleteEquipe(req.params.id);
  res.json({ message: 'Equipe supprimée' });
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
