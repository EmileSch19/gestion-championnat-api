const express = require('express');
const router = express.Router();
const resultatController = require('../controllers/resultatController');

// Routes Résultat
router.get('/', resultatController.getAllResultat);
router.get('/championnat/:championnatId', resultatController.getResultatByChampionnat);
router.get('/:id', resultatController.getResultatById);
router.post('/', resultatController.createResultat);
router.put('/:id', resultatController.updateResultat);
router.delete('/:id', resultatController.deleteResultat);

module.exports = router;
