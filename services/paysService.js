const Pays = require('../models/pays');

// Récupérer tous les pays
async function getAllPays() {
  return await Pays.find();
}

// Récupérer un pays par ID
async function getPaysById(id) {
  return await Pays.findById(id);
}

// Créer un pays
async function createPays(data) {
  const pays = new Pays(data);
  return await pays.save();
}

// Mettre à jour un pays
async function updatePays(id, data) {
  return await Pays.findByIdAndUpdate(id, data, { new: true });
}

// Supprimer un pays
async function deletePays(id) {
  return await Pays.findByIdAndDelete(id);
}

module.exports = {
  getAllPays,
  getPaysById,
  createPays,
  updatePays,
  deletePays
};
