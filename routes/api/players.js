const express = require('express');
const router = express.Router();
const playersCtrl = require('../../controllers/api/players');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', playersCtrl.addPlayer);

module.exports = router;