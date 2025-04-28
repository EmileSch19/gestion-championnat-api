const journeeService = require('../services/journeeService');

// Récupérer toutes les journées
async function getAllJournee(req, res) {
  const journees = await journeeService.getAllJournee();
  res.json(journees);
}

// Récupérer les journées par championnat
async function getJourneeByChampionnat(req, res) {
  const journees = await journeeService.getJourneeByChampionnat(req.params.championnatId);
  res.json(journees);
}

// Récupérer une journée par ID
async function getJourneeById(req, res) {
  const journee = await journeeService.getJourneeById(req.params.id);
  if (!journee) return res.status(404).json({ message: 'Journée non trouvée' });
  res.json(journee);
}

// Créer une journée
async function createJournee(req, res) {
  const journee = await journeeService.createJournee(req.body);
  res.status(201).json(journee);
}

// Mettre à jour une journée
async function updateJournee(req, res) {
  const journee = await journeeService.updateJournee(req.params.id, req.body);
  res.json(journee);
}

// Supprimer une journée
async function deleteJournee(req, res) {
  await journeeService.deleteJournee(req.params.id);
  res.json({ message: 'Journée supprimée' });
}

module.exports = {
  getAllJournee,
  getJourneeByChampionnat,
  getJourneeById,
  createJournee,
  updateJournee,
  deleteJournee
};
