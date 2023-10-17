const Song = require('../models/song');

module.exports = {
    create,
};

async function create(req, res) {
    const song = await Song.findById(req.params.id);
    // user-centric data into req.body
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    // pushing subdocs in Mongoose array
    song.comments.push(req.body);
    try {
        await song.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/songs/${song._id}`);
}