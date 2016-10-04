//require database
const database = require('../../database');

//define user model.
module.exports = database.instance.define('user', {
    username: {
        type: database.type.STRING,
        unique: true,
        allowNull: false
    }
});
