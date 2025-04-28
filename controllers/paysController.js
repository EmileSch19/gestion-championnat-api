const paysService = require('../services/paysService');

// Récupérer tous les pays
async function getAllPays(req, res) {
  const pays = await paysService.getAllPays();
  res.json(pays);
}

// Récupérer un pays par ID
async function getPaysById(req, res) {
  const pays = await paysService.getPaysById(req.params.id);
  if (!pays) return res.status(404).json({ message: 'Pays non trouvé' });
  res.json(pays);
}

// Créer un pays
async function createPays(req, res) {
  const pays = await paysService.createPays(req.body);
  res.status(201).json(pays);
}

// Mettre à jour un pays
async function updatePays(req, res) {
  const pays = await paysService.updatePays(req.params.id, req.body);
  res.json(pays);
}

// Supprimer un pays
async function deletePays(req, res) {
  await paysService.deletePays(req.params.id);
  res.json({ message: 'Pays supprimé' });
}

module.exports = {
  getAllPays,
  getPaysById,
  createPays,
  updatePays,
  deletePays
};
