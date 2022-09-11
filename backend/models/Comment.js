const mongoose = require('mongoose');

let CommentSchema = new mongoose.Schema({
    PostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true
    },
    UserId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'user',
        // required: true
        
        type: String,
        default: "no id for now"

    },
    comment: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('comment', CommentSchema)
