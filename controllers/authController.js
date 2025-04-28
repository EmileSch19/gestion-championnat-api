const authService = require('../services/authService');

// Login
async function login(req, res) {
  try {
    const { email, motDePasse } = req.body;
    const { token, user } = await authService.login(email, motDePasse);
    res.json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { login };
