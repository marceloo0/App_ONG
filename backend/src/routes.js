const express = require('express')

const OngController = require('./Controllers/OngController')
const CasosController = require('./Controllers/CasosController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')


const routes = express.Router()

routes.post('/sessions', SessionController.store)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/profile', ProfileController.index)

routes.post('/casos', CasosController.store)
routes.get('/casos', CasosController.index)
routes.delete('/casos/:id', CasosController.delete)

module.exports = routes  