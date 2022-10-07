const Player = require('../models/player.model')

module.exports = {
    getAll: (request, response) => {
        Player.find({})
            .then(players => response.json(players))
            .catch(error => response.json(error))
    },

    getOne: (request, response) => {
        Player.findOne({ _id: request.params.id })
            .then(player => response.json(player))
            .catch(error => response.json(error))
    },

    create: (request, response) => {
        Player.create(request.body)
            .then(newPlayer => response.json(newPlayer))
            .catch(error => response.status(400).json(error))
    },

    delete: (request, response) => {
        Player.findOneAndDelete({ _id: request.params.id })
            .then(confirmation => response.json(confirmation))
            .catch(error => response.json(error))
    }
}