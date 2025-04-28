const express = require('express');
const router = express.Router();
const journeeController = require('../controllers/journeeController');

// Routes Journée
router.get('/', journeeController.getAllJournee);
router.get('/championnat/:championnatId', journeeController.getJourneeByChampionnat);
router.get('/:id', journeeController.getJourneeById);
router.post('/', journeeController.createJournee);
router.put('/:id', journeeController.updateJournee);
router.delete('/:id', journeeController.deleteJournee);

module.exports = router;
