const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', gamesCtrl.getAllGames);
router.post('/', gamesCtrl.addGame);
router.get('/:id', gamesCtrl.getGame)
router.put('/:id', gamesCtrl.saveGame);

module.exports = router;