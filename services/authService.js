const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Connexion de l'utilisateur
async function login(email, motDePasse) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Email invalide');
  }

  const isMatch = await bcrypt.compare(motDePasse, user.motDePasse);
  if (!isMatch) {
    throw new Error('Mot de passe invalide');
  }

  const payload = { id: user._id, email: user.email, role: user.role };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

  return { token, user };
}

module.exports = { login };
