const router = require('express').Router()

// models
const User = require('../models/User')
const Post = require('../models/Posts')
const Comment = require('../models/Comment')

//middleware
const upload = require('../middleware/upload')

// get all the posts
router.get('/posts', async (req, res) => {
    try {
        const posts  = await Post.find().populate('comments')
        res.status(200).json({
            data: posts,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})




// create a post
router.post('/post', upload.single('file'),  async (req, res) => {
    try {

        const newPost = await Post.create({
            title: req.body.title,
            post_image: `/public/uploads/${req.file.filename}`
        })

        res.status(200).json({
            data: newPost,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})
   

// Detele Post
router.delete('/post/:id', async (req, res) =>{
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if (!post) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({ 
            success: true,
            data: {}
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


// get posts for explore page
router.get('/explore', async (req, res) => {
    try {
        const posts  = await Post.find().limit(50)
        res.status(200).json({
            data: posts,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


// add comments to a post
router.post('/post/comment/:id', async (req, res) => {
    try {
        // const post = await Post.findById()

        const comment = await Comment.create({
            PostId: req.params.id,
            comment: req.body.comment
        })
        
        if (!comment) {
            return res.status(400).json({
                success: false
            })
        }

        
        res.status(200).json({
            data: comment,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})




module.exports = router 