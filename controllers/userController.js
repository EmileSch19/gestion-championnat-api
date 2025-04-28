const userService = require('../services/userService');

// Récupérer tous les utilisateurs
async function getAllUsers(req, res) {
  const users = await userService.getAllUsers();
  res.json(users);
}

// Récupérer un utilisateur par ID
async function getUserById(req, res) {
  const user = await userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
  res.json(user);
}

// Récupérer un utilisateur par email
async function getUserByEmail(req, res) {
  const user = await userService.getUserByEmail(req.params.email);
  if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
  res.json(user);
}

// Créer un utilisateur
async function createUser(req, res) {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
}

// Mettre à jour un utilisateur
async function updateUser(req, res) {
  const user = await userService.updateUser(req.params.id, req.body);
  res.json(user);
}

// Supprimer un utilisateur
async function deleteUser(req, res) {
  await userService.deleteUser(req.params.id);
  res.json({ message: 'Utilisateur supprimé' });
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};
