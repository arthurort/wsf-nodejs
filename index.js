const Hapi = require('hapi');
const server = new Hapi.Server();

const _ = require('lodash');
const ejs = require('ejs');
const Sequelize = require('sequelize');

const plugins = {
    vision: require('vision')
};

const environment = process.env.NODE_ENV || 'development';
const config = require('./config')[environment];
const toto = {
    test: "hello"
};

// const configB = _.merge(config,toto);
// console.log(configB);

const database = new Sequelize(config);

database.authenticate()
    .then(() => {
        console.log('Hello');
    })
    .then(() => {
        console.log('Arthur');
    })
    .catch(err => {
        console.log('Err', err);
    });

const User = database.define('user', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

// database.sync()
// 	.then(() => {
// 		console.log('Syncing ...');
// 	})
// 	.catch(err => {
// 		throw new Error(err);
// 	})

server.connection({
    host: process.env.HOST || process.env.HOTSNAME || 'localhost',
    port: process.env.PORT || 8010
});

server.register(plugins.vision, err => {
    if (err) {
        throw new Error(err);
    }

    server.views({
        engines: {
            ejs: ejs
        },
        relativeTo: __dirname,
        path: 'views'
    });
});

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
            .then(result =>{
                return reply(result);

        })
    }
})

server.start(err => {
    if (err) {
        throw new Error(err);
    }
    console.log('Server running at:', server.info.uri);
});
