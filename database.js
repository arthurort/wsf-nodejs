const Sequelize = require('sequelize');

const environment = process.env.NODE_ENV || 'development';
const config = require('./config')[environment];

//export de l'instance et les types ORM.
module.exports = {
    instance: new Sequelize(config),
    type: Sequelize
};
