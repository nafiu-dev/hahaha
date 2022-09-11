const mongoose = require('mongoose')
const URI = process.env.URI

mongoose.connect(URI, {
    // useNewUrlParser: false,
    // useCreateIndex: false,
    // useUnifiedTopology: false,
    // useFindAndModify: false
}).then(() => {
    console.log(`DATABASE CONNECTED `);
})
.catch(err => {
    console.log('mongodb error', err);
    process.exit(1);
})