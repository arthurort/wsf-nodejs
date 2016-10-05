/**
 * **connect to the database
 */

const database = require('./database');

/**
 * Add models
 */
const models = {
    User: require('./apis/tweets/model'),
    Tweet: require('./apis/users/model')
}

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

/**
 * Sync the database
 */
database.instance.sync()
    .then(() => {
        console.log('Syncing database ...');
    })
    .catch(err => {
        throw new Error(err);
    })
