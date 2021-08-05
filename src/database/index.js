const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const UsersEstablishment = require('../models/UsersEstablishment');
const Adresses = require('../models/Adresses');
const DeliveryMaker = require('../models/DeliveryMaker');

const connection = new Sequelize(dbConfig);

UsersEstablishment.init(connection)
Adresses.init(connection)
DeliveryMaker.init(connection)

Adresses.associate(connection.models)
UsersEstablishment.associate(connection.models)
DeliveryMaker.associate(connection.models)


module.exports = connection;