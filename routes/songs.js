const express = require('express');
const router = express.Router();
const songsCtrl = require('../controllers/songs')

// all songs index page
router.get('/', songsCtrl.index);

module.exports = router;
