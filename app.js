// Importation des modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const paysRoutes = require('./routes/paysRoutes');
const championnatRoutes = require('./routes/championnatRoutes');
const equipeRoutes = require('./routes/equipeRoutes');
const journeeRoutes = require('./routes/journeeRoutes');
const resultatRoutes = require('./routes/resultatRoutes');
const authRoutes = require('./routes/authRoutes');


// Initialisation
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/pays', paysRoutes);
app.use('/api/championnats', championnatRoutes);
app.use('/api/equipes', equipeRoutes);
app.use('/api/journees', journeeRoutes);
app.use('/api/resultats', resultatRoutes);
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
