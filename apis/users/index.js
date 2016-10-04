//require database
const database = require('../../database');

//define user model.
const User = database.instance.define('user', {
    username: {
        type: database.type.STRING,
        unique: true,
        allowNull: false
    }
});

//export the user AOU with its own routes

exports.register = function(server, options, next) {
    server.route({
        method: 'POST',
        path: '/user',
        handler: (request, reply) => {
            const data =
                request.payload  ||
                request.query ||
                request.params;

            User.create(data)
                .then(user => {
                    return reply.view('index', user.dataValues);
                });
        }
    });

    server.route({
        method: 'GET',
        path: '/user',
        handler: (request, reply) => {
            User.findAll()
                .then(result => {
                    return reply(result);

                })
        }
    });
    next();

};

exports.register.attributes = {
    name: 'users',
    version: '1.0.0'
};
