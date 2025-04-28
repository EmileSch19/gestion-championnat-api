const express = require('express');
const router = express.Router();
const championnatController = require('../controllers/championnatController');

// Routes Championnat
router.get('/', championnatController.getAllChampionnat);
router.get('/:id', championnatController.getChampionnatById);
router.post('/', championnatController.createChampionnat);
router.put('/:id', championnatController.updateChampionnat);
router.delete('/:id', championnatController.deleteChampionnat);

module.exports = router;
