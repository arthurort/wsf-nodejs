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
