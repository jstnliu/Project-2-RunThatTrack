const mongoose = require('mongoose');
//shortcut for mongoose.Schema class
const Schema = mongoose.Schema;

const songsSchema = new Schema({
    title: {
        type: String,
    },
    artist: {
        type: String,
    },
    caption: {
        type: String,
    }, 
})

module.exports = mongoose.model('Song', songsSchema);