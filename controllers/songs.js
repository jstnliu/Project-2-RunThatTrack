const Song = require('../models/song');

module.exports = {
    index,
    new: newSong,
    create,
    show,
    edit,
    update,
};

async function index(req, res) {
    const songs = await Song.find({});
    res.render('songs/index', { title: 'All Posts', songs});
}

async function newSong(req, res) {
    res.render('songs/new', { title: 'Create a Song Post', errorMsg: '' });
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    try {
        // Update this line because now we need the _id of the new movie
        const song = await Song.create(req.body);
        // Redirect to the new movie's show functionality 
        res.redirect(`/songs/${song._id}`);
      } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('songs/new', { errorMsg: err.message });
      }
}

async function show(req, res) {
    const song = await Song.findById(req.params.id);
    // const user = await User.find({ user: user._id })
    res.render('songs/show', { 
        title: 'The Rundown', 
        song, 
    })
}

async function edit(req, res) {
    const song = await Song.findById(req.params.id);
    res.render('songs/edit', {
        title: 'Changed Your Mind on Something?',
        song,
    });
}

async function update(req, res) {
    const updatedSong = await Song.updateOne({ _id: req.params.id }, req.body);
        try {
            await updatedSong
        } catch (err) {
            console.log(err)
        }
    res.redirect(`/songs/${req.params.id}`)
}

