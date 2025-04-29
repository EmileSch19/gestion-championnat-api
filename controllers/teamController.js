const Team = require('../models/team');

// Créer une équipe
exports.createTeam = async (req, res) => {
  try {
    const newTeam = new Team(req.body);
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Récupérer toutes les équipes
exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('country');
    res.json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer une équipe par ID
exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('country');
    if (!team) return res.status(404).json({ error: 'Équipe non trouvée' });
    res.json(team);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une équipe
exports.updateTeam = async (req, res) => {
  try {
    const updated = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer une équipe
exports.deleteTeam = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: 'Équipe supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
