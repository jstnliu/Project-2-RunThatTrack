const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// posting a comment if signed-in
//POST /songs/:id/comments
router.post('/songs/:id/comments', ensureLoggedIn, commentsCtrl.create);

//DELETE own comment if signed-in
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;