const Championship = require('../models/championship');

// Créer un championnat
exports.createChampionship = async (req, res) => {
  try {
    const newChampionship = new Championship(req.body);
    await newChampionship.save();
    res.status(201).json(newChampionship);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Récupérer tous les championnats
exports.getAllChampionships = async (req, res) => {
  try {
    const championships = await Championship.find();
    res.json(championships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer un championnat par ID
exports.getChampionshipById = async (req, res) => {
  try {
    const championship = await Championship.findById(req.params.id);
    if (!championship) return res.status(404).json({ error: 'Championnat non trouvé' });
    res.json(championship);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un championnat
exports.updateChampionship = async (req, res) => {
  try {
    const updated = await Championship.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer un championnat
exports.deleteChampionship = async (req, res) => {
  try {
    await Championship.findByIdAndDelete(req.params.id);
    res.json({ message: 'Championnat supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
