const mongoose = require('mongoose')

const PlayerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Player Name is required.'],
        minLength: [2, 'Player Name must be at least 2 characters long.'],
        trim: true
    },
    preferred_position: {
        type: String,
        required: false,
        trim: true,
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Player', PlayerSchema)