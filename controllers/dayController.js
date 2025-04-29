const Day = require('../models/day');

// Créer une journée
exports.createDay = async (req, res) => {
  try {
    const newDay = new Day(req.body);
    await newDay.save();
    res.status(201).json(newDay);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Récupérer toutes les journées
exports.getAllDays = async (req, res) => {
  try {
    const days = await Day.find().populate('idChampionship');
    res.json(days);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer une journée par ID
exports.getDayById = async (req, res) => {
  try {
    const day = await Day.findById(req.params.id).populate('idChampionship');
    if (!day) return res.status(404).json({ error: 'Journée non trouvée' });
    res.json(day);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une journée
exports.updateDay = async (req, res) => {
  try {
    const updated = await Day.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer une journée
exports.deleteDay = async (req, res) => {
  try {
    await Day.findByIdAndDelete(req.params.id);
    res.json({ message: 'Journée supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
