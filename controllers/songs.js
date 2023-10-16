const Song = require('../models/song');

module.exports = {
    index,
};

async function index(req, res) {
    const songs = await Song.find({});
    res.render('songs/index', { title: 'All Posts', songs});
}