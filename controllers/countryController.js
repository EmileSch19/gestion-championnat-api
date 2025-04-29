const Country = require('../models/country');

// Créer un pays
exports.createCountry = async (req, res) => {
  try {
    const newCountry = new Country(req.body);
    await newCountry.save();
    res.status(201).json(newCountry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Récupérer tous les pays
exports.getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer un pays par ID
exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    if (!country) return res.status(404).json({ error: 'Pays non trouvé' });
    res.json(country);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un pays
exports.updateCountry = async (req, res) => {
  try {
    const updated = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer un pays
exports.deleteCountry = async (req, res) => {
  try {
    await Country.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pays supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
