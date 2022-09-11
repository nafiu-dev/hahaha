const router = require('express').Router()

// models
const User = require('../models/User')

router.get('/user', async (req, res) => {
    try {
       return res.json('works') 
    } catch (err) {
        console.log(err)
    }
})




module.exports = router 