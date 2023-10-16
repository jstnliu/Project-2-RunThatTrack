const express = require('express');
const router = express.Router();
const songsCtrl = require('../controllers/songs')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// all songs index page
router.get('/', songsCtrl.index);
// new post form
// GET /songs/new
router.get('/new', ensureLoggedIn, songsCtrl.new);
// show individual song post
// GET /songs/:id 
router.get('/:id', songsCtrl.show);
// create post
// POST /songs
router.post('/', ensureLoggedIn, songsCtrl.create);


module.exports = router;
