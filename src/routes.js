const express = require('express');
const UsersEstablishmentController = require('./controllers/UsersEstablishmentController');
const AdressesController = require('../src/controllers/AdressesController');

const routes = express.Router();

routes.post('/usersestablishment', UsersEstablishmentController.store);
routes.get('/usersestablishment', UsersEstablishmentController.index);

routes.post('/usersestablishment/:user_estabishment_id/adresses', AdressesController.store);
routes.get('/usersestablishment/:user_estabishment_id/adresses', AdressesController.index);

module.exports = routes;