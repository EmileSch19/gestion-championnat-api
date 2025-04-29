// Importation des modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const countryRoutes = require('./routes/countryRoutes');
const teamRoutes = require('./routes/teamRoutes');
const championshipRoutes = require('./routes/championshipRoutes');
const dayRoutes = require('./routes/dayRoutes');
const teamChampionshipRoutes = require('./routes/teamChampionShipRoutes');
const gameRoutes = require('./routes/gameRoutes');


// Initialisation
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/championships', championshipRoutes);
app.use('/api/days', dayRoutes);
app.use('/api/teamchampionships', teamChampionshipRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/auth', authRoutes);
 // Pour lire le JSON dans les requêtes

// Routes de test
app.get('/', (req, res) => {
  res.send('API Gestion Championnat est en ligne ');
});

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connexion à MongoDB réussie'))
.catch((err) => console.error('❌ Erreur de connexion MongoDB:', err));

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
