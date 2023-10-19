const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// handle edit comment page redirect
// GET /comments/:id/edit
router.get('/comments/:id/edit', ensureLoggedIn, commentsCtrl.edit);
// handle updated comment submission
// PUT /comments/:id 
router.put('/comments/:id', ensureLoggedIn, commentsCtrl.update)
// posting a comment if signed-in
// POST /songs/:id/comments
router.post('/songs/:id/comments', ensureLoggedIn, commentsCtrl.create);
// DELETE own comment if signed-in
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;