const Song = require('../models/song');

module.exports = {
    create,
    delete: deleteComment,
};

function deleteComment(req, res, next) {
    Song.findOne({
        'comments._id': req.params.id,
        'comments.user': req.user._id,
    }).then ((song) => {
        if (!song) return res.redirect('/songs');
        song.comments.remove(req.params.id);
        song.save().then(() => {
            res.redirect(`/songs/${song._id}`);
        }).catch((err) => {
            return next(err);
        });
    });
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
};
