const mongoose = require('mongoose');
//shortcut for mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    userName: String,
    userAvatar: String,
},  {
    timestamps: true
});

const songSchema = new Schema({
    title: {
        type: String,
    },
    artist: {
        type: String,
    },
    caption: {
        type: String,
    }, 
});

module.exports = mongoose.model('Song', songSchema);