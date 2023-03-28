const express = require('express');
const router = express.Router();
const playersCtrl = require('../../controllers/api/players');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', playersCtrl.getAllPlayers);
router.post('/', playersCtrl.addPlayer);
router.get('/:id', playersCtrl.getPlayer);

module.exports = router;