const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Récupérer tous les utilisateurs
async function getAllUsers() {
  return await User.find();
}

// Récupérer un utilisateur par ID
async function getUserById(id) {
  return await User.findById(id);
}

// Récupérer un utilisateur par email
async function getUserByEmail(email) {
  return await User.findOne({ email });
}

// Créer un nouvel utilisateur
async function createUser(data) {
  const hashedPassword = await bcrypt.hash(data.motDePasse, 10);
  const user = new User({
    ...data,
    motDePasse: hashedPassword
  });
  return await user.save();
}

// Mettre à jour un utilisateur
async function updateUser(id, data) {
  if (data.motDePasse) {
    data.motDePasse = await bcrypt.hash(data.motDePasse, 10);
  }
  return await User.findByIdAndUpdate(id, data, { new: true });
}

// Supprimer un utilisateur
async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};
