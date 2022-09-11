const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })
require('./config/db')
app.use(express.json())
app.use('/public',express.static('public'))


// ROUTES
app.use('/api/v1', require('./routes/user'))
app.use('/api/v1', require('./routes/posts'))



PORT  = process.env.PORT
app.listen(PORT, console.log(`SERVER RUNNING ON PORT: ${PORT}`))