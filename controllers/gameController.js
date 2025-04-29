const Game = require('../models/game');

// Créer un match
exports.createGame = async (req, res) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Récupérer tous les matchs
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find()
      .populate('idTeam1')
      .populate('idTeam2')
      .populate('idDay');
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer un match par ID
exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id)
      .populate('idTeam1')
      .populate('idTeam2')
      .populate('idDay');
    if (!game) return res.status(404).json({ error: 'Match non trouvé' });
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un match
exports.updateGame = async (req, res) => {
  try {
    const updated = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer un match
exports.deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: 'Match supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
