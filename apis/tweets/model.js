//require database
const database = require('../../database');

//define user model.
module.exports = database.instance.define('tweet', {
    username: {
        type: database.types.TEXT,
        allowNull: false,
        validate: {
            min: 1,
            max: 140
        }
    }
}, {
    underscored: true,
    calssMethods: {
        associate: models => {
            models.Tweet.belongsTo(models.User);
        }
    }
});
