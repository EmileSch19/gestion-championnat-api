const express = require('express');
const router = express.Router();
const teamChampionshipController = require('../controllers/teamChampionShipController');

router.post('/', teamChampionshipController.createTeamChampionship);
router.get('/', teamChampionshipController.getAllTeamChampionships);
router.delete('/:id', teamChampionshipController.deleteTeamChampionship);

module.exports = router;
