const mongoose = require('mongoose')
const URI = process.env.URI

mongoose.connect(URI).then(() => {
    console.log(`DATABASE CONNECTED `)
})
.catch(err => {
    console.log('mongodb error', err)
    process.exit(1)
})