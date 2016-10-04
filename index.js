//Nouveau serveur Hapi
const Hapi = require('hapi');
const server = new Hapi.Server();

//dependance externer
const ejs = require('ejs');


//plugins externes et API propres

const plugins = [
    require('vision'),
    require("./apis/users")
];



//création d'une nouvelle connexion Hapi. Utilise les envvar si présentes.

server.connection({
    host: process.env.HOST || process.env.HOTSNAME || 'localhost',
    port: process.env.PORT || 8010
});

//enregistrement des plugins. Une fois fait, configuration des views engine et démarrage du serveur.
server.register(plugins, err => {
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

server.start(err => {
    if (err) {
        throw new Error(err);
    }
    console.log('Server running at:', server.info.uri);
});
