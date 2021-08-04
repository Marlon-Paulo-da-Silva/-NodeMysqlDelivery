const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const UsersEstablishment = require('../models/UsuarioEstablishment');
const Adresses = require('../models/Adresses');

const connection = new Sequelize(dbConfig);

UsersEstablishment.init(connection)
Adresses.init(connection)

Adresses.associate(connection.models)
UsersEstablishment.associate(connection.models)


module.exports = connection;