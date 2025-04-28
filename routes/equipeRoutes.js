const express = require('express');
const router = express.Router();
const equipeController = require('../controllers/equipeController');

// Routes Équipe
router.get('/', equipeController.getAllEquipe);
router.get('/pays/:paysId', equipeController.getEquipeByPays);
router.get('/championnat/:championnatId', equipeController.getEquipeByChampionnat);
router.get('/:id', equipeController.getEquipeById);
router.post('/', equipeController.createEquipe);
router.put('/:id', equipeController.updateEquipe);
router.delete('/:id', equipeController.deleteEquipe);

module.exports = router;
