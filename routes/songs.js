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
// edit song posts if user signed in (goes to new page)
// GET /:id/edit
router.get('/:id/edit', ensureLoggedIn, songsCtrl.edit);
// handle the updated edit song post form after submitted 
// must be signed in 
// PUT /:id
router.put('/:id', ensureLoggedIn, songsCtrl.update);
// delete post 
// DELETE /songs/:id
// router.delete('/:id', ensureLoggedIn, songsCtrl.delete);

module.exports = router;
