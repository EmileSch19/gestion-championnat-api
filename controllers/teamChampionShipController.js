const TeamChampionship = require('../models/teamChampionShip');

// Associer une équipe à un championnat
exports.createTeamChampionship = async (req, res) => {
  try {
    const newAssociation = new TeamChampionship(req.body);
    await newAssociation.save();
    res.status(201).json(newAssociation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Récupérer toutes les associations
exports.getAllTeamChampionships = async (req, res) => {
  try {
    const associations = await TeamChampionship.find()
      .populate('idChampionship')
      .populate('idTeam');
    res.json(associations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une association équipe-championnat
exports.deleteTeamChampionship = async (req, res) => {
  try {
    await TeamChampionship.findByIdAndDelete(req.params.id);
    res.json({ message: 'Association supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
