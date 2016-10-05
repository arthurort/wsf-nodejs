//require database
const database = require('../../database');

//define user model.
module.exports = database.instance.define('user', {
    username: {
        type: database.types.STRING,
        unique: true,
        allowNull: false,
        validate: {
            min: 3,
            max: 30,
            is: ['^[]a-z0-9]+$', 'i']
        }
    },
    first_name: {
        type: database.types.STRING
    },
    first_name: {
        type: database.types.STRING
    },
    last_name: {
        type: database.types.STRING
    },
    password: {
        type: database.types.STRING,
        allowNull: false
    },
    email: {
        type: database.types.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    biography: {
        type: database.types.TEXT,
        validate: {
            max: 400
        }
    }
}, {
    underscored: true
});
