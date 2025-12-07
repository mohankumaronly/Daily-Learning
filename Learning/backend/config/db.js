const mongoose = require('mongoose');

const DatabaseConnection =  (uri) => {
    mongoose.connect(uri)
        .then(() => {
            console.log('database is connected successfully');
        })
        .catch((err) => {
            console.log('database failed to connect', err);
        });
}

module.exports = DatabaseConnection;