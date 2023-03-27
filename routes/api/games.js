const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', gamesCtrl.getAllGames);
router.post('/', gamesCtrl.addGame);


module.exports = router;