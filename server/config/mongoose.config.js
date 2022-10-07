const mongoose = require('mongoose')
const db = 'team-manager'

mongoose.connect('mongodb://127.0.0.1/' + db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Successfully connected to MongoDB database: ' + db + '.')
    })
    .catch(error => {
        console.error('Error connecting to MongoDB database: ' + error)
    })