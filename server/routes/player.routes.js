const PlayerController = require('../controllers/player.controller')

module.exports = app => {
    app.get('/api/players', PlayerController.getAll)
    app.get('/api/players/:id', PlayerController.getOne)
    app.post('/api/players', PlayerController.create)
    app.delete('/api/players/:id', PlayerController.delete)
}