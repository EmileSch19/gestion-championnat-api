const express = require('express');
const router = express.Router();
const championshipController = require('../controllers/championshipController');

router.post('/', championshipController.createChampionship);
router.get('/', championshipController.getAllChampionships);
router.get('/:id', championshipController.getChampionshipById);
router.put('/:id', championshipController.updateChampionship);
router.delete('/:id', championshipController.deleteChampionship);

module.exports = router;
