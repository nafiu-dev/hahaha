const mongoose = require('mongoose')

let PostSchema = new mongoose.Schema({
    UserId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'user',
        // required: true
        
        type: String,
        default: "no id for now"
    },
    post_image: {
        type: String,
        default: '/public/uploads/default.jpg'
    },
    title: {
        type: String,
    },
    likes: {
        type: Array
    },
    created_at:{
        type: Date,
        default: Date.now
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})


PostSchema.virtual('comments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'PostId',
    justOne: false
})


module.exports = mongoose.model('post', PostSchema)
