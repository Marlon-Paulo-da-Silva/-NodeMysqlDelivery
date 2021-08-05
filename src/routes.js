const express = require('express');
const UsersEstablishmentController = require('./controllers/UsersEstablishmentController');
const AdressesController = require('../src/controllers/AdressesController');
const DeliveryMakerController = require('../src/controllers/DeliveryMakerController');

const routes = express.Router();

routes.post('/usersestablishment', UsersEstablishmentController.store);
routes.get('/usersestablishment', UsersEstablishmentController.index);

routes.post('/usersestablishment/adresses', AdressesController.store);
routes.get('/usersestablishment/adresses', AdressesController.index);

routes.post('/deliverymakers', DeliveryMakerController.store);
routes.get('/deliverymakers', DeliveryMakerController.index);

routes.post('/usersestablishment/:user_establishment_id/deliverymakers', DeliveryMakerController.store);
routes.get('/usersestablishment/:user_establishment_id/deliverymakers', DeliveryMakerController.index);

module.exports = routes;